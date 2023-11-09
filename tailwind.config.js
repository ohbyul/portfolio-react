module.exports = {
    darkMode: 'class',
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
      extend: {},
      colors: {
        'my-color': '#00FF7F',
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }