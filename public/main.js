var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'cybercook.json', true);
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();

//gera as estrelas de acordo com a quantidade de 'likes'
Handlebars.registerHelper('listRating', function(items) {
    var out = "";
    if(items){
        for(var i=0; i<items && i<5; i++) {
    
            out = out + `<i class="fas fa-star"></i>`;

        }
        out = out + "&nbsp;&nbsp;" + items;
        return out;
    }
  });

//Cria o template
function createHTML(Data) {
  var rawTemplate = document.getElementById("home").innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(Data);

  var Container = document.getElementById("app");
  Container.innerHTML = ourGeneratedHTML;
}

function tela(){
  if(window.scrollY > 30){
      document.getElementById('nav').classList.add("nav-fixed");
      document.getElementById('notifications').style.marginRight = "180px";   
      
      if(window.innerWidth < 1200){
        document.getElementById('notifications').style.marginRight = "96px";  
      }else{
        document.getElementById('notifications').style.marginRight = "180px";   
      }

    }else{        
      document.getElementById('nav').classList.remove("nav-fixed");  
      document.getElementById('notifications').style.marginRight = "275px";        
  }  
}

//Efeito de rolagem da página com menu fixo
window.addEventListener("resize", tela);
window.addEventListener("scroll", tela);

//Efeito cover document
document.getElementById('alert').addEventListener("click", function(){

  document.getElementById('suggestion').style.display = "block";
  document.getElementById('box-arrow').style.display = "block";
  document.getElementById('cover').style.display = "block";

});

document.getElementById('ok-suggestion').addEventListener("click", function(){

  document.getElementById('suggestion').style.display = "none";
  document.getElementById('box-arrow').style.display = "none";
  document.getElementById('cover').style.display = "none";

});


document.getElementById('livro-receitas').addEventListener("click", function(){

  document.getElementById('livro').style.display = "block";

});


document.getElementById('close').addEventListener("click", function(){

  document.getElementById('livro').style.display = "none";

});

document.getElementById('livro-receitas-heart').addEventListener("click", function(){

  document.getElementById('livro').style.display = "block";

});


document.getElementById('close-notification').addEventListener("click", function(){

  document.getElementById('notifications').style.display = "none";

});


document.getElementById('notification').addEventListener("click", function(){

  document.getElementById('notifications').style.display = "block";

});

