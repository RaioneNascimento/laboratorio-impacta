const m1 = require('./mod1');
// para facilitar a leitura do código decralamos o módulo direto
const { mensagem } = require('./mod2');

m1('Carregando uma única função modular');
mensagem('Carregando objeto com funções modulares');