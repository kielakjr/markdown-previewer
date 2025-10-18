import React from 'react'

const Editor = ({ input, setInput }) => {

  return (
    <div className="editor-container">
        <label htmlFor="editor">Editor</label>
        <textarea id="editor" value={input} onChange={(e) => setInput(e.target.value)}></textarea>
    </div>
  )
}

export default Editor
