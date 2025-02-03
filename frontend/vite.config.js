import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE");

  console.log("🔍 VITE_BACKEND_URL đã load:", env.VITE_BACKEND_URL);

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
