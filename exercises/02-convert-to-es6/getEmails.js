export default function getEmails (people, options) {
    options || {}
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