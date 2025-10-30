# BlurView for React Native (iOS)

A fork of [@candlefinance/blur-view](https://github.com/candlefinance/blur-view) with enhanced gradient blur capabilities.

## What's New in This Fork

### ✨ VariableBlurView - Gradient Blur

Added a new `VariableBlurView` component for creating smooth gradient blur from full intensity to clear. Perfect for:
- Blurring top/bottom portions of the screen
- Creating smooth transitions between content
- Fade effects in scroll containers

### 🔧 Improvements

- **Fixed harsh blur cutoff issue**: blur now transitions smoothly without visible edge lines
- **Fixed pixelation** at blur edges
- **Added startOffset parameter** for more natural gradient start
- Removed dimming/tint view artifact for a cleaner effect

### 📚 Credits

Implementation based on [VariableBlur by @jtrivedi](https://github.com/jtrivedi/VariableBlurView)

## Preview

https://github.com/candlefinance/blur-view/assets/12258850/66fc73aa-7160-41b2-97cd-a406440e372e

## Installation

```sh
yarn add @candlefinance/blur-view
cd ios && pod install
```

## Usage

### VariableBlurView (New!)

Use `VariableBlurView` to create gradient blur:

```js
import { VariableBlurView, VariableBlurDirection } from '@candlefinance/blur-view';

// Blur from top
<VariableBlurView
  maxBlurRadius={20}
  direction={VariableBlurDirection.BlurredTopClearBottom}
  startOffset={-0.1}
  style={{
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 200,
  }}
/>

// Blur from bottom
<VariableBlurView
  maxBlurRadius={20}
  direction={VariableBlurDirection.BlurredBottomClearTop}
  style={{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 200,
  }}
/>
```

### BlurView (Original)

Use `BlurView` for uniform blur:

```js
import { BlurView } from '@candlefinance/blur-view';

<BlurView
  blurTintColor="#ff006780" // hex with opacity
  colorTintOpacity={0.2}
  blurRadius={10}
  style={styles.blur}
/>;
```

## API Documentation

### VariableBlurView Props

| Property        | Type                                                   | Default                   | Description                                                                                     |
| --------------- | ------------------------------------------------------ | ------------------------- | ----------------------------------------------------------------------------------------------- |
| `maxBlurRadius` | `number`                                               | 20                        | Maximum blur radius                                                                             |
| `direction`     | `'blurredTopClearBottom'` \| `'blurredBottomClearTop'` | `'blurredTopClearBottom'` | Gradient direction (top to bottom or bottom to top)                                             |
| `startOffset`   | `number`                                               | 0                         | Gradient start offset. Negative value (e.g. -0.1) creates a smoother transition                |
| `style`         | `ViewStyle`                                            | required                  | React Native styles                                                                             |

### BlurView Props (original component)

| Property            | Type     | Default   | Description                             |
| ------------------- | -------- | --------- | --------------------------------------- |
| `blurRadius`        | `number` | 0         | The amount of blur to apply             |
| `blurTintColor`     | `string` | undefined | Apply a tint color (hex with opacity)   |
| `blurEnabled` (iOS) | `bool`   | undefined | Enable/disable blur                     |
| `colorTintOpacity`  | `number` | undefined | Opacity of the color tint (iOS)         |
| `scale`             | `number` | undefined | Scale factor of blur                    |

## Examples

View the example app in [example/src/App.tsx](./example/src/App.tsx)

## Platform Support

- ✅ iOS (all features)
- ❌ Android (not supported in this fork)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
