const registerButton = document.querySelector('.register-button')

const personList = fetch('http://localhost:3000/data')
    personList.then(response => response.json()).then((data) => tableData(data))
    

// async function tableDataB(){
//     try {
//         const response = await fetch('http://localhost:3000/person')
//         const data = await response.json()
//         tableData(data)
//     } catch (error) {

//     }
// }

// registerButton.addEventListener('click',(event) => {
//     event.preventDefault()
//     // const name = document.querySelector('#name').value
//     // const age = document.querySelector('#age').value
//     // const nationality = document.querySelector('#nationality').value
//     // const motto = document.querySelector('#motto').value
//     // const tblrow = document.createElement('tr')
//     // const table = document.querySelector('.table')

//     // const rowContent = `<td>${name}</td>
//     //                     <td>${age}</td>
//     //                     <td>${nationality}</td>
//     //                     <td>${motto}</td>`
    
//     // tblrow.innerHTML = rowContent
//     // table.append(tblrow)
//     // console.log(table);
    
// })


function tableData(data){

    const table = document.querySelector('.table')
    
    data.forEach(person => {
            const tblrow = document.createElement('tr')
            const rowContent = `
                <td>${person.Name}</td>
                <td>${person.Age}</td>
                <td>${person.Nationality}</td>
                <td>${person.Motto}</td>
                `

            tblrow.innerHTML = rowContent
            table.append(tblrow)
            })
}

// function tableData(){
//     fetch('http://localhost:3000/person')
//     .then(response => response.json())
//     .then(data => console.log(data));
// }
