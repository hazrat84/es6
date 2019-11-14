function testMsgSync() {
    return 'Hello World!';
}

// but if I write async before that function it beocmes async

async function testMsgAsync() {
    return 'Hello World!';
}

testMsgAsync().then(msg => console.log(msg));

// So testMsgAsync() behaves sort of like this, Async Behaviour
function testMsgAsync2() {
    return Promise.resolve('Hello World!');
}

testMsgAsync2().then(msg => console.log(msg));

async function oops() {
    throw "you should not have call me!";
}

// catch it
oops().catch(err => console.log(err));

// First Real example of async function, which looks like sync code

async function getStarWarsData() {
    console.log("Starting");
    let movieData = await $.getJSON(
        "https://swapi.co/api/films");
    
        // These lines do NOT run untill
        // the promise is resolved!
        console.log("all done!");
        console.log(movieData);
}

getStarWarsData();

// Now write an async function inside an object

let starWars = {
    genre: "sci-fi",
    async logMovieData() {
        let url = "https://swapi.co/api/films";
        let movieData = await $.getJSON(url);
        console.log(movieData.results);
    }
};

starWars.logMovieData();

async function getUser(user){
    try {
        let url = `https://api.github.com/users/${user}`;
        let response = await $.getJSON(url);
        console.log(`${response.name}: ${response.bio}`);
    } catch (e) {
        console.log("User does not exist!");
    }
}

getUser('hazrat84');
getUser('agtsrhd87');