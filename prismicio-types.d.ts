// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice =
  | FooterSlice
  | InfoSlice
  | CalendarSlice
  | AboutUsSlice
  | BigHeaderSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Content for settings documents
 */
interface SettingsDocumentData {
  /**
   * Title field in *settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * OG Image field in *settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * Website logo field in *settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.website_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  website_logo: prismic.ImageField<never>;
}

/**
 * settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes = HomeDocument | SettingsDocument;

/**
 * Primary content in *AboutUs → Default → Primary*
 */
export interface AboutUsSliceDefaultPrimary {
  /**
   * Header field in *AboutUs → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.default.primary.header
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  header: prismic.RichTextField;

  /**
   * paragraph field in *AboutUs → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.default.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * Video? field in *AboutUs → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: about_us.default.primary.video_bool
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  video_bool: prismic.BooleanField;

  /**
   * Video Link field in *AboutUs → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.default.primary.video_link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  video_link: prismic.KeyTextField;
}

/**
 * Default variation for AboutUs Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutUsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutUsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutUs*
 */
type AboutUsSliceVariation = AboutUsSliceDefault;

/**
 * AboutUs Shared Slice
 *
 * - **API ID**: `about_us`
 * - **Description**: AboutUs
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutUsSlice = prismic.SharedSlice<
  "about_us",
  AboutUsSliceVariation
>;

/**
 * Item in *Hero → Default → Primary → Links to Social*
 */
export interface BigHeaderSliceDefaultPrimaryLinksToSocialItem {
  /**
   * link field in *Hero → Default → Primary → Links to Social*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: big_header.default.primary.links_to_social[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * link type field in *Hero → Default → Primary → Links to Social*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: big_header.default.primary.links_to_social[].link_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  link_type: prismic.SelectField<
    "Instagram" | "Linktree" | "Discord" | "Email" | "Membership "
  >;
}

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface BigHeaderSliceDefaultPrimary {
  /**
   * Background Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: big_header.default.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: big_header.default.primary.header
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  header: prismic.RichTextField;

  /**
   * Links to Social field in *Hero → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: big_header.default.primary.links_to_social[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links_to_social: prismic.GroupField<
    Simplify<BigHeaderSliceDefaultPrimaryLinksToSocialItem>
  >;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BigHeaderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BigHeaderSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type BigHeaderSliceVariation = BigHeaderSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `big_header`
 * - **Description**: BigHeader
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BigHeaderSlice = prismic.SharedSlice<
  "big_header",
  BigHeaderSliceVariation
>;

/**
 * Primary content in *Calendar → Default → Primary*
 */
export interface CalendarSliceDefaultPrimary {
  /**
   * Heading field in *Calendar → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: calendar.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * info field in *Calendar → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: calendar.default.primary.info
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  info: prismic.RichTextField;

  /**
   * Calendar Iframe field in *Calendar → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: calendar.default.primary.calendar_iframe
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  calendar_iframe: prismic.KeyTextField;

  /**
   * background Image field in *Calendar → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: calendar.default.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;
}

/**
 * Default variation for Calendar Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CalendarSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CalendarSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Calendar*
 */
type CalendarSliceVariation = CalendarSliceDefault;

/**
 * Calendar Shared Slice
 *
 * - **API ID**: `calendar`
 * - **Description**: Calendar
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CalendarSlice = prismic.SharedSlice<
  "calendar",
  CalendarSliceVariation
>;

/**
 * Item in *Footer → Default → Primary → Links to Social*
 */
export interface FooterSliceDefaultPrimaryLinksToSocialItem {
  /**
   * link field in *Footer → Default → Primary → Links to Social*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.default.primary.links_to_social[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * link type field in *Footer → Default → Primary → Links to Social*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Instagram
   * - **API ID Path**: footer.default.primary.links_to_social[].link_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  link_type: prismic.SelectField<
    "Instagram" | "Discord" | "Email" | "Linktree" | "Membership",
    "filled"
  >;
}

/**
 * Primary content in *Footer → Default → Primary*
 */
export interface FooterSliceDefaultPrimary {
  /**
   * Background Image field in *Footer → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.default.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * small paragraph field in *Footer → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.default.primary.small_paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  small_paragraph: prismic.RichTextField;

  /**
   * location field in *Footer → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Keep it in different lines
   * - **API ID Path**: footer.default.primary.location
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  location: prismic.RichTextField;

  /**
   * email field in *Footer → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.default.primary.email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Links to Social field in *Footer → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.default.primary.links_to_social[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links_to_social: prismic.GroupField<
    Simplify<FooterSliceDefaultPrimaryLinksToSocialItem>
  >;
}

/**
 * Default variation for Footer Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FooterSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Footer*
 */
type FooterSliceVariation = FooterSliceDefault;

/**
 * Footer Shared Slice
 *
 * - **API ID**: `footer`
 * - **Description**: Footer
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSlice = prismic.SharedSlice<"footer", FooterSliceVariation>;

/**
 * Primary content in *Info → Default → Primary*
 */
export interface InfoSliceDefaultPrimary {
  /**
   * Heading field in *Info → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: info.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * paragraph field in *Info → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: info.default.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;
}

/**
 * Default variation for Info Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InfoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<InfoSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Info → Imaged → Primary*
 */
export interface InfoSliceImagedPrimary {
  /**
   * Heading field in *Info → Imaged → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: info.imaged.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * paragraph field in *Info → Imaged → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: info.imaged.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * Image field in *Info → Imaged → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: info.imaged.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Imaged variation for Info Slice
 *
 * - **API ID**: `imaged`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InfoSliceImaged = prismic.SharedSliceVariation<
  "imaged",
  Simplify<InfoSliceImagedPrimary>,
  never
>;

/**
 * Slice variation for *Info*
 */
type InfoSliceVariation = InfoSliceDefault | InfoSliceImaged;

/**
 * Info Shared Slice
 *
 * - **API ID**: `info`
 * - **Description**: Info
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InfoSlice = prismic.SharedSlice<"info", InfoSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      AboutUsSlice,
      AboutUsSliceDefaultPrimary,
      AboutUsSliceVariation,
      AboutUsSliceDefault,
      BigHeaderSlice,
      BigHeaderSliceDefaultPrimaryLinksToSocialItem,
      BigHeaderSliceDefaultPrimary,
      BigHeaderSliceVariation,
      BigHeaderSliceDefault,
      CalendarSlice,
      CalendarSliceDefaultPrimary,
      CalendarSliceVariation,
      CalendarSliceDefault,
      FooterSlice,
      FooterSliceDefaultPrimaryLinksToSocialItem,
      FooterSliceDefaultPrimary,
      FooterSliceVariation,
      FooterSliceDefault,
      InfoSlice,
      InfoSliceDefaultPrimary,
      InfoSliceImagedPrimary,
      InfoSliceVariation,
      InfoSliceDefault,
      InfoSliceImaged,
    };
  }
}
