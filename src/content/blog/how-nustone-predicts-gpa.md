---
title: "How NUST One Predicts Your GPA"
date: "2026-08-25"
excerpt: "A full walkthrough of the math behind NUST One's GPA Predictor, Projected CGPA, and What-If tool — what it uses, what it assumes, and where it can go wrong."
category: "Behind the Build"
---

NUST One's Qalam tab shows a few numbers that aren't on Qalam itself: a **Predicted GPA**, a **Projected CGPA**, and a **What-If** score you can drag around per course. None of these are official - Qalam doesn't publish them, and NUST doesn't expose the raw ingredients (like your instructor's actual grading weights) anywhere we can scrape. This article explains exactly what each number means, how it's computed, and - just as importantly - where it's guessing.

If you just want the short version: **these are estimates based on your current graded work and NUST's typical grading conventions, not a guarantee.** Read on for the actual math.

## The four numbers, briefly

- **Current CGPA** - pulled directly from Qalam. Not calculated by NUST One at all.
- **Predicted GPA** - our estimate of the GPA you'll get *this semester*, based on how you're doing in each course right now.
- **Projected CGPA** - what your overall CGPA would become if the Predicted GPA above is exactly what you get.
- **What-If** - a manual override, per course, letting you type in a hypothetical final standing and see how it ripples through the Predicted GPA.

Everything below explains how the first two are actually computed, since those are where the real logic lives.

## Step 1: converting a percentage into a grade point

While NUST officially uses a relative grading system (curved based on class performance), it is impossible to perfectly predict a curve. To provide a reliable and safe baseline, our app uses a standard absolute conversion table for predictions:

| Percent        | Grade | Grade Point |
|----------------|-------|-------------|
| 85%+           | A     | 4.0         |
| 80–84%         | A-    | 3.7         |
| 75–79%         | B+    | 3.3         |
| 71–74%         | B     | 3.0         |
| 68–70%         | B-    | 2.7         |
| 64–67%         | C+    | 2.3         |
| 61–63%         | C     | 2.0         |
| 58–60%         | C-    | 1.7         |
| 54–57%         | D+    | 1.3         |
| 50–53%         | D     | 1.0         |
| Below 50%      | F     | 0.0         |

This table is fixed and isn't customizable within the app, serving as a conservative projection. Everything else in this article is about how we arrive at the *percent* that gets fed into this table for each course.

## Step 2: figuring out a course's current percentage

This is the part that actually needs explaining, because it's not just "average all your marks."

### Assessments get grouped by type

Every graded item Qalam shows you (a quiz, an assignment, a midterm, a final, an OHT, a project) gets sorted into a category based on its name. We look for keywords: "quiz", "assign", "mid", "final", "oht", "project", and "lab". This is a best-effort heuristic - if your instructor names something unusually (like "Checkpoint 1" instead of "Quiz 1"), it falls into a generic "Other" bucket instead of being miscategorized.

### Why grouping matters

Imagine a course with six quizzes and one final exam. A flat average across all seven items would let the quizzes - which are usually worth much less of your real grade - drown out the final, which usually carries far more weight. So instead of averaging every item equally, NUST One averages *within* each category first (all your quizzes together, all your assignments together, and so on), and only then combines the categories using weights.

### The default weights: NUST-typical ranges

Since Qalam doesn't expose your instructor's actual weighting scheme anywhere, NUST One defaults to typical ranges seen across NUST courses:

- Quiz: ~10-15%
- Assignments: ~5-10%
- Midterm(s)/OHTs: ~25-30%
- Final: ~40-50%
- Project (if present): ~10%

These are converted into a starting proportion for each category that's actually present in your course, then normalized so whatever categories you have sum to 100%. If your course has no assignments, for instance, that 5-10% doesn't just vanish - the remaining categories absorb it proportionally.

**These are almost certainly not your instructor's real numbers.** They're a reasonable starting point, not a fact about your specific course. See "Customizing your weightage" below for how to fix that.

### The Lecture/Lab split

Some NUST courses have a separate lab component - a Database Systems Lab alongside Database Systems, for example - that gets graded as its own bucket rather than blending into your lecture grade. If NUST One detects lab-related assessments in a course, it splits your course into two groups before doing anything else:

- **Lecture** - everything else (quizzes, assignments, mids, finals, projects)
- **Lab** - lab quizzes, lab work, lab midterms, lab projects, anything with "lab" in the name

By default, this splits **75% Lecture / 25% Lab** - a common pattern, but genuinely **not concrete**. Different courses weight their lab component differently. This split is fully editable per course (see below).

Each group is computed independently using the category-weighting described above, and then the two group percentages are combined using the Lecture/Lab split to get your course's overall percent.

### A worked example

Say your Database Systems course (no lab) has these graded items:

- Quiz 1: 8/10, Quiz 2: 9/10 → Quiz average: 85%
- Assignment 1: 18/20 → Assignment average: 90%
- Midterm: 32/50 → Midterm average: 64%
- (Final not graded yet)

With no Final graded yet, only Quiz/Assignment/Midterm are "present." Using the default proportions (Quiz ~12.5, Assignment ~7.5, Mid ~27.5, normalized since Final and Project aren't present):

```
Quiz weight:      12.5 / (12.5+7.5+27.5) = 26.3%
Assignment weight: 7.5 / (12.5+7.5+27.5) = 15.8%
Mid weight:       27.5 / (12.5+7.5+27.5) = 57.9%

Course percent = 85% × 0.263 + 90% × 0.158 + 64% × 0.579
              ≈ 22.4 + 14.2 + 37.1
              ≈ 73.7%
```

That's a B (71-74%) under the grade table above - noticeably different from a flat average of all four numbers (85, 90, 64 → 79.7%, a B+). This is exactly the distortion category-weighting is meant to avoid: an unweighted average would have let two 90%-ish quizzes and an assignment outweigh a mediocre midterm.

### Ungraded assessments don't count

Qalam lists an assessment's name (and total marks) as soon as an instructor creates it - often well before it's actually graded. If we treated an ungraded item as a real "0", every course would look artificially terrible the moment an instructor added a placeholder for an upcoming exam. NUST One detects this: if an assessment's class average is exactly 0, we treat it as "not graded yet" and exclude it entirely from every calculation, rather than counting it as a zero.

### Handling in-progress courses (Scaling)

What happens if only your Midterm (30%) and Quizzes (10%) are graded? That’s only 40% of the course weight. If you scored perfectly, you’d have 40 absolute points, which looks like an "F" on the grading table. To fix this, NUST One normalizes your score against only the items that have been graded. It asks: "Out of the 40% possible weight available so far, what percentage did you secure?" It mathematically scales your current performance up to 100%, projecting what your final grade will be if you keep performing at your exact current level.

## Step 3: customizing your weightage

Since the defaults above are just typical ranges, NUST One lets you enter your actual course's weighting scheme. Open any course, use the "..." menu (or the "Improve prediction accuracy" prompt on the Grades tab), and you can:

- Set an exact weight for each category present in that course
- Add a category the default heuristic doesn't recognize (e.g. "Presentation", "Viva")
- Remove a category that doesn't apply
- Adjust the Lecture/Lab split itself, if the course has a lab

These entries are saved on your device and used from then on for that course, replacing the NUST-typical defaults. You don't need your weights to add up to exactly 100 - NUST One normalizes automatically against whatever you've entered.

## Step 4: the semester Predicted GPA

Once every course has a percent (default or customized), NUST One converts each to a grade point (the table from Step 1) and combines them, weighted by credit hours:

```
Predicted GPA = Σ(grade point × credit hours) / Σ(credit hours)
```

A 3-credit-hour course pulls roughly three times as much weight as a 1-credit-hour course, matching how GPA actually works.

## Step 5: Projected CGPA

This extends the same idea across your whole academic record, not just this semester:

```
Projected CGPA = (Current CGPA × completed credit hours + Predicted GPA × this semester's credit hours)
                  / (completed credit hours + this semester's credit hours)
```

This is a standard "quality points" blend - the same math Qalam itself uses to compute your CGPA from every semester's GPA. Your prior completed credit hours come straight from Qalam's own "Earned Cr" figure on your dashboard.

## The What-If predictor

The What-If slider on each course's Grades tab lets you type in a hypothetical final percentage for that course - "what if I end up at 80% instead of my current 73.7%?" - and see how that would shift the semester Predicted GPA, without touching any of your real graded data. It's scratch space: closing the course or resetting the slider goes right back to your real, computed standing.

## A second, separate signal: class average

Separately from all the above, NUST One shows how you're trending versus the class average. This isn't just a simple average of differences—the app takes the class average for every graded item and runs it through the exact same category-weighting algorithm used for your own score. It then compares your true weighted percentage against the class's true weighted percentage. This exists because NUST doesn't always grade absolutely.

## What this can't do

To be direct about the limits:

- **It assumes absolute grading.** If your course is curved, the real grade you get may differ meaningfully from what this predicts.
- **The default weights are typical, not yours**, until you enter your real ones.
- **Assessment categorization is a keyword guess.** An unusually-named assessment lands in a generic bucket instead of being miscategorized outright, but it's still a guess.
- **Projected CGPA depends on Qalam's own "Earned Cr" figure** being accurate and present on your dashboard - if it's missing, Projected CGPA falls back to matching your Current CGPA rather than guessing.
- **None of this is official.** Qalam and NUST's own systems are always the source of truth for your actual grades.

If you've read this far - thanks for actually caring how the math works. If you spot a course where this is way off, it's very likely a weightage question: open that course and set your real percentages.
