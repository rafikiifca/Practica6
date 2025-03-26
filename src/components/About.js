import PokemonCard from "./PokemonCard";

const About = () =>{
    const data = {"count":1302,"items":[{"id":1,"name":"bulbasaur","weight":69,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}}]}

    return(
        <div>
            {data.items.map((item, ) => (<PokemonCard item = {item}/> ))}

        </div>
    )
}

export default About;