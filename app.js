const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 2.9, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");





//what happen if mobile

// let wrapper = document.getElementById("wrapper"),
// clickMe = document.getElementById('clickMe'); //Keeping it unobstrusive

// function doDemo () {
// let button = this;
// document.getElementById('wrapper').style.color = "blue";
// button.setAttribute("disabled", "true");
// setTimeout(clearDemo, 2000, button);
// }

// for detection of mobile
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    console.log("mobile device");
    document.getElementById('wrapper').style.display = "flex";
    document.getElementById('wrapper').style.alignItems = "center";
    document.getElementById('wrapper').style.width = "80vw";
    document.getElementById('typing-demo').style.gridTemplateColumns = "50% 50%";
    document.getElementById('typing-demo').style.fontsize = "1rem";






// beter way
//     const ele=document.getElementById("ele_id");
// const custom_style={
//     display: "block",
//     color: "red",
//     // for background color
//     backgroundColor: "black",
// }

// //Object.assign():
// Object.assign(ele.style,custum_style);

  }else{
    // false for not mobile device
    console.log("not mobile device");
  } 


//   display: flex;
//     align-items: flex-start



