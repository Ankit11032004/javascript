const marvel_heros =["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);
const anotherarray=[1,2,3,4,5,[6,7],8,[9,[10,11]]]
const real_another_array = anotherarray.flat(Infinity)
console.log(real_another_array);
console.log(Array.isArray("Ankit"));
console.log(Array.from("ankit"));
console.log(Array.from({name:"ankit"}));//interesting
let score1=100
let score2=200
let score3=300
let score4=400
console.log(Array.of(score1,score2,score3,score4));






