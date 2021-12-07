// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯

showMonsters();

function showMonsters() {
    // create monster class
    const monster = document.createElement('div');
    monster.className = "monster";

    const img = document.createElement('img');;
    img.src = "https://robohash.org/6?set=set2";
    img.alt = "MD. Sakib Khan";

    const name = document.createElement('p');
    name.className = "name";
    name.textContent = "MD. Saiful Islam";

    const email = document.createElement('p');
    email.className = "email";
    email.textContent = "isaiful.mail@gmail.com";

    monster.append(img, name, email);
    console.log(monster);
    // appending newly created monster to the monsters.
    document.querySelector(".monsters").append(monster);

}

notFound();

function notFound() {
    // create no-monster div
    const notFoundDiv = document.createElement('div');
    notFoundDiv.className ="p-5 not-found";
    notFoundDiv.style.display = "none";

    const span = document.createElement('span');
    span.textContent = "404";

    const h1 = document.createElement('h1');
    h1.textContent = "🧟‍♂️ No Monster Found 🧟‍♂️";

    notFoundDiv.append(span, h1);
    console.log(notFoundDiv);
    // appending newly created notFoundMonster to the monsters.
    document.querySelector(".monsters").append(notFoundDiv);
}






