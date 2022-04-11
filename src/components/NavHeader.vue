<script>
</script>

<template>
    <header class="header">
        <div class="inner">
            <img src="/header/left-icon.jpg" alt="icon" width="32">
            <div class="right-part">
                <el-badge is-dot class="item pointer">
                    <i class="el-icon-bell"></i>
                </el-badge>
                <div class="user inline-block p-4">
                    <el-avatar shape="circle" src="/header/logo.png" :size="32" class="vertical-middle "></el-avatar>
                    <el-dropdown trigger="click" class="pointer vertical-middle p-4">
                        <span class="el-dropdown-link"> 
                            Edwin Jiang<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown" >
                            <el-dropdown-item >我的资料</el-dropdown-item>
                            <el-dropdown-item >重置密码</el-dropdown-item>
                            <el-dropdown-item >退出系统</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </header>
</template>
 
<style scoped lang="scss">
// .header{
//     display: flex;
//     height: 100%;
//     justify-content: space-between;
//     align-items: center;
//     .right-part {
//         margin-right: 300px;
//         text-align: center;
//     }
// }

.inner{
    width: 1500px;
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
}
</style>