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
        Hashimoto: {
          list: "Plenary Talk Ⅰ: 9:00-9:50, Monday, Sep. 28",
          name: "Prof. Hideki Hashimoto",
          add: "Chuo University, Japan",
          title:
            "Modeling, Fabrication and Control of Living Cell based modular Micro Robot",
          img: require("./../../../src/images/hashimoto-m.png"),
          abstract: `We have been working for Intelligent Spaces (iSpaces) 
          which have functions of understanding environments by networking 
          sensors and serving people by using Mechatoronics/Robotics devices. 
          Many technologies have been applied to Intelligent Spaces, 
          such as vision sensors, LRF, ultra sound sensors, electromagnetic sensors, 
          and  other hardware to detect and track human and robots. 
          Intelligent Spaces are good platforms to integrate many kinds of technologies. 
          Integration itself is an important key to combine those technologies. 
          In this talk I focus on new issues of Intelligent Spaces such as Energy, 
          Transportation and Health Care. 
          We are developing a new energy management system which is introducing mobile Energy Storage Devices with wireless energy transfer. 
          And we are proposing a compact mobile vehicle to realize comfortable transportation in buildings. 
          For health care problem we are working for measuring of human biometrics to get good sleep and reduce human stress.`,
          biography: `Hideki Hashimoto (IEEE Fellow, SICE Fellow, RSJ Fellow) received the B.S., M.S. 
          and Dr. of Engineering from the Department of Electrical Engineering, 
          University of Tokyo in 1981, 1984 and 1987 respectively. 
          He joined the Institute of Industrial Science of the University of Tokyo as a lecturer in April of 1987. 
          He was an associate professor from July of 1990 until March of 2011. He has been a professor at Dept. of Electrical, 
          Electronics and Communication Engineering, Chuo University, Tokyo, Japan since April of 2011. 
          He was a visiting scientist at LIDS (Laboratory for Information and Decision System) and LEES (Laboratory for Electromagnetic and Electronic Systems) 
          of MIT from September of 1989 to August of 1990. He was an Invited Distinguished Professor at Seoul National University from 2009 to 2012, 
          and a Visiting Professor at Budapest University of Technology and Economics from 2009 to 2011. 
          He is a visiting professor at Budapest University of Technology and Economics from 2014. 
          He was the founding general chair of 1997 IEEE/ASME International Conference on Advanced Intelligent Mechatronics (AIM). 
          He was a program chair of IEEE/RSJ IROS in 1988 and 2000, and a general chair of IEEE ITS Conference in 2002 and IECON 2015. 
          His research topics are Intelligent Space, Intelligent Systems, Mechatronics, Robotics and Control.`,
          url: "https://www.elect.chuo-u.ac.jp/hlab/en/",
          web_valid: true,
          id: "1",
        },
        Lianqing: {
          list: "Plenary Talk Ⅱ: 10:00-10:50, Monday, Sep. 28",
          name: "Prof. Lianqing Liu",
          add:
            "Shenyang Institute of Automation, Chinese Academy of Science, China",
          title:
            "Modeling, Fabrication and Control of Living Cell based modular Micro Robot",
          img: require("./../../../src/images/LianqingLiu-m.png"),
          abstract: `Micro-robots have a great application prospect in the biomedical field due to the feature of small size. To solve the issues of energy supply and bio-compatibility of micro-robots, the bio-syncretic micro-robots actuated by living cells have been studied widely. However, the fabrication, assembling and control of the bio-syncretic micro-robots are the main challenges for the development of the bio-syncretic micro-robots. In this talk, manufacture and control of the living cells based modular micro robots will be discussed. Firstly, a robotic micro-manipulation system will be introduced to implement the high-throughput fabrication of the biological modules of micro robots, and to execute the on-line flexible assembling of the bio-syncretic robots by the fabricated living cells based modules. Then, an approach based on circularly distributed multiple electrodes (CE) will be induced to improve the differentiation of myoblast cells and characterize the electro-responsive beating behavior of living myotubes for the development of bio-syncretic micro robots. Moreover, a biomimetic bio-syncretic crawler actuated by living myotubes was demonstrated to move under the control of the CE. This talk will not only be related to the micro-robots, but will be also informative for biological tissue engineering and drugs screening.`,
          biography: `Lianqing Liu received his Ph.D. degree in Pattern Recognition and Intelligent System from university of Chinese Academy of Sciences, China in 2008, and B.S. degree in Industry Automation from Zhengzhou University, China in 2002. He started his career in 2006 at Shenyang Institute of Automation, Chinese Academy of Sciences, and holds the position of Assistant Professor (2006-2008), Associate Professor (2009-2010) and Professor (2011 to now) respectively. Currently his research interests include Nanorobotics, Intelligent control, and Biosensors. He has published over 100 peer reviewed international journal papers and led more than 20 funded research projects as Principal Investigator. 17 papers were selected as cover story published in “Small”, “Lab on a Chip” “Soft Matter”, “Applied Physics Letters” et al. He received the Best Student paper Award in 2015 International Conference on Manipulation, Manufacture and Measurement on the Nanoscale, Best Conference Paper in 2016 IEEE International Conference on Nano/Molecular Medicine and Engineering, and T. J. Tarn Best Paper in Robotics in 2017 IEEE international Conference on Robotics and Biomimetics. He was awarded the Early Government/Industrial Career Award by the IEEE Robotics and Automation Society in 2011, serves as a member of long range planning committee of RAS since 2017, and has been elected as the vice president of IEEE Robotics and Automation Society for the term of 2018-2019.`,
          web_valid: false,
          id: "2",
        },
        Zhendong: {
          list: "Plenary Talk Ⅲ: 9:00-9:50, Tuesday, Sep. 29",
          name: "Prof. Zhendong Dai",
          add: "Nanjing University of Aeronautics and Astronatics, China",
          title: "Biomimetics on gecko locomotion: from Biology to Engineering",
          img: require("./../../../src/images/Zhendong-m.jpg"),
          abstract: `Geckos have been studied for many years for their excellent moving abilities on various substrates, including any inclines, even ceilings, and various rough surfaces. Here we report our studies on the gecko adhesive mechanism, attaching and detaching dynamics, locomotion behaviors on anti-adhesive substrate and confined space, bio-inspired adhesive materials and gecko-inspired robot for micro-gravity condition. We have obtained following results: 1) The contact/ tribo-electrifiction is a mechanism more than Van der Waals force for gecko adhesion, we designed an experiment and measured the results showed the evidence of influence of contact / tribo-electrifiction on adhesion. 2) Gecko smartly uses technique of adducting and abducting to make attachment and detachment, this behavior inspired us to design a new pad for gecko-mimicking robot, instand of peeling from substrate. 3) Geckos developed positive and active synergy methods to overcome the difficult to move on anti-adhesive substrate. 4) We have developed bio-inspired adhesive materials and tested they performance for gecko mimicking robot. 5) Then we developed gecko-inspired robot for several possible applications.`,
          biography: `Dr. Zhendong Dai is director and founder of the Institute of Bio-inspired Structure and Surface Engineering (IBSS) at Nanjing University of Aeronautics and Astronautics (NUAA). He is Professor of Astronautics, Mechanical Engineering, Mechanics, Materials Science and Engineering. He set up a theory of tribo-irreversible thermodynamics and used the idea to understand coupling interaction among various factors by ENTROPY. In 2000, he jointed Grob’s biological group in Institute of Development Biology, Max-Plank-Institute, Tuebingen, Germany, where he learned the language of biology, and got feeling that what engineers may learn from biology and can do for biology. He designed the 3D sensors when he was in Germany He attracted Prof. Sun from Beijing University and collaborated cordially, Dai and the staffs got training biological knowledge and learn to speak with biologist. He and Sun drawn a schedule for IBSS, and closely worked together in finding a way to stimulate animals locomotion, esp. gecko and pigeon, and by this way to understand how brain work during locomotion and how biological robot can be set up. He was acutely aware the importance of reaction force in clearly understanding the locomotion, developed 3D force sensors and set up a facility to measure the 3D reaction force and to observe the motion behaviors simultaneously. He and his group find the different of reaction force pattern when gecko moving on floor, wall, ceiling and even various inclined surfaces, which greatly inspired the design of gecko-mimicking robots. The technology also be used for understanding the role of forelimb of frog during jumping, the behavior of locust when the incline changes. At the same time, the adhesive mechanism and the detaching technique used by gecko were subtly investigated; the adhesive structures mimicking setae were developed by self-growing carbon nanotube array technology, gecko mimicking adhesive elements and the robot were developed for the applications in space and vacuum. To meet the requirement of applications, such as light-weight load-carrying materials, heat-transferring, high-performance lead cell, electromagnetic shielding, many scientific questions and key technique were studied. Those works by he and his group are admitted by scientific and industrial societies, he has be pointed as boarding member of various journals, stand member of various academic societies. He has charged number of important projects, including two NSFC key projects and three key international collaboration projects. He has authored 6 books and more than 400 peer reviewed papers. His research interests include biomimetic on legged locomotion —gecko-mimicking robot, biological gecko-robot, locomotion dynamics and artificial adhesive; lightweight structures and materials —bio-inspired lightweight structure, multifunctional foamed metal; and tribology.`,
          web_valid: false,
          id: "3",
        },
        Yongchun: {
          list: "Plenary Talk Ⅳ: 10:00-10:50, Tuesday, Sep. 29",
          name: "Prof. Yongchun Fang",
          add:
            "College of Artificial Intelligence, Nankai University, Tianjin, China",
          title:
            "Dynamics Analysis and Nonlinear Control for Unmanned Quadrotor Cable-suspended Transportation Systems",
          img: require("./../../../src/images/YongchunFang-m.png"),
          abstract: `Cable-suspended transportation is an important way of transferring goods and materials by rotorcrafts in complex and hazardous environments, where external disturbances, system uncertainties, and especially the "twofold" underactuated characteristic bring great challenges to realize safe and smooth deliveries. This talk discusses the latest research results on the dynamics analysis, motion planning, and nonlinear control of the quadrotor transportation systems. Specifically, based on Lagrangian mechanics, a precise model is set up for the “twofold” underactuated aerial transportation system. Then, a time-optimal motion planning technique is proposed to generate a minimum-time trajectory in consideration of state and control constraints. Finally, some nonlinear control algorithms are designed to achieve asymptotic stability, whose performance is verified by various experimental results.`,
          key_words_valid: true,
          key_words: `distributed parameter systems, static output feedback control, mobile actuator/sensor guidance, exponential stabilization`,
          biography: `Yongchun Fang received the B.S. degree in electrical engineering and the M.S. degree in control theory and application, both from Zhejiang University, P. R. China, in 1996 and 1999, respectively, and the Ph.D. degree in electrical engineering from Clemson University, SC, USA in 2002.. From 2002 to 2003, Dr. Fang was a Postdoctoral Fellow at the Mechanical and Aerospace Engineering Department, Cornell University. Since 2003, he has been a professor at the Institute of Robotics and Automatic Information System, Nankai University, Tianjin, P. R. China. Dr. Fang is currently the head of the College of Artificial Intelligence, Nankai Univeristy, and also a Yangtze River Distinguished Professor of the Chinese Minister of Education. Dr. Fang’s research interests include underactuated systems control, visual servoing, AFM-based nano-manipulation, and so on. Dr. Fang is a recipient of the China National Funds for Distinguished Young Scientists, and he won the First Prize of Wu Wenjun Natural Science of Artificial Intelligence in 2017.`,
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
