// var sizes = [4, 9, 10, 5, 110, 95, 40, 40];
// var names = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
// var colours = ["grey", "brown", "blue", "red", "sienna", "pink", "blue", "cyan"];

var planets = [
	{
		size: 4,
		name: "Mercury",
		color: "grey"
	},
	{
		size: 9,
		name: "Venus",
		color: "brown"
	},
	{
		size: 10,
		name: "Earth",
		color: "blue"
	},
	{
		size: 5,
		name: "Mars",
		color: "red"
	},
	{
		size: 110,
		name: "Jupiter",
		color: "sienna"
	},
	{
		size: 95,
		name: "Saturn",
		color: "pink"
	},
	{
		size: 40,
		name: "Neptune",
		color: "blue"
	},
	{
		size: 40,
		name: "Uranus",
		color: "cyan"
	},
	{
		size: 50,
		name: "Pluto",
		color: "teal"
	}
]

function setup()
{
	createCanvas(planets.length*125, 600);
}



function draw()
{
	background(0);
	textAlign(CENTER);
	fill(255);

	for (var i = 0; i < planets.length; i++) // counts how many planets there are
	{
        fill(planets[i].color);
        ellipse(50 + 125 * i, height / 2, planets[i].size);
        fill(255);
        text(planets[i].name, 50 + 125 * i, height / 2 + 150);
    }

	var gaps = [1, 3, 9, 12];

for(var i = 0; i < 100; i++){
  var x = gaps[round(random(0, 4))];
  line(x, 0, x, height);
}
}