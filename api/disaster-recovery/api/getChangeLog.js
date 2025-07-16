/**
 * @description: 灾备切换日志
 * @author: M.yunlong
 * @date: 2025-06-25 11:23:16
*/

// 1、导入 express 模块
const express = require('express')

// 2、创建 路由对象
const router = express.Router();

// 3、 挂载具体的路由
router.get('/getChangeLog', (req, res) => {
    res.json({
        "code": "0",
        "messages": [],
        "extras": {},
        "data": {
            "1.停止主节点所有govern应用": [
                "data-metadata-executor stop",
                "data-metadata-biz stop\n",
                "data-standard-biz stop\n",
                "执行结束"
            ],
            "2.停止主节点所有etl应用": [
                "sdi-datasync-biz stop\n",
                "sdi-datasync-executor stop\n",
                "sdi-design-biz stop\n",
                "执行结束"
            ],
            "3.删除主节点binlog标识文件": [
                '删除成功\n',
                '执行结束'
            ],
            "4.备份主节点数据库": [
                "开始备份数据库...\n",
                "备份metadata数据库\n",
                "备份standard数据库\n",
                "备份完成\n",
                "执行结束"
            ],
            "5.停止主节点数据库服务": [
                "停止MySQL服务...\n",
                "停止Redis服务...\n",
                "停止Elasticsearch服务...\n",
                "数据库服务已停止\n",
                "执行结束"
            ],
            "6.启动备节点数据库服务": [
                "启动MySQL服务...\n",
                "启动Redis服务...\n",
                "启动Elasticsearch服务...\n",
                "数据库服务启动成功\n",
                "执行结束"
            ],
            "7.恢复备节点数据库": [
                "开始恢复数据库...\n",
                "恢复metadata数据库\n",
                "恢复standard数据库\n",
                "数据库恢复完成\n",
                "执行结束"
            ],
            "8.启动备节点govern应用": [
                "data-metadata-executor start\n",
                "data-metadata-biz start\n",
                "data-standard-biz start\n",
                "govern应用启动成功\n",
                "执行结束"
            ],
            "9.启动备节点etl应用": [
                "sdi-datasync-biz start\n",
                "sdi-datasync-executor start\n",
                "sdi-design-biz start\n",
                "etl应用启动成功\n",
                "执行结束"
            ],
            "10.检查备节点应用状态": [
                "检查govern应用状态...\n",
                "检查etl应用状态...\n",
                "检查数据库连接状态...\n",
                "所有应用运行正常\n",
                "执行结束"
            ],
            "11.更新DNS配置": [
                "更新DNS解析记录...\n",
                "将域名指向备节点IP\n",
                "DNS配置更新完成\n",
                "执行结束"
            ],
            "12.验证数据同步": [
                "验证数据完整性...\n",
                "检查数据同步状态\n",
                "验证业务数据一致性\n",
                "数据同步验证通过\n",
                "执行结束"
            ],
            "13.执行健康检查": [
                "执行应用健康检查...\n",
                "检查API接口响应\n",
                "检查数据库连接池\n",
                "检查缓存服务状态\n",
                "健康检查通过\n",
                "执行结束"
            ],
            "14.通知相关人员": [
                "发送切换完成通知...\n",
                "通知运维团队\n",
                "通知业务团队\n",
                "通知发送完成\n",
                "执行结束"
            ],
            "15.记录切换日志": [
                "记录切换开始时间\n",
                "记录切换结束时间\n",
                "记录切换详细步骤\n",
                "生成切换报告\n",
                "灾备切换完成\n",
                "执行结束"
            ]
        },
        "errorId": null,
        "errorDetail": null
    })
});

// 4、向外导出 路由对象
module.exports = router;