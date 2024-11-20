const uList = document.querySelector("#uList");
fetch("https://jsonplaceholder.typicode.com/todos")
.then(res => {
    return res.json();
})
.then((data) => {
    data.forEach(todo => {
        const todoDiv = document.createElement("div");

        todoDiv.innerHTML = `
        <div class = "shadow-xl w-[230px] cursor-pointer hover:font-serif hover:bg-yellow-100 mt-[50px] p-2 rounded-md bg-[white]">
            <h1>${todo.id}</h1>
            <h1>UserId${todo.userId}</h1>
            <h2>Title: ${todo.title}</h2>
            <h2>Completed: ${todo.completed}</h2>
            </div>
            `;
            uList.appendChild(todoDiv);

    });
    console.log(data);
    
});

const transformData = (data) => {
    return data.map(item => {
        return {
            ...item,
            completed: item.completed ? '✔' : '✖'
        };
    });
};



