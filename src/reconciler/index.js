// DOM Reconciliation
const reconcile = function(nodes, target) {
  if (Array.isArray(nodes)) {
    for (var i in nodes) {
      reconcile(nodes[i], target);
    }
  } else {
    var node = nodes;

    // Handle whitespace
    if (node === null) {
      target.appendChild(document.createTextNode(' '))
    } else if (typeof(node) == 'string') {
      if (target.innerHTML !== node) { target.innerHTML = node }
    } else {
      var el;

      var dataId = 'ui.' + node._depth.join('.');
      var existing = target.querySelector(
        node.tag + '[data-rekt-id="' + dataId + '"]'
      );

      var relativeDepth = node._depth[node._depth.length - 1];
      var nodeAtSameLocation = target.children[relativeDepth];

      if (!existing || !nodeAtSameLocation.isEqualNode(existing)) {
        el = document.createElement(node.tag);
        el.dataset.rektId = dataId;
        existing = nodeAtSameLocation || null;
      } else {
        el = existing;
      }

      if (node.attrs) {
        var mapping = { className: 'class' };
        var special = ['onChange', 'onClick', 'value'];

        for (var i in node.attrs) {
          if (special.indexOf(i) != -1) { continue; }
          if (i === 'src') {
            el.src = node.attrs[i];
          } else {
            el.setAttribute(mapping[i] || i, node.attrs[i]);
          }
        }
        if (node.attrs.onChange) { el.onkeyup = node.attrs.onChange }
        if (node.attrs.onClick) { el.onclick = node.attrs.onClick }
        if (node.attrs.onSubmit) { el.onsubmit = node.attrs.onSubmit }
        if (node.attrs.value) { el.value = node.attrs.value }
      }

      if (node.children) {
        reconcile(node.children, el);

        if (el.children.length > node.children.length) {
          var stop = node.children.length;
          for (var i = el.children.length; i > stop; i--) {
            el.removeChild(el.children[i-1]);
          }
        }
      }

      if (!existing) {
        target.appendChild(el);
      } else {
        target.replaceChild(el, existing);
      }
    }
  }
}

export default reconcile;
