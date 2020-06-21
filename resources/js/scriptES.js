var quotesFallback = [
	{
		quote:
			"La moral no es la doctrina de cómo podemos hacernos felices, sino de cómo podemos hacernos dignos de serlo.",
		author: "Immanuel Kant",
	},
	{
		quote: "El hombre es la única criatura que se niega a ser lo que es.",
		author: "Albert Camus",
	},
	{
		quote:
			"Ya es bastante difícil recordar mis opiniones, sin recordar también mis razones para ellas!.",
		author: "Friedrich Nietzsche",
	},
	{
		quote:
			"No existe nada bueno ni malo; es el pensamiento humano el que lo hace parecer así.",
		author: "William Shakespeare",
	},
	{
		quote:
			"Nunca dejes que tu sentido de la moral te impida hacer lo correcto.",
		author: "Isaac Asimov",
	},
	{
		quote:
			"Los sabios hablan porque tienen algo que decir; los tontos porque tienen que decir algo.",
		author: "Platón",
	},
	{
		quote: "No puedo enseñarle nada a nadie. Sólo puedo hacerles pensar.",
		author: "Sócrates",
	},
	{
		quote:
			" El precio que los buenos hombres pagan por la indiferencia hacia los asuntos públicos, es el de ser gobernados por los hombres malos.",
		author: "Platón",
	},
	{
		quote: "La vida es muy simple, pero insistimos en complicarla.",
		author: "Confucio",
	},
	{
		quote:
			"No es lo que te pasa, sino cómo reaccionas ante ello lo que importa.",
		author: "Epicteto",
	},
	{
		quote:
			"El que se ríe de sí mismo nunca se queda sin cosas de las que reírse.",
		author: "Epicteto",
	},
	{
		quote: "Conocerse a sí mismo es el comienzo de toda la sabiduría.",
		author: "Aristóteles",
	},
	{
		quote:
			"La religión es considerada por la gente común como verdadera, por los sabios como falsa, y por los gobernantes como útil.",
		author: "Seneca",
	},
	{
		quote:
			"No es el hombre que tiene muy poco, sino el que anhela más, el que es pobre.",
		author: "Seneca",
	},
	{
		quote:
			"Tienes poder sobre tu mente, no sobre los eventos externos. Date cuenta de esto, y encontrarás la fuerza.",
		author: "Marco Aurelio",
	},
	{
		quote:
			"Todo lo que oímos es una opinión, no un hecho. Todo lo que vemos es una perspectiva, no la verdad.",
		author: "Marco Aurelio",
	},
	{
		quote:
			"Aquel que no puede vivir en sociedad, o que no tiene necesidad porque se basta a sí mismo, debe ser una bestia o un dios.",
		author: "Aristóteles",
	},
	{
		quote:
			"Cuando te ofendas por la culpa de algún hombre, vuelve a ti mismo y estudia tus propios fallos. Entonces olvidarás tu ira.",
		author: "Epicteto",
	},
	{
		quote:
			"La libertad no se asegura con la satisfacción de los deseos de uno, sino con la eliminación del deseo.",
		author: "Seneca",
	},
	{
		quote: "La única cosa que sé es que no sé nada.",
		author: "Sócrates",
	},
	{
		quote: "Nunca moriría por mis creencias porque podría estar equivocado.",
		author: "Bertrand Russell",
	},
	{
		quote:
			"El que piensa grandes pensamientos, a menudo comete grandes errores.",
		author: "Martin Heidegger",
	},
	{
		quote: "El hombre está condenado a ser libre.",
		author: "Jean-Paul Sartre",
	},
	{
		quote:
			"Nunca intente ganar por la fuerza lo que se puede ganar con el engaño.",
		author: "Nicolás Maquiavelo",
	},
	{
		quote: "Aparece débil cuando eres fuerte, y fuerte cuando eres débil.",
		author: "Sun Tzu",
	},
	{
		quote:
			"Uno reconoce su curso descubriendo los caminos que se desvían de él.",
		author: "Albert Camus",
	},
	{
		quote:
			"No es verdad que la gente deja de perseguir sus sueños porque envejece, envejecen porque dejan de perseguir sus sueños",
		author: "Gabriel Garcia Marquez",
	},
	{
		quote: "Al citar a los demás, nos citamos a nosotros mismos.",
		author: "Julio Cortazar",
	},
];

// Random num from an index function

function randomNumber(iterable) {
	let randomNum = Math.floor(Math.random() * iterable.length);
	return iterable[randomNum];
}

//	Display a random quote from the premade quotesFallback object

function newQuote() {
	let quotesFallbackRandom = randomNumber(quotesFallback);

	let quoteFall = quotesFallbackRandom.quote;

	let authorFall = quotesFallbackRandom.author;

	//Empties the quote paragraph

	$("p").empty();

	// Appends the new quote with an typing animation

	var ele = "<span>" + quoteFall.split("").join("</span><span>") + "</span>";

	$(ele)
		.hide()
		.appendTo("p")
		.each(function (i) {
			$(this)
				.delay(40 * i)
				.css({
					display: "inline",
					opacity: 0,
				})
				.animate(
					{
						opacity: 1,
					},
					100
				);
		});

	// Fades in the author name
	$("#authorDisplay").animate({ opacity: 0 }, 600, function () {
		$(this)
			.html("-" + authorFall)
			.animate({ opacity: 1 }, 400);
	});
}

// Adding quotes to the premade ones

function addQuote() {
	let qFormat = {
		quote: "",
		author: "",
	};

	let quoteInput = document.getElementById("quoteInput").value;
	let authorInput = document.getElementById("authorInput").value;

	qFormat.quote = String(quoteInput);
	qFormat.autor = String(authorInput);

	if ((qFormat.quote != "") & (qFormat.author != "")) {
		quotesFallback.push(qFormat);
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
