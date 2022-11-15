export const filterByDuration = (array) => {
    return array.filter(({ duration }) => duration <= 40);
  }
  
export const filterByQuery = (array, query) => {
    return array.filter((item) => {
      return item.nameRU.toLowerCase().includes(query.toLowerCase())
    });
  }
