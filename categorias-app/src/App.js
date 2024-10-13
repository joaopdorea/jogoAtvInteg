import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import OpenAI from "openai";




function App() {

   // Lista com as 24 categorias disponíveis



  
   
   const categorias = [
    "reciclavel", "reutilizavel", "biodegradavel", "nao_reciclavel", "demora_muito_para_degradar",
    "poluente", "compostavel", "emite_gases_poluentes_ao_ser_produzido", "energia_intensiva_na_producao", "consome_muita_agua_na_producao",
    "dura_por_muito_tempo", "energeticamente_eficiente", "material_natural", "material_sintetico",
    "causa_microplasticos", "resistente_a_agua", "toxico_para_a_vida_selvagem", "descarbonizacao",
    "leve", "duravel", "baixo_custo_de_producao", "embalagem_de_uso_unico", "impacto_ambiental_positivo", "dificulta_o_crescimento_de_plantas"
  ];

  const categoriasTraduzidas = 
    {reciclavel: "Reciclável",
    reutilizavel: "Reutilizável",
    biodegradavel: "Biodegradável",
    nao_reciclavel: "Não Reciclável",
    demora_muito_para_degradar: "Demora muito para degradar",
    poluente: "Poluente",
    compostavel: "Compostável",
    emite_gases_poluentes_ao_ser_produzido: "Emite gases poluentes ao ser produzido",
    energia_intensiva_na_producao: "Energia intensiva na produção",
    consome_muita_agua_na_producao: "Consome muita água na produção",
    dura_por_muito_tempo: "Consome muita água na produção",
    energeticamente_eficiente: "Energeticamente eficiente",
    material_natural: "Material natural",
    material_sintetico: "Material sintético",
    causa_microplasticos: "Causa microplásticos",
    resistente_a_agua: "Resistente à água",
    toxico_para_a_vida_selvagem: "Tóxico para a vida selvagem",
    descarbonizacao: "Descarbonização",
    leve: "Leve",
    duravel: "Durável",
    baixo_custo_de_producao: "Baixo custo de produção",
    embalagem_de_uso_unico: "Embalagem de uso único",
    impacto_ambiental_positivo: "Impacto ambiental positivo",
    dificulta_o_crescimento_de_plantas: "Dificulta o crescimento de plantas"

  }


  ;

  const itens = [
    {
      nome: "Sacola Plástica",
      reciclavel: false,
      reutilizavel: false,
      biodegradavel: false,
      nao_reciclavel: true,
      demora_muito_para_degradar: true,
      poluente: true,
      compostavel: false,
      emite_gases_poluentes_ao_ser_produzido: true,
      energia_intensiva_na_producao: true,
      consome_muita_agua_na_producao: false,
      dura_por_muito_tempo: false,
      energeticamente_eficiente: false,
      material_natural: false,
      material_sintetico: true,
      causa_microplasticos: true,
      resistente_a_agua: true,
      toxico_para_a_vida_selvagem: true,
      descarbonizacao: false,
      leve: true,
      duravel: false,
      baixo_custo_de_producao: true,
      embalagem_de_uso_unico: true,
      impacto_ambiental_positivo: false,
      dificulta_o_crescimento_de_plantas: true
    },

    {
      "nome": "Lata de alumínio",
      "reciclavel": true,
      "reutilizavel": false,
      "biodegradavel": false,
      "nao_reciclavel": false,
      "demora_muito_para_degradar": true,
      "poluente": true,
      "compostavel": false,
      "emite_gases_poluentes_ao_ser_produzido": true,
      "energia_intensiva_na_producao": true,
      "consome_muita_agua_na_producao": false,
      "dura_por_muito_tempo": false,
      "energeticamente_eficiente": false,
      "material_natural": false,
      "material_sintetico": true,
      "causa_microplasticos": true,
      "resistente_a_agua": true,
      "toxico_para_a_vida_selvagem": true,
      "descarbonizacao": false,
      "leve": true,
      "duravel": false,
      "baixo_custo_de_producao": true,
      "embalagem_de_uso_unico": true,
      "impacto_ambiental_positivo": false,
      "dificulta_o_crescimento_de_plantas": true
    },

    {
      "nome": "Sacola de Tecido",
      "reciclavel": true,
      "reutilizavel": true,
      "biodegradavel": true,
      "nao_reciclavel": false,
      "demora_muito_para_degradar": false,
      "poluente": false,
      "compostavel": true,
      "emite_gases_poluentes_ao_ser_produzido": true,
      "energia_intensiva_na_producao": false,
      "consome_muita_agua_na_producao": true,
      "dura_por_muito_tempo": false,
      "energeticamente_eficiente": true,
      "material_natural": true,
      "material_sintetico": false,
      "causa_microplasticos": true,
      "resistente_a_agua": true,
      "toxico_para_a_vida_selvagem": true,
      "descarbonizacao": false,
      "leve": true,
      "duravel": false,
      "baixo_custo_de_producao": true,
      "embalagem_de_uso_unico": true,
      "impacto_ambiental_positivo": false,
      "dificulta_o_crescimento_de_plantas": true
    },


    {
      "nome": "Teste",
      "reciclavel": true,
      "reutilizavel": true,
      "biodegradavel": true,
      "nao_reciclavel": true,
      "demora_muito_para_degradar": true,
      "poluente": true,
      "compostavel": true,
      "emite_gases_poluentes_ao_ser_produzido": true,
      "energia_intensiva_na_producao": true,
      "consome_muita_agua_na_producao": true,
      "dura_por_muito_tempo": true,
      "energeticamente_eficiente": true,
      "material_natural": true,
      "material_sintetico": true,
      "causa_microplasticos": true,
      "resistente_a_agua": true,
      "toxico_para_a_vida_selvagem": true,
      "descarbonizacao": true,
      "leve": true,
      "duravel": true,
      "baixo_custo_de_producao": true,
      "embalagem_de_uso_unico": true,
      "impacto_ambiental_positivo": true,
      "dificulta_o_crescimento_de_plantas": true
    }


  ]

   const [messages, setMessages] = useState([]);
   const [loading, setLoading] = useState(false);
   
    const sendMessage = async (array) => {

      const boxResposta = document.getElementById("box-resposta");

      let promptCompleto = "Analise as seguintes associações a seguir e explique o porquê de estarem incorretas."

      setLoading(true);

      for(const objeto of array){
        let associacao = objeto["nome"] + "&" + objeto["categoria"]+"   ";
        promptCompleto = promptCompleto + associacao;
      }

      //promptCompleto = "Diga que isso é um teste."
      
      const response = await openai.chat.completions.create({
        messages: [{ role: 'user', content: promptCompleto }],
        model: 'gpt-4o-mini'
    });
    
      boxResposta.innerText = response.choices[0].message["content"];

    }
  
 

  // Estado para armazenar as 12 categorias sorteadas
  const [sorteadas, setSorteadas] = useState([]);
  const[tempoRestante, setTempoRestante] = useState(10);
  const [respostas, setRespostas] = useState([]);
  const [indexAtual, setIndexAtual] = useState(0);
  const [categoriasEscolhidas, setCategoriasEscolhidas] = useState([]);
  const errosLista = [];

  // Função para sortear 12 categorias únicas
  const sortearCategorias = () => {
    const categoriasEmbaralhadas = categorias.sort(() => 0.5 - Math.random());
    const selecionadas = categoriasEmbaralhadas.slice(0, 12);
    setSorteadas(selecionadas);
  };

  const handleCategoriaClick = (categoriaEscolhida) => {
    // Verifica se a categoria já foi escolhida
    if (categoriasEscolhidas.includes(categoriaEscolhida)) {
      return; // Impede de escolher novamente
    }

    // Adiciona a categoria escolhida ao estado
    setCategoriasEscolhidas([...categoriasEscolhidas, categoriaEscolhida]);
    //console.log(`Categoria escolhida: ${categoriasTraduzidas[categoriaEscolhida]}`);
    setTempoRestante((prevTempo) => {
      // Se o tempo acabar, reseta o tempo e troca o item
      
        setIndexAtual((prevIndex) => (prevIndex + 1) % itensSelecionados.length);
        return prevTempo = 10; // Reseta o tempo para 10 segundos
      
      
    })


    const itemSorteado = itensSelecionados[indexAtual]; // Nome do item atual
    const novaResposta = { nome: itemSorteado, categoria: [categoriaEscolhida] }; // Cria o dicionário
    
    setRespostas([...respostas, novaResposta]); // Adiciona a resposta à lista
  };

  // Função para verificar se o botão deve ser desabilitado
  const isCategoriaEscolhida = (categoria) => {
    return categoriasEscolhidas.includes(categoria);
  };

  const sortearItens = (categoria) => {
    const arrayPrincipal = itens.filter((item) => item[categoria] == true)
    return arrayPrincipal[0] ?  arrayPrincipal[0].nome : null;



    
  }


  

  const verificaErros = () => {


    for (const resposta of respostas) {

      
      if(!itens.find((item) => item.nome === resposta["nome"])[resposta["categoria"]]){
        const novoErro = { nome: resposta["nome"], categoria: resposta["categoria"][0]}
        errosLista.push(novoErro);
      }
    }


      return errosLista.length;

  }

  const itensSelecionados = categorias.map(sortearItens)


   // Função que alterna entre os itens a cada 10 segundos
   useEffect(() => {
    const interval = setInterval(() => {
      setTempoRestante((prevTempo) => {
        // Se o tempo acabar, reseta o tempo e troca o item
        if (prevTempo === 1) {
          setIndexAtual((prevIndex) => (prevIndex + 1) % itensSelecionados.length);
          return prevTempo = 10; // Reseta o tempo para 10 segundos
        }
        return prevTempo - 1; // Decrementa o tempo
      });
    }, 1000); // Executa a cada 1 segundo

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [itensSelecionados]);

  // Sortear categorias ao carregar o componente
  useEffect(() => {
    sortearCategorias();
    
  }, []);




  const fimDeJogo = categoriasEscolhidas.length === sorteadas.length;


  let existeErros = false;

  if(fimDeJogo){
    existeErros = verificaErros() > 0; 
  }


  return (
    <div className="App">
      
      
      {/* Exibe "Fim de jogo" se todas as categorias foram selecionadas */}
      {fimDeJogo ? (
        <div>
        <h2>Suas respostas</h2>
        <div className="respostas">
          {respostas.map((resposta) => (
            <button
              key={resposta}
              className={`resposta-btn ${itens.find((item) => item.nome === resposta["nome"])[resposta["categoria"]] ? 'certa' : 'errada'}`}
              disabled={true} // Desabilita o botão se já escolhido
            >
              {`${resposta["nome"]} | ${categoriasTraduzidas[resposta["categoria"]]}`} {/* Exibe o texto associado à categoria */}
            </button>
          ))}
        </div>
        
        {existeErros ? (
          <div>
          <button className="verifica-erros" onClick={() => sendMessage(errosLista)}>Verificar erros</button>
          <div id="box-resposta"> </div>
          </div>
          
          
        ) : (<button className="verifica-erros">Não existem erros</button>)}
        </div>
      ) : (

        <div>

      <h1>Item Sorteado</h1>
      <div className="display-box">
        {/* Exibe o nome do item atual */}
        {itensSelecionados.length > 0 ? itensSelecionados[indexAtual] : "Nenhum item disponível"}
      </div>

      <h2>Tempo restante: {tempoRestante}s</h2>

      <h1>Categorias</h1>


        <div className="categorias">
          {sorteadas.map((categoria) => (
            <button
              key={categoria}
              onClick={() => handleCategoriaClick(categoria)}
              className={`categoria-btn ${isCategoriaEscolhida(categoria) ? 'disabled' : ''}`}
              disabled={isCategoriaEscolhida(categoria)} // Desabilita o botão se já escolhido
            >
              {categoriasTraduzidas[categoria]} {/* Exibe o texto associado à categoria */}
            </button>
          ))}
        </div>

      
        </div>
      )}
    </div>
  );
}

export default App;
