import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PokemonCard from "./PokemonCard";

const Pokedex =()=> {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));
    const data = {"count":1302,"items":[{"id":1,"name":"bulbasaur","weight":69,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}},{"id":2,"name":"ivysaur","weight":130,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"}},{"id":3,"name":"venusaur","weight":1000,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"}},{"id":4,"name":"charmander","weight":85,"types":[{"type":{"name":"fire","url":"https://pokeapi.co/api/v2/type/10/"},"slot":1}],"abilities":[{"ability":{"name":"blaze","url":"https://pokeapi.co/api/v2/ability/66/"},"is_hidden":false,"slot":1},{"ability":{"name":"solar-power","url":"https://pokeapi.co/api/v2/ability/94/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"}},{"id":5,"name":"charmeleon","weight":190,"types":[{"type":{"name":"fire","url":"https://pokeapi.co/api/v2/type/10/"},"slot":1}],"abilities":[{"ability":{"name":"blaze","url":"https://pokeapi.co/api/v2/ability/66/"},"is_hidden":false,"slot":1},{"ability":{"name":"solar-power","url":"https://pokeapi.co/api/v2/ability/94/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"}},{"id":6,"name":"charizard","weight":905,"types":[{"type":{"name":"fire","url":"https://pokeapi.co/api/v2/type/10/"},"slot":1},{"type":{"name":"flying","url":"https://pokeapi.co/api/v2/type/3/"},"slot":2}],"abilities":[{"ability":{"name":"blaze","url":"https://pokeapi.co/api/v2/ability/66/"},"is_hidden":false,"slot":1},{"ability":{"name":"solar-power","url":"https://pokeapi.co/api/v2/ability/94/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"}},{"id":7,"name":"squirtle","weight":90,"types":[{"type":{"name":"water","url":"https://pokeapi.co/api/v2/type/11/"},"slot":1}],"abilities":[{"ability":{"name":"torrent","url":"https://pokeapi.co/api/v2/ability/67/"},"is_hidden":false,"slot":1},{"ability":{"name":"rain-dish","url":"https://pokeapi.co/api/v2/ability/44/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"}},{"id":8,"name":"wartortle","weight":225,"types":[{"type":{"name":"water","url":"https://pokeapi.co/api/v2/type/11/"},"slot":1}],"abilities":[{"ability":{"name":"torrent","url":"https://pokeapi.co/api/v2/ability/67/"},"is_hidden":false,"slot":1},{"ability":{"name":"rain-dish","url":"https://pokeapi.co/api/v2/ability/44/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"}},{"id":9,"name":"blastoise","weight":855,"types":[{"type":{"name":"water","url":"https://pokeapi.co/api/v2/type/11/"},"slot":1}],"abilities":[{"ability":{"name":"torrent","url":"https://pokeapi.co/api/v2/ability/67/"},"is_hidden":false,"slot":1},{"ability":{"name":"rain-dish","url":"https://pokeapi.co/api/v2/ability/44/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"}},{"id":10,"name":"caterpie","weight":29,"types":[{"type":{"name":"bug","url":"https://pokeapi.co/api/v2/type/7/"},"slot":1}],"abilities":[{"ability":{"name":"shield-dust","url":"https://pokeapi.co/api/v2/ability/19/"},"is_hidden":false,"slot":1},{"ability":{"name":"run-away","url":"https://pokeapi.co/api/v2/ability/50/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}}]}

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {data.items.map((item, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item><PokemonCard item = {item}></PokemonCard></Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
export default Pokedex;