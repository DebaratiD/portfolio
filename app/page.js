import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  return (
    <div className="h-screen w-full">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <a href="#" className="text-base font-bold leading-6">Debarati Datta</a>
        <div className="h-10 p-2 hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-base font-semibold leading-6">Resume</a>
          <a href="#" className="text-base font-semibold leading-6">Projects</a>
          <a href="#" className="text-base font-semibold leading-6">Contact me</a>
        </div>
      </nav>
      <section>
        <div className="w-full h-full p-4">
          <div className="m-8 text-7xl align-top h-[30vh]">
            Hello there, I am Debarati Datta.
          </div>
          <div className="m-12 px-4">
            <ul className="text-2xl list flex items-center justify-evenly">
              <li className="p-2"><span className='px-1'><i className="bi bi-paint-bucket"></i></span>Front-end Development</li>
              <li className="p-2"><span className='px-1'> <i className="bi bi-gear-wide-connected"></i></span>Backend Development</li>
              <li className="p-2"><span className='px-1'><i className="bi bi-tools"></i></span>Full-stack Development</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
      <div className="w-full h-full p-4">
          <div className="m-8 text-5xl">
            About Me
          </div>
          <div className="m-4 mt-8">
            <p>I am a graduate student pursuing computer science at California State University, Long Beach. I love building websites and working on the code that keeps them running. I am also passionate about working on Large language models that try to think on their own! Apart from programming I spend my time painting and singing. I love a good challenge that makes me rack my brains.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
