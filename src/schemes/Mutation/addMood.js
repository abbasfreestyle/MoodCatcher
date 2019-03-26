const addMood = `
  mutation(
    $username: String!,
    $date: AWSTimestamp!,
    $mood: Int!, 
    $comment: String
    ) {
    createMood(input:{
      username: $username
      date: $date,
      mood: $mood,
      comment: $comment
    }) {
      id
      username
      date
      mood
      comment
    }
  }
`;

export default addMood;
