const ora = require('ora')
const chalk = require('chalk')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.prod')

const ismodern = process.env.MODERN === 'modern'
const ismdlegacy = process.env.MDLEGACY === 'mdlegacy'

const spinner = ora('building for production...')
spinner.start()

webpack(webpackConfig, (err, stats) => {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  if (stats.hasErrors()) {
    console.log(chalk.red('  Build failed with errors.\n'))
    process.exit(1)
  }

  if (ismodern) {
  console.log(chalk.yellow('  Build complete ES2015+.\n'))
  }

  if (ismdlegacy) {
  console.log(chalk.yellow('  Build complete legacy.\n'))
  console.log(chalk.yellow('  Build complete modern mode.\n'))
  }

  if (!ismodern && !ismdlegacy) {
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  }
})
