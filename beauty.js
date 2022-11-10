import {navbar} from "./navbar.js"
document.getElementById("navbar").innerHTML=navbar();



let carousel_div=document.getElementById("carousel");
const carousel=()=>{

    //https://www.netmeds.com/images/cms/aw_rbslider/slides/1667909979_Plum-banner-1680-X-320.jpg
    //https://www.netmeds.com/images/cms/aw_rbslider/slides/1667910061_Arata-1680x320.jpg
    //https://www.netmeds.com/images/cms/aw_rbslider/slides/1666376361_Beauty_main-banner.jpg
    //https://www.netmeds.com/images/cms/aw_rbslider/slides/1667910442_Jovee-1680x320.jpg
    //https://www.netmeds.com/images/cms/aw_rbslider/slides/1667910175_Colorbar-1680x320.jpg
    //https://www.netmeds.com/images/cms/aw_rbslider/slides/1667910272_Banner---Reliance-Beauty-1680x320.jpg
    //https://www.netmeds.com/images/cms/aw_rbslider/slides/1667973136_Mancode_1680-X-320.jpg
  
   let images=[`https://www.netmeds.com/images/cms/aw_rbslider/slides/1667909979_Plum-banner-1680-X-320.jpg`,
    `https://www.netmeds.com/images/cms/aw_rbslider/slides/1667910061_Arata-1680x320.jpg`,
    `https://www.netmeds.com/images/cms/aw_rbslider/slides/1666376361_Beauty_main-banner.jpg`,
    `https://www.netmeds.com/images/cms/aw_rbslider/slides/1667910442_Jovee-1680x320.jpg`,
    `https://www.netmeds.com/images/cms/aw_rbslider/slides/1667910175_Colorbar-1680x320.jpg`,
    `https://www.netmeds.com/images/cms/aw_rbslider/slides/1667910272_Banner---Reliance-Beauty-1680x320.jpg`,
    `https://www.netmeds.com/images/cms/aw_rbslider/slides/1667973136_Mancode_1680-X-320.jpg`]
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