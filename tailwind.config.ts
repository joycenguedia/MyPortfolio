import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {

      screens:{
        
        'smPhone': '320px',  // Small phones (e.g., iPhone SE)
        'phone': '360px',      // Regular phones
        'tablet': '768px',     // Tablets (e.g., iPad)
        'largeTablet': '900px', // Large tablets (e.g., iPad Pro)
        'laptop': '1024px',    // Laptops
        'desktop': '1280px',   // Desktops
        'bigDesktop': '1600px' // Very large desktops
     

    },


      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
