import { useState } from 'react';
import PropTypes from 'prop-types';

function Character({ character, setModalOpen, setCharId }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <div className="flex flex-col justify-start items-center mb-5" key={character.id}>
            <h1 className='text-xl text-lime-300'>{character.name}</h1>
            <button onClick={() => { setModalOpen(true); setCharId(character.id); }}>
            {!imageLoaded && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-10">
                    <div className="rounded-full h-72 w-72 flex items-center justify-center bg-gray-300">
                        <svg className="animate-spin h-10 w-10 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                </div>
                )}
                <img 
                    className={`rounded-full border-2 border-lime-300 duration-300 ${imageLoaded ? 'hover:rotate-3 hover:saturate-150 hover:shadow-lg hover:shadow-lime-300' : 'hidden'}`}
                    src={character.image} 
                    alt={character.name}
                    onLoad={handleImageLoad} 
                />
            </button>
        </div>
    );
}

Character.propTypes = {
    character: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    setModalOpen: PropTypes.func.isRequired,
    setCharId: PropTypes.func.isRequired,
};
Character.defaultProps = {
    character: {
        image: '/default-user.jpg', // Ruta a la imagen por defecto
    },
};
export default Character;