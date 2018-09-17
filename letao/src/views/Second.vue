<template>
    <div>
        <el-button type="primary" class="fristbtn" @click="addbrand">添加品牌</el-button>
        <template>
            <el-table :data="SecondList" border style="width: 100%">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="categoryId" label="品牌编号">
                </el-table-column>
                <el-table-column prop="brandName" label="品牌名称">
                </el-table-column>
                <el-table-column label="品牌logo">
                    <!-- 使用表格展示图片的时候不能使用prop绑定值 要使用template的scope属性动态绑定 -->
                    <template slot-scope="scope">
                        <img :src="'http://127.0.0.1:3000'+scope.row.brandLogo" alt="" width='100' height='100'>
                    </template>
                </el-table-column>
                <el-table-column prop="categoryName" label="所属分类">
                </el-table-column>
            </el-table>
        </template>
        <!-- 添加品牌对话框 -->
        <el-dialog title="添加分类"
         :visible.sync="addBranddialogVisible">
         <el-form :model="form" label-width="">

            <el-form-item label="请选择分类">
                    <!-- 选择区域 -->
                    <template>
                        <el-select v-model="value" >
                            <el-option
                            v-for="item in firstList"
                             :key="item.value"
                              :label="item.categoryName"
                               :value="item.id">
                            </el-option>
                        </el-select>
                    </template>
                </el-form-item>
                 <el-form-item>
                    <el-input v-model="form.name" auto-complete="off" placeholder="请输入品牌名称"></el-input>
                </el-form-item>
                <el-form-item>
                         <el-upload
                            class="upload-demo"
                            action="http://127.0.0.1:3000/category/addSecondCategoryPic"
                            name="pic1"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :file-list="fileList2"
                            :with-credentials='true'
                            list-type="picture">
                            <el-button size="small" type="primary" class="addpic">点击上传</el-button>
                         </el-upload>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addBranddialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addBranddialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { getSecondList, getFirstsList } from '@/api/index.js'
export default {
  data () {
    return {
      addBranddialogVisible: false,
      value: '',
      form: {},
      SecondList: [],
      firstList: [],
      fileList2: []
    }
  },
  mounted () {
    this.initseconddata()
    this.getData()
  },
  methods: {
    handlePreview () {},
    handleRemove () {},
    // 获取一级分类数据
    getData () {
      getFirstsList({page: 1, pageSize: 6}).then(res => {
        // console.log(res)
        this.firstList = res.rows
      })
    },
    // 添加分类框
    addbrand () {
      this.addBranddialogVisible = true
    },
    initseconddata () {
      getSecondList({ page: 1, pageSize: 8 }).then(res => {
        console.log(res)
        this.SecondList = res.rows
      })
    }
  }
}
</script>

<style scoped>
.fristbtn {
  margin-bottom: 30px;
}
.upload-demo{
    border: 1px solid #888;
    width: 200px;
    height: 200px;
    margin-top: 40px;
}
.addpic{
    position: absolute;
    top: -10px;
}
</style>
