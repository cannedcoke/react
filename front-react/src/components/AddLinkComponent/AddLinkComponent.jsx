import { useState } from "react";
import { postLink } from "../../../api";

// componente para agregar links
function AddLink({tags}){
    const [link, setLink] = useState('');
    const [selectedTags, SetSelectedTags]= useState([])

    async function addLink() {
        if(!link || selectedTags.length === 0){
            window.alert("completa los campos")
            return;
        }

        await postLink(link,selectedTags)
        window.alert('done')
        setLink('');
        SetSelectedTags([])

    }
    function handleTagSelected(e){
        const selected = Array.from(e.target.selectedOptions).map((opt) => opt.value);
        SetSelectedTags(selected);
    }

    return(
    <div className="col">
      <div className="field-group">
        <label htmlFor="link_input">Agregar enlace</label>
        <input type="url" id="link_input" placeholder="https://whatever.com" value={link} onChange={(e)=> setLink(e.target.value)} required/>
        <label htmlFor="tags_new_link">Etiquetas del link</label>
        <select name="tags" id="tags_new_link" multiple required onChange={handleTagSelected}>
        <option value="" disabled>Seleccioná una etiqueta</option>
        {tags.map((tag) => (
            <option key={tag.name} value={tag.name}>{tag.name}</option>
        ))}
        </select>
        <button id="add_link_btn" onClick={addLink}>Agregar link</button>
      </div>
    </div>
    )
}
export default AddLink;