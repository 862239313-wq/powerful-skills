# 报告生成器

自动生成各类数据分析报告，支持多种格式输出

## 功能特性

- **模板选择**: 选择报告模板
- **自动填充数据**: 自动填充数据到模板
- **图表嵌入**: 在报告中嵌入图表
- **多格式输出(PDF/Word/HTML)**: 支持多种输出格式
- **定时发送报告**: 定时发送报告邮件

## 使用方法

### 安装
```bash
npx clawhub install report-generator
```

### 基本用法
```javascript
const skill = require('./report-generator');

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


### 生成上季度销售报告
```javascript
const result = await skill.execute({
  input: "生成上季度销售报告"
});
console.log(result);
// 输出: PDF报告文件
```


## 依赖技能

- pdf
- analyst

## 技术栈

- **AI Provider**: 本地执行
- **Node.js**: >= 14.0

## 许可证

MIT

---

Made with ❤️ by AI + OpenClaw
