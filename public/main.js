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

// Handlebars.registerHelper("calculateAge", function(birthYear) {
//   var age = new Date().getFullYear() - birthYear;

//   if (age > 0) {
//     return age + " years old";
//   } else {
//     return "Less than a year old";
//   }

// });

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

function createHTML(petsData) {
  var rawTemplate = document.getElementById("home").innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(petsData);

  var petsContainer = document.getElementById("app");
  petsContainer.innerHTML = ourGeneratedHTML;
}


function nav(){
    if(window.scrollY > 50){
        document.getElementById('nav').classList.add("nav-fixed");
        // document.getElementById('container').classList.add("container");
    }else{        
        document.getElementById('nav').classList.remove("nav-fixed");
        // document.getElementById('container').classList.remove("container");
    }
}

window.addEventListener("scroll", nav);