const button = document.querySelector('#joke-btn');
const joke = document.querySelector('#joke');

const GenerateRandomJokes = function() { 
    const xhr = new XMLHttpRequest();

    xhr.open('GET' , 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function() {
        if(this.readyState === 4 ) {
            if(this.status === 200) {
                const data = JSON.parse(xhr.responseText);
                
                const text = document.createTextNode(data.value);
                
                //adding text to DOM---
                joke.textContent = '';
                joke.appendChild(text);
            } 
            else {
                joke.textContent = 'Something Went Wrong (NO Jokes)';
                console.log(joke);
            }
        }
    }
    xhr.send();
}

// Adding a Event-listener to Button--
button.addEventListener('click', GenerateRandomJokes);
// When Page loads--
document.addEventListener('DOMContentLoaded', GenerateRandomJokes);