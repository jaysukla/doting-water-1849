//import navbar
import {navbar} from './components/navbar.js'

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();
 

    // Appending data of products via Fetch call from homepage.js(line33)

    async function limited(){

        let res= await fetch(`https://secure-scrubland-97083.herokuapp.com/Ayurveda`)
        
        let data=await res.json()
        
        console.log(data)
        append_limited(data)
        }
        
        limited();
        
        function append_limited(data){
          let query1=document.querySelector("#titlepf1");
          query1.innerText=`${data[0].name} - ${data[0].description}`;
          let query=document.querySelector("#prodfetch1");
       
          data.forEach(el => {
          
        let D= document.createElement("div")
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
      
        D.append(image,title,price,off,btn)
        query.append(D)
        }); 
        }
        let  arr=JSON.parse(localStorage.getItem("cart")) || []
  //Button function 
        function tocart(el){
         arr.push(el)
         console.log(arr)
        localStorage.setItem("cart",JSON.stringify(arr))
        }
        