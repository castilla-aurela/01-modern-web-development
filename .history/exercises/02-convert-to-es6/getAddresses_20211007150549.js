
export default function getAddresses (people, options) {
    options  || {}
    let onlyActive = options.onlyActive || false
  
    if (onlyActive) {
      people = people.filter(isActive)
    }
  
    return people.map((person) => {
      let address = person.address
      //var fullAddress = person.name + '\n' + address.line1 + '\n'
      
      let fullAddress = (
      `${person.name}  
  ${address.line1}`)
      if (address.line2) {
        //fullAddress += address.line2 + '\n'
        fullAddress = (
  `${fullAddress}
  ${address.line2}`
        )
      }
      
  
      //fullAddress += address.city + ', ' + address.state
      fullAddress = (`${fullAddress}
  ${address.city}, ${address.state}`);
      return fullAddress
    }).join('\n\n')
  }