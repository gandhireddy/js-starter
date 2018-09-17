const TAX = 0.1
const PHONE_PRICE = 20
const ACCESSORY_PRICE = 3
const BANK_BALANCE = 190

var total = 0
var numberOfPhones = 0
var numberOfAccessories = 0

while(total < BANK_BALANCE){
    total = total + PHONE_PRICE
    numberOfPhones++

    if(total < BANK_BALANCE){
        total = total + ACCESSORY_PRICE
        numberOfAccessories++
    }
}

total = addTax(total)
console.log("Total purchase is: "+ formatValue(total))

if(total > BANK_BALANCE){
    console.log("You cannot afford this prchase")
}


function addTax(amount){
    return amount + amount * TAX
}

function formatValue(amount){
    return "$" + amount.toFixed(2)
}
