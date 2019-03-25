const addFeeling = `
  mutation(
    $name: String!,
    $feelingMoodId: ID!
  ) {
    createFeeling(input:{
      name: $name,
      feelingMoodId: $feelingMoodId
    }) {
      id
      name
    }
  }
`;

export default addFeeling;
