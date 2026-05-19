import Link from 'next/link'
import type { BlogPost } from '@/data/blog-posts'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12, textDecoration: 'none' }}>
      <div
        style={{
          height: 160,
          borderRadius: 'var(--r-lg)',
          background: 'var(--c-bej-1)',
          marginBottom: 4,
        }}
      />
      <span className="t-eyebrow">{post.categoryLabel}</span>
      <h3 className="t18" style={{ flex: 1 }}>{post.title}</h3>
      <p className="t16" style={{ color: 'var(--c-fog)' }}>{post.description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
        <span className="t14">{post.date}</span>
        <span className="t14" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--c-accent)' }}>
          Citește <ArrowIcon />
        </span>
      </div>
    </Link>
  )
}
