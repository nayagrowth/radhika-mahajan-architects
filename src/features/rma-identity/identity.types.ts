export interface IdentityMetric {
  main: string;
  suffix?: string;
  label: string;
  sublabel?: string;
}

export interface MetricRibbonItem {
  value: string;
  suffix?: string;
  label: string;
  color: string;
  icon: "sofa" | "blueprint" | "calendar";
}

export interface HeadlineLineItem {
  text: string;
  color: string;
}

export interface MediaChannel {
  label: string;
  iconType: "medium" | "dailyhunt" | "youtube" | "podcast" | "linkedin";
}

export interface IdentityContent {
  sectionNumber: string;
  sectionTitle: string;
  headlinePart1: string;
  headlineWord2: string;
  headlineLines: HeadlineLineItem[];
  roleSubhead: string;
  founderName?: string;
  founderRole?: string;
  founderCredential?: string;
  supportingCopy: string;
  bioParagraph: string;
  cta: {
    label: string;
    href: string;
  };
  metrics: IdentityMetric[];
  metricsRibbon: MetricRibbonItem[];
  subRibbonText: string;
  previewRailLabel: string;
  previewChannels: MediaChannel[];
}
