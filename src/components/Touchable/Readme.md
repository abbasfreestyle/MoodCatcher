# Touchable

The Touchable component extends off React Native's [TouchableNativeFeedback](https://facebook.github.io/react-native/docs/touchablenativefeedback) and [TouchableWithoutFeedback](https://facebook.github.io/react-native/docs/touchablewithoutfeedback). It's a flexible component that accepts a single element as a child prop. The purpose for this is so that the touchable component is `Platform specific`.

- If it's an Android device, it utilises the ripple effect.
- If it's iOS, it defaults to a tappable area with `no feedback`.

## Android

The android version has a ripple effect on tap. This is supported with Android API 21+. Versions that don't support this will output a yellow warning but not affect the functionality of the button.

The ripple color accepts the `rippleColor` prop. By default the ripple color is set to `theme.onSurface` in [theme](../../../config/theme/index.js)

## Border Radius

Apply the `borderRadius` prop to Touchable `instead of the styled View`. The reason for this is because it prevents the android ripple effect from spilling out.

## Usage

```js
import { Touchable } from 'components';

class MyButton extends React.Component {
  render() {
    return (
      <Touchable onPress={() => console.log('hi')} borderRadius={10}>
        <View styles={styles.myButtonStyle}>
          <SomeIcon />
          <Text>This is a button</Text>
        </View>
      </Touchable>
    );
  }
}
```

Also see the [LoginButton](../LoginButton/index.js) to see how the Touchable component is used there.