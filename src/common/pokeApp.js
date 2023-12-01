const mainInput = document.getElementById("input");
const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

let baseID = 1;

function getPoke(value) {
  let currnetValue = value || baseID;
  fetch(baseUrl + currnetValue)
    .then((response) => response.json())
    .then((res) => {
      const data = { id: res.id, name: res.name, img: res.sprites.other.dream_world.front_default };
      baseID = data.id;
      const currentImg = document.getElementById("poke");
      const currentName = document.getElementById("pokeName");
      currentImg.setAttribute("src", data.img);
      console.log(data.name)
      currentName.innerHTML = data.name
    });
}

function getPokeNext(value) {
  console.log(value);
  if (value === "next") {
    baseID = baseID + 1;
    baseID = baseID + 1;
    getPoke();
    return;
  }
  baseID = baseID - 1;
  getPoke();
  return;
}

function inputPoke() {
    const currentValue = document.getElementById("input").value.trim()
    if (currentValue) {
        getPoke(currentValue)
    }
}

getPoke();
