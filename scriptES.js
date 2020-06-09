var quotesD = [
	{
		quote:
			"La moral no es la doctrina de cómo podemos hacernos felices, sino de cómo podemos hacernos dignos de serlo.",
		autor: "Immanuel Kant",
	},
	{
		quote: "El hombre es la única criatura que se niega a ser lo que es.",
		autor: "Albert Camus",
	},
	{
		quote:
			"Ya es bastante difícil recordar mis opiniones, sin recordar también mis razones para ellas!.",
		autor: "Friedrich Nietzsche",
	},
	{
		quote:
			"No existe nada bueno ni malo; es el pensamiento humano el que lo hace parecer así.",
		autor: "William Shakespeare",
	},
	{
		quote:
			"Nunca dejes que tu sentido de la moral te impida hacer lo correcto.",
		autor: "Isaac Asimov",
	},
	{
		quote:
			"Los sabios hablan porque tienen algo que decir; los tontos porque tienen que decir algo.",
		autor: "Platón",
	},
	{
		quote: "No puedo enseñarle nada a nadie. Sólo puedo hacerles pensar.",
		autor: "Sócrates",
	},
	{
		quote:
			" El precio que los buenos hombres pagan por la indiferencia hacia los asuntos públicos, es el de ser gobernados por los hombres malos.",
		autor: "Platón",
	},
	{
		quote: "La vida es muy simple, pero insistimos en complicarla.",
		autor: "Confucio",
	},
	{
		quote:
			"No es lo que te pasa, sino cómo reaccionas ante ello lo que importa.",
		autor: "Epicteto",
	},
	{
		quote:
			"El que se ríe de sí mismo nunca se queda sin cosas de las que reírse.",
		autor: "Epicteto",
	},
	{
		quote: "Conocerse a sí mismo es el comienzo de toda la sabiduría.",
		autor: "Aristóteles",
	},
	{
		quote:
			"La religión es considerada por la gente común como verdadera, por los sabios como falsa, y por los gobernantes como útil.",
		autor: "Seneca",
	},
	{
		quote:
			"No es el hombre que tiene muy poco, sino el que anhela más, el que es pobre.",
		autor: "Seneca",
	},
	{
		quote:
			"Tienes poder sobre tu mente, no sobre los eventos externos. Date cuenta de esto, y encontrarás la fuerza.",
		autor: "Marco Aurelio",
	},
	{
		quote:
			"Todo lo que oímos es una opinión, no un hecho. Todo lo que vemos es una perspectiva, no la verdad.",
		autor: "Marco Aurelio",
	},
	{
		quote:
			"Aquel que no puede vivir en sociedad, o que no tiene necesidad porque se basta a sí mismo, debe ser una bestia o un dios.",
		autor: "Aristóteles",
	},
	{
		quote:
			"Cuando te ofendas por la culpa de algún hombre, vuelve a ti mismo y estudia tus propios fallos. Entonces olvidarás tu ira.",
		autor: "Epicteto",
	},
	{
		quote:
			"La libertad no se asegura con la satisfacción de los deseos de uno, sino con la eliminación del deseo.",
		autor: "Seneca",
	},
	{
		quote: "La única cosa que sé es que no sé nada.",
		autor: "Sócrates",
	},
	{
		quote: "Nunca moriría por mis creencias porque podría estar equivocado.",
		autor: "Bertrand Russell",
	},
	{
		quote:
			"El que piensa grandes pensamientos, a menudo comete grandes errores.",
		autor: "Martin Heidegger",
	},
	{
		quote: "El hombre está condenado a ser libre.",
		autor: "Jean-Paul Sartre",
	},
	{
		quote:
			"Nunca intente ganar por la fuerza lo que se puede ganar con el engaño.",
		autor: "Nicolás Maquiavelo",
	},
	{
		quote: "Aparece débil cuando eres fuerte, y fuerte cuando eres débil.",
		autor: "Sun Tzu",
	},
	{
		quote:
			"Uno reconoce su curso descubriendo los caminos que se desvían de él.",
		autor: "Albert Camus",
	},
	{
		quote:
			"No es verdad que la gente deja de perseguir sus sueños porque envejece, envejecen porque dejan de perseguir sus sueños",
		autor: "Gabriel Garcia Marquez",
	},
	{
		quote: "Al citar a los demás, nos citamos a nosotros mismos.",
		autor: "Julio Cortazar",
	},
];

// 	Functions ======================================================
//	Display a random quote from the premade quote

function newQuote() {
	let randomNum = Math.floor(Math.random() * quotesD.length);
	document.getElementById(
		"quoteDisplay"
	).innerHTML = `${quotesD[randomNum].quote}`;
	document.getElementById(
		"autorDisplay"
	).innerHTML = `\-${quotesD[randomNum].autor}`;
}

// Adding quotes to the premade ones
function addQuote() {
	let qFormat = {
		quote: "",
		autor: "",
	};

	let quoteInput = document.getElementById("quoteInput").value;
	let autorInput = document.getElementById("autorInput").value;

	qFormat.quote = String(quoteInput);
	qFormat.autor = String(autorInput);

	if ((qFormat.quote != "") & (qFormat.autor != "")) {
		quotesD.push(qFormat);
	}
}

// hides quote generator and shows the suggestions box
function showPage() {
	quoteBox = document.getElementById("quoteBox");
	suggestBox = document.getElementById("suggestBox");
	nextBtn = document.getElementById("nextBtn");
	if (quoteBox.style.display == "block") {
		quoteBox.style.display = "none";
		suggestBox.style.display = "block";
		nextBtn.style.display = "none";
	} else {
		quoteBox.style.display = "block";
		suggestBox.style.display = "none";
		nextBtn.style.display = "flex";
	}
}
