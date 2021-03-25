
let ActionMenu = {
    "DEV FULL": () => {
        document.querySelector("iframe").src = "inicio.html";
    },
    "Artigos": () => {
        document.querySelector("iframe").src = "artigos.html";
    },
    "Sobre": () => {
        document.querySelector("iframe").src = "sobre.html";
    },
    "Contato": () => {
        document.querySelector("iframe").src = "contato.html";
        document.querySelector("iframe").style = "height: 500px;";
        if(window.innerWidth < 950){
            document.querySelector("iframe").style = "height: 800px;";
        }
    },
    "Dúvidas": () => {
        document.querySelector("iframe").src = "duvidas.html";
    }
};

document.querySelector("#inicio").addEventListener("click", function(e){activeMenu(document.querySelector("#inicio").textContent);});
document.querySelector("#artigos").addEventListener("click", function(e){activeMenu(document.querySelector("#artigos").textContent);});
document.querySelector("#sobre").addEventListener("click", function(e){activeMenu(document.querySelector("#sobre").textContent);});
document.querySelector("#contato").addEventListener("click", function(e){activeMenu(document.querySelector("#contato").textContent);});
document.querySelector("#duvidas").addEventListener("click", function(e){activeMenu(document.querySelector("#duvidas").textContent);});

function activeMenu(text){
    ActionMenu[text]();

}



