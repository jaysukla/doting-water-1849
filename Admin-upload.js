

import {navbar ,gohome } from "./navbar.js"

document.querySelector("#navbar").innerHTML=navbar()

gohome()


//adding event listner to button 

let create_btn=document.getElementById("add_product_btn");
create_btn.onclick= ()=>{
   //onclicking the function will redirect to createProduct on line 10
    createProduct(); 
};

//In this function we are posting the product and giving them to server.
let createProduct=async()=>{
    let id=document.getElementById('id').value;
    let name=document.getElementById('name').value;
    let img_url=document.getElementById('image').value;
    let description=document.getElementById('description').value;
    let category=document.getElementById('category').value;
    let price=document.getElementById('price').value;

    //pack all the data to be in object
    let send_product_data={
        id,
        name,
        img_url,
        description,
        category,
        price,

    };
    
    //to send the img to server here we need to write the server and here comes the use of npm package server
     let res = await fetch(`https://secure-scrubland-97083.herokuapp.com/${category}`,{
        method:'POST',
        body:JSON.stringify(send_product_data),
        headers:{
            'Content-Type':'application/json',
        }
     });
     let data =await res.json();
     console.log(data);
};



// delete data from api

document.querySelector("#remove").addEventListener("click",remove_data)

async function remove_data(){
let id= document.querySelector("#Delete_id").value
let category= document.querySelector("#type").value

let res= await fetch(`https://secure-scrubland-97083.herokuapp.com/${category}/${id}`,{

method:'DELETE',

headers:{
'Content-Type':'application/json'

}

})

console.log(res)


}

// Update price 

document.querySelector("#update_btn").addEventListener("click",update_price)

async function update_price(){
let id= document.querySelector("#update_id").value
let category = document.querySelector("#update_in").value
let new_price= document.querySelector("#new_price").value

let send_it={

    price:new_price,
}

let res= await fetch(`https://secure-scrubland-97083.herokuapp.com/${category}/${id}`,{
method:"PATCH",
body:JSON.stringify(send_it),
headers:{
   "Content-Type":"application/json" 
}


})

console.log(res)


}


let Orders=JSON.parse(localStorage.getItem("OR"))

//<div id="ord">

{/* <div id="prod">
<h2>Products</h2>

    </div>

<div id="price"> 
<h2>Price</h2>


</div>

<div id="adds">
<h2>Address</h2>

</div>



</div> */}
show(Orders)

function show(Orders){

    Orders.forEach((el,i)=> {
    
        let ord=document.createElement("div")
        ord.setAttribute("id","ord")
        
        let prod =document.createElement("div")
        prod.setAttribute("id","prod")
        let Products= document.createElement("h2")
        Products.innerText="Products"
        prod.append(Products)
        el.names.forEach(el => {
        
            let h4=document.createElement("h4")
        h4.innerText=el
        h4.style.color="grey"
        prod.append(h4)
        
        })
        
        let price=document.createElement("div")
        price.setAttribute("id","price")
        let ph=document.createElement("h2")
        ph.innerText="Price"
        price.append(ph)
        el.prices.forEach(el=>{
        let h4= document.createElement("h4")
        h4.innerText=el
        h4.style.color="grey"
        price.append(h4)
        
        })
        
        let adds=document.createElement("div")
        adds.setAttribute("id","adds")
        let ah=document.createElement("h2")
        ah.innerText="Address"
        adds.append(ah)
        let ad=document.createElement("h4")
        ad.innerText=el.adds
        ad.style.color="grey"
        adds.append(ad)
        
        let total= document.createElement("div")
        total.setAttribute("id","total")
        
        let ht= document.createElement("h2")
        ht.innerText="Total Price "
        total.append(ht)
        let to=document.createElement("h4")
        to.innerText=el.total
        to.style.color="red"
        total.append(to)
        
        
        
        let btn=document.createElement("button")
        btn.innerText="Remove"
        btn.addEventListener("click",function(){
            vanish(el,i)
        })
        
        
        ord.append(prod,price,adds,total ,btn)
        document.querySelector("#od_detail").append(ord,)
        
        
        });
        
        




}



function vanish(el,i){

Orders.splice(i,1)

localStorage.setItem("OR",JSON.stringify(Orders))
location.reload()

}





