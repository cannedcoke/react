import { useState, useEffect } from "react";
import AddLink from "../AddLinkComponent/AddLinkComponent";
import AddTag from "../AddTagComponent/AddTagComponent";
import { fetchTags, filterByTag, postVote,postComment } from "../../../api";
import "./MainFormStyles.css";

function MainForm({ onSelectDetail }) {
  const [tags, SetTags] = useState([]);
  const [records, SetRecords] =useState([])
  const [visibility, SetVisibility] = useState(null)
  const [commentText,SetCommentText ] = useState('')
  const [selectedTag, SetSelectedTag] = useState('')

  useEffect(() => {
    async function PopulateSelect() {
      const data = await fetchTags();
      SetTags(data.tags);
    }
    PopulateSelect();
  }, []);
  
  async function handleFilter(e) {
    const tag = e.target.value
    SetSelectedTag(tag)
    const data = await filterByTag(tag)
    SetRecords(data.records) 
  }

  async function handleVote(id) {
    await postVote(id)
    const data= await filterByTag(selectedTag)
    SetRecords(data.records)
    window.alert('yo added one vote')
  }


  function ChangeVisibility(id) {
    SetVisibility(visibility === id ? null : id);
    SetCommentText('');
  }

  async function handleSendComment(id) {
    await postComment(id,commentText)
    window.alert("comment saved")
    SetVisibility(null)
    SetCommentText('')
  }
   return (
      <div className="form-group">
        <AddLink tags={tags.filter(t => t.name !== "Todos")} />
        <AddTag />

        <div className="full-width">
          <label htmlFor="tags_input">Filtrar por etiqueta</label>
          <select name="tags" id="tags_input" onChange={handleFilter}>
            <option value="" disabled>Seleccioná una etiqueta</option>
            {tags.map((tag) => (
              <option key={tag.name} value={tag.name}>{tag.name}</option>
            ))}
          </select>
        </div>

        {selectedTag && (
          <div className="full-width">
            <table>
              <thead>
                <tr>
                  <th>Enlace</th>
                  <th>Etiquetas</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => {
                  const recordTags = Array.isArray(record.etiquetas)
                    ? record.etiquetas.map((t) => t.name).join(", ")
                    : "";
                  return (
                    <tr  key={record._id}>
                      <td>{record.tema}</td>
                      <td>{recordTags}</td>
                      <td className="acciones">
                        <button className="detalles_btn" onClick={() => onSelectDetail(record._id)}>detalles</button>
                        <button className="vote_btn" onClick={() => handleVote(record._id)}>vote</button>
                        <button className="comment_btn" onClick={() => ChangeVisibility(record._id)}>Add a comment</button>
                        {visibility === record._id && (
                          <>
                            <input
                              className="comment_input"
                              placeholder="add a comment"
                              value={commentText}
                              onChange={(e) => SetCommentText(e.target.value)}
                            />
                            <button  className="send" onClick={() => handleSendComment(record._id)}>send</button>
                          </>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
    </div>
  );
}

export default MainForm;
