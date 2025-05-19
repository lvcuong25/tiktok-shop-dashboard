import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Crypto } from '@peculiar/webcrypto'

// ✅ Thêm dòng này để patch global crypto
if (!globalThis.crypto) {
  globalThis.crypto = new Crypto()
}

export default defineConfig({
  plugins: [react()]
})
