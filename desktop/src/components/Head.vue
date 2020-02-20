<template>
  <div class="ai-center d-flex jc-between py-2">
    <div class="logo">
      <img :src="logo" alt="" style="max-width:300px">
    </div>
    <span class="text text-right flex-1" >
      <h4>
        <b>2020 IEEE International Conference on Real-time</b>
      </h4>
      <h4>
        <b>Computing and Robotics</b>
      </h4>
      <h4 class="pt-3">August 2-6, 2020, Asahikawa, Japan</h4>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require("./../../../src/logo/logo-flex2.png")
    };
  }
};
</script>

<style lang="scss">
.logo {
  float: left;
}
.text {
  float: right;
  font-size: 1.3em;
  font-weight: 600;
  color: #3E99C9;
  margin-bottom: 0.5em;
  letter-spacing: .08em;
}
</style>