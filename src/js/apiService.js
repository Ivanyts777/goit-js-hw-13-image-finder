const url = 'https://pixabay.com/api/';

export default {
  query: '',
  page: 1,

  async fetchMetod() {
    const keyApi = '17646054-1a7be31ba7655627546e0833b';
    const parametres = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${keyApi}`;
    try {
      const res = await fetch(url + parametres);
      const data = await res.json();
      this.incrementPage();
      return data.hits;
    } catch (e) {
      console.error(e);
    }
  },
  resetPage() {
    this.pahe = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get queryValue() {
    return this.query;
  },
  set queryValue(val) {
    return (this.query = val);
  },
};
