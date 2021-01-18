module.exports = function toReadable (number) {
    function nums(n) {
        switch(n) {
            case 0: return 'zero'
            case 1: return 'one'
            case 2: return 'two'
            case 3: return 'three'
            case 4: return 'four'
            case 5: return 'five'
            case 6: return 'six'
            case 7: return 'seven'
            case 8: return 'eight'
            case 9: return 'nine'
            case 10: return 'ten'
            case 11: return 'eleven'
            case 12: return 'twelve'
            case 13: return 'thirteen'
            case 14: return 'fourteen'
            case 15: return 'fifteen'
            case 16: return 'sixteen'
            case 17: return 'seventeen'
            case 18: return 'eighteen'
            case 19: return 'nineteen'
            case 20: return 'twenty'
            case 30: return 'thirty'
            case 40: return 'forty'
            case 50: return 'fifty'
            case 60: return 'sixty'
            case 70: return 'seventy'
            case 80: return 'eighty'
            case 90: return 'ninety'
        }
    }
    function toDec(n) {
        const base = nums(Math.floor(n / 10) * 10)
        const num = nums(n % 10)
        return `${base} ${num}`
    }

    let str, base, dec
    switch (number.toString().length) {
        case 1:
            str = nums(number)
            break
        case 2:
            if (number % 10 === 0 || number < 20) {
                str = nums(number)
            } else {
                str = toDec(number)
            }
            break
        case 3:
            base = nums(Math.floor(number / 100))
            if (number % 100 === 0) {
                str = `${base} hundred`
            } else {
                number = number % 100        
                if (number % 10 === 0 || number < 20) {
                    str = `${base} hundred ${nums(number)}`
                } else {
                    dec = toDec(number)
                    str = `${base} hundred ${dec}`
                }
            }
            break
    }

    return str
}
