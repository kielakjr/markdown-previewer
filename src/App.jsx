import React from 'react'
import Editor from './components/Editor.jsx'
import Previewer from './components/Previewer.jsx'

const App = () => {
     const defaultMarkdownText = `# My Markdown Previewer

## Subheading Example

Welcome to my Markdown Previewer. In this text, you'll find a **bolded text** example, a [link](https://example.com), and some inline code such as \`console.log("Hello, world!")\`.

\`\`\`javascript
// This is a code block example:
function sayHello() {
  console.log("Hello, world!");
}
\`\`\`

- This is a list item.

> This is a blockquote.

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

    const [input, setInput] = React.useState(defaultMarkdownText);

  return (
    <div className='app'>
      <Editor input={input} setInput={setInput} />
      <Previewer input={input} />
    </div>
  )
}

export default App
