interface SearchPanelProps {
  keyworld: string;
  setKeyworld: (keyworld: string) => void;
}

const SearchPanel = ({ keyworld, setKeyworld }: SearchPanelProps) => {
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
