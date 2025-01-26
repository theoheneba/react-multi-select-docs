"use client"

import { useState } from "react"
import { CodePreview } from "@/components/code-preview"
import { DocLayout } from "@/components/doc-layout"
import { EnhancedMultiSelect } from "@/components/EnhancedMultiSelect"

const customRenderingExample = `import { EnhancedMultiSelect } from '@/components/EnhancedMultiSelect'

const options = [
  {
    label: "Colors",
    options: [
      { value: "red", label: "Red" },
      { value: "blue", label: "Blue" },
      { value: "green", label: "Green" }
    ]
  }
]

export default function CustomRenderingExample() {
  const [selected, setSelected] = useState([])

  return (
    <EnhancedMultiSelect
      options={options}
      value={selected}
      onChange={setSelected}
      placeholder="Select colors..."
    />
  )
}`

const options = [
  {
    label: "Colors",
    options: [
      { value: "red", label: "Red" },
      { value: "blue", label: "Blue" },
      { value: "green", label: "Green" },
    ],
  },
]

export default function CustomRenderingExample() {
  const [selected, setSelected] = useState([])

  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Custom Rendering</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Learn how to customize the rendering of options and selected values.
        </p>
        <CodePreview
          preview={
            <EnhancedMultiSelect
              options={options}
              value={selected}
              onChange={setSelected}
              placeholder="Select colors..."
            />
          }
          code={customRenderingExample}
        />
      </div>
    </DocLayout>
  )
}

