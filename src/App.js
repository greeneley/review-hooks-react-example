import './App.css';
import {forwardRef, useImperativeHandle, useRef} from "react";

function App() {
  const customInputRef = useRef();
  const handleFocus = () => {
    customInputRef.current.focus();
  }
  
  const handleClear = () => {
    customInputRef.current.clear();
  }

  const handleSetText = () => {
    customInputRef.current.setText();
  }
  
  return (
    <div>
      <CustomInput ref={customInputRef} />
      <button onClick={handleFocus}>Focus Input</button>
      <button onClick={handleSetText}>Set Text Default</button>
      <button onClick={handleClear}>Clear Input</button>
    </div>
  );
}

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(
      ref,
      () => {
        return {
          focus: () => {
            inputRef.current.focus();
          },
          clear: () => {
            inputRef.current.value = '';
          },
          setText: () => {
            inputRef.current.value = "ABC"
          }
        }
      },
  );
  return (
      <input ref={inputRef} type="text" placeholder="Enter some text" />
  )
})

export default App;
