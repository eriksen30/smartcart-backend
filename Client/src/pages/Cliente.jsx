import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Products from "../components/products";

const Cliente = () => {
  const [carrito, setCarrito] = useState([])
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const cantidadCarrito = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <>
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand">Smart Cart</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
            ></input>
            <button className="btn btn-success" type="submit">
              Buscar
            </button>
          </form>
          <button
            className="btn d-flex align-items-center gap-2"
            style={{
              backgroundColor: "#1c2c5b",
              borderRadius: "12px",
              color: "#aeb9d3",
              padding: "6px 16px",
              border: "none",
            }}
          >
            <FaShoppingCart />
            <span style={{ fontWeight: "bold" }}>{cantidadCarrito}</span>
          </button>
          <button
            className="btn text-white d-flex align-items-center gap-2"
            onClick={handleLogout}
          >
            <FaUser />
            <span>
              <strong>Cerrar Sesión</strong>
            </span>
          </button>
        </div>
      </nav>

      <Products carrito={carrito} setCarrito={setCarrito}/>
    </>
  );
};

export default Cliente;
