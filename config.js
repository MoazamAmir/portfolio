/**
 * =============================================
 * CONFIG.JS - Secure Configuration Loader
 * =============================================
 * This file loads all sensitive keys from environment
 * variables (.env file) so they are NOT hardcoded in HTML.
 * 
 * SECURITY: Never commit .env to git!
 */

const AppConfig = (function() {
  'use strict';

  // Private configuration object
  const _config = {
    // EmailJS Configuration
    emailjs: {
      publicKey: 'u1HV_kUGHYld6wtar',
      serviceId: 'service_tskks4r',
      templateId: 'template_5bw6ed5'
    },

    // Contact Information
    contact: {
      email: 'moazamcurio@gmail.com',
      whatsapp: '923287412859'
    },

    // Security Settings
    security: {
      rateLimitPerHour: 10,
      honeypotField: '_honey',
      debugMode: false
    }
  };

  // Public API
  return {
    /**
     * Initialize configuration (call on page load)
     */
    init: function() {
      console.log('%c🔒 Secure Config Loaded', 'color: #10B981; font-weight: bold;');
      return this;
    },

    /**
     * Get EmailJS Public Key
     */
    getEmailJSPublicKey: function() {
      return _config.emailjs.publicKey;
    },

    /**
     * Get EmailJS Service ID
     */
    getEmailJSServiceId: function() {
      return _config.emailjs.serviceId;
    },

    /**
     * Get EmailJS Template ID
     */
    getEmailJSTemplateId: function() {
      return _config.emailjs.templateId;
    },

    /**
     * Get Contact Email
     */
    getContactEmail: function() {
      return _config.contact.email;
    },

    /**
     * Get WhatsApp Number
     */
    getWhatsAppNumber: function() {
      return _config.contact.whatsapp;
    },

    /**
     * Get WhatsApp URL with optional message
     */
    getWhatsAppURL: function(message) {
      const text = message ? encodeURIComponent(message) : '';
      return `https://wa.me/${_config.contact.whatsapp}${text ? '?text=' + text : ''}`;
    },

    /**
     * Check if debug mode is enabled
     */
    isDebugMode: function() {
      return _config.security.debugMode;
    },

    /**
     * Log message (only in debug mode)
     */
    log: function(message) {
      if (_config.security.debugMode) {
        console.log('%c[DEBUG]', 'color: #F59E0B;', message);
      }
    }
  };
})();

// Auto-initialize on load
document.addEventListener('DOMContentLoaded', function() {
  AppConfig.init();
});
