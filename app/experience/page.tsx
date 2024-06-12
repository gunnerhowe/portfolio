import { ExperiencePosts } from 'app/components/ExperiencePosts'

export const metadata = {
  title: 'Experience',
  description: 'My Experience',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Experience</h1>
      <ExperiencePosts />
    </section>
  )
}
