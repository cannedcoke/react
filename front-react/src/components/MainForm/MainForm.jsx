import { useState,useEffect } from "react";
import AddLink from "../AddLinkComponent/AddLinkComponent";
import AddTag from "../AddTagComponent/AddTagComponent";
import { fetchTags } from "../../../api";
import "./MainFormStyles.css"

function MainForm() {
    const[tags, SetTags] = useState([]);

    useEffect(() =>{
        async function PopulateSelect(){
            const data = await fetchTags()
            SetTags(data.tags);
        }
        PopulateSelect()
    },[]);

    const allTags = tags
    const filteredTags = tags.filter((tag) => tag.name !== "Todos")


  return (
    <div className="form-group">
      <AddLink tags={filteredTags}/>
      <AddTag />

      <div className="full-width">
        <label htmlFor="tags_input">Filtrar por etiqueta</label>
        <select name="tags" id="tags_input" required>
        <option value="" disabled>Seleccioná una etiqueta</option>
        {allTags.map((tag) => (
            <option key={tag.name} value={tag.name}>{tag.name}</option>
        ))}
        </select>
      </div>

      <div className="full-width">
        <table id="data"></table>
      </div>
    </div>
  );
}

export default MainForm;