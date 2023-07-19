import SearchPanel, { SearchPanelProps } from "components/search-panel";
import { useDebounce } from "hooks";
import React, {
  ForwardRefExoticComponent,
  Ref,
  RefAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import qs from "qs";
import { cleanObject } from "utils";
import UserComp from "./user";
import { Button } from "antd";
import { useAuth } from "context/auth-context";
const UserScreen = () => {
  const [value, setValue] = useState("");
  const [userList, setUserList] = useState([]);
  const debounceValue = useDebounce(value, 500);
  const Panel = withKeyup(SearchPanel);

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

  const { logout } = useAuth();

  return (
    <>
      <Button onClick={logout}>logout</Button>
      <Panel keyworld={value} setKeyworld={setValue} />

      {userList.map((user, index) => (
        <UserComp key={index} user={user}></UserComp>
      ))}
    </>
  );
};

const withKeyup = (
  Comp: ForwardRefExoticComponent<
    SearchPanelProps & RefAttributes<HTMLInputElement>
  >,
) => {
  return function (props: SearchPanelProps) {
    const ref: Ref<HTMLInputElement> = useRef(null);

    ref.current?.addEventListener("keyup", (e) => {
      console.log(1);
      if (e.key.toLocaleLowerCase() == "enter") {
        console.log("enter");
      }
    });
    return <Comp {...props} ref={ref} />;
  };
};

export default UserScreen;
