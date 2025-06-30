/**
 * @description: 流向图
 * @author: M.yunlong
 * @date: 2025-06-25 11:23:16
*/

// 1、导入 express 模块
const express = require('express')

// 2、创建 路由对象
const router = express.Router();

// 3、 挂载具体的路由
router.get('/getMonitor', (req, res) => {
    // --
    res.json({
        "code": "0",
        "messages": [],
        "extras": {},
        "data": {
            "slave": {
                "type": "slave",
                "scriptsBackupPath": "/home/sdc/bin/master_backup.sh",
                 "backupStatus": false,
                "backupInterval": 3,
                "scriptsRecoveryPath": "/home/sdc/bin/standby_recovery.sh",
                "recoveryStatus": false,
                "recoveryInterval": 3,
                "hostname": "10.0.30.31",
                "port": "22",
                "username": "sdc",
                "password": "sefoncloud",
                "stopFlag": false
            },
            "master": {
                "type": "master",
                "scriptsBackupPath": "/home/sdc/bin/master_backup.sh",
                "backupStatus": false,
                "backupInterval": 3,
                "scriptsRecoveryPath": "/home/sdc/bin/standby_recovery.sh",
                "recoveryStatus": false,
                "recoveryInterval": 3,
                "hostname": "10.0.30.21",
                "port": "22",
                "username": "sdc",
                "password": "sefoncloud",
                "stopFlag": false
            }
        },
        "errorId": null,
        "errorDetail": null
    })
});

// 4、向外导出 路由对象
module.exports = router;
