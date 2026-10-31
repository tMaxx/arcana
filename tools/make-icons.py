#!/usr/bin/env python3
"""Generate the PNG app icons (icons/*.png) with Pillow.
icons/icon.svg is hand-written and not touched by this script."""
import math
import os

from PIL import Image, ImageChops, ImageDraw, ImageFilter

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "icons")
os.makedirs(OUT, exist_ok=True)

BG_INNER = (42, 28, 74)
BG_OUTER = (10, 9, 17)
GOLD = (201, 168, 106)
GOLD_BRIGHT = (232, 203, 141)


def four_point_star(cx, cy, r_outer, r_inner, rotation=0.0):
    pts = []
    for i in range(8):
        r = r_outer if i % 2 == 0 else r_inner
        a = -math.pi / 2 + rotation + i * math.pi / 4
        pts.append((cx + r * math.cos(a), cy + r * math.sin(a)))
    return pts


def make(size, safe=1.0, rounded=True):
    """safe < 1 shrinks the artwork so maskable icons survive cropping."""
    s = size * 4  # supersample, downscaled at the end
    img = Image.new("RGB", (s, s), BG_OUTER)
    d = ImageDraw.Draw(img)

    # radial violet background
    steps = 60
    for i in range(steps, 0, -1):
        t = i / steps
        col = tuple(round(BG_INNER[k] * (1 - t) + BG_OUTER[k] * t) for k in range(3))
        r = s * 0.62 * t
        d.ellipse((s / 2 - r, s * 0.45 - r, s / 2 + r, s * 0.45 + r), fill=col)

    cx = cy = s / 2
    u = s * safe

    # double ring
    for radius, width in ((0.40, 0.012), (0.365, 0.004)):
        r = u * radius
        d.ellipse((cx - r, cy - r, cx + r, cy + r), outline=GOLD, width=max(1, int(s * width)))

    # warm glow behind the star
    halo = Image.new("RGB", (s, s), (0, 0, 0))
    hr = u * 0.26
    ImageDraw.Draw(halo).ellipse((cx - hr, cy - hr, cx + hr, cy + hr), fill=(110, 80, 36))
    img = ImageChops.add(img, halo.filter(ImageFilter.GaussianBlur(s * 0.06)))

    # star: long cardinal rays plus shorter diagonal rays
    d = ImageDraw.Draw(img)
    d.polygon(four_point_star(cx, cy, u * 0.30, u * 0.085), fill=GOLD_BRIGHT)
    d.polygon(four_point_star(cx, cy, u * 0.19, u * 0.075, math.pi / 4), fill=GOLD)
    dot = u * 0.035
    d.ellipse((cx - dot, cy - dot, cx + dot, cy + dot), fill=(18, 13, 34))

    img = img.resize((size, size), Image.LANCZOS)
    if not rounded:
        return img
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size - 1, size - 1), radius=size * 0.22, fill=255)
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(img, (0, 0), mask)
    return out


make(192).save(os.path.join(OUT, "icon-192.png"))
make(512).save(os.path.join(OUT, "icon-512.png"))
make(512, safe=0.78, rounded=False).save(os.path.join(OUT, "icon-maskable-512.png"))
make(180, rounded=False).save(os.path.join(OUT, "apple-touch-icon.png"))
print("icons written to", OUT)
