import os

# 1. Update src/features/rma-hero/index.ts
hero_index = """export { RmaHero } from "./RmaHero";
export { RmaHero as DipakHero } from "./RmaHero";
export { dipakHeroContent as rmaHeroContent, dipakHeroContent } from "./hero.content";
export type { HeroContent, HeroCta, NavLink } from "./hero.types";
"""
with open("D:/Projects/RMA/src/features/rma-hero/index.ts", "w", encoding="utf-8") as f:
    f.write(hero_index)

# 2. Update src/features/rma-hero/RmaHero.tsx
with open("D:/Projects/RMA/src/features/rma-hero/RmaHero.tsx", "r", encoding="utf-8") as f:
    code = f.read()
code = code.replace('import styles from "./dipak-hero.module.css";', 'import styles from "./rma-hero.module.css";')
code = code.replace('export function DipakHero(', 'export function RmaHero(')
with open("D:/Projects/RMA/src/features/rma-hero/RmaHero.tsx", "w", encoding="utf-8") as f:
    f.write(code)

# 3. Update src/features/rma-identity/index.ts
id_index = """export { RmaIdentityAct } from "./RmaIdentityAct";
export { RmaIdentityAct as DipakIdentityAct } from "./RmaIdentityAct";
export { identityContent } from "./identity.content";
export type { IdentityContent, IdentityMetric, MediaChannel } from "./identity.types";
"""
with open("D:/Projects/RMA/src/features/rma-identity/index.ts", "w", encoding="utf-8") as f:
    f.write(id_index)

# 4. Update src/features/rma-identity/RmaIdentityAct.tsx
with open("D:/Projects/RMA/src/features/rma-identity/RmaIdentityAct.tsx", "r", encoding="utf-8") as f:
    code = f.read()
code = code.replace('import styles from "./dipak-identity-act.module.css";', 'import styles from "./rma-identity-act.module.css";')
code = code.replace('export function DipakIdentityAct(', 'export function RmaIdentityAct(')
with open("D:/Projects/RMA/src/features/rma-identity/RmaIdentityAct.tsx", "w", encoding="utf-8") as f:
    f.write(code)

# 5. Update src/features/rma-presence/index.ts
pres_index = """export { RmaPresenceAct } from "./RmaPresenceAct";
export { RmaPresenceAct as DipakPresenceAct } from "./RmaPresenceAct";
export { presenceContent } from "./presence.content";
export type { PresenceContent, PresenceSignature } from "./presence.types";
"""
with open("D:/Projects/RMA/src/features/rma-presence/index.ts", "w", encoding="utf-8") as f:
    f.write(pres_index)

# 6. Update src/features/rma-presence/RmaPresenceAct.tsx
with open("D:/Projects/RMA/src/features/rma-presence/RmaPresenceAct.tsx", "r", encoding="utf-8") as f:
    code = f.read()
code = code.replace('import styles from "./dipak-presence-act.module.css";', 'import styles from "./rma-presence-act.module.css";')
code = code.replace('export function DipakPresenceAct(', 'export function RmaPresenceAct(')
with open("D:/Projects/RMA/src/features/rma-presence/RmaPresenceAct.tsx", "w", encoding="utf-8") as f:
    f.write(code)

# 7. Update src/features/rma-mission/index.ts
miss_index = """export { RmaMissionAct } from "./RmaMissionAct";
export { RmaMissionAct as DipakMissionAct } from "./RmaMissionAct";
export { missionContent } from "./mission.content";
export type { MissionContent, MissionPillar } from "./mission.types";
"""
with open("D:/Projects/RMA/src/features/rma-mission/index.ts", "w", encoding="utf-8") as f:
    f.write(miss_index)

# 8. Update src/features/rma-mission/RmaMissionAct.tsx
with open("D:/Projects/RMA/src/features/rma-mission/RmaMissionAct.tsx", "r", encoding="utf-8") as f:
    code = f.read()
code = code.replace('import styles from "./dipak-mission-act.module.css";', 'import styles from "./rma-mission-act.module.css";')
code = code.replace('export function DipakMissionAct(', 'export function RmaMissionAct(')
with open("D:/Projects/RMA/src/features/rma-mission/RmaMissionAct.tsx", "w", encoding="utf-8") as f:
    f.write(code)

# 9. Update src/features/rma-topics/index.ts
top_index = """export { RmaTopicsAct } from "./RmaTopicsAct";
export { RmaTopicsAct as DipakTopicsAct } from "./RmaTopicsAct";
export { topicsContent } from "./topics.content";
export type { TopicsContent, TopicItem } from "./topics.types";
"""
with open("D:/Projects/RMA/src/features/rma-topics/index.ts", "w", encoding="utf-8") as f:
    f.write(top_index)

# 10. Update src/features/rma-topics/RmaTopicsAct.tsx
with open("D:/Projects/RMA/src/features/rma-topics/RmaTopicsAct.tsx", "r", encoding="utf-8") as f:
    code = f.read()
code = code.replace('import styles from "./dipak-topics-act.module.css";', 'import styles from "./rma-topics-act.module.css";')
code = code.replace('export function DipakTopicsAct(', 'export function RmaTopicsAct(')
with open("D:/Projects/RMA/src/features/rma-topics/RmaTopicsAct.tsx", "w", encoding="utf-8") as f:
    f.write(code)

# 11. Update src/features/rma-thinking/index.ts
think_index = """export { RmaThinkingAct } from "./RmaThinkingAct";
export { RmaThinkingAct as DipakThinkingAct } from "./RmaThinkingAct";
export { thinkingContent } from "./thinking.content";
export type { ThinkingContent, FeaturedArticle, FeaturedVideo } from "./thinking.types";
"""
with open("D:/Projects/RMA/src/features/rma-thinking/index.ts", "w", encoding="utf-8") as f:
    f.write(think_index)

# 12. Update src/features/rma-thinking/RmaThinkingAct.tsx
with open("D:/Projects/RMA/src/features/rma-thinking/RmaThinkingAct.tsx", "r", encoding="utf-8") as f:
    code = f.read()
code = code.replace('import styles from "./dipak-thinking-act.module.css";', 'import styles from "./rma-thinking-act.module.css";')
code = code.replace('export function DipakThinkingAct(', 'export function RmaThinkingAct(')
code = code.replace('interface DipakThinkingActProps', 'interface RmaThinkingActProps')
code = code.replace('DipakThinkingActProps', 'RmaThinkingActProps')
with open("D:/Projects/RMA/src/features/rma-thinking/RmaThinkingAct.tsx", "w", encoding="utf-8") as f:
    f.write(code)

# 13. Update src/features/rma-bridge/index.ts
bridge_index = """export { RmaBridgeAct } from "./RmaBridgeAct";
export { RmaBridgeAct as DipakBridgeAct } from "./RmaBridgeAct";
export { bridgeContent } from "./bridge.content";
export type { BridgeContent } from "./bridge.types";
"""
with open("D:/Projects/RMA/src/features/rma-bridge/index.ts", "w", encoding="utf-8") as f:
    f.write(bridge_index)

# 14. Update src/features/rma-bridge/RmaBridgeAct.tsx and bridge.content.ts
with open("D:/Projects/RMA/src/features/rma-bridge/RmaBridgeAct.tsx", "r", encoding="utf-8") as f:
    code = f.read()
code = code.replace('import styles from "./dipak-bridge-act.module.css";', 'import styles from "./rma-bridge-act.module.css";')
code = code.replace('export function DipakBridgeAct(', 'export function RmaBridgeAct(')
with open("D:/Projects/RMA/src/features/rma-bridge/RmaBridgeAct.tsx", "w", encoding="utf-8") as f:
    f.write(code)

bridge_content = """import type { BridgeContent } from "./bridge.types";

export const bridgeContent: BridgeContent = {
  sectionNumber: "07",
  sectionTitle: "NEXT STEP",
  eyebrow: "START YOUR SPATIAL TRANSFORMATION",
  headlineWord1: "DESIGN",
  headlineWord2: "CONSULTATION",
  bodyParagraph:
    "Whether you are planning full home interiors for a 3 or 4 BHK, building a bespoke weekend villa in Lonavala, or redesigning a boutique commercial workspace, our in-house team guides your project from 3D concept to turnkey handover.",
  ctas: [
    {
      label: "Book 3D Consultation",
      href: "/contact",
      primary: true,
      event: "cta_book_consultation_bridge",
    },
    {
      label: "Explore Projects Gallery",
      href: "/resources",
      primary: false,
      event: "cta_explore_projects_bridge",
    },
  ],
};
"""
with open("D:/Projects/RMA/src/features/rma-bridge/bridge.content.ts", "w", encoding="utf-8") as f:
    f.write(bridge_content)

print("All RMA feature acts updated successfully!")
