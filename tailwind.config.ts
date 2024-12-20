import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px', 
      'lg': '1024px',
      'xlg': '1440px',
      'xl': '1520px',
      '2xl': '1716px',
    },
    extend: {
      colors: {
        primary: '#00ABE1',
        secondary: '#127398',
      },
      backgroundImage: {
        "hero-image": "url('/background.png')",
        "hero-face": "url('/Faces.png')",
        "hero-face2": "url('/Faces2.png')",
        "hero-Background-section": "url('/Background-section2.png')",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '0rem',
          xl: '1rem',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
