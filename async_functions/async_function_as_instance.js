// async function as isntance

class Pokemon {
    constructor(id) {
        this.id = id;
    }

    async logName() {
        let url = `https://pokeapi.co/api/v2/pokemon/${this.id}/`;
        let response = await $.getJSON(url);
        console.log(response.name);
    }
}

pokemon = new Pokemon(10);
pokemon.logName();