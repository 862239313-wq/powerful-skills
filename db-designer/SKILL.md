# 数据库设计器

智能数据库设计和优化工具，支持ER图生成和表结构设计

## 功能特性

- **需求分析转ER图**: 从需求生成ER图
- **表结构设计**: 设计规范的数据库表
- **索引优化建议**: 提供索引优化建议
- **迁移脚本生成**: 生成数据库迁移脚本
- **关系规范化检查**: 检查并优化数据库规范化

## 使用方法

### 安装
```bash
npx clawhub install db-designer
```

### 基本用法
```javascript
const skill = require('./db-designer');

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


### 设计一个博客系统数据库
```javascript
const result = await skill.execute({
  input: "设计一个博客系统数据库"
});
console.log(result);
// 输出: 完整的数据库设计方案
```


## 依赖技能

- postgres
- sql-toolkit

## 技术栈

- **AI Provider**: Mistral AI
- **Node.js**: >= 14.0

## 许可证

MIT

---

Made with ❤️ by AI + OpenClaw
