import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'brand-navy': '#1E3A5F',
        'calm-blue': '#4A90A4',
        'morning-gold': '#E5A44C',
        // Neutral Colors
        'dark-gray': '#1A1A1A',
        'medium-gray': '#6B7280',
        'light-gray': '#F8F9FA',
        // Semantic Colors
        'success': '#10B981',
        'warning': '#F59E0B',
        'error': '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        // Mobile type scale
        'h1-mobile': ['28px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2-mobile': ['24px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3-mobile': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        // Desktop type scale
        'h1-desktop': ['48px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2-desktop': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'h3-desktop': ['20px', { lineHeight: '1.3', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
