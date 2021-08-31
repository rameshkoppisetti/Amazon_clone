module.exports = {
    mode: "jit",
    purge: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                amazon_blue: {
                    light: "#232F3E",
                    DEFAULT: "#131921",
                    bu: "#37475a",
                },
            },
        },
        fontFamily: {
            sans: ["Helvetica Neue", "Arial", "ui-sans-serif", "system-ui"],
            serif: ["ui-serif", "Georgia"],
            mono: ["ui-monospace", "SFMono-Regular"],
            display: ["Oswald"],
            body: ['"Open Sans"'],
        },

        fontSize: {
            vs: ".65rem",
            sh: ".7rem",
            xs: ".75rem",
            sm: ".875rem",
            tiny: ".875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            vl: "1.5rem",
            vvl: "1.875rem",
            vvvl: "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem",
            "7xl": "5rem",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/line-clamp")],
};