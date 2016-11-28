import domNode from './src/dom';
import prepare from './src/prepare';
import reconcile from './src/reconciler';

/**
 * Render to DOM
 */
export const render = function(tree, rootNode) {
  return reconcile(prepare(tree), rootNode);
}

export const dom = domNode;
