export default {
  /**
   * The global configuration.
   */
  global: {
    /**
     * Title of the app.
     * You can change it by your own.
     */
    title: '萝卜AI',

    /**
     * Logo url of the app.
     * If provided which starts with http/https prefix, will be used.
     * If not provided, will by default use @/assets/images/logo.svg as instead, you can replace it.
     */
    logoUrl: undefined,

    /**
     * Favicon url of the app.
     * If provided which starts with http/https prefix, will be used.
     * If not provided, will by default use @/assets/images/favicon.ico as instead, you can replace it.
     */
    faviconUrl: undefined,

    /**
     * The default language of the app, enum as 'zh-cn', 'en'.
     */
    language: 'zh-cn'
  },

  /**
   * The left navigation configuration.
   */
  navigation: {
    /**
     * Show chat entry in left navigation.
     */
    chat: true,

    /**
     * Show midjourney entry in left navigation.
     */
    midjourney: true,

    /**
     * Show console entry in left navigation.
     */
    console: true,

    /**
     * Show distribution entry in left navigation.
     */
    distribution: true
  },

  /**
   * The features configuration.
   */
  features: {
    /**
     * The chat feature config.
     */
    chat: {},

    /**
     * The midjourney feature config.
     */
    midjourney: {}
  },

  /**
   * The distribution configuration.
   */
  distribution: {
    /**
     * The default inviter id to use when no inviter id (in url) is provided,
     */
    defaultInviterId: undefined,

    /**
     * Force the inviter id to be used, even if an inviter id is provided.
     * Note: if the forceInviterId is set, there will be no distribution page in console except for the forced inviter.
     */
    forceInviterId: '597a9416-5ece-4a45-bb0b-a43e2431a722'
  },

  /**
   * The auth configuration.
   */
  auth: {
    /**
     * The default auth provider, enum as 'wechat', 'email', 'phone'.
     */
    defaultProvider: 'email',

    /**
     * The auth provider configuration.
     */
    providers: {
      /**
       * The auth provider configuration for wechat.
       */
      wechat: {
        /**
         * Enable wechat auth provider.
         */
        enabled: false
      },

      /**
       * The auth provider configuration for email.
       */
      email: {
        /**
         * Enable email auth provider.
         */
        enabled: true
      },

      /**
       * The auth provider configuration for phone.
       */
      phone: {
        /**
         * Enable phone auth provider.
         */
        enabled: true
      }
    }
  }
};
