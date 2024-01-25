/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_TRACKER_URL: string
    readonly VITE_TRACKER_API_KEY: string
    readonly VITE_TRACKER_WEBSITE_ID: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}