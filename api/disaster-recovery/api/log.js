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
    // 定义不同类型的日志级别
    const logLevels = ['INFO', 'WARN', 'ERROR', 'DEBUG'];
    // 定义不同的日志消息模板
    const logMessages = [
        'System startup completed',
        'User {user} logged in',
        'Failed to connect to database: {error}',
        'Process {process} finished successfully',
        'Memory usage exceeded threshold',
        'File {file} uploaded successfully',
        'Network timeout occurred'
    ];
    
    // 定义一些模拟的用户、错误、进程和文件名
    const users = ['Alice', 'Bob', 'Charlie', 'David'];
    const errors = ['Connection refused', 'Query timeout', 'Syntax error'];
    const processes = ['Data import', 'Report generation', 'Backup'];
    const files = ['document.pdf', 'image.jpg', 'data.csv'];

    // 生成 100 行模拟日志数据
    const logData = Array.from({ length: 100 }, () => {
        const level = logLevels[Math.floor(Math.random() * logLevels.length)];
        const messageTemplate = logMessages[Math.floor(Math.random() * logMessages.length)];
        let message = messageTemplate
            .replace('{user}', users[Math.floor(Math.random() * users.length)])
            .replace('{error}', errors[Math.floor(Math.random() * errors.length)])
            .replace('{process}', processes[Math.floor(Math.random() * processes.length)])
            .replace('{file}', files[Math.floor(Math.random() * files.length)]);
        
        const timestamp = new Date().toISOString();
        return `${timestamp} [${level}] ${message}`;
    });

    res.json({
        "code": "0",
        "data": logData
    })
});

// 4、向外导出 路由对象
module.exports = router;
