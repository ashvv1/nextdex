import { useRouter } from "next/router";
import { useEffect, useState, useMemo } from 'react';
import cache from "memory-cache";
import Head from 'next/head';
import styles from '../../styles/Pokemon.module.css';
import {isMobile} from 'react-device-detect';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [filterInput, setFilterInput] = useState("");
    const [hydrated, setHydrated] = useState(false);

    const router = useRouter()

    useEffect( () => {
        const fetchPokeData = async () => {
            const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000'
            if (pokemonList.length < 1) {
                const pokemonData = cache.get(url)
                if(pokemonData){
                    setPokemonList(pokemonData);
                }else{
                    const hours = 24;
                    const response = await fetch(url);
                    const data = await response.json();
                    cache.put(url, data.results.flat(), hours * 1000 * 60 * 60);
                    setPokemonList(data.results.flat());
                }    
            }
        }

        fetchPokeData();
       
    }, [pokemonList])

	useEffect(() => {
		// This forces a rerender, so the date is rendered
		// the second time but not the first
		setHydrated(true);
	}, []);

    const filteredList = useMemo(() => {
        if (pokemonList.length > 1) {
            return pokemonList.filter(pokemon => pokemon.name.includes(filterInput))
        } else {
            return []
        }

    }, [filterInput, pokemonList])

    const handlePokemonSelect = (name) => {
        {/*name after /pokemon will trigger [name].js which will render relevant information to that name*/}
        router.push(`/pokemon/${name}`)
    }

    const handleArrowDown = (e) => {
        const activeElement = document.activeElement
        if (e.key == 'ArrowDown') {
            if (activeElement.tagName === 'INPUT') {   
                activeElement.nextSibling.focus()
            }
        }
    }

    const selectEnter = (e, name) => {
        const activeElement = document.activeElement
        if (e.key == 'Enter') {
            if (activeElement.tagName === 'SELECT') {
                handlePokemonSelect(name)
            }
        }
    }

    if (!hydrated) {
		// Returns null on first render, so the client and server match
		return null;
	}

    return (
        <>
            <Head>
                <title>POKEMON SEARCH</title>
                <meta name="description" content="A pokedex made using Next.js" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.pokemonPage}>
                <div className="header">
                    <button onClick={() => router.push('/')}>Home</button>
                    <h1>POKEMON SEARCH</h1>
                </div>
                <div className={styles.searchGroup}>
                    <input placeholder="...Pokemon Name" onChange={(e) => setFilterInput(e.target.value.toLowerCase())} onKeyDown={(e) => handleArrowDown(e)}></input>
                    {!isMobile ? (
                    <select 
                    name="pokemon" 
                    id="pokemon-select"
                    onKeyDown={(e) => selectEnter(e, e.target.value)}
                    className={`${styles.dropdownList} ${filteredList.length < 1 && styles.hidden}`}
                    size={filteredList.length}
                    onChange={(e) => isMobile && handlePokemonSelect(e.target.value)}
                       >
                        {pokemonList.length > 0 &&
                            ((filteredList.length > 0) ?
                                (filteredList.map(pokemon => (
                                    <option key={pokemon.name}
                                        onClick={() => handlePokemonSelect(pokemon.name)}
                                        className={styles.listItem}
                                        value={pokemon.name}
                                    >{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</option>
                                ))) :
                                (<option>No Match</option>)
                            )
                        }
                    </select>
                    ) :
                    (
                    <div 
                className={`${styles.dropdownList} ${filteredList.length < 1 && styles.hidden}`}
                    >
                    {pokemonList.length > 0 &&
                        ((filteredList.length > 0) ?
                            (filteredList.map(pokemon => (
                                <div key={pokemon.name}
                                    onClick={() => handlePokemonSelect(pokemon.name)}
                                    className={styles.listItem}
                                >{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</div>
                            ))) :
                            (<div>No Match</div>)
                        )
                    }
                </div>
                    )}
                </div>
            </main>

        </>

    );
};

export default PokemonList;