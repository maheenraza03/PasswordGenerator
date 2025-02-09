const amountRange = document.getElementById('amountRange')
const amountNumber = document.getElementById('amountNumber')
const form = document.getElementById('passwordGeneratorForm')
const includeUppercaseElement = document.getElementById('uppercase')
const includeNumbersElement = document.getElementById('numbers')
const includeSymbolsElement = document.getElementById('symbol')

amountRange.addEventListener('input', syncCharacterAmount)
amountNumber.addEventListener('input', syncCharacterAmount)
form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = amountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
})

function generatePassword(characterAmount, includeNumbers, includeUppercase, includeSymbols) {
    
}

function syncCharacterAmount(e) {
    const value = e.target.value
    amountNumber.value = value
    amountRange.value = value
}