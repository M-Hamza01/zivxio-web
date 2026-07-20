---
title: "Why we built BillCheck: one app for every electricity bill in Pakistan"
date: "2026-07-19"
excerpt: "Pakistan has more than ten electricity distribution companies. We built BillCheck because we got tired of juggling separate websites for each one."
category: "Behind the Build"
---

Every household in Pakistan pays an electricity bill, and almost every household has, at some point, forgotten when it's due. Not because anyone's careless — but because checking a bill means remembering which DISCO you belong to, finding the right website, digging out your reference number, and hoping the site loads. If you have a second meter for a shop, or you're checking on behalf of your parents in another city, you're doing that twice, on two different websites. We built BillCheck because we went through this ourselves and got tired of it.

## The problem we kept running into

Pakistan's electricity distribution is split across more than ten separate companies — LESCO in Lahore, PESCO in Peshawar and most of KPK, IESCO around Islamabad and Rawalpindi, K-Electric in Karachi, and so on. Ten of them (LESCO, IESCO, PESCO, FESCO, MEPCO, GEPCO, HESCO, SEPCO, QESCO, and TESCO) actually share the same underlying government system, while K-Electric runs something completely different on its own.

None of them are built for someone managing more than one meter. There's no dashboard, no bill history you can scroll through, no reminder before your due date. You visit the site, type in a long reference number, squint at a page that hasn't been redesigned in years, and repeat every single month — for every meter you're responsible for.

We didn't think this needed a new bank account, a subscription, or a "smart home" ecosystem. It needed one honest thing: a single place to check any DISCO's bill, without creating an account, and without losing track of when it's due.

## Building it the boring, trustworthy way

The first decision we made was also the one we've stuck to the hardest: **BillCheck doesn't run a server that touches your bill data.** When you add a meter, your phone talks directly to your DISCO's own official website — the exact same page you'd land on if you typed the address into a browser yourself. We don't sit in the middle, we don't store your bill on a company server, and we don't need you to sign up for anything.

This made some things harder to build. Government bill portals aren't designed to be talked to by an app — they're built for a browser, session cookies, and a person clicking through a multi-step form. Getting each DISCO's site to hand over your bill reliably meant working through their actual page flow one request at a time.

K-Electric, in particular, taught us a sharp lesson: an overly aggressive retry loop during early testing tripped their anti-abuse system. We rebuilt that part from scratch — sensible cooldowns, a background check that backs off for weeks once it knows a new bill isn't due yet. If an app is going to sit between you and a utility company's website, it has an obligation to be a polite guest there, not a burden on infrastructure that millions of other people also depend on.

## What we actually prioritised

A few decisions shaped what BillCheck became:

**One app, every DISCO.** If you have to install a different app for every city, you haven't solved the problem — you've just moved it.

**No login, ever.** Every extra field between "I want to check my bill" and actually seeing it is a reason someone gives up. You add a meter with the number printed on your paper bill, and that's the entire setup.

**Notifications that actually save you money.** A due-date reminder isn't useful if it's generic. You can choose to be reminded 1, 2, 3, or 7 days ahead — because a week's notice matters more if you're paying in person than through an app, and everyone's routine is different.

**Usage you can actually understand.** A bar chart with no explanation is just decoration. BillCheck pairs the chart with a plain-language note — "your usage went up compared to last month" — because most people don't want to interpret a graph, they want the sentence the graph is trying to tell them.

## What's next

BillCheck is still young. Near-term we're working on clearer bill breakdowns for K-Electric users, better support for households managing several meters at once, and continued refinement of notification timing.

If you're tired of bookmarking a different government website for every meter you own, that's exactly the problem we built this to solve. BillCheck is free, doesn't ask you to sign up for anything, and works the same way whether you're checking a LESCO bill in Lahore or a K-Electric bill in Karachi.
