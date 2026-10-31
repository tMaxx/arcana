#!/usr/bin/env python3
"""Download the public-domain 1909 Rider-Waite-Smith card scans from
Wikimedia Commons and store them as small WebP files in img/cards/<card-id>.webp

Usage: python3 tools/fetch-art.py [width]   (default width: 360px)
Requires Pillow. Already-downloaded files are skipped.
"""
import io
import os
import sys
import time
import urllib.error
import urllib.request

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "img", "cards")
WIDTH = int(sys.argv[1]) if len(sys.argv) > 1 else 360
UA = "ArcanaTarotHelper/1.0 (personal static site; one-off art download)"

MAJORS = [
    ("fool", "RWS_Tarot_00_Fool"), ("magician", "RWS_Tarot_01_Magician"),
    ("high-priestess", "RWS_Tarot_02_High_Priestess"), ("empress", "RWS_Tarot_03_Empress"),
    ("emperor", "RWS_Tarot_04_Emperor"), ("hierophant", "RWS_Tarot_05_Hierophant"),
    ("lovers", "RWS_Tarot_06_Lovers"), ("chariot", "RWS_Tarot_07_Chariot"),
    ("strength", "RWS_Tarot_08_Strength"), ("hermit", "RWS_Tarot_09_Hermit"),
    ("wheel-of-fortune", "RWS_Tarot_10_Wheel_of_Fortune"), ("justice", "RWS_Tarot_11_Justice"),
    ("hanged-man", "RWS_Tarot_12_Hanged_Man"), ("death", "RWS_Tarot_13_Death"),
    ("temperance", "RWS_Tarot_14_Temperance"), ("devil", "RWS_Tarot_15_Devil"),
    ("tower", "RWS_Tarot_16_Tower"), ("star", "RWS_Tarot_17_Star"),
    ("moon", "RWS_Tarot_18_Moon"), ("sun", "RWS_Tarot_19_Sun"),
    ("judgement", "RWS_Tarot_20_Judgement"), ("world", "RWS_Tarot_21_World"),
]
SUIT_PREFIX = {"wands": "Wands", "cups": "Cups", "swords": "Swords", "pentacles": "Pents"}
RANKS = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "page", "knight", "queen", "king"]


def targets():
    for cid, name in MAJORS:
        yield cid, name + ".jpg"
    for suit, prefix in SUIT_PREFIX.items():
        for i, rank in enumerate(RANKS, start=1):
            yield f"{suit}-{rank}", f"{prefix}{i:02d}.jpg"


def fetch(filename):
    url = f"https://commons.wikimedia.org/wiki/Special:FilePath/{filename}?width={WIDTH}"
    for attempt in range(6):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code in (429, 503):
                wait = 5 * (attempt + 1)
                print(f"  {e.code}, waiting {wait}s")
                time.sleep(wait)
            else:
                raise
    raise RuntimeError("too many retries")


def main():
    failed = []
    for cid, filename in targets():
        dest = os.path.join(OUT, cid + ".webp")
        if os.path.exists(dest):
            continue
        try:
            data = fetch(filename)
            img = Image.open(io.BytesIO(data)).convert("RGB")
            if img.width > WIDTH:
                img = img.resize((WIDTH, round(img.height * WIDTH / img.width)), Image.LANCZOS)
            img.save(dest, "WEBP", quality=80, method=6)
            print(f"ok   {cid:<22} {img.width}x{img.height}  {os.path.getsize(dest) // 1024} KB")
        except Exception as e:  # noqa: BLE001
            print(f"FAIL {cid:<22} {filename}: {e}")
            failed.append(cid)
        time.sleep(1.0)
    print("failed:", failed or "none")


if __name__ == "__main__":
    main()
