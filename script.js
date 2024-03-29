const puppeteer = require('puppeteer');

const path = require('path'); // Importe a biblioteca 'path'

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();



  // Defina o conteúdo HTML que você deseja converter em PDF
  const htmlContent = `<!DOCTYPE html>
  <html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Raquel-cv</title>
    <link rel="stylesheet" media="screen" href="style.css" />
    <script src="https://kit.fontawesome.com/086db1c966.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="container">
      <div class="information-column">
        <h1 class="title-name" style="color:black">Raquel Oliveira Maia</h1>
        <h2 class="areaAtual" style="color: black">Desenvolvedora Web Júnior</h2>
        <hr />
        <div class="contact-description">
          <h3>Contato</h3>
          <ul>
            <li>
              <i class="fa-brands fa-github"></i>
              <a href="https://github.com/raquel-maia" target="_blank" style="color: black;">https://github.com/raquel-maia</a>
            </li>
            <li>
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:raquelmaia860@gmail.com" target="_blank" style="color: black;">raquelmaia860@gmail.com</a>
            </li>
            <li>
              <i class="fa-brands fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/raquel-maia-860/" target="_blank" style="color: black;">LinkedIn</a>
            </li>
            <li>
              <i class="fa-solid fa-phone"></i>
              <a style="color: black;">(11) 97541-5162</a>
            </li>
            <li>
              <i class="fa-solid fa-globe"></i>
              <a style="color: black;">São Paulo-SP</a>
            </li>
          </ul>
        </div>
        <div class="education-description">
          <h3>Educação</h3>
          <ul>
            <li>
              <p>2023-2025</p>
              <h4 style="color: black">Análise e Desenvolvimento de Sistemas</h4>
              <h5 style="color: black">Faculdade Impacta</h5>
            </li>
            <li>
              <p>2017-2019</p>
              <h4 style="color: black">Marketing</h4>
              <h5 style="color: black">Uninove</h5>
            </li>
            <li>
              <h4 class="certifi" ;">Certificados</h4>
              <br>
              <h5 style="color: black;">Curso Online Eu ProgrAmo | FE2 | Turma 01</h5>
              <br>
              <h5 style="color: black;">Rocketseat - Fundamentos da programação web, HTML, CSS, Javascript, Git e Github</h5>
              <br>
              <h5 style="color: black;">Impacta - Introdução à Lógica de Programação (online) - 40 horas</h5>
              <br>
              <h5 style="color: black;">Impacta - HTML5 Fundamentos (online) - 40 horas</h5>
              <br>
              <h5 style="color: black;">Impacta - Introdução à Programação Orientada a Objeto (online) - 16 horas</h5>
            </li>
          </ul>
        </div>
          <div class="habili-description">
            <h3 class="habili-title">Habilidades</h3>
            <ul>
              <li style="color: black">
                <i class="fa-brands fa-js"></i>
                <i class="fa-brands fa-css3-alt"></i>
                <i class="fa-brands fa-html5"></i>
                <i class="fa-brands fa-node-js"></i>
                <i class="fa-brands fa-figma"></i>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-git"></i>
                <i class="fa-solid fa-square-kanban"></i>
                <i class="fa-brands fa-angular"></i>
              </li>
            </ul>
          </div>
          <div class="language-description">
            <h3>Línguas</h3>
            <ul>
              <li>
                <p style="color: black">Português</p>
                <div class="percent">
                  <div></div>
                </div>
              </li>
              <li>
                <p style="color: black">Inglês</p>
                <div class="percent english">
                  <div></div>
                </div>
              </li>
              <li>
                <p style="color: black">Espanhol</p>
                <div class="percent spanish">
                  <div></div>
                </div>
              </li>
            </ul>
          </div>
          <div class="code" >
            <a class="code" href="br.qr-code-generator.com/"><img class="code" src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fraquel-maia.github.io%2Fmy-cv%2F&chs=180x180&choe=UTF-8&chld=L|2"></a>  
          </div>
          
          </div>
          <div class="experiences-column">
            <section>
            <h2>Objetivo</h2>
            <div>
              <p>
               Desenvolvedora Web Junior|Estágio
              </p>
            </div>
            </section>
          <section>
            <h2>Experiências</h2>
            <div class="experience">
              
              <div>
                <h3>Laboratória</h3>
                <div  class="experience-date">
                  <p>04/2023 - Atual</p>
                </div>
                <h4>Desenvolvedora Web (Bootcamp)</h4>
                <p>Criação de projetos com:</p>
                  <ul>
                    <li>
                      <p>HTML, CSS, JavaScript, Firebase/Firestore, NodeJs, Angular e outras tecnologias;</p>
                      <p>Criação de testes unitários com Jest;</p>
                      <p>Utilização de metodologias ágeis, como Scrum e Kanban, para gerenciar projetos e otimizar procedimentos entre equipes;</p>
                      <p>Criação de protótipos em baixa e alta fidelidade com a utilização do Figma;</p>
                      <p>Realização de pesquisa de usuário para informar e validar decisões de design, aplicando conceitos de UX e UI;</p>
                      <p>Utilização do Git e GitHub para controle de versão e colaboração em projetos desenvolvidos em equipe e individual.</p>
                    </li>
                  </ul>
              </div>
            </div>
            <div class="experience">
             
              <div>
                <h3>Nuvemshop</h3>
                <div class="experience-date">
                  <p>02/2022-11/2022</p>
                </div>
                <h4>Senior Performance Marketing Analyst</h4>
                <p> Meta Ads/Google Ads/LinkedIn Ads</p> <br>
                  <ul>
                    <li>
                      <p> <strong>Resultado chave:</strong> Na Nuvemshop, concentrando-me em áreas-chave, como o marketing de Performance,  afiliados, Tool, Growth e Brand para alcançar resultados notáveis. 
                        Uma das maiores conquistas foi o aumento expressivo de 50% na quantidade de leads qualificados, graças à implementação de estratégias avançadas de qualificação de leads por meio de campanhas de Lead Ads no Facebook.<br>
                        <br> Para alcançar esse sucesso, minhas responsabilidades incluíram:</p>
  <br>
                      <p>- Criação de campanhas</p>
                      <p>- Criação de Tag de conversão para rastreamento de resultados
                        Mídia, Google analytics e Tag manager;</p>
                      <p>- Análise de Palavras-chave e criação
                        de públicos;</p> 
                      <p>- Participação na estratégia das peças criativas e apresentação de resultados;</p> 
                      <p>- Realização de teste A/B;</p> 
                      <p>- Análise de resultados no Power BI e Tableau;</p> 
                      <p>- Envio de relatórios semanais e mensais;</p> 
                      <p>- Criação de Dashboard no Data Studio;</p> 
                      <p> - Apresentação de resultados para equipe.</p> 
                      <br>
                      </li>
                  </ul>
              </div>
            </div>
            <div class="experience">
             
              <div>
                <h3>Sanar</h3>
                <div class="experience-date">
                  <p>03/2021-02/2022</p>
                </div>
              <h4>Pleno Performance Marketing Analyst</h4>
              <p>
                Meta Ads/Google Ads/LinkedIn Ads
                <ul>
                  <li>
                    <br>
                    <p>
                      <strong>Resultado chave:</strong>  Meu papel fundamental na Sanar foi evidenciado pela campanha "A Maior Revisão da Galáxia", na qual obtive um aumento de 50% nas vendas e 40% nos leads. <br> Colaborei ativamente com a equipe de mídia paga na estratégia omnichannel de branding, fortalecendo o engajamento com jovens médicos em início de especialização e desempenhando um papel essencial no crescimento da empresa.</p><br>
                      <br><p>Minhas contribuições abrangeram:</p><br>
                    <p>- Criação de campanhas (Search, Display, Remarketing,
                      YouTube e mais);</p>
                    <p>- Criação de Tag de conversão para rastreamento de resultados
                      (Ferramenta de Mídia e Tag manager);</p>
                 
                    <p>- Análise de Palavras-chave e criação
                      de públicos;</p> 
              
            
                    <p>- Participação na estratégia das peças criativas e apresentação de resultados;</p> 
             
          
                    <p>- Otimizações de budget e campanhas;</p> 
           
     
                    <p>- Criação de Dashboard no Data Studio;</p> 
  
                    <p>- Atualização e criação de produtos no editter e CMS;</p> 
  
                    <p>- Apresentação de resultados para equipe.</p> 
  
  
                  </li>
  
                </ul>
              </div>
            </div>
            <div class="experience">
              
              <div>
                <h3>Vindi</h3>
                <div class="experience-date"> 
                  <p>03/2020-03/2021</p>
                </div>
                <h4>Pleno Performance Marketing Analyst</h4>
                <p> Meta Ads/Google Ads/LinkedIn Ads <br></p>
                <p>
                  <br>
                  <strong>Resultado chave:</strong> Na Vindi, em colaboração com as equipes de SEO, design, e produto, contribuí para impulsionar os resultados de leads B2B. Implementei novas estruturas de campanhas, concebi estratégias criativas eficazes e assegurei investimentos mínimos com retornos elevados. Além disso, mantive uma comunicação constante e feedbacks com a equipe comercial, visando aprimorar a qualidade dos leads.
                </p>  <br>
                <p>Minhas contribuições abrangeram:</p><br>
  
                      <p>- Criação de plano de mídia e estimativas;</p>
                      <p>- Criação de campanhas (Search, Display, Remarketing,
                        YouTube, Lead ad, catálogo e mais);</p>
                      <p>- Análise de Palavras-chave e criação
                        de públicos;</p>
                      <p>- Participação na estratégia das peças criativas e apresentação de resultados;</p>
                      <p>- Otimizações de budget e
                        campanhas.</p> 
                      <p>- Acompanhamento de resultados no Salesforce.</p> 
                  </ul>
              </div>
            </div>
          </section>
          <section class="projects">
            <h2>Principais Projetos:</h2>
            <div>
             <h3>Rede Social</h3>
            <p>Este projeto foi desenvolvido como parte do Bootcamp de Desenvolvimento Web da Laboratoria em Trio. O objetivo era criar uma Rede Social que permitisse à qualquer usuário criar uma conta de acesso, logar-se com ela, criar, editar, deletar e dar likes em publicações.
               Confira <a href="https://techsisters-a19d0.web.app/#login" target="_blank">aqui</a> e o código fonte <a href="https://github.com/raquel-maia/SAP010-social-network" target="_blank"
              >aqui</a>.</p>
              <br>
            <div>
              <h3>Data Lovers</h3>
            <p>Este projeto foi desenvolvido como parte do Bootcamp de Desenvolvimento Web da Laboratoria em Pair programming. O objetivo era criar uma página web para visualizar um conjunto (set) de dados que se adequasse às necessidades do usuário.
               Confira <a href="https://raquel-maia.github.io/SAP010-data-lovers/index.html"target="_blank"
              > aqui </a> e o código fonte <a href="https://github.com/raquel-maia/SAP010-data-lovers" target="_blank"
              > aqui </a>.</p>
              <br>
            <h3>My Links</h3>
            <p>Site para centralizar os links mais importantes em um só lugar. Desenvolvido com HTML e CSS no curso StepOne. Confira <a href="https://raquel-maia.github.io/my-links/" target="_blank"
              > aqui </a> e o código fonte <a href="https://github.com/raquel-maia/my-links.git" target="_blank"
              > aqui </a>. </p>
              <br>
              Clique para ver mais projetos 
              <a href="https://github.com/raquel-maia" target="_blank"
                > <i class="fa-brands fa-github"></i></a
              >
              
  
          </section>
          <a href="./cv-raquel.pdf" download="cv-raquel.pdf">Baixar PDF</a>
          <footer>Última atualização: 01/09/2023 </footer>
        </div>
      </div>
      <script src="script.js"></script>
    </body>
  </html>
  `; // Substitua com seu HTML
 // Carregue o conteúdo HTML
 await page.setContent(htmlContent);

 // Aguarde até que o elemento do rodapé seja carregado (ou qualquer outro elemento relevante)
 await page.waitForSelector('footer');

 // Adicione o caminho absoluto para o arquivo CSS
 const cssPath = path.resolve(__dirname, 'style.css');

 // Aplique os estilos CSS diretamente na página
 await page.addStyleTag({ path: cssPath });

 // Configurar opções de impressão
 const pdfOptions = {
   path: 'meu_documento.pdf',
   format: 'A4',
   color:'black',
   margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' },
 };

 // Gere o PDF
 await page.pdf(pdfOptions);

 console.log('PDF gerado com sucesso');
 await browser.close();
})();