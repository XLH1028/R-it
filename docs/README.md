---
navbar: false
home: true
heroImage: null
heroText: null
tagline: Radar-IT 服务

---


<a target="_blank" href='https://www.radar-ev.com/'><img src="assets/img/logo2.png"  style="position: absolute;
                                              width: 249px;
                                              top: 20px;
                                              left: 45px;"></a>

 <div class="separate-panel" style="position: absolute;
                                        width: 100%;
                                        bottom: 260px;">
       <div class="about">
         <a href='component/giud'>开始使用</a>
         <a target="_blank" class="btn-github"                               href="https://i.geely.com/">OA</a>
            <a href='https://aq.geely.com/#/'>修改密码</a>
            <a href='https://itsm.geely.com/'>工单</a>
       </div>
 </div>
<style>
.home{
    margin: 0px auto;
    display: block;
    width: 100%;
    height: 100%;
    padding:0;
    max-width:100%;
}
.home .hero {
    text-align: center;
    margin-top: 30vh;
}
.home .hero .description {
    margin-top: 56px;
    font-family:"正方兰亭";/*设置字体*/
		   font-size:64px; /*设置字体大小*/
		   font-weight:black; /*设置字体粗细*/
		     /*文字描边*/


}

  .separate-panel{
    position: absolute;
    width: 100%;
    bottom: 260px;
  }
  .separate-panel .about{
    position: absolute;
    width: 100%;
    height: 200px;
    top: 20px;
    z-index: 9;
    background: #fff;
    text-align: center;

  }
  .separate-panel .about a {
    color: #fff;
    background-image: linear-gradient(90deg, #00AEFF 0%, #3369E7 100%);
    box-shadow: 0 2px 6px 0 rgba(51,105,231,0.4);
    display: inline-block;
    width: 190px;
    height: 56px;
    margin: 0 35px;
    font-size: 18px;
    line-height: 56px;
    border-radius: 28px;
    transition: all .3s;
    cursor: pointer;
  }

body{

background:  #6f7766;

}

  .separate-panel .about .btn-github{
    color: #316DE9;
    border: 1px solid #2F6EE9;
    background: #fff;
    box-shadow: none;
  }
  .separate-panel:after{
    content: '';
    display: block;
    position: absolute;
    top: -80px;
    width: 100%;
    height: 250px;
    background: #fff;
    box-shadow: 0 -4px 30px 0 #DFE1E6;
    transform: skewY(-4deg);
  }

</style>