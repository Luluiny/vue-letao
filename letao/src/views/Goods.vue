<template>
    <div>
        <el-button type="primary" class="fristbtn" @click="addGoods">添加商品</el-button>
        <template>
            <el-table :data="goodList" border style="width: 100%">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="brandId" label="商品编号">
                </el-table-column>
                <el-table-column prop="proName" label="商品名称" min-width="450px">
                </el-table-column>
                <el-table-column prop="proDesc" label="商品描述">
                </el-table-column>
                <el-table-column prop="num" label="商品库存">
                </el-table-column>
                <el-table-column prop="size" label="商品尺寸">
                </el-table-column>
                <el-table-column prop="statu" label="是否下架">
                    <template slot-scope="scope">
                        {{scope.row.statu?'以上架商品':'暂无此商品'}}
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="操作">
                    <template slot-scope="scope">
                        <el-button type="success">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </template>
        <!-- 添加商品弹出框 -->
        <el-dialog title="添加商品" :visible.sync="addGoodsdialogFormVisible">
            <el-form :model="form" label-width="">
                <el-form-item label="活动区域">
                    <!-- 选择区域 -->
                    <template>
                        <el-select v-model="value" placeholder="请选择">
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
                    <el-input v-model="form.name" auto-complete="off" placeholder="请输入产品名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.name" auto-complete="off" placeholder="请输入产品名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.name" auto-complete="off" placeholder="请输入产品名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.name" auto-complete="off" placeholder="请输入产品名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.name" auto-complete="off" placeholder="请输入产品名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.name" auto-complete="off" placeholder="请输入产品名称"></el-input>
                </el-form-item>
                <!-- 上传图片区域 -->
                <el-form-item>
                    <el-upload class="upload-demo"
                     action="http://127.0.0.1:3000/product/addProductPic"
                     name="pic1"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                     :file-list="fileList2"
                     :with-credentials='true'
                     multiple
                      list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addGoodsdialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addGoodsdialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { getGoodsList, getFirstsList } from '@/api/index.js'
export default {
  data () {
    return {
      fileList2: [],
      // 这里看一级分类
      firstList: [
      ],
      value: '',
      addGoodsdialogFormVisible: false,
      form: {
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      goodList: []
    }
  },
  mounted () {
    this.initGoods()
    this.getData()
  },
  methods: {
    // 获取一级分类数据
    getData () {
      getFirstsList({page: 1, pageSize: 6}).then(res => {
        // console.log(res)
        this.firstList = res.rows
      })
    },
    handlePreview () {},
    handleRemove () {},
    // 弹出对话框
    addGoods () {
      this.addGoodsdialogFormVisible = true
    },
    initGoods () {
      getGoodsList().then(res => {
        // console.log(res)
        this.goodList = res.rows
      })
    }
  }
}
</script>

<style scoped>
.fristbtn {
  margin-bottom: 30px;
}
</style>
