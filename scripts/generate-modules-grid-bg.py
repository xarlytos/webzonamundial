"""Generate ambient background images for ModulesGridSection.

- planet-gold.webp  : dark sphere with golden city-light pattern, right side lit
- stadium-lights.webp: dark stadium lights arc (top of a stadium bowl)

Both designed to fade into a near-black background.

Run: python scripts/generate-modules-grid-bg.py
Output: public/img/modules-grid-bg/*.webp
"""
import math
import random
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

random.seed(42)

OUT = Path(__file__).resolve().parent.parent / "public" / "img" / "modules-grid-bg"
OUT.mkdir(parents=True, exist_ok=True)

# =================== PLANET GOLD ===================
def make_planet(size=900):
    """Dark sphere with golden city-lights. Right side has a warm golden rim light."""
    W = H = size
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    cx, cy = W // 2, H // 2
    r = int(W * 0.42)

    # Base dark sphere (ellipse with radial gradient feel)
    for i in range(r, 0, -1):
        t = 1 - i / r
        # darker toward center
        shade = int(8 + 6 * (1 - t))
        alpha = int(255 * (0.7 + 0.3 * t))
        draw.ellipse(
            (cx - i, cy - i, cx + i, cy + i),
            fill=(shade, shade, shade + 2, alpha),
        )

    # City lights — scattered small golden dots + clusters
    light_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(light_layer)
    # Cluster centers (like continents)
    clusters = [
        (cx - r * 0.2, cy - r * 0.25, r * 0.35, 700),
        (cx + r * 0.15, cy, r * 0.32, 800),
        (cx - r * 0.1, cy + r * 0.3, r * 0.3, 500),
        (cx + r * 0.25, cy - r * 0.35, r * 0.2, 300),
    ]
    for ccx, ccy, cr, n in clusters:
        for _ in range(n):
            # gaussian-ish distribution inside cluster
            rr = abs(random.gauss(0, cr * 0.7))
            theta = random.uniform(0, math.tau)
            x = int(ccx + rr * math.cos(theta))
            y = int(ccy + rr * math.sin(theta))
            # check point is inside sphere
            if (x - cx) ** 2 + (y - cy) ** 2 > (r - 3) ** 2:
                continue
            brightness = random.randint(160, 255)
            size_dot = random.choice([1, 1, 1, 2])
            ld.ellipse(
                (x, y, x + size_dot, y + size_dot),
                fill=(brightness, int(brightness * 0.75), int(brightness * 0.25), random.randint(180, 255)),
            )
    # Blur the lights a little so they glow
    light_layer = light_layer.filter(ImageFilter.GaussianBlur(radius=0.6))
    img = Image.alpha_composite(img, light_layer)

    # Warm golden rim light on right (like the reference image)
    rim = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    rd = ImageDraw.Draw(rim)
    # Crescent of gold on the right side
    for i in range(16):
        offset = i * 1.3
        op = int(120 - i * 7)
        if op <= 0:
            break
        rd.ellipse(
            (cx - r + offset, cy - r, cx + r + offset, cy + r),
            outline=(255, 200, 100, op),
            width=2,
        )
    rim = rim.filter(ImageFilter.GaussianBlur(radius=8))
    img = Image.alpha_composite(img, rim)

    # Extra soft golden glow rim on right edge
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse((cx - r + 40, cy - r, cx + r + 40, cy + r), fill=(220, 160, 60, 90))
    glow = glow.filter(ImageFilter.GaussianBlur(radius=40))
    # Mask glow so only right side shows
    mask = Image.new("L", (W, H), 0)
    md = ImageDraw.Draw(mask)
    md.rectangle((cx, 0, W, H), fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(radius=30))
    img.paste(glow, (0, 0), mask)

    return img


# =================== STADIUM LIGHTS ===================
def make_stadium(w=1600, h=900):
    """Top arc of a stadium with bright floodlight halos + dim crowd spots."""
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Stadium bowl outline (curved arc at top)
    arc_top = int(h * 0.1)
    arc_bottom = int(h * 0.55)
    bowl_color = (18, 22, 36, 220)

    # Draw arc as overlapping ellipses for depth
    for i in range(30):
        y_off = i * 1.5
        op = 140 - i * 4
        if op <= 0:
            break
        draw.ellipse(
            (-w * 0.2, arc_top - 40 + y_off, w * 1.2, arc_bottom + y_off),
            outline=(20, 25, 45, op),
            width=3,
        )

    # Cloud layer above (subtle, dark navy)
    cloud_layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    cd = ImageDraw.Draw(cloud_layer)
    for _ in range(60):
        cx = random.randint(0, w)
        cy = random.randint(0, arc_top + 20)
        rr = random.randint(60, 160)
        cd.ellipse(
            (cx - rr, cy - rr // 2, cx + rr, cy + rr // 2),
            fill=(25, 30, 55, random.randint(40, 90)),
        )
    cloud_layer = cloud_layer.filter(ImageFilter.GaussianBlur(radius=25))
    img = Image.alpha_composite(img, cloud_layer)

    # Floodlights: two rows of bright white-blue points along the arc
    lights = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    ld = ImageDraw.Draw(lights)
    num_lights = 90
    for i in range(num_lights):
        t = i / (num_lights - 1)
        # Place on arc path
        angle = math.pi * (0.5 - t * 1.0)  # sweep from right to left
        # ellipse param
        ex = w / 2 + math.cos(angle) * (w * 0.55)
        ey = arc_top + 15 + math.sin(angle) * 18
        brightness = random.randint(210, 255)
        size_l = random.choice([2, 2, 3, 3, 4])
        ld.ellipse(
            (ex - size_l, ey - size_l, ex + size_l, ey + size_l),
            fill=(brightness, brightness, 255, 255),
        )
    # second row slightly below
    for i in range(num_lights):
        t = i / (num_lights - 1)
        angle = math.pi * (0.5 - t * 1.0)
        ex = w / 2 + math.cos(angle) * (w * 0.58)
        ey = arc_top + 40 + math.sin(angle) * 18
        brightness = random.randint(180, 230)
        size_l = random.choice([1, 2, 2, 3])
        ld.ellipse(
            (ex - size_l, ey - size_l, ex + size_l, ey + size_l),
            fill=(brightness, brightness, 255, 220),
        )

    # Glow around the floodlights
    glow = lights.filter(ImageFilter.GaussianBlur(radius=10))
    img = Image.alpha_composite(img, glow)
    img = Image.alpha_composite(img, lights)

    # Crowd: dim warm specks in lower area
    crowd = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    cd2 = ImageDraw.Draw(crowd)
    for _ in range(600):
        cx = random.randint(0, w)
        cy = random.randint(arc_bottom - 40, h - 20)
        b = random.randint(60, 180)
        cd2.ellipse(
            (cx, cy, cx + 1, cy + 1),
            fill=(b, int(b * 0.85), int(b * 0.5), random.randint(140, 220)),
        )
    crowd = crowd.filter(ImageFilter.GaussianBlur(radius=0.5))
    img = Image.alpha_composite(img, crowd)

    return img


if __name__ == "__main__":
    planet = make_planet(900)
    planet_out = OUT / "planet-gold.webp"
    planet.save(planet_out, "WEBP", quality=80, method=6)
    print(f"planet-gold.webp: {planet_out.stat().st_size / 1024:.1f} KB")

    stadium = make_stadium(1600, 900)
    stadium_out = OUT / "stadium-lights.webp"
    stadium.save(stadium_out, "WEBP", quality=78, method=6)
    print(f"stadium-lights.webp: {stadium_out.stat().st_size / 1024:.1f} KB")
