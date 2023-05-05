let num =[5,4,3,5,6]
num.sort()
num.push(1)
console.log(`Seu vetor é ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(6)
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`) 
}

