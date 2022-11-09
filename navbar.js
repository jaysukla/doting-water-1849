
const navbar=()=>{
    return ` <div class="part1">
    <div class="logo"><img src="logofinal.png" alt="logo"></div>
    <div class="input"><input type="text" id="search" placeholder="Search for medecine and wellness products..."></div>
    <div class="admin"><i class="fa fa-user-plus" style="font-size:27px"></i><a href="Admin-upload.html">Admin-upload</a></div>
    <div class="cart"><i class="fa fa-shopping-cart" style="font-size:27px"></i><a href="cart.html">Cart</a></div>
    <div class="signup"><i class="fa fa-user-circle-o" style="font-size:27px"></i><a href="/">Sign in/Sign up</a></div>
</div>
<div class="part2">
    <div class="one"> <a href="/"><img src="https://www.netmeds.com/assets/version1667495847/gloryweb/images/icons/medicine.svg" alt=""></a>
        <div class="dropdown">
            <button class="dropbtn">Medicine</button>
            <div class="dropdown-content">
              <a href="#">All Medicine</a>
              <a href="#">Previously Ordered Products</a>
              
            </div>
          </div>
    </div>
 
    <div class="one"> <a href="/"><img src="https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg" alt=""> </a><div class="dropdown">
        <button class="dropbtn">Wellness</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div></div>
    
    <div class="one"> <a href="/"><img src="https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg" alt=""></a>
        <div class="dropdown">
            <button class="dropbtn">Lab Test</button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div></div>
   
    <div class="one"> <a href="/"><img src="https://www.netmeds.com/assets/gloryweb/images/icons/beauty.svg" alt=""></a><div class="dropdown">
        <button class="dropbtn">Beauty</button>
        <div class="dropdown-content">
          <a href="#">Personal care</a>
          <a href="#">Make-Up</a>
          <a href="#">Skin Care</a>
          <a href="#">Hair</a>
        </div>
      </div></div>

    <div class="one"> <a href="/"><img src="https://www.netmeds.com/assets/version1667495847/gloryweb/images/icons/health-library.svg" alt=""></a>
        <div class="dropdown">
            <button class="dropbtn">Health Corner</button>
            <div class="dropdown-content">
              <a href="#">Health-Library</a>
              <a href="#">PatientsAlike</a>
              <a href="#">Cancer Awareness</a>
            </div>
          </div></div>
</div>`;
};

export { navbar};