module.exports = function toReadable(number) {
    let zero = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve', 
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ]

    let tens = [
        'zero',
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ]

    if (number <20) {
        return zero[number]
    }

      
    if(number >10 && number<100 && number%10==0) {
        return tens[number/10]
    }

    if(number >10 && number<100 && number%10!=0) {
        return tens[Math.floor(number/10)] +' '+ zero[number%10]
    }

    if(number >99 && number <1000 && number%100==0) {
        return  zero[number/100] +' hundred'
    }

    if(number >100 && number <1000 && number%100!=0 &&number%10==0) {
        return  zero[Math.floor(number/100)] +' hundred ' +tens[(number/10)%10]
    }

    if(number >100 && number <1000 && number%100!=0 &&number%10!=0 &&number%100<20) {
        return  zero[Math.floor(number/100)] +' hundred ' +zero[number%100]
    } 
   
    if(number >100 && number <1000 && number%100!=0 &&number%10!=0 &&number%100!=11 &&number%100>19) {
        return  zero[Math.floor(number/100)] +' hundred ' +tens[(Math.floor(number/10))%10] +' ' +zero[number%10]
    } 
}

