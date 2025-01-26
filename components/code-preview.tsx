import { useState } from "react"
import { Tab } from "@headlessui/react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { ClipboardIcon } from "@heroicons/react/24/outline"

interface CodePreviewProps {
  preview: React.ReactNode
  code: string
}

export function CodePreview({ preview, code }: CodePreviewProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="mt-6 relative rounded-lg overflow-hidden border border-border bg-card">
      <Tab.Group>
        <Tab.List className="flex border-b border-border bg-muted/50 backdrop-blur supports-[backdrop-filter]:bg-muted/50">
          <Tab
            className={({ selected }) =>
              `flex-1 py-3 px-4 text-sm font-medium transition-colors outline-none ${
                selected
                  ? "text-primary border-b-2 border-primary bg-background/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              }`
            }
          >
            Preview
          </Tab>
          <Tab
            className={({ selected }) =>
              `flex-1 py-3 px-4 text-sm font-medium transition-colors outline-none ${
                selected
                  ? "text-primary border-b-2 border-primary bg-background/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              }`
            }
          >
            Code
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="p-6 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50">
            <div className="relative z-10">{preview}</div>
          </Tab.Panel>
          <Tab.Panel className="relative">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={copyToClipboard}
                className="p-2 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                title={copied ? "Copied!" : "Copy code"}
              >
                {copied ? (
                  <span className="text-xs font-medium px-2">Copied!</span>
                ) : (
                  <ClipboardIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            <SyntaxHighlighter
              language="tsx"
              style={vscDarkPlus}
              showLineNumbers
              customStyle={{
                margin: 0,
                padding: "1.5rem",
                background: "transparent",
                fontSize: "0.875rem",
              }}
            >
              {code}
            </SyntaxHighlighter>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

