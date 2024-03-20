/* Metodos de Ordenamiento */

let nombres = ["Pedro", "Nicolas", "Ramon", "Jose", "Gabriela", "Maria", "Ana", "Alberto", "Barbara"];
let numeros = [3, 9, 10, 100, 45, 22, 12, 4, 1, 6]
let estudiantes = [{ name: 'Pedro' }, { name: 'Nicolas' }, { name: 'Ramon' }, { name: 'Jose' }, { name: 'Gabriela' }]


console.log(nombres)
console.log(bubbleSort([...nombres]))

console.log(numeros)
console.log(bubbleSort([...numeros]))

console.log(estudiantes);
console.log(bubbleSortObject([...estudiantes]))

console.log(nombres)
console.log(selectionSort([...nombres]))

console.log(estudiantes)
console.log(selectionSortObject([...estudiantes]))

console.log(nombres)
console.log(busquedaLineal(nombres, "Ana")) // 6
console.log(busquedaLineal(nombres, "Luis")) // -1

console.log(numeros)
console.log(busquedaLineal(numeros, 8)) // -1
console.log(busquedaLineal(numeros, 100)) // 3


function bubbleSort(arr) {
    let len = arr.length

    for (let x = 0; x < len - 1; x++) {
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
    }

    return arr
}

function bubbleSortObject(arr) {
    let len = arr.length

    for (let x = 0; x < len - 1; x++) {
        for (let i = 0; i < len - 1; i++) {
            if (arr[i].name > arr[i + 1].name) {
                const temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
    }

    return arr
}

function selectionSort(arr){
    const len = arr.length

    for(let i = 0; i < len - 1; i++){
        let min = i
        for(let j = i + 1; j < len; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }

        if(min !== i){
            const temp = arr[i];
            arr[i] = arr[min]
            arr[min] = temp
        }
    }

    return arr
}

function selectionSortObject(arr){
    const len = arr.length

    for(let i = 0; i < len - 1; i++){
        let min = i
        for(let j = i + 1; j < len; j++){
            if(arr[j].name < arr[min].name){
                min = j
            }
        }

        if(min !== i){
            const temp = arr[i];
            arr[i] = arr[min]
            arr[min] = temp
        }
    }

    return arr
}

function busquedaLineal(arr, elemento){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === elemento){
            return i
        }
    }
    return -1
}