
   
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
   

