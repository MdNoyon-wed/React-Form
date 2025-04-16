import { useState } from "react";

const UseInputHook = (defaultValue) => {
  
  const [inputValue,setInputValue]=useState(defaultValue);

  const hanldeInputOnChange = e => {
    setInputValue(e.target.value)
  }
  return[inputValue, hanldeInputOnChange]
}
export default UseInputHook;