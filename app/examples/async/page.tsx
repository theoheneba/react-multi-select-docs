"use client"

import { useState, useEffect } from "react"
import { CodePreview } from "@/components/code-preview"
import { DocLayout } from "@/components/doc-layout"
import { EnhancedMultiSelect } from "@/components/EnhancedMultiSelect"

const asyncExample = `import { useState, useEffect } from 'react'
import { EnhancedMultiSelect } from '@/components/EnhancedMultiSelect'

const loadOptions = async (inputValue) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  return [
    {
      label: "Filtered Results",
      options: [
        { value: "1", label: \`Result 1 for "\${inputValue}"\` },
        { value: "2", label: \`Result 2 for "\${inputValue}"\` },
        { value: "3", label: \`Result 3 for "\${inputValue}"\` },
      ]
    }
  ]
}

export default function AsyncExample() {
  const [selected, setSelected] = useState([])
  const [options, setOptions] = useState([])
  
  useEffect(() => {
    loadOptions('').then(setOptions)
  }, [])
  
  return (
    <EnhancedMultiSelect
      options={options}
      value={selected}
      onChange={setSelected}
      placeholder="Type to search..."
    />
  )
}`

// Simulate async loading
const loadOptions = async (inputValue: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return [
    {
      label: "Filtered Results",
      options: [
        { value: "1", label: `Result 1 for "${inputValue}"` },
        { value: "2", label: `Result 2 for "${inputValue}"` },
        { value: "3", label: `Result 3 for "${inputValue}"` },
      ],
    },
  ]
}

export default function AsyncExample() {
  const [selected, setSelected] = useState([])
  const [options, setOptions] = useState([])

  useEffect(() => {
    loadOptions("").then(setOptions)
  }, [])

  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Async Loading Example</h1>
        <p className="text-lg text-muted-foreground">
          Load options asynchronously as the user types with built-in debouncing.
        </p>
        <CodePreview
          preview={
            <EnhancedMultiSelect
              options={options}
              value={selected}
              onChange={setSelected}
              placeholder="Type to search..."
            />
          }
          code={asyncExample}
        />
      </div>
    </DocLayout>
  )
}

