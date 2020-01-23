//ESTA ES LA COPIA DEL POST

const httpCall = (link, verb, body) => {
  let deploy = link,
    tokenLocal = localStorage.getItem('Token'),
    tokenHeader = 'Bearer ' + tokenLocal,
    databody = body;

  return fetch(deploy, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: tokenHeader,
    },
    method: verb,
    body: JSON.stringify(databody),
  });
  // .then(res => res.json())
  // .then(data =>
  //   this.setState({
  //     menu: data.products,
  //     isOpen: false,
  //   })
  // .catch(err => console.log(err.message))
  // )
};

export default httpCall;
