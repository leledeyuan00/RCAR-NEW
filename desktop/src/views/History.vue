<template>
  <div class="history">
    <div>
      <b-card id="2015" :img-src="i2015[1]" img-left>
        <b-card-text
          class="fw-xl fs-l"
        >The 2015 International Conference on Real-time Computing and Robotics (RCAR 2015)</b-card-text>
        <div class="history-message">
          <div>
            <span class="fw-xl pr-2">Location:</span>
            <span>Changsha,China</span>
          </div>
          <div>
            <span class="fw-xl pr-2">Time:</span>
            <span>June 23-26, 2015</span>
          </div>
        </div>
      </b-card>

      <b-card id="2016" :img-src="i2016[1]" img-right>
        <b-card-text
          class="fw-xl fs-l"
        >The 2016 International Conference on Real-time Computing and Robotics (RCAR 2016)</b-card-text>
        <div class="history-message">
          <div>
            <span class="fw-xl pr-2">Location:</span>
            <span>Angkor Wat, Cambodia</span>
          </div>
          <div>
            <span class="fw-xl pr-2">Time:</span>
            <span>June 6-9, 2016</span>
          </div>
        </div>
      </b-card>

      <b-card id="2017" :img-src="i2017[1]" img-left>
        <b-card-text
          class="fw-xl fs-l"
        >The 2017 International Conference on Real-time Computing and Robotics (RCAR 2017)</b-card-text>
        <div class="history-message">
          <div>
            <span class="fw-xl pr-2">Location:</span>
            <span>Okinawa, Japan</span>
          </div>
          <div>
            <span class="fw-xl pr-2">Time:</span>
            <span>July 14-18, 2017</span>
          </div>
        </div>
      </b-card>
      <b-card id="2018" :img-src="i2018[1]" img-right>
        <b-card-text
          class="fw-xl fs-l"
        >The 2018 International Conference on Real-time Computing and Robotics (RCAR 2018)</b-card-text>
        <div class="history-message">
          <div>
            <span class="fw-xl pr-2">Location:</span>
            <span>Kandima, Maldives</span>
          </div>
          <div>
            <span class="fw-xl pr-2">Time:</span>
            <span>August 1-5, 2018</span>
          </div>
        </div>
      </b-card>

      <b-card id="2019" :img-src="i2019[1]" img-left>
        <b-card-text
          class="fw-xl fs-l"
        >The 2019 International Conference on Real-time Computing and Robotics (RCAR 2019)</b-card-text>
        <div class="history-message">
          <div>
            <span class="fw-xl pr-2">Location:</span>
            <span>Irkutsk, Russia</span>
          </div>
          <div>
            <span class="fw-xl pr-2">Time:</span>
            <span>August 4-9, 2019</span>
          </div>
        </div>
      </b-card>
    </div>
    <div class="text-center bg-white">
      <b-img :src="logo_url" fluid-grow alt="Fluid-grow image"></b-img>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { ImagePlugin } from "bootstrap-vue";
Vue.use(ImagePlugin);
import { CardPlugin } from "bootstrap-vue";
Vue.use(CardPlugin);
export default {
  data() {
    return {
      i2015: [
        require("../assets/images/2015-1.png"),
        require("../assets/images/2015-2.png"),
        require("../assets/images/2015-3.png"),
        require("../assets/images/2015-4.png")
      ],
      i2016: [
        require("../assets/images/2016-1.png"),
        require("../assets/images/2016-2.png"),
        require("../assets/images/2016-3.png")
      ],
      i2017: [
        require("../assets/images/2017-1.png"),
        require("../assets/images/2017-2.png"),
        require("../assets/images/2017-3.png")
      ],
      i2018: [
        require("../assets/images/2018-1.png"),
        require("../assets/images/2018-2.png"),
        require("../assets/images/2018-3.png"),
        require("../assets/images/2018-4.png")
      ],
      i2019: [
        require("../assets/images/2019-1.png"),
        require("../assets/images/2019-2.png")
      ],
      logo_url: require("./../../icon/committee_logo2.png")
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
.history-message {
  line-height: 2rem;
  font-size: map-get($font-sizes, "l") * $base-font-size;
}
.history {
  margin-left: 5rem;
  margin-right: 5rem;
}
</style>