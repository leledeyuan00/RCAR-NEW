<template>
  <div class="table">
    <!-- <template slot-scope="scope"> -->
      <el-table :data="tableData" :row-class-name="tableRowClassName" :show-header="false" @row-click="handleClick">
        <el-table-column prop="info" min-width="400"></el-table-column>
        <el-table-column prop="date" min-width="100"></el-table-column>
      </el-table>
    <!-- </template> -->
  </div>
</template>

<style>
.el-table .warning-row {
  background: #90dad9;
}

.el-table .success-row {
  background: #90dad9;
}
.table{
  max-width: 800px;
  margin:auto;
}
</style>

<script>
export default {
  methods: {
    tableRowClassName({rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    handleClick(row) {
      if(row.url)
        this.$router.push(row.url);
    }
  },
  data() {
    return {
      tableData: [
        {
          date: "Dec.31,2019",
          info: "Submission of papers",
          url: "./InitialSubmission"
        },
        {
          date: "Dec.31,2019",
          info: "Submission of organized session/workshop",
        },
        {
          date: "Feb.20,2020",
          info: "Notificationof acceptance",
        },
        {
          date: "Mar.20,2020",
          info: "Final paper submission",
          url: "./FinalSubmission"
        },
        {
          date: "May.1,2020",
          info: "Early bird registration",
          url: "./Registration"
        }
      ]
    };
  }
};
</script>