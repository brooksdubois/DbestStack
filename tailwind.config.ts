import type { Config } from 'tailwindcss';
import flowbite from 'flowbite/plugin';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: { extend: {} },
  plugins: [ flowbite ],
} satisfies Config;
