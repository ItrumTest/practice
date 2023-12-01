const mainInput = document.getElementById("input");
const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

let baseID = 1;

async function getPoke(value) {
  let currnetValue = value || baseID;
  try {
    await fetch(baseUrl + currnetValue)
      .then((response) => response.json())
      .then((res) => {
        const data = { id: res.id, name: res.name, img: res.sprites.other.dream_world.front_default };
        baseID = data.id;
        const currentImg = document.getElementById("poke");
        const currentName = document.getElementById("pokeName");
        currentImg.setAttribute("src", data.img);
        currentName.innerHTML = data.name;
      });
  } catch (error) {
    const currentName = document.getElementById("pokeName");
    const currentImg = document.getElementById("poke");
    const notFound = "./notFound.avif"
    currentImg.setAttribute("src", notFound);
    currentName.innerHTML = "current poke name doesn't exist";
  }
}

function getPokeNext(value) {
  if (value === "next") {
    baseID = baseID + 1;
    getPoke();
    return;
  }
  baseID = baseID - 1;
  getPoke();
  return;
}

function inputPoke() {
  const currentValue = document.getElementById("input").value.trim();
  if (currentValue) {
    getPoke(currentValue);
  }
}

getPoke();
