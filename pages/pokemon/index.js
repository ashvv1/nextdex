import { useRouter } from "next/router";
import { useEffect, useState, useMemo } from 'react';
import Head from 'next/head';
import styles from '../../styles/Pokemon.module.css'

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [filterInput, setFilterInput] = useState("");

    const router = useRouter()

    useEffect( () => {
  if(pokemonList.length<1){
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000')
    .then((res) => res.json())
    .then((data) => {
      setPokemonList(data.results.flat())
    })
  }
           
    }, [pokemonList])

    const filteredList = useMemo(() => {
        if(pokemonList.length > 1){
            return pokemonList.filter(pokemon => pokemon.name.includes(filterInput))
        }else{
            return []
        }
        
    }, [filterInput, pokemonList])

    const handlePokemonSelect = (url) => {
        const urlArray = url.split("/")
        const pokemonId = urlArray[urlArray.length -2]
        console.log()
        router.push(`/pokemon/${pokemonId}`)
    }

    return (
        <>
        <Head>

        </Head>
        <main className={styles.pokemonPage}>
            <h1>POKEMON SEARCH</h1>
            <div className={styles.searchGroup}>
            <input placeholder="...Pokemon Name" onChange={(e) => setFilterInput(e.target.value.toLowerCase())}></input>
            <div className={styles.dropdownList}>
            {pokemonList.length> 0 ?
            ((filteredList.length > 0 && filterInput!="") ?
                (filteredList.map(pokemon => (
                   <p key={pokemon.name} onClick={() => handlePokemonSelect(pokemon.url)} className={styles.listItem}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
                ))):
                (<p>{filterInput == "" ?("Type name to search"):("No Match")}</p>)
                )
                :
                (<p>...Fetching List</p>)
                }
    
            </div>
            </div>
        </main>

    </>

    );
};

export default PokemonList;