module.exports = {
  syntax: 'postcss-syntax',
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
