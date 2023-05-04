const poke_container = document.getElementById("poke_container");
const pokemons_number = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};
const main_types = Object.keys(colors);

const counts = {};
main_types.forEach((type) => {
  counts[type] = 0;
});

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
  main_types.forEach((type) => {
    let counts = 0;
    const button = document.getElementById(type);
    const pokemonCards = document.querySelectorAll(".pokemon");
    pokemonCards.forEach((card) => {
      const typeValue = card.querySelector(".type span").textContent;
      console.log(typeValue);
      if (typeValue == type) {
        counts++;
      }
    });
    const color = colors[type];
    button.style.backgroundColor = color;

    button.innerHTML = `${type} (${counts})`;
    button.addEventListener("click", () => {
      +filterPokemons(type);
    });
  });
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();

  createPokemonCard(pokemon);
};

function createPokemonCard(pokemon) {
  console.log(pokemon);
  console.log();
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const poke_types = pokemon.types.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const color = colors[type];

  pokemonEl.style.backgroundColor = color;

  const pokeInnerHTML = `
        <div class="img-container">
		<img src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg"/>
        </div>
        <div class="info">
            <span class="number">#${pokemon.id}</span>
            <h3 class="name">${name}</h3>
            <small class="type"><span>${type}</span></small>
        </div>
    `;

  pokemonEl.innerHTML = pokeInnerHTML;

  poke_container.appendChild(pokemonEl);

  // update the count of pokemons of the current type
  counts[type]++;
}

fetchPokemons();

const filterPokemons = (type) => {
  const pokemonCards = document.querySelectorAll(".pokemon");

  pokemonCards.forEach((card) => {
    const poke_type = card.querySelector(".type span").textContent;
    if (poke_type === type) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};

const searchBar = document.getElementById("search");
const searchButton = document.querySelector("input[value='SEARCH']");

searchButton.addEventListener("click", () => {
  const searchTerm = searchBar.value.toLowerCase();
  const pokemonCards = document.querySelectorAll(".pokemon");

  pokemonCards.forEach((card) => {
    const pokemonName = card.querySelector(".name").textContent.toLowerCase();

    if (pokemonName.includes(searchTerm)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});
