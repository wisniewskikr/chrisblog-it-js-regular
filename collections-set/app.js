function greeting() {

	let result = "";

	const words = new Set(["Hello","World"]);
	words.add("Hello");
	words.add("World");

	for (let word of words) {
		result += word;
		result += " ";
	}
	
	console.log(result);

}

greeting();