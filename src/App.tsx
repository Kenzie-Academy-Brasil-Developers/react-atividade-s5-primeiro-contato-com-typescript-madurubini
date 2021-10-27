import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { Button, Form } from "./components/Card/style";
import Input from "./components/Input";

interface Data {
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [dataForm, setDataForm] = useState<Data>({} as Data);
  const [show, isShow] = useState(Boolean);

  const handleData = () => {
    dataForm.hobby && isShow(true);
  };

  return (
    <div className="App">
      {!show && (
        <Form>
          <h1>Type your personal info</h1>
          <Input
            label="Name"
            placeholder="...Ariel"
            type="text"
            onChange={(e) => setDataForm({ ...dataForm, name: e.target.value })}
          />
          <Input
            label="Age"
            placeholder="...23"
            type="number"
            onChange={(e) =>
              setDataForm({ ...dataForm, age: Number(e.target.value) })
            }
          />
          <Input
            label="Hobby"
            placeholder="...Read a book"
            type="text"
            onChange={(e) =>
              setDataForm({ ...dataForm, hobby: e.target.value })
            }
          />
          <Button onClick={handleData}>Show my Info!</Button>
          {!dataForm.hobby && <p>Há Campos vazios</p>}
        </Form>
      )}

      {show && (
        <>
          <Card
            name={dataForm.name}
            age={dataForm.age}
            hobby={dataForm.hobby}
          />
          <Button
            onClick={() => {
              isShow(false);
              dataForm.hobby = "";
            }}
          >
            Reset
          </Button>
        </>
      )}
    </div>
  );
}

export default App;
