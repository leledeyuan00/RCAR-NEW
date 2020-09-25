<template>
  <div class="body-main border-body bg-white ql-align-articles px-3">
      <h1 span style="color:rgb(0,102,204)">
        Keynote Speakers
      </h1>
      <br>
      <h3 style="margin-top:10px; margin-bottom:10px;">
        <strong> Keynote Talk Ⅰ: 11:30-12:00, Monday, Sep. 28</strong>
      </h3>
      <br>
      <img src="./../../../src/images/XiangpengLi.png" class="card-im-left" width="175" height="222">
      <br>
      <h4>
        <strong> Prof. Xiangpeng Li, Soochow University, China</strong>
      </h4>
      <h4>
        <strong>Title: Liquid Metal Robots</strong>
      </h4>
      <h5>
      <p style="text-align:justify">
        <strong>Abstract:</strong>
        Gallium based liquid metal made from eutectic gallium-indium (EGaIn) and Galinstan (gallium-indium-tin) exhibit unique and extraordinary properties as living protoplasm. Over the years, many researchers have been trying to employ LM droplets as animated soft matter to create liquid robots that can possess complex characteristics and behaviors of living systems. In this talk, I would like to share my experience of adopting liquid metal to create robots and actuators. Firstly, I will present a novel functional liquid metal that can be manipulated using both magnetic and electric fields, and yet, still exhibits similar appearance, surface fluidity, mobility, and deformability to those of pure liquid metals. Then, I will report the first liquid metal based wheeled robot that can run outside liquid environment. Finally, I will show the design and investigation of an innovative liquid metal droplet robot which appears as a liquid metal droplet but exhibits extraordinary actuating performance in 3D space. An in vitro targeted drug delivery and therapy trial with a drug loaded liquid metal droplet robot is also discussed.  
      </p>
      <p style="text-align:justify">
        <strong>Biography:</strong>
        Xiangpeng Li is a professor in the Robotics and Micro-Systems Center at Soochow University, China. He heads the Laboratory of Micro-robots and Micro-manipulation. Prior to Join Soochow University, he was a postdoctoral fellow in City university of Hong Kong for 3 years. He received the Ph.D degrees for both of University of Science and Technology of China and City University of Hong Kong, and the B.S degree from Harbin Institute of Technology, China. His research group is currently conducting many national projects on the topics of micro-robots and cell manipulation. He has participated in organizing many international robotics conferences such as IROS, AIM, and RCAR. He has also served as a Conference Editorial Board or as an Associate Editor for many international journals and conferences. 
        </p>
      </h5>

      <br>
      <h3 style="margin-top:10px; margin-bottom:10px;">
        <strong> Keynote Talk Ⅱ: 11:30-12:00, Tuesday, Sep. 29</strong>
      </h3>
      <br>
      <img src="./../../../src/images/SONGZhan.png" class="card-im-left" width="175" height="222">
      <br>
      <h4>
        <strong> Prof. SONG Zhan, Shenzhen Institutes of Advanced Technology (SIAT), China</strong>
      </h4>
      <h4>
        <strong>Title: Structured Light based 3D Sensing: Applications and Trends</strong>
      </h4>
      <h5>
      <p style="text-align:justify">
        <strong>Abstract:</strong>
        Vision-based 3D sensing techniques have been widely adopted by various intelligent systems, such as bin-picking, robot guidance, HMI and VR/AR applications. This talk will give a brief review to existing 3D vision methods including Kinect, TOF, stereo vision, structured light and photometric stereo etc. Then, we will focus on the structured light means and discuss different coding schemes, as well as the pros and cons of different SLS methods. Finally, we will introduce some 3D structured light systems which have been successfully applied in real application in our past research projects.  
      </p>
      <p style="text-align:justify">
        <strong>Biography:</strong>
        Prof. SONG Zhan received his Ph. D. degree in Automation and Computer-Aided Engineering from the Chinese University of Hong Kong in 2008, and joined SIAT the following year. He is currently the assistant director of Institute of Advanced Integration Technology and the executive director of Research Laboratory for Intelligent Design and Machine Vision, he is also the technical director of Maker Institute CAS. His major field of research is 3D machine vision and pattern recognition. He has received several grants from the NSFC, Key-Area Research and Development Program of Guangdong Province, and the CAD Knowledge and Creativities Project etc. He has more than 40 related research articles which have been published in area top journals, such as the IEEE Trans. on PAMI, IEEE Trans. on IE, IEEE Trans. on IP, and CAD, etc. More than 40 patents of invention have been issued or applied in the past years, moreover, 10 of them have been transferred and transformed. 
        </p>
      <p style="text-align:justify">
        <strong>个人简介:</strong>
        宋展，博士，研究员，博士生导师。毕业于香港中文大学，获计算机辅助工程与自动化专业博士学位。2009年加入中科院深圳先进技术研究院，现任先进集成技术研究所所长助理，智能设计与机器视觉研究室执行主任，兼任中科创客学院技术总监。研究领域为3D机器视觉与模式识别，承担及完成国家重点研发计划、国家自然科学基金、广东省重点领域研发计划、中科院知识创新工程等重要科研课题20余项，累计发表学术论文150余篇，包括IEEE T-PAMI, T-IE，T-IP等SCI论文40余篇，申请及授权发明专利60余项，完成华为、海思等企业课题近20项，完成发明专利成果转移转化10余项，相关成果曾获得中央电视台“新闻联播”栏目报道。担任多个国际重要期刊审稿人及省市科技项目评审专家，荣获2011年度中国科学院院地合作先进个人（科技类）一等奖，2012年中国产学研合作创新奖（个人），2013年入选中科院青年创新促进会、深圳市海外高层次人才“孔雀计划”B类人才，2016年入选南山区领航人才计划，2017年获评为中科院青年创新促进会优秀会员。
      </p>
      </h5>
  </div>
</template>

<script>
import Vue from "vue";
import { ImagePlugin } from "bootstrap-vue";
Vue.use(ImagePlugin);
export default {
  name: "home",
};
</script>

<style>
.home {
  max-width: 1366px;
  margin:auto;
}
.msg {
  max-width: 1200px;
  margin: auto;
}

/* .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center; 
     margin-left: 10%;
    width:80%;
  } */

.el-main {
  text-align: justify;
}
</style>