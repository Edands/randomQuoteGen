var quotesD = [
	{
		quote:
			"Morality is not the doctrine of how we may make ourselves happy, but of how we may make ourselves worthy of happiness",
		autor: "Immanuel Kant",
	},
	{
		quote: "Man is the only creature who refuses to be what he is.",
		autor: "Albert Camus",
	},
	{
		quote:
			"It is hard enough to remember my opinions, without also remembering my reasons for them!",
		autor: "Friedrich Nietzsche",
	},
	{
		quote: "There is nothing either good or bad, but thinking makes it so.",
		autor: "William Shakespeare",
	},
	{
		quote:
			"Never let your sense of morals prevent you from doing what is right",
		autor: "Isaac Asimov",
	},
	{
		quote:
			"Wise men speak because they have something to say; fools because they have to say something",
		autor: "Plato",
	},
	{
		quote: "I cannot teach anybody anything. I can only make them think",
		autor: "Socrates",
	},
	{
		quote:
			"The price good men pay for indifference to public affairs is to be ruled by evil men",
		autor: "Plato",
	},
	{
		quote: "Life is really simple, but we insist on making it complicated.",
		autor: "Confucius",
	},
	{
		quote:
			"It's not what happens to you, but how you react to it that matters.",
		autor: "Epictetus",
	},
	{
		quote: "He who laughs at himself never runs out of things to laugh at.",
		autor: "Epictetus",
	},
	{
		quote: "Knowing yourself is the beginning of all wisdom",
		autor: "Aristotle",
	},
	{
		quote:
			"Religion is regarded by the common people as true, by the wise as false, and by rulers as useful.",
		autor: "Seneca",
	},
	{
		quote:
			"It is not the man who has too little, but the man who craves more, that is poor. ",
		autor: "Seneca",
	},
	{
		quote:
			"You have power over your mind - not outside events. Realize this, and you will find strength.",
		autor: "Marcus Aurelius",
	},
	{
		quote:
			"Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
		autor: "Marcus Aurelius",
	},
	{
		quote:
			"He who is unable to live in society, or who has no need because he is sufficient for himself, must be either a beast or a god",
		autor: "Aristotle",
	},
	{
		quote:
			"When you are offended at any man's fault, turn to yourself and study your own failings. Then you will forget your anger.",
		autor: "Epictetus",
	},
	{
		quote:
			"Freedom is secured not by the fulfilling of one's desires, but by the removal of desire",
		autor: "Seneca",
	},
	{
		quote: "The only thing I know is that I know nothing",
		autor: "Socrates",
	},
	{
		quote: "I would never die for my beliefs because I might be wrong",
		autor: "Bertrand Russell",
	},
	{
		quote: "He who thinks great thoughts, often makes great errors",
		autor: "Martin Heidegger",
	},
	{
		quote: "Man is condemned to be free",
		autor: "Jean-Paul Sartre",
	},
	{
		quote: "Never attempt to win by force what can be won by deception",
		autor: "Niccolo Machiavelli",
	},
	{
		quote: "Appear weak when you are strong, and strong when you are weak.",
		autor: "Sun Tzu",
	},
	{
		quote:
			"One recognizes one's course by discovering the paths that stray from it.",
		autor: "Albert Camus",
	},
	{
		quote:
			"It is not true that people stop pursuing dreams because they grow old, they grow old because they stop pursuing dreams.",
		autor: "Gabriel Garcia Marquez",
	},
	{
		quote: "In quoting others, we cite ourselves.",
		autor: "Julio Cortazar",
	},
];

// 	Functions ======================================================
//	Display a random quote from the premade quotesD object

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
