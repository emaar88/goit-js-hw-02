'use strict';
let words_count = 0;
let SummofWords = 0;
function calculateEngravingPrice(message, pricePerWord) {
    let words = message.split(' ');
    for (let i = 0; i < words.length; ++i) {
        words_count = i + 1;
    }
    SummofWords = words_count * pricePerWord;
    return SummofWords;
}

console.log(
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        10,
    ),
);