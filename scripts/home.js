let staticHeight = {'fados/index': 500,'fados/inicio': 500, 'fados/servicos': 800, 'fados/sobre': 780,'fados/contato': 500, 'fados/duvidas': 500};
let heightPhone = {'fados/index': 500,'fados/inicio': 500, 'fados/servicos': 1800, 'fados/sobre': 1100,'fados/contato': 800, 'fados/duvidas': 630};
//aciona o mudanca de página com o click do menu
let ActionMenu = {
    "rl estofados": () => {
        document.querySelector("iframe").src = "inicio.html";
        resizing();
    },
    "serviços": () => {
        document.querySelector("iframe").src = "servicos.html";
        resizing();
    },
    "sobre": () => {
        document.querySelector("iframe").src = "sobre.html";
        resizing();
    },
    "contato": () => {
        document.querySelector("iframe").src = "contato.html";
        resizing();
    },
    "dúvidas": () => {
        document.querySelector("iframe").src = "duvidas.html";
        resizing();
    }
};

// Métodos de alteração do menu
let Menu = {
    "open": () => {
        let elements = document.querySelectorAll(".menu-item");
        elements.forEach((element) => {
            element.hidden = false;
        });
    },
    "close": () => {
        let elements = document.querySelectorAll(".menu-item");
        elements.forEach((element) => {
            if(element.textContent != "RL ESTOFADOS"){
                element.hidden = true;
            }
        });
    }, 
    "IsOpen": () => {
        return document.querySelector("#contato").hidden;
    }
}
document.querySelectorAll(".menu-item").forEach((element) => {
    element.addEventListener("click", () => {actionMenu(element.textContent.toLowerCase());});
});

function actionMenu(text){
    ActionMenu[text]();
}

//adaptação de layout ao tamanho da tela
window.addEventListener("resize", resizing);

function resizing(){
    let size = window.innerWidth;
    let iframe = document.querySelector("iframe");
    let page = iframe.src.substring(iframe.src.indexOf("fados/"),iframe.src.indexOf(".html"));
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

document.querySelector("iframe").addEventListener("load", () => {
    resizeMenu(window.innerWidth);
    resizing();
});







///ajusta o menu e tela - responsividade js
resizeMenu(window.innerWidth);
resizing();
