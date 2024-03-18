const mahsin = {
    firstName: 'Mahsin',
    lastName: 'Ullah',
    BirthDate: 2024-2004,
    jobs: 'WebDeveloper',
    friends: ['Karim','Kamal','Poshi','Sabrin']
}

console.log(mahsin)
console.log(mahsin.firstName)
console.log(mahsin['firstName'])

const nameKey = 'name';
console.log('first' + nameKey)
console.log('last' + nameKey)


const interestIN = prompt('what do you want to know about mahsin?')
console.log(mahsin[interestIN])

if(mahsin[interestIN]){
    console.log(mahsin[interestIN]) 
}else{
    console.log('Wrong request')
}

mahsin.location = 'Bangladesh';
mahsin['twitter'] = '@mahsin';

console.log(mahsin)


// challenge
// mahsin has 3 friends, and has best friends is called sabrin

console.log(`${mahsin.firstName} has ${mahsin.friends.length}, frindes and has best frinds is called ${mahsin.friends[0]}`)