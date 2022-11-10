import React from "react";
import logo from "./logo.svg";
import "./App.scss";

//React function component
function Container() {
  return (
    <>
      <div>Container</div>
      <div>Container</div>
    </>
  );
}

//React class component
class Testing extends React.Component {
  render() {
    return <div>Testing</div>;
  }
}

let count = 0;

function App() {
  const [count, setCount] = React.useState(0);
  const [students, setStudents] = React.useState(["Alex"]);

  const random = Math.random();

  students.map((student) => {
    console.log(students);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Testing />
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
            // 一行setCount，成個function重新行過
          }}
        >
          Click me
        </button>
        <p>
          Edit {random}
          <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {false}
        {true}
        {null}
        {undefined}
        {students.map((student) => {
          return <p key={student}>{`${student} fk you`}</p>;
        })}
        <button
          onClick={() => {
            setStudents([...students, "Alex"]);
          }}
        >
          Add student
        </button>
        <button
          onClick={() => {
            setStudents(
              students.filter((student) => {
                return student !== "Alex";
              })
            );
          }}
        >
          Remove student
        </button>
        {/* {random > 0.5 ? <Container /> : null} */}
        {/* {random > 0.5 && "Hello World"} */}
        <Container />
      </header>
    </div>
  );
}

export default App;
