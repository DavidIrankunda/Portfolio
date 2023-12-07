const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
    //Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener("click", function () {
            let currenBtn = document.querySelectorAll(".active-btn");
            currenBtn[0].className = currenBtn[0].className.replace(
                " active-btn",
                "",
            );
            this.className += " active-btn";
        });
    }
    // Sections active class

allSections.addEventListener("click", function (e) {
        const id = e.target.dataset.id;
        if (id) {
            //Remove selected from the other buttons
            secBtns.forEach((btn) => {
                btn.classList.remove("active");
            });
            e.target.classList.add("active-btn");

            //Hide other sections
            sections.forEach((section) => {
                section.classList.remove("active");
            });

            const element = document.getElementById(id);
            element.classList.add("active");
        }
    });

    //Toggle theme
    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener('click',()=>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

function getToAboutPage(){
    const aboutBtn = document.querySelector(".main-btn");
    const aboutPage = document.querySelector(".sec2");
    const aboutPageControl = document.querySelector(".control2");
    const mainPageCtrl = document.querySelector(".control1");
    aboutBtn.addEventListener('click',()=>{
        aboutPage.classList.add("active");
        mainPageCtrl.classList.replace("active-btn","");
        aboutPageControl.classList.add("active-btn");
    });

}

PageTransitions();
getToAboutPage();