# Adding Articles

## Quick Start

**Two steps to add a new article:**

### 1. Create your article file

Create `src/data/articles/my-article.tsx`:

```tsx
"use client";

import { ArticleModule } from "@/types/article";

function Content() {
  return (
    <div>
      <h2>My Section</h2>
      <p>Your content here...</p>
    </div>
  );
}

export const metadata = {
  slug: "my-article",
  title: "My Article Title",
  description: "A brief description for the article card.",
  date: "Dec 18, 2024",
  readTime: "5 min read",
  author: "Your Name",           // optional
  tags: ["topic1", "topic2"],    // optional
};

export default { metadata, Content } as ArticleModule;
```

### 2. Register it

Add one line to `src/data/articles/index.ts`:

```typescript
import myArticle from "./my-article";

export const articles: ArticleModule[] = [
  example,
  myArticle,  // ← Add here
];
```

**Done!** Your article appears on the home page and at `/articles/my-article`.

---

## Detailed Guide

### File Structure

```
src/data/articles/
├── README.md          # This file
├── index.ts           # Article registry
├── example.tsx        # Example article
└── my-article.tsx     # Your new articles go here
```

### Metadata Fields

| Field | Required | Description |
|-------|----------|-------------|
| `slug` | ✅ | URL path segment (e.g., `"my-article"` → `/articles/my-article`) |
| `title` | ✅ | Article title shown in header and cards |
| `description` | ✅ | Summary shown on article cards |
| `date` | ✅ | Publication date (e.g., `"Dec 18, 2024"`) |
| `readTime` | ✅ | Estimated read time (e.g., `"5 min read"`) |
| `author` | ❌ | Author name |
| `tags` | ❌ | Array of topic tags |

### Content Component

The `Content` function is a React component. You can:

- Use any React hooks (`useState`, `useEffect`, etc.)
- Import and use other components
- Add animations, interactive elements, embeds
- Use Tailwind CSS classes

```tsx
"use client";

import { useState } from "react";
import { SomeIcon } from "lucide-react";

function Content() {
  const [count, setCount] = useState(0);

  return (
    <div className="prose prose-lg dark:prose-invert">
      <h2 className="text-3xl font-semibold">Interactive Example</h2>
      <button onClick={() => setCount(c => c + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}
```

---

## Gotchas

### 1. Must include `"use client"` at the top

Article files contain React components with potential client-side interactivity. Always include the directive:

```tsx
"use client";  // ← Required at the very top
```

### 2. Slug must match filename (recommended)

For consistency, keep the slug and filename aligned:
- File: `my-article.tsx`
- Slug: `"my-article"`

### 3. Don't forget to register in index.ts

The article won't appear until you add it to the `articles` array in `index.ts`. This is the most common mistake.

### 4. Use `.tsx` extension, not `.ts`

Since the file contains JSX (the `Content` component), it must use the `.tsx` extension.

### 5. Date sorting

Articles are automatically sorted by date (newest first) on the home page. Use consistent date formatting.

### 6. Clear cache if you see stale content

If changes don't appear, try:
```bash
rm -rf .next && npm run dev
```

### 7. Export structure must match exactly

The export pattern should be:
```tsx
const article: ArticleModule = { metadata, Content };
export default article;
```
