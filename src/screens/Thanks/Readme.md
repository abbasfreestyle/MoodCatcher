# Thanks

## Add Mood Mutation

The whole purpose of graphQL is for the user to make 1 API request and let the server deal with multiple executions. Being new to graphQL, i couldn't achieve the mutation that i would have desired. Instead of looping through a list of feelings and adding these items 1 at a time. The correct solution would be to have 1 mutation to let the lambda function take care of adding multiple feeling items that are related to the mood.

Also in hindsight it would have been better to store the value of mood ranges (between 1-7) as percentages for the server. This would mean if a new feature range (lets say between 1-25) is introduced it can be changed in the front end without any backend compromises
