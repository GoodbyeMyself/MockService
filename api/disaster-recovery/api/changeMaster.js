/**
 * @description: 主备切换
 * @author: M.yunlong
 * @date: 2025-06-25 11:23:16
*/

// 1、导入 express 模块
const express = require('express')

// 2、创建 路由对象
const router = express.Router();

// 3、 挂载具体的路由
router.post('/changeMaster', (req, res) => {
    // --
    res.json({
        "code": "500",
        "messages": [],
        "extras": {},
        "data": null,
        "errorId": null,
        "errorDetail": '脚本运行中,无法切换主备,请先停止同步'
    })
});

// 4、向外导出 路由对象
module.exports = router;
