/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			animation: {
				'fade-in-up': 'fadeInUp 0.6s ease-out both',
				'fade-in': 'fadeIn 0.6s ease-out both',
				'fade-in-left': 'fadeInLeft 0.5s ease-out both',
				'fade-in-right': 'fadeInRight 0.5s ease-out both',
				'scale-in': 'scaleIn 0.5s ease-out both',
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(24px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeInLeft: {
					'0%': { opacity: '0', transform: 'translateX(-24px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				fadeInRight: {
					'0%': { opacity: '0', transform: 'translateX(24px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				scaleIn: {
					'0%': { opacity: '0', transform: 'scale(0.92)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
			},
		},
	},
	plugins: [],
}
