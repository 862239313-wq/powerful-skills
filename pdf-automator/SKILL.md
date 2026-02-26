# PDF自动化处理器

专业的PDF文件处理工具，支持拆分、合并、转换等

## 功能特性

- **PDF拆分合并**: 拆分或合并PDF文件
- **PDF转图片**: 将PDF页面转换为图片
- **PDF加密解密**: 保护或解密PDF文件
- **PDF提取文字**: 从PDF中提取文本内容
- **批量处理**: 批量处理多个PDF文件

## 使用方法

### 安装
```bash
npx clawhub install pdf-automator
```

### 基本用法
```javascript
const skill = require('./pdf-automator');

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


### 合并file1.pdf和file2.pdf
```javascript
const result = await skill.execute({
  input: "合并file1.pdf和file2.pdf"
});
console.log(result);
// 输出: merged.pdf
```

### 把report.pdf转成图片
```javascript
const result = await skill.execute({
  input: "把report.pdf转成图片"
});
console.log(result);
// 输出: 多张图片文件
```


## 依赖技能

- pdf

## 技术栈

- **AI Provider**: 本地执行
- **Node.js**: >= 14.0

## 许可证

MIT

---

Made with ❤️ by AI + OpenClaw
