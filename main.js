const mahsin = {
    firstName: 'Mahsin',
    lastName: 'Ullah',
    BirthYears: 2004,
    jobs: 'WebDeveloper',
    friends: ['Karim','Kamal','Poshi','Sabrin'],
    hasDiverLi: true,
    // calcAge: function(BirthYears){
    //     return 2024 - BirthYears;
    // }

    // calcAge: function(){
    //     return 2024 - this.BirthYears;
    // }


    calcAge: function(){
        this.ages = 2024 - this.BirthYears;
        return this.ages;
    },
    getSummery: function(){
        return `${this.firstName} is a ${this.calcAge()} years old ${this.jobs}, and he has ${this.hasDiverLi ? 'a' : 'no'} , driver is license..`
    }
};   

console.log(mahsin.calcAge())
console.log(mahsin.getSummery())
// console.log(mahsin.ages)
// console.log(mahsin.ages)
// console.log(mahsin.ages)
// console.log(mahsin.ages)
// console.log(mahsin.ages)
// console.log(mahsagesge'](2008))