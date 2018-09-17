<template>
    <div>
       <el-button type="primary"  class="fristbtn">添加品牌</el-button>
        <template>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="date" label="用户名" >
                </el-table-column>
                <el-table-column prop="name" label="电话" >
                </el-table-column>
            </el-table>
        </template>
    </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: []
    }
  }
}
</script>

<style scoped>
.fristbtn{
    margin-bottom: 30px;
}
</style>
