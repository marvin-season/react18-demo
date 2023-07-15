import { log } from "console";
import { useEffect, useState } from "react";

const useDebounce = <V>(value: V, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debounceValue;
};

interface HasId {
  id: string | number;
}

const useArray = <S extends HasId>(
  initArray: Array<S>,
): [Array<S>, () => void, (id: number) => void, (ele: S) => S] => {
  const [array, setArray] = useState(initArray);

  const clear = () => {
    setArray([]);
    return;
  };

  const remove = (index: number): S | undefined => {
    console.log(index);
    let arr = initArray.slice(index, 1);
    setArray(arr);
    console.log(array);

    return;
  };

  const add = (ele: S) => {
    setArray([...array, ele]);
    return ele;
  };

  return [initArray, clear, remove, add];
};

export { useDebounce, useArray };
