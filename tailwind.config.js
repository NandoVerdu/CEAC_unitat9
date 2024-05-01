/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				wave: {
				  '0%': { transform: 'rotate(0.0deg)' },
				  '10%': { transform: 'rotate(14deg)' },
				  '20%': { transform: 'rotate(-8deg)' },
				  '30%': { transform: 'rotate(14deg)' },
				  '40%': { transform: 'rotate(-4deg)' },
				  '50%': { transform: 'rotate(10.0deg)' },
				  '60%': { transform: 'rotate(0.0deg)' },
				  '100%': { transform: 'rotate(0.0deg)' },
				},
				refine: {
				   '0%': {transform: 'translate(0%)', },
				  	'20%': {transform: 'translate(-30%)', },
					'40%': {transform: 'translate(0%)', },
					'60%': {transform: 'translate(30%)', },
					'80%': {transform: 'translate(0%)', },
					'100%': {transform: 'translate(0%)', },
				  },
			  },
			animation:{
				'waving-hand':'wave 2s linear infinite',
				'refine-slide': 'refine 4s ease-in-out infinite',
				'waving-2':'wave 3s ease-in-out infinite'
			} ,
		},
	},
	plugins: [],
}

export default config
