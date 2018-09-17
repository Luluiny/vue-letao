<template>
  <div>
    <template>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="date" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="name" label="电话" width="180">
        </el-table-column>
        <el-table-column prop="address" label="状态">
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
</style>
