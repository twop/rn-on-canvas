import { NodeInstance } from 'yoga-layout';
import { TextStyle, ViewStyle } from './ViewStyleProps';
export const enum ElementType {
  VIEW = 'view',
  TEXT = 'text'
}

// tslint:disable-next-line:interface-name
export interface Rect {
  left: number;
  top: number;
  width: number;
  height: number;
}

// export type CanvasRect = {
//   type: FigureType.rect;
//   // rect: Rect;
//   fillStyle: string;
//   flexStyle: FlexStyle;
// };

// export type Figure = CanvasRect | Group;

export type View = {
  type: ElementType.VIEW;
  style: ViewStyle;
  children?: Element[];
};

export type Text = {
  type: ElementType.TEXT;
  text: string;
  style: TextStyle;
};

export type Element = View | Text;
export type ViewNode = {
  element: Element;
  node: NodeInstance;
  rect?: Rect;
  children?: ViewNode[];
};

export const F = {
  // rect: (flexStyle: FlexStyle, fillStyle?: string): CanvasRect => ({
  //   type: FigureType.rect,
  //   flexStyle,
  //   fillStyle: fillStyle || 'black'
  // }),
  view: (style: ViewStyle, ...children: Element[]): View => ({
    type: ElementType.VIEW,
    style,
    children
  }),
  text: (style: TextStyle, text: string): Text => ({
    type: ElementType.TEXT,
    text,
    style
  })
};
