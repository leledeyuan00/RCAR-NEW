<template>
  <div class="history border-body">
    <div class="accordion" role="tablist">
      <div v-for="(info, i) in speaker_info" :key="i">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle="info.id" variant="info">{{
              info.list
            }}</b-button>
          </b-card-header>
          <b-collapse
            :id="info.id"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card
              :img-src="info.img"
              img-alt="Card image"
              img-left
              class="mb-3"
            >
              <b-card-text class="fw-xl fs-l pt-3">
                {{ info.name }}
              </b-card-text>
              <b-card-text>
                {{ info.add }}
              </b-card-text>
            </b-card>
            <b-card-body>
              <div>
                <span class="fw-xxl pr-2">Title:</span>
                <span class="fw-xl">{{ info.title }}</span>
              </div>
              <div class="pt-2 plenary">
                <span class="fw-xxl pr-2">Abstract:</span>
                <span>{{ info.abstract }}</span>
              </div>
              <div v-if="info.key_words_valid" class="pt-2 plenary">
                <span class="fw-xxl pr-2">Keywords:</span>
                <span>{{ info.key_words }}</span>
              </div>
              <div class="pt-2 plenary">
                <span class="fw-xxl pr-2">Biography:</span>
                <span>{{ info.biography }}</span>
              </div>
              <div v-if="info.web_valid" class="pt-2">
                <span class="fw-xl pr-2">Website:</span>
                <span>
                  <a :href="info.url" target="_blank" rel="noopener">{{
                    info.url
                  }}</a>
                </span>
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { ImagePlugin } from "bootstrap-vue";
Vue.use(ImagePlugin);
import { CardPlugin } from "bootstrap-vue";
Vue.use(CardPlugin);
import { CollapsePlugin } from "bootstrap-vue";
Vue.use(CollapsePlugin);
export default {
  data() {
    return {
      speaker_info: {
        Xiangpeng: {
          list: "Keynote Talk Ⅰ: 13:00-13:30, Monday, Sep. 28",
          name: "Prof. Xiangpeng Li",
          add: "Soochow University, China",
          title: "Liquid Metal Robots",
          img: require("./../../../src/images/XiangpengLi-m.png"),
          abstract: `Gallium based liquid metal made from eutectic gallium-indium (EGaIn) and Galinstan (gallium-indium-tin) exhibit unique and extraordinary properties as living protoplasm. Over the years, many researchers have been trying to employ LM droplets as animated soft matter to create liquid robots that can possess complex characteristics and behaviors of living systems. In this talk, I would like to share my experience of adopting liquid metal to create robots and actuators. Firstly, I will present a novel functional liquid metal that can be manipulated using both magnetic and electric fields, and yet, still exhibits similar appearance, surface fluidity, mobility, and deformability to those of pure liquid metals. Then, I will report the first liquid metal based wheeled robot that can run outside liquid environment. Finally, I will show the design and investigation of an innovative liquid metal droplet robot which appears as a liquid metal droplet but exhibits extraordinary actuating performance in 3D space. An in vitro targeted drug delivery and therapy trial with a drug loaded liquid metal droplet robot is also discussed.`,
          biography: `Xiangpeng Li is a professor in the Robotics and Micro-Systems Center at Soochow University, China. He heads the Laboratory of Micro-robots and Micro-manipulation. Prior to Join Soochow University, he was a postdoctoral fellow in City university of Hong Kong for 3 years. He received the Ph.D degrees for both of University of Science and Technology of China and City University of Hong Kong, and the B.S degree from Harbin Institute of Technology, China. His research group is currently conducting many national projects on the topics of micro-robots and cell manipulation. He has participated in organizing many international robotics conferences such as IROS, AIM, and RCAR. He has also served as a Conference Editorial Board or as an Associate Editor for many international journals and conferences.`,
          web_valid: false,
          id: "1",
        },
        FanZhang: {
          list: "Keynote Talk Ⅱ: 13:30-14:00, Monday, Sep. 28",
          name: "Associate Prof. Fan Zhang",
          add: "Northwestern Polytechnical University, China",
          title: "From Rigid to Flexible: A New Solution for Space Debris Removal",
          img: require("./../../../src/images/FanZhang-m.png"),
          abstract: `Space debris has always been a growing problem worldwide because it takes up vast orbital resources and greatly threatens space safety. The development of the space tether application since the 1970s has revealed some promising new solutions to space debris capture and removal that are different from traditional rigid capturing via space manipulator. A brand new solution, namely a tethered space net robot is introduced in this talk, including the motivation, system design, challenges, and solutions.`,
          biography: `Fan Zhang has been an associate research professor in the school of Astronautics at Northwestern Polytechnical University since Feb. 2018. She received her PhD degree of Guidance, Navigation and Control in 2017 from Northwestern Polytechnical University, and during the PhD study, she was working in Mcgill University as a research trainee from 2012 to 2014. Her interest is about dynamics and control of space tethered systems including tethered space robot, space multi-tethers, and maneuverable tethered space net robot.`,
          web_valid: false,
          id: "2",
        },
        SONGZhan: {
          list: "Keynote Talk Ⅲ: 13:00-13:30, Tuesday, Sep. 29",
          name: "Prof. SONG Zhan",
          add: "Shenzhen Institutes of Advanced Technology (SIAT), China",
          title: "Structured Light based 3D Sensing: Applications and Trends",
          img: require("./../../../src/images/SONGZhan-m.png"),
          abstract: `Vision-based 3D sensing techniques have been widely adopted by various intelligent systems, such as bin-picking, robot guidance, HMI and VR/AR applications. This talk will give a brief review to existing 3D vision methods including Kinect, TOF, stereo vision, structured light and photometric stereo etc. Then, we will focus on the structured light means and discuss different coding schemes, as well as the pros and cons of different SLS methods. Finally, we will introduce some 3D structured light systems which have been successfully applied in real application in our past research projects.`,
          biography: `Prof. SONG Zhan received his Ph. D. degree in Automation and Computer-Aided Engineering from the Chinese University of Hong Kong in 2008, and joined SIAT the following year. He is currently the assistant director of Institute of Advanced Integration Technology and the executive director of Research Laboratory for Intelligent Design and Machine Vision, he is also the technical director of Maker Institute CAS. His major field of research is 3D machine vision and pattern recognition. He has received several grants from the NSFC, Key-Area Research and Development Program of Guangdong Province, and the CAD Knowledge and Creativities Project etc. He has more than 40 related research articles which have been published in area top journals, such as the IEEE Trans. on PAMI, IEEE Trans. on IE, IEEE Trans. on IP, and CAD, etc. More than 40 patents of invention have been issued or applied in the past years, moreover, 10 of them have been transferred and transformed.`,
          web_valid: false,
          id: "3",
        },
        LinWang: {
          list: "Keynote Talk Ⅳ: 13:30-14:00, Tuesday, Sep. 29",
          name: "Prof. Lin Wang",
          add: "Shanghai Jiao Tong University, China",
          title: "Controllability and Cooperation of Networked Multi-agent Systems",
          img: require("./../../../src/images/LinWang-m.jpg"),
          abstract: `System controllability as a fundamental concept has been extensively studied over the last half a century. Although various criteria have been well developed, the controllability issue becomes more complicated and challenging when applied to large-scale networked multi-agent systems due to their interaction complexity. In this talk, some effective criteria for determining the large-scale networked system controllability are introduced, following by the discussions of robustness of controllability against various malicious attacks. Based on the controllability, distributed controllers are further designed for various multi-agent systems, including bounded control for connectivity maintenance of double-integrator agents, sampled-data control of nonholonomic multi-robot systems, cooperative tracking control subject to motion constraints, and pose synchronization of multiple rigid bodies.`,
          biography: `Lin Wang is a Professor in the Department of Automation, Shanghai Jiao Tong University. She received her Ph.D. degree in control theory from Academy of Mathematics and Systems Science, Chinese Academy of Sciences in 2009. From Apr. 2010 to Sep. 2010 and Sep. 2011 to Feb. 2012, she was a Guest Researcher at Royal Institute of Technology (KTH), Sweden. From Jan. 2016 to Mar. 2016, she was a Research Fellow at the City University of Hong Kong. From Jan. 2018 to Aug. 2018, she was a Visiting Associate Professor at Harvard University, and from Aug. 2018 to Jan. 2019, she was a visiting Associate Professor at the Media Lab of Manchester Institute of Technology (MIT). She was a recipient of the Best Theory Paper Award at the 13th World Congress on Intelligent Control and Automation in 2018, and a recipient of the Excellent Scientific Paper in the Field of Electronic Information in 2020. She is a Senior Member of IEEE, and serves as the General Secretary of the Chinese Chapter of Network Science Society, General Secretary of the CSIAM Activity Group on Complex Networks and Complex Systems. Her current research interests are adaptive complex networks, and coordination of multi-agent systems.`,
          web_valid: false,
          id: "4",
        },
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
.plenary {
  line-height: 130%;
}
</style>
