const amountRange = document.getElementById('amountRange')
const amountNumber = document.getElementById('amountNumber')
const form = document.getElementById('passwordGeneratorForm')
const includeUppercaseElement = document.getElementById('uppercase')
const includeNumbersElement = document.getElementById('numbers')
const includeSymbolsElement = document.getElementById('symbol')
const passwordDisplay = document.getElementById('passwordDisplay')

const NUMBERS_CHAR_CODE = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODE = arrayFromLowToHigh(97, 122)
const UPPERCASE_CHAR_CODE = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODE = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))


amountRange.addEventListener('input', syncCharacterAmount)
amountNumber.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = amountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeNumbers, includeUppercase, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODE
    if (includeUppercase) {
        charCodes = charCodes.concat(UPPERCASE_CHAR_CODE)
    }

    if (includeNumbers) {
        charCodes = charCodes.concat(NUMBERS_CHAR_CODE)
    }

    if (includeSymbols) {
        charCodes = charCodes.concat(SYMBOL_CHAR_CODE)
    }

    const passwordChars = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordChars.push(String.fromCharCode(characterCode))
    }

    return passwordChars.join('')
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }

    return array
}

function syncCharacterAmount(e) {
    const value = e.target.value
    amountNumber.value = value
    amountRange.value = value
}