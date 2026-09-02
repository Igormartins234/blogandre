
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'serif': ['Crimson Text', 'Georgia', 'serif'],
                'display': ['Playfair Display', 'Georgia', 'serif'],
            },
            colors: {
                'primary': {
                    '50': '#f0f9ff',
                    '100': '#e0f2fe',
                    '200': '#bae6fd',
                    '300': '#7dd3fc',
                    '400': '#38bdf8',
                    '500': '#0ea5e9',
                    '600': '#0284c7',
                    '700': '#0369a1',
                    '800': '#075985',
                    '900': '#0c4a6e',
                },
                'secondary': {
                    '50': '#faf5ff',
                    '100': '#f3e8ff',
                    '200': '#e9d5ff',
                    '300': '#d8b4fe',
                    '400': '#c084fc',
                    '500': '#a855f7',
                    '600': '#9333ea',
                    '700': '#7c3aed',
                    '800': '#6b21a8',
                    '900': '#581c87',
                },
                'accent': {
                    '50': '#ecfdf5',
                    '100': '#d1fae5',
                    '200': '#a7f3d0',
                    '300': '#6ee7b7',
                    '400': '#34d399',
                    '500': '#10b981',
                    '600': '#059669',
                    '700': '#047857',
                    '800': '#065f46',
                    '900': '#064e3b',
                },
                'neutral': {
                    '50': '#fafafa',
                    '100': '#f5f5f5',
                    '200': '#e5e5e5',
                    '300': '#d4d4d4',
                    '400': '#a3a3a3',
                    '500': '#737373',
                    '600': '#525252',
                    '700': '#404040',
                    '800': '#262626',
                    '900': '#171717',
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-slow': 'bounce 3s infinite',
                'spin-slow': 'spin 3s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        }
    }
}
