🎬 Movie App
Este é um projeto de uma aplicação web para listar e explorar filmes, com base na API do The Movie Database (TMDB). A aplicação permite pesquisar filmes, aplicar filtros de gênero e ordenação, alternar entre temas claro e escuro, e visualizar detalhes de cada filme.

📋 Requisitos
Node.js (v14 ou superior)
Yarn (ou npm, mas recomendamos Yarn para manter a consistência com o projeto)
🚀 Instalação e Configuração
1. Clonar o Repositório
bash
Copiar código
git clone <URL-DO-REPOSITORIO>
cd movie-app
2. Instalar Dependências
bash
Copiar código
yarn install
ou

bash
Copiar código
npm install
3. Configurar Variáveis de Ambiente
Antes de iniciar a aplicação, é necessário criar um arquivo .env.local na raiz do projeto para armazenar as variáveis de ambiente. Um exemplo de como esse arquivo deve ser configurado está abaixo:

Exemplo .env.local
env
Copiar código
# Chave da API do The Movie Database (TMDB)
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here

# URL Base da API do TMDB
NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3

# Outras configurações opcionais, se necessário
Nota: Substitua your_tmdb_api_key_here pela sua chave de API do TMDB. Você pode obter uma chave criando uma conta em TMDB e acessando as configurações de API.

4. Executar a Aplicação
Após configurar o arquivo .env.local, inicie a aplicação em modo de desenvolvimento:

bash
Copiar código
yarn dev
ou

bash
Copiar código
npm run dev
Acesse a aplicação no navegador: http://localhost:3000.

🛠 Tecnologias Utilizadas
Next.js: Framework React para renderização server-side e geração estática.
React: Biblioteca JavaScript para construção de interfaces de usuário.
Styled Components: Para estilização baseada em componentes.
TypeScript: Superset do JavaScript que adiciona tipagem estática.
Radix Colors: Sistema de cores consistente para temas claro e escuro.
Axios: Para chamadas HTTP à API do TMDB.
React Icons: Para adicionar ícones na interface de forma fácil.
React Hook Form: Para gerenciamento de formulários e validação.
Yarn: Gerenciador de pacotes para instalação de dependências.
📂 Estrutura de Pastas
/components: Contém componentes reutilizáveis, como MovieList, Pagination, SearchFilters, etc.
/contexts: Gerencia estados globais, como tema e gêneros de filmes.
/pages: Páginas da aplicação, incluindo a home e a página de detalhes dos filmes.
/public: Arquivos públicos, como imagens e fontes.
/services: Módulos para chamadas à API do TMDB.
/styles: Configurações globais de estilo, temas e componentes estilizados.
🔧 Funcionalidades Implementadas
Pesquisa de Filmes: Digite o nome do filme para procurar na API do TMDB.
Filtros: Filtros por gênero e ordenação (mais recentes, populares, melhor avaliados).
Tema Escuro/Claro: Alternância entre temas com cores consistentes usando Radix Colors.
Paginação: Carregue múltiplas páginas de resultados de forma simples.
Exibição de Detalhes: Visualize informações detalhadas de cada filme, incluindo trailer, data de lançamento, popularidade e gênero.
📋 Instruções de Desenvolvimento
Adicionar Novos Componentes
Crie uma nova pasta dentro de /components.
Adicione o componente .tsx e um arquivo de estilos correspondente .ts para manter o CSS organizado.
Atualize os componentes pais e configure o tema usando styled-components e as cores do Radix.
Alterar o Tema Padrão
Para ajustar o tema claro/escuro, edite o arquivo /styles/themes.ts e ajuste as cores conforme necessário. O tema é controlado pelo estado global, gerenciado pelo ThemeContext.

Gerenciamento de Gêneros
Os gêneros são obtidos da API do TMDB e traduzidos para português usando um mapeamento definido no contexto de gênero (GenreContext). Qualquer nova tradução ou ajuste pode ser feito diretamente nesse contexto.

🔧 Ajustes Necessários
Cores Personalizadas: Ajuste as cores de acordo com a identidade visual desejada. Elas estão configuradas em themes.ts.
Melhoria da Interface: Ajustar a responsividade ou adicionar novos ícones usando o pacote React Icons.
Implementar Novos Filtros: Se necessário, novos filtros podem ser adicionados diretamente no componente SearchFilters.
📝 Licença
Este projeto é distribuído sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.