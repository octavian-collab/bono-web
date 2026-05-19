'use client'

import { useState } from 'react'
import { BLOG_CATEGORIES, BLOG_POSTS } from '@/data/blog-posts'
import type { BlogCategory } from '@/data/blog-posts'
import BlogCard from './BlogCard'

export default function BlogFilters() {
  const [active, setActive] = useState<BlogCategory>('toate')

  const filtered = active === 'toate'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === active)

  return (
    <>
      <div style={{ marginBottom: 40 }}>
        <div className="tabs">
          {BLOG_CATEGORIES.map(({ value, label }) => (
            <button
              key={value}
              className={active === value ? 'active' : ''}
              onClick={() => setActive(value)}
            >
              {label}
              {value !== 'toate' && (
                <span className="count">
                  {BLOG_POSTS.filter((p) => p.category === value).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="ld-grid-3">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  )
}
