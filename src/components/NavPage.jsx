import PropTypes from 'prop-types';
function NavPage(props){
    return(
        <header className="flex justify-center gap-5 items-center m-10">
            <button type="button" className={`font-medium rounded border border-slate-400 text-slate-800 px-3 ${props.page <= 1 ? "bg-slate-300" : "bg-lime-300"}`}
                onClick={() => props.setPage(props.page - 1)}
                disabled={props.page <= 1}
            >
                PREV
            </button>
            <p className="font-medium hover:text-teal-300 hover:cursor-default">PAGE {props.page}</p>
            <button type="button" className={`font-medium rounded border border-slate-400 text-slate-800 px-3 ${props.page >= props.totalPages ? "bg-slate-300" : "bg-lime-300"}`}
                onClick={() => props.setPage(props.page + 1)}
                disabled={props.page >= props.totalPages}
            >
                NEXT
            </button>
        </header>
    )
}

NavPage.propTypes = {
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    setCharacters: PropTypes.array.isRequired,
    totalPages: PropTypes.number.isRequired
};

export default NavPage;