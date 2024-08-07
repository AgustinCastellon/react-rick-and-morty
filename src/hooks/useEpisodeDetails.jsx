import { useState, useEffect } from "react";

function useFetchEpisodeDetail(idEpisode) {
    const [episode, setEpisode] = useState(null);
    const [characters, setCharacters] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchEpisode(){
            if(idEpisode){
                try {
                    const responseEpisode = await fetch(`https://rickandmortyapi.com/api/episode/${idEpisode}`);
                    const dataEpisode = await responseEpisode.json();
                    setEpisode(dataEpisode);

                    const characterPromises = dataEpisode.characters.map(url => fetch(url).then(res => res.json()));
                    const charactersData = await Promise.all(characterPromises);
                    setCharacters(charactersData);
                } catch(error){
                    console.error('Error fetching episode details:', error);
                } finally {
                    setLoading(false);
                }
            }
        }

        fetchEpisode();
    }, [idEpisode]);

    return { episode, characters, loading };

}

export default useFetchEpisodeDetail;