/**1-Crear el navegador -
 
 * creamos una carpeta "components" donde ponemos todos los componentes, ej NavBar.js (Mayuscula). hacer rafce (automatizar export, import y funcion) 
 * agregamos el componente o otro... En App importamos navBar desde su origen
 * Para utilizarlo lo agregamos en donde quiero utilizarlo, (en el return(siempre entre parentisis y solo 1 hijo)) 
 * buscammos desde la Api(pokeApi) el logo de la imagen, la importo desde su origen <img src="" alt="">
 * se puede crear una variable antes del return -- let imgUrl= "pego direccion" <img src={imgUrl} alt="">
 * agregamos el corazon para usar con los likes (futuro especia de carito)
 * Le doy estilos al navbar con css , antes lo importo 
 * 
 
2- Crear el buscador de pokemon-

Searchbar.js dentro de component, rafce, importarlo en App.js
Creamos un input y el btn para buscar . imput con placeholder(buscar pokemon...)

creamos una constante onChange (funcion-flecha) que le va a llegar el evento(e) que mas adelante vamos a buscar .. el eventeto es (e.target.value)
-Creamos un useState, lo importamos de React
creamos en la funcion Searchbar - const [search,setSearch] = useState(""); - 
dentro de la funcion onChange, invocamos a la funcion setSearch (e.target.value); 

creamos el button "buscar" ,creamos el evento- hacemos el onClick con el nombre {search}
Dentro de la funcion searchBar crear la funcion flecha onClick, que le llega un (e)


3- Creamos un archivo fuera de component donde vamos a poner funciones de busqueda, que se llame api.js

dentro creamos - export const searchPokemon = () => {}, como prop pokemon, adentro un try{}catch(err){}
- dentro de try creamos una const response = await fetch()
-agregamos async en la funcion searchPokemon adelante de (pokemon)
-buscamos en pokeApi la ruta para copiar y pedir info
-se crea una variable url = 'copiamos enlace 'y agregamos el template string `` ${pokemon} en el final /pokemon/${pokemon}
-en la const response, agregamos (url) en el fetch
-creamos la const data = await response.json()-
retornamos data dentro del try . return data


4- importamos searchPokemon en el SearchBar
- dentro de la const onClick insertamos una const data = await searchPokemon()
-Agregamos async en onClick antes del (e)
- ponemos el valor de busqueda en el searchPokemon(search) 
para darnos cuanta que funciona , hacemos consol.log(data)


5-Vamos a usar el useState para mostrar la informacion.
dentro de la constante SearchBar, agregar una const [pokemon,setPokemon] = useState() 
-cambiar el consol.log(data) por setPokemon(data); , que quiero esa info en setPokemon 
- dentro del return del SearchBar creamos un div donde me va a pintar la info del pokemon. Dentro  hacemos una llave {pokemon && <div> 
    <div>nombre:{pokemon.name} </div>:
    <div>peso:{pokemon.weight} </div>:
    <img src={pokemon.sprites.front_default} />
</div>} 
- ahi ya se tiene que mostrar el pokemon que busco en la pantalla(DOM)
- Importante- ahora guardamos el div con la info del pokemon y la borramos dejando solo el search y el buton, despues vamos a usar el div en la grid

             {   pokemon && 
                    <div>
                        <div>Nombre: {pokemon.name}</div>   
                        <div>peso: {pokemon.weight}</div>   
                        <img src= {pokemon.sprites.front_default}/>
                    </div>
                }

- Le damos estilo al buscador y a su btn


6-Crear el Pokedex.js- hacer un componente , rafce
lo importamos en App.js, lo metemos debajo del Search
- en el componente Pokedex, agregar titulo(pokedex) y un pagination a la derecha
-hacer un <div>para el grid</div>, darle estilos para despues insertar las tarjetas 


7- pasar la info de los poquemones a los compoenntes hijos, con useState
-En App.js adentro de la funcion App, creamos una const [pokemons,setPokemons] = useState([])     - hacemos esto por que queremos que nos traiga un array[]
*(?)-Creamos un nuevo Hook, useEffect, lo invocamos como una funcion debajo del useState, lo impotamos desde 'react',
-useEffect(()=> 
            },[]) 
-con el array vacio le decimos que corra una vez el codigo cuando termina de renderizar- lo invocamos 
- para darnos cuenta de que esta funcionando hacemos un console.log("inside useEffect") adentro de la funcion useEffect()


8-vamos a api.js , export const getPokemons =async () => {
    try{}catch(err){}
}
lo completamos como el searchPokemones
- buscamos en la pokeapi y copiamos el codigo que tiene limit/Offset
- en la funcion getPokemons , le pasamos las props limit y Offset, (cuanto traer y donde comienzo a contar)
- cambiamos en la url de getPokemons el final - /v2/pokemon?limit=${limit} & offset=${offset}  


9-Vamos a obtener los pokemones dentro del useEffect para que se carguen siempre 1 vez al cargarse de la aplicacion
-En App.js dentro de la  funcion App creamos una const - funcion, fetchPokemons(), esta es una funcion async-
- conts fetchPokemons =  async ()=>{
    try{
        const data = await getPokemons();
        console.log(data);
    }catch(err){

    }
}
- importamos getPokemons desde la api.js
- invocamos a la funcion fetchPokemons dentro del useEffect
-  hacemos el  console.log dentro del fetchPokemons para saber si nos trae la informacion(data) desde la api a getPokemons, a fetchPokemons 


- 10 Vamos a pasar la info de los Pokemones a la Pokedex, para eso , le tenemos que pasar informacion del componente padre(app) al componente hijo(pokedex)
- dentro de la const funcion fetchPokemones , adentro del try, arriba del catch, ponemos setPokemons(data.results);
- en el return del App.js le vamos a pasar una variable al hijo (Pokedex)... <Pokedex pokemons={pokemons}/> 


-11 Vamos al componente Pokedex, vamos a la const funcion Pokedex y le pasamos el argumento (props), para darme cuenta que llega la info , hacemos un console.log(props) y te tienen que estar llegando los 10 pokemons , un objeto con 10 array
-para acceder a los pokemones hag dentro de la const funcion Pokedex , un const {pokemons} = props; o const pokemons = props.pokemon;
-hacer un listado con los pokemos que me llegan, para eso haccemos en el return, dentro del div pokedex-grid,
mapeo los pokemos con map,, amap le haccemps una funcion con las variables (pokemon, idx)y, retornamos esa funcion y hacemos un <div>{pokemon.name}</div>  y se me tiene que hacer un listado en la pantalla- 
<div className="div-grid">
    {pokemons.map((pokemon, idx)=>{
        return(
            <div>{pokemon.name}</div>
        )
    })}
</div>

- agregamos el indice
-al crear un listado con array siempre hay que crear un key al div recien creado
return(
    <div key={pokemon.name}># {idx+1}: {pokemon.name}</div>
)


12- creamos el componente Pokemon.js que es como la card, rafce
-hacemos un componente que no tiene estado, solo para mostrar informacion
le pasamos la props a Pokemon 
-Dentro de la funcion Pokemon creamos una const { pokemon } = props; esto para tener la info del pokemon, sustituimos la props de la funcion por props
- creamos la tarjeta en el return, con todos los <div></div> para imprimir la info traida

    <div>
        <div>
            <img src={pokemon.sprimtes.front_default} alt={pokemon.name}/>
        </div>
        <div>
            <div>
                <h3>{pokemon.name}</h3>
                <div>#{pokemon.id}</div>
            </div>
            <div>
                <div>
                    {pokemon.types.map((type,idx)=>{
                        return<div key={idx}>{type.type.name}</div>
                    })}
                </div>
                <div>❤️</div>
            </div>
            

        </div>
    </div

    
12-b- Necesitamos paras el pokemon al pokedex
- importamos pokemon en pokedex desde su origen
 vamos al componente Pokedex y cambiamos el return <Pokemon pokemon ={pokemon} key={pokemon.name}/>
 con esto todavia necesitamos traer la info del pokemon


13-  Necesito trae la info especifica de cada pokemos desde pokeapi a mi aplicacion , una forma es haccer un array de promesas.
- vamos a api.js - creamos para traer los poke de apipoke
-export const getPokemondData = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }catch(err){
    }
}
-vamos a la App.js para hacer un array de promesas
-adentro de la const funcion fetchPokemons, adentro del try, quitamos la linea setPokemos(data.result) y la remplazamos por para que nos pase un array de PROMISE ;
const promises = data.results.map((pokemon) => {

})
const results = await Promise.all(promises) 

-  voy a app.js
en la const fncion getPokemonData cambiarmos la props por (url) y borramos la variable url ="http.."

- voy a App.js
en la const promises = data.results.map(async(pokemon)=>{
      return await getPokemonData(pokemon.url)
}
Explicacion video 1:20 hs


14-dar css al grid y la card del pokemon
- ir al Componente Pokemon y agregar en el return mas infomacion para pintar del pokemon


15-hacer la pagination, para mostrar info que no se puede ver solo en una pagina, concepto de State con useState, la logica la vamos a hacer un App.js 
- adentro de la funcion App, debajo del useState de pokemon, hacemos un useState de page, de total y de loading- con sus set correspondientes
el de loading tiene el useState(false)


16-Para implementar el loading hacemos un Operario ternario de React en el return , en donde aplicaria al pokedex
- dentro del fetchPokemons , una vez que tengamos los poquemones, ponemos abajo del setPokemons(results)- setLoading(false)

|7- Creamos el Componente Pagination- rafce
- enel retunr creamos un button ,un div y otro button
- pasamos el Pagination a Poquedex, lo importo y lo remplazo donde corresponda
- vamos al componente Pagination y le pasamos funciones para ir a la derecha o a la izquieda en la pagina
- en lafuncion agregamos const{onLeftClick, onRightClick, page, totalPages} = props;
- y agregamos esas variables al return donde corresponda cda uno, 
- Voy al componente Pokedes y necesito pasarle esas funciones-  <Pagination page={1} totalPages={110}/> y le pasamos las dos funciones que faltan.
    <Pagination 
    page={1} 
    totalPages={110}
    onLeftClick={console.log()}
    onRightClick={console.log()} />
- volvemos al componenete Pagination y en el return agregamos los onClick en los botones con su llamado a la funcion correspondiente, lo chekeo en consolaa ver si llama a las funciones  ---NO FUNCIONA POR AHOIRA 


-



 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/