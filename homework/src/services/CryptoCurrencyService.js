import axios from "axios";

export default class CryptoCurrencyService {
  base_url = "https://api.udilia.com/coins/v1";

  // Get currencies by page and perPage query params
  async getCryptoCurrencies(page = 1, perPage = 5) {
    return await axios.get(
      `${this.base_url}/cryptocurrencies?page=${page}&perPage=${perPage}`
    );
  }
  // Get currencies by page
  async getCryptoCurrenciesOnlyByPage(page) {
    return await axios.get(`${this.base_url}/cryptocurrencies?page=${page}`);
  }
  // Get all currencies
  async getAllCryptoCurrencies() {
    return await axios.get(`${this.base_url}/cryptocurrencies`);
  }
  // Get currency by id
  async getCryptoCurrencyById(id) {
    return await axios.get(`${this.base_url}/cryptocurrencies/${id}`);
  }
  // Get autocomplete
  async getAutocomplete() {
    return await axios.get(`${this.base_url}/autocomplete?searchQuery=bit`);
  }
}