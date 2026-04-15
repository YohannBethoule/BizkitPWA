interface UmamiTracker {
    track(event: string, data?: Record<string, string | number | boolean>): void
    track(callback: (props: { hostname: string; language: string; referrer: string; screen: string; title: string; url: string; website: string }) => Record<string, unknown>): void
}

declare global {
    interface Window {
        umami?: UmamiTracker
    }
}

export {}