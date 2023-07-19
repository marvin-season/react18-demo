import {
  ForwardedRef,
  FunctionComponent,
  KeyboardEventHandler,
  Ref,
  forwardRef,
  useRef,
} from "react";

export interface SearchPanelProps {
  keyworld: string;
  setKeyworld: (keyworld: string) => void;
}

const SearchPanel = forwardRef(
  (
    { keyworld, setKeyworld }: SearchPanelProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (e) => {
      if (e.key.toLocaleLowerCase() == "enter") {
        console.log("enter");
      }
    };
    return (
      <>
        <input
          ref={ref}
          value={keyworld}
          onChange={(e) => {
            setKeyworld(e.target.value);
          }}
          // onKeyUp={handleKeyUp}
        ></input>
      </>
    );
  },
);

export default SearchPanel;
