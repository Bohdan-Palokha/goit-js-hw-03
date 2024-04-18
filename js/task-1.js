function slugify(title) {
    const words = title.toLowerCase().split(' ');
    const slugWords = [];
    for (let word of words) {
        const formattedWord = word.replace(/[^\w\d]/g, '');
        slugWords.push(formattedWord);
    }

    return slugWords.join('-');
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
