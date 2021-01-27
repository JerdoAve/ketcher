import React from 'react'
import { connect } from 'react-redux'

import Dialog from '../../component/dialog'
import Form, { Field } from '../../component/form/form'
import Input from '../../component/form/input'
import SystemFonts from '../../component/form/systemfonts'

const textSchema = {
  title: 'Text',
  type: 'textarea',
  name: 'Text',
  properties: {
    Text: {}
  }
}
function TextDialog({ formState, ...prop }) {
  return (
    <Dialog
      title="Text"
      className="text"
      params={prop}
      result={() => formState.result}
      valid={() => formState.valid}>
      <Form schema={textSchema} init={prop} {...formState}>
        <fieldset className="textrender">
          <Field name="Text" type="textarea" component={Input} />
        </fieldset>
      </Form>
    </Dialog>
  )
}

export default connect(store => ({ formState: store.modal.form }))(TextDialog)
