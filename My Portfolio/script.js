//navbar code

let navH1 = document.querySelector(".nav-h1");
let body = document.querySelector("body");
let navOptions = document.querySelector(".nav-options");
let navBtn = document.querySelector(".nav-btn")

navH1.addEventListener("click",function(){
    body.style.backgroundColor="black";
     navH1.style.display="none";
     navOptions.style.display="none";
     navBtn.style.display="none";

     body.innerHTML='<h1>PORTFOLIO</H1>';
     body.style.color=" rgb(196, 130, 16)";
     body.style.display="flex";
     body.style.alignItems="center";
     body.style.justifyContent="center";
     body.style.fontSize="80px";
});

// hero 

let heroRightProfi = document.querySelector(".hero-right-profi");
let origiSrc ="profile-pic.png";
let changeSrc ="profile1-pic.png"

heroRightProfi.addEventListener("click",function(){
   
   if(heroRightProfi.src.includes(origiSrc)){
       heroRightProfi.src =changeSrc;
   }else{
    heroRightProfi.src=origiSrc;
   }
});

// about

let aboutLBox = document.querySelector(".about-l-box");

aboutLBox.addEventListener("click",function(){
  aboutLBox.style.backgroundColor="#ff8674";
})



let aboutRightList = document.querySelector(".about-right-list");
let aboutRightSkills = document.querySelector(".about-right-skills");
let aboutRightEducation = document.querySelector(".about-right-education");

let aboutRightList1 = document.querySelector(".about-right-list-1");
let aboutRightList2 = document.querySelector(".about-right-list-2");

aboutRightList1.style.display="none";
aboutRightList2.style.display="block";

aboutRightSkills.addEventListener("click",function(){
  aboutRightList1.style.display="block";
  aboutRightList2.style.display="none";

});

aboutRightEducation.addEventListener("click",function(){
    aboutRightList2.style.display="block";
    aboutRightList1.style.display="none";
  
  });

  // services

  let servicesBox1 = document.querySelector(".services-box-1");
  let servicesBox2 = document.querySelector(".services-box-2");
  let servicesBox3 = document.querySelector(".services-box-3");
  let learn = document.querySelectorAll(".learn");

  servicesBox1.addEventListener("mouseover",function(){
    servicesBox1.style.backgroundColor="rgb(196, 130, 16)";
    servicesBox1.style.color="black"
  });

  servicesBox1.addEventListener("mouseout",function(){
    servicesBox1.style.backgroundColor="antiquewhite"
    servicesBox1.style.color="rgb(196, 130, 16)";
  });

  servicesBox2.addEventListener("mouseover",function(){
    servicesBox2.style.backgroundColor="rgb(196, 130, 16)";
    servicesBox2.style.color="black"
  });

  servicesBox2.addEventListener("mouseout",function(){
    servicesBox2.style.backgroundColor="antiquewhite"
    servicesBox2.style.color="rgb(196, 130, 16)";
  });

  servicesBox3.addEventListener("mouseover",function(){
    servicesBox3.style.backgroundColor="rgb(196, 130, 16)";
    servicesBox3.style.color="black"
  });

  servicesBox3.addEventListener("mouseout",function(){
    servicesBox3.style.backgroundColor="antiquewhite"
    servicesBox3.style.color="rgb(196, 130, 16)";
  });


  learn.forEach(function(learn){
    learn.addEventListener("click",function(){
    alert("all details comming soon")
  })

  })