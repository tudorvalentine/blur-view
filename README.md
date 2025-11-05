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

Install from GitHub:

```sh
yarn add https://github.com/tudorvalentine/blur-view.git
```

Then run pod install:

```sh
cd ios && pod install && cd ..
```

**Important:** After installation, you need to:
1. Clean your build folder in Xcode (Cmd+Shift+K)
2. Rebuild the app (Cmd+R)
3. If you still see errors, try: `npx react-native start --reset-cache`

### ⚠️ Compatibility with @react-native-community/blur

This package uses a unique class name (`VariableBlurViewPackage`) to avoid conflicts with `@react-native-community/blur` or other blur libraries. You can safely install both packages in the same project without naming conflicts.


## Usage

Use `VariableBlurView` to create gradient blur:

```js
import { VariableBlurView, VariableBlurDirection } from '@tudorvalentine/blur-view';

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

## API Documentation

### VariableBlurView Props

| Property        | Type                                                   | Default                   | Description                                                                                     |
| --------------- | ------------------------------------------------------ | ------------------------- | ----------------------------------------------------------------------------------------------- |
| `maxBlurRadius` | `number`                                               | 20                        | Maximum blur radius                                                                             |
| `direction`     | `'blurredTopClearBottom'` \| `'blurredBottomClearTop'` | `'blurredTopClearBottom'` | Gradient direction (top to bottom or bottom to top)                                             |
| `startOffset`   | `number`                                               | 0                         | Gradient start offset. Negative value (e.g. -0.1) creates a smoother transition                |
| `style`         | `ViewStyle`                                            | required                  | React Native styles                                                                             |

## Examples

View the example app in [example/src/App.tsx](./example/src/App.tsx)

## Platform Support

- ✅ iOS (all features)
- ❌ Android (not supported in this fork)

## Troubleshooting

### "Cannot read property 'VariableBlurView' of undefined"

This error means the native module is not linked properly. Try these steps:

1. **Remove node_modules and reinstall:**
```sh
rm -rf node_modules
yarn install
```

2. **Clean iOS build:**
```sh
cd ios
rm -rf Pods Podfile.lock
pod install
cd ..
```

3. **Reset Metro bundler cache:**
```sh
npx react-native start --reset-cache
```

4. **Clean and rebuild in Xcode:**
   - Open your project in Xcode
   - Press Cmd+Shift+K to clean
   - Press Cmd+R to rebuild

5. **Verify the pod is installed:**
```sh
cd ios && pod list | grep blur-view
```

You should see `tudorvalentine-blur-view` in the output.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
