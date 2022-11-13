function navbar(){
return `       <div>
<div id="m_logo">
    <img src="https://i.ibb.co/Jxqwdx4/Medi-Cart-2-removebg-preview.png"  >
</div>
    <div id="searchbar">
        <div id="search_option">
            <p>Deliver to <b>110002</b></p>
        </div>
        <input  type="text" placeholder="search for medicine & wellness products.."></div>
    <div>
        <div>
            <i class="fa-solid fa-circle-arrow-up"></i>
         <a style="text-decoration:none; color: aliceblue;" href="./Admin-upload.html">Upload</a>
        </div>
        <div>
            <i class="fa-solid fa-cart-shopping"></i>
            <a  style="text-decoration:none; color: aliceblue;" href="cart.html">Cart</a>
        </div>
        <div>
            <i class="fa-solid fa-id-card"></i>
            <a href="./SingUp.html" class="userName">Sign in/Sign up</a>
        </div>
    </div>
 </div>
 <div id=page_panel>
    <div class="right_menu">
        <div class="dept">
            <div><img src="https://www.netmeds.com/assets/gloryweb/images/icons/Wellnessnew.svg"></div>
            <p>Medicine</p>
        </div>
      <div class="dropdown_menu">
        <p>All Products</p>
        <p>Previously Ordered Products</p>
      </div>
    </div>
    <div>
        <div class="dept">
            <div><img src="https://www.netmeds.com/assets/gloryweb/images/icons/ordermedicinnew.svg"></div>
            <a href="./wellnesh.html">Wellness</a>
        </div>
    </div>
    <div>
        <div  class="dept">
            <div><img src="https://www.netmeds.com/assets/gloryweb/images/icons/Wellnessnew.svg"></div>
            <a href="./labTest.html" >Lab Tests </a>
        </div> 
    </div>
    <div class="right_menu">
        <div  class="dept">
            <div><img src="https://www.netmeds.com/assets/gloryweb/images/icons/Beautynew.svg"></div>
            <a href="./beauty.html">Beauty</a>
        </div>
        <div class="dropdown_menu">
            <p>Personal Care</p>
            <p>Make-Up</p>
            <p>Hair</p>
            <p>Skin Care</p>
            <p>Tools & Appliances</p>
            <p> Mom & Baby</p>
            <p>Fragrances</p>
            <p>Mens's Grooming</p>
          </div>
    </div>
    <div class="right_menu">
        <div  class="dept">
            <div><img src="https://www.netmeds.com/assets/gloryweb/images/icons/ordermedicinnew.svg"></div>
            <a href="./Healthcare.html">Health Corner</a>
        </div>
        <div class="dropdown_menu">
            <p>Health Library</p>
            <p>Patient Alike</p>
            <p>Cancer Awareness</p>
          </div>
    </div>
</div>`


}



function gohome(){
    document.querySelector("#m_logo").addEventListener("click",run)

    function run(){
    window.location.href="index.html"
    }

}

 




export {navbar ,gohome}