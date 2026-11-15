# Arcana

A small, dependency-free tarot reading helper that runs entirely in the browser. Browse all 78 cards, build a hand, choose a spread, and read interpretations and combinations. It works offline after the first visit.

Repository: https://github.com/tMaxx/arcana

## AI-created content

This project was built with AI assistance. The code, card interpretations, and love/career/health texts were generated or heavily edited by an AI coding agent, then checked for consistency. It is labelled **AI:X** on the [0rwx](https://0rwx.com/) scale: the code was mostly written by AI and curated by a human who knows her shit in web design and IT. The readings are a starting point, not authoritative advice.

## Features

- **All 78 cards:** Major Arcana plus Wands, Cups, Swords and Pentacles, with upright and reversed meanings and keywords.
- **Artwork or symbols:** toggle between the public-domain 1909 Rider–Waite–Smith scans and the original CSS/SVG faces (`v`). Artwork is small WebP and lazy-loaded.
- **Reading contexts:** General, Love, Work & money and Health. The context buttons are multi-select for mixed questions; `c` cycles through single contexts. With two or more of Love, Work & money and Health active, an optional **Combined summary** blends exactly those areas.
- **Reading views:** **List** for arranging (compact rows, drag to move or clarify), **Layout** for the spread grid, and **Read**, a read-only view with the full text. A **Short / Deep** toggle switches between the short meanings and the long-form deep dives; it also applies to the card detail and combinations.
- **Clarifiers / double draws:** drag a card that is already in the hand onto another card to make it that card's clarifier. The moved card leaves its old slot empty, keeps its orientation and yes/no leaning, and counts toward combinations and the tally.
- **Yes / no leanings:** every card carries a yes, no or maybe leaning, with a tally in the hand.
- **Spreads:** Free hand, Single card, Past · Present · Future, Yes / No, Situation · Challenge · Advice, Relationship, Horseshoe and Celtic Cross. Cards fill positions in order, or click an empty position to choose a card for it.
- **Hand modal:** flip cards to reversed, drag one card onto another to clarify it, drag a position number to move a card to another slot, remove cards, fill an empty position, or copy the reading as text.
- **Combinations:** 42 authored pairs and triples plus automatic pattern checks (repeated ranks, court-heavy, major-heavy, suit-dominant, reversal-heavy). Active combinations show as compact lines while arranging and in full in the Read view.
- **Offline / PWA:** `manifest.webmanifest` and `sw.js` cache the app shell and artwork after the first visit.
- **Persistence:** the hand, spread, art mode, context and view are saved in `localStorage`.

## Quick start

Open `index.html` directly, or serve the folder with any static server:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Offline caching requires `http`/`https`, so use a local server if you want to test the PWA.

## Deployment

The repo is set up for GitHub Pages at **arcana.nmaxx.pl**:

- `CNAME` contains `arcana.nmaxx.pl`.
- GitHub Pages source: `main` branch, `/ (root)`.
- DNS: create a `CNAME` record for `arcana` pointing to `tmaxx.github.io.` (DNS-only in Cloudflare until GitHub issues the certificate).
- In the GitHub repo, open **Settings → Pages**, set the custom domain to `arcana.nmaxx.pl`, and enable **Enforce HTTPS** once the certificate is ready.

The app uses relative paths, so it also works from the default `https://tmaxx.github.io/arcana/` URL.

## Keyboard

| Key | Action |
| --- | --- |
| `/` | Focus search (`Esc` clears it) |
| `h` | Open or close the hand |
| `1` to `7` | Switch section |
| `←` `→` | Previous or next card (card view) |
| `a` | Add or remove the open card |
| `v` | Toggle artwork / symbols |
| `c` | Cycle single reading context (buttons allow multiple) |
| `Esc` | Close dialog |

## Project layout

| Path | Purpose |
| --- | --- |
| `index.html` | App shell, dialogs, script order |
| `css/style.css` | Dark/gold theme, card faces, spread grid, dialogs |
| `js/data.js` | Card structure only: suits, ranks, ids, names, keywords, `EXTRA` / `DEEP_READINGS` / `COMBINED_READINGS` registries |
| `js/extra/short.js` | Short upright / reversed meanings for all 78 cards |
| `js/extra/*.js` | Love / career / health texts, questions and yes/no leanings |
| `js/extra/deep/*.js` | Long-form readings per card and context |
| `js/extra/combined/*.js` | Combined summaries keyed by the selected areas |
| `js/spreads.js` | Spread definitions and grid positions |
| `js/combos.js` | Authored combinations and pattern rules |
| `js/app.js` | UI, state and event handling |
| `sw.js` | Service worker (shell + artwork caches) |
| `manifest.webmanifest` | PWA manifest |
| `img/cards/` | 78 WebP card scans |
| `tools/` | Asset generators and tests |

## Editing content

- `js/data.js`: card structure only — ids, names, glyphs, keywords and suit blurbs. All prose lives under `js/extra/`.
- `js/extra/short.js`: `SHORT_READINGS`, one `[upright, reversed]` pair per card.
- `js/extra/*.js`: each card's `EXTRA` entry has `love`, `career` and `health` (each `[upright, reversed]`), `question` and `yn` (`["yes"|"no"|"maybe", ...]`).
- `js/extra/deep/*.js`: `EXTRA[id].deep` with `general`, `love`, `career` and `health`, each `[upright, reversed]`.
- `js/extra/combined/*.js`: `EXTRA[id].combined` keyed by `love+career`, `love+health`, `career+health` and `love+career+health`. General never takes part.
- `js/spreads.js`: the `SPREADS` array. Each position has a name, hint, grid column/row, and an optional `rot` for crossing cards.
- `js/combos.js`: the `COMBOS` array. Each entry lists card ids, a kind (`good`, `warn` or `mixed`), a name, a short `text` and a `long` version for the Deep setting. Pattern rules are in `findPatterns`.
- `css/style.css`: palette variables are at the top.

`state.hand` is an array of `{ id, rev, clarifier? }` objects in spread-position order. A `null` entry means an empty spread position; a `clarifier` is an optional `{ id, rev }` second card attached to that position. `localStorage` keys are namespaced under `arcana.*`.

## Development

No build step and no dependencies. The data and app logic can be checked without a browser:

```sh
node tools/check-data.js
node tools/check-app.js
```

`check-data.js` verifies card/extra/artwork completeness, deep and combined text shapes, combo references and long texts, spread grid bounds and a `findCombos()` smoke test. `check-app.js` loads the real scripts in a small DOM stub and exercises spread slots, hand edits, views, contexts, depth and combinations.

Modern browsers with `<dialog>`, `:has()`, `color-mix()`, container queries and `cqw` units are required. Artwork is lazy-loaded, so screenshot tools may need to wait for images to decode.

## Acknowledgements

- **Claude Sonnet** — made the original build attempt. It crashed during an ambitious screenshot-based visual-testing run and burned through about $20 of traffic. RIP in screenshots; you tried.
- **Zed's coding agent (DeepSeek V4.1 Flash 1017)** — finished the requested features, added the health readings and Yes/No spread, fixed the empty-slot flow, wrote the tests, and kept the final visual pass to four screenshots.

## License

If you found this code or idea helpful, let me know lol.

## Credits

Card artwork: Pamela Colman Smith, 1909 (public domain), scans via Wikimedia Commons. Interpretations are condensed Rider–Waite–Smith readings, not quoted from a book. The AI:X badge is from the [0rwx](https://0rwx.com/) framework by Namtao Productions, released into the public domain (CC0).
