<script>
import MyFooter from "../../components/MyFooter.vue";
import { localStorage } from 'reactive-localstorage';


export default {
    components: { MyFooter },
    data() {
        return {
            currSwipper: {
                index: '',
                no: 94,
                pic: '/swipper/banner.jpg',
                name: '',
                publisher: '',
                publishDate: '',
                status: true,
                link: ''
            },
            dialogVisible: false
        }
    },
    created() {
        this.currSwipper = this.$store.state.currSwipper
    },
    methods: {
        getLocal(key) {
            return JSON.parse(localStorage.getItem(key))
        },
        setLocal(key, value) {
            localStorage.setItem(key, JSON.stringify(value))
        },
        handelDelete() {
            this.dialogVisible = false
            console.log('删除了', this.index)

            const banners = this.getLocal('banners')

            let tmp = banners
            tmp.splice(this.index, 1)
            this.setLocal('banners', tmp)

            // 返回之前的界面
            this.$router.push({
                path: '/SystemConfig/SwipperEdit',
            })
        },
        onSubmit() {
            const banners = this.getLocal('banners')

            banners.splice(this.currSwipper.index, 1, this.currSwipper)

            this.setLocal('banners', banners)

            this.$notify({
                title: 'Success',
                message: '🎉 修改信息成功',
                type: 'success'
            });

            this.$router.push({
                path: '/SystemConfig/Swipper'
            })
        },
        selectFile() {
            console.log(this.$refs.fileInput)
            this.$refs.fileInput.click()
        },
        handelOpen() {
            this.dialogVisible = true
        },
    }
}
</script>

<template>
    <div>

        <div class="container">
            <div class="title">
                <span>新增轮播图</span>
            </div>

            <el-divider></el-divider>

            <div>
                <h2 class="swipper-title">轮播图信息</h2>
                <el-form ref="form" :model="currSwipper" label-width="120px">
                    <el-form-item label="轮播图标题">
                        <el-input v-model="currSwipper.name" class="w25"></el-input>
                    </el-form-item>
                    <el-form-item label="轮播图图片" required>
                        <div>
                            <div class="pic-box">
                                <img :src="currSwipper.pic || '/swipper/banner.jpg'" alt="" width="280">
                                <span @click="selectFile" class="pointer">重新选择(伪)</span>
                                <input id="file" type="file" style="display:none" ref="fileInput" />
                            </div>
                            <p class="txt">图片尺寸800*600px</p>
                        </div>
                    </el-form-item>
                    <el-form-item label="链接">
                        <el-input v-model="currSwipper.link" class="w60" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="轮播图状态">
                        <el-switch v-model="currSwipper.status"></el-switch>
                    </el-form-item>
                    <el-form-item label="发布时间" required>
                        <el-date-picker class="w25" v-model="currSwipper.publishDate" type="date" placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="排序号" required>
                        <el-input v-model="currSwipper.no" class="w25"></el-input>
                        <span class="txt">请填写数字，数字越大排序越靠前</span>
                    </el-form-item>
                    <el-form-item label="发布人">
                        {{ currSwipper.publisher }}
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">保存</el-button>
                        <el-button type="danger" @click="handelOpen">删除</el-button>
                        <el-button @click="$router.back()">返回</el-button>
                    </el-form-item>
                </el-form>
            </div>
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

.pic-box {
    display: flex;
    align-items: center;

    span {
        margin-left: 20px;
        color: #2984f8;
    }

}

.swipper-title {
    font-size: 18px;
    margin-bottom: 20px;
}

.w25 {
    width: 25%;
}

.w30 {
    width: 30%;
}

.w60 {
    width: 60%;
}

.txt {
    margin-left: 20px;
    font-size: 14px;
    color: #aaa;
}

.pointer {
    cursor: pointer;
}
</style>