import { useState } from "react";
import { postTag } from "../../../api";

// elemento para agregar etiquetas
function AddTag() {
  const [tag, SetTag] = useState("");

  async function addTag() {
    if (!tag) {
      window.alert("completa el campo");
      return;
    }
    
    await postTag(tag)
    window.alert("done");
    SetTag("");
  }

  return (
    <div className="col">
      <div className="field-group">
        <label htmlFor="new_tag_input">Nueva etiqueta</label>
        <input
          type="text"
          id="new_tag_input"
          placeholder="Nombre de etiqueta"
          value={tag}
          onChange={(e)=> SetTag(e.target.value)}
        />
        <button id="add_tag_btn" onClick={addTag}>Agregar etiqueta</button>
      </div>
    </div>
  );
}

export default AddTag;


