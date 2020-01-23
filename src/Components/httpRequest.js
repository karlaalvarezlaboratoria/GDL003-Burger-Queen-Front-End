//ESTA ES LA COPIA DEL POST

const httpCall = (link, verb, body) => {
    let deploy = link,
      tokenLocal = localStorage.getItem("Token"),
      tokenHeader = "Bearer " + tokenLocal,
      databody = body
    fetch(deploy, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: tokenHeader
      },
      method: verb,
      body: JSON.stringify(databody)
    })
      .then(res => res.json())
    //   .then(data =>
    //     other()
    //   )
      .catch(err => console.log(err.message));
  };
  
  export default httpCall;
  