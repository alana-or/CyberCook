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

//Efeito de rolagem da página com menu fixo
window.addEventListener("scroll", function nav(){
  hide("receitas");
  hide("videos");
  hide("teamCook");
  hide("mais");

    if(window.scrollY > 30){
        document.getElementById('nav').classList.add("nav-fixed");
        document.getElementById('top').style.display = "none";
    }else{        
        document.getElementById('nav').classList.remove("nav-fixed");
        document.getElementById('top').style.display = "block";
    }
});

//Mostra o sub-menu
function show(item = "receitas"){
  document.getElementById('sub-'+ item).style.display = "block";
  document.getElementById(item).style.background = "#ebebeb";
  
  if(window.scrollY > 30){
    document.getElementById('sub-' + item).style.top = "60px";
  }else{
    document.getElementById('sub-' + item).style.top = "250px";
  }
}

//Esconde o sub-menu
function hide(item = "receitas"){
  document.getElementById('sub-' + item).style.display = "none";
  document.getElementById(item).style.background = "#fff";
}

document.getElementById('receitas').addEventListener("mouseover", function(){show("receitas")});
document.getElementById('receitas').addEventListener("mouseout", function(){hide("receitas")});

document.getElementById('sub-receitas').addEventListener("mouseover", function(){show("receitas")});
document.getElementById('sub-receitas').addEventListener("mouseout", function(){hide("receitas")});

document.getElementById('videos').addEventListener("mouseover", function(){show("videos")});
document.getElementById('videos',).addEventListener("mouseout", function(){hide("videos")});

document.getElementById('sub-videos').addEventListener("mouseover", function(){show("videos")});
document.getElementById('sub-videos').addEventListener("mouseout", function(){hide("videos")});

document.getElementById('teamCook').addEventListener("mouseover", function(){show("teamCook")});
document.getElementById('teamCook').addEventListener("mouseout", function(){hide("teamCook")});

document.getElementById('sub-teamCook').addEventListener("mouseover", function(){show("teamCook")});
document.getElementById('sub-teamCook').addEventListener("mouseout", function(){hide("teamCook")});

document.getElementById('mais').addEventListener("mouseover", function(){show("mais")});
document.getElementById('mais').addEventListener("mouseout", function(){hide("mais")});

document.getElementById('sub-mais').addEventListener("mouseover", function(){show("mais")});
document.getElementById('sub-mais').addEventListener("mouseout", function(){hide("mais")});