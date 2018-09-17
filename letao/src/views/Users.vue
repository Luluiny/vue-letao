<template>
  <div>
    <template>
      <el-table :data="userListData" border style="width: 100%">
          <el-table-column type="selection" width="55">
          </el-table-column>
          <el-table-column prop="username" label="用户名" width="180">
          </el-table-column>
          <el-table-column prop="mobile" label="电话" width="180">
          </el-table-column>
          <el-table-column prop="isDelete" label="状态">
            <template slot-scope="scope">
              <el-button :type="scope.row.isDelete?'warning':'success'" round @click="userstate(scope.row)">{{scope.row.isDelete?'禁用':'启用'}}</el-button>
            </template>
          </el-table-column>
      </el-table>
    </template>

  </div>
</template>

<script>
import { queryUser, updateUser } from '@/api/index.js'
export default {
  data () {
    return {
      type: '',
      id: '',
      isDelete: '',
      value2: true,
      userListData: [],
      queryList: {
        page: 1,
        pageSize: 6
      }
    }
  },
  mounted () {
    this.queryUserList()
  },
  methods: {
    queryUserList () {
      queryUser(this.queryList).then(res => {
        // console.log(11111111111111)
        // console.log(res)
        this.userListData = res.rows
        console.log(this.userListData)
      })
    },
    userstate (row) {
      // console.log(row)
      // this.isDelete = row.isDelete ? 0 : 1 这里写this绑定的时候就是每一个都是这样的 然后点击一个的其他的也都会改变
      // 禁用启用这个功能点击的时候更新状态 就是切换 按钮的样式改变 文字的内容也要改变 传参的时候只要做到取反就可以 1变成0 0 变成1
      // 通过scope获取参数 如果有多行用户的话就刚好可以获取到点击的那一行的数据 然后改变成功之后我们还有
      updateUser({ id: row.id, isDelete: (row.isDelete ? 0 : 1) }).then(res => {
        console.log(res)
        this.queryUserList()
      })
    }
  }
}
</script>

<style scoped>
</style>
