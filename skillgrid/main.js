const ctx = document.getElementById('js--chart--1');
const bar2 = document.getElementById('js--chart--2');

const doughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost',
            'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy',],
        datasets: [{
            label: '# of Pokémon',
            data: Array(20).fill(0),
            borderWidth: 1
        }]
    }
});

const barChart = new Chart(bar2, {
    type: 'bar',
    data: {
        labels: ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost',
            'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'],
        datasets: [{
            label: '# of Pokémon',
            data: Array(20).fill(0),
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

async function getPokemon() {
    let typesCount = {
        normal: 0, fighting: 0, flying: 0, poison: 0, ground: 0, rock: 0, bug: 0, ghost: 0,
        steel: 0, fire: 0, water: 0, grass: 0, electric: 0, psychic: 0, ice: 0, dragon: 0, dark: 0, fairy: 0, unknown: 0, shadow: 0
    };

    const totalPokemon = 1000;
    const fetchPromises = [];

    for (let i = 1; i <= totalPokemon; i++) {
        const fetchPromise = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response => response.json())
            .then(pokemon => {
                if (pokemon.types && pokemon.types[0] && pokemon.types[0].type && pokemon.types[0].type.name) {
                    const type = pokemon.types[0].type.name;
                    if (typesCount.hasOwnProperty(type)) {
                        typesCount[type]++;
                    }
                }
            })
            .catch(error => console.error('Error fetching Pokémon:', error));

        fetchPromises.push(fetchPromise);
    }

    await Promise.all(fetchPromises);

    const dataValues = Object.values(typesCount);

    doughnutChart.data.datasets[0].data = dataValues;
    doughnutChart.update();

    barChart.data.datasets[0].data = dataValues;
    barChart.update();
}

getPokemon();


function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // Adds leading zero if necessary
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Adds leading zero if necessary
    
    const timeString = `${hours}:${minutes}`;
    
    document.getElementById('time').textContent = timeString;
}

// Update time every minute (60000 ms)
setInterval(updateTime, 60000);




const tijdVak = document.getElementById("js--tijdVak");

setInterval(function(){
    var d = new Date();

    var uur = d.getHours();
    var minuten = d.getMinutes();

    if(minuten < 10){
      const tijd = uur+":0"+minuten;
      tijdVak.innerText = tijd;
    }
    else{
      const tijd = uur+":"+minuten;
      tijdVak.innerText = tijd;
    }
  }, 1000);