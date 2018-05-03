import { Rect } from './types';
import { TextStyle, ViewStyle } from './ViewStyleProps';
// import { CanvasTextWrapper } from 'canvas-text-wrapper';

export function renderView(
  parentLeft: number,
  parentTop: number,
  rect: Rect,
  style: ViewStyle,
  ctx: CanvasRenderingContext2D
): void {
  const { left, top, width, height } = rect;

  drawRect(style, left + parentLeft, top + parentTop, width, height, ctx);
}

export function renderText(
  parentLeft: number,
  parentTop: number,
  rect: Rect,
  text: string,
  style: TextStyle,
  ctx: CanvasRenderingContext2D
): void {
  const { left, top, width, height } = rect;

  const x: number = left + parentLeft;

  const y: number = top + parentTop;

  drawRect(style, x, y, width, height, ctx);
  // drawText(style, text, x, y, width, height, ctx);
}

function getTextAlign({ textAlign }: TextStyle): string {
  // start, end, left, right or center
  switch (textAlign) {
    case 'center':
    case 'left':
    case 'right':
      return textAlign;
    default:
      return 'start';
  }
}

export function drawText(
  style: TextStyle,
  text: string,
  left: number,
  top: number,
  width: number,
  height: number,
  ctx: CanvasRenderingContext2D
) {
  const { fontSize, color } = style;
  ctx.font = `${fontSize || 10}px serif`;
  ctx.textAlign = getTextAlign(style);
  // const metrics = ctx.measureText(text);
  ctx.fillStyle = color || 'black';
  ctx.fillText(text, left, top);
}

function pick<T>(potential: T | undefined, def: T): T {
  return potential === undefined ? def : potential;
}

function drawRect(
  style: ViewStyle,
  left: number,
  top: number,
  width: number,
  height: number,
  ctx: CanvasRenderingContext2D
) {
  const {
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    backgroundColor,
    borderColor,
    // borderLeftColor,
    // borderRightColor,
    // borderTopColor,
    // borderBottomColor
    borderWidth
    // borderBottomWidth,
    // borderLeftWidth,
    // borderTopWidth,
    // borderRightWidth
  } = style;

  const rad = borderRadius || 0;
  const topLeftR = pick(borderTopLeftRadius, rad);
  const topRightR = pick(borderTopRightRadius, rad);
  const bottomLeftR = pick(borderBottomLeftRadius, rad);
  const bottomRightR = pick(borderBottomRightRadius, rad);

  const defBorderColor = borderColor || 'black';
  //   const leftColor = pick(borderLeftColor, defBorderColor);
  //   const rightColor = pick(borderRightColor, defBorderColor);
  //   const topColor = pick(borderTopColor, defBorderColor);
  //   const bottomColor = pick(borderBottomColor, defBorderColor);

  const defBorderWidth = borderWidth || 0;
  //   const leftWidth = pick(borderLeftWidth, defBorderWidth);
  //   const rightWidth = pick(borderRightWidth, defBorderWidth);
  //   const topWidth = pick(borderTopWidth, defBorderWidth);
  //   const bottomWidth = pick(borderBottomWidth, defBorderWidth);

  ctx.strokeStyle = defBorderColor;
  ctx.lineWidth = defBorderWidth;

  if (backgroundColor) {
    ctx.fillStyle = backgroundColor;
  }

  ctx.beginPath();

  // top
  ctx.moveTo(left + topLeftR, top);
  ctx.lineTo(left + width - topRightR, top);
  ctx.quadraticCurveTo(left + width, top, left + width, top + topRightR);

  // right
  ctx.lineTo(left + width, top + height - bottomRightR);
  ctx.quadraticCurveTo(
    left + width,
    top + height,
    left + width - bottomRightR,
    top + height
  );

  // bottom
  ctx.lineTo(left + bottomLeftR, top + height);
  ctx.quadraticCurveTo(left, top + height, left, top + height - bottomLeftR);

  // left
  ctx.lineTo(left, top + topLeftR);
  ctx.quadraticCurveTo(left, top, left + topLeftR, top);
  ctx.closePath();

  if (defBorderWidth > 0) {
    ctx.stroke();
  }

  if (backgroundColor) {
    ctx.fill();
  }
}
