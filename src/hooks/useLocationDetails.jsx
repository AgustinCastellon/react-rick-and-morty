import { useState, useEffect } from 'react';

function useFetchLocationDetail(idLocation) {
  const [location, setLocation] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLocation() {
      if (idLocation) {
        try {
          const responseLocat = await fetch(`https://rickandmortyapi.com/api/location/${idLocation}`);
          const dataLocat = await responseLocat.json();
          setLocation(dataLocat);

          const residentPromises = dataLocat.residents.map(url => fetch(url).then(res => res.json()));
          const residentsData = await Promise.all(residentPromises);
          setCharacters(residentsData);
        } catch (error) {
          console.error('Error fetching location details:', error);
        } finally {
          setLoading(false);
        }
      }
    }

    fetchLocation();
  }, [idLocation]);

  return { location, characters, loading };
}

export default useFetchLocationDetail;