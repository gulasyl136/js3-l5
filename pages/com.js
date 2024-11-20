const uLi = document.querySelector("#uLi");
fetch("https://jsonplaceholder.typicode.com/comments")
.then(res => {
    return res.json();
})
.then((data) => {
    data.forEach(commen => {
        const commenDiv = document.createElement("div");
        commenDiv.innerHTML = `
        <div class = "shadow-2xl w-[500px] cursor-pointer ml-[230px] hover:bg-cyan-100 mt-[50px] p-2 rounded-md bg-[aqua]">
            <h1>${commen.id}</h1>
            <h1>UserId${commen.uLiId}</h1>
            <i><h2>Name: ${commen.name}</h2><i/>
            <h2>Email: ${commen.email}</h2>
            <h2>Body: ${commen.body}</h2>
            </div>
            `;
            uLi.appendChild(commenDiv);
    });
    console.log(data);
});
