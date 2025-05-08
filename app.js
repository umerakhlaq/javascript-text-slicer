console.log('\n');
console.log('Assignment 03');
let word = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
Non tenetur, mollitia dolorem, omnis numquam voluptatum,
eaque perspiciatis ad assumenda odit quasi voluptas! Eligendi nobis nesciunt vel!
Reiciendis veritatis labore consequatur.`
for (let i = 0; i < word.length; i += 3) {
    console.log(word.slice(i, i + 3));
}
