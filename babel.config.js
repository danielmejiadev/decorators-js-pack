module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
    '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.ts',
        ],
        root: ['./src'],
        alias: {
          '@src': ['./dist', './src'],
        },
      },
    ],
    'jest-hoist',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
  ],
};
