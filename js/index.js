var countriesDisplay = document.getElementById('count-disp');
var countButton = document.getElementById('count-btn');
// countButton.innerHTML="none";
countriesDisplay.style.display = 'none';

countButton.addEventListener('click', function(){
    if(countriesDisplay.style.display == 'none'){
        countriesDisplay.style.display = 'flex';

    }else{
        countriesDisplay.style.display = 'none';
    }
});

// javascript for the footer accordion

var footerHeadings  = document.querySelectorAll(".footer_heading");
 footerHeadings.forEach(footerHeading => {
    footerHeading.addEventListener("click", state => {
        footerHeading.classList.toggle("active");
    });
 });
 
 // code to toggle hamburger
 var hamburgerButton = document.querySelector('.burgers');
 var mobilePannel = document.querySelector('.mobile_nav');
 hamburgerButton.addEventListener('click', function(){
    hamburgerButton.classList.toggle("active");
    mobilePannel.classList.toggle("active");
 });