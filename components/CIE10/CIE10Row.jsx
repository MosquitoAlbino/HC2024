import React from "react";
import Input from "../Input";

const CIE10Row = ({ item, handleDelete }) => {
  return (
    <div className="diagnostic-impression-item">
      <div className="diagnostic-impression-item__code">
        <Input label="Código:" defaultValue={item.code} />
      </div>
      <div className="diagnostic-impression-item__name">
        <Input label="Nombre:" defaultValue={item.name} />
      </div>
      <div className="diagnostic-impression-item__type-container">
        <label htmlFor="cie10-type" className="input-text__label">
          Tipo de diagnostico:
        </label>
        <select
          name="cie10-type"
          id="cie10-type"
          className="diagnostic-impression-item__type"
        >
          <option value="impresion-diagnostica">Impresion diagnostica</option>
          <option value="confirmado-nuevo">Confirmado nuevo</option>
          <option value="confirmado-repetido">Confirmado repetido</option>
        </select>
      </div>
      <div className="diagnostic-impression-item__close-container">
        <button
          className="diagnostic-impression-item__close"
          onClick={() => handleDelete(item)}
        >
          Eliminar
        </button>
      </div>

      <style jsx>{`
        .diagnostic-impression-item {
          display: flex;
          margin-top: 0.8rem;
          justify-content: space-between;
        }

        .diagnostic-impression-item__code {
          width: calc(35% - 1rem);
        }

        .diagnostic-impression-item__name {
          width: calc(35% - 1rem);
        }

        .diagnostic-impression-item__type-container {
          width: calc(20% - 1rem);
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
        }

        .diagnostic-impression-item__type {
          width: 100%;
          height: 26px;
        }

        .diagnostic-impression-item__close-container {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          width: 10%;
        }

        .diagnostic-impression-item__close {
          width: 100%;
          padding: 0.4rem;
          border-radius: 4px;
          background-color: rgb(170, 52, 52);
          color: white;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.3);
        }

        .input-text__label {
          margin-top: 0;
          letter-spacing: 1px;
          font-size: 0.6rem;
          color: #333;
          display: block;
        }
      `}</style>
    </div>
  );
};

export default CIE10Row;
