
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                // Custom colors for our SDG elderly care theme
                sage: {
                    50: '#f8faf8',
                    100: '#e8f0e8',
                    200: '#d1e0d2',
                    300: '#adc5af',
                    400: '#85a588',
                    500: '#5e7f61',
                    600: '#4a664c',
                    700: '#3e513f',
                    800: '#344136',
                    900: '#2c372e',
                },
                peach: {
                    50: '#fff8f5',
                    100: '#fff0e9',
                    200: '#fddbc9',
                    300: '#fbbda0',
                    400: '#f8966a',
                    500: '#f57746',
                    600: '#e15a27',
                    700: '#bc4820',
                    800: '#963a1e',
                    900: '#7c321d',
                },
                sky: {
                    50: '#f4f9fd',
                    100: '#e8f3fa',
                    200: '#c7e3f4',
                    300: '#94caea',
                    400: '#5baada',
                    500: '#3890c8',
                    600: '#2777ab',
                    700: '#205f8b',
                    800: '#1e4f72',
                    900: '#1c435f',
                },
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'gentle-pulse': {
                    '0%, 100%': {
                        opacity: '1',
                        transform: 'scale(1)'
                    },
                    '50%': {
                        opacity: '0.95',
                        transform: 'scale(1.05)'
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.5s ease-out forwards',
                'gentle-pulse': 'gentle-pulse 3s ease-in-out infinite'
			},
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: '65ch',
                        color: 'var(--foreground)',
                        a: {
                            color: 'var(--primary)',
                            '&:hover': {
                                color: 'var(--primary-foreground)',
                            },
                        },
                    },
                },
            },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
