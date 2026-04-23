"""Download Pexels hero images and convert to optimized WebP + JPG fallback.

Run: python scripts/optimize-hero-images.py
Output: public/img/heroes/*.webp and *.jpg
"""
import urllib.request
import ssl
from pathlib import Path
from io import BytesIO
from PIL import Image

# Disable SSL verification (Windows cert issues)
ssl._create_default_https_context = ssl._create_unverified_context

# 3 Pexels images used in the project
IMAGES = [
    {
        "url": "https://images.pexels.com/photos/28847309/pexels-photo-28847309.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "name": "hero-stadium",
        "width": 1920,
        "quality_webp": 72,
        "quality_jpg": 78,
    },
    {
        "url": "https://images.pexels.com/photos/14744117/pexels-photo-14744117.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "name": "why-different-stadium",
        "width": 1920,
        "quality_webp": 70,
        "quality_jpg": 75,
    },
    {
        "url": "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "name": "ball-stadium-pitch",
        "width": 1920,
        "quality_webp": 70,
        "quality_jpg": 75,
    },
]

out_dir = Path(__file__).resolve().parent.parent / "public" / "img" / "heroes"
out_dir.mkdir(parents=True, exist_ok=True)

results = []
for img in IMAGES:
    print(f"Downloading {img['name']}...")
    req = urllib.request.Request(img["url"], headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        data = resp.read()
    orig_size = len(data)

    # Open image
    pil = Image.open(BytesIO(data)).convert("RGB")
    # Ensure 1920 wide (Pexels url already specifies this, but enforce)
    if pil.width != img["width"]:
        ratio = img["width"] / pil.width
        new_size = (img["width"], int(pil.height * ratio))
        pil = pil.resize(new_size, Image.Resampling.LANCZOS)

    # WebP (primary)
    webp_path = out_dir / f"{img['name']}.webp"
    pil.save(webp_path, "WEBP", quality=img["quality_webp"], method=6)
    webp_size = webp_path.stat().st_size

    # JPG fallback (for browsers that do not support WebP — rare but OK)
    jpg_path = out_dir / f"{img['name']}.jpg"
    pil.save(jpg_path, "JPEG", quality=img["quality_jpg"], optimize=True, progressive=True)
    jpg_size = jpg_path.stat().st_size

    results.append({
        "name": img["name"],
        "orig_kb": orig_size / 1024,
        "webp_kb": webp_size / 1024,
        "jpg_kb": jpg_size / 1024,
        "webp_path": f"/img/heroes/{img['name']}.webp",
        "jpg_path": f"/img/heroes/{img['name']}.jpg",
    })

print("\nResults:")
print(f"{'Name':<25} {'Orig (KB)':>12} {'WebP (KB)':>12} {'JPG (KB)':>12} {'Saving %':>10}")
for r in results:
    saving = (1 - r["webp_kb"] / r["orig_kb"]) * 100
    print(f"{r['name']:<25} {r['orig_kb']:>12.1f} {r['webp_kb']:>12.1f} {r['jpg_kb']:>12.1f} {saving:>9.1f}%")
print("\nPaths:")
for r in results:
    print(f"  WebP: {r['webp_path']}")
    print(f"  JPG : {r['jpg_path']}")
