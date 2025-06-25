/**
 * @description: 测试接口
 * @author: M.yunlong
 * @date: 2025-06-25 11:23:16
*/

// 1、导入 express 模块
const express = require('express')

// 2、创建 路由对象
const router = express.Router();

// 3、 挂载具体的路由
router.get('/data-mock/testInfo', (req, res) => {
    // --
    console.log(req, '<- 获取到的参数');
    // --
    res.json({
        code: 0,
        data: [{
            name: '1'
        }]
    })
});

// 4、向外导出 路由对象
module.exports = router;
