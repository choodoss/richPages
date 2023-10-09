async function getRichList() {
    try {
        const response = await fetch('./index.json');
        const richList = await response.json();
        return richList;
    } catch (error) {
        console.error('Error fetching rich list:', error);
        throw error;
    }
}

const makeMarkup = (richList) => {
    return richList.map(({ name, link, photo }) => (
        `<li class="rich-item">
            <a class="rich-link" href=${link}>
                <img class="rich-link__img" src="${photo}" alt=${name}>
                <h4 class="rich-link__title">${name}</h4>
            </a>
        </li>`
    )).join('');
}

const insertRichList = async () => {
    try {
        const { richList } = await getRichList();
        const mainList = document.querySelector('.js-rich-list');
        mainList.innerHTML = makeMarkup(richList);
    } catch (error) {
        console.error('Error inserting rich list:', error);
    }
}

insertRichList();



