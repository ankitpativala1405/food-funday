export const TableMethod = {
  GetTableAll: async () => {
    const request = await fetch("http://localhost:8090/Table");
    let response = await request.json();
    return response;
  },
  GetTable: async () => {
    const { id } = req.params;
    const request = await fetch(`http://localhost:8090/Table/${{ id }}`);
    let response = await request.json();
    return response;
  },
  PostTable: async (data) => {
    const req = await fetch("http://localhost:8090/Table", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return req
  },
};
