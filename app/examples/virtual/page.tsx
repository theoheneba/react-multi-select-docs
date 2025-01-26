"use client"

import { useState } from "react"
import { CodePreview } from "@/components/code-preview"
import { DocLayout } from "@/components/doc-layout"
import { EnhancedMultiSelect } from "@/components/EnhancedMultiSelect"

const virtualExample = `import { EnhancedMultiSelect } from '@/components/EnhancedMultiSelect'

// Generate large dataset
const largeDataset = Array.from({ length: 10000 }, (_, i) => ({
  value: \`item-\${i}\`,
  label: \`Item \${i}\`
}))

export default function VirtualExample() {
  const [selected, setSelected] = useState([])

  return (
    <EnhancedMultiSelect
      options={[{ label: "Items", options: largeDataset }]}
      value={selected}
      onChange={setSelected}
      placeholder="Select items..."
    />
  )
}`

// Generate large dataset
const largeDataset = Array.from({ length: 10000 }, (_, i) => ({
  value: `item-${i}`,
  label: `Item ${i}`,
}))

export default function VirtualExample() {
  const [selected, setSelected] = useState([])

  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Virtual Scrolling Example</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Efficiently render large datasets with virtual scrolling.
        </p>
        <CodePreview
          preview={
            <EnhancedMultiSelect
              options={[{ label: "Items", options: largeDataset }]}
              value={selected}
              onChange={setSelected}
              placeholder="Select from 10,000 items..."
            />
          }
          code={virtualExample}
        />
      </div>
    </DocLayout>
  )
}

