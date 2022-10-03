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
})