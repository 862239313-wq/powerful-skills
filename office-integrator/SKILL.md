# 办公软件集成器

连接各种办公软件实现自动化，包括Excel、邮件、文件管理等

## 功能特性

- **Excel自动化操作**: 自动操作Excel
- **邮件自动收发**: 自动处理邮件
- **文件自动整理**: 自动整理文件
- **日程同步管理**: 同步日历日程
- **报表自动生成**: 自动生成报表

## 使用方法

### 安装
```bash
npx clawhub install office-integrator
```

### 基本用法
```javascript
const skill = require('./office-integrator');

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


### 自动整理下载文件夹
```javascript
const result = await skill.execute({
  input: "自动整理下载文件夹"
});
console.log(result);
// 输出: 按类型分类的文件
```


## 依赖技能

- windows-ui-automation
- browser-automation

## 技术栈

- **AI Provider**: 本地执行
- **Node.js**: >= 14.0

## 许可证

MIT

---

Made with ❤️ by AI + OpenClaw
