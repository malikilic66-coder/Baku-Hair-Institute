
export interface NavItems {
  men: string;
  women: string;
  other: string;
  about: string;
  contact: string;
  men_items: string[];
  women_items: string[];
  other_items: string[];
  about_items: string[];
  contact_items: string[];
}

export interface HeroSection {
  exp: string;
  title: string;
  subtitle: string;
  desc: string;
  btn_consult: string;
  btn_whatsapp: string;
  doctor_exp?: string;
}

export interface JointProjectSection {
  title: string;
  subtitle: string;
  desc: string;
  advantages_title?: string;
  advantages?: { title: string; desc: string; }[];
  badges?: string[];
}

export interface ServiceItem {
  t: string;
  d: string;
}

export interface ServicesSection {
  title: string;
  items: ServiceItem[];
}

export interface LongFueSection {
  title: string;
  subtitle: string;
  badge: string;
  desc: string;
  features_title?: string;
  features: { title: string; desc: string; }[] | string[];
}

export interface DoctorItem {
  name: string;
  title: string;
  exp: string;
  specialty: string;
  image: string;
  bio?: string;
}

export interface DoctorsSection {
  title: string;
  btn: string;
  items: DoctorItem[];
}

export interface WhyUsItem {
  title: string;
  desc: string;
}

export interface WhyUsSection {
  title: string;
  items: WhyUsItem[];
  testimonials?: { name: string; comment: string; rating: number; }[];
  before_after?: { before: string; after: string; desc: string; }[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqSection {
  title: string;
  subtitle: string;
  items: FaqItem[];
}

export interface FormSection {
  header: string;
  name: string;
  phone: string;
  btn: string;
  success: string;
  email?: string;
  gender?: string;
  gender_options?: string[];
  procedure?: string;
  procedure_options?: string[];
  upload?: string;
  message?: string;
  consent?: string;
}

// --- New Pages Interfaces ---

export interface TimelineStep {
  time: string;
  title: string;
  desc: string;
}

export interface PageFeature {
  title: string;
  desc: string;
}

export interface MenHairPageContent {
  title: string;
  subtitle: string;
  desc: string;
  techniques: {
    fue: PageFeature;
    dhi: PageFeature;
    long: PageFeature;
  };
  timeline_title: string;
  timeline: TimelineStep[];
}

export interface MenBeardPageContent {
  title: string;
  subtitle: string;
  desc: string;
  features: PageFeature[];
}

export interface LongFuePageContent {
  title: string;
  subtitle: string;
  desc: string;
  comparison_title: string;
  comparison: {
    feature: string;
    standard: string;
    long: string;
  }[];
  benefits: PageFeature[];
}

export interface HairlinePageContent {
  title: string;
  subtitle: string;
  desc: string;
  golden_ratio_title: string;
  golden_ratio_desc: string;
  steps: PageFeature[];
}

export interface WomenHairPageContent {
  title: string;
  subtitle: string;
  desc: string;
  features: PageFeature[];
  process_title: string;
  process: TimelineStep[];
}

export interface EyebrowPageContent {
  title: string;
  subtitle: string;
  desc: string;
  steps: PageFeature[];
}

export interface AnesthesiaPageContent {
  title: string;
  subtitle: string;
  desc: string;
  methods: PageFeature[];
}

export interface PrpPageContent {
  title: string;
  subtitle: string;
  desc: string;
  benefits: PageFeature[];
  process_title: string;
  process_steps: PageFeature[];
}

export interface MesoPageContent {
  title: string;
  subtitle: string;
  desc: string;
  cocktail_title: string;
  ingredients: string[];
  effects: PageFeature[];
}

export interface MedicalPageContent {
  title: string;
  subtitle: string;
  desc: string;
  treatments: PageFeature[];
  disclaimer: string;
}

export interface Content {
  nav: NavItems;
  hero: HeroSection;
  joint_project: JointProjectSection;
  services: ServicesSection;
  long_fue: LongFueSection;
  doctors: DoctorsSection;
  why_us: WhyUsSection;
  faq: FaqSection;
  form: FormSection;
  men_hair_page: MenHairPageContent;
  men_beard_page: MenBeardPageContent;
  long_fue_page: LongFuePageContent;
  hairline_page: HairlinePageContent;
  women_hair_page: WomenHairPageContent;
  eyebrow_page: EyebrowPageContent;
  anesthesia_page: AnesthesiaPageContent;
  prp_page: PrpPageContent;
  meso_page: MesoPageContent;
  medical_page: MedicalPageContent;
  sys_active: string;
}

export interface ContentMap {
  [key: string]: Content;
}
