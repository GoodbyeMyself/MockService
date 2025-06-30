/**
 * @description: 日志
 * @author: M.yunlong
 * @date: 2025-06-25 11:23:16
*/

// 1、导入 express 模块
const express = require('express')

// 2、创建 路由对象
const router = express.Router();

// 3、 挂载具体的路由
router.get('/log', (req, res) => {
    // --
    res.json({
        "code": "0",
        "data": []
    })
});

// 4、向外导出 路由对象
module.exports = router;
