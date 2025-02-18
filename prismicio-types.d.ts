// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice = BigHeaderSlice;

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
      BigHeaderSlice,
      BigHeaderSliceDefaultPrimaryLinksToSocialItem,
      BigHeaderSliceDefaultPrimary,
      BigHeaderSliceVariation,
      BigHeaderSliceDefault,
    };
  }
}
