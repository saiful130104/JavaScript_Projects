console.log(`Let's start to learn fetching data using fetch api\n`)

// using fetch web api with promis
const baseUrl = 'https://api.github.com/users/'
const gitApi = fetch(`${baseUrl}saiful130104`)
gitApi
.then(response => response.json())
.then(user => console.log(user.bio))
.catch(err => console.log(err.message))

// using fetch web api with async await

async function getInfoFromGit(user) {
    const response = await fetch(`${baseUrl}${user}`)
    const profile = await response.json()
    console.log(profile.bio)
}

getInfoFromGit('brad')
getInfoFromGit('andrew')