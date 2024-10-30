module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@config': './src/config',
          '@constants': './src/constants',
          '@contexts': './src/contexts',
          '@env': './.env',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@network': './src/network',
          '@screens': './src/screens',
          '@storage': './src/storage',
          '@themes': './src/themes',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'API',
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
