import { useEffect, useState } from "react";
import Character from "./Character";
import NavPage from "./NavPage";
import CharacterDetail from "./Modals/CharacterDetail";

function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [character, setCharacter] = useState(null);
    const [episodeDetails, setEpisodeDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [info, setInfo] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [charId, setCharId] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const data = await response.json();
            setLoading(false);
            setCharacters(data.results);
            setInfo(data.info);
        }

        fetchData();
    }, [page]);

    useEffect(() => {
        async function fetchCharacter() {
            if (charId) {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${charId}`);
                const data = await response.json();
                setCharacter(data);
                const episodeUrl = data.episode[0];
                const results = await fetch(episodeUrl);
                const episodeData = await results.json();
                setEpisodeDetails(episodeData);
            }
        }
        fetchCharacter();
    }, [charId]);

    return (
        <>
            {loading ? (
                <div className="text-center mt-40">
                    <div className="flex flex-col h-screen w-screen items-center justify-start">
                        <div className="space-y-4">
                            <h1>Processing...</h1>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex justify-center m-10">
                        <h1 className="font-mono font-bold text-4xl ">CHARACTERS</h1>
                    </div>
                    <div className="font-mono italic bg-lime-300 text-slate-800 font-bold border rounded-r-lg border-lime-300 max-w-fit pl-1 pr-2 ml-5">
                        <h2 className="text-xl">Total characters: {info.count}</h2>
                    </div>

                    <NavPage page={page} setPage={setPage} setCharacters={setCharacters} totalPages={info.pages} />
                    <div className="flex flex-row flex-wrap justify-center items-center gap-10">
                        {characters.map(character => (
                            <div className="font-mono" key={character.id}>
                                <Character character={character} setModalOpen={setModalOpen} setCharId={setCharId} />
                            </div>
                        ))}
                    </div>

                    <NavPage page={page} setPage={setPage} totalPages={info.pages} />

                    {modalOpen && character && episodeDetails && (
                        <CharacterDetail
                            character={character}
                            episodeDetails={episodeDetails}
                            setModalOpen={setModalOpen}
                            setCharId={setCharId}
                            totalCharacters={info.count}
                        />
                    )}
                </>
            )}
        </>
    );
}

export default CharacterList;