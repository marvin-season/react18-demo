import SearchPanel from "components/search-panel";
import useDebounce from "hooks";
import React, { useEffect, useState } from "react";
import qs from "qs";
import { cleanObject } from "utils";
const UserScreen = () => {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value, 500);

  useEffect(() => {
    const queryStr = qs.stringify(
      cleanObject({
        name: debounceValue,
        id: 1,
      }),
    );
    fetch(`http://jsonplaceholder.typicode.com/users?${queryStr}`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      });
  }, [debounceValue]);
  return (
    <>
      <SearchPanel keyworld={value} setKeyworld={setValue} />
    </>
  );
};

export default UserScreen;
