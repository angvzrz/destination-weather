import './App.css';

function App() {
  return (
    <>
      <header className='flex'>
        <h1>Check the weather in your destination</h1>
        <form className="group relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="search"
            placeholder="Search destination"
          />
        </form>
      </header>
      <main>
        <div>Today's Weather summary</div>
        <h2>Next 7 days weather</h2>
        <ul className='grid grid-flow-col'>
          <li>Day 1</li>
          <li>Day 2</li>
          <li>Day 3</li>
          <li>Day 4</li>
          <li>Day 5</li>
          <li>Day 6</li>
          <li>Day 7</li>
        </ul>
      </main>
    </>
  );
}

export default App;
