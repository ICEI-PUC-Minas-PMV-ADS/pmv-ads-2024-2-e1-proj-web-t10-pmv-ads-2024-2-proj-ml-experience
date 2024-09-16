# Especificação do Projeto

## Perfis de Usuários

[Enumere e faça o detalhamento dos perfis de usuários. Utilize o modelo de tabela abaixo para sintetizá-los.]

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Nome </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">...</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>...</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

[Apresente aqui as histórias de usuários que são relevantes para o projeto da solução.]

> **Link Útil**:
> - [Como escrever boas histórias de usuário](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

[Utilize o modelo de tabela abaixo para apresentar as histórias de usuários.]

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Professor nerd | Ter um assistente de inteligência artificial que organize meus documentos e trabalhos escolares, com alto grau de personalização | Recriar a dinâmica de interação que admiro, como a de Batman com Alfred ou do Homem de Ferro com Jarvis, e tornar minha experiência de organização única e eficiente. |
| Comediante youtuber | Usar uma inteligência artificial com personalidade para realizar um debate político com Tiririca em minhas apresentações. | Prover entretenimento de qualidade e inovador para o meu público. |
| Criança internada | Conversar com a Mulher Maravilha através de uma inteligência artificial que simule bem sua personalidade. | Sentir-se mais feliz e distraída durante o período de internação no hospital. |
| Estudante moderno | Entrevistar um detetive utilizando uma inteligência artificial que tenha uma personalidade autêntica. | Realizar um trabalho escolar que exija uma interação realista com um profissional da área de investigação. |
| Desenvolvedor | Testar diferentes personalidades e configurações de inteligência artificial voltadas para conversação em uma interface integrada ao meu backend. | Melhorar meus projetos pessoais com eficiência e personalização na criação de diálogos inteligentes. |
| Professor | Desejo explorar as personalidades como um assistente de apoio no ensino, adaptando a dificuldade das perguntas e a forma de explicar os conteúdos conforme a faixa etária e o nível de entendimento dos alunos. | Para usar o assistente virtual em sala de aula, criando uma experiência de aprendizado mais interativa e adaptada aos diferentes níveis de conhecimento dos seus alunos. |
| Aposentada | Desejo um assistente que seja fácil de usar e que possa ser personalizável. | Para usar o assistente virtual para lembrá-la de tomar medicamentos e interações humanizadas. |
| ...                | ...                       | ...                              |



## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  Permitir ao usuário escolher entre diferentes personalidades no chat. | Alta | 
| RF-02 |  O usuário deve poder criar uma nova personalidade, dando-lhe um nome e escrevendo um "prompt" (instruções) que definam como ela deve se comportar. | Alta |
| RF-03 |  Permitir que o usuário inicie e mantenha uma conversação contínua com a personalidade escolhida. | Média |
| RF-04 |  A interface deve ser capaz de se conectar tanto com LLMs locais quanto com a API do ChatGPT. | Alta |
| RF-05 |  Apresentar respostas que correspondam à personalidade selecionada. | Média |
| RF-06 |  O sistema deve permitir que o usuário faça login para salvar suas preferências e personalidades criadas. | Média |
|  ...  |  ...                    | ...   |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  Performance: A interface deve carregar rapidamente. | Média | 
| RNF-02 |  Responsividade: Interface responsiva para uso em diferentes dispositivos. | Alta |
| RNF-03 |  Compatibilidade: A interface deve ser compatível com os principais navegadores modernos. | Alta |
| RNF-04 |  Desempenho: A aplicação deve responder rapidamente às ações do usuário. | Média |
| RNF-05 |  Escalabilidade: O sistema deve suportar o aumento no número de usuários sem perder desempenho. | Alta |
| RNF-06 |  Confiabilidade: A aplicação deve ter alta disponibilidade e ser resiliente a falhas. | Alta |
| RNF-07 |  Segurança: A aplicação deve proteger os dados dos usuários contra acessos não autorizados. | Alta |
| RNF-08 |  Usabilidade: A interface deve ser intuitiva e acessível para todos os usuários. | Alta |
| RNF-09 |  Manutenibilidade: O código deve ser modular e fácil de atualizar. | Média |
| RNF-10 |  Compatibilidade: A aplicação deve funcionar em múltiplos navegadores e dispositivos. | Média |
| RNF-11 |  Portabilidade: A aplicação deve ser fácil de migrar entre diferentes ambientes de hospedagem. | Média |
| ...    |  ...                    | ...   |

**Prioridade: Alta / Média / Baixa. 

