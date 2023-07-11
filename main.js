window.onload = function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(async (data) => {
            const response = await data.json();

            const main = document.querySelector("#container");

            response.forEach((post) => {
                const postCard = document.createElement("div");
                postCard.classList.add("card-single")

                const postTitle = document.createElement("h1");
                postTitle.innerText = post.title;

                const postBody = document.createElement("p");
                postBody.innerText = post.body;


                postCard.appendChild(postTitle);
                postCard.appendChild(postBody);


                main.appendChild(postCard);

            });



        }).catch((erro) => alert("Deu erro ao carregar os dados", console.log(erro)))
}