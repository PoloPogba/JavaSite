 var start, result;
                start = 'Hey le site xxxxvidsxxxx est trop bien. Viens dessus stp please';                      
                 
 
                        function YEAH(){
        
                        if (confirm(start)){
                        location.href = ("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                        } 
                        }
        

                setTimeout(YEAH, 3000);


var btn = document.querySelector('input');
var lol = 0;
btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.value === "VOUS N'ETES PAS PRET !") {
    btn.value = 'ASSEZ ?';
    lol = 1; 
    document.body.bgColor='magenta';
    document.body.style.color='blue';
    
		  
    document.paragraph.style.fontSize = "45px";
    document.body.style.color= 'blue';

	  document.p.style.fontFamily = "Courier New", Courier, monospace;
	  

  } else {
    btn.value = "VOUS N'ETES PAS PRET !";
    lol = 0;
  document.body.bgColor='white';
	  document.body.style.color='black';
  }
}

