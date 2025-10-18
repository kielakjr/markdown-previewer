import React from 'react'
import { marked } from 'marked'
import DOMPurify from 'dompurify';

const Previewer = ({input}) => {

  const createMarkup = (text) => {
    const clean = DOMPurify.sanitize(marked.parse(text));
    return { __html: clean };
  };

  return (
    <div className="previewer-container">
        <label htmlFor="preview">Previewer</label>
        <div id="preview" dangerouslySetInnerHTML={createMarkup(input)}></div>
    </div>
  )
}

export default Previewer
