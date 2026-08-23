import os
from PIL import Image

os.makedirs("D:/Projects/RMA/public/media/projects", exist_ok=True)
os.makedirs("D:/Projects/RMA/public/media/rma", exist_ok=True)

# Grid A image (page_11_img_1_84.png)
grid_a_path = "D:/Projects/RMA/extracted_pdf_images/page_11_img_1_84.png"
if os.path.exists(grid_a_path):
    with Image.open(grid_a_path) as img:
        # Size is 736 x 1308 (3 columns x 4 rows)
        cols, rows = 3, 4
        cw = img.width / cols
        ch = img.height / rows
        idx = 1
        for r in range(rows):
            for c in range(cols):
                box = (int(c * cw), int(r * ch), int((c + 1) * cw), int((r + 1) * ch))
                cropped = img.crop(box)
                cropped.save(f"D:/Projects/RMA/public/media/projects/rma-project-a{idx:02d}.webp", "WEBP", quality=92)
                cropped.save(f"D:/Projects/RMA/public/media/projects/rma-project-a{idx:02d}.png", "PNG")
                idx += 1
        print(f"Extracted {idx-1} project tiles from Grid A")

# Grid B image (page_13_img_1_93.png)
grid_b_path = "D:/Projects/RMA/extracted_pdf_images/page_13_img_1_93.png"
if os.path.exists(grid_b_path):
    with Image.open(grid_b_path) as img:
        # Size is 1080 x 1432 (3 columns x 4 rows)
        cols, rows = 3, 4
        cw = img.width / cols
        ch = img.height / rows
        idx = 1
        for r in range(rows):
            for c in range(cols):
                box = (int(c * cw), int(r * ch), int((c + 1) * cw), int((r + 1) * ch))
                cropped = img.crop(box)
                cropped.save(f"D:/Projects/RMA/public/media/projects/rma-project-b{idx:02d}.webp", "WEBP", quality=92)
                cropped.save(f"D:/Projects/RMA/public/media/projects/rma-project-b{idx:02d}.png", "PNG")
                idx += 1
        print(f"Extracted {idx-1} project tiles from Grid B")

# Also create curated hero renders
with Image.open("D:/Projects/RMA/public/media/projects/rma-project-a01.webp") as h1:
    h1.save("D:/Projects/RMA/public/media/rma/hero-living-room.webp", "WEBP", quality=95)
with Image.open("D:/Projects/RMA/public/media/projects/rma-project-b02.webp") as h2:
    h2.save("D:/Projects/RMA/public/media/rma/hero-dining-space.webp", "WEBP", quality=95)
with Image.open("D:/Projects/RMA/public/media/projects/rma-project-a04.webp") as h3:
    h3.save("D:/Projects/RMA/public/media/rma/hero-materials.webp", "WEBP", quality=95)

# Also create hero portrait / focal feature asset for Act 1
with Image.open("D:/Projects/RMA/public/media/projects/rma-project-a01.webp") as p1:
    p1.save("D:/Projects/RMA/src/features/dipak-hero/assets/dipak-seated-hero.png", "PNG")
    p1.save("D:/Projects/RMA/src/features/dipak-hero/assets/dipak-seated-armchair.png", "PNG")
    p1.save("D:/Projects/RMA/src/features/dipak-hero/assets/dipak-standing-full.png", "PNG")

print("Project and hero media assets prepared successfully!")
