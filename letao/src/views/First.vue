<template>
    <div>
        <el-button type="primary"  class="fristbtn" @click="addGoods">添加分类</el-button>
        <template>
            <el-table :data="firstList" border style="width: 100%">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="id" label="分类的编号" >
                </el-table-column>
                <el-table-column prop="categoryName" label="分类的名称" >
                </el-table-column>
            </el-table>
        </template>
        <!-- 添加分类的对话框 -->

        <el-dialog
            title="提示"
            :visible.sync="addFirstdialogVisible"
            width="30%">
        <el-input auto-complete="off" placeholder="请输入产品名称" v-model="value"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addFirstdialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addfirm">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
import { getFirstsList, addFirstgoods } from '@/api/index.js'
export default {
  data () {
    return {
      value: '',
      firstList: [],
      addFirstdialogVisible: false
    }
  },
  methods: {
    // 确认添加商品
    addfirm () {
      // console.log(this.value)
      addFirstgoods({categoryName: this.value}).then(res => {
        // console.log(res)
        if (res.success) {
          this.addFirstdialogVisible = false
          this.getData()
        }
      })
    },
    // 显示添加商品的对话框
    addGoods () {
      this.addFirstdialogVisible = true
    },
    // 获取一级分类数据
    getData () {
      getFirstsList({page: 1, pageSize: 6}).then(res => {
        // console.log(res)
        this.firstList = res.rows
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>
.fristbtn{
    margin-bottom: 30px;
}
</style>
