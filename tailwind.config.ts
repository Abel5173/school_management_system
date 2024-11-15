import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                // Gradient 1: Vibrant Blue (for Main Cards)
                "gradient-card": "linear-gradient(135deg, #2F80ED 0%, #56CCF2 100%)",

                // Gradient 2: Fresh Green (for Success/Positive Messages)
                "gradient-green": "linear-gradient(135deg, #27AE60 0%, #6FCF97 100%)",

                // Gradient 3: Subtle Purple (for Secondary Info or Notifications)
                "gradient-purple": "linear-gradient(135deg, #9B51E0 0%, #BB6BD9 100%)",

                // Gradient 4: Warm Sunrise (for Highlights or Alerts)
                "gradient-sunrise": "linear-gradient(135deg, #F2994A 0%, #F2C94C 100%)",

                // Gradient 5: Calm Blue (for Backgrounds or Headers)
                "gradient-calm": "linear-gradient(135deg, #56CCF2 0%, #2F80ED 100%)",
            },
            colors: {
                primary: "#2F80ED", // Primary Blue
                secondary: "#56CCF2", // Light Blue
                success: "#27AE60", // Green for success messages
                info: "#9B51E0", // Purple for informational cards
                warning: "#F2994A", // Orange for warnings and alerts
                background: "#F7F9FC", // Light background for contrast
                text: "#333333", // Dark text for readability
                accent: "#6FCF97", // Light Green accent for highlights
                cta: "#FF5C8D", // Pink for call-to-action buttons
                highlight: "#BB6BD9", // Light Purple for subtle highlights
            }
        },
    },
    plugins: [],
};
export default config;