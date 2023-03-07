import { SearchBar } from './search-bar';

export function Header() {
  return (
    <header className="flex w-full justify-between p-3 bg-header">
      <h1 className="w-1/2 text-start text-2xl text-slate-100 grow-0 ">
        Check the weather in your destination
      </h1>
      <SearchBar />
    </header>
  );
}
