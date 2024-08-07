import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
function CharacterDetail({ character, episodeDetails, setModalOpen, setCharId, totalCharacters }) {
    const handleNext = () => {
        setCharId(character.id + 1)
    };
    const handlePrev = () => {
        setCharId(character.id - 1)
    };
    const getStatusColor = (status) => {
        if (status === 'Alive') {
            return 'text-lime-400';
        } else if (status === 'Dead') {
            return 'text-red-400';
        } else {
            return 'text-yellow-400';
        }
    }
    return (
        <div className="fixed inset-0 bg-slate-950 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-zinc-800 flex justify-center items-center p-5 gap-5 border border-lime-300 shadow-lg shadow-lime-300 ">
                <div className='w-72 sm:w-96 md:w-full'>
                    <button onClick={() => setModalOpen(false)}><FontAwesomeIcon icon={faXmark} className='text-lime-300 text-2xl' /></button>
                    <header className="flex flex-col justify-center items-center md:m-2">
                        <div className='mb-1'>
                            <h2 className=" text-md sm:text-2xl font-bold text-lime-300">{character.name}</h2>
                        </div>
                        <div>
                            <img src={character.image} alt={character.name} className="border border-slate-400" />
                        </div>
                    </header>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-sm "><FontAwesomeIcon icon={faCircle} className={`text-[9px] border border-spacing-0 border-transparent ${getStatusColor(character.status)}`} />{character.status} - {character.species}</p>
                        <p className="text-sm">{character.gender}</p>
                        <p className="text-sm">From {character.origin.name}</p>
                    </div>
                    <div className="flex flex-col items-center font-mono font-bold my-10">
                        <div className="flex flex-row text-center sm:gap-x-5 md:gap-x-40">
                            <h2 className="text-lg text-slate-400 font-sans sm:w-48">Last known location:</h2>
                            <h2 className="text-lg text-slate-400 font-sans sm:w-48">First seen in episode:</h2>
                        </div>
                        <div className="flex flex-row  sm:gap-x-16 md:min-w-full md:gap-x-40 justify-between">
                            <a href=""><p className='text-sm text-center w-36 sm:w-36 md:w-48 hover:text-teal-300'>{character.location.name}</p></a>
                            <a href=""><p className='text-sm text-center w-36 sm:w-36 md:w-48 hover:text-teal-300'>{episodeDetails.name}</p></a>
                        </div>
                    </div>
                    <footer className="flex justify-between mx-4 mt-5 font-mono font-bold text-xl">
                        <button
                            className={`rounded text-slate-800 px-3 ${character.id <= 1 ? "bg-slate-300" : "bg-lime-300"}`}
                            onClick={handlePrev}
                            disabled={character.id <= 1}
                        >
                            PREV
                        </button>
                        <button
                            className={`rounded text-slate-800 px-3 ${character.id >= totalCharacters ? "bg-slate-300" : "bg-lime-300"}`}
                            onClick={handleNext}
                            disabled={character.id >= totalCharacters}
                        >
                            NEXT
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    )
}

CharacterDetail.propTypes = {
    character: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        origin: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
        location: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    episodeDetails: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
    setModalOpen: PropTypes.bool.isRequired,
    setCharId: PropTypes.func.isRequired,
    totalCharacters: PropTypes.number.isRequired
};
CharacterDetail.defaultProps = {
    character: {
        image: '/default-user.jpg', // Ruta a la imagen por defecto
    },
};
export default CharacterDetail;