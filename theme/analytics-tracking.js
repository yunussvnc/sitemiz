/**
 * Google Analytics ve Tracking Kodları
 * Site genelinde kullanılan analitik ve takip kodları
 */

// Google Analytics Tracking ID
const GA_TRACKING_ID = 'G-N2EY8LN1V2';

// Google Tag Manager Consent Mode
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}

// Consent Mode Ayarları (GDPR Uyumlu)
gtag('consent', 'default', {
    'ad_personalization': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'denied',
    'security_storage': 'denied',
    'personalization_storage': 'denied',
    'region': [
        'AT', 'BE', 'BG', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR',
        'GB', 'GR', 'HR', 'HU', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MT',
        'NL', 'NO', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'
    ],
    'wait_for_update': 500
});

// Google Site Kit Consent Category Map
window._googlesitekitConsentCategoryMap = {
    'statistics': ['analytics_storage'],
    'marketing': ['ad_storage', 'ad_user_data', 'ad_personalization'],
    'functional': ['functionality_storage', 'security_storage'],
    'preferences': ['personalization_storage']
};

// Google Site Kit Consents
window._googlesitekitConsents = {
    'ad_personalization': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'denied',
    'security_storage': 'denied',
    'personalization_storage': 'denied',
    'region': [
        'AT', 'BE', 'BG', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR',
        'GB', 'GR', 'HR', 'HU', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MT',
        'NL', 'NO', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'
    ],
    'wait_for_update': 500
};

// Google Analytics Yapılandırması
gtag('set', 'linker', {
    'domains': ['secesta.com']
});

gtag('js', new Date());
gtag('set', 'developer_id.dZTNiMT', true);
gtag('config', GA_TRACKING_ID, {
    'googlesitekit_post_type': 'page'
});

// LiteSpeed Cache Referrer Tracking
var litespeed_docref = sessionStorage.getItem('litespeed_docref');
if (litespeed_docref) {
    Object.defineProperty(document, 'referrer', {
        get: function () {
            return litespeed_docref;
        }
    });
    sessionStorage.removeItem('litespeed_docref');
}

/**
 * Event Tracking Fonksiyonları
 */

// Buton Tıklama Takibi
function trackButtonClick(buttonName, buttonLocation) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            'event_category': 'Button',
            'event_label': buttonName,
            'event_location': buttonLocation
        });
    }
}

// Form Gönderimi Takibi
function trackFormSubmission(formName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
            'event_category': 'Form',
            'event_label': formName
        });
    }
}

// Sayfa Görüntüleme Takibi
function trackPageView(pageName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            'page_title': pageName,
            'page_location': window.location.href
        });
    }
}

// Dosya İndirme Takibi
function trackDownload(fileName, fileType) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'file_download', {
            'event_category': 'Download',
            'event_label': fileName,
            'file_type': fileType
        });
    }
}

// Dış Link Tıklama Takibi
function trackOutboundLink(url) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            'event_category': 'Outbound Link',
            'event_label': url,
            'transport_type': 'beacon'
        });
    }
}

// Export fonksiyonlar
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        trackButtonClick,
        trackFormSubmission,
        trackPageView,
        trackDownload,
        trackOutboundLink
    };
}

