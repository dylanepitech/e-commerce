import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,  // Autoriser les certificats auto-signés
        // Note: Si vous avez un certificat auto-signé pour https://127.0.0.1:8000,
        // assurez-vous que `secure` est réglé sur `false` pour les environnements de développement.
      },
    },
  },
});
