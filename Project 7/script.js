function addNumbers(num1,num2){
    const total =num1 + num2;
    return total;
}

const addedTotal = addNumbers(1,9);
const person = {
    'name': 'Nikhil',
    'age':20,
    'height': "5'11",
    'speak': function(want="Dog or cat"){
        console.log(`Yo,I want ${want}`);
    },
    talk(to='Nik'){
        console.log(`I am talking to ${to}`)
    }
}
person.talk();
// person.speak("Pizza")
//  console.log(person['name'])