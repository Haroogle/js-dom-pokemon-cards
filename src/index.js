console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);

function createAndAppendPokemonCard(pokemonJSObject) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  const img = document.createElement("img");
  const cardUl = document.createElement("ul");
  li.setAttribute("class", "card");
  h2.setAttribute("class", "card--title");
  h2.setAttribute("style", "text-transform: capitalize");
  img.setAttribute("class", "card--img");
  img.setAttribute("width", 256);
  img.setAttribute(
    "src",
    data[pokemonJSObject].sprites.other["official-artwork"].front_default
  );
  cardUl.setAttribute("class", "card--text");
  ul.appendChild(li);
  li.appendChild(h2);
  li.appendChild(img);
  li.appendChild(cardUl);
  h2.innerText = data[pokemonJSObject].name;
  for (i = 0; i < data[pokemonJSObject].stats.length; i++) {
    const cardLi = document.createElement("li");
    cardLi.setAttribute("style", "text-transform: uppercase");
    cardUl.appendChild(cardLi);
    cardLi.innerText =
      data[i].stats[i].stat.name + ":" + data[i].stats[i].base_stat;
  }
}
for (let i = 0; i < data.length; i++) {
  createAndAppendPokemonCard(i);
}
