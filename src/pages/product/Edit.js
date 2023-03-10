import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Add() {
  const [product, setProduct] = useState("");
  const [detail, setDetail] = useState("");
  const [code, setCode] = useState("");
  const [prod, setProd] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`).then((res) => {
      setProduct(res.data.product);
      setDetail(res.data.detail);
      setCode(res.data.code);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    product: product,
    detail: detail,
    code: code,
  };

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:3000/products/${id}`, data).then(navigate("/"));
  }
  return (
    <>
      <div className="pt-8 mr-96">
        <Link
          to={`/`}
          className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border  hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Home
        </Link>
      </div>
      <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
        <h2 className="text-2xl font-bold">Product Details</h2>
        <form className="w-[50%] h-full flex flex-col mt-2">
          <input
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
            type="text"
            placeholder={prod?.product}
          />
          <input
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
            type="text"
            name="detail"
            placeholder={prod?.detail}
          />
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
            type="text"
            placeholder={prod?.code}
          />
          <button
            className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
            type="submit"
            onClick={Update}
          >
            UPDATE PRODUCT
          </button>
        </form>
      </div>
    </>
  );
}

export default Add;
