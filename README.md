# gulu-ui 一个 Vue Ui 组件
作者：Bumble Xie
## 介绍
这是我在学习过程中制作的 UI 框架，希望对你有用。
## 开始使用
1. 添加 CSS 样式   
   1) 使用本框架前，请在 CSS 中开启 border-box，**IE 8 及以上浏览器都支持此样式**。
    ```css
    *, *::before, *::after{box-sizing: border-box}
    ```
   2) 使用本框架前，请设置默认颜色等变量（后续会改为 SCSS 变量）, **IE 15 及以上浏览器都支持此样式**。 
    ```css
   html {
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: #fff;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color:#999;
      --border-color:#999;
      --border-color-hover: #666;
    }
    ```
2. 安装 gulu-ui
```
npm i --save gulu-test-xzy-1-1
```
3. 引入 gulu-ui
```
import {Button, Icon, ButtonGroup} from 'gulu-test-xzy-1-1'
import 'gulu-test-xzy-1-1/dist/index.css'

export default {
  name: 'App',
  components: {
    'g-button': Button,
    'g-icon': Icon,
    'g-button-group': ButtonGroup
  }
}
```
## 文档
## 提问
## 变更记录
## 联系方式
## 贡献代码
