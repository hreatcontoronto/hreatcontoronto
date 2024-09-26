module.exports = {
  entry: './App.vue',
  output: { filename: 'bundle.js' },
  resolve: {
    extensions: ['.ts', '.vue']
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] }
      }
    ]
  }
}
