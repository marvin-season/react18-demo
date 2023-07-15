import SearchPanel from "components/search-panel";
import { useDebounce } from "hooks";
import React, { useEffect, useState } from "react";
import qs from "qs";
import { cleanObject } from "utils";
import UserComp from "./user";
const UserScreen = () => {
  const [value, setValue] = useState("");
  const [userList, setUserList] = useState([]);
  const debounceValue = useDebounce(value, 500);

  useEffect(() => {
    const queryStr = qs.stringify(
      cleanObject({
        id: debounceValue,
      }),
    );
    fetch(`http://jsonplaceholder.typicode.com/users?${queryStr}`)
      .then((res) => res.json())
      .then((response) => {
        setUserList(response || []);
      });
  }, [debounceValue]);

  return (
    <>
      <SearchPanel keyworld={value} setKeyworld={setValue} />

      {userList.map((user, index) => (
        <UserComp key={index} user={user}></UserComp>
      ))}
    </>
  );
};

export default UserScreen;
