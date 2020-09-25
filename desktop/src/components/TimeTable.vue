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
      <el-table-column prop="old_date" min-width="100"></el-table-column>
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
.old {
  color: rgb(0, 0, 0);
  text-decoration: line-through;
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
      } else if (columnIndex === 2) {
        return "new";
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
          date: "Apr.20,2020",
          info: "Submission of papers",
          old_date: "Mar.20,2020",          url: "./InitialSubmission"
        },
        {
          date: "Apr.20,2020",
          info: "Submission of organized session/workshop",
          old_date: "Mar.20,2020"        },
        {
          date: "May.1,2020",
          info: "Notification of acceptance",
          old_date: "Apr.20,2020"        },
        {
          date: "May.31,2020",
          info: "Final paper submission",
          old_date: "May.8,2020",          url: "./FinalSubmission"
        },
        {
          date: "Sep.18,2020",
          info: "Early bird registration",
          old_date: "May.31,2020",          url: "./Registration"
        }
      ]
    };
  }
};
</script>
