type Color = string;

export type ViewStyleProps = {
  // backfaceVisibility?: enum('visible', 'hidden')
  backgroundColor?: Color;
  borderBottomColor?: Color;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomWidth?: number;
  borderColor?: Color;
  borderLeftColor?: Color;
  borderLeftWidth?: number;
  borderRadius?: number;
  borderRightColor?: Color;
  borderRightWidth?: number;
  borderStyle?: 'solid' | 'dotted' | 'dashed';
  borderTopColor?: Color;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderTopWidth?: number;
  borderWidth?: number;
  opacity?: number;
};

export type FlexDirectionType =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse';

export type FlexAlignItemsType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline';

export type FlexAlignContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around';

export type FlexAlignSelfType = 'auto' | FlexAlignItemsType;

export type JustifyContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around';

export type AllAligns =
  | FlexAlignContentType
  | FlexAlignSelfType
  | FlexAlignItemsType;

export interface FlexStyle {
  alignContent?: FlexAlignContentType;
  alignItems?: FlexAlignItemsType;
  alignSelf?: FlexAlignSelfType;
  aspectRatio?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderTopWidth?: number;
  borderWidth?: number;
  bottom?: number | string;
  flex?: number;
  flexBasis?: number | string;
  flexDirection?: FlexDirectionType;
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: 'wrap' | 'nowrap';
  height?: number | string;
  justifyContent?: JustifyContentType;
  left?: number | string;
  margin?: number | string;
  marginBottom?: number | string;
  marginHorizontal?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginVertical?: number | string;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  overflow?: 'visible' | 'hidden' | 'scroll';
  padding?: number | string;
  paddingBottom?: number | string;
  paddingHorizontal?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingTop?: number | string;
  paddingVertical?: number | string;
  position?: 'absolute' | 'relative';
  right?: number | string;
  top?: number | string;
  width?: number | string;
  zIndex?: number;

  /**
   * @platform ios
   */
  direction?: 'inherit' | 'ltr' | 'rtl';
}

export interface ViewStyle extends FlexStyle {
  backfaceVisibility?: 'visible' | 'hidden';
  backgroundColor?: string;
  borderBottomColor?: string;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomWidth?: number;
  borderColor?: string;
  borderLeftColor?: string;
  borderRadius?: number;
  borderRightColor?: string;
  borderRightWidth?: number;
  borderStyle?: 'solid' | 'dotted' | 'dashed';
  borderTopColor?: string;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderTopWidth?: number;
  display?: 'none' | 'flex';
  opacity?: number;
  overflow?: 'visible' | 'hidden';
  shadowColor?: string;
  shadowOffset?: { width: number; height: number };
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
  testID?: string;
}

export interface TextStyle extends ViewStyle {
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  fontStyle?: 'normal' | 'italic';
  /**
   * Specifies font weight. The values 'normal' and 'bold' are supported
   * for most fonts. Not all fonts have a variant for each of the numeric
   * values, in that case the closest one is chosen.
   */
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  letterSpacing?: number;
  lineHeight?: number;
  /**
   * Specifies text alignment.
   * The value 'justify' is only supported on iOS.
   */
  textAlign?: 'auto' | 'left' | 'right' | 'center';
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed';
  textDecorationColor?: string;
  textShadowColor?: string;
  textShadowOffset?: { width: number; height: number };
  textShadowRadius?: number;
  testID?: string;
}
