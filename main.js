let students = [{
        name: 'Mark',
        age: 18,
        gender: 'male',
        email: 'marke@algonquilive.com'
    },
    {
        name: 'Nancy',
        age: 18,
        gender: 'female',
        email: 'nancyke@algonquilive.com'
    },
    {
        name: 'Jonas',
        age: 28,
        gender: 'male',
        email: 'jonaske@algonquilive.com'
    },
    {
        name: 'Lunak',
        age: 16,
        gender: 'female',
        email: 'mlunae@algonquilive.com'
    }
]

for (let i = 0; i < students.length; i++) {
    document.write(`
    <tr>
        <td>${i+1}</td>
        <td>${students[i].name}</td>
        <td>${students[i].age}</td>
        <td>${students[i].gender}</td>
        <td>${students[i].email}</td>
    </tr>
`)
}

let arr = [ 'lang', 'Lydia', 'Gloria', 'Seven', 'Fiona', 'Dion', 'Tina']
let random = Math.floor(Math.random() * arr.length)
//Pick a random name
document.write(arr[random])
//delete the name that was randomly picked
arr.splice (random, 1)

//randomly generate a number from 1 to 10