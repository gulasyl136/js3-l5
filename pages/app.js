// HTTP - HTTPS, Fetch(), API

// GET POST PUT DELETE PATCH

const userList = document.querySelector("#userList");
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => {
    // if(!res.true) {
    //     throw new Error("./img/галочка.png");
    // }
    return res.json();
})
.then((data) => {
    data.forEach(user => {
        const userDiv = document.createElement("div");

        userDiv.innerHTML = `
        <div class = "shadow-xl w-[230px] p-2 rounded-md cursor-pointer bg-[yellow]">
            <h1>${user.id}</h1>
            <h2>Name: ${user.name}</h2>
            <h2>Email: ${user.email}</h2>
            <h2>Username: ${user.username}</h2>
            </div>
            `;
            userList.appendChild(userDiv);
    });
    console.log(data);
});

