import { Node } from 'yoga-layout';
import { Direction } from '../yoga/yogaEnums';
import { renderText, renderView } from './renderer';
import { Element, ElementType, F, ViewNode } from './types';
// import { ViewStyleProps } from './primitives/ViewStyleProps';
import { check } from './utils';
import { applyYogaProps } from './yogaNode';

const menyStyle = {
  borderColor: 'lightskyblue',
  borderRadius: 10,
  // tslint:disable-next-line:object-literal-sort-keys
  backgroundColor: 'dimgray',
  borderWidth: 3
};

const items = ['Save', 'Load', 'Settings', 'Quick Save'].map(el =>
  F.view(
    {
      ...menyStyle,
      height: 60,
      margin: 10,
      padding: 5
    },
    F.text(
      {
        backgroundColor: 'rgba(255, 100, 100, 0.4)',
        color: 'orange',
        flex: 1,
        fontSize: 18
      },
      el.toString()
    )
  )
);

const menu = F.view(
  {
    flexDirection: 'column',
    width: 250,
    ...menyStyle
  },
  ...items
);

const root = F.view(
  {
    alignItems: 'center',
    backgroundColor: 'gray',
    flex: 1,
    flexDirection: 'row',
    height: 500,
    justifyContent: 'center',
    width: 500
  },
  menu
);

const rootNode = convert(root);

export function draw() {
  const canvas = check(document.getElementById('canvas') as HTMLCanvasElement);
  if (canvas.getContext) {
    const ctx = check(canvas.getContext('2d'));

    drawFigure(0, 0, rootNode, ctx);
  }
}

function convert(element: Element): ViewNode {
  const viewNode: ViewNode = {
    children:
      element.type === ElementType.VIEW
        ? element.children && element.children.map(convert)
        : undefined,
    element,
    node: applyYogaProps(element.style, Node.create())
  };

  if (viewNode.children) {
    viewNode.children.forEach((vn, index) =>
      viewNode.node.insertChild(vn.node, index)
    );
  }

  return viewNode;
}

calcLayout(rootNode, 500, 500);

function calcLayout(viewNode: ViewNode, width: number, height: number): void {
  viewNode.node.calculateLayout(width, height, Direction.LTR);
  setRect(viewNode);
}

function setRect(viewNode: ViewNode): void {
  const { node, children } = viewNode;

  const { left, top, width, height } = node.getComputedLayout();
  viewNode.rect = { left, top, width, height };

  if (children) {
    children.forEach(setRect);
  }
}

function drawFigure(
  parentX: number,
  parentY: number,
  viewNode: ViewNode,
  ctx: CanvasRenderingContext2D
): void {
  const { element, rect, children } = viewNode;

  if (rect) {
    switch (element.type) {
      case ElementType.VIEW:
        renderView(parentX, parentY, rect, element.style, ctx);
        break;
      case ElementType.TEXT:
        renderText(parentX, parentY, rect, element.text, element.style, ctx);
        break;
      default:
        throw new Error(`unknown element type`);
    }
  }

  if (children && rect) {
    children.forEach(f =>
      drawFigure(rect.left + parentX, rect.top + parentY, f, ctx)
    );
  }
}
