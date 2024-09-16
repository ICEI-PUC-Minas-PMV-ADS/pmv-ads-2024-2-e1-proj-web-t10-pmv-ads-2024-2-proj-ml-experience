# Introdução

[Aqui a equipe deve criar um texto descritivo com a visão geral do problema abordado, apresentando o ambiente e as situações envolvidas no problema.]

O projeto tem como objetivo desenvolver uma página da internet, que simule um chat interativo com uma personalidade virtual específica. A página irá permitir que o usuário consiga escolher, ou criar, essas personas, de acordo com sua necessidade. A personalidade será gerada utilizando modelos de linguagem natural (inteligência artificial de conversação) locais, como o Ollama, ou via integração com a inteligência artificial do ChatGPT . O foco da página de chat é facilitar a criação de personalidades, com elementos visuais e intuitivos, fáceis de se utilizar e entender.
Esse chat será utilizado para criar personalidades virtuais que possam servir como apoio em diversos contextos, sejam eles de entretenimento, assistência ou educação. Por exemplo, o chat pode ser configurado para que uma criança internada possa conversar com seu super-herói favorito, proporcionando conforto e motivação durante um período difícil. Da mesma forma, pode ser usado para desenvolver um assistente pessoal para idosos, capaz de fornecer suporte em emergências. Também servirá para serviços, como recepcionista virtual de um hotel, para ser efetuado seu check-in de forma mais rápida e eficiente, podendo ainda quebrar possíveis barreiras sociais ou de linguagem.
Este documento visa detalhar o desenvolvimento, as funcionalidades e os objetivos da página de chat interativo, destacando suas aplicações e o impacto positivo que pode ter na vida dos usuários.

## Problema
[Aqui a equipe deve fornecer uma descrição detalhada do problema a ser resolvido. Não é o momento adequado para abordar questões técnicas relacionadas ao desenvolvimento da aplicação. O objetivo é compreender e comunicar de maneira precisa qual é o desafio ou necessidade que motiva a criação da aplicação.]

Este link pode ajudar a equipe a entender mais sobre definição do problema: [Objetivos, Problema de pesquisa e Justificativa.](https://medium.com/@versioparole/objetivos-problema-de-pesquisa-e-justificativa-c98c8233b9c3)

À medida que a tecnologia avança, assistentes virtuais baseados em inteligência artificial(I.A) estão se tornando mais comuns, como os chatbots que usamos para as mais diversas soluções interativas. Porém, esses assistentes ainda são bastante limitados e muitas vezes têm um estilo de conversa bastante rígido e impessoal. 
A falta de ferramentas interativas e acessíveis para criar personagens virtuais específicos limita as possibilidades de oferecer soluções para as mais diversas áreas de atuação como hospitalares, hotelaria, entre outras.
Profissionais e desenvolvedores que desejam criar experiências de interação inovadora enfrentam desafios técnicos e de design ao tentar incorporar inteligências artificiais de forma intuitiva e acessível. A criação de personalidades digitais que respondam de maneira empática e relevante é uma tarefa complexa, sem uma plataforma dedicada que simplifique esse processo.
Este projeto visa criar uma interface que permita ao usuário não apenas interagir com um programa capaz de reconhecer e gerar textos(LLM), mas também resolver o problema que se tem ao utilizar a ferramenta de criação de personalidades. Com isso chegamos na ideia de que, ao invés de conversar com um assistente que sempre responde da mesma forma, você poderá ajustar o assistente para se comportar de maneira mais amigável, formal, divertida ou qualquer outro estilo que você preferir, tornando a interação mais natural e agradável às suas preferências em diversas situações.


## Objetivos

[Aqui a equipe deve realizar uma descrição detalhada dos objetivos do trabalho, ressaltando quais as questões principais do problema a serem resolvidas pelo projeto, não é a hora de apresentar requisitos detalhados.]
 
Este link pode ajudar a equipe a entender mais sobre definição dos objetivos: [Objetivos, Problema de pesquisa e Justificativa.](https://medium.com/@versioparole/objetivos-problema-de-pesquisa-e-justificativa-c98c8233b9c3)

1. Desenvolver uma interface web intuitiva: Criar uma tela de chat onde o usuário possa escolher entre personalidades predefinidas ou criar a sua própria, definindo o nome e o comportamento da personalidade.
2. Personalização avançada: Proporcionar ao usuário a capacidade de personalizar profundamente a experiência de chat, criando personalidades que atendam às suas necessidades específicas, sejam elas para entretenimento, aprendizado ou qualquer outra finalidade.
3. Integração com tecnologias de ponta: Garantir que a interface funcione de forma eficaz tanto com modelos de inteligência artificial locais quanto com serviços online, como o ChatGPT.
4. Experiência de usuário envolvente: Oferecer uma experiência de conversa que seja natural e adaptada à personalidade escolhida ou criada pelo usuário, tornando a interação mais rica e satisfatória.

## Justificativa

[Aqui a equipe deve descrever a importância ou a motivação para trabalhar com o problema definido. Indique as razões pelas quais a equipe escolheu o problema e definiu os objetivos.

Devem ser apresentados dados de fontes relevantes e confiáveis sobre o problema, inserindo-o como alvo de estudo. Sugere-se que a equipe utilize questionários, entrevistas e dados estatísticos, que devem ser apresentados, com o objetivo de esclarecer detalhes do problema que será abordado pela equipe.]

Este link pode ajudar a equipe a formular a justificativa: [Como montar a justificativa.](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

A personalização das interações com assistentes virtuais é uma tendência crescente que visa tornar a experiência do usuário mais relevante e satisfatória. Ao oferecer diferentes personalidades, o projeto busca atender a uma demanda por maior customização nas interações com LLMs, explorando novos horizontes no campo de interfaces conversacionais. Além disso, o desenvolvimento inicial focado no front-end permitirá que a equipe valide a viabilidade e a aceitação da interface antes de implementar o backend.
Cada vez mais, as pessoas querem que suas interações com assistentes virtuais, como aqueles que encontramos em nossos celulares ou computadores, sejam mais personalizadas e agradáveis. Isso significa que, em vez de todas as respostas soarem da mesma maneira, os usuários podem escolher diferentes estilos de personalidade para o assistente, tornando a conversa mais interessante e ajustada a sua necessidade. Este projeto está sendo desenvolvido para a solução de permitir que você escolha a "personalidade" do assistente virtual com quem está conversando. Isso pode tornar a experiência mais única e relevante para cada pessoa.
No começo da elaboração do projeto, os desenvolvedores estão se concentrando em criar a parte visual e interativa, aquela que você vê e usa na tela (o chamado front-end). Eles fazem isso para testar e ver se as pessoas gostam dessa ideia antes de passar para a parte mais técnica e complicada que acontece nos bastidores (o backend). Dessa forma, eles podem garantir que o projeto realmente atende às expectativas e necessidades dos usuários antes de avançar para as próximas etapas.

## Público-Alvo

[Aqui é necessário descrever os atores envolvidos no problema, destacando os diferentes perfis de usuários. O propósito é apresentar as características, necessidades, conhecimentos prévios e experiência com a tecnologia do público-alvo.

Sugere-se que a equipe utilize questionários e/ou entrevistas a fim de conhecer os atores que compõem o público alvo.]

Os links abaixo podem ajudar a equipe a conhecer um pouco mais sobre o público-alvo. 

> - [Público-alvo](https://blog.hotmart.com/pt-br/publico-alvo/)
> - [Público-alvo: o que é, tipos, como definir seu público e exemplos](https://klickpages.com.br/blog/publico-alvo-o-que-e/)

O público-alvo principal do projeto de software para criação de Personas são empresas e profissionais que buscam inovar na forma como interagem com seus clientes ou pacientes, oferecendo experiências mais envolventes e personalizadas. Este software é ideal para desenvolvedores que trabalham com soluções de interatividade, especialmente em setores como hospitalidade e saúde, onde a personalização da experiência pode fazer toda a diferença.
Por exemplo, imagine uma aplicação onde o software é utilizado para criar Personas inspiradoras que podem interagir diretamente com os usuários, como no caso da Alice, uma menina de 7 anos que está internada no hospital com uma doença grave. Alice tem como objetivo conversar com a Mulher Maravilha, sua heroína favorita, que poderia ser uma das Personas criadas pelo software. A persona da Mulher Maravilha seria programada para interagir com Alice de forma encorajadora e positiva, ajudando-a a enfrentar os desafios de sua situação de maneira mais leve e motivadora.
Além disso, esse projeto também proporciona que outros membros da comunidade de desenvolvimento de software e machine learning engajem com uma interface dinâmica e interativa, em conjunto com uma plataforma de I.A., algo que sem dúvida será de utilidade aos seus estudos e desenvolvimento de aplicações.
Dessa forma, o software não só atende a necessidades de marketing e engajamento, mas também se torna uma ferramenta valiosa em contextos terapêuticos, promovendo bem-estar e fortalecendo o vínculo emocional com o usuário. Ele se destaca por oferecer uma solução versátil que pode ser adaptada a diferentes necessidades, garantindo interações mais significativas e impactantes, especialmente para crianças como Alice, que precisam de apoio e inspiração durante momentos difíceis.
