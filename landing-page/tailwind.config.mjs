/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {}
    	}
    },
	plugins: [require("tailwindcss-animate")],
}

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
	theme:{
		extend: {},
	},
	plugins: [],
};