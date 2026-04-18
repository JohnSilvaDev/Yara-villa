const API_BASE_URL = process.env.REACT_APP_API_URL || "";

export const sendInquiry = async (form) => {
  const res = await fetch(`${API_BASE_URL}/api/inquiry`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || "Error");

  return data;
};