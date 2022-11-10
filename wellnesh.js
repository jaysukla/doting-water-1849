import {navbar} from "./navbar.js"
document.getElementById("navbar").innerHTML=navbar();

let Wellness=document.getElementById("Wellness");
Wellness.addEventListener("click",function(){
    window.location.href="./wellnesh.html"
})

let carousel_div=document.getElementById("carousel");
const carousel=()=>{

   // https://www.netmeds.com/images/cms/aw_rbslider/slides/1667806703_Breath-Easy_wellness-main-banner.jpg
   //https://www.netmeds.com/images/cms/aw_rbslider/slides/1667584963_Personal_Care_Week_Wellness_web.jpg
   //https://www.netmeds.com/images/cms/aw_rbslider/slides/1667582526_Cgg_web.jpg
   //https://www.netmeds.com/images/cms/aw_rbslider/slides/1667582739_Inatur_web.jpg
   //https://www.netmeds.com/images/cms/aw_rbslider/slides/1667582841_Skin-elements_web.jpg
   //https://www.netmeds.com/images/cms/aw_rbslider/slides/1667582893_Emami_web.jpg
   //https://www.netmeds.com/images/cms/aw_rbslider/slides/1667582972_Aroma-magic_web.jpg
   //https://www.netmeds.com/images/cms/aw_rbslider/slides/1667583050_Nivea_web.jpg
   //https://www.netmeds.com/images/cms/aw_rbslider/slides/1667583130_Reverzo_web.jpg
   //https://www.netmeds.com/images/cms/aw_rbslider/slides/1667583478_mamaearth-wellness-main-banner.jpg
   //https://www.netmeds.com/images/cms/aw_rbslider/slides/1667583684_La-Shield-wellness-main-banner.jpg
   

   let images=[`https://www.netmeds.com/images/cms/aw_rbslider/slides/1667806703_Breath-Easy_wellness-main-banner.jpg`,`https://www.netmeds.com/images/cms/aw_rbslider/slides/1667584963_Personal_Care_Week_Wellness_web.jpg`,`https://www.netmeds.com/images/cms/aw_rbslider/slides/1667582526_Cgg_web.jpg`,`https://www.netmeds.com/images/cms/aw_rbslider/slides/1667582739_Inatur_web.jpg`]
   let imgElement=document.createElement("img");
   imgElement.src=images[0];
   carousel_div.append(imgElement);

   let i=1;
     setInterval(function(){

        if(i===images.length){
            i=0;
        }
        imgElement.src=images[i]
        carousel_div.append(imgElement)
        i++;
    },2000);
}

carousel();

