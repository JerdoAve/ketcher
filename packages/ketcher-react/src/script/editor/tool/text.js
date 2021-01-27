import { Atom } from '../../chem/struct'

function TextTool(editor) {
  if (!(this instanceof TextTool)) {
    return new TextTool(editor)
  }

  this.editor = editor
}

TextTool.prototype.click = function (event) {
  const rnd = this.editor.render

  this.editor.hover(null)
  const res = this.editor.event.elementEdit.dispatch({
    type: 'text'
  })

  Promise.resolve(res)
    .then(elem => {
      // TODO review: using Atom.attrlist as a source of default property values
      elem = Object.assign({}, {}, elem)
    })
    .catch(() => null) // w/o changes
  return true
}

export default TextTool
