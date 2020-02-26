const path = require('path')
const config = {
  projectName: 'taro_leancloud',
  date: '2020-2-26',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: {
    babel: {
      sourceMap: false,
      presets: [
        ['env', {
          modules: false
        }]
      ],
      plugins: [
        'transform-decorators-legacy',
        'transform-class-properties',
        'transform-object-rest-spread'
        ['transform-runtime', {
          "helpers": false,
          "polyfill": false,
          "regenerator": true,
          "moduleName": 'babel-runtime'
        }]
      ]
    }
  },
  uglify: {
    enable: true
  },
  csso: {
    enable: true
  },
  mini: {
    webpackChain (chain, webpack) {
      chain.plugin('analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
    },
    compile: {
      exclude: [
        path.resolve(__dirname, '..', 'node_modules/moment/min/moment.min.js'),
        path.resolve(__dirname, '..', 'node_modules/leancloud-storage/dist/av-weapp-min.js')
      ]
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 8192 // 设定转换尺寸上限
        }
      }
    }
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
    '@actions': path.resolve(__dirname, '..', 'src/actions'),
    '@api': path.resolve(__dirname, '..', 'src/api'),
    '@constants': path.resolve(__dirname, '..', 'src/constants'),
    '@css': path.resolve(__dirname, '..', 'src/css'),
    '@imgs': path.resolve(__dirname, '..', 'src/images'),
    '@utils': path.resolve(__dirname, '..', 'src/utils')
  },
  defineConstants: {
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
