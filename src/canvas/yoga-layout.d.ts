declare module 'yoga-layout' {
  // https://github.com/facebook/yoga/blob/master/javascript/sources/YGEnums.js
  // and https://github.com/facebook/yoga/blob/master/gentest/gentest-javascript.js 5
  const UNDEFINED: number;

  const ALIGN_COUNT = 8;
  const ALIGN_AUTO = 0;
  const ALIGN_FLEX_START = 1;
  const ALIGN_CENTER = 2;
  const ALIGN_FLEX_END = 3;
  const ALIGN_STRETCH = 4;
  const ALIGN_BASELINE = 5;
  const ALIGN_SPACE_BETWEEN = 6;
  const ALIGN_SPACE_AROUND = 7;

  export type AlignT =
    | typeof ALIGN_COUNT
    | typeof ALIGN_AUTO
    | typeof ALIGN_FLEX_START
    | typeof ALIGN_CENTER
    | typeof ALIGN_FLEX_END
    | typeof ALIGN_STRETCH
    | typeof ALIGN_BASELINE
    | typeof ALIGN_SPACE_BETWEEN
    | typeof ALIGN_SPACE_AROUND;

  const DIMENSION_COUNT = 2;
  const DIMENSION_WIDTH = 0;
  const DIMENSION_HEIGHT = 1;

  export type DimensionT = typeof DIMENSION_WIDTH | typeof DIMENSION_HEIGHT;

  const DIRECTION_COUNT = 3;
  const DIRECTION_INHERIT = 0;
  const DIRECTION_LTR = 1;
  const DIRECTION_RTL = 2;

  export type DirectionT =
    | typeof DIRECTION_INHERIT
    | typeof DIRECTION_LTR
    | typeof DIRECTION_RTL;

  const DISPLAY_COUNT = 2;
  const DISPLAY_FLEX = 0;
  const DISPLAY_NONE = 1;

  export type DisplayT = typeof DISPLAY_FLEX | typeof DISPLAY_NONE;

  const EDGE_COUNT = 9;
  const EDGE_LEFT = 0;
  const EDGE_TOP = 1;
  const EDGE_RIGHT = 2;
  const EDGE_BOTTOM = 3;
  const EDGE_START = 4;
  const EDGE_END = 5;
  const EDGE_HORIZONTAL = 6;
  const EDGE_VERTICAL = 7;
  const EDGE_ALL = 8;

  export type EdgeT =
    | typeof EDGE_LEFT
    | typeof EDGE_TOP
    | typeof EDGE_RIGHT
    | typeof EDGE_BOTTOM
    | typeof EDGE_START
    | typeof EDGE_END
    | typeof EDGE_HORIZONTAL
    | typeof EDGE_VERTICAL
    | typeof EDGE_ALL;

  const EXPERIMENTAL_FEATURE_COUNT = 1;
  const EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS = 0;

  const FLEX_DIRECTION_COUNT = 4;
  const FLEX_DIRECTION_COLUMN = 0;
  const FLEX_DIRECTION_COLUMN_REVERSE = 1;
  const FLEX_DIRECTION_ROW = 2;
  const FLEX_DIRECTION_ROW_REVERSE = 3;

  export type FlexDirectionT =
    | typeof FLEX_DIRECTION_COLUMN
    | typeof FLEX_DIRECTION_COLUMN_REVERSE
    | typeof FLEX_DIRECTION_ROW
    | typeof FLEX_DIRECTION_ROW_REVERSE;

  const JUSTIFY_COUNT = 5;
  const JUSTIFY_FLEX_START = 0;
  const JUSTIFY_CENTER = 1;
  const JUSTIFY_FLEX_END = 2;
  const JUSTIFY_SPACE_BETWEEN = 3;
  const JUSTIFY_SPACE_AROUND = 4;

  export type JustifyT =
    | typeof JUSTIFY_COUNT
    | typeof JUSTIFY_FLEX_START
    | typeof JUSTIFY_CENTER
    | typeof JUSTIFY_FLEX_END
    | typeof JUSTIFY_SPACE_BETWEEN
    | typeof JUSTIFY_SPACE_AROUND;

  const LOG_LEVEL_COUNT = 6;
  const LOG_LEVEL_ERROR = 0;
  const LOG_LEVEL_WARN = 1;
  const LOG_LEVEL_INFO = 2;
  const LOG_LEVEL_DEBUG = 3;
  const LOG_LEVEL_VERBOSE = 4;
  const LOG_LEVEL_FATAL = 5;

  const MEASURE_MODE_COUNT = 3;
  const MEASURE_MODE_UNDEFINED = 0;
  const MEASURE_MODE_EXACTLY = 1;
  const MEASURE_MODE_AT_MOST = 2;

  const NODE_TYPE_COUNT = 2;
  const NODE_TYPE_DEFAULT = 0;
  const NODE_TYPE_TEXT = 1;

  const OVERFLOW_COUNT = 3;
  const OVERFLOW_VISIBLE = 0;
  const OVERFLOW_HIDDEN = 1;
  const OVERFLOW_SCROLL = 2;

  const POSITION_TYPE_COUNT = 2;
  const POSITION_TYPE_RELATIVE = 0;
  const POSITION_TYPE_ABSOLUTE = 1;

  type PositionTypeT =
    | typeof POSITION_TYPE_RELATIVE
    | typeof POSITION_TYPE_ABSOLUTE;

  const PRINT_OPTIONS_COUNT = 3;
  const PRINT_OPTIONS_LAYOUT = 1;
  const PRINT_OPTIONS_STYLE = 2;
  const PRINT_OPTIONS_CHILDREN = 4;

  const UNIT_COUNT = 4;
  const UNIT_UNDEFINED = 0;
  const UNIT_POINT = 1;
  const UNIT_PERCENT = 2;
  const UNIT_AUTO = 3;

  export type UnitT =
    | typeof UNIT_UNDEFINED
    | typeof UNIT_POINT
    | typeof UNIT_PERCENT
    | typeof UNIT_AUTO;

  const WRAP_COUNT = 3;
  const WRAP_NO_WRAP = 0;
  const WRAP_WRAP = 1;
  const WRAP_WRAP_REVERSE = 2;

  type WrapT =
    | typeof WRAP_NO_WRAP
    | typeof WRAP_WRAP
    | typeof WRAP_WRAP_REVERSE;

  class Layout {
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;

    constructor(
      left: number,
      right: number,
      top: number,
      bottom: number,
      width: number,
      height: number
    );
    fromJS(expose: () => void): void;
    toString(): string;
  }

  interface Sizable {
    width: number;
    height: number;
  }

  class Size {
    static fromJS(sizable: {}): Size;

    width: number;
    height: number;
    constructor(width: number, height: number);
    fromJS(expose: () => void): void;
    toString(): string;
  }

  class Value {
    unit: UnitT;
    value: any;

    constructor(unit: UnitT, value: any);

    fromJS(expose: () => void): void;
    toString(): string;
    valueOf(): any;
  }

  interface NodeInstance {
    setWidth(width: number): void;
    setHeight(height: number): void;
    setMinWidth(width: number): void;
    setMinHeight(height: number): void;
    setMaxWidth(height: number): void;
    setMaxHeight(height: number): void;
    setPadding(edge: EdgeT, value: number): void;
    setMargin(edge: EdgeT, value: number): void;
    setBorder(edge: EdgeT, value: number): void;
    setDisplay(display: DisplayT): void;
    setPositionType(positionType: PositionTypeT): void;
    setPosition(edge: EdgeT, position: number): void;

    setFlexWrap(wrap: WrapT): void;
    setFlex(ordinal: number): void;
    setFlexGrow(ordinal: number): void;
    setFlexShrink(ordinal: number): void;
    setFlexBasis(ordinal: number): void;
    setFlexDirection(direct: FlexDirectionT): void;
    setJustifyContent(justify: JustifyT): void;
    setAlignItems(alignment: AlignT): void;
    setAlignSelf(alignment: AlignT): void;
    setAlignContent(alignment: AlignT): void;

    setMeasureFunc(
      func: (width: number) => { width: number; height: number }
    ): void;

    insertChild(node: NodeInstance, index: number): void;
    removeChild(node: NodeInstance): void;

    getComputedLeft(): number;
    getComputedRight(): number;
    getComputedTop(): number;
    getComputedBottom(): number;
    getComputedWidth(): number;
    getComputedHeight(): number;

    getChild(index: number): NodeInstance;
    getChildCount(): number;

    free(): void;
    freeRecursive(): void;

    // Triggers a layout pass, but doesn't give you the results
    calculateLayout(width: number, height: number, direction: DirectionT): void;
    // Generates the layout
    getComputedLayout(): Layout;
  }

  interface NodeFactory {
    create: () => NodeInstance;
    destroy(child: NodeInstance): void;
  }

  const Node: NodeFactory;

  // Globals
  function getInstanceCount(): number;
}
