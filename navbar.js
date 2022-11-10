
const navbar=()=>{
    return `  <div>
    <div>
        <img src="https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg">
    </div>
        <div id="searchbar">
            <div id="search_option">
                <p>Deliver to <b>110002</b></p>
            </div>
            <input  type="text" placeholder="search for medicine & wellness products.."></div>
        <div>
            <div>
                <i class="fa-solid fa-circle-arrow-up"></i>
             <a style="text-decoration:none; color: aliceblue;"  href="./Admin-upload.html">Upload</a>
            </div>
            <div>
                <i class="fa-solid fa-cart-shopping"></i>
                <p>Cart</p>
            </div>
            <div>
                <i class="fa-solid fa-id-card"></i>
                <p>Sign in/Sign up</p>
            </div>
        </div>
     </div>
     <div>
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
                <p>Wellness</p>
            </div>
        </div>
        <div>
            <div  class="dept">
                <div><img src="https://www.netmeds.com/assets/gloryweb/images/icons/Wellnessnew.svg"></div>
                <p>Lab Tests</p>
            </div>
        </div>
        <div class="right_menu">
            <div  class="dept">
                <div><img src="https://www.netmeds.com/assets/gloryweb/images/icons/Beautynew.svg"></div>
                <p>Beauty</p>
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
                <p>Health Corner</p>
            </div>
            <div class="dropdown_menu">
                <p>Health Library</p>
                <p>Patient Alike</p>
                <p>Cancer Awareness</p>
              </div>
        </div>
    </div> `;
};

export { navbar};