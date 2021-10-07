/*
The following code will be refactored when:
 * Use template strings - do not use + to concatenate strings
 * Do not use var anywhere in your code - only use let and const
 * Use arrow functions where necessary - anonymous functions should be arrow functions
 * Declare defaults in function signatures - don't use || to declare a value
 * Use object shorthand to setup objects
 * Use destructuring in function signatures and in the function body
 * Use the spread and rest operators
 * Use modules to organize your code
*/

import {people} from './people.js'


function getEmails (people, options) {
  options= options || {}
  const withNames = options.withNames || false
  const onlyActive = options.onlyActive || false

  if (onlyActive) {
    people = people.filter(isActive)
  }

  return people.map( (person) => {
    let result = ''  

    if (withNames) {
      //result = person.name + ' <' + person.email + '>' 
      result = `${person.name} <${person.email}>`
    } else {
      result = person.email
    }

    return result
  }).join(', ')
}

function getAddresses (people, options) {
  options = options || {}
  let onlyActive = options.onlyActive || false

  if (onlyActive) {
    people = people.filter(isActive)
  }

  return people.map((person) => {
    let address = person.address
    //var fullAddress = person.name + '\n' + address.line1 + '\n'
    
    let fullAddress = `${person.name}  ${address.line} \n`
    if (address.line2) {
      fullAddress += address.line2 + '\n'
      //fullAddress += `${address.line2} \n`
    }
    

    //fullAddress += address.city + ', ' + address.state
    fullAddress += `${address.city}, ${address.state}`;
    return fullAddress
  }).join('\n\n')
}

function getYoungest (people) {
  people.sort( (personA, personB) => {
     personA.age - personB.age
  })

  return {
    youngest: people[0],
    others: people.slice(1)
  }
}

function isActive (person) {
  return person.isActive
}

// put this array in another file and import it!


// these function calls should still work after the refactor!
const emails = getEmails(people, {
  withNames: true,
});
console.log(emails);

const addresses = getAddresses(people, {
  onlyActive: true,
});
console.log(addresses);

const youngest = getYoungest(people);
console.log(youngest);