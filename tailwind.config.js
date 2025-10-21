module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#F6C34B',
          600: '#F3B431'
        },
        beige: {
          DEFAULT: '#F7EBD9',
          600: '#ECD8B9'
        },
        accent: '#DEB88F'
      }
    }
  },
  plugins: [],
}
