<<<<<<< HEAD
/// <reference types="vite/client" />
=======

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ADMIN_PASSWORD: string
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
>>>>>>> 5bdc087 (debug admin login error, fix database error and added update event in dashboard)
