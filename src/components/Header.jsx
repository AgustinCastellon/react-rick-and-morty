import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="xs:flex-col lg:flex-row flex justify-between items-center border-b bg-lime-300 text-slate-800 px-8 shadow-lg shadow-lime-800">
            <div className="animate-pulse lg:animate-none flex flex-grow basis-0">
                <img src="./Daco_4305710.png" alt="Rick-and-Morty-Logo" className="lg:w-56 drop-shadow-2xl" />
            </div>
            <nav className="py-2 font-mono font-bold lg:h-28 flex items-end">
                <ul className="flex sm:gap-12 lg:gap-12 text-md sm:text-lg">
                    <li className=''>
                        <Link to="/" className="hover:text-lime-300 hover:bg-zinc-700 rounded p-2">CHARACTERS</Link>
                    </li>
                    <li >
                        <Link to="/episodes" className="hover:text-lime-300 hover:bg-zinc-700 rounded p-2">EPISODES</Link>
                    </li>
                    <li className="">
                        <Link to="/locations" className="hover:text-lime-300 hover:bg-zinc-700 rounded p-2">LOCATIONS</Link>
                    </li>
                </ul>
            </nav>
            <span className="flex flex-grow basis-0 justify-end">
            <p className='self-center font-extrabold font-mono hidden lg:flex'>API {'>'}</p>
            <a href="https://rickandmortyapi.com/" target="blank"><img src="./rym-oficial.png" alt="rickymorty" className="w-28 drop-shadow-2xl animate-pulse hidden lg:flex" /></a>
                <a href="https://rickandmortyapi.com/" className="text-xs text-slate-900 font-semibold hover:underline lg:hidden my-2" target="blank">Visit the Rick and Morty API <FontAwesomeIcon icon={faUpRightFromSquare} /></a>
            </span>
        </div>
    )
}

export default Header;