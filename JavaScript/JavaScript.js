
// 1. Task

const age1 = 18
const age2 = 60
const age3 = 120

let age = prompt('Insert you age!')

function checkAge() { 
    if(+age) {
        if(age < age1) {
            alert('You dont have access because you are ' + age + ' and you can watch only content for kids!')
        } else if(age >= 18 && age < age2) {
            alert('You have full access!')
        } else if(age >= age2 && age <= age3) {
            alert('Keep calm and watch news!')
        } else {
            alert('Insert your real age!')
        }

    } else {
        alert('Error! You can use only numbers!')
    }
}

checkAge()


// 2. Task

let userAge = +prompt('How old are you?')

function checkUser() {
    if(userAage >= 18) {
    let userName = String(prompt('What is your name?'))
    if(userAge > 25 && userName == 'John') {
        alert('Hello, John!')
    } else {
        alert('Who are you? I dont know you')
    }
    } else {
        alert('You are under 18!')
    }
}
checkUser()

// 3. Task

let count = +prompt('How much enemies have you killed?')

switch(count) {
    case 1:
        alert('You have got 100 points')
        break;
    case 3:
        alert('You have got 400 points')
        break;
    case 5:
        alert('You have got 700 points')
        break;
    case 10:
        alert('You have got 1000 points')
        break;
    default:
        alert('You have got ' + count*100 + ' points')
        
}




