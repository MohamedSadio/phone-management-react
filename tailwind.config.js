module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      maxHeight: {
        '260px': '260px',
      },
      minHeight:{
        '260px':'260px',
        '520px':'520px'
      },
      maxWidth: {
        '240px': '240px',
        '200px': '200px'
      },
      minWidth:{
        '240px':'240px'
      },
      fontSize:{
        '12px':'12px',
        '16px':'16px',
        '14px':'14px'
      },
      fontWeight: {
        'bold': '700',  // Ajout du style bold ici
      },
      scale: ['hover'],
      spacing: {
        '5px': '5px',
      },
      width: {
        'fit': 'fit-content',
        '20%':'20%',
        '25%':'25%',
        '30%': '30%',
        '40%': '40%',
        '50%':'50%',
        '60%':'60%',
        '80%':'80%',
        '100%':'100%',
        '48px':'48px',
        '52px':'52px',
        '50px':'50px',
        '60px':'60px',
        '150px':'150px',
        '250px':'250px',
        '280px':'280px'
      },
      height:{
        '30%': '30%',
        '40px':'40px',
        '60px':'60px',
        '48px':'48px',
        '280px':'280px',
        '320px':'320px',
        '420px':'420px',
        '520px':'520px'
      },
      padding: {
        '10px': '10px',
        '15px':'15px',
        '20px':'20px',
        '40px':'40px',
      },
      margin: {
        '20px': '20px'
      },
      accentColor: {
        black: '#000000',
      },
      colors: {
        orange: {
          400: '#FB923C',
        },
        gold: {
          100: '#FFF9C4',
          200: '#FFEE58',
          300: '#FFD700', // Or par défaut
          400: '#FFC400',
          500: '#FFAB00',
        },
        silver: {
          100: '#F5F5F5',
          200: '#E0E0E0',
          300: '#C0C0C0', // Argent par défaut
          400: '#9E9E9E',
          500: '#757575',
        },
        navy: {
          100: '#E3F2FD',
          200: '#90CAF9',
          300: '#000080', // Marine par défaut
          400: '#1A237E',
          500: '#0D47A1',
        },
        champagne: {
          100: '#FFF8E1',
          200: '#FFECB3',
          300: '#F7E7CE', // Champagne par défaut
          400: '#FFE082',
          500: '#FFD54F',
        },
        babyBlue: {
          100: '#E1F5FE',
          200: '#B3E5FC',
          300: '#89CFF0', // Bleu bébé par défaut
          400: '#4FC3F7',
          500: '#29B6F6',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    fill: true,
  },
  variants: {
    extend: {
      outline: ['hover'],
      fill: ['hover'],
      stroke: ['hover', 'group-hover'], // Ajoutez cette ligne pour activer l'option hover sur les utilitaires outline
    },
  },
};