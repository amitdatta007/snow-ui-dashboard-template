import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "foreground-100": "var(--foreground-100)",
        "foreground-80": "var(--foreground-80)",
        "foreground-60": "var(--foreground-60)",
        "foreground-40": "var(--foreground-40)",
        "foreground-20": "var(--foreground-20)",
        "foreground-10": "var(--foreground-10)",
        "foreground-5": "var(--foreground-5)",

        "background-100": "var(--background-100)",
        "background-80": "var(--background-80)",
        "background-60": "var(--background-60)",
        "background-40": "var(--background-40)",
        "background-20": "var(--background-20)",
        "background-10": "var(--background-10)",
        "background-5": "var(--background-5)",

        "primary": "var(--primary)",
        "primary-blue": "var(--primary-blue)",
        "primary-Purple": "var(--primary-Purple)",
        "primary-purple-50": "var(--primary-purple-50)",
        "primary-light": "var(--primary-light)",

        "indigo": "var(--indigo)",
        "purple": "var(--purple)",
        "cyan": "var(--cyan)",
        "blue": "var(--blue)",
        "green": "var(--green)",
        "mint": "var(--mint)",
        "yellow": "var(--yellow)",
        "orange": "var(--orange)",
        "red": "var(--red)",
      },
    },
  },
  plugins: [],
};
export default config;