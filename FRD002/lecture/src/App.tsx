// 想係typescript用emotion就要加呢句
//emotion 係 css in js 嘅其中一款
/** @jsxImportSource @emotion/react */

import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { css } from "@emotion/react";
import { DiAndroid } from "react-icons/di";
import { RiLockPasswordFill } from "react-icons/ri";
import InputField from "./components/InputField";
import { Modal, Button } from "react-bootstrap";
import Counter from "./components/Counter";
import { getPreEmitDiagnostics } from "typescript";

function App() {
  const [school, setSchool] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [schools, setSchools] = React.useState(["alex", "gordon", "michael"]);
  const [count, setCount] = React.useState(0);
  // const [modalShow, setModalShow] = React.useState(true);
  const [modalShow, setModalShow] = React.useState(false);
  const [country, setCountry] = React.useState(null as any);
  // const [country, setCountry] = React.useState("");
  const random = Math.random();

  // try to fetch a API
  useEffect(() => {
    fetch("https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8")
      .then((res) => res.json())
      .then((data) => {
        setCountry(data?.[0].country);
        console.log(data?.[0].country);
      });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>You are from {country}</p>

        <h1>Login</h1>
        {random}

        <div data-testid="count">{count}</div>
        <button
          onClick={() => {
            setCount(count + 1);
            setCount(count + 1);
            setCount(count + 1);
            setCount(count + 1);
            setCount(function (latestCount) {
              return latestCount + 1;
            });
            setCount(function (latestCount) {
              return latestCount + 1;
            });
            setCount(function (latestCount) {
              return latestCount + 1;
            });
            setCount(function (latestCount) {
              return latestCount + 1;
            });
            console.log(count);
          }}
        >
          Add
        </button>

        <div
          css={css`
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;

            input {
              padding: 10px;
              width: 200px;
            }
          `}
        >
          School:
          <input
            value={school}
            onChange={(event) => {
              setSchool(event.currentTarget.value);
            }}
          />
        </div>

        {schools.map((school) => {
          return <p key={school}>{school}</p>;
        })}

        <button
          onClick={() => {
            // method 1:
            // setSchools([...schools, school]);
            setSchools((schools) => [...schools, school]);

            // method 2:
            // let newSchools = schools.slice();
            // newSchools.push(school);
            // setSchools(newSchools);
            setSchools((schools) => {
              let newSchools = schools.slice();
              newSchools.push(school);
              return newSchools;
            });

            // method 3:
            // let newSchools2 = schools.concat(school);
            // setSchools(newSchools2);
            setSchools((schools) => {
              let newSchools2 = schools.concat(school);
              return newSchools2;
            });
          }}
        >
          Add School
        </button>

        <Modal show={modalShow} onHide={() => setModalShow(false)}>
          <Modal.Header>
            <Modal.Title>Delete Item Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            你的電腦已經有病毒了 Do you confirm to delete item "
            <Counter />
            <span className="text-primary"></span>"?
            <br />
            <i className="text-danger">This action cannot be reversed.</i>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Cancel</Button>
            <Button variant="danger">Confirm Delete</Button>
          </Modal.Footer>
        </Modal>
        <button className="btn btn-primary" onClick={() => setModalShow(true)}>
          Show the modal box
        </button>

        <InputField
          css={css`
            padding: 40px;
          `}
          placeholder="Type your username"
          icon={<DiAndroid />}
          color="#ff5000"
          value={username}
          onChange={(text) => {
            setUsername(text);
          }}
        />
        <InputField
          placeholder="Type your password"
          icon={<RiLockPasswordFill />}
          color="#ff5099"
          value={password}
          onChange={(text) => {
            setPassword(text);
          }}
          //最後打 no.3
        />
        <button
          onClick={() => {
            alert(school);
          }}
        >
          Login
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
