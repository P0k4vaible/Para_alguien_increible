/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add("show-menu")
    })
}

if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu")
    })
}


/*=============== REMOVE MOBILE (MENU)===============*/
const navLink = document.querySelectorAll(".nav__link")

const linkAction = () =>{
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

/*=============== ADD SHADOW HEADER ===============*/

const scrollHeader = ()=>{
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add("shadow-header")
                       : header.classList.remove("shadow-header")
}

window.addEventListener("scroll", scrollHeader)

window.addEventListener("load", () => {

        gsap.set(".home__img-3", { transformOrigin: "center" });

        let flotar = gsap.timeline({
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
        });

        flotar

        // Se mueve en diagonal + rota
        .to(".home__img-3", {
            x: 40,
            y: -10,
            rotation: 10,
            duration: 2
        })

        // Vuelve al centro
        .to(".home__img-3", {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 2
        });

        gsap.set(".home__img-4", { transformOrigin: "center" });

        let flotar_1 = gsap.timeline({
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
        });

        flotar_1

        // Se mueve en diagonal + rota
        .to(".home__img-4", {
            x: 40,
            y: -20,
            rotation: -30,
            duration: 0
        })

        // Vuelve al centro
        .to(".home__img-4", {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 2
        });        

});
