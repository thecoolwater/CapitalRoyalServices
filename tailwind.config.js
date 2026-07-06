/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#071832',
        royal: '#1766d1',
        gold: '#c99a3d',
        lightGold: '#f3d487',
        porcelain: '#f7f9fc',
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'Inter', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 24px 70px rgba(7, 24, 50, 0.16)',
        gold: '0 16px 42px rgba(201, 154, 61, 0.25)',
      },
      backgroundImage: {
        'navy-royal': 'linear-gradient(135deg, #071832 0%, #0c2f63 58%, #1766d1 100%)',
        'gold-soft': 'linear-gradient(135deg, #c99a3d 0%, #f3d487 100%)',
      },
    },
  },
  plugins: [],
};
