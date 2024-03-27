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
 * Global Images
 *
 *
 */
export interface GlobalImages extends SanityDocument {
  _type: "globalImages";

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
}

/**
 * Award
 *
 *
 */
export interface Award extends SanityDocument {
  _type: "award";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
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
  };

  /**
   * Section 2 — `object`
   *
   *
   */
  section2?: {
    _type: "section2";
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
      }>
    >;

    /**
     * Features Alt — `object`
     *
     *
     */
    featuresAlt?: {
      _type: "featuresAlt";
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
        }>
      >;
    };

    /**
     * Who We Serve — `object`
     *
     *
     */
    whoWeServe?: {
      _type: "whoWeServe";
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
    };
  };

  /**
   * Section 3 — `object`
   *
   *
   */
  section3?: {
    _type: "section3";
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
  };

  /**
   * FAQs — `object`
   *
   *
   */
  faqs?: {
    _type: "faqs";
    /**
     * Title — `string`
     *
     *
     */
    title?: string;

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
         * Answer — `blockContent`
         *
         *
         */
        answer?: BlockContent;
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
 * Method Page
 *
 *
 */
export interface MethodPage extends SanityDocument {
  _type: "methodPage";

  /**
   * Header — `object`
   *
   *
   */
  header?: {
    _type: "header";
    /**
     * Top Text — `string`
     *
     *
     */
    topText?: string;

    /**
     * Title — `string`
     *
     *
     */
    title?: string;

    /**
     * Description — `text`
     *
     *
     */
    description?: string;
  };

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
   * Section 1 — `object`
   *
   *
   */
  section1?: {
    _type: "section1";
    /**
     * CTO Card — `object`
     *
     *
     */
    ctoCard?: {
      _type: "ctoCard";
      /**
       * Text — `text`
       *
       *
       */
      text?: string;

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
       * CTA — `reference`
       *
       *
       */
      cta?: SanityReference<Cta>;
    };

    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Feature Cards — `array`
     *
     *
     */
    featureCards?: Array<
      SanityKeyed<{
        _type: "featureCard";
        /**
         * Icon — `image`
         *
         *
         */
        icon?: {
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

        /**
         * Description — `text`
         *
         *
         */
        description?: string;
      }>
    >;
  };

  /**
   * Section 2 — `object`
   *
   *
   */
  section2?: {
    _type: "section2";
    /**
     * Heading — `object`
     *
     *
     */
    heading?: {
      _type: "heading";
      /**
       * Top Text — `string`
       *
       *
       */
      topText?: string;

      /**
       * Title — `string`
       *
       *
       */
      title?: string;

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
    };

    /**
     * Service List Item 1 — `object`
     *
     *
     */
    serviceList1?: {
      _type: "serviceList1";
      /**
       * Heading — `string`
       *
       *
       */
      heading?: string;

      /**
       * Services — `array`
       *
       *
       */
      services?: Array<
        SanityKeyed<{
          _type: "service";
          /**
           * Text — `string`
           *
           *
           */
          text?: string;

          /**
           * Sub Services — `array`
           *
           *
           */
          subServices?: Array<
            SanityKeyed<{
              /**
               * Text — `string`
               *
               *
               */
              text?: string;
            }>
          >;
        }>
      >;
    };

    /**
     * Service List Item 2 — `object`
     *
     *
     */
    serviceList2?: {
      _type: "serviceList2";
      /**
       * Heading — `string`
       *
       *
       */
      heading?: string;

      /**
       * Services — `array`
       *
       *
       */
      services?: Array<
        SanityKeyed<{
          _type: "service";
          /**
           * Text — `string`
           *
           *
           */
          text?: string;

          /**
           * Sub Services — `array`
           *
           *
           */
          subServices?: Array<
            SanityKeyed<{
              /**
               * Text — `string`
               *
               *
               */
              text?: string;
            }>
          >;
        }>
      >;
    };

    /**
     * Service List Item 3 — `object`
     *
     *
     */
    serviceList3?: {
      _type: "serviceList3";
      /**
       * Heading — `string`
       *
       *
       */
      heading?: string;

      /**
       * Services — `array`
       *
       *
       */
      services?: Array<
        SanityKeyed<{
          _type: "service";
          /**
           * Text — `string`
           *
           *
           */
          text?: string;

          /**
           * Sub Services — `array`
           *
           *
           */
          subServices?: Array<
            SanityKeyed<{
              /**
               * Text — `string`
               *
               *
               */
              text?: string;
            }>
          >;
        }>
      >;
    };

    /**
     * Service List Item 4 — `object`
     *
     *
     */
    serviceList4?: {
      _type: "serviceList4";
      /**
       * Heading — `string`
       *
       *
       */
      heading?: string;

      /**
       * Services — `array`
       *
       *
       */
      services?: Array<
        SanityKeyed<{
          _type: "service";
          /**
           * Text — `string`
           *
           *
           */
          text?: string;

          /**
           * Sub Services — `array`
           *
           *
           */
          subServices?: Array<
            SanityKeyed<{
              /**
               * Text — `string`
               *
               *
               */
              text?: string;
            }>
          >;
        }>
      >;
    };

    /**
     * Additional Services Card — `object`
     *
     *
     */
    additionalServicesCard?: {
      _type: "additionalServicesCard";
      /**
       * Title — `string`
       *
       *
       */
      title?: string;

      /**
       * Cards — `array`
       *
       *
       */
      cards?: Array<
        SanityKeyed<{
          _type: "card";
          /**
           * Title — `string`
           *
           *
           */
          title?: string;

          /**
           * Icon — `image`
           *
           *
           */
          icon?: {
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
           * Services — `array`
           *
           *
           */
          services?: Array<
            SanityKeyed<{
              _type: "service";
              /**
               * Text — `string`
               *
               *
               */
              text?: string;

              /**
               * Sub Services — `array`
               *
               *
               */
              subServices?: Array<
                SanityKeyed<{
                  /**
                   * Text — `string`
                   *
                   *
                   */
                  text?: string;
                }>
              >;
            }>
          >;
        }>
      >;
    };
  };

  /**
   * Section 3 — `object`
   *
   *
   */
  section3?: {
    _type: "section3";
    /**
     * Top Text — `string`
     *
     *
     */
    topText?: string;

    /**
     * Title — `string`
     *
     *
     */
    title?: string;

    /**
     * Feature Cards — `array`
     *
     *
     */
    featureCards?: Array<
      SanityKeyed<{
        _type: "featureCard";
        /**
         * Icon — `image`
         *
         *
         */
        icon?: {
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

        /**
         * Description — `text`
         *
         *
         */
        description?: string;

        /**
         * CTA — `reference`
         *
         *
         */
        cta?: SanityReference<Cta>;
      }>
    >;

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
  };

  /**
   * Awards Section — `object`
   *
   *
   */
  awardsSection?: {
    _type: "awardsSection";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Awards — `array`
     *
     *
     */
    awards?: Array<
      SanityKeyed<{
        _type: "award";
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

    /**
     * CTA — `reference`
     *
     *
     */
    cta?: SanityReference<Cta>;
  };

  /**
   * Section 4 — `object`
   *
   *
   */
  section4?: {
    _type: "section4";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Description — `text`
     *
     *
     */
    description?: string;

    /**
     * Feature Sets — `array`
     *
     *
     */
    featureSets?: Array<
      SanityKeyed<{
        _type: "featureSet";
        /**
         * Name — `string`
         *
         *
         */
        name?: string;

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
         * Heading — `string`
         *
         *
         */
        heading?: string;

        /**
         * Description — `text`
         *
         *
         */
        description?: string;

        /**
         * Quote — `object`
         *
         *
         */
        quote?: {
          _type: "quote";
          /**
           * Text — `text`
           *
           *
           */
          text?: string;

          /**
           * Author — `string`
           *
           *
           */
          author?: string;
        };
      }>
    >;
  };

  /**
   * Section 5 — `object`
   *
   *
   */
  section5?: {
    _type: "section5";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Logo — `reference`
     *
     *
     */
    logo?: SanityReference<Logos>;

    /**
     * Case Studies Carousel — `array`
     *
     *
     */
    caseStudiesCarousel?: Array<
      SanityKeyed<{
        _type: "carouselItem";
        /**
         * Title — `string`
         *
         *
         */
        title?: string;

        /**
         * Case Study — `reference`
         *
         *
         */
        caseStudy?: SanityReference<CaseStudy>;

        /**
         * CTA — `button`
         *
         *
         */
        cta?: Button;
      }>
    >;
  };

  /**
   * Section 6 — `object`
   *
   *
   */
  section6?: {
    _type: "section6";
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
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Description — `text`
     *
     *
     */
    description?: string;

    /**
     * CTA — `reference`
     *
     *
     */
    cta?: SanityReference<Cta>;
  };
}

/**
 * Case Study Landing Page
 *
 *
 */
export interface CaseStudyLanding extends SanityDocument {
  _type: "caseStudyLanding";

  /**
   * Top Text — `string`
   *
   *
   */
  topText?: string;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Tagline — `string`
   *
   *
   */
  tagline?: string;

  /**
   * Featured Awards — `array`
   *
   *
   */
  featuredAwards?: Array<SanityKeyedReference<Award>>;

  /**
   * Featured Case Studies Section — `object`
   *
   *
   */
  featuredCaseStudiesSection?: {
    _type: "featuredCaseStudiesSection";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Featured Case Studies — `array`
     *
     *
     */
    featuredCaseStudies?: Array<
      SanityKeyed<{
        _type: "caseStudy";
        /**
         * Case Study — `reference`
         *
         *
         */
        caseStudy?: SanityReference<CaseStudy>;

        /**
         * CTA — `button`
         *
         *
         */
        cta?: Button;
      }>
    >;
  };

  /**
   * Section 2 — `object`
   *
   *
   */
  section2?: {
    _type: "section2";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;
  };

  /**
   * Section 3 — `object`
   *
   *
   */
  section3?: {
    _type: "section3";
    /**
     * Top Text — `string`
     *
     *
     */
    topText?: string;

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
  };

  /**
   * Section 4 — `object`
   *
   *
   */
  section4?: {
    _type: "section4";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;
  };

  /**
   * FAQ Section — `reference`
   *
   *
   */
  faqSection?: SanityReference<Faqs>;
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
   * Team Section — `object`
   *
   *
   */
  teamSection?: {
    _type: "teamSection";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Description — `text`
     *
     *
     */
    description?: string;

    /**
     * CTA — `button`
     *
     *
     */
    cta?: Button;

    /**
     * Teams — `array`
     *
     *
     */
    teams?: Array<
      SanityKeyed<{
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
      }>
    >;
  };

  /**
   * Story — `object`
   *
   *
   */
  story?: {
    _type: "story";
    /**
     * Top Text — `string`
     *
     *
     */
    topText?: string;

    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Body — `blockContent`
     *
     *
     */
    body?: BlockContent;
  };

  /**
   * Feature Grid — `object`
   *
   *
   */
  featureGrid?: {
    _type: "featureGrid";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Description — `text`
     *
     *
     */
    description?: string;

    /**
     * Feature — `object`
     *
     *
     */
    feature?: {
      _type: "feature";
      /**
       * Icon — `image`
       *
       *
       */
      icon?: {
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
       * Heading — `string`
       *
       *
       */
      heading?: string;

      /**
       * Description — `text`
       *
       *
       */
      description?: string;
    };
  };

  /**
   * Testimonials — `reference`
   *
   *
   */
  testimonials?: SanityReference<Testimonials>;

  /**
   * Featured Case Study — `reference`
   *
   *
   */
  featuredCaseStudy?: SanityReference<CaseStudy>;

  /**
   * Images — `array`
   *
   *
   */
  images?: Array<SanityKeyed<GlobalImages>>;

  /**
   * Custom Strategy Section — `object`
   *
   *
   */
  customStrategySection?: {
    _type: "customStrategySection";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Description — `text`
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
     * CTA — `button`
     *
     *
     */
    cta?: Button;
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
 * Case Study
 *
 *
 */
export interface CaseStudy extends SanityDocument {
  _type: "caseStudy";

  /**
   * Header Image — `image`
   *
   *
   */
  headerImage?: {
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
   * Awards — `array`
   *
   *
   */
  awards?: Array<SanityKeyedReference<Award>>;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Stats — `array`
   *
   *
   */
  stats?: Array<
    SanityKeyed<{
      _type: "stat";
      /**
       * Statistic — `string`
       *
       * The statistic to display.
       */
      statistic?: string;

      /**
       * Context — `string`
       *
       * The text to display next to the statistic. For example, "users" or "downloads".
       */
      context?: string;
    }>
  >;

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;
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
 * Services
 *
 *
 */
export interface Services extends SanityDocument {
  _type: "services";

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
   * Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Sub Category — `reference`
   *
   *
   */
  subCategory?: SanityReference<Services>;

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
  };

  /**
   * Features — `object`
   *
   *
   */
  features?: {
    _type: "features";
    /**
     * Grid — `object`
     *
     *
     */
    grid?: {
      _type: "grid";
      /**
       * Title — `string`
       *
       *
       */
      title?: string;

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
       * Grid — `array`
       *
       *
       */
      grid?: Array<
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
        }>
      >;
    };

    /**
     * Bullet List — `object`
     *
     *
     */
    bulletList?: {
      _type: "bulletList";
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
       * List — `array`
       *
       *
       */
      list?: Array<SanityKeyed<string>>;

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
    };

    /**
     * Number List — `object`
     *
     *
     */
    numberList?: {
      _type: "numberList";
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
       * List — `array`
       *
       *
       */
      list?: Array<
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
        }>
      >;
    };
  };

  /**
   * CTA — `object`
   *
   *
   */
  cta?: {
    _type: "cta";
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
     * Button — `reference`
     *
     *
     */
    button?: SanityReference<Button>;

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
  };

  /**
   * FAQs — `object`
   *
   *
   */
  faqs?: {
    _type: "faqs";
    /**
     * Title — `string`
     *
     *
     */
    title?: string;

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
         * Answer — `blockContent`
         *
         *
         */
        answer?: BlockContent;
      }>
    >;
  };
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  | SanityKeyed<Code>
  | SanityKeyed<{
      _type: "embed";
      /**
       * url — `url`
       *
       * Enter the URL to Embed 
(eg: https://youtube.com/embed/xxx or https://open.spotify.com/embed/track/xxxx)
       */
      url?: string;

      /**
       * height — `number`
       *
       * Enter Required Height for this Embed. Leave it blank for 16:9 ratio.
       */
      height?: number;
    }>
  | SanityKeyed<{
      _type: "tables";
      /**
       * Add Table — `table`
       *
       * The first row will be treated as the header. If you want to skip, just leave the first row empty.
       */
      table?: Table;
    }>
>;

export type Documents =
  | Settings
  | Logos
  | Pricing
  | Testimonials
  | Faqs
  | Cta
  | GlobalImages
  | Award
  | LandingPage
  | MethodPage
  | CaseStudyLanding
  | About
  | Careers
  | CaseStudy
  | MarketingSolutions
  | Button
  | Services;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Code = any;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Table = any;
