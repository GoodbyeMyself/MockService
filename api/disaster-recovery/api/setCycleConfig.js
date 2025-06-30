/**
 * @description: 设置周期配置
 * @author: M.yunlong
 * @date: 2025-06-25 11:23:16
*/

// 1、导入 express 模块
const express = require('express')

// 2、创建 路由对象
const router = express.Router();

// 3、 挂载具体的路由
router.post('/setCycleConfig', (req, res) => {
    // 获取 interval 参数
    const interval = req.query.interval;

    console.log(interval, '<- interval');
    
    res.json({
        "code": "0",
        "messages": [],
        "extras": {},
        "data": null,
        "errorId": null,
        "errorDetail": null
    })
});

// 4、向外导出 路由对象
module.exports = router;
