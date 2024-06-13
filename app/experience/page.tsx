import { ExperiencePosts } from 'app/components/ExperiencePosts'

export const metadata = {
  title: 'Experience',
  description: 'My Experience',
}

export default function Page() {
  return (
    <section>
      <h2 className="font-semibold text-2xl mb-1 tracking-tighter">Skills</h2>
      <p className="mb-8">Python, JavaScript, API, Node.js, Next.js, React, Pandas, Keras, SQL, MongoDB, Azure, TensorFlow, PowerShell, NumPy, Machine Learning, Power Automate, Automated Web Engine, Puppet, Azure DevOps, AWS S3, Bcrypt.js, Next-Auth, RESTful API, Google Cloud Platform, AWS, HTML5, CSS3, Selenium, Appium, Pytest, Docker, Kubernetes, CI/CD (Azure DevOps, Jenkins), GitHub, Vercel, Nginx, WireShark, npm, pnpm, Tailwind, Typescript, Truffle, web3, Solidify, Smart Contracts</p>
      <h2 className="font-semibold text-2xl mb-1 tracking-tighter">Experience</h2>
      <ExperiencePosts />
    </section>
  )
}
