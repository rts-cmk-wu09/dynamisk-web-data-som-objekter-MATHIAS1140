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



let nyPerson = {
    firstname: "ole",
    alder: "31",
    skole: "roskilde tek",
    år: "2022",
    gift: false,
    hobbyer: [{
        Sport: "fodbold", skema: {
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

nyPerson.hobbyer.forEach()