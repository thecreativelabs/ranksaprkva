import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Settings
 *
 *
 */
export interface Settings extends SanityDocument {
  _type: "settings";

  /**
   * Site title — `string`
   *
   *
   */
  title?: string;

  /**
   * Company Name — `string`
   *
   *
   */
  companyName?: string;

  /**
   * URL — `url`
   *
   * The main site url. Used to create canonical url
   */
  url?: string;

  /**
   * Copyright Name — `string`
   *
   * Enter company name to appear in footer after ©
   */
  copyright?: string;

  /**
   * Main logo — `image`
   *
   * Upload your main logo here. SVG preferred.
   */
  logo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alternative text — `string`
     *
     * Important for SEO and accessiblity.
     */
    alt?: string;
  };

  /**
   * Alternate logo (optional) — `image`
   *
   * Upload alternate logo here. it can be light / dark variation
   */
  logoalt?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alternative text — `string`
     *
     * Important for SEO and accessiblity.
     */
    alt?: string;
  };

  /**
   * Support Email — `string`
   *
   *
   */
  email?: string;

  /**
   * Support Phone — `string`
   *
   *
   */
  phone?: string;

  /**
   * Address — `string`
   *
   *
   */
  address?: string;

  /**
   * Web3Forms Access Key — `string`
   *
   * Enter Access key obtained from web3forms.com. It is required to make the form work.
   */
  w3ckey?: string;

  /**
   * Social Links — `array`
   *
   * Enter your Social Media URLs
   */
  social?: Array<
    SanityKeyed<{
      /**
       * Choose Social Media — `string`
       *
       *
       */
      media?: "twitter" | "facebook" | "instagram" | "linkedin" | "youtube";

      /**
       * Full Profile URL — `url`
       *
       *
       */
      url?: string;
    }>
  >;

  /**
   * Meta Description — `text`
   *
   * Enter SEO Meta Description
   */
  description?: string;

  /**
   * Open Graph Image — `image`
   *
   * Image for sharing previews on Facebook, Twitter etc.
   */
  openGraphImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Terms & Conditions — `blockContent`
   *
   *
   */
  tnc?: BlockContent;

  /**
   * Privacy Policy — `blockContent`
   *
   *
   */
  privacyPolicy?: BlockContent;
}

/**
 * Logos
 *
 *
 */
export interface Logos extends SanityDocument {
  _type: "logos";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Logos — `array`
   *
   *
   */
  logos?: Array<
    SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;

      /**
       * Alternative text — `string`
       *
       * Important for SEO and accessiblity.
       */
      alt?: string;
    }>
  >;
}

/**
 * Pricing
 *
 *
 */
export interface Pricing extends SanityDocument {
  _type: "pricing";

  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Sub Heading — `string`
   *
   *
   */
  subHeading?: string;

  /**
   * Plans — `array`
   *
   *
   */
  plans?: Array<
    SanityKeyed<{
      /**
       * Name — `string`
       *
       *
       */
      name?: string;

      /**
       * Description — `string`
       *
       *
       */
      description?: string;

      /**
       * Price ID — `string`
       *
       * Create product in Stripe and enter it's price ID here, for eg: price_1Okm2KSE7yoY9qakAsOAtZrh
       */
      priceId?: string;

      /**
       * Billing Cycle — `string`
       *
       *
       */
      cycle?: "monthly" | "yearly" | "custom";

      /**
       * Popular — `boolean`
       *
       *
       */
      popular?: boolean;

      /**
       * Price — `number`
       *
       *
       */
      price?: number;

      /**
       * Features — `array`
       *
       *
       */
      features?: Array<SanityKeyed<string>>;
    }>
  >;

  /**
   * Compare Plans — `object`
   *
   *
   */
  comparePlans?: {
    _type: "comparePlans";
    /**
     * Features — `array`
     *
     *
     */
    features?: Array<SanityKeyed<string>>;

    /**
     * Plans — `array`
     *
     *
     */
    plans?: Array<
      SanityKeyed<{
        /**
         * Name — `string`
         *
         *
         */
        name?: string;

        /**
         * Price — `string`
         *
         *
         */
        price?: string;

        /**
         * Popular — `boolean`
         *
         *
         */
        popular?: boolean;

        /**
         * Values — `array`
         *
         *
         */
        values?: Array<SanityKeyed<string>>;
      }>
    >;
  };
}

/**
 * Testimonials
 *
 *
 */
export interface Testimonials extends SanityDocument {
  _type: "testimonials";

  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Sub Heading — `string`
   *
   *
   */
  subHeading?: string;

  /**
   * Testimonials — `array`
   *
   *
   */
  testimonials?: Array<
    SanityKeyed<{
      /**
       * Name — `string`
       *
       *
       */
      name?: string;

      /**
       * Title — `string`
       *
       *
       */
      title?: string;

      /**
       * Image — `image`
       *
       *
       */
      image?: {
        _type: "image";
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;

        /**
         * Alternative text — `string`
         *
         * Important for SEO and accessiblity.
         */
        alt?: string;
      };

      /**
       * Text — `string`
       *
       *
       */
      text?: string;
    }>
  >;
}

/**
 * FAQs
 *
 *
 */
export interface Faqs extends SanityDocument {
  _type: "faqs";

  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Sub Heading — `string`
   *
   *
   */
  subHeading?: string;

  /**
   * FAQs — `array`
   *
   *
   */
  faqs?: Array<
    SanityKeyed<{
      /**
       * Question — `string`
       *
       *
       */
      question?: string;

      /**
       * Answer — `string`
       *
       *
       */
      answer?: string;
    }>
  >;
}

/**
 * CTA
 *
 *
 */
export interface Cta extends SanityDocument {
  _type: "cta";

  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Sub Heading — `string`
   *
   *
   */
  subHeading?: string;

  /**
   * CTA Button — `reference`
   *
   *
   */
  button?: SanityReference<Button>;
}

/**
 * Home Page
 *
 *
 */
export interface LandingPage extends SanityDocument {
  _type: "landingPage";

  /**
   * Header — `object`
   *
   *
   */
  header?: {
    _type: "header";
    /**
     * Title — `string`
     *
     *
     */
    title?: string;

    /**
     * Description — `string`
     *
     *
     */
    description?: string;

    /**
     * Button — `reference`
     *
     *
     */
    button?: SanityReference<Button>;

    /**
     * Main Image — `image`
     *
     *
     */
    mainImage?: {
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;

      /**
       * Alternative text — `string`
       *
       * Important for SEO and accessiblity.
       */
      alt?: string;
    };

    /**
     * Secondary Image — `image`
     *
     *
     */
    secondaryImage?: {
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;

      /**
       * Alternative text — `string`
       *
       * Important for SEO and accessiblity.
       */
      alt?: string;
    };
  };

  /**
   * Section 1 — `object`
   *
   *
   */
  section1?: {
    _type: "section1";
    /**
     * Stats — `array`
     *
     *
     */
    stats?: Array<
      SanityKeyed<{
        /**
         * Image — `image`
         *
         *
         */
        image?: {
          _type: "image";
          asset: SanityReference<SanityImageAsset>;
          crop?: SanityImageCrop;
          hotspot?: SanityImageHotspot;

          /**
           * Alternative text — `string`
           *
           * Important for SEO and accessiblity.
           */
          alt?: string;
        };

        /**
         * Title — `string`
         *
         *
         */
        title?: string;
      }>
    >;

    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Description — `blockContent`
     *
     *
     */
    description?: BlockContent;

    /**
     * Button — `reference`
     *
     *
     */
    button?: SanityReference<Button>;
  };

  /**
   * Features Grid — `object`
   *
   *
   */
  featuresGrid?: {
    _type: "featuresGrid";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Sub Heading — `string`
     *
     *
     */
    subHeading?: string;

    /**
     * Features — `array`
     *
     *
     */
    features?: Array<
      SanityKeyed<{
        /**
         * Title — `string`
         *
         *
         */
        title?: string;

        /**
         * Description — `string`
         *
         *
         */
        description?: string;

        /**
         * Icon — `string`
         *
         *
         */
        icon?: string;
      }>
    >;
  };

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;
}

/**
 * About
 *
 *
 */
export interface About extends SanityDocument {
  _type: "about";

  /**
   * Header — `object`
   *
   *
   */
  header?: {
    _type: "header";
    /**
     * Title — `string`
     *
     *
     */
    title?: string;

    /**
     * Description — `string`
     *
     *
     */
    description?: string;

    /**
     * Image — `image`
     *
     *
     */
    image?: {
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;

      /**
       * Alternative text — `string`
       *
       * Important for SEO and accessiblity.
       */
      alt?: string;
    };

    /**
     * Primary Button — `reference`
     *
     *
     */
    primaryButton?: SanityReference<Button>;

    /**
     * Secondary Button — `reference`
     *
     *
     */
    secondaryButton?: SanityReference<Button>;
  };

  /**
   * Features — `array`
   *
   *
   */
  features?: Array<
    SanityKeyed<{
      /**
       * Heading — `string`
       *
       *
       */
      heading?: string;

      /**
       * Description — `string`
       *
       *
       */
      description?: string;

      /**
       * Image — `image`
       *
       *
       */
      image?: {
        _type: "image";
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;

        /**
         * Alternative text — `string`
         *
         * Important for SEO and accessiblity.
         */
        alt?: string;
      };

      /**
       * Type — `string`
       *
       *
       */
      type?: "ctaButton" | "list" | "metrics";

      /**
       * Button — `reference`
       *
       *
       */
      button?: SanityReference<Button>;

      /**
       * List — `array`
       *
       *
       */
      list?: Array<SanityKeyed<string>>;

      /**
       * Metrics — `array`
       *
       *
       */
      metrics?: Array<
        SanityKeyed<{
          /**
           * Key — `string`
           *
           *
           */
          key?: string;

          /**
           * Value — `number`
           *
           *
           */
          value?: number;

          /**
           * Symbol — `string`
           *
           *
           */
          symbol?: string;
        }>
      >;
    }>
  >;

  /**
   * Features Grid — `object`
   *
   *
   */
  featuresGrid?: {
    _type: "featuresGrid";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Sub Heading — `string`
     *
     *
     */
    subHeading?: string;

    /**
     * Features — `array`
     *
     *
     */
    features?: Array<
      SanityKeyed<{
        /**
         * Title — `string`
         *
         *
         */
        title?: string;

        /**
         * Description — `string`
         *
         *
         */
        description?: string;

        /**
         * Icon — `string`
         *
         *
         */
        icon?: string;
      }>
    >;
  };

  /**
   * Team — `object`
   *
   *
   */
  team?: {
    _type: "team";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Sub Heading — `string`
     *
     *
     */
    subHeading?: string;

    /**
     * Members — `array`
     *
     *
     */
    members?: Array<
      SanityKeyed<{
        /**
         * Name — `string`
         *
         *
         */
        name?: string;

        /**
         * Role — `string`
         *
         *
         */
        role?: string;

        /**
         * Image — `image`
         *
         *
         */
        image?: {
          _type: "image";
          asset: SanityReference<SanityImageAsset>;
          crop?: SanityImageCrop;
          hotspot?: SanityImageHotspot;

          /**
           * Alternative text — `string`
           *
           * Important for SEO and accessiblity.
           */
          alt?: string;
        };
      }>
    >;
  };
}

/**
 * Careers
 *
 *
 */
export interface Careers extends SanityDocument {
  _type: "careers";

  /**
   * Header — `object`
   *
   *
   */
  header?: {
    _type: "header";
    /**
     * Title — `string`
     *
     *
     */
    title?: string;

    /**
     * Description — `string`
     *
     *
     */
    description?: string;

    /**
     * Image — `image`
     *
     *
     */
    image?: {
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;

      /**
       * Alternative text — `string`
       *
       * Important for SEO and accessiblity.
       */
      alt?: string;
    };

    /**
     * Primary Button — `reference`
     *
     *
     */
    primaryButton?: SanityReference<Button>;
  };

  /**
   * Features — `array`
   *
   *
   */
  features?: Array<
    SanityKeyed<{
      /**
       * Heading — `string`
       *
       *
       */
      heading?: string;

      /**
       * Description — `string`
       *
       *
       */
      description?: string;

      /**
       * Image — `image`
       *
       *
       */
      image?: {
        _type: "image";
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;

        /**
         * Alternative text — `string`
         *
         * Important for SEO and accessiblity.
         */
        alt?: string;
      };

      /**
       * Type — `string`
       *
       *
       */
      type?: "ctaButton" | "list" | "metrics";

      /**
       * Button — `reference`
       *
       *
       */
      button?: SanityReference<Button>;

      /**
       * List — `array`
       *
       *
       */
      list?: Array<SanityKeyed<string>>;

      /**
       * Metrics — `array`
       *
       *
       */
      metrics?: Array<
        SanityKeyed<{
          /**
           * Key — `string`
           *
           *
           */
          key?: string;

          /**
           * Value — `number`
           *
           *
           */
          value?: number;

          /**
           * Symbol — `string`
           *
           *
           */
          symbol?: string;
        }>
      >;
    }>
  >;

  /**
   * Features Grid — `object`
   *
   *
   */
  featuresGrid?: {
    _type: "featuresGrid";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Sub Heading — `string`
     *
     *
     */
    subHeading?: string;

    /**
     * Features — `array`
     *
     *
     */
    features?: Array<
      SanityKeyed<{
        /**
         * Title — `string`
         *
         *
         */
        title?: string;

        /**
         * Description — `string`
         *
         *
         */
        description?: string;

        /**
         * Icon — `string`
         *
         *
         */
        icon?: string;
      }>
    >;
  };

  /**
   * Open Positions — `object`
   *
   *
   */
  openPositions?: {
    _type: "openPositions";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Sub Heading — `string`
     *
     *
     */
    subHeading?: string;

    /**
     * Positions — `array`
     *
     *
     */
    positions?: Array<
      SanityKeyed<{
        /**
         * Position — `string`
         *
         *
         */
        position?: string;

        /**
         * Mode — `string`
         *
         *
         */
        mode?: string;

        /**
         * Published at — `datetime`
         *
         *
         */
        publishedAt?: string;

        /**
         * Open — `boolean`
         *
         *
         */
        open?: boolean;
      }>
    >;
  };
}

/**
 * Success Stories
 *
 *
 */
export interface SuccessStories extends SanityDocument {
  _type: "successStories";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alternative text — `string`
     *
     * Important for SEO and accessiblity.
     */
    alt?: string;
  };

  /**
   * Services Used — `array`
   *
   *
   */
  services?: Array<SanityKeyedReference<Service>>;

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;
}

/**
 * Marketing Solutions
 *
 *
 */
export interface MarketingSolutions extends SanityDocument {
  _type: "marketingSolutions";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Header — `object`
   *
   *
   */
  header?: {
    _type: "header";
    /**
     * Description — `string`
     *
     *
     */
    description?: string;

    /**
     * Main image — `image`
     *
     *
     */
    mainImage?: {
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;

      /**
       * Alternative text — `string`
       *
       * Important for SEO and accessiblity.
       */
      alt?: string;
    };

    /**
     * Button — `reference`
     *
     *
     */
    button?: SanityReference<Button>;
  };

  /**
   * Features — `array`
   *
   *
   */
  features?: Array<
    SanityKeyed<{
      /**
       * Heading — `string`
       *
       *
       */
      heading?: string;

      /**
       * Description — `string`
       *
       *
       */
      description?: string;

      /**
       * Image — `image`
       *
       *
       */
      image?: {
        _type: "image";
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;

        /**
         * Alternative text — `string`
         *
         * Important for SEO and accessiblity.
         */
        alt?: string;
      };

      /**
       * Type — `string`
       *
       *
       */
      type?: "ctaButton" | "list" | "metrics";

      /**
       * Button — `reference`
       *
       *
       */
      button?: SanityReference<Button>;

      /**
       * List — `array`
       *
       *
       */
      list?: Array<SanityKeyed<string>>;

      /**
       * Metrics — `object`
       *
       *
       */
      metrics?: {
        _type: "metrics";
        /**
         * Key — `string`
         *
         *
         */
        key?: string;

        /**
         * Value — `number`
         *
         *
         */
        value?: number;

        /**
         * Symbol — `string`
         *
         *
         */
        symbol?: string;
      };
    }>
  >;

  /**
   * Features Grid — `object`
   *
   *
   */
  featuresGrid?: {
    _type: "featuresGrid";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Sub Heading — `string`
     *
     *
     */
    subHeading?: string;

    /**
     * Features — `array`
     *
     *
     */
    features?: Array<
      SanityKeyed<{
        /**
         * Title — `string`
         *
         *
         */
        title?: string;

        /**
         * Description — `string`
         *
         *
         */
        description?: string;

        /**
         * Icon — `string`
         *
         *
         */
        icon?: string;
      }>
    >;
  };

  /**
   * FAQs — `object`
   *
   *
   */
  faqs?: {
    _type: "faqs";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Sub Heading — `string`
     *
     *
     */
    subHeading?: string;

    /**
     * FAQs — `array`
     *
     *
     */
    faqs?: Array<
      SanityKeyed<{
        /**
         * Question — `string`
         *
         *
         */
        question?: string;

        /**
         * Answer — `string`
         *
         *
         */
        answer?: string;
      }>
    >;
  };

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;
}

/**
 * Button
 *
 *
 */
export interface Button extends SanityDocument {
  _type: "button";

  /**
   * Text — `string`
   *
   *
   */
  text?: string;

  /**
   * Path — `string`
   *
   *
   */
  path?: string;
}

/**
 * Service
 *
 *
 */
export interface Service extends SanityDocument {
  _type: "service";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type Documents =
  | Settings
  | Logos
  | Pricing
  | Testimonials
  | Faqs
  | Cta
  | LandingPage
  | About
  | Careers
  | SuccessStories
  | MarketingSolutions
  | Button
  | Service;
