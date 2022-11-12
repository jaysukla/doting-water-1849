
 


                                            //            Slider 1 Start


   
        let image=document.createElement("img");
        let slideShow=document.getElementById("slider");
          slideShow.append(image);
        
   
    function slider(){
        
        let arr=["https://www.netmeds.com/images/cms/aw_rbslider/slides/1667832066_Web_Home_Bannercabbb.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1666362146_Home_Bannernms20.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1666355540_Home_Bannercold.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1666362102_Home_Bannernmsnew.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1667806703_Breath-Easy_wellness-main-banner.jpg"]
        image.src=arr[0];
        let i=1;


                setInterval(function slide(){
                   if(i==arr.length){
                    i=0;
                   }
                   image.src=arr[i];
                   i++;

                },3000)
       
    }

slider();


                                                      //               Slider 1 End


                                                     //                 Trending Today Start     

let image1=document.createElement("img");
let image2=document.createElement("img");
let image3=document.createElement("img");
let slideshow2=document.getElementById("slider2");
slideshow2.append(image1,image2,image3);

function slider2(){

  let arr=["https://www.netmeds.com/images/cms/aw_rbslider/slides/1667558258_Inlife_mini_banners_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1667558538_Dr.Morepen-40-APP-W.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1667558932_United_Medicare_mini_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1662552917_manforce_mini_banner_web_m25.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1664561255_Coolex_Mini_banner_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1666259889_Truuth_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1665742857_Dabur_Home.jpg"];
  image1.src=arr[0];
  image2.src=arr[1];
  image3.src=arr[2];
  let x=1;
  let y=2;
  let z=3;
  setInterval(function slide(){
      
   if(z==arr.length){
    z=0;
   }
   if(y==arr.length){
    y=0;
   }
    if(x==arr.length){
      x=0;
    }
   

    image3.src=arr[z];
    image2.src=arr[y];
    image1.src=arr[x]; 
    
    z++;
    y++;
    x++;


  },3000)

}
  slider2();
 
                                                         //   Trending Today End


                                                         //   New on Netmeds Start 

//https://calm-island-82483.herokuapp.com/posts


      

        

      
        
                                                         
         let images1=document.createElement("img");
         let images2=document.createElement("img");
         let images3=document.createElement("img");
         let slideshow3=document.getElementById("New_Demands");
         slideshow3.append(images1,images2,images3);
         
         function slider3(){
         
          let arr=["https://www.netmeds.com/images/cms/aw_rbslider/slides/1666859388_Mini-banner_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1667589503_Kesavardhini_mini_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1666376125_Happy_mini_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1665772763_Sunova__mini_banner_for_web.jpg","https://www.netmeds.com/images/cms/aw_rbslider/slides/1666957013_Naturrel_mini_web.jpg"];
           images1.src=arr[0];
           images2.src=arr[1];
           images3.src=arr[2];
           let x=1;
           let y=2;
           let z=3;
           setInterval(function slide(){
               
            if(z==arr.length){
             z=0;
            }
            if(y==arr.length){
             y=0;
            }
             if(x==arr.length){
               x=0;
             }
            
         
             images3.src=arr[z];
             images2.src=arr[y];
             images1.src=arr[x]; 
             
             z++;
             y++;
             x++;
         
         
           },3000)
         
         }
           slider3();


                                                                        //            New on Netmeds End

                                                                        //            Top Brands Starts


           
        let Arr=[
              {image:"https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/himalaya.jpg?v=14",name:"Himalaya",offer:"Up to 35% off"},
              {image:"https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/accu-chek.jpg?v=14",name:"Accu-Chek",offer:"Up to 25% off"},
              {image:"https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dabur.jpg?v=14",name:"Dabur",offer:"Up to 20% off"},
              {image:"https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/cetaphil.jpg?v=14",name:"Cetaphil",offer:"Up to 10% off"},
              {image:"https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/revital.jpg?v=14",name:"Revital",offer:"Up to 15% off"},
              {image:"https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/volini.jpg?v=14",name:"Volini",offer:"Up to 15% off"},
              {image:"https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/digene.jpg?v=14",name:"Digene",offer:"Up to 80% off"},
              {image:"https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dr-morepen.jpg?v=14",name:"Dr-Morepen",offer:"Up to 45% off"},
              {image:"https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/sebamed.jpg?v=14",name:"Sebamed",offer:"Up to 15% off"}
        ]

           
        function topbrands(x,y){
          for(let i=x; i<=y; i++){
            let div=document.createElement("div");
            
            let image=document.createElement("img");
            image.src=Arr[i].image;
            let Name=document.createElement("h4");
                Name.innerText=Arr[i].name;
            let Offer=document.createElement("p");
                Offer.innerText=Arr[i].offer;

                let brands=document.getElementById("top_brands");
                brands.append(div);
                div.append(image,Name,Offer);
          } 
        }
           
      let right_button=document.getElementById("right-click");

              let x=0; 
              let y=4;
              topbrands(x,y);
      right_button.onclick=()=>{
          let Brand=document.getElementById("top_brands");
          if(x<4 && y<8){
            Brand.innerHTML="";
            x=x+1;
            y=y+1;
            topbrands(x,y);

          }
         
          
      }
      
      let left_button=document.getElementById("left-click");

      left_button.onclick=()=>{
      let Brand=document.getElementById("top_brands");
      if(0<x && 4<y){
        Brand.innerHTML="";
        x=x-1;
        y=y-1;
        topbrands(x,y);
      }
      
      }


                                                                //   Top Brands End



   
    
   


// append Limited start 

async function limited(){

let res= await fetch(`https://secure-scrubland-97083.herokuapp.com/Limited`)

let data=   await res.json()

console.log(data)
append_limited(data)
}

limited()

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
  
    })


i_div.append(image)
D.append(i_div,title,price,off,btn)

document.querySelector("#box8").append(D)

});




}

// append limited end 


// append ayurveda  2nd container


async function ayurveda(){

  let res= await fetch(`https://secure-scrubland-97083.herokuapp.com/Ayurveda`)
  
  let data=   await res.json()
  
  console.log(data)
  append_ayurveda(data)
  }
  
  ayurveda()
  
  function append_ayurveda(data){
  
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

  })


  i_div.append(image)
  D.append(i_div,title,price,off,btn)
  
  document.querySelector("#box10").append(D)
  
  });
  
  
  
  
  }
  
  


 let  arr=JSON.parse(localStorage.getItem("cart")) || []
  
function tocart(el){
 arr.push(el)
 console.log(arr)

localStorage.setItem("cart",JSON.stringify(arr))



}



