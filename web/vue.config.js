module.exports = {
  outputDir: __dirname + '/../server/mobile',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mobile/'
    : '/'
}