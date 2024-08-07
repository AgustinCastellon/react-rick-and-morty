import PropTypes from 'prop-types';

function CharacterCard({character}) {

    const statusBg = (status) => {
        switch (status) {
            case "unknown":
                return "bg-yellow-400";
            case "Alive":
                return "bg-green-400";
            case "Dead":
                return "bg-red-400";
            default:
                return "bg-gray-400";
        }
    }

    return (
        <div className="relative border border-lime-300 rounded-xl w-56 h-92  shadow shadow-lime-300 flex flex-col" key={character.id}>
            <h1 className={`absolute top-3 right-3 text-slate-800 font-bold w-fit px-2 rounded-md shadow-2xl border border-slate-800 ${statusBg(character.status)}`}>{character.status}</h1>
            <img src={character.image} alt="" className="w-full h-56 rounded-t-xl object-cover  border-b-2 border-slate-800" />
            <div className="px-3 flex flex-col justify-between flex-grow">
                <h1 className="text-lg font-bold text-lime-300">{character.name}</h1>
                <div>
                    <h2 className="text-sm text-slate-400 mt-5">Last Location</h2>
                    <p className="text-sm mb-2">{character.location.name}</p>
                </div>
            </div>
        </div>
    )
}

CharacterCard.propTypes = {
    character: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        location: PropTypes.shape({
            name: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default CharacterCard;