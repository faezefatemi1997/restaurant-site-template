let menus = document.querySelector("nav");
let menuBtn = document.querySelector(".menu-btn");
let closeBTN = document.querySelector(".close-btn");

menuBtn.addEventListener("click" , function(){
    menus.classList.add("active");
})

closeBTN.addEventListener("click", function(){
    menus.classList.remove("active");
})
// ---------------------swiper js 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },


 breakpoints :{
    0:{
        slidesPerView:1,
    },
    768 :{
        slidesPerView:2,  
    },
    900 :{
        slidesPerView:3,  
    },

}
  });


//   dynamic images

const SectionCenter = document.querySelector('.menus_items_container');
const filterBtns = document.querySelectorAll('.btn-cat');


filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e){
        const Category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.Category==Category) {
            return menuItem;
            }
        });
        if(Category=="all"){
            displayMenusItem(menu);
        }
        else{
            displayMenusItem(menuCategory); 
        }
    })
    
});


const menu=[
    {
        id: 1,
        title: "Chicken and Cahews",
        Category: "Dinner",
        price: 25,
        img: "imgs/25.jpg",
    },
    {
        id: 2,
        title: "Chicken and Cahews",
        Category: "Lunch",
        price: 25,
        img: "imgs/26.jpg",
    },
    {
        id: 3,
        title: "Chicken and Cahews",
        Category: "Starter",
        price: 25,
        img: "imgs/27.jpg",
    },
    {
        id: 4,
        title: "Chicken and Cahews",
        Category: "Drinks",
        price: 25,
        img: "imgs/28.jpg",
    },
    {
        id: 5,
        title: "Chicken and Cahews",
        Category: "Drinks",
        price: 25,
        img: "imgs/29.jpg",
    },
    {
        id: 6,
        title: "Chicken and Cahews",
        Category: "Dinner",
        price: 25,
        img: "imgs/30.jpg",
    },
    {
        id: 7,
        title: "Chicken and Cahews",
        Category: "Lunch",
        price: 25,
        img: "imgs/31.jpg",
    },
    {
        id: 8,
        title: "Chicken and Cahews",
        Category: "Dinner",
        price: 25,
        img: "imgs/32.jpg",
    },
    {
        id: 9,
        title: "Chicken and Cahews",
        Category: "Dinner",
        price: 25,
        img: "imgs/33.jpg",
    },
]

window.addEventListener("DOMContentLoaded",function() {
    displayMenusItem(menu);
});

function displayMenusItem(menuItem) {
    let displayMenusItem = menuItem.map(function(item) {
        return `<div class="img_cards">
        <img src=${item.img} alt="">
        <p class="price">Only On ${item.price} Dolloars</p>
        <p>${item.title}</p>
    </div>`;
    })
    displayMenusItem = displayMenusItem.join("");
    SectionCenter.innerHTML= displayMenusItem;
}


//  static counter strat 
const countersEl = document.querySelectorAll('.num');



countersEl.forEach((countersEl)=>{
    countersEl.innerText = "0";
    increamentCounter();


    function increamentCounter(){
        let currentNum = +countersEl.innerText;
        const dataCeil = countersEl.getAttribute("data-ceil");
        const increament = dataCeil / 15 ;
        currentNum = Math.ceil(currentNum+increament);

        if (currentNum<dataCeil){
            countersEl.innerText = currentNum ;
            setTimeout(increamentCounter,70);
        }
        else{
            countersEl.innerHTML = dataCeil
        }
    }

})
//  static counter close

// sticky menu start
const nav = document.querySelector("header");

window.addEventListener("scroll",function(){
    if(this.document.documentElement.scrollTop>20){
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky");
    }
})

// sticky menu close


const parallax = document.querySelector('#showcase');
window.addEventListener("scroll",function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
});