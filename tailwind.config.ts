import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0F2347',
          cyan: '#2FBED5',
          cyanSoft: '#EAF9FC',
          slate: '#475569',
          line: '#D9E2EC',
          bg: '#F8FAFC',
          white: '#FFFFFF',
        },
      },
      boxShadow: {
        soft: '0 12px 28px rgba(15, 35, 71, 0.04)',
      },
    },
  },
  plugins: [],
};

export default config;
