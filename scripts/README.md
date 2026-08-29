# Live app stats

`rating`, `ratingCount`, and `installs` for each app in `src/lib/site-config.ts`
are kept fresh automatically instead of being hand-edited.

## How it works

1. `scripts/update-app-stats.mjs` fetches each app's public Play Store
   listing (via the unofficial `google-play-scraper` package — there's no
   official free API that returns aggregate rating/install figures) and
   writes the result to `src/data/app-stats.json`.
2. `src/lib/site-config.ts` imports that JSON at build time and merges it
   over the hand-written fallback values in `appDefaults`. Only
   `rating` / `ratingCount` / `installs` are ever overridden this way —
   descriptions, features, and FAQs always come from `site-config.ts`
   itself and can't be touched by the script.
3. `.github/workflows/update-app-stats.yml` runs the script once a day and
   commits `src/data/app-stats.json` if the numbers changed.

This means: the site is never scraping Play Store on a live page request
(that would be slow, unreliable, and unfriendly to Google's servers) — it's
reading a small, version-controlled JSON file that's refreshed offline on a
schedule.

## One-time setup

The script needs the `google-play-scraper` package, which isn't in
`package.json` yet:

```bash
npm install --save-dev google-play-scraper
```

Then add this line to `package.json`'s `"scripts"`:

```json
"update-stats": "node scripts/update-app-stats.mjs"
```

That's it — the GitHub Actions workflow will pick it up on its next
scheduled run, or you can trigger it immediately from the Actions tab
("Update app stats" → "Run workflow").

## Running it locally

```bash
npm run update-stats
```

## Adding a new app

Add its Play Store package name to the `APPS` map at the top of
`scripts/update-app-stats.mjs`:

```js
const APPS = {
  "nust-one": "com.zivxio.nustone",
  billcheck: "com.zivxio.billcheck",
  "your-new-app-slug": "com.zivxio.yournewapp",
};
```

Apps with `status: "coming-soon"` and no Play Store listing yet don't need
an entry — `site-config.ts` will just keep using their `appDefaults` values
(typically `rating: 0`, `installs: "—"`).

## If a fetch fails

The script keeps whatever was already in `app-stats.json` for that app
rather than zeroing it out, and only exits with an error code if *every*
app failed in the same run (a sign of a network/library issue, not a
one-off blip). A single flaky day won't show wrong numbers on the site or
break the build.

## Caveats (read once)

- This uses an **unofficial** scraper that parses the public listing page.
  It's free and has no API key, but it can break if Google changes that
  page's markup — if the workflow starts failing every day, check whether
  `google-play-scraper` has a newer version (`npm outdated`) before
  assuming your app data is wrong.
- Install counts on Play Store listings are shown as rounded ranges (e.g.
  "500+"), never exact numbers — that's a Play Store limitation, not a
  limitation of this script.
