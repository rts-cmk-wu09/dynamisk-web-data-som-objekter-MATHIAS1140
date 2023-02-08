//opgave 1
let person = {
    firstname: "ole",
    alder: "31",
    skole: "roskilde tek",
    år: "2022"
}

console.log(person.firstname)
console.log(person.alder)
console.log(person.skole)
console.log(person.år)

console.log(person["firstname"])
console.log(person["alder"])
console.log(person["skole"])
console.log(person["år"])
//opgave 1 slut



//opgave 2
let nyPerson = {
    firstname: "ole",
    alder: "31",
    skole: "roskilde tek",
    år: "2022",
    gift: false,
    hobbyer:
        [{
            sport: "fodbold", skema: {
                onsdag: "kl: 18:00",
                fredag: "kl: 18:00",
                søndag: "kl: 12:30"
            }
        },
        {
            sport: "Tennis", skema: {
                tirsdag: "kl: 18:00",
                fredag: "kl: 14:00",
                lørdag: "kl: 12:30"
            }
        },
        {
            sport: "Håndbold", skema: {
                mandag: "kl: 18:00",
                tirsdag: "kl: 12:00"
            }
        }]
}

console.log(nyPerson)

// => er en nemmere måde at skrive ordet -function- på - en forkortelse af syntaksen.
nyPerson.hobbyer.forEach(hobby => {
    console.log(hobby)

})

console.log(nyPerson.hobbyer[1].skema.lørdag)


//opgave 2 slut