import { useState, useEffect } from 'react';

function useFetchLocations(url) {
  const [locations, setLocations] = useState([]);
  const [infoLocation, setInfoLocation] = useState({});

  useEffect(() => {
    async function fetchData() {
      let allLocations = [];
      let nextUrl = url;
      let data;

      try {
        while (nextUrl) {
          const response = await fetch(nextUrl);
          data = await response.json();
          allLocations = allLocations.concat(data.results);
          nextUrl = data.info.next;
        }
        setLocations(allLocations);
        setInfoLocation(data.info);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    }

    fetchData();
  }, [url]);

  return { locations, infoLocation};
}

export default useFetchLocations;