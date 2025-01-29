

const Search = ({searchTerm,onChange}) => {
    return (
        <div className="search">
            <div>
                <img src="/search.svg" alt="Search image" />
                <input type="text"
                placeholder="Search through thousands of movies"
                value={searchTerm}
                onChange={(event)=> onChange(event.target.value)}
                />
            </div>
        </div>
    )
}
export default Search
