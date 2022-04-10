<script>
import { isLoginPage } from '@/utils/useBaseUtils.js'
import NavAside from '@/components/NavAside.vue'
import NavHeader from '@/components/NavHeader.vue'

export default {
  components: {
    NavAside,
    NavHeader
  },
  methods: {
    isLoginPage,
  },
}
</script>


<template>
  <div id="app">
    <!-- 非登录界面 -->
    <section class="page" v-if="!isLoginPage($route)">
      <el-container>
        <el-aside width="220px">
          <nav-aside></nav-aside>
        </el-aside>
        <el-container>
          <el-header>
            <nav-header></nav-header>
          </el-header>
          <el-main class="main-box">
            <section class="main">
              <router-view /> 
            </section>
          </el-main>
        </el-container>
      </el-container>
    </section>

    <!-- 
      登录界面，不需要nav-side和nav-header
    -->
    <section class="page" v-else>
      <router-view />
    </section>
  </div>
</template>

<style lang="scss">
@import url(./assets/css/reset.css);
@import url(./assets/css/common.css);

.main-box{
  background-color: #f2f7fb;
}

.main{
  width: 1200px;
  margin: 0 auto;
}
</style>
