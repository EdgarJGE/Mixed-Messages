//Generate random number
const randomNumber = item => {
    return Math.floor(Math.random() * item.length);
}

//Cinema night object
const cinemaNight = {
    movies: ['Star Wars', 'The Lord Of the Rings', 'Alien', 'The Hobbit'],
    snacks: ['Popcorn', 'Nachos', 'Hot Dogs', 'Fruity Candies'],
    sodas: ['Coca Cola', 'Fuze Tea', 'Manzanita', 'Boing'],
    randomMovie () {
        return this.movies[randomNumber(this.movies)];
    },
    randomSnack () {
        return this.snacks[randomNumber(this.snacks)];
    },
    randomSoda () {
        return this.sodas[randomNumber(this.sodas)];
    }
}

//Generate the random message
const randomMessage = () => {
    const newMessage = [];
    newMessage.push(`Watch this movie: ${cinemaNight.randomMovie()}`);
    newMessage.push(`Eat this snack: ${cinemaNight.randomSnack()}`);
    newMessage.push(`Drink this soda: ${cinemaNight.randomSoda()}`);
    return newMessage;
}

//Format the message
const formatMessage = () => {
    const formatted = randomMessage().join('\n');
    console.log(formatted);
}

//Function call
formatMessage();
