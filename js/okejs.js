function Pokemon(nombre, color, nivelDeAmistadd, vida, poderDeAtaque){
	this.nombre = nombre;
	this.color = color;
	this.nivelDeAmistadd = nivelDeAmistadd;
	this.vida = vida;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon =	function(){
	var pokemon = document.getElementById('contenedor');
    pokemon.innerHTML += ("Hola, soy: " + this.nombre + "<br> Color: " + this.color + "<br> Poder de ataque: " + this.poderDeAtaque + "<br>")
  	}

	this.aumentarAmistad =	function(valor){
	this.nivelDeAmistadd = this.nivelDeAmistadd + valor
	}

	this.atacar =	function(pokemon){
    pokemon.vida = pokemon.vida - this.poderDeAtaque
	}
}


const Pikachu = new Pokemon("Pikachu", "amarillo", 98)
document.getElementById("contenedor").innerHTML += "<img src='Pikachu.png' width='100'>";
const Charmander = new Pokemon("Charmander", "naranjo", 96)
document.getElementById("contenedor").innerHTML += "<img src='Charmander.png' width='100'>";
const Squirtle = new Pokemon("Squirtle", "celeste", 70)
document.getElementById("contenedor").innerHTML += "<img src='Squirtle.png' width='100'>";
const Bulbasaur = new Pokemon("Bulbasaur", "verde", 50)
document.getElementById("contenedor").innerHTML += "<img src='images.png' width='100'>";



function pelea(){
	var pokemon1 = document.getElementById('pokemon1').value
	var pokemon2 = document.getElementById('pokemon2').value

	var number = Math.floor((Math.random() * 100) + 1);	
	var retador = new Pokemon(pokemon1, "Red", number, 100, number);
	var retado = new Pokemon(pokemon2, "Blue", number, 100, number);
		if(retado.nombre == aretado.nombre){
			alert("Selecciona pokemones diferentes!");
} else{
	atacante.atacar(atacado);
	var message = document.getElementById("mensaje");
	var mensaje1 = (atacante.nombre + " atacó a " + retado.nombre + " y le queda " + retado.vida + " puntos de vida");
	message.innerHTML = mensaje1;
	}
}