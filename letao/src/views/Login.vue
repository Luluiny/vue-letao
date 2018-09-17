<template>
    <div class="login">
        <div class="container">
            <img src="../assets/1.jpg" alt="" class="avatar">
            <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="loginform">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                 <el-button type="primary" round class="loginbtn" @click="loginconfir('loginForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import {login} from '@/api/index.js'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    loginconfir (a) {
      this.$refs[a].validate(valid => {
        console.log(1111111111)

        if (valid) {
          login(this.loginForm).then(res => {
            console.log(res)
            if (!res.message) {
              // 这个时候是登录成功
              this.$router.push({name: 'Home'})
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
  background-color:pink;
.container{
     position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .loginbtn{
        width: 100%;
    }
}
}
</style>
