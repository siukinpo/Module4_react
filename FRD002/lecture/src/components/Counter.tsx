import React, { useEffect } from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  const [increment, setIncrement] = React.useState(1);

  // 用setTimeout係最正常嘅counter
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 100);

  // 用setInterval係閃下閃下
  //   setInterval(() => {
  //     setCount(count + 1);
  //     console.log("yo");
  //   }, 100);

  //   useEffect(() => {
  //     setInterval(() => {
  //       setCount(count + 1);
  //       console.log("yo");
  //     }, 500);
  //   }, []);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((count) => count + increment);
      console.log("yo");
      //   setCount(function (latestCount) {
      //     return latestCount + 1;
      //   });
    }, 500);

    // useEffect(() => {
    //   socket.on('message', (message) => {
    //     console.log(`Someone sent a message to ${name}: ${message}`)
    //   })
    // }, [name]);

    return () => {
      console.log("sayonara");
      clearInterval(timer);
    };
  }, [increment]);

  return (
    <>
      <div>Counter {count}</div>
      <div>
        <button
          onClick={() => {
            setIncrement((i) => i - 1);
          }}
        >
          -
        </button>
        {increment}
        <button
          onClick={() => {
            setIncrement((i) => i + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default Counter;
