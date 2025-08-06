// esbuild.config.js
import { build } from "esbuild";
const watchMode = process.argv.includes("--watch");

build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    outfile: "dist/index.js",
    platform: "node",
    format: "cjs",
    sourcemap: true,
    target: ["node18"],
    minify: true,
})
    .then(() => {
        console.log("Build finished.");
    })
    .catch(() => process.exit(1));
