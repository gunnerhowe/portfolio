import { ProjectsPosts } from 'app/components/Projectsposts'

export const metadata = {
  title: 'Projects',
  description: 'My projects',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Projects</h1>
      <ProjectsPosts />
    </section>
  )
}
