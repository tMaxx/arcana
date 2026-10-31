"use strict";

/* Service worker: makes the app work offline.
 * - App shell (HTML/CSS/JS/icons) is precached; requests are network-first so edits show up
 *   immediately when online, with the cache as the offline fallback.
 * - Card artwork is precached too and served cache-first.
 * Bump VERSION to force clients to drop old caches. */

const VERSION = "v2";
const SHELL_CACHE = `arcana-shell-${VERSION}`;
const ART_CACHE = `arcana-art-${VERSION}`;

importScripts("js/data.js"); // defines CARDS, used to list every artwork file

const SHELL = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/style.css",
  "js/data.js",
  "js/extra/major.js",
  "js/extra/minor-wands-cups.js",
  "js/extra/minor-swords-pentacles.js",
  "js/extra/health.js",
  "js/spreads.js",
  "js/combos.js",
  "js/app.js",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
];
const ART = CARDS.map((c) => `img/cards/${c.id}.webp`);

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const shell = await caches.open(SHELL_CACHE);
      await shell.addAll(SHELL);
      const art = await caches.open(ART_CACHE);
      // artwork is a nice-to-have: one failure must not break the install
      await Promise.allSettled(ART.map((url) => art.add(url)));
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keep = new Set([SHELL_CACHE, ART_CACHE]);
      for (const key of await caches.keys()) {
        if (key.startsWith("arcana-") && !keep.has(key)) await caches.delete(key);
      }
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (url.pathname.includes("/img/cards/")) {
    event.respondWith(cacheFirst(req, ART_CACHE));
  } else {
    event.respondWith(networkFirst(req, SHELL_CACHE));
  }
});

async function cacheFirst(req, cacheName) {
  const cached = await caches.match(req);
  if (cached) return cached;
  const res = await fetch(req);
  if (res.ok) (await caches.open(cacheName)).put(req, res.clone());
  return res;
}

async function networkFirst(req, cacheName) {
  try {
    const res = await fetch(req);
    if (res.ok) (await caches.open(cacheName)).put(req, res.clone());
    return res;
  } catch {
    const cached = (await caches.match(req)) || (req.mode === "navigate" ? await caches.match("index.html") : null);
    if (cached) return cached;
    throw new Error("offline and not cached");
  }
}
