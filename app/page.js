'use client'

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

  const[pokemons, setPokemons] = useState([]);
  const[pesquisa, setPesquisa] = useState("");

  const[erroPesquisa, setErroPesquisa] = useState(false);

  //Função Assincrona carrega o site primeiro e depois  joga os dados
  async function busca(){

    try{
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/"+pesquisa);

      const data = response.data;
      setPokemons([data]);
      setErroPesquisa(false);
    }catch(e){
      setErroPesquisa(true);
    }
  }

  async function buscaTodos(){
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    const data = response.data.results;
    setPokemons(data);
  }

  useEffect( ()=> {buscaTodos()}, [] );

  return (
    <div>

      <h1>Pokedex</h1>
      
      <input onChange={(e)=> setPesquisa(e.target.value) } className="p-2 px-5 text-sm " placeholder="Qual é o pokemon:" />
      <button onClick={()=> busca()} className="p-2 px-5 ml-2 text-sm " >Pesquisar</button>

      {
        erroPesquisa == true && <p className="text-red-500" >Erro ao pesquisar...</p>
      }
        
      <hr/>

      {

        pokemons == 0 ?
            <p>Carregando...</p>
        :
          pokemons.map( (i, index) =>
            <div>
            <h2>{i.name}</h2>
            <p>ID: <strong>{index+1}</strong></p>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/"+( i.id ? i.id : index + 1 )+".gif"} />
            {/* <img src={pokemons[0].sprites.other.showdown.front_default} /> */}
          </div>
          )
      }

    </div>
  );
}
