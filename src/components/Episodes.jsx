import { useState } from "react";
import useFetchEpisodes from "../hooks/useEpisodes"
import useFetchEpisodeDetail from "../hooks/useEpisodeDetails"
import CharacterCard from "./CharacterCard";
function Episodes() {
    const { episodes, infoEpisode } = useFetchEpisodes("https://rickandmortyapi.com/api/episode");
    const [idEpisode, setIdEpisode] = useState(null);
    const { episode, characters, loading: loadingEpisodeDetail } = useFetchEpisodeDetail(idEpisode)

    const handleClickEpisode = (e) => {
        setIdEpisode(e.target.value);
    }

    const randomId = () => {
        const number = Math.floor(Math.random() * 27) + 1;
        setIdEpisode(number);
    }

    return (
        <div>
            <div className="flex justify-center m-10">
                <h1 className="font-mono font-bold text-4xl ">EPISODES</h1>
            </div>
            <div className="font-mono italic bg-lime-300 text-slate-800 font-bold border rounded-r-lg border-lime-300 max-w-fit pl-1 pr-2 ml-5">
                <h2 className="text-xl">Total episodes: {infoEpisode.count}</h2>
            </div>
            <main className="flex flex-col justify-center items-center font-mono my-10 ">
                <div className="flex font-bold text-lg gap-5 mb-8 xs:flex-col sm:flex-row">
                    <div className="flex">
                        <label htmlFor="location" className="bg-lime-300 text-slate-800 rounded-s px-3">PICK EPISODE</label>
                        <select id="location" name="location" onChange={handleClickEpisode} className="bg-zinc-800 text-lime-300 border border-lime-300 rounded-e w-52 focus:border-lime-700">
                            <option value="" disabled selected>Choose...</option>
                            {episodes.map(epi => (
                                <option className="hover:bg-slate-700" key={epi.id} value={epi.id}>{epi.name} - {epi.episode}</option>
                            ))}
                        </select>
                    </div>
                    <button className="bg-lime-300 text-slate-800 rounded px-3 hover:opacity-85" onClick={randomId}>RANDOM PICK</button>
                </div>
                <section>
                    {loadingEpisodeDetail ? (
                        <div>
                            <img src="/react-rick-and-morty/icon-rym.svg" alt="rick and morty oficial" className='animate-pulse' />
                            <h2 className="text-center text-xl">Please select a episode...</h2>
                        </div>
                    ) : (
                        episode && (
                            <>
                                <header className="text-center">
                                    <h1 className="text-3xl font-bold text-lime-300">{episode.episode}</h1>
                                    <h2 className="text-lg font-bold mt-5">Name: {episode.name}</h2>
                                    <h2 className="text-lg font-bold">Release: {episode.air_date}</h2>
                                    <h3 className="mt-5 text-lime-300">Characters ({episode.characters.length}):</h3>
                                </header>
                                {episode.characters.length ? (
                                    <div className="flex flex-wrap justify-center my-5 gap-5 w-2/3 m-auto">
                                        {characters.map((character) => (
                                            <CharacterCard character={character} key={character.id} />
                                        ))}
                                    </div>
                                ) : (
                                    <div>
                                        <h2 className="text-center text-xl my-5 border p-2 rounded border-lime-300 animate-jump-in">There are no characters in this episode...</h2>
                                        <img src="/react-rick-and-morty/mortyrunning.png" alt="morty-running" className="drop-shadow-xl h-48 m-auto" />
                                    </div>
                                )}
                            </>
                        )
                    )}
                </section>
            </main>
        </div>
    )
}

export default Episodes;