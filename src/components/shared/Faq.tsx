'use client'

import { useState } from 'react'

export interface FaqItem {
  question: string
  answer: string
}

interface FaqProps {
  eyebrow?: string
  title?: string
  titleEm?: string
  items: FaqItem[]
  columns?: 1 | 2
}

function PlusIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M5 1V9M1 5H9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export default function Faq({
  eyebrow = 'Întrebări frecvente',
  title = 'Răspunsuri la',
  titleEm = 'orice întrebare',
  items,
  columns = 1,
}: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  const half = Math.ceil(items.length / 2)
  const leftCol = columns === 2 ? items.slice(0, half) : items
  const rightCol = columns === 2 ? items.slice(half) : []

  const renderItems = (list: FaqItem[], offset = 0) => (
    <div className="faq-list">
      {list.map((item, i) => {
        const idx = offset + i
        const isOpen = openIndex === idx
        return (
          <div key={idx} className={`faq-item${isOpen ? ' open' : ''}`}>
            <button
              className="faq-trigger"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
            >
              <span className="faq-question">{item.question}</span>
              <span className="faq-icon" aria-hidden>
                <PlusIcon />
              </span>
            </button>
            <p className="faq-answer">{item.answer}</p>
          </div>
        )
      })}
    </div>
  )

  return (
    <div className="ld-sec-wrap bg-page">
      <section className="ld-sec">
        <div style={{ marginBottom: 48 }}>
          <div className="t-eyebrow" style={{ marginBottom: 14 }}>
            <span className="dot" />
            {eyebrow}
          </div>
          <h2 className="t-h1">
            {title} <em>{titleEm}</em>.
          </h2>
        </div>
        {columns === 2 ? (
          <div className="ld-grid-2">
            {renderItems(leftCol, 0)}
            {renderItems(rightCol, half)}
          </div>
        ) : (
          renderItems(leftCol)
        )}
      </section>
    </div>
  )
}
