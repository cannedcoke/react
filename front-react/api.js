// en este archivo tengo todas mis funciones para los fetch

// llama al endpoint de llenar el select
export async function fetchTags() {
  const response = await fetch("http://localhost:5000/api/populateSelect");
  if (!response.ok) throw new Error("buu no anda");
  return response.json();
}

// llama al endpoint para agregar un nuevo registro
export async function postLink(link, selectedTags) {
  const response = await fetch("http://localhost:5000/api/addLink", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ link, selectedTags }),
  });
  if (!response.ok) throw new Error("buu no anda");
  return response.json();
}

// llama al endpoint para agregar tags
export async function postTag(tag) {
  const response = await fetch("http://localhost:5000/api/addTag", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tag }),
  });
  if (!response.ok) throw new Error("buu no anda");
  return response.json();
}

// llama al endponit para obtener los registros filtrados
export async function filterByTag(tag) {
  const response = await fetch("http://localhost:5000/api/filter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tag }),
  });
  if (!response.ok) throw new Error("buu no anda");
  return response.json();
}

// llama al endpont para obtener detalles de los registros
export async function fetchDetails(id) {
  const response = await fetch("http://localhost:5000/api/details", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  if (!response.ok) throw new Error("buu no anda");
  return response.json();
}

// llama al endpoint para agregar un voto
export async function postVote(id) {
  const response = await fetch("http://localhost:5000/api/addVote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  if (!response.ok) throw new Error("buu no anda");
  return response.json();
}

// llama al endpoint par agaregar comentarios
export async function postComment(id, input) {
  const response = await fetch("http://localhost:5000/api/addComment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, input }),
  });
  if (!response.ok) throw new Error("buu no anda");
  return response.json();
}
