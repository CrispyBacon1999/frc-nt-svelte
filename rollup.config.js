import autoPreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";
import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import pkg from "./package.json";

const name = pkg.name
    .replace(/^(@\S+\/)?(svelte-)?(\S+)/, "$3")
    .replace(/^\w/, (m) => m.toUpperCase())
    .replace(/-\w/g, (m) => m[1].toUpperCase());

function typeCheck() {
    return {
        writeBundle() {
            require("child_process").spawn("svelte-check", {
                stdio: ["ignore", "inherit", "inherit"],
                shell: true,
            });
        },
    };
}

export default {
    input: "src/index.ts",
    output: [
        { file: pkg.module, format: "es" },
        { file: pkg.main, format: "umd", name },
    ],
    plugins: [
        typeCheck(),
        typescript({ sourceMap: true, rootDir: "./src" }),
        svelte({
            preprocess: autoPreprocess(),
            emitCss: false,
        }),
        resolve(),
    ],
};
