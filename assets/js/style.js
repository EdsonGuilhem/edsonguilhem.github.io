// Author: Edson Guilhem

$(document).ready(async function () {
  var categorias = [
    "Certificados",
    "WebSites"
  ];
  var portfolio = [
    {
      img: "assets/img/portfolio/certificado.jpg",
      titulo: "Desenvolvedor Web",
      categoria: "Certificados",
      plataforma: "Udemy",
      data: "2021",
      url: "https://www.udemy.com/certificate/UC-98174d7e-8c98-4fc3-bbd5-15ea8c796816/",
      descricao: `O certificado acima atesta que Edson Pedroso Guilhem concluiu com êxito
      o curso Curso Web Moderno Completo com JavaScript 2021 + Projetos em 04/08/2021,
      ministrado por Leonardo Moura Leitao, Cod3r Cursos Online na Udemy.`,
      galeriaImgs: {
        img: "",
        img1: "assets/img/portfolio/certificado2.jpg",
      },
    },
    

    /*{
      img: "assets/img/portfolio/estagiosdev.png",
      titulo: "Aplicativo Estágios.dev",
      categoria: "Apps",
      cliente: "Estágios.dev",
      data: "2021",
      url: "https://estagios.dev/",
      descricao: `Estágios.dev é um aplicativo e plataforma voltada para a divulgação de vagas de estágio em trainee exclusiva para estudantes de programação
      Feito em Bootstrap, React, NextJs`,
      galeriaImgs: {
        img: "",
        img1: "assets/img/portfolio/estagiosdev-2.png",
        img2: "assets/img/portfolio/estagiosdev-3.png",
        img3: "assets/img/portfolio/estagiosdev-4.png",
      },
    },

    {
      img: "assets/img/portfolio/siteecasamenteira.png",
      titulo: "Loja Virtual e-Casamenteira",
      categoria: "WebSites",
      cliente: "e-Casamenteira",
      data: "2020",
      url: "https://ecasamenteira.com.br/",
      descricao: `O cliente e-Casamenteira entrou em contato com a proposta de criar toda uma estrutura para se inserir no mundo digital. Prestei consultoria
      de identididade visual, criando desde a logo, paleta de cores, o UI/UX Design, hospedagem, domínio e por fim a criação do site feito em Wordpress, Elementor, Woocomerce Linguagem PHP e CSS, sistema de checkout para pagamento e integração com sistemas de gestão. `,
      galeriaImgs: {
        img: "",
        img1: "assets/img/portfolio/ecasamenteira-2.png",
        img2: "assets/img/portfolio/ecasamenteira-3.png",
        img3: "assets/img/portfolio/ecasamenteira-4.png",
      },
    },*/

    

  ];

  var htmlProjetos = "";

  // mapeando os projetos listados na variavel protfolio
  portfolio.map((projeto, posicao) => {
    htmlProjetos += `
          <div class="col-lg-4 col-md-6 portfolio-item filter-${projeto.categoria.toLocaleLowerCase()}" style="cursor:pointer;" data-bs-toggle="modal" data-bs-target="#modalProjeto${posicao}">
          <div class="portfolio-wrap">
            <img src="${projeto.img}" class="img-fluid" alt="${projeto.titulo}">
            <div class="portfolio-links">
              <button data-bs-toggle="modal" data-bs-target="#modalProjeto${posicao}" title="Mais Detalhes"><i class="bx bx-dots-horizontal-rounded"></i></button>
            </div>
          </div>
        </div>

        <script>
            $("body").append(\`
            <div class="modal fade" id="modalProjeto${posicao}" tabindex="-1" aria-labelledby="modalProjetoLabel${posicao}" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalProjetoLabel${posicao}">${projeto.titulo}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <section id="portfolio-details" class="portfolio-details">
                  <div class="container">
            
                    <div class="row gy-4">
            
                      <div class="col-lg-8">
                        <div class="portfolio-details-slider swiper">
                          <div class="swiper-wrapper align-items-center">
                            <div class="swiper-slide">
                              <img src="${projeto.img}" alt="${projeto.titulo}">
                            </div>

                           <div class="swiper-slide">
                              <img src="${projeto.galeriaImgs.img1}" alt="${projeto.titulo}">
                            </div>

                           <!-- <div class="swiper-slide">
                              <img src="${projeto.galeriaImgs.img2}" alt="${projeto.titulo}">
                            </div>

                            <div class="swiper-slide">
                              <img src="${projeto.galeriaImgs.img3}" alt="${projeto.titulo}">
                            </div> -->

                          </div>
                          <div class="swiper-pagination"></div>
                        </div>
                      </div> 
            
                      <div class="col-lg-4">
                        <div class="portfolio-info">
                          <h3>Informações sobre o Projeto</h3>
                          <ul>
                            <li><strong>Categoria</strong>: ${projeto.categoria}</li>
                            <li><strong>Plataforma</strong>: ${projeto.plataforma}</li>
                            <li><strong>Data de criação</strong>: ${projeto.data}</li>
                            <li><strong>Site do projeto</strong>: <a href="${projeto.url}" target="_blank">${projeto.url}</a></li>
                          </ul>
                        </div>
                        <div class="portfolio-description">
                          <h2>Descrição</h2>
                          <p>
                          ${projeto.descricao}
                          </p>
                        </div>
                      </div>
            
                    </div>
            
                  </div>
                </section><!-- End Portfolio Details Section -->
                </div>
                </div>
            </div>
            </div>
            \`)
        </script>
          `;
  });

  // colocando todos projetos no portfolio
  $("#portfolioLista").html(htmlProjetos);

  categorias.map((categoria) => {
    var htmlCategorias = ` <li data-filter=".filter-${categoria.toLocaleLowerCase()}">${categoria}</li> `;
    $("#portfolio-flters").append(htmlCategorias);
  });

  // ativando slide das imgs dentro do modal
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
});
