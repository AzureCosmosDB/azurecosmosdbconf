// 1DS initialization
const analytics = new oneDS.ApplicationInsights();
var config = {
    instrumentationKey: "df7baf4530c843e3aa2af4b0772d887e-437761a3-5b14-45c1-a6ed-742c832d01b1-7030",
    propertyConfiguration: { // Properties Plugin configuration
        gpcDataSharingOptIn: false,
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
        urlCollectQuery: true, // The default is false, hence very Important
        urlCollectHash: true, // The default is false, hence very Important
        useShortNameForContentBlob: true // The default is true
    }
};
try {
    config.webAnalyticsConfiguration.coreData.pageName = pageName;
} catch (e) {
    // if that didn't work, just don't set pageName so it will fall back to default.
}
//Initialize SDK
analytics.initialize(config, []);
