const SearchField = ({keyword, handler}) => {
return (
    <div>
        filter by name: <input
          value={keyword}
          onChange={handler}
        />
      </div>
)
}

export default SearchField