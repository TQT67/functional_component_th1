import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [age, setAge] = useState(5);
  const [name, setName] = useState("");

  const onChangAge = () => {
    setAge(age + 1);
  };

  const onChangName = () => {
    setName("Cee");
  };
  return (
    <div className="container">
      <div>Xin chào: {name}</div>
      <div>Tuổi là: {age}</div>
      <div onClick={onChangAge}>Tăng thêm 1 tuổi</div>
      <div onClick={onChangName}>Hiển thị tên</div>
    </div>
  );
}
