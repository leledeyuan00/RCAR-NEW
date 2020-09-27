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
          room: "297 903 525", 
          RoomLink:"https://meeting.tencent.com/s/Wo9rSSDIbtVF",
          LiveLink: "https://meeting.tencent.com/l/UrydC2Vr5z2U", 
        },
        {
          room: "965 726 213", 
          RoomLink:"https://meeting.tencent.com/s/APBjNmoAwfWw",
          LiveLink: "https://meeting.tencent.com/l/3pQzHue28oZ1", 
        },
        {
          room: "193 919 359", 
          RoomLink:"https://meeting.tencent.com/s/o8piRzIxupas",
          LiveLink: "https://meeting.tencent.com/l/7Oh1L79ZieTJ", 
        },
        {
          room: "967 350 543", 
          RoomLink:"https://meeting.tencent.com/s/2hEONCk8mKaG",
          LiveLink: "https://meeting.tencent.com/l/znpywgOfRmSM", 
        },
        {
          room: "948 144 623", 
          RoomLink:"https://meeting.tencent.com/s/uk9mj3Dy1yZb",
          LiveLink: "https://meeting.tencent.com/l/vPzANlKOJ0ti", 
        },
        {
          room: "345 805 348", 
          RoomLink:"https://meeting.tencent.com/s/SVZFDpFq2NIO",
          LiveLink: "https://meeting.tencent.com/l/72uuLIQ0HvO4", 
        },
        {
          room: "520 729 039", 
          RoomLink:"https://meeting.tencent.com/s/YMhqSu9IWlP9",
          LiveLink: "https://meeting.tencent.com/l/tlzrN20nGipq", 
        }
      ]
    };
  }
};
</script>
