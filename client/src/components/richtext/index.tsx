// Import React dependencies.
import React, { useState } from 'react'
import { createEditor, BaseEditor, Descendant } from 'slate'
import { Slate, Editable, withReact, ReactEditor } from 'slate-react'

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]
  

export default function RichText(){
    const [editor] = useState(() => withReact(createEditor()))
  return (
    // Add the editable component inside the context.
    <Slate className = "bg-slate-500" editor={editor} initialValue={initialValue}>
      <Editable className="focus:outline-none focus:ring-0"/>
    </Slate>
  )
  }