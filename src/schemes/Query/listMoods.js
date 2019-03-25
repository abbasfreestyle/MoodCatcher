const listMoods = `
query {
  listMoods(limit: 10) {
    items {
      id
      feelings {
        items {
          id
          name
        }
      }
      mood
      comment
    }
  }
}`;

export default listMoods;
