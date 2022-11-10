//import navbar
import {navbar} from './components/navbar.js'

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();
 
//Adding the slider for the hero section of the page

let slider=document.getElementById("hero2");
    function slidershow(){
        //added default images without fetch call.
        let images=["https://www.netmeds.com/images/cms/aw_rbslider/slides/1667806703_Breath-Easy_wellness-main-banner.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1667584963_Personal_Care_Week_Wellness_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1667582526_Cgg_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1667582739_Inatur_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1667582841_Skin-elements_web.jpg", "https://www.netmeds.com/images/cms/aw_rbslider/slides/1667582893_Emami_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1667582972_Aroma-magic_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1667583050_Nivea_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1667583478_mamaearth-wellness-main-banner.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1667583130_Reverzo_web.jpg"];

        let imgEle=document.createElement("img");
        imgEle.src=images[0];

        slider.append(imgEle);
        let i=1;
        setInterval(function(){         
          console.log(i);
            imgEle.src=images[i];
            slider.append(imgEle);
            i++;
            if(i == images.length){
                i=0;
          }
        },4000);
    }
    slidershow();

    // Appending data of products via Fetch call from homepage.js(line33)

    async function limited(){

        let res= await fetch(`https://secure-scrubland-97083.herokuapp.com/Ayurveda`)
        
        let data=await res.json()
        
        console.log(data)
        append_limited(data)
        }
        
        limited();
        
        function append_limited(data){

        data.forEach(el => {
        let D= document.createElement("div")
        let i_div= document.createElement("div")
        let image = document.createElement("img")
        image.src=el.img_url
        let title= document.createElement("h4")
        title.innerText=el.name
        let price= document.createElement("h4")
        price.innerText=el.price
        let off= document.createElement("h4")
        off.innerText=el.description
        let btn= document.createElement("button")
        btn.innerText="Add to cart"
        btn.setAttribute("id","limited_btn")
        btn.addEventListener("click",function(){
          tocart(el)
            });
        i_div.append(image)
        D.append(i_div,title,price,off,btn)
        document.querySelector("#prodfetch1").append(D)
        }); 
        }
        let  arr=JSON.parse(localStorage.getItem("cart")) || []
  //Button function 
        function tocart(el){
         arr.push(el)
         console.log(arr)
        localStorage.setItem("cart",JSON.stringify(arr))
        }
        