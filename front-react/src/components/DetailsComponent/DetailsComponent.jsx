import { useState, useEffect } from "react";
import { fetchDetails } from "../../../api";
import { postVote } from "../../../api";

function Details({ id, onBack }) {
  const [record, SetRecord] = useState(null);

  useEffect(() => {
    async function loadDetails() {
      const data = await fetchDetails(id);
      SetRecord(data.details);
    }
    loadDetails();
  }, [id]);

  async function handleVote(id) {
    await postVote(id);
    const data = await fetchDetails(id);
    SetRecord(data.details);
  }
  if (!record) return <p>Cargando...</p>;
  const tags = Array.isArray(record.etiquetas)
    ? record.etiquetas.map((tag) => tag.name).join(", ")
    : "";

  return (
    <>
      <button id="btn-volver" onClick={onBack}>
        ← Volver
      </button>
      <table>
        <thead>
          <tr>
            <th>Enlace</th>
            <th>Etiquetas</th>
            <th>Comentarios</th>
            <th>Votos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{record.tema}</td>
            <td>{tags}</td>
            <td>{record.comment}</td>
            <td>{record.votes}</td>
            <td>
              <button className="vote_btn" onClick={()=> handleVote(id)}>
                vote
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Details;
