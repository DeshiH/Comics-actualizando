let comics = {
    render: () => {
        let urlAPI =
            "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=9461c2ee128a2bd57915c1a0944a8348&hash=47b8691baf0b07fbb35627d55e1a6656";
        let container = document.querySelector("#heroes-row");
        fetch(urlAPI)
            .then((res) => res.json())
            .then((json) => {
                console.log(json.data.results);
                json.data.results.forEach((hero) => {
                    container.insertAdjacentHTML("beforeend", `
                        <div class="card" style="width: 25%;">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                        <div class="card-body">
                          <h5 class="card-title">${hero.name}</h5>
                        </div>
                      </div>`);
                });
            });
    },
};
comics.render();