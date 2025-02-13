'use client'

import axios from "axios";
import { useState } from "react";

export default function Home() {

  const[pokemons, setPokemons] = useState([]);
  const[pesquisa, setPesquisa] = useState("");

  //Função Assincrona carrega o site primeiro e depois  joga os dados
  async function busca(){
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/rayquaza");
    const data = response.data;
    console.log(data);
  }

  return (
    <div>

      <h1>Pokedex</h1>
      
      <input className="p-2 px-5 text-sm " placeholder="Qual é o pokemon:" />
      <button onClick={()=> busca()} className="p-2 px-5 ml-2 text-sm " >Pesquisar</button>

      <hr/>

      <h2>Nome</h2>
      <p>ID: <strong> ?? </strong></p>
      <img src="" />

    </div>
  );
}
