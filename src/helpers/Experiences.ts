import Store from "./Store";

const all = async () => {
  const token = await Store.get("token");
  const response = await fetch(
    `${process.env.REACT_APP_API}/api/experience`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token" : token 
      }
    }
  );

  if (!response.ok) {
    return false;
  } else {
    return await response.json();
  }
}

export { all };
