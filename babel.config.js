module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          config: './src/config',
          components: './src/components',
          modules: './src/modules',
          schemes: './src/schemes',
          screens: './src/screens',
          utils: './src/utils'
        }
      }
    ]
  ]
};
