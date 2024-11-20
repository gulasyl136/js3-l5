const uL = document.querySelector("#uL");
fetch("https://jsonplaceholder.typicode.com/photos")
.then(res => {
    // const first50Photos = data.slice(0, 50);
    
    // console.log(first50Photos);
    return res.json();
})

.then((data) => {
    data.forEach(photos => {
        const photosDiv = document.createElement("div");
        photosDiv.innerHTML = `
        <div class = "shadow-xl w-[300px] hover:bg-rose-200 cursor-pointer mt-[50px] p-2 rounded-md bg-rose-500">
            <h1>Id${photos.albumid}</h1>
            <h1>PhotosId${photos.Id}</h1>
            <h2>Title: ${photos.title}</h2>
            <h2>Url: ${photos.url}</h2>
            <h2>ThumbnailUrl: ${photos.thumbnailUrl}</h2>
            </div>
            `;
            uL.appendChild(photosDiv);
    });
    console.log(data);
});


