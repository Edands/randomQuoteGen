var quotesFallback = [
	{
		quote:
			"Morality is not the doctrine of how we may make ourselves happy, but of how we may make ourselves worthy of happiness",
		author: "Immanuel Kant",
	},
	{
		quote: "Man is the only creature who refuses to be what he is.",
		author: "Albert Camus",
	},
	{
		quote:
			"It is hard enough to remember my opinions, without also remembering my reasons for them!",
		author: "Friedrich Nietzsche",
	},
	{
		quote: "There is nothing either good or bad, but thinking makes it so.",
		author: "William Shakespeare",
	},
	{
		quote:
			"Never let your sense of morals prevent you from doing what is right",
		author: "Isaac Asimov",
	},
	{
		quote:
			"Wise men speak because they have something to say; fools because they have to say something",
		author: "Plato",
	},
	{
		quote: "I cannot teach anybody anything. I can only make them think",
		author: "Socrates",
	},
	{
		quote:
			"The price good men pay for indifference to public affairs is to be ruled by evil men",
		author: "Plato",
	},
	{
		quote: "Life is really simple, but we insist on making it complicated.",
		author: "Confucius",
	},
	{
		quote:
			"It's not what happens to you, but how you react to it that matters.",
		author: "Epictetus",
	},
	{
		quote: "He who laughs at himself never runs out of things to laugh at.",
		author: "Epictetus",
	},
	{
		quote: "Knowing yourself is the beginning of all wisdom",
		author: "Aristotle",
	},
	{
		quote:
			"Religion is regarded by the common people as true, by the wise as false, and by rulers as useful.",
		author: "Seneca",
	},
	{
		quote:
			"It is not the man who has too little, but the man who craves more, that is poor. ",
		author: "Seneca",
	},
	{
		quote:
			"You have power over your mind - not outside events. Realize this, and you will find strength.",
		author: "Marcus Aurelius",
	},
	{
		quote:
			"Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
		author: "Marcus Aurelius",
	},
	{
		quote:
			"He who is unable to live in society, or who has no need because he is sufficient for himself, must be either a beast or a god",
		author: "Aristotle",
	},
	{
		quote:
			"When you are offended at any man's fault, turn to yourself and study your own failings. Then you will forget your anger.",
		author: "Epictetus",
	},
	{
		quote:
			"Freedom is secured not by the fulfilling of one's desires, but by the removal of desire",
		author: "Seneca",
	},
	{
		quote: "The only thing I know is that I know nothing",
		author: "Socrates",
	},
	{
		quote: "I would never die for my beliefs because I might be wrong",
		author: "Bertrand Russell",
	},
	{
		quote: "He who thinks great thoughts, often makes great errors",
		author: "Martin Heidegger",
	},
	{
		quote: "Man is condemned to be free",
		author: "Jean-Paul Sartre",
	},
	{
		quote: "Never attempt to win by force what can be won by deception",
		author: "Niccolo Machiavelli",
	},
	{
		quote: "Appear weak when you are strong, and strong when you are weak.",
		author: "Sun Tzu",
	},
	{
		quote:
			"One recognizes one's course by discovering the paths that stray from it.",
		author: "Albert Camus",
	},
	{
		quote:
			"It is not true that people stop pursuing dreams because they grow old, they grow old because they stop pursuing dreams.",
		author: "Gabriel Garcia Marquez",
	},
	{
		quote: "In quoting others, we cite ourselves.",
		author: "Julio Cortazar",
	},
];

// Random num function

function randomNumber(iterable) {
	let randomNum = Math.floor(Math.random() * iterable.length);
	return iterable[randomNum];
}

//	Display a random quote from the premade quotesFallback object

function newQuote() {
	quotesFallRandom = randomNumber(quotesFallback);
	document.getElementById(
		"quoteDisplay"
	).innerHTML = `${quotesFallRandom.quote}`;
	document.getElementById(
		"authorDisplay"
	).innerHTML = `\-${quotesFallRandom.author}`;
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
	qFormat.author = String(authorInput);

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

// =========== PaperQuotes API =====================

// Push a random quote generated from api into the html

function newApiQuote() {
	let randomApiIndex = randomNumber(apiQuotes);
	document.getElementById("quoteDisplay").innerHTML = `${randomApiIndex.quote}`;
	document.getElementById(
		"authorDisplay"
	).innerHTML = `\-${randomApiIndex.author}`;
}

// changing tags in the quote url forces an api call with new quotes

var tags = [
	"philosophy",
	"wisdom",
	"wise-sayings",
	"motivational",
	"money",
	"passion",
	"kingdom",
	"opportunities",
	"principles",
	"serving-god",
	"love",
	"purpose",
	"jobless",
	"people",
	"values",
	"worship",
	"life",
	"employment",
	"work",
	"service",
	"time",
	"god",
	"destiny",
	"brainy-quotes",
	"civilization",
	"human-being",
	"inspirational",
	"awakening",
	"wise-sayings",
	"humanity",
	"wise",
	"conscience-quotes",
	"human-life",
	"words-of-wisdom",
	"conscience",
];

var apiQuotes = undefined;
var apiCalls = 0;

$("#nextQuote").click(function () {
	let randomTagIndex = randomNumber(tags);

	randomTags = [];

	if (!(randomTagIndex in randomTags));
	{
		uniqueTag = randomTagIndex;
		randomTags.push(uniqueTag);
	}

	if (apiCalls < 10) {
		var url = `https://api.paperquotes.com/apiv1/quotes/?tags=${uniqueTag}&lang=en`;
		$.ajax({
			type: "GET",
			url: url,
			beforeSend: function (xhr) {
				xhr.setRequestHeader(
					"Authorization",
					"Token 0e60d24f5b25f3864de8d7f6e4c855257cea4b3c"
				);
			},
			success: function (result) {
				console.log(result.results);
				var quotesResults = result.results;
				if (apiQuotes == undefined) {
					apiQuotes = quotesResults;
				} else {
					for (let index = 0; index < quotesResults.length; index++) {
						apiQuotes.push(quotesResults[index]);
					}
				}
				newApiQuote();

				apiCalls = apiCalls + 1;
			},
			error: function (result) {
				newQuote();
				//handle the error with falllback quotes
			},
		});
	} else {
		newApiQuote();
	}
});
