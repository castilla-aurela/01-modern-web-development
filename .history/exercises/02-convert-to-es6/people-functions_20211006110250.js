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

function getEmails (people, options) {
  options || {}
  var withNames = options.withNames || false
  var onlyActive = options.onlyActive || false

  if (onlyActive) {
    people = people.filter(isActive)
  }

  return people.map(function (person) {
    var result = ''

    if (withNames) {
      result = person.name + ' <' + person.email + '>'
    } else {
      result = person.email
    }

    return result
  }).join(', ')
}

function getAddresses (people, options) {
  options || {}
  var onlyActive = options.onlyActive || false

  if (onlyActive) {
    people = people.filter(isActive)
  }

  return people.map(function (person) {
    var address = person.address
    var fullAddress = person.name + '\n' + address.line1 + '\n'

    if (address.line2) {
      fullAddress += address.line2 + '\n'
    }

    fullAddress += address.city + ', ' + address.state
    return fullAddress
  }).join('\n\n')
}

function getYoungest (people) {
  people.sort(function (personA, personB) {
    return personA.age - personB.age
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
var people = [
  {
    id: 'eade21e5-6935-4733-a34d-4676e73db450',
    isActive: true,
    age: 24,
    name: 'Etta Sweet',
    company: 'BEADZZA',
    address: {
      line1: '566 Myrtle Avenue',
      line2: 'Apt 65',
      city: 'Kenvil',
      state: 'Florida',
    },
    email: 'etta.sweet@beadzza.com',
    location: {
      latitude: 45.718105,
      longitude: -155.472722,
    },
    greeting: 'Hello, Etta Sweet! You have 9 unread messages.',
  },
  {
    id: '9cb99dc6-bc71-4832-a910-93a3a477df2f',
    isActive: true,
    age: 55,
    name: 'Mcconnell Terry',
    company: 'MAGMINA',
    address: {
      line1: '417 Rapelye Street',
      line2: 'Apt 34',
      city: 'Robinette',
      state: 'Ohio',
    },
    email: 'mcconnell.terry@magmina.com',
    location: {
      latitude: -87.04779,
      longitude: 6.978688,
    },
    greeting: 'Hello, Mcconnell Terry! You have 7 unread messages.',
  },
  {
    id: '64458461-d5eb-4c89-bf75-af37eb7f09c2',
    isActive: true,
    age: 53,
    name: 'Kim Mccarthy',
    company: 'SPLINX',
    address: {
      line1: '740 Classon Avenue',
      line2: 'Apt 45',
      city: 'Bawcomville',
      state: 'Indiana',
    },
    email: 'kim.mccarthy@splinx.com',
    location: {
      latitude: 15.98262,
      longitude: -137.86649,
    },
    greeting: 'Hello, Kim Mccarthy! You have 7 unread messages.',
  },
  {
    id: 'eb270cef-433f-42be-a84c-0036e6e70e6d',
    isActive: false,
    age: 54,
    name: 'Frederick Stokes',
    company: 'TELPOD',
    address: {
      line1: '181 Garden Place',
      line2: 'Apt 52',
      city: 'Roeville',
      state: 'Washington',
    },
    email: 'frederick.stokes@telpod.com',
    location: {
      latitude: -6.323152,
      longitude: 50.381855,
    },
    greeting: 'Hello, Frederick Stokes! You have 8 unread messages.',
  },
  {
    id: 'eab87413-ab10-4fe0-b4c4-69e5789f75e8',
    isActive: false,
    age: 37,
    name: 'David Richmond',
    company: 'SULFAX',
    address: {
      line1: '701 Aberdeen Street',
      line2: 'Apt 33',
      city: 'Balm',
      state: 'Michigan',
    },
    email: 'david.richmond@sulfax.com',
    location: {
      latitude: 28.723604,
      longitude: 177.048793,
    },
    greeting: 'Hello, David Richmond! You have 7 unread messages.',
  },
  {
    id: '63067f7c-9cb1-439e-8010-4abde50a565f',
    isActive: true,
    age: 28,
    name: 'Ophelia Head',
    company: 'CABLAM',
    address: {
      line1: '437 Love Lane',
      line2: '',
      city: 'Westphalia',
      state: 'Mississippi',
    },
    email: 'ophelia.head@cablam.com',
    location: {
      latitude: 34.694779,
      longitude: -152.566643,
    },
    greeting: 'Hello, Ophelia Head! You have 6 unread messages.',
  },
];

// these function calls should still work after the refactor!
const emails = getEmails(people, {
  withNames: true,
});
console.log(emails);

ci addresses = getAddresses(people, {
  onlyActive: true,
});
console.log(addresses);

var youngest = getYoungest(people);
console.log(youngest);