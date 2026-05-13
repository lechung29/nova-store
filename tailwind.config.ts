/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                display: ["'Cossette Texte'", "sans-serif"],
                body: ["'Cossette Texte'", "sans-serif"],
            },
            colors: {
                apple: {
                    blue: "#2997ff",
                    silver: "#a1a1a6",
                    dark: "#1d1d1f",
                    gray: "#6e6e73",
                    light: "#f5f5f7",
                },
            },
            backgroundImage: {
                "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                "hero-gradient": "radial-gradient(ellipse at 50% 0%, rgba(41,151,255,0.15) 0%, transparent 60%)",
                "card-shine": "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)",
            },
            animation: {
                shimmer: "shimmer 1.5s infinite",
                float: "float 4s ease-in-out infinite",
                marquee: "marquee 25s linear infinite",
                "pulse-glow": "pulse-glow 2s ease-in-out infinite",
                slideDown: "slideDown 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
            },
            keyframes: {
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                "pulse-glow": {
                    "0%, 100%": { boxShadow: "0 0 0 0 rgba(41, 151, 255, 0.4)" },
                    "50%": { boxShadow: "0 0 0 12px rgba(41, 151, 255, 0)" },
                },
                slideDown: {
                    from: { transform: "translateY(-80px)", opacity: "0" },
                    to: { transform: "translateY(0)", opacity: "1" },
                },
            },
            backdropBlur: {
                xs: "2px",
            },
            borderColor: {
                DEFAULT: "rgba(255, 255, 255, 0.08)",
            },
        },
    },
    plugins: [],
};

export default config;
