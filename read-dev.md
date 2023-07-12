## 开发文档

### 初始化

---

**初始化项目**
creare-react-app project --template typescript

**配置ts根路径**

`tsconfig.js` > baseUrl: './src'

**配置prettier && prettier兼容eslint\***

`https://github.com/prettier/`

**配置提交规范**

`https://commitlint.js.org/#/guides-local-setup?id=install-commitlint`

### 数据mock方案

_json-server_

```js
# yarn add json-server -D
# packages: scripts: { "json-server": 'json-server --watch db.json'}
# npm run json-server
```
