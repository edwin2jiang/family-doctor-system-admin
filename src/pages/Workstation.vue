<script>
export default {
    created(){
        // 访问请求示例( api/xxx  mockjs)
        this.$axios('/parameter/query').then(res=>{
            console.log(res)
            this.$refs.box.innerHTML= JSON.stringify(res.data)
        })
    }
}
</script>

<template>
    <div>
        <div>Workstaion</div>
        <br>
        <h2 style="font-size: 20px;color:#aaa;">这是一个mockjs请求示例</h2>
        <br>
        <pre ref="box"></pre>
    </div>
</template>
 
<style scoped lang="scss">

</style>