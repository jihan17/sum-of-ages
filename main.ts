let su_of_ages = 0
// stared counted from 0
let sum_of_ages = 0
// set how may people in the class
let number_of_people = game.askForNumber("How many people are in the class?")
// asking your   ages 
//  asking the ages every time and add the total
for (let index = 0; index < number_of_people; index++) {
    su_of_ages += game.askForNumber("what is your age?")
}
// show user final answer
game.splash("The sum of ages all ages", su_of_ages)
