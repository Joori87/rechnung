

const subbutton = document.querySelector("input");


let einstand = document.querySelector("#einstand");
let vkp = document.querySelector("#vkp");

/*
for(element of inputs) {
subbutton.addEventListener("Change", function(e){
 

  
})
}
*/


function calc(){
  
    let gk = document.getElementById("gemein").value / 100;
    let gewinn = document.getElementById("gewinn").value / 100;
    let rabatt = document.getElementById("rabatt").value / 100;
    let skonto = document.getElementById("skonto").value / 100;
    
    

    if(vkp.value === ""){

    

      console.log(einstand.value);

      let result = prog(einstand.value, gk, gewinn, rabatt, skonto);
  

      vkp.value = result;


    } else {
  
      console.log(vkp.value);
       let result = retro(vkp.value, skonto, rabatt, gewinn, gk);

        
       einstand.value = result;
    }   

    }


    function retro(vkp, skonto, rabatt, gewinn, gk){

        let ohneUst = vkp / 1.2
        let ohneSkonto = ohneUst * (1-skonto)
        let ohneRabatt = ohneSkonto * (1-rabatt)
        let ohneGewinn = ohneRabatt / (1+gewinn)
        let einstandspreis = ohneGewinn / (1+gk)

       

       
        return einstandspreis.toFixed(2);

    }



    function prog(einstand, gk, gewinn, rabatt, skonto){

        let mitGk = einstand * (1+gk)
        let mitGewinn = mitGk * (1+gewinn)
        let mitRabatt = mitGewinn / (1-rabatt)
        let mitSkonto = mitRabatt / (1-skonto)

        let verkaufspreis = mitSkonto * 1.2

       

      

        return verkaufspreis.toFixed(2);

    }
