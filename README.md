# JavaScript Text Slicer

This is a simple JavaScript assignment that demonstrates how to slice a long string into smaller chunks using a loop.

## 📘 Assignment Details

**Assignment 03**  
This script slices a given paragraph into parts of 3 characters each and prints them line by line.

## 💻 Code Overview

let word = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
Non tenetur, mollitia dolorem, omnis numquam voluptatum,
eaque perspiciatis ad assumenda odit quasi voluptas! Eligendi nobis nesciunt vel!
Reiciendis veritatis labore consequatur.`;

for (let i = 0; i < word.length; i += 3) {
    console.log(word.slice(i, i + 3));
}

✅ Output Example

Lor
em 
ips
um 
dol
...

📂 Folder Structure

javascript-text-slicer/
├── index.js
└── README.md
