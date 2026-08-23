import os, shutil

root = "D:/Projects/RMA"

# 1. Remove pack-docs
if os.path.exists(os.path.join(root, "pack-docs")):
    shutil.rmtree(os.path.join(root, "pack-docs"))
    print("Removed pack-docs directory")

# 2. Update rma-mission/index.ts
mission_index = """export { RmaMissionAct } from "./RmaMissionAct";
export { RmaMissionAct as DipakMissionAct } from "./RmaMissionAct";
export { missionContent } from "./mission.content";
export type { MissionContent, PhilosophyPillar, PhilosophyPillar as MissionPillar } from "./mission.types";
"""
with open(os.path.join(root, "src/features/rma-mission/index.ts"), "w", encoding="utf-8") as f:
    f.write(mission_index)

# 3. Update rma-presence/index.ts
presence_index = """export { RmaPresenceAct } from "./RmaPresenceAct";
export { RmaPresenceAct as DipakPresenceAct } from "./RmaPresenceAct";
export { presenceContent } from "./presence.content";
export type { PresenceContent, MediaSignature, MediaSignature as PresenceSignature } from "./presence.types";
"""
with open(os.path.join(root, "src/features/rma-presence/index.ts"), "w", encoding="utf-8") as f:
    f.write(presence_index)

# 4. Update brush-lab/page.tsx
brush_lab_p = os.path.join(root, "src/app/tools/brush-lab/page.tsx")
if os.path.exists(brush_lab_p):
    with open(brush_lab_p, "r", encoding="utf-8") as f:
        c = f.read()
    c = c.replace("@/features/dipak-hero/", "@/features/rma-hero/")
    with open(brush_lab_p, "w", encoding="utf-8") as f:
        f.write(c)

# 5. Update tests/hero.visual.spec.ts
spec_p = os.path.join(root, "tests/hero.visual.spec.ts")
if os.path.exists(spec_p):
    with open(spec_p, "r", encoding="utf-8") as f:
        c = f.read()
    c = c.replace("../src/features/dipak-hero/", "../src/features/rma-hero/")
    with open(spec_p, "w", encoding="utf-8") as f:
        f.write(c)

print("Typecheck fixes applied!")
