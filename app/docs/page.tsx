import { useState } from "react"
import Link from "next/link"
import { CodePreview } from "@/components/code-preview"
import { DocLayout } from "@/components/doc-layout"
import { EnhancedMultiSelect } from "@/components/EnhancedMultiSelect"

const basicExample = `import { EnhancedMultiSelect } from '@/components/EnhancedMultiSelect'

const options = [
  {
    label: "Fruits",
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cherry" }
    ]
  }
]

export default function Example() {
  const [selected, setSelected] = useState([])
  
  return (
    <EnhancedMultiSelect
      options={options}
      value={selected}
      onChange={setSelected}
      placeholder="Select fruits..."
    />
  )
}`

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
      placeholder="Type to search...."
    />
  )
}`

export default function DocsPage() {
  const [selected, setSelected] = useState([])
  const [asyncSelected, setAsyncSelected] = useState([])
  const [asyncOptions, setAsyncOptions] = useState([])

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

  useState(() => {
    loadOptions("").then(setAsyncOptions)
  }, [])

  return (
    <DocLayout>
      <div className="prose max-w-none">
        <h1>Getting Started</h1>
        <p>
          Enhanced Multi-Select is a powerful React component for handling multiple selections with support for
          grouping, async loading, virtualization, and more.
        </p>
        <Link
          href="https://github.com/yourusername/enhanced-multi-select/edit/main/docs/getting-started.md"
          className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          Edit this page on GitHub
        </Link>

        <h2>Basic Example</h2>
        <CodePreview
          preview={
            <EnhancedMultiSelect
              options={[
                {
                  label: "Fruits",
                  options: [
                    { value: "apple", label: "Apple" },
                    { value: "banana", label: "Banana" },
                    { value: "cherry", label: "Cherry" },
                  ],
                },
              ]}
              value={selected}
              onChange={setSelected}
              placeholder="Select fruits..."
            />
          }
          code={basicExample}
        />

        <h2>Async Loading Example</h2>
        <CodePreview
          preview={
            <EnhancedMultiSelect
              options={asyncOptions}
              value={asyncSelected}
              onChange={setAsyncSelected}
              placeholder="Type to search..."
            />
          }
          code={asyncExample}
        />
      </div>
    </DocLayout>
  )
}

