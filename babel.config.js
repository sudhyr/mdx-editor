module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        "useBuiltIns": "usage",
        "corejs": "3"
      }
    ],
    '@babel/react',
    '@babel/typescript'
  ],
  plugins: [
    "@vanilla-extract/babel-plugin"
  ]
}