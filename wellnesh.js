
import {navbar , gohome} from "./navbar.js"

document.querySelector("#navbar").innerHTML=navbar()
gohome()


import {footer} from "./footer.js"

document.querySelector("#footer").innerHTML=footer()
 



let arr =JSON.parse(localStorage.getItem("cart")) || []




// let data=[
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/1045847/lizol_disinfectant_surface_floor_cleaner_liquid_lavender_2_litre_416520_0_0.jpg",
//         name:"Lizol Disnfectant surface & floor",
//         price:"Best price Rs.140"
       
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/1058752/the_body_shop_satsuma_shower_gel_250_ml_499917_0_1.jpg",
//         name:"The Body Shop Satsuma Shower Gel",
//         price:"Best price Rs.120"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/346480/tvaksh_face_care_face_wash_60_gm_0_1.jpg",
//         name:"tvaksh Face care Face Wash 60 gm",
//         price:"Best price Rs.130"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/952462/la_shield_pollution_protect_mineral_sunscreen_gel_spf_50_50_gm_0_0.jpg",
//         name:"Scalpe Plus Anti Dandruff Shampoo",
//         price:"Best price Rs.190"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/952462/la_shield_pollution_protect_mineral_sunscreen_gel_spf_50_50_gm_0_0.jpg",
//         name:"La shield Pollution Protect Milneral",
//         price:"Best price Rs.200"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/914707/dettol_instant_hand_sanitizer_original_500_ml_0_1.jpg",
//         name:"Dettol instant hand senitizer-original",
//         price:"Best price Rs.300"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/824822/mamaearth_milky_soft_baby_face_cream_with_muru_muru_butter_50_gm_0.jpg",
//         name:"mamaearth milky soft face cream",
//         price:"Best price Rs.600"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/889428/aroma_magic_face_wash_neem_tea_tree_100_ml_0.jpg",
//         name:"Aroma Madic Face Wash-neem & tea",
//         price:"Best price Rs.100"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/853397/boro_plus_doodh_kesar_body_lotion_100_ml_0_1.jpg",
//         name:"Boro plus Doodh keser Body Lotion",
//         price:"Best price Rs.930"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/382418/cetaphil_dam_lotion_30gm_0.jpg",
//         name:"Cetaphil Dam Lotion 30gm",
//         price:"Best price Rs.740"
//     }
// ]


async function limited(){

    let res= await fetch(`https://secure-scrubland-97083.herokuapp.com/Limited`)
    
    let data=   await res.json()
    
    console.log(data)
    appent(data)
    }
    
    limited()
    









let under=document.getElementById("slider")
const appent =(data)=>{

    data.forEach((el)=>{

        let div=document.createElement("div");
        div.setAttribute("class","thumbnail");

        let image=document.createElement("img");
        image.src=el.img_url;

        let name=document.createElement("h3");
        name.innerText=el.name;

        let price=document.createElement("h4");
        price.innerText=el.price;

        let btn=document.createElement("button");
        btn.innerText="ADD TO CART";
        btn.setAttribute("class","btn")
btn.addEventListener("click",function(){
    addtocart(el)
})

        div.append(image,name,price,btn);
        under.append(div);
    })
}

// appent(data)


let btnleft=document.getElementById("slide-left");
btnleft.addEventListener("click",()=>{
    slider.scrollLeft-=550;
})

let btnright=document.getElementById("slide-right");
btnright.addEventListener("click",()=>{
    slider.scrollLeft+=550;
    // btnright.style.transition= .54;
})
/////////////////////////////////////////////////
// let data_1=[
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/1045847/lizol_disinfectant_surface_floor_cleaner_liquid_lavender_2_litre_416520_0_0.jpg",
//         name:"Lizol Disnfectant surface & floor",
//         price:"Best price Rs.140"
       
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/1058752/the_body_shop_satsuma_shower_gel_250_ml_499917_0_1.jpg",
//         name:"The Body Shop Satsuma Shower Gel",
//         price:"Best price Rs.120"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/346480/tvaksh_face_care_face_wash_60_gm_0_1.jpg",
//         name:"tvaksh Face care Face Wash 60 gm",
//         price:"Best price Rs.130"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/952462/la_shield_pollution_protect_mineral_sunscreen_gel_spf_50_50_gm_0_0.jpg",
//         name:"Scalpe Plus Anti Dandruff Shampoo",
//         price:"Best price Rs.190"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/952462/la_shield_pollution_protect_mineral_sunscreen_gel_spf_50_50_gm_0_0.jpg",
//         name:"La shield Pollution Protect Milneral",
//         price:"Best price Rs.200"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/914707/dettol_instant_hand_sanitizer_original_500_ml_0_1.jpg",
//         name:"Dettol instant hand senitizer-original",
//         price:"Best price Rs.300"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/824822/mamaearth_milky_soft_baby_face_cream_with_muru_muru_butter_50_gm_0.jpg",
//         name:"mamaearth milky soft face cream",
//         price:"Best price Rs.600"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/889428/aroma_magic_face_wash_neem_tea_tree_100_ml_0.jpg",
//         name:"Aroma Madic Face Wash-neem & tea",
//         price:"Best price Rs.100"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/853397/boro_plus_doodh_kesar_body_lotion_100_ml_0_1.jpg",
//         name:"Boro plus Doodh keser Body Lotion",
//         price:"Best price Rs.930"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/382418/cetaphil_dam_lotion_30gm_0.jpg",
//         name:"Cetaphil Dam Lotion 30gm",
//         price:"Best price Rs.740"
//     }
// ]


async function ayurveda(){

    let res= await fetch(`https://secure-scrubland-97083.herokuapp.com/Ayurveda`)
    
    let data=   await res.json()
    
    console.log(data)
    appent1(data)
    }
    
    ayurveda()




let under1=document.getElementById("slider1")
const appent1 =(data_1)=>{

    data_1.forEach((el)=>{

        let div=document.createElement("div");
        div.setAttribute("class","thumbnail1");

        let image=document.createElement("img");
        image.src=el.img_url;

        let name=document.createElement("h3");
        name.innerText=el.name;

        let price=document.createElement("h4");
        price.innerText=el.price;

        let btn=document.createElement("button");
        btn.innerText="ADD TO CART";
        btn.setAttribute("class","btn")
        btn.addEventListener("click",function(){
            addtocart(el)
        })


        div.append(image,name,price,btn);
        under1.append(div);
    })
}

// appent1(data_1)


let btnleft1=document.getElementById("slide-left1");
btnleft1.addEventListener("click",()=>{
    slider1.scrollLeft-=550;
})

let btnright1=document.getElementById("slide-right1");
btnright1.addEventListener("click",()=>{
    slider1.scrollLeft+=550;
})

// ------------------------------------------------------------

// let data_2=[
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/1045847/lizol_disinfectant_surface_floor_cleaner_liquid_lavender_2_litre_416520_0_0.jpg",
//         name:"Lizol Disnfectant surface & floor",
//         price:"Best price Rs.140"
       
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/1058752/the_body_shop_satsuma_shower_gel_250_ml_499917_0_1.jpg",
//         name:"The Body Shop Satsuma Shower Gel",
//         price:"Best price Rs.120"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/346480/tvaksh_face_care_face_wash_60_gm_0_1.jpg",
//         name:"tvaksh Face care Face Wash 60 gm",
//         price:"Best price Rs.130"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/952462/la_shield_pollution_protect_mineral_sunscreen_gel_spf_50_50_gm_0_0.jpg",
//         name:"Scalpe Plus Anti Dandruff Shampoo",
//         price:"Best price Rs.190"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/952462/la_shield_pollution_protect_mineral_sunscreen_gel_spf_50_50_gm_0_0.jpg",
//         name:"La shield Pollution Protect Milneral",
//         price:"Best price Rs.200"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/914707/dettol_instant_hand_sanitizer_original_500_ml_0_1.jpg",
//         name:"Dettol instant hand senitizer-original",
//         price:"Best price Rs.300"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/824822/mamaearth_milky_soft_baby_face_cream_with_muru_muru_butter_50_gm_0.jpg",
//         name:"mamaearth milky soft face cream",
//         price:"Best price Rs.600"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/889428/aroma_magic_face_wash_neem_tea_tree_100_ml_0.jpg",
//         name:"Aroma Madic Face Wash-neem & tea",
//         price:"Best price Rs.100"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/853397/boro_plus_doodh_kesar_body_lotion_100_ml_0_1.jpg",
//         name:"Boro plus Doodh keser Body Lotion",
//         price:"Best price Rs.930"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/382418/cetaphil_dam_lotion_30gm_0.jpg",
//         name:"Cetaphil Dam Lotion 30gm",
//         price:"Best price Rs.740"
//     }
// ]

async function Wellness(){

    let res= await fetch(`https://secure-scrubland-97083.herokuapp.com/Wellness`)
    
    let data=   await res.json()
    
    console.log(data)
    appent2(data)
    }
    
    Wellness()








let under2=document.getElementById("slider2")
const appent2 =(data_2)=>{

    data_2.forEach((el)=>{

        let div=document.createElement("div");
        div.setAttribute("class","thumbnail2");

        let image=document.createElement("img");
        image.src=el.img_url;

        let name=document.createElement("h3");
        name.innerText=el.name;

        let price=document.createElement("h4");
        price.innerText=el.price;

        let btn=document.createElement("button");
        btn.innerText="ADD TO CART";
        btn.setAttribute("class","btn")
        btn.addEventListener("click",function(){
            addtocart(el)
        })


        div.append(image,name,price,btn);
        under2.append(div);
    })
}

// appent2(data_2)


let btnleft2=document.getElementById("slide-left2");
btnleft2.addEventListener("click",()=>{
    slider2.scrollLeft-=550;
});

let btnright2=document.getElementById("slide-right2");
btnright2.addEventListener("click",()=>{
    slider2.scrollLeft+=550;
});


// --------------------------------------------------------------------------

// let data_3=[
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/1045847/lizol_disinfectant_surface_floor_cleaner_liquid_lavender_2_litre_416520_0_0.jpg",
//         name:"Lizol Disnfectant surface & floor",
//         price:"Best price Rs.140"
       
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/1058752/the_body_shop_satsuma_shower_gel_250_ml_499917_0_1.jpg",
//         name:"The Body Shop Satsuma Shower Gel",
//         price:"Best price Rs.120"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/346480/tvaksh_face_care_face_wash_60_gm_0_1.jpg",
//         name:"tvaksh Face care Face Wash 60 gm",
//         price:"Best price Rs.130"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/952462/la_shield_pollution_protect_mineral_sunscreen_gel_spf_50_50_gm_0_0.jpg",
//         name:"Scalpe Plus Anti Dandruff Shampoo",
//         price:"Best price Rs.190"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/952462/la_shield_pollution_protect_mineral_sunscreen_gel_spf_50_50_gm_0_0.jpg",
//         name:"La shield Pollution Protect Milneral",
//         price:"Best price Rs.200"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/914707/dettol_instant_hand_sanitizer_original_500_ml_0_1.jpg",
//         name:"Dettol instant hand senitizer-original",
//         price:"Best price Rs.300"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/824822/mamaearth_milky_soft_baby_face_cream_with_muru_muru_butter_50_gm_0.jpg",
//         name:"mamaearth milky soft face cream",
//         price:"Best price Rs.600"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/889428/aroma_magic_face_wash_neem_tea_tree_100_ml_0.jpg",
//         name:"Aroma Madic Face Wash-neem & tea",
//         price:"Best price Rs.100"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/853397/boro_plus_doodh_kesar_body_lotion_100_ml_0_1.jpg",
//         name:"Boro plus Doodh keser Body Lotion",
//         price:"Best price Rs.930"
//     },
//     {
//         image:"https://www.netmeds.com/images/product-v1/150x150/382418/cetaphil_dam_lotion_30gm_0.jpg",
//         name:"Cetaphil Dam Lotion 30gm",
//         price:"Best price Rs.740"
//     }
// ]



async function d_3(){

    let res= await fetch(`https://secure-scrubland-97083.herokuapp.com/Limited`)
    
    let data=   await res.json()
    
    console.log(data)
    appent3(data)
    }
    
    d_3()
    






let under3=document.getElementById("slider3")
const appent3 =(data_3)=>{

    data_3.forEach((el)=>{

        let div=document.createElement("div");
        div.setAttribute("class","thumbnail3");

        let image=document.createElement("img");
        image.src=el.img_url;

        let name=document.createElement("h3");
        name.innerText=el.name;

        let price=document.createElement("h4");
        price.innerText=el.price;

        let btn=document.createElement("button");
        btn.innerText="ADD TO CART";
        btn.setAttribute("class","btn")
        btn.addEventListener("click",function(){
            addtocart(el)
        })


        div.append(image,name,price,btn);
        under3.append(div);
    })
}

// appent3(data_3)


let btnleft3=document.getElementById("slide-left3");
btnleft3.addEventListener("click",()=>{
    slider3.scrollLeft-=550;
});

let btnright3=document.getElementById("slide-right3");
btnright3.addEventListener("click",()=>{
    slider3.scrollLeft+=550;
});








function addtocart(el){
    arr.push(el)
    localStorage.setItem("cart",JSON.stringify(arr))
}