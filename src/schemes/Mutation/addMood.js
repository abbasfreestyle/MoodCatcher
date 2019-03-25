const addMood = `
  mutation(
    $date: String!,
    $mood: Int!, 
    $comment: String
    ) {
    createMood(input:{
      date: $date,
      mood: $mood,
      comment: $comment
    }) {
      id
      date
      mood
      comment
    }
  }
`;

export default addMood;
