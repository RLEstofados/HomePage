let staticHeight = {'Devs/inicio': 500, 'Devs/artigos': 500, 'Devs/sobre': 580,'Devs/contato': 500, 'Devs/duvidas': 500};
let heightPhone = {'Devs/inicio': 500, 'Devs/artigos': 500, 'Devs/sobre': 990,'Devs/contato': 800, 'Devs/duvidas': 630};
//aciona o mudanca de página com o click do menu
let ActionMenu = {
    "DEV FULL": () => {
        document.querySelector("iframe").src = "inicio.html";
        resizing();
    },
    "Artigos": () => {
        document.querySelector("iframe").src = "artigos.html";
        resizing();
    },
    "Sobre": () => {
        document.querySelector("iframe").src = "sobre.html";
        resizing();
    },
    "Contato": () => {
        document.querySelector("iframe").src = "contato.html";
        resizing();
    },
    "Dúvidas": () => {
        document.querySelector("iframe").src = "duvidas.html";
        resizing();
    }
};

// Métodos de alteração do menu
let Menu = {
    "open": () => {
        document.querySelectorAll(".menu-item").forEach((element) => {
                element.hidden = false;
        });
    },
    "close": () => {
        document.querySelectorAll(".menu-item").forEach((element) => {
            if(element.textContent != "DEV FULL"){
                element.hidden = true;
            }
        });
    }, 
    "IsOpen": () => {
        return document.querySelector("#contato").hidden;
    }
}
document.querySelectorAll(".menu-item").forEach((element) => {
    element.addEventListener("click", () => {actionMenu(element.textContent);});
});

function actionMenu(text){
    ActionMenu[text]();
}

//adaptação de layout ao tamanho da tela
window.addEventListener("resize", resizing);

function resizing(){
    let size = window.innerWidth;
    let iframe = document.querySelector("iframe");
    let page = iframe.src.substring(iframe.src.indexOf("Devs/"),iframe.src.indexOf(".html"));
    if(size > 950){
        iframe.height = staticHeight[page];
    }else {
        iframe.height = heightPhone[page];
    }
    resizeMenu(size);
}


///########## foramação e ação do menu #############
document.querySelector("#icon-menu").addEventListener("click", () => {
    console.log(Menu["IsOpen"]());
    if(!Menu["IsOpen"]()){
        Menu["close"]();
    }else{
        Menu["open"]();
    }
});

function resizeMenu(size){
    if(size > 800){
        Menu['open']();
    }else{
        Menu['close']();
    }
}








///ajusta o menu e tela - responsividade js
resizeMenu(window.innerWidth);
resizing();
