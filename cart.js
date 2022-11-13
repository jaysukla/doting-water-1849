
import {navbar ,gohome } from "./navbar.js"

document.querySelector("#navbar").innerHTML=navbar()

gohome()

let em=[];

let arr= JSON.parse(localStorage.getItem("cart"))

let sum=0;
let names=[]
let prices=[]

let Orders_data=JSON.parse(localStorage.getItem("OR")) || []


display(arr)
function display(res){

    res.forEach((el,i) => {
    

        let D= document.createElement("div")
    
    
        let image =document.createElement("img")
    image.src=el.img_url
        let title= document.createElement("h4")
    title.innerText=el.name
    names.push(el.name)
        let price= document.createElement("h4")
    price.innerText="$"+el.price
    prices.push(el.price)
    sum=sum+(+(el.price))
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




class order{

    constructor(n,p,s,a){
this.names=n;
this.prices=p;
this.total=s;
this.adds=a

    }


}





document.querySelector("#proceed_to_pay").addEventListener("click",proceed)

function proceed(){
  
 let add =document.querySelector("#address").value
// console.log(add)

// console.log(names)
// console.log(prices)
// console.log(sum)    




let o1= new order(names,prices,sum,add)

Orders_data.push(o1)

localStorage.setItem("OR",JSON.stringify(Orders_data))

localStorage.setItem("cart",JSON.stringify(em))

location.reload()

}
