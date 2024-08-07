import { useState } from 'react';
import CharacterCard from './CharacterCard';
import useFetchLocations from '../hooks/useLocations';
import useFetchLocationDetail from '../hooks/useLocationDetails';

function Locations() {
    const { locations, infoLocation } = useFetchLocations('https://rickandmortyapi.com/api/location');
    const [idLocation, setIdLocation] = useState(null);
    const { location, characters, loading: loadingLocationDetail } = useFetchLocationDetail(idLocation);

    const handleClickLocation = (e) => {
        setIdLocation(e.target.value);
    };

    const randomId = () => {
        const number = Math.floor(Math.random() * 126) + 1;
        setIdLocation(number);
    };

    return (
        <div className="">
            <div className="flex justify-center m-10">
                <h1 className="font-mono font-bold text-4xl ">LOCATIONS</h1>
            </div>
            <div className="font-mono italic bg-lime-300 text-slate-800 font-bold border rounded-r-lg border-lime-300 max-w-fit pl-1 pr-2 ml-5">
                <h2 className="text-xl">Total locations: {infoLocation.count}</h2>
            </div>
            <main className="flex flex-col justify-center items-center font-mono my-10 ">
                <div className="flex font-bold text-lg gap-5 mb-8 xs:flex-col sm:flex-row">
                    <div className="flex">
                        <label htmlFor="location" className="bg-lime-300 text-slate-800 rounded-s px-3">PICK LOCATION</label>
                        <select id="location" name="location" onChange={handleClickLocation} className="bg-zinc-800 text-lime-300 border border-lime-300 rounded-e w-52 focus:border-lime-700">
                            <option value="" disabled selected>Choose...</option>
                            {locations.map(locat => (
                                <option className="hover:bg-slate-700" key={locat.id} value={locat.id}>{locat.name}</option>
                            ))}
                        </select>
                    </div>
                    <button className="bg-lime-300 text-slate-800 rounded px-3 hover:opacity-85" onClick={randomId}>RANDOM PICK</button>
                </div>
                <section className="">
                    {loadingLocationDetail ? (
                        <div>
                            <img src="/react-rick-and-morty/rym-oficial.png" alt="rick and morty oficial" className='animate-pulse' />
                            <h2 className="text-center text-xl">Please select a location...</h2>
                        </div>
                    ) : (
                        location && (
                            <>
                                <header className="text-center">
                                    <h1 className="text-3xl font-bold">Location: <span className="text-lime-300">{location.name}</span></h1>
                                    <h2 className="text-lg font-bold mt-5">Dimension: {location.dimension}</h2>
                                    <h2 className="text-lg font-bold">Type: {location.type}</h2>
                                    <h3 className="mt-5 text-lime-300">Residents ({location.residents.length}):</h3>
                                </header>
                                {location.residents.length ? (
                                    <div className="flex flex-wrap justify-center my-5 gap-5 w-2/3 m-auto">
                                        {characters.map((character) => (
                                            <CharacterCard character={character} key={character.id} />
                                        ))}
                                    </div>
                                ) : (
                                    <div>
                                        <h2 className="text-center text-xl my-5 border p-2 rounded border-lime-300 animate-jump-in">There are no residents in this location...</h2>
                                        <img src="/react-rick-and-morty/mortyrunning.png" alt="morty-running" className="drop-shadow-xl h-48 m-auto" />
                                    </div>
                                )}
                            </>
                        )
                    )}
                </section>
            </main>
        </div>
    );
}

export default Locations;