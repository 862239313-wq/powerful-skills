# AI代码助手

基于Mistral AI的智能编程助手，支持代码生成、优化和解释

## 功能特性

- **自然语言生成代码**: 通过描述需求自动生成代码
- **代码优化建议**: 分析代码并提供优化建议
- **Bug分析和修复**: 识别并修复常见Bug
- **代码解释**: 解释代码逻辑和功能
- **多语言支持**: 支持Python、JavaScript、Java等多种语言

## 使用方法

### 安装
```bash
npx clawhub install ai-code-assistant
```

### 基本用法
```javascript
const skill = require('./ai-code-assistant');

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


### 用Python写一个计算器
```javascript
const result = await skill.execute({
  input: "用Python写一个计算器"
});
console.log(result);
// 输出: 完整的计算器代码
```

### 优化这段SQL查询
```javascript
const result = await skill.execute({
  input: "优化这段SQL查询"
});
console.log(result);
// 输出: 优化后的SQL
```


## 依赖技能

- 无 (独立运行)

## 技术栈

- **AI Provider**: Mistral AI
- **Node.js**: >= 14.0

## 许可证

MIT

---

Made with ❤️ by AI + OpenClaw
