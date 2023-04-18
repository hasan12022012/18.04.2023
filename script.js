"use strict";

function Posts() {
    try {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                response.json()
                    .then(result => {
                        let tbl = ` <tr>
            <th scope="col">#</th>
            <th scope="col">userId</th>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">body</th>
          </tr>`
                        result.forEach((element, index) => {
                            tbl += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td> ${element.userId} </td>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.body}</td>
          </tr>`
                        });
                        document.querySelector('table').innerHTML = tbl;
                    })
            })

    } catch (error) {
        console.log("error");
    }
}


async function comments() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/comments')
        let value = await response.json();
        let tbl = ` <tr>
    <th scope="col">#</th>
    <th scope="col">postId</th>
    <th scope="col">id</th>
    <th scope="col">name</th>
    <th scope="col">email</th>
    <th scope="col">body</th>
  </tr>`

        value.forEach((item, index) => {
            tbl += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td> ${item.postId} </td>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.body}</td>
          </tr>`
        })
        document.querySelector('table').innerHTML = tbl;
    } catch (error) {
        console.log("error");
    }
}


async function albums() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/albums')
        let value = await response.json();
        let tbl = ` <tr>
    <th scope="col">#</th>
    <th scope="col">userId</th>
    <th scope="col">id</th>
    <th scope="col">title</th>
  </tr>`

        value.forEach((item, index) => {
            tbl += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td> ${item.userId} </td>
            <td>${item.id}</td>
            <td>${item.title}</td>
          </tr>`
        })
        document.querySelector('table').innerHTML = tbl;
    } catch (error) {
        console.log("error")
    }
}


async function photos() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/photos')
        let value = await response.json();
        let tbl = ` <tr>
    <th scope="col">#</th>
    <th scope="col">albumId</th>
    <th scope="col">id</th>
    <th scope="col">title</th>
    <th scope="col">url</th>
    <th scope="col">thumbnailUrl</th>
  </tr>`

        value.forEach((item, index) => {
            tbl += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td> ${item.albumId} </td>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.url}</td>
            <td>${item.thumbnailUrl}</td>
          </tr>`
        })
        document.querySelector('table').innerHTML = tbl;
    } catch (error) {
        console.log("error")
    }
}


async function todos() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos')
        let value = await response.json();
        let tbl = ` <tr>
    <th scope="col">#</th>
    <th scope="col">userId</th>
    <th scope="col">id</th>
    <th scope="col">title</th>
    <th scope="col">completed</th>
  </tr>`

        value.forEach((item, index) => {
            tbl += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td> ${item.userId} </td>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.completed}</td>
          </tr>`
        })
        document.querySelector('table').innerHTML = tbl;
    } catch (error) {
        console.log("error")
    }
}


async function users() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let value = await response.json();
        let tbl = ` <tr>
    <th scope="col">#</th>
    <th scope="col">id</th>
    <th scope="col">name</th>
    <th scope="col">username</th>
    <th scope="col">email</th>
    <th scope="col">street</th>
    <th scope="col">companyName</th>
  </tr>`

        value.forEach((item, index) => {
            tbl += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.username}</td>
            <td>${item.email}</td>
            <td>${item.address.street}</td>
            <td>${item.company.name}</td>
          </tr>`
        })
        document.querySelector('table').innerHTML = tbl;
    } catch (error) {
        console.log("error");
    }
}

document.querySelector('.form-select').addEventListener('change', (e) => {
    const selectedValue = Number(e.target.value);
    switch (selectedValue) {
        case 1:
            Posts();
            break;
        case 2:
            comments();
            break;
        case 3:
            albums();
            break;
        case 4:
            photos();
            break;
        case 5:
            todos();
            break;
        case 6:
            users();
            break;
        default:
            break;
    }

})
