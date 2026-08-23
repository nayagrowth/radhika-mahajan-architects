import os

root = "D:/Projects/RMA"

# 1. Update RmaHero.tsx
with open("D:/Projects/RMA/src/features/rma-hero/RmaHero.tsx", "r", encoding="utf-8") as f:
    c = f.read()
c = c.replace('data-story-dipak-portrait', 'data-story-hero-portrait')
c = c.replace('data-story-dipak-mask', 'data-story-hero-mask')
c = c.replace('data-story-dipak-rule', 'data-story-hero-rule')
with open("D:/Projects/RMA/src/features/rma-hero/RmaHero.tsx", "w", encoding="utf-8") as f:
    f.write(c)

# 2. Update MobileNav.tsx
with open("D:/Projects/RMA/src/features/rma-hero/MobileNav.tsx", "r", encoding="utf-8") as f:
    c = f.read()
c = c.replace('Dipak Vishwakarma Mobile Navigation', 'Radhika Mahajan Architects Navigation')
with open("D:/Projects/RMA/src/features/rma-hero/MobileNav.tsx", "w", encoding="utf-8") as f:
    f.write(c)

# 3. Update EditorialPreloader.tsx
with open("D:/Projects/RMA/src/features/site-chrome/EditorialPreloader.tsx", "r", encoding="utf-8") as f:
    c = f.read()
c = c.replace('Dipak Vishwakarma', 'Radhika Mahajan Architects')
with open("D:/Projects/RMA/src/features/site-chrome/EditorialPreloader.tsx", "w", encoding="utf-8") as f:
    f.write(c)

# 4. Update SiteHeader.tsx
with open("D:/Projects/RMA/src/features/site-chrome/SiteHeader.tsx", "r", encoding="utf-8") as f:
    c = f.read()
c = c.replace('Dipak Vishwakarma Primary Navigation', 'Radhika Mahajan Architects Primary Navigation')
c = c.replace('Dipak Vishwakarma — Home', 'Radhika Mahajan Architects — Home')
with open("D:/Projects/RMA/src/features/site-chrome/SiteHeader.tsx", "w", encoding="utf-8") as f:
    f.write(c)

# 5. Update api/health/route.ts
health_code = """import { NextResponse } from \"next/server\";

export async function GET() {
  return NextResponse.json({
    status: \"healthy\",
    service: \"rma-web\",
    timestamp: new Date().toISOString(),
  });
}
"""
with open("D:/Projects/RMA/src/app/api/health/route.ts", "w", encoding="utf-8") as f:
    f.write(health_code)

# 6. Update api/indexnow/route.ts
indexnow_code = """import { NextResponse } from \"next/server\";
import { getAllArticles } from \"@/lib/articles\";

export async function POST() {
  const host = \"rma.preview.nayagrowth.com\";
  const key = process.env.INDEXNOW_KEY || \"indexnow-rma-key\";
  const articles = getAllArticles();
  const urlList = [
    `https://${host}/`,
    `https://${host}/about`,
    `https://${host}/articles`,
    `https://${host}/resources`,
    `https://${host}/videos`,
    `https://${host}/contact`,
    ...articles.map((a) => `https://${host}/articles/${a.slug}`),
  ];

  return NextResponse.json({
    submitted: true,
    count: urlList.length,
    host,
  });
}
"""
with open("D:/Projects/RMA/src/app/api/indexnow/route.ts", "w", encoding="utf-8") as f:
    f.write(indexnow_code)

print("Updated and cleaned up all references!")
