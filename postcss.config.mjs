/** @type {import('postcss-load-config').Config} */
import tailwindPostcss from "@tailwindcss/postcss";

const config = {
  // Use array syntax to pass the plugin instance directly
  plugins: [tailwindPostcss()],
};

export default config;
