let body = document.querySelector("body")

let playerName = prompt("Digite o nome do seu player")

class Person {
    constructor(name,age,profession,money,hapiness,hunger,isSick,weight) {
        this.name = name
        this.age = 0
        this.profession = "Yet as a baby"
        this.money = 0
        this.hapiness = 100
        this.hunger = 30
        this.isSick = false
        this.weight = 3
    }

    eat(){
        if (this.age == 0 && this.hunger >= 10) {
            this.hunger = this.hunger - 10
            p_player_hunger.innerText = `HUNGER: ${player1.hunger}`
            alert(`nhéééée nhééééé.... sua fome baixou para ${this.hunger}`)
        }
    }

    work(){
        if (this.age == 0) {
            alert(`nhééééé nhééééé... saia das fraldas primeiro...`)
        }
    }

}
let player1 = new Person(playerName)

let div_player_description = document.createElement("div")
let p_player_name = document.createElement("p")
p_player_name.innerText = `NAME: ${player1.name}`
let p_player_age = document.createElement("p")
p_player_age.innerText = `AGE: ${player1.age}`
let p_player_profession = document.createElement("p")
p_player_profession.innerText = `PROFESSION: ${player1.profession}`
let p_player_money = document.createElement("p")
p_player_money.innerText = `MONEY: ${player1.money}`
let p_player_hapiness = document.createElement("p")
p_player_hapiness.innerText = `HAPINESS: ${player1.hapiness}`
let p_player_hunger = document.createElement("p")
p_player_hunger.innerText = `HUNGER: ${player1.hunger}`
let p_player_weight = document.createElement("p")
p_player_weight.innerText = `WEIGHT: ${player1.weight}`

div_player_description.appendChild(p_player_name)
div_player_description.appendChild(p_player_age)
div_player_description.appendChild(p_player_profession)
div_player_description.appendChild(p_player_money)
div_player_description.appendChild(p_player_hapiness)
div_player_description.appendChild(p_player_hunger)
div_player_description.appendChild(p_player_weight)
body.appendChild(div_player_description)

let button_eat = document.createElement("button")
button_eat.innerText = "Eat"
button_eat.addEventListener("click", () => {
    player1.eat()
})
body.appendChild(button_eat)

let button_work = document.createElement("button")
button_work.innerText = "Work"
button_work.addEventListener("click", () => {
    player1.work()
})
body.appendChild(button_work)




