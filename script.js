let button = document.getElementById('on');
    button.addEventListener('click',make);
    function make(){
      document.getElementById('get').style.boxShadow = "0 0 100px orangered"
    } 
    let buttonone = document.getElementById('off');
    buttonone.addEventListener('click',Done);
    function Done(){
      document.getElementById('get').style.boxShadow = "0 0 0px white"
    } 
    
  