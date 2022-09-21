import "./App.css";
import { useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";
function App() {
  const [file, setFile] = useState();
  // sending excel file to backend
  const submitFile = (e) => {
    // e.preventDefault();
    // if (e.target.files) {
    //   const reader = new FileReader();
    //   reader.onload = (e) => {
    //     const data = e.target.result;
    //     const workbook = XLSX.read(data, { type: "array" });
    //     const sheetName = workbook.SheetNames[0];
    //     const worksheet = workbook.Sheets[sheetName];
    //     const json = XLSX.utils.sheet_to_json(worksheet);
    //     // console.log(json);
    //     setFile([json]);
    //   };
    //   reader.readAsArrayBuffer(e.target.files[0]);
    // const formData = new FormData();
    // formData.append("file", reader);
    // axios.post("http://localhost:8000/file/getFile", formData).then((res) => {
    //   //Now do what you want with the response;
    //   console.log(res)
    // });
  };

  //submitting the form
  const addItem = async () => {
    // if (!text) {
    //   alert("Please fill the input field");
    // } else {
    //   setList([...list, text]);
    //   let dataSend = {
    //     todo: text,
    //   };
    // const res = await fetch(`http://localhost:8000/todo/addTodo`, {
    //   method: "POST",
    //   body: JSON.stringify(dataSend),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // })
    //   // HANDLING ERRORS
    //   .then((res) => {
    //     console.log(res.status);
    //   });
    // setText("");
    // }
  };
  const submitForm = async () => {
    console.log(file);
    // const reader = new FileReader();

    const data = [file];
    const res = await fetch(`http://localhost:8000/file/getFile`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          // const file = event.target.files[0];
          setFile(event);
        }}
      />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
}

export default App;
