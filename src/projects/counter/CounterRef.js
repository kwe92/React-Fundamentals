import React, { useRef } from "react";

// useRef
//  - Mutble state that does not triger a rerendering of your component
const RefCounter = () => {
  let ref = useRef(0);

  const handleClick = () => {
    ref.current = ref.current + 1;
    alert(`You clicked ${ref.current} times`);
  };
  return (
    <button type="button" onClick={handleClick}>
      Click Me!
    </button>
  );
};

export default RefCounter;
