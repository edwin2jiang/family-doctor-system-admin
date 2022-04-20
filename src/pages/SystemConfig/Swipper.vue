<script>
import MyFooter from "../../components/MyFooter.vue";
import MySwitch from "../../components/MySwitch.vue";
import { localStorage } from 'reactive-localstorage';

export default {
    data() {
        return {
            timeValue: '',
            inputText: '',
            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            dialogVisible: false,
            banners: [
                {
                    no: 94,
                    pic: '/swipper/banner.jpg',
                    name: 'Banner1',
                    publisher: '李明明',
                    publishDate: '2020/10/09 10:09:09',
                    status: true,
                },
                {
                    no: 93,
                    pic: '/swipper/banner.jpg',
                    name: 'Banner2',
                    publisher: '李明明',
                    publishDate: '2020/10/09 10:09:09',
                    status: true,
                },
                {
                    no: 92,
                    pic: '/swipper/banner.jpg',
                    name: 'Banner3',
                    publisher: '李明明',
                    publishDate: '2020/10/09 10:09:09',
                    status: true,
                },
                {
                    no: 91,
                    pic: '/swipper/banner.jpg',
                    name: 'Banner4',
                    publisher: '李明明',
                    publishDate: '2020/10/09 10:09:09',
                    status: true,
                }
            ],
            index: 0
        }
    },
    methods: {
        handleClick(row, index) {
            row.index = index
            console.log(row)
            this.$store.commit("setCurrentSwipper", row)
            this.$router.push({
                path: '/SystemConfig/SwipperEdit',
            })
        },
        handelOpen(index) {
            this.index = index
            this.dialogVisible = true
        },
        handelDelete() {
            this.dialogVisible = false
            console.log('删除了', this.index)

            let tmp = this.banners
            tmp.splice(this.index, 1)
            this.setLocal('banners', tmp)
        },
        getLocal(key) {
            return JSON.parse(localStorage.getItem(key))
        },
        setLocal(key, value) {
            localStorage.setItem(key, JSON.stringify(value))
        },
        search() {
            // 1. 获取全部数据
            const banners = this.getLocal('banners')
            this.banners = banners.filter(item => (item.name.indexOf(this.inputText) !== -1))
        }
    },
    created() {
        // 通过locastorage缓存数据. 响应式的localstorage
        const { getLocal, setLocal } = this
        localStorage.on('change', (key, value) => {
            console.log(`key ${key} changed to ${JSON.stringify(value)}`);
            if (key === 'bannners')
                this.banners = getLocal('banners')
        });

        if (!localStorage.getItem('banners'))
            // 初始化
            setLocal('banners', this.banners)

        this.banners = getLocal('banners')
    },
    components: {
        MyFooter,
        MySwitch
    }
}
</script>

<template>
    <div>
        <div class="container">
            <div class="title">
                <span>轮播图管理</span>
            </div>
            <div class="btns">
                <span class="txt">发布时间</span>
                <el-date-picker v-model="timeValue" type="daterange" align="right" unlink-panels range-separator="-"
                    start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
                </el-date-picker>
                <el-input placeholder="请输入内容" v-model="inputText" @keyup.enter.native="search">
                    <i slot="suffix" class="el-input__icon el-icon-search" @click="search" style="cursor: pointer;"></i>
                </el-input>
                <el-button type="primary" class="btn" @click="$router.push({ path: '/SystemConfig/SwipperCreate' })">
                    新增轮播图
                </el-button>
            </div>

            <el-table :data="banners" stripe style="width: 100%;margin-top: 40px;" header-row-class-name="table-header"
                header-align="center" align="center">
                <el-table-column prop="no" label="序号" width="80">
                </el-table-column>
                <el-table-column prop="pic" label="图片" width="280">
                    <template slot-scope="scope">
                        <img :src="scope.row.pic" alt="图片" width="180">
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="Banner图名称">
                </el-table-column>
                <el-table-column prop="publisher" label="发布人">
                </el-table-column>
                <el-table-column prop="publishDate" label="发布时间">
                </el-table-column>
                <el-table-column prop="status" label="状态">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.status" active-color="#13ce66" active-text="启用"
                            inactive-text="禁用">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row, scope.$index)" type="text" size="small">编辑</el-button>
                        <el-button type="text" size="small" class="delete" @click="handelOpen(scope.$index)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <MyFooter></MyFooter>

        <el-dialog title="删除确认" :visible.sync="dialogVisible" width="30%">
            <span>确定要删除该轮播图吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handelDelete">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<style scoped lang="scss">
.container {
    width: 1150px;
    padding: 20px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 4px;
    margin: 0 auto;
}

.title {
    &::before {
        vertical-align: top;
        content: '';
        display: inline-block;
        width: 6px;
        border-radius: 8px;
        height: 16px;
        background-color: #2984f8;
        margin-right: 10px;
    }
}

.btns {
    margin-top: 30px;
    color: #aaa;
    position: relative;

    .txt {
        margin-right: 20px;
    }

    ::v-deep .el-input {
        margin-left: 10px;
        width: 400px;
    }

    .btn {
        position: absolute;
        right: 0;
    }
}

::v-deep .el-table thead {
    background: #f9f9f9;
}

::v-deep .table-header {
    background: #000;
}

::v-deep .delete {
    color: #FA746B;
}


// 修改element-ui switch样式

::v-deep {
    .el-switch__core {
        width: 50px !important;
        padding: 10px;
    }

    .el-switch__label--left {
        position: relative;
        left: 46px;
        color: #fff;
        z-index: -1111;
    }

    .el-switch__label--right {
        position: relative;
        right: 46px;
        color: #fff;
        z-index: -1111;
    }

    .el-switch__label.is-active {
        z-index: 1111;
        color: #fff;
    }

    .el-switch__label--left {
        position: relative;
        left: 58px;
        color: #fff;
        z-index: -1111;
    }

    .el-switch__label--right {
        position: relative;
        right: 57px;
        color: #fff;
        z-index: -1111;
    }

    .el-switch__label--right.is-active {
        z-index: 1111;
        color: #fff !important;
    }

    .el-switch__label--left.is-active {
        z-index: 1111;
        color: #9c9c9c !important;
    }
}
</style>