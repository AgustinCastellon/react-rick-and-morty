import { useState, useEffect } from "react";

function useFetchEpisodes(url) {
    const [episodes, setEpisodes] = useState([]);
    const [infoEpisode, setInfoEpisode] = useState({});

    useEffect(() => {
        async function fetchData() {
            let allEpisodes = [];
            let nextUrl = url;
            let data;

            try {
                while (nextUrl) {
                    const response = await fetch(nextUrl);
                    data = await response.json();
                    allEpisodes = allEpisodes.concat(data.results);
                    nextUrl = data.info.next;
                }
                setEpisodes(allEpisodes);
                setInfoEpisode(data.info);
            } catch (error) {
                console.error('Error fetching episodes:', error);
            }
        }
        
        fetchData();
    }, [url]);

    return { episodes, infoEpisode };
}

export default useFetchEpisodes;