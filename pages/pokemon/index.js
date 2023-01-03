import { useRouter } from "next/router";
import { useEffect, useState, useMemo } from 'react';
import Head from 'next/head';
import styles from '../../styles/Pokemon.module.css'

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [filterInput, setFilterInput] = useState("");

    const router = useRouter()

    useEffect(() => {
        if (pokemonList.length < 1) {
            fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000')
                .then((res) => res.json())
                .then((data) => {
                    setPokemonList(data.results.flat())
                })
        }

    }, [pokemonList])

    const filteredList = useMemo(() => {
        if (pokemonList.length > 1) {
            return pokemonList.filter(pokemon => pokemon.name.includes(filterInput))
        } else {
            return []
        }

    }, [filterInput, pokemonList])

    const handlePokemonSelect = (url) => {
        const urlArray = url.split("/")
        const pokemonId = urlArray[urlArray.length - 2]
        console.log()
        router.push(`/pokemon/${pokemonId}`)
    }

    const handleArrowDown = (e) => {
        const activeElement = document.activeElement
        if (e.key == 'ArrowDown') {
            if (activeElement.tagName === 'INPUT') {
                console.log('input')
                activeElement.nextSibling.focus()

            }
        }
    }

    const selectEnter = (e, url) => {
        const activeElement = document.activeElement
        if (e.key == 'Enter') {
            console.log(activeElement.value)
            if (activeElement.tagName === 'SELECT') {
                handlePokemonSelect(url)
            }
        }
    }

    return (
        <>
            <Head>

            </Head>
            <main className={styles.pokemonPage}>
                <div className="header">
                    <button onClick={() => router.push('/')}>Home</button>
                    <h1>POKEMON SEARCH</h1>
                </div>
                <div className={styles.searchGroup}>
                    <input placeholder="...Pokemon Name" onChange={(e) => setFilterInput(e.target.value.toLowerCase())} onKeyDown={(e) => handleArrowDown(e)}></input>
                    <select name="pokemon" id="pokemon-select" onKeyDown={(e) => selectEnter(e, e.target.value)} className={`${styles.dropdownList} ${filteredList.length < 1 && styles.hidden}`} size={filteredList.length} >
                        {pokemonList.length > 0 &&
                            ((filteredList.length > 0) ?
                                (filteredList.map(pokemon => (
                                    <option key={pokemon.name}
                                        onClick={() => handlePokemonSelect(pokemon.url)}
                                        className={styles.listItem}
                                        value={pokemon.url}
                                    >{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</option>
                                ))) :
                                (<option>No Match</option>)
                            )
                        }
                    </select>

                </div>
            </main>

        </>

    );
};

export default PokemonList;