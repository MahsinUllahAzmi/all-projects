//  Basic Array Operations (Methods)

// Add Elements
const friends = ['Dhaka', 'Mymensingh', 'Khulna'];
const newLength = friends.push('Rangpur')
console.log(friends)
console.log(newLength)

friends.unshift('Jamalpur')
console.log(friends)


// Remove Elements
 const popped = friends.pop() //last
console.log(popped)
console.log(friends)

friends.shift() //first
console.log(friends)

console.log(friends.indexOf('Mymensingh')) //1
console.log(friends.indexOf('dhaka')) //-1

friends.push(25)
console.log(friends.includes('Mymensingh')) //true
console.log(friends.includes('dhaka')) //false
console.log(friends.includes(25)) //true
console.log(friends.includes('25')) //false

if(friends.includes('Mymensingh')){
    console.log('Our district in Mymensingh')
}
