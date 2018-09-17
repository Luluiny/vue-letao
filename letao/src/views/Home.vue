<template>
    <div class="home">
        <el-container>
            <el-aside width="200px">
                <div class="el-aside-top">
                    <img src="../assets/1.jpg" alt="">
                    <p>一只废柴</p>
                </div>
                <div class="el-menu">
                    <el-menu class="el-menu-menu" :router='true' background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title" @click="usersmenu">
                                <router-link to="/users">
                                    <i class="el-icon-location"></i>
                                    <span>用户管理</span>
                                </router-link>

                            </template>
                        </el-submenu>

                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>分类管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/first">一级分类管理</el-menu-item>
                                <el-menu-item index="/second">二级分类管理</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                                <router-link to="/goods">
                                    <i class="el-icon-location"></i>
                                    <span>商品管理</span>
                                </router-link>

                            </template>
                        </el-submenu>

                    </el-menu>
                </div>
            </el-aside>
            <el-container>
                <el-header class="myicon-header">
                    <span class="myicon myicon-menu"></span>
                    <el-button type="text" class="loginout" @click="loginout">退出</el-button>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script>
import { confirmlogin, loginOut } from '@/api/index.js'
export default {
  methods: {
    usersmenu () {
      // 因为这里我不想多写一个分类 所以我使用router-link来实现路由跳转
      this.$router.push({ path: '/users' })
    },
    // 退出登录
    loginout () {
      this.$confirm('是否确认退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        loginOut().then(res => {
          // console.log(res)
          if (res.success) {
            this.$router.push({path: '/login'})
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出',
          duration: 600
        })
      })
    }
  },
  mounted () {
    confirmlogin().then(res => {
      // console.log(res)
      if (res.error === 400) {
        this.$router.push({path: '/login'})
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  line-height: 200px;
  .el-aside-top {
    width: 200px;
    height: 150px;
    padding-top: 30px;
    background-color: #545c64;
    > img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      display: block;
      margin: auto;
    }
    > p {
      line-height: 30px;
      font-weight: 700;
      text-align: center;
    }
  }
  .el-menu-menu {
    min-height: 400px;
  }
}

body > .el-container {
  margin-bottom: 40px;
}
.myicon-header {
  padding-top: 20px;
  .myicon {
    float: left;
    font-size: 30px;
    color: greenyellow;
  }
  .loginout {
    float: right;
  }
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
