interface Window {
    configureTracker?: (apiKey: string, websiteId: string, trackerUrl: string) => void;
    trackCustomEvent?: (label: string, websiteId: any) => void;
}