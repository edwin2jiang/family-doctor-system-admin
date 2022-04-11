<script>
import {routes} from '@/config/NavAside.config.js'

export default{
    data(){
        return {
            routes
        }
    },
}
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
                <template v-for="item,index of routes">
                    <!-- 仅有一个menu -->
                    <el-menu-item v-if="item.children === undefined || item.children.length === 0" :index="index+''" :route="{path: item.path}" :key="index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.zh}}</span>
                    </el-menu-item>
                    <!-- 含有子menu -->
                    <el-submenu :index="index+''" :key="index" v-else>
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span>{{ item.zh}} </span>
                        </template>
                        <el-menu-item :index="index+'-'+i" v-for="e,i in item.children" :key="i" :route="{path: item.path + e.path}">{{e.zh}}</el-menu-item>
                    </el-submenu>
                </template>
        </el-menu>
    </div>
</template>
 
<style scoped lang="scss">
.nav-aside{
    width: 220px;
    height: 100%;
    background: #fff;
    overflow-x: hidden;
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