# 工作流大师

创建和管理自动化工作流，支持定时执行和条件分支

## 功能特性

- **可视化流程设计**: 拖拽式设计工作流
- **定时执行任务**: 按计划执行任务
- **条件分支逻辑**: 支持if/else逻辑
- **Webhook集成**: 支持Webhook触发
- **执行日志记录**: 记录所有执行日志

## 使用方法

### 安装
```bash
npx clawhub install workflow-master
```

### 基本用法
```javascript
const skill = require('./workflow-master');

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


### 每天早上8点发送天气报告
```javascript
const result = await skill.execute({
  input: "每天早上8点发送天气报告"
});
console.log(result);
// 输出: 已创建定时任务
```


## 依赖技能

- automation-workflows
- n8n-workflow-automation

## 技术栈

- **AI Provider**: 本地执行
- **Node.js**: >= 14.0

## 许可证

MIT

---

Made with ❤️ by AI + OpenClaw
