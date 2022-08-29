/* ===== typing animation ===== */
var typed = new Typed(".typing",{
    strings:["","Web Developer","Mobile App  Developer","NFT Creator","Blockchain Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})


/* ===== aside ===== 
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            for(let j=0; j<totalNavList; j++)
            {
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
        })
    }

/* ===== nav open and close ===== 
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () =>
    {
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn()
    {
        aside.chainList.toggle("open");
        navTogglerBtn.classList.toggle("open");
    }
*/


/* menu bars */
let menu = document.querySelector('#menu-bars');
let aside = document.querySelector('.aside');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    aside.classList.toggle('open');
}

//active when scrolling
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.aside .nav a');


window.onscroll = () =>{
    /* removing menu bar when scrolling */
    menu.classList.remove('fa-times');
    aside.classList.remove('open');

    //active when scrolling
    section.forEach(sec =>{

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');
    
        if(top >= offset && top < offset + height){
          navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('.aside .nav a[href*='+id+']').classList.add('active');
          });
        };
    
    });
};


