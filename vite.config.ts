import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                maisonFragile: resolve(__dirname, "projects/maison-fragile.html"),
                axisByTesla: resolve(__dirname, "projects/axis-by-tesla.html"),
                himachal: resolve(__dirname, "projects/himachal.html"),
                olivetti: resolve(__dirname, "projects/olivetti.html"),
                baiHuo: resolve(__dirname, "projects/bai-huo.html"),
                autourDesMurs: resolve(__dirname, "projects/autour-des-murs.html"),
                paintings: resolve(__dirname, "projects/painting.html"),
                personal: resolve(__dirname, "projects/personal.html"),
                zeroToInfinity: resolve(__dirname, "projects/zero-to-infinity.html"),
            },
        },
    },
});