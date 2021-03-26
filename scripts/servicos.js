

ListaServicos.forEach((list) => {
    let container = document.createElement("div");
    container.className = "content-servico";
    container.innerHTML = `
    <div class='title-servico' id='n`+ list["id"]+`'>
        <h2 style='color: rgba(255,255,255,.8);'>` + list["title"] + `</h2>
    </div>
    `;
    container.style = `background: url('`+list["background"] + `') no-repeat;`;
    container.style.backgroundPosition = "50%";
    container.style.backgroundSize = "100%";
    
    if(window.innerWidth > 800){
        container.addEventListener("mouseover", () => {
            container.children[0].style = "opacity: 1;";
        });
        container.addEventListener("mouseout", () => {
            container.children[0].style = "opacity: 0;";
        });
    }

    document.body.appendChild(container);
});