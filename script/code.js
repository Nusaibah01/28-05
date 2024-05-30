// The Array:
let data = ['firstName: Nusaibah', 4, 6, 9, 11, 'lastName: Charif',]
// console.log(data)

// 1.Adding my age
data.push('Age:19')

//2. Displaying all current elements
console.log(data)

//3. a variable that just holds the data array of type of numbers:
let dataTypeHolder = data.filter(value => typeof value === 'number')
// displaying number types 
dataTypeHolder.forEach(value => {
    console.log(value, typeof value)
})


//  4. find my firstName 
console.log(data.find(value => value == 'firstName: Nusaibah'))

// 5.My firstNames index
console.log(data.findIndex( value => value == 'firstName: Nusaibah'))

// 6. The total of all the numbers from the data array.
function retrieveTotal (){
    let total = 0
    for (let item of data) {
        //  Filtering out my name and surname
        if (!isNaN(item))  {
            // adding to total
            total += item;
            

        }
    }
    return total;
}

    let total = retrieveTotal(data);
    console.log('Numbers total:' , total)

/* 7. Two features which enable one to merge arrays and generate a new array:
-Spread Operator
-Concat
*/

// 8. Retrieve only the elements from index 1 through 3 
console.log(data.slice(1, 4));
