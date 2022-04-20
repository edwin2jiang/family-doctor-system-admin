const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../pages/login/Login.vue')
    },
    {
        path: '/Workstation',
        name: 'Workstation',
        zh: '工作台',
        component: () => import('../pages/Workstation.vue')
    },
    {
        path: '/ContractManagement',
        name: 'ContractManagement',
        zh: '合同管理',
        component: { render: (h) => h('router-view'), },
        children: [
            {
                path: 'PendingSigning',
                name: 'PendingSigning',
                zh: '待处理签约',
                component: () => import('../pages/ContractManagement/PendingSigning.vue')
            },
            {
                path: 'SigningRecord',
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
        component: { render: (h) => h('router-view'), },
        children: [
            {
                path: 'PendingService',
                name: 'PendingService',
                zh: '待处理服务',
                component: () => import('../pages/ServiceManagement/PendingService.vue')
            },
            {
                path: 'ServiceRecord',
                name: 'ServiceRecord',
                zh: '服务记录',
                component: () => import('../pages/ServiceManagement/ServiceRecord.vue')
            }
        ]
    }, {
        path: '/ResidentManagement',
        name: 'ResidentManagement',
        zh: '居民管理',
        component: { render: (h) => h('router-view'), },

        component: () => import('../pages/ResidentManagement.vue')
    }, {
        path: '/MessageManagement',
        name: 'MessageManagement',
        zh: '消息管理',
        component: { render: (h) => h('router-view'), },

        component: () => import('../pages/MessageManagement.vue')
    },
    {
        path: '/DataManagement',
        name: 'DataManagement',
        zh: '资料管理',
        component: { render: (h) => h('router-view'), },

        children: [
            {
                path: 'OrganizationManagement',
                name: 'OrganizationManagement',
                zh: '机构管理',
                component: () => import('../pages/DataManagement/OrganizationManagement.vue')
            },
            {
                path: 'TeamManagement',
                name: 'TeamManagement',
                zh: '团队管理',
                component: () => import('../pages/DataManagement/TeamManagement.vue')
            },
            {
                path: 'DoctorManagement',
                name: 'DoctorManagement',
                zh: '医生管理',
                component: () => import('../pages/DataManagement/DoctorManagement.vue')
            },
            {
                path: 'ServicePackageManagement',
                name: 'ServicePackageManagement',
                zh: '服务包管理',
                component: () => import('../pages/DataManagement/ServicePackageManagement.vue')
            },
            {
                path: 'ServiceItemsManagement',
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
        component: { render: (h) => h('router-view'), },
        children: [
            {
                path: 'DataOverview',
                name: 'DataOverview',
                zh: '数据概况',
                component: () => import('../pages/DataStatistics/DataOverview.vue')
            },
            {
                path: 'SigningStatistics',
                name: 'SigningStatistics',
                zh: '签约业绩统计',
                component: () => import('../pages/DataStatistics/SigningStatistics.vue')
            },
            {
                path: 'ServiceStatistics',
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
        component: { render: (h) => h('router-view'), },
        children: [
            {
                path: 'Meta',
                name: 'Meta',
                zh: '标签管理',
                component: () => import('../pages/SystemConfig/Meta.vue')
            },
            {
                path: 'Role',
                name: 'Role',
                zh: '角色管理',
                component: () => import('../pages/SystemConfig/Role.vue')
            },
            {
                path: 'Info',
                name: 'Info',
                zh: '资讯管理',
                component: () => import('../pages/SystemConfig/Info.vue')
            }, {
                path: 'Swipper',
                name: 'Swipper',
                zh: '轮播图管理',
                component: () => import('../pages/SystemConfig/Swipper.vue')
            }, {
                path: 'SwipperEdit',
                name: 'SwipperEdit',
                zh: '轮播图编辑',
                component: () => import('../pages/SystemConfig/SwipperEdit.vue')
            }, {
                path: 'SwipperCreate',
                name: 'SwipperCreate',
                zh: '新增轮播图',
                component: () => import('../pages/SystemConfig/SwipperCreate.vue')
            },
            {
                path: 'Notice',
                name: 'Notice',
                zh: '系统公告',
                component: () => import('../pages/SystemConfig/Notice.vue')
            },
            {
                path: 'Agreement',
                name: 'Agreement',
                zh: '协议管理',
                component: () => import('../pages/SystemConfig/Agreement.vue')
            },
            {
                path: 'OperationLog',
                name: 'OperationLog',
                zh: '操作日志',
                component: () => import('../pages/SystemConfig/OperationLog.vue')
            }
        ]
    }
]

// 导出
module.exports = routes