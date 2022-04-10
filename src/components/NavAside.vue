<script>
</script>

<template>
    <div class="nav-aside">
        <div class="title">家医后台管理系统</div>
        <el-menu
                default-active="1"
                zactive-text-color="#fff"
                class="el-menu-vertical-demo"
                :router="true"
                >
                 <el-menu-item index="1" :route="{path: '/workstation'}">
                    <i class="el-icon-monitor"></i>
                    <span slot="title">工作台</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>签约管理</span>
                    </template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="3">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
                </el-menu>
    </div>
</template>
 
<style scoped lang="scss">
.nav-aside{
    width: 220px;
    height: 100%;
    background: #fff;
}

.title{
    font-size:18px;
    color: #2984F8;
    line-height:60px;
    text-align: center;
    padding: 20px 0;
}

::v-deep .el-menu-vertical-demo {
    height: calc(100% - 100px);
}

::v-deep .el-menu-item.is-active{
    background-color: #2984f8;
    color: white;
}

</style>