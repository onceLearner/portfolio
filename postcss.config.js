module.exports = {
  plugins: [
    "tailwindcss",

    // commented those lines to solve the problem that happens while doing npm run build
    // process.env.NODE_ENV === "production"
    //   ? [
    //       "@fullhuman/postcss-purgecss",
    //       {
    //         content: [
    //           "./pages/**/*.{js,jsx,ts,tsx}",
    //           "./src/components/**/*.{js,jsx,ts,tsx}",
    //         ],
    //         defaultExtractor: (content) =>
    //           content.match(/[w-/:]+(?<!:)/g) || [],
    //       },
    //     ]
    //   : undefined,
    "autoprefixer",
  ],
};
