

export const metadata = {
  title: 'Projects',
  description: 'My projects',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">My Contact Info</h1>
      <div>
        <p className="font-semibold text-2xl mb-2 tracking-tighter">Email</p>
        <p className="font-normal text-1xl mb-8 tracking-tighter">gunnerlevihowe@gmail.com</p>
      </div>
      <div>
        <p className="font-semibold text-2xl mb-2 tracking-tighter">Phone</p>
        <p className="font-normal text-1xl mb-8 tracking-tighter">+1 501-288-2488</p>
      </div>
      <div>
        <p className="font-semibold text-2xl mb-2 tracking-tighter">Address</p>
        <p className="font-normal text-1xl mb-1 tracking-tighter">8009 Costa Norte</p>
        <p className="font-normal text-1xl mb-8 tracking-tighter">Shannon Hills, AR 72103</p>
      </div>
    </section>
  )
}
