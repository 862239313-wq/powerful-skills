# SQL构建器

通过自然语言描述自动生成SQL查询语句，支持多种数据库

## 功能特性

- **自然语言转SQL**: 用自然语言描述生成SQL
- **支持MySQL/PostgreSQL/SQLite**: 多数据库支持
- **SQL优化建议**: 分析SQL并提供优化方案
- **查询解释**: 解释SQL查询的含义
- **表结构分析**: 分析现有数据库结构

## 使用方法

### 安装
```bash
npx clawhub install sql-builder
```

### 基本用法
```javascript
const skill = require('./sql-builder');

skill.execute({
  // 参数
});
```

## API

### execute(params)

| 参数 | 说明 | 类型 | 必填 |
|------|------|------|------|
| input | 输入数据 | string | 是 |
| options | 配置选项 | object | 否 |

### 返回值

```json
{
  "success": true,
  "result": "...",
  "message": "操作成功"
}
```

## 示例


### 查询销售额超过1000的用户
```javascript
const result = await skill.execute({
  input: "查询销售额超过1000的用户"
});
console.log(result);
// 输出: SELECT * FROM users WHERE sales > 1000
```


## 依赖技能

- duckdb-cli

## 技术栈

- **AI Provider**: Mistral AI
- **Node.js**: >= 14.0

## 许可证

MIT

---

Made with ❤️ by AI + OpenClaw
