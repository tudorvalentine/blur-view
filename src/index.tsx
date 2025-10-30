import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package '@candlefinance/blur-view' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

export enum VariableBlurDirection {
  BlurredTopClearBottom = 'blurredTopClearBottom',
  BlurredBottomClearTop = 'blurredBottomClearTop',
}

export type VariableBlurViewProps = {
  style: ViewStyle;
  /**
   * Maximum blur radius. Default is 20.
   */
  maxBlurRadius?: number;
  /**
   * Direction of the blur gradient.
   * Default is 'blurredTopClearBottom' (blur at top, clear at bottom).
   */
  direction?: VariableBlurDirection | 'blurredTopClearBottom' | 'blurredBottomClearTop';
  /**
   * Start offset for blur gradient. Setting to a small negative value (e.g. -0.1) 
   * will start blur from larger radius which might look better in some cases.
   * Default is 0.
   */
  startOffset?: number;
};

const ComponentName = 'BlurViewView';

export const VariableBlurView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<VariableBlurViewProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
