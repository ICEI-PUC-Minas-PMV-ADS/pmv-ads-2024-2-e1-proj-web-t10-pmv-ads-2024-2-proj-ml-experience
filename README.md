# ML-Xperience

`Análise e Desenvolvimento de Sistemas`

`Desenvolvimento de Aplicação Web Front-End - Turma 10 - 2024/2`

`2024.2`

Interface customizável de conversação/interação com inteligencia artificial.

# ML-Xperience

### Equipe do projeto:
- Antônio Real
- Diego Marques
- Igor Nantes
- Ivan Peixoto
- Túlio Pimenta
- Yago Lobo

**Professor Tutor:**  
Humberto Azevedo Nigri do Carmo

---

## Sumário
1. [Documentação de Contexto](#documentação-de-contexto)
   - [Introdução](#introdução)
   - [Problema](#problema)
   - [Objetivos](#objetivos)
   - [Justificativa](#justificativa)
   - [Público-alvo](#público-alvo)
2. [Especificação do Projeto](#especificação-do-projeto)
   - [Perfis de Usuários](#perfis-de-usuários)
   - [Histórias de usuários](#histórias-de-usuários)
   - [Requisitos do Projeto](#requisitos-do-projeto)
     - [Requisitos Funcionais](#requisitos-funcionais)
     - [Requisitos não funcionais](#requisitos-não-funcionais)
3. [Referências Bibliográficas](#referências-bibliográficas)

---

## Documentação de Contexto

### Introdução
O projeto tem como objetivo desenvolver uma página da internet que simule um chat interativo com uma personalidade virtual específica. A página irá permitir que o usuário consiga escolher ou criar essas personas, de acordo com sua necessidade. A personalidade será gerada utilizando modelos de linguagem natural (inteligência artificial de conversação) locais, como o Ollama, ou via integração com a inteligência artificial do ChatGPT.

Este chat poderá ser utilizado em diversos contextos, como entretenimento, assistência ou educação, por exemplo, proporcionando conforto e motivação a uma criança hospitalizada ao permitir que ela converse com seu super-herói favorito.

### Problema
Apesar do avanço tecnológico, os assistentes virtuais ainda são limitados em termos de interação, sendo impessoais e rígidos. A criação de personagens virtuais específicos para soluções interativas, como na saúde e hotelaria, é limitada pela falta de ferramentas acessíveis e personalizáveis. Esse projeto visa solucionar essa questão, oferecendo uma plataforma para criar assistentes que possam ser ajustados conforme o estilo desejado pelo usuário.

### Objetivos
1. Desenvolver uma interface web intuitiva para criação de personalidades virtuais.
2. Proporcionar personalização avançada para atender às necessidades do usuário.
3. Garantir integração com modelos de IA locais e serviços online, como ChatGPT.
4. Oferecer uma experiência de conversa natural e adaptada à personalidade escolhida ou criada.

### Justificativa
A personalização das interações com assistentes virtuais é uma demanda crescente. Este projeto visa tornar essas interações mais relevantes, oferecendo uma plataforma que permita criar assistentes com diferentes estilos de personalidade, atendendo às necessidades dos usuários de forma mais única e envolvente.

### Público-alvo
O público-alvo inclui empresas, desenvolvedores, profissionais da saúde e da hospitalidade que buscam interações mais personalizadas com seus clientes ou pacientes, assim como usuários casuais que desejam criar assistentes virtuais para entretenimento ou educação.

---

## Especificação do Projeto

### Perfis de Usuários
- **Sebastião (Professor)**: Deseja um assistente para organizar seus documentos escolares, inspirado na dinâmica Batman-Alfred.
- **Roberta (Comediante)**: Quer usar uma IA para debater com o personagem Tiririca em suas apresentações.
- **Alice (Criança)**: Internada no hospital, deseja conversar com sua heroína, Mulher Maravilha.
- **João Gabriel (Estudante)**: Precisa de uma IA com personalidade autêntica para entrevistar um detetive em um trabalho escolar.
- **Mateus (Desenvolvedor)**: Busca testar diferentes personalidades e IA em seus projetos pessoais.

### Histórias de usuários
- **Professor nerd**: Deseja um assistente personalizado que organize seus documentos escolares.
- **Comediante youtuber**: Quer realizar um debate político com o personagem Tiririca.
- **Criança internada**: Deseja conversar com a Mulher Maravilha.
- **Estudante moderno**: Precisa entrevistar um detetive com personalidade autêntica.
- **Desenvolvedor**: Quer testar diferentes personalidades em seus projetos.

### Requisitos do Projeto

#### Requisitos Funcionais
- **RF-01**: Permitir ao usuário escolher entre diferentes personalidades no chat.
- **RF-02**: O usuário deve poder criar uma nova personalidade com nome e "prompt".
- **RF-03**: Permitir conversação contínua com a personalidade escolhida.
- **RF-04**: A interface deve se conectar com LLMs locais e a API do ChatGPT.
- **RF-05**: As respostas devem corresponder à personalidade selecionada.
- **RF-06**: Permitir login para salvar preferências e personalidades.

#### Requisitos Não Funcionais
- **RNF-01**: Performance - a interface deve carregar rapidamente.
- **RNF-02**: Interface responsiva para diferentes dispositivos.
- **RNF-03**: Compatibilidade com navegadores modernos.
- **RNF-04**: A aplicação deve responder rapidamente às ações do usuário.
- **RNF-05**: Suportar aumento de usuários sem perder desempenho.
- **RNF-06**: Alta disponibilidade e resiliência a falhas.
- **RNF-07**: Segurança dos dados contra acessos não autorizados.
- **RNF-08**: Interface intuitiva e acessível para todos os usuários.
- **RNF-09**: Código modular e fácil de atualizar.
- **RNF-10**: Funcionamento em múltiplos navegadores e dispositivos.
- **RNF-11**: Facilidade de migração entre diferentes ambientes de hospedagem.

---

## Referências Bibliográficas
- ABEDIN, Babak; MESKE, Christian; JUNGLAS, Iris; RABHI, Fethi; MOTAHARI-NEZHAD, Hamid R. **Designing and Managing Human-AI Interactions**. Information Systems Frontiers, 2022. Disponível em: [https://doi.org/10.1007/s10796-022-10313-1](https://doi.org/10.1007/s10796-022-10313-1). Acesso em: 22 ago. 2024.
- VÖSSING, Michael; KÜHL, Niklas; LIND, Matteo; SATZGER, Gerhard. **Designing Transparency for Effective Human-AI Collaboration**. Information Systems Frontiers, 2022. Disponível em: [https://doi.org/10.1007/s10796-022-10284-3](https://doi.org/10.1007/s10796-022-10284-3). Acesso em: 22 ago. 2024.


# Documentação

<ol>
<li><a href="documentos/01-Documentação de Contexto.md"> Documentação de Contexto</a></li>
<li><a href="documentos/02-Especificação do Projeto.md"> Especificação do Projeto</a></li>
<li><a href="documentos/03-Metodologia.md"> Metodologia</a></li>
<li><a href="documentos/04-Projeto de Interface.md"> Projeto de Interface</a></li>
<li><a href="documentos/05-Template padrão da Aplicação.md"> Template padrão da Aplicação</a></li>
<li><a href="documentos/06-Programação de Funcionalidades.md"> Programação de Funcionalidades</a></li>
<li><a href="documentos/07-Plano de Testes de Software.md"> Plano de Testes de Software</a></li>
<li><a href="documentos/08-Registro de Testes de Software.md"> Registro de Testes de Software</a></li>
<li><a href="documentos/09-Referências.md"> Referências Bibliográficas</a></li>
</ol>

# Hospedagem

* [ML-Experience](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-2-e1-proj-web-t10-pmv-ads-2024-2-proj-ml-experience/codigo-fonte/src/) 

# Código-Fonte

* <a href="codigo-fonte/README.md">Código Fonte</a>

# Apresentação

* <a href="apresentacao/README.md">Apresentação do Projeto</a>
