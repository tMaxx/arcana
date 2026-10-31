# Arcana: tarot reading helper

A small static web app. No build step, no dependencies, no external services.

## Status

Feature-complete for the requested scope:

- 78 cards with upright/reversed meanings and keywords.
- Real 1909 Rider–Waite–Smith artwork, with the original CSS/SVG symbol faces kept as an option.
- Reading contexts: General, Love, Work & money and Health.
- Yes/no leanings and a hand tally.
- Eight spreads, including Single, Past · Present · Future, Yes / No, Relationship and Celtic Cross.
- Combinations database plus automatic pattern checks.
- PWA/offline support.

The data and app logic are covered by two non-visual checks (see [Tests](#tests)). The repository is at `git@github.com:tMaxx/arcana.git` (branch `main`).

Last verified: 2026-10-31 — both test scripts pass; visual pass on the artwork grid, symbols grid, Health detail and Yes/No layout.

## Run

Open `index.html` directly, or serve the folder with any static server:

```sh
python3 -m http.server 8000
```

To host it, upload the folder as-is (GitHub Pages, Netlify, S3, and so on). The service worker only registers over `http`/`https`, so use a local server if you want to test offline mode.

## Features

- **All 78 cards:** Major Arcana plus Wands, Cups, Swords and Pentacles, with upright and reversed meanings and keywords.
- **Card art:** toggle between the public-domain 1909 Rider–Waite–Smith scans and the original CSS/SVG symbol faces (`v`). Artwork is small WebP, lazy-loaded.
- **Reading contexts:** General, Love, Work & money and Health (`c` cycles). Each card has context-specific upright and reversed text.
- **Yes / no leanings:** every card carries a yes, no or maybe leaning, with a tally in the hand.
- **Spreads:** Free hand, Single card, Past · Present · Future, Yes / No, Situation · Challenge · Advice, Relationship, Horseshoe and Celtic Cross. Cards fill positions in order, or click an empty position to choose a card for it; the hand can show a list or the spread layout.
- **Hand modal:** flip cards to reversed, reorder them, remove them, fill an empty position, or copy the reading as text.
- **Combinations:** a static database in `js/combos.js` (42 pairs and triples) plus automatic pattern checks (repeated ranks, court-heavy, major-heavy, suit-dominant, reversal-heavy). Active combinations show up in the hand modal.
- **Extras:** astrological correspondences, a reflective question per card, and a health disclaimer.
- **Offline / PWA:** `manifest.webmanifest` and `sw.js` cache the app shell and artwork after the first visit.
- **Persistence:** the hand, spread, art mode, context and view are saved in `localStorage`.

## Keyboard

| Key | Action |
| --- | --- |
| `/` | Focus search (`Esc` clears it) |
| `h` | Open or close the hand |
| `1` to `7` | Switch section |
| `←` `→` | Previous or next card (card view) |
| `a` | Add or remove the open card |
| `v` | Toggle artwork / symbols |
| `c` | Cycle reading context |
| `Esc` | Close dialog |

## File map

| Path | Purpose |
| --- | --- |
| `index.html` | App shell, dialogs, script order |
| `css/style.css` | Dark/gold theme, card faces, spread grid, dialogs |
| `js/data.js` | 78 cards, suits, ranks, `EXTRA` registry |
| `js/extra/major.js` | Love/career/question/yes-no content for the Major Arcana |
| `js/extra/minor-wands-cups.js` | Same for Wands and Cups |
| `js/extra/minor-swords-pentacles.js` | Same for Swords and Pentacles |
| `js/extra/health.js` | Health readings for all 78 cards |
| `js/spreads.js` | `SPREADS` definitions and grid positions |
| `js/combos.js` | Authored combinations and pattern rules |
| `js/app.js` | All UI, state and event handling |
| `sw.js` | Service worker (shell + artwork caches) |
| `manifest.webmanifest` | PWA manifest |
| `icons/` | App icons |
| `img/cards/` | 78 WebP card scans |
| `tools/fetch-art.py` | One-off artwork downloader (requires Pillow) |
| `tools/make-icons.py` | One-off icon generator (requires Pillow) |
| `tools/check-data.js` | Content/asset integrity test |
| `tools/check-app.js` | Non-visual app/hand/spread smoke test |

## Data model and editing

- `js/data.js`: card text, keywords and suit blurbs. Cards are built from `MAJOR_DATA` and `MINOR_DATA`.
- `js/extra/*.js`: each card's `EXTRA` entry has `love`, `career`, `health` (each `[upright, reversed]`), `question` and `yn` (`["yes"|"no"|"maybe", ...]`).
- `js/spreads.js`: the `SPREADS` array. Each position has a name, hint, grid column/row, and an optional `rot` for crossing cards.
- `js/combos.js`: the `COMBOS` array. Each entry lists card ids, a kind (`good`, `warn` or `mixed`), a name and a text. Pattern rules are in `findPatterns`.
- `css/style.css`: palette variables are at the top.

`state.hand` is an array of `{ id, rev }` objects in spread-position order. A `null` entry means an empty spread position; it is persisted so cards stay in their slots. Switching to the Free hand spread compacts the array.

`localStorage` keys are namespaced under `arcana.*` in `js/app.js`.

Major Arcana glyphs are the Golden Dawn astrological correspondences. Meanings follow the common Rider–Waite–Smith tradition. Health readings are symbolic wellbeing themes, **not medical advice**.

## Tests

The data layer and app logic can be checked without a browser:

```sh
node tools/check-data.js
node tools/check-app.js
```

`check-data.js` verifies card/extra/artwork completeness, combo references, spread grid bounds and a `findCombos()` smoke test. `check-app.js` loads the real scripts in a small DOM stub and exercises spread slots, hand edits, contexts and combinations.

Both are plain Node scripts with no dependencies. They are the preferred regression check when editing content or hand/spread logic.

### Visual checks

There is no committed screenshot harness. For a one-off visual check, copy `index.html` to a temporary file, add a setup script that calls the global functions (`setTab`, `setArt`, `setCtx`, `setSpread`, `toggleCard`, `setView`, `openHand`, `openDetail`), and force `img.art-img` to eager loading before the load event. Keep the number of shots small; artwork is lazy-loaded.

## PWA / offline

- `sw.js` precaches the shell and all 78 artwork files.
- Shell requests are network-first with a cache fallback; artwork is cache-first.
- Bump `VERSION` in `sw.js` when changing shell files or artwork so clients drop old caches.
- The service worker only registers over `http`/`https`; `file://` still works but without offline caching.

## Browser support

Modern browsers with `<dialog>`, `:has()`, `color-mix()`, container queries and `cqw` units. There is no build step or transpilation.

## Handoff notes

- **Repository:** `git@github.com:tMaxx/arcana.git`, branch `main`. The initial commit contains the full app and tests.
- **`js/app.js` is the only app script.** The old `js/_app.js` test copy and the `_t*.html` screenshot harnesses were removed; do not recreate them unless you need a temporary visual fixture.
- **Artwork is lazy-loaded.** If you take screenshots, wait for images to decode or temporarily force eager loading; otherwise cards can appear blank.
- **Health content is symbolic.** Keep the disclaimer in the UI and copied readings if you edit `js/extra/health.js`.
- **Deferred work** is listed under [Future ideas](#future-ideas).

## Future ideas

Not implemented yet, kept here so they are not lost:

- **Per-card combination matrix:** replace or supplement the hand-written combo list with reusable suit, number and neighbouring-card rules.
- **Shareable link:** encode the hand in the URL hash, for example `#hand=fool,tower.r,star`, so a reading can be bookmarked or sent without a backend.
- **Random draw:** a “Draw N cards” button with a shuffle and optional random reversals.

## License

If you found this code or idea helpful, let me know lol.

## Credits

Card artwork: Pamela Colman Smith, 1909 (public domain), scans via Wikimedia Commons. Interpretations are condensed Rider–Waite–Smith readings, not quoted from a book.
