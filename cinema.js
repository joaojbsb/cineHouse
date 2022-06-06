import { readFile } from 'fs/promises';
const catalogo = JSON.parse(await readFile('./database/catalogo.json'));

import { adicionarFilme } from './funcoes/adicionarFilme.js';
import { alterarStatus } from './funcoes/alterarStatus.js';
import { buscarFilme } from './funcoes/buscarFilme.js';
import { listarFilmesDeLongaDuracao } from './funcoes/listarFilmesDeLongaDuracao.js';
import {listarFilmesEmCartaz } from './funcoes/listarFilmesEmCartaz.js';
import { listarTodosOsFilmes } from './funcoes/listarTodosOsFilmes.js';
import { listarTodosOsFilmesForEach } from './funcoes/listarTodosOsFilmesForEach.js';


//import { listarTodosOsFilmes } from './funcoes/listarTodosOsFilmes.js';
//const buscarFilme = require('./funcoes/buscarFilme');
//const listarTodosOsFilmesForEach = require('./funcoes/listarTodosOsFilmesForEach');





console.log(listarTodosOsFilmesForEach(catalogo));
//console.log(listarFilmesDeLongaDuracao(catalogo));
//console.log(alterarStatus(catalogo, 2));







