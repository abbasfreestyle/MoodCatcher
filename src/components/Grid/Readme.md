# Grid

This is the `NEW` component that lets you style items using `Row` and `Column`.

## Usage

```js
import { Grid } from 'components';

const { Column, Row } = Grid;

render() {
  return (
    <View>
      <Row>
        <Column>
          <Avatar />
        </Column>
        <Column>
          <Text>This is my profile name!</Text>
        </Column>
      </Row>
      <Row>
        <Text>Some very long description...</Text>
      </Row>
    </View>
  );
}
```

## Styling

The row and column component accepts `flex, margin, justifyContent and alignItems` as a styling prop. By default there is no flex, no margin and everything aligns to the start.

## TO DO

- Once the old grid component is strangled, we should rename the folder `from GridNew to Grid`
- Re assess if Row and Column directions are correct.