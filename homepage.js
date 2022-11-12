

   
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


// display username on homepage---- changes by Shubhainder on 12-11-2022
let data = localStorage.getItem("User") ;
let userName = document.querySelector(".userName");
if(data!=''){
userName.innerText= data;
}
//----------------------------------