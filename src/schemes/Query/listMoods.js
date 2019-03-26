const listMoods = `
query {
  listMoods {
    items {
      id
      date
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
