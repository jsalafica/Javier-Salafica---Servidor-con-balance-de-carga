const randomIntFromInterval = (min, max) => {
  // Formula que genera numeros random entre min y max
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandom = (quantity) => {
  const result = {};

  for (let i = 0; i < quantity; i++) {
    const randomNumber = randomIntFromInterval(1, 1000);

    // Almacena numero random y verifica si ya existe, le suma 1
    result[randomNumber] = result[randomNumber] ? result[randomNumber] + 1 : 1;
  }

  return result;
};

process.on("message", (quantity) => {
  const response = getRandom(quantity);

  process.send(response);
});
