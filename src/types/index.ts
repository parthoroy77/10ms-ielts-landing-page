export interface Media {
  name: string;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url?: string;
}

export interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface SeoMeta {
  content: string;
  type: "property" | "name";
  value: string;
}

export interface SeoSchema {
  meta_name: string;
  meta_value: string;
  type: string;
}

export interface Seo {
  defaultMeta: SeoMeta[];
  description: string;
  keywords: string[];
  schema: SeoSchema[];
  title: string;
}

export interface CtaText {
  name: string;
  value: string;
}

// Section value types
export interface OfferValue {
  background_color: string;
  background_img: string;
  checklist_text_color: string;
  end_at: string;
  id: string;
  start_at: string;
  template: string;
  text: string;
}

export interface InstructorValue {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

export interface FeatureValue {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

export interface GroupJoinEngagementValue {
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description: string;
  description_color: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
}

export interface PointerValue {
  color: string;
  icon: string;
  id: string;
  text: string;
}

export interface AboutValue {
  description: string;
  icon: string;
  id: string;
  title: string;
}

export interface FeatureExplanationValue {
  checklist: string[];
  file_type: "image" | "video";
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
}

export interface TestimonialValue {
  description: string;
  id: string;
  name: string;
  profile_image: string;
  testimonial: string;
  thumb: string;
  video_type: string;
  video_url: string;
}

export interface FaqValue {
  answer: string;
  id: string;
  question: string;
}

export interface Section {
  type:
    | "bundle_items"
    | "offers"
    | "instructors"
    | "features"
    | "group_join_engagement"
    | "pointers"
    | "content_preview"
    | "about"
    | "feature_explanations"
    | "free_items"
    | "certificate"
    | "bundle_certificate"
    | "testimonials"
    | "requirements"
    | "how_to_pay"
    | "faq";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: (
    | OfferValue
    | InstructorValue
    | FeatureValue
    | GroupJoinEngagementValue
    | PointerValue
    | AboutValue
    | FeatureExplanationValue
    | TestimonialValue
    | FaqValue
  )[];
}

export interface Data {
  id: number;
  slug: string;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  media: Media[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
  is_cohort_based_course: boolean;
  secondary_cta_group: any[];
  delivery_method: string;
}
