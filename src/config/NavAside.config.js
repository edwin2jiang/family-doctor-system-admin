export const routes = [
    {
        path: '/workstation',
        name: 'Workstation',
        zh: '工作台',
        icon: 'el-icon-monitor',
        component: () => import('../pages/Workstation.vue')
    },
    {
        path: '/ContractManagement',
        name: 'ContractManagement',
        zh: '合同管理',
        icon: 'el-icon-edit',
        children: [
            {
                path: '/PendingSigning',
                name: 'PendingSigning',
                zh: '待处理签约',
                component: () => import('../pages/ContractManagement/PendingSigning.vue')
            },
            {
                path: '/SigningRecord',
                name: 'SigningRecord',
                zh: '签约记录',
                component: () => import('../pages/ContractManagement/SigningRecord.vue')
            }
        ]
    },
    {
        path: '/ServiceManagement',
        name: 'ServiceManagement',
        zh: '服务管理',
        icon: 'el-icon-document',
        children: [
            {
                path: '/PendingService',
                name: 'PendingService',
                zh: '待处理服务',
                component: () => import('../pages/ServiceManagement/PendingService.vue')
            },
            {
                path: '/ServiceRecord',
                name: 'ServiceRecord',
                zh: '服务记录',
                component: () => import('../pages/ServiceManagement/ServiceRecord.vue')
            }
        ]
    }, {
        path: '/ResidentManagement',
        name: 'ResidentManagement',
        zh: '居民管理',
        icon: 'el-icon-user',
        component: () => import('../pages/ResidentManagement.vue')
    }, {
        path: '/MessageManagement',
        name: 'MessageManagement',
        zh: '消息管理',
        icon: 'el-icon-message',
        component: () => import('../pages/MessageManagement.vue')
    },
    {
        path: '/DataManagement',
        name: 'DataManagement',
        zh: '资料管理',
        icon: 'el-icon-document',
        children: [
            {
                path: '/OrganizationManagement',
                name: 'OrganizationManagement',
                zh: '机构管理',
                component: () => import('../pages/DataManagement/OrganizationManagement.vue')
            },
            {
                path: '/TeamManagement',
                name: 'TeamManagement',
                zh: '团队管理',
                component: () => import('../pages/DataManagement/TeamManagement.vue')
            },
            {
                path: '/DoctorManagement',
                name: 'DoctorManagement',
                zh: '医生管理',
                component: () => import('../pages/DataManagement/DoctorManagement.vue')
            },
            {
                path: '/ServicePackageManagement',
                name: 'ServicePackageManagement',
                zh: '服务包管理',
                component: () => import('../pages/DataManagement/ServicePackageManagement.vue')
            },
            {
                path: '/ServiceItemsManagement',
                name: 'ServiceItemsManagement',
                zh: '服务项目管理',
                component: () => import('../pages/DataManagement/ServiceItemsManagement.vue')
            }
        ]
    },
    {
        path: '/DataStatistics',
        name: 'DataStatistics',
        zh: '数据统计',
        icon: 'el-icon-data-analysis',
        children: [
            {
                path: '/DataOverview',
                name: 'DataOverview',
                zh: '数据概况',
                component: () => import('../pages/DataStatistics/DataOverview.vue')
            },
            {
                path: '/SigningStatistics',
                name: 'SigningStatistics',
                zh: '签约业绩统计',
                component: () => import('../pages/DataStatistics/SigningStatistics.vue')
            },
            {
                path: '/ServiceStatistics',
                name: 'ServiceStatistics',
                zh: '服务业绩统计',
                component: () => import('../pages/DataStatistics/ServiceStatistics.vue')
            }
        ]
    },
    {
        path: '/SystemConfig',
        name: 'SystemConfig',
        zh: '系统设置',
        icon: 'el-icon-setting',
        children: [
            {
                path: '/Meta',
                name: 'Meta',
                zh: '标签管理',
                component: () => import('../pages/SystemConfig/Meta.vue')
            },
            {
                path: '/Role',
                name: 'Role',
                zh: '角色管理',
                component: () => import('../pages/SystemConfig/Role.vue')
            },
            {
                path: '/Info',
                name: 'Info',
                zh: '资讯管理',
                component: () => import('../pages/SystemConfig/Info.vue')
            }, {
                path: '/Swipper',
                name: 'Swipper',
                zh: '轮播图管理',
                component: () => import('../pages/SystemConfig/Swipper.vue')
            },
            {
                path: '/Notice',
                name: 'Notice',
                zh: '系统公告',
                component: () => import('../pages/SystemConfig/Notice.vue')
            },
            {
                path: '/Agreement',
                name: 'Agreement',
                zh: '协议管理',
                component: () => import('../pages/SystemConfig/Agreement.vue')
            },
            {
                path: '/OperationLog',
                name: 'OperationLog',
                zh: '操作日志',
                component: () => import('../pages/SystemConfig/OperationLog.vue')
            }
        ]
    }
]