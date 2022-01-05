fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
	.then(resp => resp.json())
	.then(data => {
		// console.log(data.en);
		document.querySelector('#quote').innerHTML = `<h2>"${data.en}"</h2>`;
		document.querySelector('#author').innerHTML = `<h4>${data.author}</h4>`;
	});
