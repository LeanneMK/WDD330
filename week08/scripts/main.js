const url = "https://swapi.dev/api/";




function website(url, id) {
    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.json())
        .then(jsObject => {

            // console.table(jsObject);
            console.log(jsObject);

            view(jsObject.results, id, jsObject);
        })
        .catch(error => console.log('There was an error!', error))
}



function view(obj, id, r2d2) {
    let div = document.getElementById('swapi');
    div.innerHTML = '';
    let span = document.createElement('span');
    let ul = document.createElement('ul');
    let list = '';
    let count = 0;

    div.appendChild(span);
    span.appendChild(ul);

    // console.log('id', id);

    obj.forEach((x) => {
        let chewy = (id == 'films') ? x.title : x.name;
        // console.log('chewy', chewy, id, x.title);
        list += `
      <li id='${count}'>${chewy}</li>
    `;
        count++;
    });

    ul.innerHTML = list;
    paginations(r2d2);
}

function paginations(r2d2) {
    let arrows = document.getElementById('pagination');
    console.log(r2d2.previous, r2d2.next);
    let directions = `<a href="${r2d2.previous}">
  <input class="btn btn-page" type="button" id="left" value="left"></input></a>
  <a href="${r2d2.next}">
  <input class="btn btn-page" type="button" id="right" value="right"></input></a>
  `;
    arrows.innerHTML = directions;
}


//setting and calling adaptive menu for app

document.querySelector(".menu_icon").addEventListener("touchend", adaptiveMenu);

function adaptiveMenu() {
    let links = document.getElementById('navigation')
    if (links.className === "navigation") {
        links.className += ".responsive"
    } else {
        links.className = "navigation"
    }
}

document.querySelectorAll('.links').forEach(item => {
    item.addEventListener('touchend', event => {
        let temp_url = url + item.id + "/";
        console.log(temp_url);
        website(temp_url, item.id);
        adaptiveMenu();
    })
});