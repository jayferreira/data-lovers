// fetch('./data/pokemon/pokemon.json').then(response => {
//   return response.json();
// }).then(data => {
window.onload = function () {
  showPokemons();
  sort();
  printTable();
  drawChart();
  pokemonsAmountTable();
};

let filterMenu = document.getElementById('filter-menu');
let chooseMenu = document.getElementById('choose-menu');
let sortMenu = document.getElementById('sort-menu');

filterMenu.addEventListener('change', showChooseMenu);
chooseMenu.addEventListener('change', changeChooseMenu);
sortMenu.addEventListener('change', showPokemons);

function changeChooseMenu() {
  printTable();
  drawChart();
  pokemonsAmountTable();
  showPokemons();
}

function getPokemons() {
  // return data["pokemon"];
  return POKEMON["pokemon"];
}

function showChooseMenu() {
  let filterMenuValue = filterMenu.value;
  if (filterMenuValue === 'none') {
    chooseMenu.style.visibility = 'hidden';
  } else if (filterMenuValue === 'type' || filterMenuValue === 'weakness') {
    chooseMenu.style.visibility = 'visible';
  }
  showPokemons();
  printTable();
  pokemonsAmountTable();
}

function filter() {
  let filterMenuValue = filterMenu.value;
  let chooseMenuValue = chooseMenu.value;
  // let filteredPokemons = data["pokemon"];
  let filteredPokemons = POKEMON["pokemon"];

  if (filterMenuValue === 'type' && chooseMenuValue != 'none') {
    filteredPokemons = getPokemons().filter(tipo => tipo['type'].indexOf(chooseMenuValue) >= 0);
  } else if (filterMenuValue === 'weakness' && chooseMenuValue != 'none') {
    filteredPokemons = getPokemons().filter(tipo => tipo['weaknesses'].indexOf(chooseMenuValue) >= 0);
  } else if (filterMenuValue != 'none' && chooseMenuValue === 'none') {
    filteredPokemons = POKEMON["pokemon"];
  }

  return filteredPokemons
}

function pokemonsAmountTable() {
  let pokemonsAmountTable = document.getElementById('total-number');
  let total = filter().length;
  pokemonsAmountTable.innerHTML = `${total}`
}

function sortCandy() {
  let candy = (filter().map((pokemon) => pokemon['candy_count'])).filter(value => value);
  let sortCandy = candy.sort(function (a, b) {
    return a - b;
  });
  return sortCandy
}

function minimumCandy() {
  let minCandy = 0;
  if (sortCandy().length > 0) {
    minCandy = sortCandy()[0];
  }
  return minCandy
}

function averageCandy() {
  let avgCandy = 0;
  let sumCandy = 0;
  if (sortCandy().length > 0) {
    sumCandy = sortCandy().reduce((acc, cur) => acc + cur);
    avgCandy = parseInt(sumCandy / sortCandy().length);
  }
  return avgCandy
}

function maximumCandy() {
  let maxCandy = 0;
  if (sortCandy().length > 0) {
    maxCandy = sortCandy()[sortCandy().length - 1];
  }
  return maxCandy
}

function sortSpawnChance() {
  let spawnChance = (filter().map((pokemon) => pokemon['spawn_chance'])).filter(value => value > 0);
  let sortSpawnChance = spawnChance.sort(function (a, b) {
    return a - b;
  })
  return sortSpawnChance
}

function minimumSpawnChance() {
  let minSpawnChance = 0;
  if (sortSpawnChance().length > 0) {
    minSpawnChance = sortSpawnChance()[0];
  }
  return minSpawnChance
}

function averageSpawnChance() {
  let avgSpawnChance = 0;
  let spawnSum = 0;
  if (sortSpawnChance().length > 0) {
    spawnSum = sortSpawnChance().reduce((acc, cur) => acc + cur);
    avgSpawnChance = parseFloat(spawnSum / sortSpawnChance().length).toFixed(3);
  }
  return avgSpawnChance
}

function maximumSpawnChance() {
  let maxSpawnChance = 0;
  if (sortSpawnChance().length > 0) {
    maxSpawnChance = sortSpawnChance()[sortSpawnChance().length - 1];
  }
  return maxSpawnChance
}

function sortSpawnTime() {
  let spawnTime = (filter().map((pokemon) => pokemon['spawn_time'])).filter(value => value !== "N/A");
  let secondsArray = [];
  for (times of spawnTime) {
    let a = times.split(':');
    let seconds = (+a[0]) * 60 + (+a[1]);
    secondsArray.push(seconds);
  }
  let sortSpawnTime = secondsArray.sort(function (a, b) {
    return a - b;
  })
  return sortSpawnTime
}

function minimumSpawnTime() {
  let minSpawnTimeMinutes = '00';
  let minSpawnTimeSeconds = '00';
  if (sortSpawnTime().length > 0) {
    let spawnTime = parseInt(sortSpawnTime()[0]);
    let minSpawnTimeMin = Math.floor(spawnTime / 60);
    if (minSpawnTimeMin < 10) {
      minSpawnTimeMinutes = '0' + minSpawnTimeMin;
    } else {
      minSpawnTimeMinutes = minSpawnTimeMin;
    }
    let minSpawnTimeSec = spawnTime - minSpawnTimeMin * 60;
    if (minSpawnTimeSec < 10) {
      minSpawnTimeSeconds = '0' + minSpawnTimeSec;
    } else {
      minSpawnTimeSeconds = minSpawnTimeSec;
    }
  }
  let minSpawnTime = minSpawnTimeMinutes + ":" + minSpawnTimeSeconds;
  return minSpawnTime
}

function averageSpawnTime() {
  let avgSpawnTimeMinutes = '00';
  let avgSpawnTimeSeconds = '00';
  if (sortSpawnTime().length > 0) {
    let sumSpawnTime = sortSpawnTime().reduce((acc, cur) => acc + cur);
    let spawnTime = parseInt(sumSpawnTime / sortSpawnTime().length);
    let avgSpawnTimeMin = Math.floor(spawnTime / 60);
    if (avgSpawnTimeMin < 10) {
      avgSpawnTimeMinutes = '0' + avgSpawnTimeMin;
    } else {
      avgSpawnTimeMinutes = avgSpawnTimeMin;
    }
    let avgSpawnTimeSec = spawnTime - avgSpawnTimeMin * 60;
    if (avgSpawnTimeSec < 10) {
      avgSpawnTimeSeconds = '0' + avgSpawnTimeSec;
    } else {
      avgSpawnTimeSeconds = avgSpawnTimeSec;
    }
  }
  let avgSpawnTime = avgSpawnTimeMinutes + ":" + avgSpawnTimeSeconds;
  return avgSpawnTime
}

function maximumSpawnTime() {
  let maxSpawnTimeMinutes = '00';
  let maxSpawnTimeSeconds = '00';
  if (sortSpawnTime().length > 0) {
    let maxSpawnTime = sortSpawnTime()[sortSpawnTime().length - 1];
    let maxSpawnTimeMin = Math.floor(maxSpawnTime / 60);
    if (maxSpawnTimeMin < 10) {
      maxSpawnTimeMinutes = '0' + maxSpawnTimeMin;
    } else {
      maxSpawnTimeMinutes = maxSpawnTimeMin;
    }

    maxSpawnTimeSec = maxSpawnTime - maxSpawnTimeMin * 60;
    if (maxSpawnTimeSec < 10) {
      maxSpawnTimeSeconds = '0' + maxSpawnTimeSec;
    } else {
      maxSpawnTimeSeconds = maxSpawnTimeSec;
    }
  }
  let maxSpawnTime = maxSpawnTimeMinutes + ":" + maxSpawnTimeSeconds;
  return maxSpawnTime
}


function printTable() {
  let calcTable = document.getElementById("calc-table");
  calcTable.innerHTML = `
  <tr>
      <th></th>
      <th>Candy</th>
      <th>Spawn Chance</th>
      <th>Spawn Time</th>
    </tr>
    <tr>
      <th>Mín</th>
      <th>${minimumCandy()}</th>
      <th>${minimumSpawnChance()} %</th>
      <th>${minimumSpawnTime()}</th>
      
    </tr>
    <tr>
      <th>Média</th>
      <th>${averageCandy()}</th>
      <th>${averageSpawnChance()} %</th>
      <th>${averageSpawnTime()}</th>
    </tr>
    <tr>
      <th>Máx</th>
      <th>${maximumCandy()}</th>
      <th>${maximumSpawnChance()} %</th>
      <th>${maximumSpawnTime()}</th>
    </tr>`
}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  let data = google.visualization.arrayToDataTable([
    ['Year', 'Candy'],
    ['Min', minimumCandy()],
    ['Med', averageCandy()],
    ['Max', maximumCandy()]
  ]);

  let options = {
    title: 'Candy to Evolve',
    hAxis: { title: '', titleTextStyle: { color: 'red' } },
    vAxis: { minValue: 0 }
  };

  let chart = new google.visualization.AreaChart(document.getElementById('chart-div'));
  chart.draw(data, options);
}

function sort() {
  let sortMenuValue = sortMenu.value;
  let sortValue = sortMenuValue;

  if (sortMenuValue === 'none') {
    sortValue = 'num';
  }
  let orderedPokemons = filter().sort(function (a, b) {

    if (a[sortValue] < b[sortValue]) {
      return -1;
    }
    if (a[sortValue] > b[sortValue]) {
      return 1;
    }
    if (!a[sortValue]) {
      return 1;
    }
    if (!b[sortValue]) {
      return -1;
    }
    return 0;
  })

  return orderedPokemons
}

function showPokemons() {
  let pokemonDiv = document.getElementById("pokemons-container")
  pokemonDiv.innerHTML = `
    ${sort().map((pokemon) => `
    <div class="pokemons-card">
        <p class="card-img"><img src="${pokemon["img"]}"</p>
        <h2 class="card-name">${pokemon["name"]}</h3>
        <p class="card-num">${pokemon["num"]}</p>
      <div class="card-type">${pokemon["type"].map((type) => `
        <p>${type}</p>`).join('')}
      </div>
      ${pokemon["candy_count"] ? `<p class="card-candy">Candy to evolve: <span class="candy-value">${pokemon["candy_count"]}</span></p>` : ''}
      <div class="card-spawn">
        <div class="card-spawn-chance">
          <p class="spawn-chance-title">Spawn Chance</p>
          <p class="spawn-chance-value">${pokemon["spawn_chance"]}%</p>
        </div>
        <div class="card-spawn-time">
          <p class="spawn-time-title">Spawn Time</p>
          <p class="spawn-time-value">${pokemon["spawn_time"]}</p>
        </div>
      </div>
    </div >
      
      `).join('')}
      `
}

// })