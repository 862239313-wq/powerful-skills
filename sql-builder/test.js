/**
 * SQL构建器 - 测试用例
 */

const assert = require('assert');
const skill = require('./index.js');

async function runTests() {
  console.log('🧪 开始测试 SQL构建器...');
  
  // 测试1: 基本执行
  try {
    const result = await skill.execute({
      input: '查询销售额超过1000的用户'
    });
    
    assert(result.success === true, '应该返回success: true');
    console.log('✅ 测试1: 基本执行 - 通过');
  } catch (e) {
    console.log('❌ 测试1 失败:', e.message);
  }
  
  // 测试2: 错误处理
  try {
    const result = await skill.execute({});
    console.log('⚠️ 测试2: 错误处理 - 需要完善');
  } catch (e) {
    console.log('✅ 测试2: 错误处理 - 通过');
  }
  
  console.log('\n🧪 测试完成!');
}

runTests();
