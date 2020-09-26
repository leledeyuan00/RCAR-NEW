<template>
  <div>
    <b-table-simple hover large caption-top responsive>
      <colgroup>
        <col />
        <col />
      </colgroup>
      <b-thead class="bg-main-1">
        <b-tr>
          <b-th class="text-center fs-xl" colspan="7">
            Important Date
            <i class="el-icon-date pl-2"></i>
          </b-th>
        </b-tr>
      </b-thead>
      <b-tbody class="fs-xl">
        <b-tr class="bg-light" v-for="table in tableDate" :key="table">
          <b-th colspan="4" class="text-left fw-s" rowspan="1">
            <div v-if="table.url">
              <router-link :to="table.url">
                {{ table.info }}
              </router-link>
            </div>
            <div v-else>{{table.info}}</div>
          </b-th>
          <!-- <b-th class="text-center fw-s old">{{ table.old_date }}</b-th> -->
          <b-th class="text-center fw-s new">{{ table.date }}</b-th>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableDate: [
        {
          date: "Apr.20,2020",
          info: "Submission of papers",
          old_date: "Mar.20,2020",
          url: "./InitialSubmission"
        },
        {
          date: "Apr.20,2020",
          info: "Submission of organized session/workshop",
          old_date: "Mar.20,2020"
        },
        {
          date: "May.1,2020",
          info: "Notificationof acceptance",
          old_date: "Apr.20,2020"
        },
        {
          date: "May.31,2020",
          info: "Final paper submission",
          old_date: "May.8,2020",
          url: "./FinalSubmission"
        },
        {
          date: "Sep.18,2020",
          info: "Early bird registration",
          old_date: "May.31.2020",
          url: "./Registration"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.old {
  color: grey;
  text-decoration: line-through;
  font-size: 14px;
}
.new {
  color: red;
}

</style>
