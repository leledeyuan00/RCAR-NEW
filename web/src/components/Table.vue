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
        <b-tr class="bg-light">
          <b-th colspan="4" class="text-left fw-s" rowspan="1">
            <router-link :to="'./InitialSubmission'">
              Submission of papers
            </router-link>
            </b-th>
          <b-th class="text-center fw-s">Jan.31,2020</b-th>
        </b-tr>
        <b-tr class="bg-light">
          <b-th
            colspan="4"
            class="text-left fw-s"
            rowspan="1"
          >Submission of organized session/workshop</b-th>
          <b-th class="text-center fw-s">Jan.31,2020</b-th>
        </b-tr>
        <b-tr class="bg-light">
          <b-th colspan="4" class="text-left fw-s" rowspan="1">Notificationof acceptance</b-th>
          <b-th class="text-center fw-s">Mar.20,2020</b-th>
        </b-tr>
        <b-tr class="bg-light">
          <b-th colspan="4" class="text-left fw-s" rowspan="1">
            <router-link :to="'./FinalSubmission'">
              Final paper submission
            </router-link>
            </b-th>
          <b-th class="text-center fw-s">Apr.20,2020</b-th>
        </b-tr>
        <b-tr class="bg-light">
          <b-th colspan="4" class="text-left fw-s" rowspan="1">Early bird registration</b-th>
          <b-th class="text-center fw-s">May.1,2020</b-th>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
export default {};
</script>