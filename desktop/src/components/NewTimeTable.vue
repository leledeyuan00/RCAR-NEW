<template>
  <div class="table">
    <el-table
      :data="tableData"
      :cell-class-name="tableColClassName"
      :row-class-name="tableRowClassName"
      :show-header="false"
      @row-click="handleClick"
    >
      <el-table-column prop="info" min-width="400"></el-table-column>
      <el-table-column prop="date" min-width="100"></el-table-column>
    </el-table>  </div>
</template>

<style>
.el-table .warning-row {
  background: #90dad9;
}

.el-table .success-row {
  background: #90dad9;
}
.table {
  max-width: 800px;
  margin: auto;
}
.new {
  color: red;
}
.imp {
  color: red;
  text-decoration: line-through;
}</style>

<script>
export default {
  methods: {
    // cellClassName({row,column,rowIndex,columnIndex}){
    //   if(rowIndex===4 && columnIndex===2){
    //      return "imp";
    //   }
    // },
    tableRowClassName({ rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    //by xtl 2019.12.31
    tableColClassName({  rowIndex, columnIndex }) {
      if (columnIndex === 1) {
        return "old";
      } else if (columnIndex === 2&&rowIndex!==4) {
        return "new";
      } else if (columnIndex!==0){
        return "imp"
      }
      return "";
    },    
    handleClick(row) {
      if (row.url) this.$router.push(row.url);
    },    
  },

  data() {
    return {
      tableData: [
        {
          date: " ",
          info: " ",
          url: " "
        },
        {
          date: " ",
          info: " "
        },
        {
          date: " ",
          info: " "
        },
        {
          date: " ",
          info: " ",
          url: " "
        },
        {
          date: " ",
          info: " ",
          url: " "
        }
      ]
    };
  }
};
</script>
