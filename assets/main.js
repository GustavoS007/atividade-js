document.addEventListener("DOMContentLoaded", function () {

   

    const campoBusca = document.getElementById("campoBusca");
    const tabela = document.getElementById("tabelaDispositivos");

    campoBusca.addEventListener("input", function () {

        const textoBusca = campoBusca.value.toLowerCase();

        const linhas = tabela.querySelectorAll("tbody tr");

        linhas.forEach(function (linha) {

            const textoLinha = linha.textContent.toLowerCase();

            if (textoLinha.includes(textoBusca)) {
                linha.style.display = "";
            } else {
                linha.style.display = "none";
            }

        });

    });


    

    const btnTema = document.getElementById("btnTema");

    btnTema.addEventListener("click", function () {

        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            btnTema.textContent = "Light Mode";
        } else {
            btnTema.textContent = "Dark Mode";
        }

    });


   

    const btnMenu = document.getElementById("btnMenu");
    const menuLateral = document.getElementById("menuLateral");

    btnMenu.addEventListener("click", function () {

        menuLateral.classList.toggle("menu-aberto");

    });


   

    const btnAccordion = document.getElementById("btnAccordion");
    const painelAccordion = document.getElementById("painelAccordion");

    btnAccordion.addEventListener("click", function () {

        painelAccordion.classList.toggle("aberto");

    });

});
