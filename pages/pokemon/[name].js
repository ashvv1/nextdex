import { useRouter } from "next/router";
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Pokemon.module.css'

const Pokemon = ({ pokemon }) => {

    const router = useRouter();
    const element = pokemon.types[0].type.name;

    return (
        <>
            <Head>
                <title>{`${pokemon.name.toUpperCase()} Bio`}</title>
                <meta name="description" content="A pokedex made using Next.js" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.pokemonPage}>
                <div className="header">
                    <button onClick={() => router.push('../pokemon')}>BACK</button>
                    <h1>{`${pokemon.name.toUpperCase()} Bio`}</h1>
                </div>
                <div className={`${styles.pokemonCard} ${styles[element]}`}>
                    <div className={styles.description}>
                        <h1 className={styles.cardSection}>NAME: {pokemon.name.toUpperCase()} </h1>
                        <p className={styles.cardSection}>TYPE(s): {pokemon.types.map(type =>
                            <span key={type.type.name}>{type.type.name}{type.slot < pokemon.types.length && ", "}</span>)}
                        </p>
                        <p className={styles.cardSection}>ABILITIES: {pokemon.abilities.map(ability =>
                            <span key={ability.ability.name} className={styles.ability}>{ability.ability.name}{ability.slot < pokemon.abilities.length && ", "}</span>)}
                        </p>
                    </div>

                    <div className={`${styles.cardSection} ${styles.iconSection}`}>
                        <Image
                            src={`${pokemon.sprites.front_default}`}
                            alt="PokemonImage"
                            className={`${styles.icon} `}
                            width={100}
                            height={100}
                            priority
                        />
                    </div>
                </div>
            </main>
        </>
    );
};

{/*generates data every time that page is rendered, allows us to use paramater from route*/}
export const getServerSideProps = async ({ params }) => {

    const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}/`);
    const data = await req.json();

    return {
        props: { pokemon: data },
    }
}

export default Pokemon;