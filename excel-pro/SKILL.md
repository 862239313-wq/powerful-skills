# Excel专业版

强大的Excel数据处理和分析能力，支持公式、宏和数据透视表

## 功能特性

- **智能公式生成**: 根据描述生成Excel公式
- **宏脚本自动化**: 自动化Excel宏
- **数据透视表创建**: 创建透视表
- **多文件合并**: 合并多个Excel文件
- **条件格式应用**: 应用条件格式

## 使用方法

### 安装
```bash
npx clawhub install excel-pro
```

### 基本用法
```javascript
const skill = require('./excel-pro');

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


### 创建月度销售汇总表
```javascript
const result = await skill.execute({
  input: "创建月度销售汇总表"
});
console.log(result);
// 输出: 完整的Excel文件
```


## 依赖技能

- analyst

## 技术栈

- **AI Provider**: 本地执行
- **Node.js**: >= 14.0

## 许可证

MIT

---

Made with ❤️ by AI + OpenClaw
