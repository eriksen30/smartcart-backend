import React from "react";
import { useNavigate } from "react-router-dom";

import { FaUser, FaUsers, FaBox, FaUserPlus, FaChartBar } from "react-icons/fa";

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const opciones = [
    {
      nombre: "Gestionar Productos",
      ruta: "admin/productos",
      icon: <FaBox size={30} />,
    },
    { nombre: "Clientes", ruta: "admin/clientes", icon: <FaUsers size={30} /> },
    {
      nombre: "Registrar Personal",
      ruta: "admin/personal",
      icon: <FaUserPlus size={30} />,
    },
    {
      nombre: "Reportes",
      ruta: "admin/reportes",
      icon: <FaChartBar size={30} />,
    },
  ];

  return (
    <>
      <div style={{backgroundColor: "#adb5bd"}}>
        <nav className="navbar bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand text-white">Smart Cart - Administrador</a>
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

        <div
          className="container mt-5"
          style={{
            //backgroundColor: "#0d6efd",
            minHeight: "100vh",
            padding: "2rem",
            borderRadius: "10px",
          }}
        >
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {opciones.map((opcion, index) => (
              <div className="col" key={index}>
                <div
                  className="border border-black p-4 text-center shadow-sm rounded hover-shadow"
                  role="button"
                  style={{
                    minHeight: "150px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.classList.add(
                      "shadow-sm",
                      "bg-success-subtle",
                      "rounded"
                    );
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.classList.add(
                      "shadow-sm",
                      "bg-success-subtle",
                      "rounded"
                    );
                  }}
                  onClick={() => navigate(opcion.ruta)}
                >
                  <div className="mb-2">{opcion.icon}</div>
                  <h5 className="m-0">{opcion.nombre}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
