# Dashboard

## Listing Mood Query

The current response is retrieving an entire list with no limits/pagination. I agree this is a no no, being new to GraphQL i couldn't achieve what i wanted, nevertheless this solution isn't correct.

The correct solution would be to write resolvers as a lambda function. This would query DynamoDB and would have it request with `offset` and `limit` arguments to achieve pagination. Ideally we should load a list of 10/20 items at a time and trigger another call when a user reaches the bottom of the list.

The desired response would only return a limited list of items, the lambda function would also need to retrieve the total number of entries along with a total mood score (the percentage doesn't have to be calculated here, but it can for a better UX).

The desired response would also return the list in a chronological order by date. This could be structured as a sort ASC/DESC argument with a choice of what field the list should sort against.

So a number of challenges that i'm completely aware of, if i had more time to play around with graphQL and AWS, this shouldn't be complicated to accomplish.