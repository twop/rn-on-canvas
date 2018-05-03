import { NodeInstance } from 'yoga-layout';
import {
  Align,
  Edge,
  FlexDirection,
  Justify,
  PositionType,
  Wrap
} from '../yoga/yogaEnums';
import {
  AllAligns,
  FlexDirectionType,
  FlexStyle,
  JustifyContentType
} from './ViewStyleProps';

export function applyYogaProps(
  layout: FlexStyle,
  n: NodeInstance
): NodeInstance {
  const { height, width, maxHeight, maxWidth, position } = layout;

  if (position === 'absolute') {
    n.setPositionType(PositionType.Absolute);
  }
  if (position === 'relative') {
    n.setPositionType(PositionType.Relative);
  }

  if (height !== undefined && typeof height === 'number') {
    n.setHeight(height);
  }

  if (width !== undefined && typeof width === 'number') {
    n.setWidth(width);
  }

  if (maxHeight !== undefined && typeof maxHeight === 'number') {
    n.setMaxHeight(maxHeight);
  }

  if (maxWidth !== undefined && typeof maxWidth === 'number') {
    n.setMaxWidth(maxWidth);
  }

  setFlex(layout, n);
  setMargin(layout, n);
  setPadding(layout, n);
  setAlign(layout, n);
  setBorderWidth(layout, n);

  return n;
}

function setFlex(layout: FlexStyle, n: NodeInstance): void {
  const {
    flex,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    flexBasis
  } = layout;

  if (flex !== undefined) {
    n.setFlex(flex);
  }

  if (flexDirection !== undefined) {
    n.setFlexDirection(toYogaDirection(flexDirection));
  }

  if (flexGrow !== undefined) {
    n.setFlexGrow(flexGrow);
  }

  if (flexShrink !== undefined) {
    n.setFlexGrow(flexShrink);
  }

  if (flexBasis !== undefined && typeof flexBasis === 'number') {
    n.setFlexBasis(flexBasis);
  }

  if (flexWrap !== undefined) {
    if (flexWrap === 'wrap') {
      n.setFlexWrap(Wrap.Wrap);
    }
    if (flexWrap === 'nowrap') {
      n.setFlexWrap(Wrap.No);
    }
  }
}

function setAlign(layout: FlexStyle, n: NodeInstance): void {
  const { alignItems, justifyContent, alignSelf, alignContent } = layout;
  if (alignItems !== undefined) {
    n.setAlignItems(toYogaFlexAlign(alignItems));
  }
  if (alignContent !== undefined) {
    n.setAlignContent(toYogaFlexAlign(alignContent));
  }
  if (alignSelf !== undefined) {
    n.setAlignSelf(toYogaFlexAlign(alignSelf));
  }
  if (justifyContent !== undefined) {
    n.setJustifyContent(toYogaJustify(justifyContent));
  }
}

function setBorderWidth(layout: FlexStyle, n: NodeInstance): void {
  const {
    borderBottomWidth,
    borderLeftWidth,
    borderRightWidth,
    borderTopWidth,
    borderWidth
  } = layout;

  if (borderWidth !== undefined) {
    n.setBorder(Edge.All, borderWidth);
  }
  if (borderBottomWidth !== undefined) {
    n.setBorder(Edge.Bottom, borderBottomWidth);
  }
  if (borderLeftWidth !== undefined) {
    n.setBorder(Edge.Left, borderLeftWidth);
  }
  if (borderRightWidth !== undefined) {
    n.setBorder(Edge.Right, borderRightWidth);
  }
  if (borderTopWidth !== undefined) {
    n.setBorder(Edge.Top, borderTopWidth);
  }
}

export function setMargin(layout: FlexStyle, n: NodeInstance): void {
  const {
    margin,
    marginHorizontal,
    marginVertical,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop
  } = layout;

  if (margin !== undefined && typeof margin === 'number') {
    n.setMargin(Edge.All, margin);
  }
  if (marginHorizontal !== undefined && typeof marginHorizontal === 'number') {
    n.setMargin(Edge.Horizontal, marginHorizontal);
  }
  if (marginVertical !== undefined && typeof marginVertical === 'number') {
    n.setMargin(Edge.Vertical, marginVertical);
  }
  if (marginLeft !== undefined && typeof marginLeft === 'number') {
    n.setMargin(Edge.Left, marginLeft);
  }
  if (marginTop !== undefined && typeof marginTop === 'number') {
    n.setMargin(Edge.Top, marginTop);
  }
  if (marginRight !== undefined && typeof marginRight === 'number') {
    n.setMargin(Edge.Right, marginRight);
  }
  if (marginBottom !== undefined && typeof marginBottom === 'number') {
    n.setMargin(Edge.Bottom, marginBottom);
  }
}

export function setPadding(layout: FlexStyle, n: NodeInstance): void {
  const {
    padding,
    paddingHorizontal,
    paddingVertical,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop
  } = layout;

  if (padding !== undefined && typeof padding === 'number') {
    n.setPadding(Edge.All, padding);
  }
  if (
    paddingHorizontal !== undefined &&
    typeof paddingHorizontal === 'number'
  ) {
    n.setPadding(Edge.Horizontal, paddingHorizontal);
  }
  if (paddingVertical !== undefined && typeof paddingVertical === 'number') {
    n.setPadding(Edge.Vertical, paddingVertical);
  }
  if (paddingLeft !== undefined && typeof paddingLeft === 'number') {
    n.setPadding(Edge.Left, paddingLeft);
  }
  if (paddingTop !== undefined && typeof paddingTop === 'number') {
    n.setPadding(Edge.Top, paddingTop);
  }
  if (paddingRight !== undefined && typeof paddingRight === 'number') {
    n.setPadding(Edge.Right, paddingRight);
  }
  if (paddingBottom !== undefined && typeof paddingBottom === 'number') {
    n.setPadding(Edge.Bottom, paddingBottom);
  }
}

function toYogaDirection(dir: FlexDirectionType): FlexDirection {
  switch (dir) {
    case 'row':
      return FlexDirection.Row;
    case 'row-reverse':
      return FlexDirection.RowReverse;
    case 'column':
      return FlexDirection.Column;
    case 'column-reverse':
      return FlexDirection.ColumnReverse;
    default:
      return FlexDirection.Row;
  }
}
function toYogaFlexAlign(align: AllAligns): Align {
  switch (align) {
    case 'baseline':
      return Align.Baseline;
    case 'center':
      return Align.Center;
    case 'flex-end':
      return Align.FlexEnd;
    case 'flex-start':
      return Align.FlexStart;
    case 'stretch':
      return Align.Stretch;
    case 'auto':
      return Align.Auto;
    case 'space-around':
      return Align.SpaceAround;
    case 'space-between':
      return Align.SpaceBetween;
    default:
      return Align.Auto;
  }
}
function toYogaJustify(justify: JustifyContentType): Justify {
  switch (justify) {
    case 'center':
      return Justify.Center;
    case 'flex-end':
      return Justify.FlexEnd;
    case 'flex-start':
      return Justify.FlexStart;
    case 'space-around':
      return Justify.SpaceAround;
    case 'space-between':
      return Justify.SpaceBetween;
    default:
      throw new Error(`uknkown justify = ${justify}`);
  }
}
