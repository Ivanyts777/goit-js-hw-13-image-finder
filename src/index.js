import './styles.css';
import './js/apiService.js';
import getData from './js/apiService.js';
import template from './tamplate.hbs';

const refs = {
  form: document.querySelector('.search-form'),
  list: document.querySelector('.gallery'),
  button: document.querySelector('.load__more'),
};

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  refs.list.innerHTML = '';
  getData.resetPage();
  let input = event.currentTarget.elements.query.value;
  getData.query = input;
  getData.fetchMetod().then(hits => {
    const markup = template(hits);
    refs.list.insertAdjacentHTML('beforeend', markup);
    refs.button.classList.remove('is__hiden');
  });
});

refs.button.addEventListener('click', () => {
  getData.fetchMetod().then(hits => {
    const markup = template(hits);
    refs.list.insertAdjacentHTML('beforeend', markup);
  });
});
