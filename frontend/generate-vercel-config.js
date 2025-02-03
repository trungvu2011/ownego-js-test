import { writeFileSync } from "fs";
import { defineConfig, loadEnv } from "vite";

const mode = process.env.NODE_ENV || 'development';
const env = loadEnv(mode, process.cwd(), "VITE");

const backendUrl = env.VITE_BACKEND_URL;
console.log("🔍 BACKEND_URL đã load:", backendUrl);

const vercelConfig = {
    rewrites: [
        {
            source: "/api/:path*",
            destination: `${backendUrl}/api/:path*`
        }
    ]
};

writeFileSync("vercel.json", JSON.stringify(vercelConfig, null, 2));

console.log("✅ File vercel.json đã được tạo với BACKEND_URL:", backendUrl);
