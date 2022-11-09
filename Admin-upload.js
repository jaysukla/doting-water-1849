
import {navbar} from "./navbar.js"

document.querySelector("#navbar").innerHTML=navbar()




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




