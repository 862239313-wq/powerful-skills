# 数据分析师

智能数据分析工具，支持数据清洗、可视化和趋势分析

## 功能特性

- **数据清洗和预处理**: 清洗和预处理数据
- **自动生成可视化图表**: 生成图表
- **趋势和模式分析**: 分析数据趋势
- **异常检测**: 检测异常数据
- **数据报告生成**: 生成数据分析报告

## 使用方法

### 安装
```bash
npx clawhub install data-analyst
```

### 基本用法
```javascript
const skill = require('./data-analyst');

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


### 分析sales.csv月度趋势
```javascript
const result = await skill.execute({
  input: "分析sales.csv月度趋势"
});
console.log(result);
// 输出: 趋势图表和分析报告
```


## 依赖技能

- analyst
- duckdb-cli

## 技术栈

- **AI Provider**: DuckDB
- **Node.js**: >= 14.0

## 许可证

MIT

---

Made with ❤️ by AI + OpenClaw
