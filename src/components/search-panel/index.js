const SearchPanel = ({ keyworld, setKeyworld }) => {
  return (
    <>
      <input
        value={keyworld}
        onChange={(e) => {
          setKeyworld(e.target.value);
        }}
      ></input>
    </>
  );
};

export default SearchPanel;
