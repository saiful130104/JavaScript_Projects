// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯

const CLIENT_ID = "487e9cdec9c32eb50e98";
const CLIENT_SECRET = "eb19f27ce926fcc82e396edae7c79f22c8fc596a";
const apiUrl = 'https://api.github.com/users/';

async function getUser(name){
    const response = await fetch(`${apiUrl}${name}?CLIENT_ID=${CLIENT_ID}&CLIENT_SECRET=${CLIENT_SECRET}`) ;
    return await response.json();
}

async function getRepos(repos_url){
    const response = await fetch(`${repos_url}?CLIENT_ID=${CLIENT_ID}&CLIENT_SECRET=${CLIENT_SECRET}&per_page=10`) ;
    return await response.json(); 
}
function showProfile(user){
    document.querySelector('.profile').innerHTML=`
    <img
        src=${user.avatar_url}
        alt=${user.name}
    />
    <p class="name">${user.name}</p>
    <p class="username login">${user.login}</p>
    <p class="bio">
        ${user.bio}
    </p>

    <div class="followers-stars">
    <p>
        <ion-icon name="people-outline"></ion-icon>
        <span class="followers"> ${user.followers} </span> followers
    </p>
    <span class="dot">·</span>
    <p><span class="following"> ${user.following} </span> following</p>
    </div>

    <p class="company">
    <ion-icon name="business-outline"></ion-icon>
    ${user.company}
    </p>
    <p class="location">
    <ion-icon name="location-outline"></ion-icon>${user.location}
    </p>
    `;
}

function createRepoHTML(repo){
    return `
    <div class="repo">
        <div class="repo_name">
            <a href=${repo.html_url}>${repo.name}</a>
        </div>
        <p>
            <span class="circle"></span> ${repo.language}
            <ion-icon name="star-outline"></ion-icon> ${repo.watchers}
            <ion-icon name="git-branch-outline"></ion-icon> ${repo.forks_count}
        </p>
    </div>
    `;
}

function showRepo(repos){
    const repositors = document.querySelector('.repos');
    repositors.innerHTML = '';
    repos.forEach(element => {
        const repoHtml = createRepoHTML(element);
        //console.log(repoHtml);
        repositors.innerHTML += repoHtml;
    });
}

document.querySelector("#search").addEventListener('submit', async event => {
    event.preventDefault();
    const userName = document.querySelector('#findByUsername').value;
    const profile = await getUser(userName);
    const repos = await getRepos(profile.repos_url);
    showProfile(profile);
    showRepo(repos);
});
