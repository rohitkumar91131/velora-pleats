import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const site = require("./lib/lib.json");

/** @type {import('next').NextConfig} */
const nextConfig = {};

nextConfig.redirects = async () => site.site.legacyRedirects.map((redirect) => ({
  ...redirect,
  permanent: true,
}));

export default nextConfig;
