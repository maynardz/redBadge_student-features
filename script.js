// taco fancy - https://github.com/evz/tacofancy-api
fetch('http://taco-randomizer.herokuapp.com/random/')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))


// joke api (programming) - https://sv443.net/jokeapi
fetch('https://sv443.net/jokeapi/category/Programming')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))

// jService (jeopardy question) - http://jservice.io/
fetch('http://jservice.io/api/random')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))

// Bored API - https://www.boredapi.com/documentation
fetch('http://www.boredapi.com/api/activity/')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))

// cryptonator - https://www.cryptonator.com/api/
fetch('https://api.cryptonator.com/api/ticker/ltc-usd')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))