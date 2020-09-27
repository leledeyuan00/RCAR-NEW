<template>
  <div class="table">
    <el-table
      :data="tableData"
      :cell-class-name="tableColClassName"
      :row-class-name="tableRowClassName"
      :header-cell-class-name="labelName"
      @row-click="handleClick"
    >
      <el-table-column prop="room" min-width="100" label="MeetingID"></el-table-column>
      <el-table-column prop="RoomLink" min-width="300" label="RoomLink"></el-table-column>
      <el-table-column prop="LiveLink" min-width="300" label="LiveLink"></el-table-column>
    </el-table>  </div>
</template>

<style>
.el-table .warning-row {
  background: #dbdfdf;
}

.el-table .success-row {
  background:#dbdfdf;
}
.el-table .label{
   background:#146bbd;
   color: white;
}
.table {
  max-width: 100%;
  margin: auto;
}
.new {
  text-align: center;
}
</style>

<script>
export default {
  methods: {
    tableRowClassName({ rowIndex }) {
      if (rowIndex === 1 || rowIndex === 5) {
        return "warning-row";
      } else if (rowIndex === 3 || rowIndex === 7) {
        return "success-row";
      }
      return "";
    },
    labelName({ rowIndex }) {
        return "label";
    },   
    handleClick(row) {
      if (row.url) this.$router.push(row.url);
    },    
  },

  data() {
    return {
      tableData: [
        {
          room: "735 778 245", 
          RoomLink: "https://meeting.tencent.com/s/B9xuxLuQ3ooj",
          LiveLink: "https://meeting.tencent.com/l/Hq6pUjP7Yn22", 
        },
        {
          room: "536 881 270", 
          RoomLink:"https://meeting.tencent.com/s/ECshIH2k5Y0h",
          LiveLink: "https://meeting.tencent.com/l/0n217XixH6sM", 
        },
        {
          room: "575 404 726", 
          RoomLink:"https://meeting.tencent.com/s/nYkPoCljeLQ5",
          LiveLink: "https://meeting.tencent.com/l/NqJTTi7PQ82f", 
        },
        {
          room: "181 764 965", 
          RoomLink:"https://meeting.tencent.com/s/b21Pv3S9V8mi",
          LiveLink: "https://meeting.tencent.com/l/s14OsnkVsLz1", 
        },
        {
          room: "967 350 543", 
          RoomLink:"https://meeting.tencent.com/s/2hEONCk8mKaG",
          LiveLink: "https://meeting.tencent.com/l/znpywgOfRmSM", 
        },
        {
          room: "348 990 861", 
          RoomLink:"https://meeting.tencent.com/s/tPCHYfhvVlDh",
          LiveLink: "https://meeting.tencent.com/l/uNaBAvMljFlN", 
        },
        {
          room: "433 150 217", 
          RoomLink:"https://meeting.tencent.com/s/3L0NYk6inTQn",
          LiveLink: "https://meeting.tencent.com/l/eU5wwURCtmKW", 
        },
        {
          room: "336 711 131", 
          RoomLink:"https://meeting.tencent.com/s/zwWhjtBwPujN",
          LiveLink: "https://meeting.tencent.com/l/1sev2mMTc7U4", 
        }
      ]
    };
  }
};
</script>
