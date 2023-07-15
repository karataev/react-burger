import {useEffect, useRef} from "react";

function useAutoFocus() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return inputRef;
}

export default useAutoFocus;