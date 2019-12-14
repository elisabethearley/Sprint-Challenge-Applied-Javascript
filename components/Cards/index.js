// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        const cardArticles = Object.entries(response.data.articles); // Need array --> array --> object --> item.
            cardArticles.map(article => {
                article[1].map(item => {
                    cardsContainer.appendChild(cardComponent(item));
                });
            console.log(cardArticles);
            });
    })
    .catch(err => {
        console.log('Error:', err);
    })
        // response.data.articles.forEach(item => {
        //     const cardArticles = articleCreator(item);
        //     cardsContainer.appendChild(cardArticles);
        //     console.log(cardArticles);
        // });

        // const cardArticles = Object.keys(response.data.articles).forEach(cardComponent(item));
        // cardsContainer.appendChild(cardArticles);
        // console.log(cardArticles);

let cardsContainer = document.querySelector('.cards-container');

function cardComponent(item) {

    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = item.headline;
    card.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    author.appendChild(imgContainer);

    const img = document.createElement('img');
    img.src = item.authorPhoto;
    imgContainer.appendChild(img);

    const spanAuthorName = document.createElement('span');
    spanAuthorName.textContent = item.authorName;
    author.appendChild(spanAuthorName);

    return card;

};

