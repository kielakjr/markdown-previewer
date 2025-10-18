import React from 'react'
import { marked } from 'marked'

const Previewer = ({input}) => {
  return (
    <div className="previewer-container">
        <label htmlFor="previewer">Previewer</label>
        <div id="previewer" dangerouslySetInnerHTML={{ __html: marked.parse(input) }}></div>
    </div>
  )
}

export default Previewer
