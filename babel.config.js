module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './assets',
          config: './src/config',
          components: './src/components',
          modules: './src/modules',
          schemes: './src/schemes',
          screens: './src/screens',
          theme: './src/config/theme',
          utils: './src/utils'
        }
      }
    ]
  ]
};
