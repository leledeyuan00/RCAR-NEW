module.exports = {
  outputDir: __dirname + '/../server/desktop',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/'
}