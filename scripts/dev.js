// 在监视模式下运行Rollup以进行开发。
// 只有ES模块格式将被生成，因为它将在现代浏览器中使用<script type="module">进行测试。
// 默认监视“vue”元包。
// 要指定要查看的包，只需传递它的名称。如。
// ```
// yarn dev observer
// ```
const execa = require('execa')
const { targets, fuzzyMatchTarget } = require('./utils')

const target = fuzzyMatchTarget(process.argv[2] || 'runtime-dom')

// execa('echo', ['unicorns']).stdout.pipe(process.stdout);
execa(
  'rollup',
  [
    '-wc',
    '--environment',
    `TARGET:${target},FORMATS:umd`
  ],
  {
    stdio: 'inherit'
  }
)