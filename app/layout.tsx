import { PropsWithChildren } from 'react'

// Since we have a `not-found.tsx` and `page.tsx` on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: PropsWithChildren) {
  return children
}
