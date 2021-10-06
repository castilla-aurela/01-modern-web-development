import {format, yearsToMonths, getMonth} from 'date-fns'

console.log(format(new Date(), 'yyyy-MM-dd'))

console.log(yearsToMonths(5))

console.log(getMonth(2021,01,05))