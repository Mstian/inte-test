module.exports = {
  // 依次找 js、jsx、json、vue 后缀的文件
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  // 测试代码覆盖率文件
  collectCoverageFrom: ["**/*.vue", "!**/node_modules/**"],
  // 使用 vue-jest 帮助测试 .vue 文件
  // 遇到 css 等转为字符串 不作测试
  // 遇到 js jsx 等转成 es5
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  // 哪些文件下的内容不需要被转换
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  // 模块的映射 @ 开头到根目录下寻找
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  // snapshot 怎么去存储
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  // npm run test:unit 时到哪些目录下去找 测试 文件
  testMatch: [
    '**/__tests__/**/*.(js|jsx|ts|tsx)'
  ],
  // 模拟的浏览器的地址是什么
  testURL: 'http://localhost/',
  // 两个帮助使用 jest 的插件 过滤 测试名/文件名 来过滤测试用例
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
