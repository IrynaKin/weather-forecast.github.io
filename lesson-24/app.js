

// const user = {
//     name: "Jack",
//     age: 20,
//     skils: {
//         html: 5
//     }
// }
// let copy = JSON.parse(JSON.stringify(user))
// copy.skils.html = 10;

// console.log(user);
// console.log(copy);


// fetch("http://api.github.com/users/IrynaKin")
// .then((response) => response.json())
// .then(data => console.log(data))

// function showAvatar(){
//     fetch("http://api.github.com/users/IrynaKin")
//     .then((response) => response.json())
//     .then(data => {
//         let img = document.createElement("img");
//         let avatar = data.avatar_url;
//         img.setAttribute("src", avatar);
//         document.body.prepend(img)
//     })
//     }
//     let btn = document.querySelector("button");
//     btn.addEventListener('click',showAvatar)


class Article{
    constructor(title,src,description,name,parent){
        this.title = title;
        this.src = src;
        this.description =description;
        this.name = name;
        this.parent = document.querySelector(parent);
    }

    render() {
        let article = document.createElement("article");
        article.classList.add("col-6");
        article.innerHTML = `
        <div class="article">
                <h2 class="article-title">${this.title}</h2>
                <div class="article-img">
                    <img src=${this.src} alt="">
                </div>
                <p class="article-description">${this.description}</p>
                <div class="article-name">Author: ${this.name}</div>
            </div>
        `
        this.parent.append(article)
    }
    
}

// new Article(
//     "wwerty 1",
//     "images/news.jpg",
//     "sdfghjklhgtrsrdfghjkl;hgfdfgghjkl;,",
//     "jim",
//     ".article"
// ).render()

fetch("db.json")
.then(res => res.json())
.then(data => {
    data.map(item =>(
        new Article(
            item.title,
            item.src,
            item.description,
            item.name,
            item.parent
        ).render()
    ))
})