"""Generate ambient background images for ModulesGridSection.

V2 — significantly more visible:
- Planet: larger + brighter city lights + stronger rim + clearer continents
- Stadium: bigger arc, brighter lights, visible floor
"""
import math
import random
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

random.seed(7)

OUT = Path(__file__).resolve().parent.parent / "public" / "img" / "modules-grid-bg"
OUT.mkdir(parents=True, exist_ok=True)


# =================== PLANET ===================
def make_planet(size=1200):
    W = H = size
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    cx, cy = W // 2, H // 2
    r = int(W * 0.45)

    # Base sphere: dark but slightly visible (subtle radial)
    base = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    bd = ImageDraw.Draw(base)
    for i in range(r, 0, -1):
        t = 1 - i / r
        shade = int(12 + 10 * (1 - t))
        alpha = int(230 * (0.65 + 0.35 * (1 - abs(2 * t - 1))))
        bd.ellipse(
            (cx - i, cy - i, cx + i, cy + i),
            fill=(shade, shade - 2, shade, alpha),
        )
    img = Image.alpha_composite(img, base)

    # City lights — many more, brighter, clustered like continents
    light_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(light_layer)
    # Fake continents as big blurry gold patches
    continents = [
        (cx - r * 0.25, cy - r * 0.35, r * 0.38, 1600),
        (cx + r * 0.10, cy - r * 0.10, r * 0.42, 2000),
        (cx - r * 0.05, cy + r * 0.30, r * 0.36, 1400),
        (cx + r * 0.30, cy - r * 0.42, r * 0.22, 600),
        (cx - r * 0.40, cy + r * 0.15, r * 0.18, 400),
    ]
    for ccx, ccy, cr, n in continents:
        # Faint continent base glow (ochre patch)
        base_glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        bgd = ImageDraw.Draw(base_glow)
        bgd.ellipse(
            (ccx - cr * 1.1, ccy - cr * 0.8, ccx + cr * 1.1, ccy + cr * 0.8),
            fill=(110, 75, 30, 80),
        )
        base_glow = base_glow.filter(ImageFilter.GaussianBlur(radius=18))
        # Mask to sphere
        mask = Image.new("L", (W, H), 0)
        md = ImageDraw.Draw(mask)
        md.ellipse((cx - r + 4, cy - r + 4, cx + r - 4, cy + r - 4), fill=255)
        img.paste(base_glow, (0, 0), mask)

        # Bright points
        for _ in range(n):
            rr = abs(random.gauss(0, cr * 0.7))
            theta = random.uniform(0, math.tau)
            x = int(ccx + rr * math.cos(theta))
            y = int(ccy + rr * math.sin(theta))
            if (x - cx) ** 2 + (y - cy) ** 2 > (r - 3) ** 2:
                continue
            brightness = random.randint(180, 255)
            size_dot = random.choice([1, 1, 2, 2, 3])
            ld.ellipse(
                (x - size_dot // 2, y - size_dot // 2, x + size_dot // 2 + 1, y + size_dot // 2 + 1),
                fill=(brightness, int(brightness * 0.7), int(brightness * 0.2), random.randint(210, 255)),
            )
    # Slight bloom on the lights
    bloom = light_layer.filter(ImageFilter.GaussianBlur(radius=1.5))
    img = Image.alpha_composite(img, bloom)
    img = Image.alpha_composite(img, light_layer)

    # Strong golden rim light on the right (signature look of the reference)
    rim = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    rd = ImageDraw.Draw(rim)
    for i in range(20):
        offset = i * 1.6
        op = int(200 - i * 9)
        if op <= 0:
            break
        rd.ellipse(
            (cx - r + offset, cy - r, cx + r + offset, cy + r),
            outline=(255, 200, 90, op),
            width=3,
        )
    rim = rim.filter(ImageFilter.GaussianBlur(radius=6))
    img = Image.alpha_composite(img, rim)

    # Big warm glow behind right crescent
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse((cx - r + 60, cy - r * 0.95, cx + r + 60, cy + r * 0.95), fill=(230, 170, 60, 160))
    glow = glow.filter(ImageFilter.GaussianBlur(radius=40))
    # Show only on right half
    mask = Image.new("L", (W, H), 0)
    md = ImageDraw.Draw(mask)
    md.rectangle((cx - 20, 0, W, H), fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(radius=30))
    img.paste(glow, (0, 0), mask)

    return img


# =================== STADIUM ===================
def make_stadium(w=2000, h=1000):
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Bowl roof arc — clearer with multiple overlapping bands
    arc_top = int(h * 0.08)
    arc_mid = int(h * 0.35)

    for i in range(50):
        op = max(0, 180 - i * 3)
        y_off = i * 2.2
        draw.ellipse(
            (-w * 0.15, arc_top - 30 + y_off, w * 1.15, arc_mid + y_off),
            outline=(30, 40, 70, op),
            width=2,
        )

    # Cloud / sky haze above
    sky = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    sd = ImageDraw.Draw(sky)
    for _ in range(80):
        x = random.randint(-100, w + 100)
        y = random.randint(0, arc_top + 40)
        rr = random.randint(80, 220)
        sd.ellipse(
            (x - rr, y - rr // 2, x + rr, y + rr // 2),
            fill=(40, 48, 75, random.randint(55, 110)),
        )
    sky = sky.filter(ImageFilter.GaussianBlur(radius=30))
    img = Image.alpha_composite(img, sky)

    # Floodlight rails — much brighter and visible
    lights = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    ld = ImageDraw.Draw(lights)
    # Two dense rows along the arc
    num = 140
    for row in range(2):
        for i in range(num):
            t = i / (num - 1)
            angle = math.pi * (0.52 - t * 1.04)
            ex = w / 2 + math.cos(angle) * (w * 0.56)
            ey = arc_top + 25 + row * 28 + math.sin(angle) * 22
            # Tiny brighter core dot
            size_l = random.choice([2, 3, 3, 4])
            ld.ellipse(
                (ex - size_l, ey - size_l, ex + size_l, ey + size_l),
                fill=(255, 255, 255, 255),
            )

    # Strong bloom on lights
    bloom1 = lights.filter(ImageFilter.GaussianBlur(radius=18))
    bloom2 = lights.filter(ImageFilter.GaussianBlur(radius=6))
    img = Image.alpha_composite(img, bloom1)
    img = Image.alpha_composite(img, bloom2)
    img = Image.alpha_composite(img, lights)

    # Stands / crowd: warm pinpoints (many more, clearly visible)
    crowd = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    cd2 = ImageDraw.Draw(crowd)
    for _ in range(1800):
        x = random.randint(0, w)
        y = random.randint(arc_mid + 10, h - 30)
        b = random.randint(90, 230)
        cd2.ellipse((x, y, x + 1, y + 1), fill=(b, int(b * 0.82), int(b * 0.45), random.randint(180, 255)))
    crowd_bloom = crowd.filter(ImageFilter.GaussianBlur(radius=0.6))
    img = Image.alpha_composite(img, crowd_bloom)

    return img


if __name__ == "__main__":
    planet = make_planet(1200)
    planet_path = OUT / "planet-gold.webp"
    planet.save(planet_path, "WEBP", quality=82, method=6)
    print(f"planet-gold.webp: {planet_path.stat().st_size / 1024:.1f} KB")

    stadium = make_stadium(2000, 1000)
    stadium_path = OUT / "stadium-lights.webp"
    stadium.save(stadium_path, "WEBP", quality=80, method=6)
    print(f"stadium-lights.webp: {stadium_path.stat().st_size / 1024:.1f} KB")
