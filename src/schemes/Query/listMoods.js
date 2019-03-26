const listMoods = `
query ($username: String!) {
  listMoods (filter: {
    username: {
      eq: $username
    }
  }) {
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
