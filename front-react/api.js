export async function fetchTags() {
  const response = await fetch("http://localhost:5000/api/pupulateSelect");
  if (!response.ok) throw new Error("buu no anda");
  return response.json();
}

export async function postLink(link, selectedTags) {
  const response = await fetch("http://localhost:5000/api/addLink", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ link, selectedTags }),
  });
  if (!response.ok) throw new Error("buu no anda");
  return response.json();
}

export async function postTag(tag) {
  const response = await fetch("http://localhost:5000/api/addTag", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tag }),
  });
  if (!response.ok) throw new Error("buu no anda");
  return response.json();
}

export async function filterByTag(tag) {
  const response = await fetch("http://localhost:5000/api/filter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tag }),
  });
  if (!response.ok) throw new Error("buu no anda");
  return response.json();
}

export async function fetchDetails(id) {
  const response = await fetch("http://localhost:5000/api/details", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  if (!response.ok) throw new Error("buu no anda");
  return response.json();
}

export async function postVote(id) {
  const response = await fetch("http://localhost:5000/api/addVote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  if (!response.ok) throw new Error("buu no anda");
  return response.json();
}

export async function postComment(id, input) {
  const response = await fetch("http://localhost:5000/api/addComment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, input }),
  });
  if (!response.ok) throw new Error("buu no anda");
  return response.json();
}