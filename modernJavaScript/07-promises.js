const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Sucesso!')
    // reject('Error!')

  }, 1000 /*1 second*/)
});

// apiCall
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })

const run = async () => {
  try {
    const response = await apiCall;
    console.log(response)

    console.log('Depois da promise...')
  } catch (error) {
    console.log(error)
  }
}

run()
