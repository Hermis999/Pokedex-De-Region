const Pokedex = ["pikachu", "pidgey", "ratata", "bellsprout", "zubat", "diglet", "machops", "tentacool", "slowpoke", "seel"]

console.log("Pokedex inicial:", Pokedex)

//segunda

//ZONAS:
//pradera
Pokedex.push("caterpie")
Pokedex.push("weedle")
Pokedex.push("jigglypuff")

//cueva
Pokedex.push("geodude")
Pokedex.push("onix")
Pokedex.push("muk")

//mar
Pokedex.push("poliwag")
Pokedex.push("psyduck")
Pokedex.push("shellder")

console.log("Pokedex push:", Pokedex)

//tercera



Pokedex[0] = "eevee"
Pokedex[1] = "pichu"
Pokedex[2] = "mew"

console.log("Pokedex update:", Pokedex)

Pokedex.splice(3, 1)
Pokedex.splice(5, 1)
Pokedex.splice(7, 1)
Pokedex.splice(9, 1)

console.log("Pokedex splice:", Pokedex)

try { Pokedex = [] } catch (e) { console.log("Prohibido con const:", e.message) }
console.log("Pokedex tras tercera:", Pokedex)


//cuarta


/*

Lo que sí se puede hacer con const pokedex:
- Agregar elementos con .push() → Ejemplo: pokedex.push("Snorlax")
- Quitar elementos con .splice() → Ejemplo: pokedex.splice(2, 1)
- Cambiar elementos por índice → Ejemplo: pokedex[0] = "Eevee"

 Lo que NO se puede hacer con const pokedex:
- Reasignar el array completo → Ejemplo: pokedex = [] → ❌ Esto da error

*/