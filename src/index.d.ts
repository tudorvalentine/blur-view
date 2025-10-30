import { ViewStyle, ReactNode } from 'react-native';
import { Component } from 'react';

export interface BlurViewProps {
  style: ViewStyle;
  blurTintColor?: string;
  blurRadius: number;
  blurEnabled?: boolean;
  colorTintOpacity?: number;
  scale?: number;
  children?: ReactNode;
}

export enum VariableBlurDirection {
  BlurredTopClearBottom = 'blurredTopClearBottom',
  BlurredBottomClearTop = 'blurredBottomClearTop',
}

export interface VariableBlurViewProps {
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
}

export class BlurView extends Component<BlurViewProps> {}
export class VariableBlurView extends Component<VariableBlurViewProps> {}

