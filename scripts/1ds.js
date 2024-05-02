// 1DS initialization.
const analytics = new oneDS.ApplicationInsights();
var config = {
    instrumentationKey: "df7baf4530c843e3aa2af4b0772d887e-437761a3-5b14-45c1-a6ed-742c832d01b1-7030",
    propertyConfiguration: { // Properties Plugin configuration.
        // Set with the CCPA gpcDataSharingOptIn property to GPC_DataSharingOptIn. UHF handles both GPC (browser) and AMC (MS account) 
        // in GPC_DataSharingOptIn global variable. Page refresh will show if CCPA was updated. No callback is currently available.
        //gpcDataSharingOptIn: GPC_DataSharingOptIn, 
        gpcDataSharingOptIn: false, // Due to cross domain issue, it is always false for this project.
        callback: {
            // Set userConsentDetails callback when global siteConsent variable is available, after consent banner is initialized in UHF.
            userConsentDetails: undefined 
        },
    },
    webAnalyticsConfiguration: { // Web Analytics Plugin configuration
        coreData: {
        },
        autoCapture: {
            scroll: true,
            pageView: true,
            onLoad: true,
            onUnload: true,
            click: true,
            resize: true,
            jsError: true,
        },
        urlCollectQuery: true, // The default is false, hence very Important.
        urlCollectHash: true, // The default is false, hence very Important.
        useShortNameForContentBlob: true // The default is true.
    }
};
try {
    config.webAnalyticsConfiguration.coreData.pageName = pageName;
} catch (e) {
    // If that didn't work, just don't set pageName so it will fall back to default.
}

// Callback for onInitCallback event triggered by the consent banner initialization via UHF.
function onInitCallback(categoryPreferences) {
    console.log("onInitCallback", categoryPreferences);

    // Set callback for userConsentDetails.
    config.propertyConfiguration.callback.userConsentDetails = siteConsent ? siteConsent.getConsent : undefined;
    
    //Initialize 1DS SDK.
    analytics.initialize(config, []);

    handleConsentPreferences(categoryPreferences);
}

// Callback for onConsentChanged event triggered by a consent banner update via UHF.
function onConsentChanged(categoryPreferences) {
    console.log("onConsentChanged", categoryPreferences);
    handleConsentPreferences(categoryPreferences);
}

function handleConsentPreferences(categoryPreferences) {
    // Block or enable the writing and reading of all third-party Optional/Non-essential cookies. These equate to cookies with categories 3A, 3B, and 3C 
    // that have non-Microsoft owned domains. Accomplished by blocking/enabling 3rd party pixels, scripts, tags, and beacons before they fire.

    // The "GPC_DataSharingOptIn" was specifically added for CCPA and not specifically for EUCC compliance so it shouldn't really be set here.
    // If it needs to be set after analytics initialization use analytics.getPropertyManager().getPropertiesContext().web.gpcDataSharingOptIn = true;

    // Catalysis typically does not deal with categoryPreferences.Advertising and categoryPreferences.SocialMedia so nothing to do with those.

    // QUESTION ON ANALYTICS (1DS)
    // 1DS is categoryPreferences.Analytics. Anything we need to do special for this for true/false? Already setting config callback for details in 1DS payload. 
    // Is that sufficient for tagging 1st party data to stop use downstream for 1DS?
    
    // Don't know if this actually works or not.
    // By default, the 1DS JS SDK does not collect or write non-essential cookies. However, adopters have the option to turn on the collection of some 
    // non-essential cookies (e.g., MicrosoftApplicationsTelemetryDeviceId) which requires user consent. This can be done by turning off the 
    // config.disableCookiesUsage setting (set value to true).

    // if (categoryPreferences.Analytics) {
    //     // If not already enabled, do so here.
    // } else {
    //     // If not already disabled, do so here.
    // }
}

if (WcpConsent) {
    // Set consent callbacks.
    WcpConsent.onInitCallback(onInitCallback);
    WcpConsent.onConsentChanged(onConsentChanged);
} else {
    console.log("No consent banner so no 1DS initialization.");

    // Assuming siteConsent would also not be defined.
    // analytics.initialize(config, []);
}
