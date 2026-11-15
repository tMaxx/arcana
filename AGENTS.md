# Agent notes — Arcana

- **Scope:** a static, dependency-free tarot helper in this folder. No build step. Checks: `node tools/check-data.js` and `node tools/check-app.js`.
- **Data format:** no backward compatibility or migration work is needed for the `arcana.*` `localStorage` keys or for the `EXTRA` / `DEEP_READINGS` / `COMBINED_READINGS` shapes. Change them freely and assume the current format; there is no user data worth preserving.
- **Text vs structure:** `js/data.js` holds card structure only (ids, names, glyphs, keywords, suits, ranks). All card prose lives in `js/extra/`: `short.js`, the context files, `deep/` and `combined/`. New text goes there, never into `data.js` or `app.js`.
- **Validation:** keep it cheap. Prefer the Node checks. If a screenshot is really needed, take one, crop it to the relevant area, save it as a small JPEG, and delete the files afterwards. Full-page PNG reads blow up the agent request limit.
