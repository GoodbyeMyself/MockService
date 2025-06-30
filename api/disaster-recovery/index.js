/**
 * @description: 容灾恢复模块 - 统一导出
 * @author: M.yunlong
 * @date: 2025-06-25 11:23:16
 */

// 1、导入 express 模块
const express = require('express');

// 2、创建 路由对象
const router = express.Router();

// 3、引入子模块路由
const changeMasterRouter = require('./api/changeMaster');
const getMonitorRouter = require('./api/getMonitor');
const startSyncRouter = require('./api/startSync');
const stopSyncRouter = require('./api/stopSync');
const setCycleConfigRouter = require('./api/setCycleConfig');
const queryStatusRouter = require('./api/queryStatus');
const logRouter = require('./api/log');

// 4、使用子模块路由
router.use(changeMasterRouter);
router.use(getMonitorRouter);
router.use(startSyncRouter);
router.use(stopSyncRouter);
router.use(setCycleConfigRouter);
router.use(queryStatusRouter);
router.use(logRouter);

// 5、向外导出统一的路由对象
module.exports = router;
