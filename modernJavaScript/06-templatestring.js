var randomIntFromInterval = (min, max) => { 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var Marcos = 'Marcos';

function start(quantity) {
  let nao = 0;
  let sim = 0;
  for (let i = 0; i <= quantity; i++) { 
    console.log(`${name} é gênio.
      Sim ou Não??`);

    if (randomIntFromInterval(1,2) == 1) {
      console.log('Sim');
      sim++;
    } else {
      console.log('Não');
      nao++;
    }
  }

  console.log(
    `           Não: ${nao}`,
    `           Sim: ${sim}`
  );
}

start(10);

