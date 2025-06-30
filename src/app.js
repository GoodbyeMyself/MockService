// 引入 express
const express = require('express');

// 解析器
var bodyParser = require('body-parser');

// 创建 服务器 应用
const app = express();

// 获取解析 json 类型 请求体
app.use(
    bodyParser.json()
);

// 获取解析 urlencoded 类型 请求体
app.use(
    bodyParser.urlencoded({
        extended: false
    }
));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Credentials', 'true');
    res.cookie('test', '123456');
    next();
});

// 路由模块
const testInit = require('../api/bms-service/testInit.js');

// 灾备管理系统
const disasterRecovery = require('../api/disaster-recovery/index.js');

// 注册
app.use(testInit);
// 注册： 灾备管理系统
app.use(disasterRecovery);

// 监听端口启动服务器
app.listen(3000, (error) => {
    if (error) {
        console.log('服务器启动失败', error);
    } else {
        console.log('Server is running on http://localhost:3000');
    }
});
