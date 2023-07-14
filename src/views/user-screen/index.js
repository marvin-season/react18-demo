import SearchPanel from "components/search-panel";
import useDebounce from "hooks";
import React, { useEffect, useState } from "react";

const UserScreen = () => {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value, 500);

  useEffect(() => {
    console.log(debounceValue);
  }, [debounceValue]);
  return (
    <>
      <SearchPanel keyworld={value} setKeyworld={setValue} />
    </>
  );
};

export default UserScreen;
