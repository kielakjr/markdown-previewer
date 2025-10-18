import React from 'react'
import { marked } from 'marked'

const Previewer = ({input}) => {
  return (
    <div className="previewer-container">
        <label htmlFor="preview">Previewer</label>
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(input) }}></div>
    </div>
  )
}

export default Previewer
