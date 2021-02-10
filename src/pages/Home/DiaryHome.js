import React from "react";
import InputForm from "../../components/InputForm";
import CardList from "../../components/CardList";
import "../../utils/InputFormStyle.css";
import "../../utils/DiaryHomeStyle.css";

function DiaryHome() {
  return (
    <div style={{ paddingTop: 20 }}>
      <h1 className="Home-title">Home</h1>
      <div className="form-container">
        <InputForm />
      </div>

      <div>
        <CardList />
      </div>
    </div>
  );
}

export default DiaryHome;
