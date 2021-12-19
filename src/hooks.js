import { useState } from "react";

const useFlip = (initialVal = true) => {
  const [state, setState] = useState(initialVal);
  const flip = () => {
    setState((state) => !state);
  };
  return [state, flip];
};

export default useFlip;
