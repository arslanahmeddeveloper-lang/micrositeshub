/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1340px', // Custom max width
            },
        },
        extend: {
            colors: {
                primary: '#4F46E5', // Royal Blue from screenshot
                secondary: '#3B82F6', // Lighter blue accent
                dark: '#0F172A', // Slate 900 for text/headings
                card: '#1E1B4B', // Deep Navy for Services/Footer/Tabs
                muted: '#64748B', // Slate 500 for paragraph text
                bgsoft: '#F8FAFC', // Slate 50 for background sections
            },
            fontFamily: {
                sans: ['Inter', 'Poppins', 'sans-serif'],
                oswald: ['"Oswald"', 'sans-serif'],
            },
            boxShadow: {
                'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            },
            borderRadius: {
                'xl': '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem',
                'full': '9999px',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-33.333333%)' }
                }
            },
            animation: {
                marquee: 'marquee 20s linear infinite'
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}
