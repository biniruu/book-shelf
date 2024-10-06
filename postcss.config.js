module.exports = {
  plugins: {
    '@tailwindcss/nesting': {},
    'postcss-preset-env': {
      autoprefixer: {},
      features: {
        'nesting-rules': false,
      },
    },
    tailwindcss: {},
    cssnano: {
      preset: 'default',
    },
  },
};
