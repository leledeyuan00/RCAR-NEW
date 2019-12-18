<template>
  <div class="history border-body">
    <div class="head-bar d-flex ai-center">
      <router-link tag="div" :to="'./'">
        <i class="el-icon-arrow-left fs-xxxl"></i>
      </router-link>
      <span class="flex-1 pr-1">History of RCAR</span>
    </div>
    <div v-for="(info,i) in history_info" :key="i">
      <b-card id :img-src="info.img">
        <b-card-text class="fw-xl fs-l">{{info.head}}</b-card-text>
        <div class="history-message pt-4">
          <div>
            <span class="fw-xl pr-2">Location:</span>
            <span>{{info.location}}</span>
          </div>
          <div>
            <span class="fw-xl pr-2">Time:</span>
            <span>{{info.time}}</span>
          </div>
          <div>
              <span class="fw-xl pr-2">Website:</span>
              <span v-if="info.web_valid">
                <a :href=info.web target="_blank" rel="noopener">{{info.web}}</a>
              </span>
              <span v-else class="text-grey-1" style="text-decoration:line-through">{{info.web}}</span>
          </div>
        </div>
      </b-card>
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
      history_info: {
        h2015: {
          head:
            "The 2015 International Conference on Real-time Computing and Robotics (RCAR 2015)",
          location: "Changsha,China",
          time: "June 23-26, 2015",
          img: require("./../../../src/images/2015-2.png"),
          web: "http://www.rcar2015.org",
          web_valid: false,
          assign: `img-left`
        },
        h2016: {
          head:
            "The 2016 International Conference on Real-time Computing and Robotics (RCAR 2016)",
          location: "Angkor Wat, Cambodia",
          time: "June 6-9, 2016",
          img: require("./../../../src/images/2016-2.png"),
          web: "http://robotics.sjtu.edu.cn/RCAR/",
          web_valid: true,
          assign: `img-left`
        },
        h2017: {
          head:
            "The 2017 International Conference on Real-time Computing and Robotics (RCAR 2017)",
          location: "Okinawa, Japan",
          time: "July 14-18, 2017",
          img: require("./../../../src/images/2017-2.png"),
          web: "http://robotics.sjtu.edu.cn/RCAR2017/",
          web_valid: true,
          assign: `img-left`
        },
        h2018: {
          head:
            "The 2018 International Conference on Real-time Computing and Robotics (RCAR 2018)",
          location: "Kandima, Maldives",
          time: "August 1-5, 2018",
          img: require("./../../../src/images/2018-2.png"),
          web: "http://robotics.sjtu.edu.cn/RCAR2018/",
          web_valid: true,
          assign: `img-left`
        },
        h2019: {
          head:
            "The 2019 International Conference on Real-time Computing and Robotics (RCAR 2019)",
          location: "Irkutsk, Russia",
          time: "August 4-9, 2019",
          img: require("./../../../src/images/2019-2.png"),
          web: "http://rcar2019.bigsmilelab.ac.cn/",
          web_valid: true,
          assign: `img-left`
        }
      },
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
.history-message {
  line-height: 2rem;
  font-size: map-get($font-sizes, "l") * $base-font-size;
}
.history {
  max-width: 1366px;
  margin: auto;
}
.SchoolBadge {
  border-radius: 3px;
  border: solid 1px $border-color;
}
</style>