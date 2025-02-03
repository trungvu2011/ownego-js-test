import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE");

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_BACKEND_URL, // Đọc từ .env
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
