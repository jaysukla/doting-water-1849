import { navbar } from "./navbar.js";
document.querySelector("#navbar").innerHTML=navbar()


let arr= JSON.parse(localStorage.getItem("cart"))

display(arr)
function display(res){

    res.forEach((el,i) => {
    

        let D= document.createElement("div")
    
    
        let image =document.createElement("img")
    image.src=el.img_url
        let title= document.createElement("h4")
    title.innerText=el.name
        let price= document.createElement("h4")
    price.innerText="$"+el.price
    
    let btn= document.createElement("button")
    btn.innerText="Remove"
    
    btn.addEventListener("click",function(){
    removefromcart(el,i)
    
    })
    
    D.append(image,title,price,btn)
    
    document.querySelector("#append").append(D)
    
    });
    

}


function removefromcart( el,i){

    arr.splice(i,1)

    localStorage.setItem("cart",JSON.stringify(arr))
    location.reload()
   

}
