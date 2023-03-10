import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [product, setProduct] = useState("");
  const [detail, setDetail] = useState("");
  const [code, setCode] = useState("");

  const navigate = useNavigate();
  const data = {
    product: product,
    detail: detail,
    code: code,
  };

  function submitForm(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/products", data).then(navigate("/home"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">ADD PRODUCT</h2>
      <form className="w-[50%] h-full flex flex-col mt-2" method="POST">
        <input
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter product name"
        />
        <input
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter product description"
          />
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Add product code"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          ADD PRODUCT
        </button>
      </form>
    </div>
  );
}

export default Add;
