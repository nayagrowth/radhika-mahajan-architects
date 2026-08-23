import os
from PIL import Image, ImageDraw

# 1. Write SVG icon
svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <rect width="512" height="512" rx="110" fill="#080309" stroke="#C89545" stroke-width="12" stroke-opacity="0.8" />
  <line x1="80" y1="256" x2="432" y2="256" stroke="#C89545" stroke-width="1.5" stroke-opacity="0.3" stroke-dasharray="6 6" />
  <line x1="256" y1="80" x2="256" y2="432" stroke="#C89545" stroke-width="1.5" stroke-opacity="0.3" stroke-dasharray="6 6" />
  <text x="50%" y="58%" text-anchor="middle" dominant-baseline="middle" font-family="'Playfair Display', Georgia, serif" font-size="240" font-weight="600" fill="#C89545" letter-spacing="-0.05em">RM</text>
  <text x="50%" y="84%" text-anchor="middle" font-family="'Montserrat', sans-serif" font-size="34" font-weight="500" fill="#D5CCBF" letter-spacing="0.35em">ARCHITECTS</text>
</svg>"""

with open("D:/Projects/RMA/src/app/icon.svg", "w", encoding="utf-8") as f_svg:
    f_svg.write(svg_content)

# 2. Write OG Image
og_w, og_h = 1200, 630
og = Image.new("RGB", (og_w, og_h), (8, 3, 9))
draw = ImageDraw.Draw(og)

for x in range(0, og_w, 60):
    draw.line([(x, 0), (x, og_h)], fill=(25, 20, 24), width=1)
for y in range(0, og_h, 60):
    draw.line([(0, y), (og_w, y)], fill=(25, 20, 24), width=1)

draw.rectangle([(24, 24), (og_w-24, og_h-24)], outline=(200, 149, 69), width=2)
draw.rectangle([(28, 28), (og_w-28, og_h-28)], outline=(103, 94, 97), width=1)

with Image.open("D:/Projects/RMA/public/branding/rma-logo-vertical-wht.png") as logo_wht:
    target_w = 460
    target_h = int(target_w * (logo_wht.height / logo_wht.width))
    logo_resized = logo_wht.resize((target_w, target_h), Image.Resampling.LANCZOS)
    pos_x = (og_w - target_w) // 2
    pos_y = (og_h - target_h) // 2 - 20
    og.paste(logo_resized, (pos_x, pos_y), mask=logo_resized)

og.save("D:/Projects/RMA/public/og-rma-preview.png", "PNG")
og.save("D:/Projects/RMA/public/og-preview.png", "PNG")
og.save("D:/Projects/RMA/public/branding/og-rma.webp", "WEBP", quality=95)
print("Asset generation complete!")
