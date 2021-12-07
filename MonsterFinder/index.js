// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
import { monsters } from './monsters.js';

const showMonsters = monster => {
    // create monster class
    const monsterDiv = document.createElement('div');
    monsterDiv.className = "monster";

    const img = document.createElement('img');;
    img.src = `https://robohash.org/${monster.id}?set=set2`;
    img.alt = monster.name;

    const name = document.createElement('p');
    name.className = "name";
    // name.textContent = monster.name;
    name.innerHTML = monster.name;

    const email = document.createElement('p');
    email.className = "email";
    // email.textContent = monster.email;
    email.innerHTML = monster.email;

    monsterDiv.append(img, name, email);
    // appending newly created monster to the monsters.
    document.querySelector(".monsters").append(monsterDiv);
}

const showNoMonsterFound = () => {
    // create no-monster div
    const notFoundDiv = document.createElement('div');
    notFoundDiv.className ="p-5 not-found";
    notFoundDiv.style.display = 'none';

    const span = document.createElement('span');
    span.textContent = "404";

    const h1 = document.createElement('h1');
    h1.textContent = "🧟‍♂️ No Monster Found 🧟‍♂️";

    notFoundDiv.append(span, h1);
    // appending newly created notFoundMonster to the monsters.
    document.querySelector(".monsters").append(notFoundDiv);
}

// append all monster in the monsterDiv and displaying them.
monsters.forEach(element => showMonsters(element));
showNoMonsterFound();

document.querySelector('#search-monster').addEventListener('keyup', function(event){
    const keyword = event.target.value.toLowerCase();
    const monsters = document.querySelectorAll('.monster');
    let noMonsterFound = true;
    for(let monster of monsters){
        const name = monster.children[1].textContent.toLowerCase();
        const email = monster.children[2].textContent.toLowerCase();
        if(name.includes(keyword) || email.includes(keyword)){
            monster.style.display = 'block';
            noMonsterFound = false;
        }
        else
            monster.style.display = 'none';
    }
    const notFoundDiv = document.querySelector('.not-found');
    const logo = document.querySelector('.logo').children[0];
    noMonsterFound == true ? notFoundDiv.style.display = 'block' : notFoundDiv.style.display = 'none';
    noMonsterFound == true ? logo.style.transform = 'rotateX(180deg)' : logo.style.transform = 'rotateX(0deg)';
});







