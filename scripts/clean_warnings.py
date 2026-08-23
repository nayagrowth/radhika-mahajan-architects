# 1. Update articles/[slug]/page.tsx
with open("D:/Projects/RMA/src/app/(site)/articles/[slug]/page.tsx", "r", encoding="utf-8") as f:
    c = f.read()
c = c.replace('import { authorityClosersCta } from "@/features/site-chrome";\n', '')
with open("D:/Projects/RMA/src/app/(site)/articles/[slug]/page.tsx", "w", encoding="utf-8") as f:
    f.write(c)

# 2. Update resources/page.tsx
with open("D:/Projects/RMA/src/app/(site)/resources/page.tsx", "r", encoding="utf-8") as f:
    c = f.read()
c = c.replace('import { authorityClosersCta } from "@/features/site-chrome";\n', '')
with open("D:/Projects/RMA/src/app/(site)/resources/page.tsx", "w", encoding="utf-8") as f:
    f.write(c)

# 3. Update rma-hero/MobileNav.tsx
with open("D:/Projects/RMA/src/features/rma-hero/MobileNav.tsx", "r", encoding="utf-8") as f:
    c = f.read()
c = c.replace('  brandFirstLine,\n  brandSecondLine,\n', '')
with open("D:/Projects/RMA/src/features/rma-hero/MobileNav.tsx", "w", encoding="utf-8") as f:
    f.write(c)

# 4. Update site-chrome/SiteHeader.tsx
with open("D:/Projects/RMA/src/features/site-chrome/SiteHeader.tsx", "r", encoding="utf-8") as f:
    c = f.read()
c = c.replace('const { navigation, siteBrand, consultationCta } = siteContent;', 'const { navigation, consultationCta } = siteContent;')
with open("D:/Projects/RMA/src/features/site-chrome/SiteHeader.tsx", "w", encoding="utf-8") as f:
    f.write(c)

print("Cleaned up unused variables!")
