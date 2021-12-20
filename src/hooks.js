import { useState, useEffect } from "react";
import axios from "axios";

const useFlip = (initialVal = true) => {
  const [state, setState] = useState(initialVal);
  const flip = () => {
    setState((state) => !state);
  };
  return [state, flip];
};

const useAxios = (key, url) => {
  const [responses, setResponses] = useLocalStorage(key);

  const addData = async (formatter = (data) => data, restOfUrl = "") => {
    const response = await axios.get(`${url}${restOfUrl}`);
    setResponses((data) => [...data, formatter(response.data)]);
  };
  const earseAll = () => setResponses([]);

  return [responses, addData, earseAll];
};

const useLocalStorage = (key, initialVal = []) => {
  if (localStorage.getItem(key)) {
    initialVal = JSON.parse(localStorage.getItem(key));
  }
  const [value, setValue] = useState(initialVal);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;

export { useFlip, useAxios, useLocalStorage };
