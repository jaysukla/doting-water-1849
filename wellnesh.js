

let data=[
    {
        image:"https://www.netmeds.com/images/product-v1/150x150/1045847/lizol_disinfectant_surface_floor_cleaner_liquid_lavender_2_litre_416520_0_0.jpg",
        name:"Lizol Disnfectant surface & floor"
    },
    {
        image:"https://www.netmeds.com/images/product-v1/150x150/1058752/the_body_shop_satsuma_shower_gel_250_ml_499917_0_1.jpg",
        name:"The Body Shop Satsuma Shower Gel"
    },
    {
        image:"https://www.netmeds.com/images/product-v1/150x150/346480/tvaksh_face_care_face_wash_60_gm_0_1.jpg",
        name:"tvaksh Face care Face Wash 60 gm"
    },
    {
        image:"https://www.netmeds.com/images/product-v1/150x150/952462/la_shield_pollution_protect_mineral_sunscreen_gel_spf_50_50_gm_0_0.jpg",
        name:"Scalpe Plus Anti Dandruff Shampoo"
    },
    {
        image:"https://www.netmeds.com/images/product-v1/150x150/952462/la_shield_pollution_protect_mineral_sunscreen_gel_spf_50_50_gm_0_0.jpg",
        name:"La shield Pollution Protect Milneral"
    },
    {
        image:"https://www.netmeds.com/images/product-v1/150x150/914707/dettol_instant_hand_sanitizer_original_500_ml_0_1.jpg",
        name:"Dettol instant hand senitizer-original"
    },
    {
        image:"https://www.netmeds.com/images/product-v1/150x150/824822/mamaearth_milky_soft_baby_face_cream_with_muru_muru_butter_50_gm_0.jpg",
        name:"mamaearth milky soft face cream"
    },
    {
        image:"https://www.netmeds.com/images/product-v1/150x150/889428/aroma_magic_face_wash_neem_tea_tree_100_ml_0.jpg",
        name:"Aroma Madic Face Wash-neem & tea"
    },
    {
        image:"https://www.netmeds.com/images/product-v1/150x150/853397/boro_plus_doodh_kesar_body_lotion_100_ml_0_1.jpg",
        name:"Boro plus Doodh keser Body Lotion",
    },
    {
        image:"https://www.netmeds.com/images/product-v1/150x150/382418/cetaphil_dam_lotion_30gm_0.jpg",
        name:"Cetaphil Dam Lotion 30gm"
    }
]


let under=document.getElementById("slider")
const appent =(data)=>{

    data.forEach((el)=>{

        let div=document.createElement("div");
        div.setAttribute("class","thumbnail");

        let image=document.createElement("img");
        image.src=el.image;

        let name=document.createElement("h3");
        name.innerText=el.name;

        div.append(image,name);
        under.append(div);
    })
}

appent(data)

let btnleft=document.getElementById("slide-left");
btnleft.addEventListener("click",()=>{
    slider.scrollLeft-=550;
})

let btnright=document.getElementById("slide-right");
btnright.addEventListener("click",()=>{
    slider.scrollLeft+=550;
    // btnright.style.transition= .54;
})