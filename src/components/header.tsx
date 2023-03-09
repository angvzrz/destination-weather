import { SearchBar } from './search-bar';

export function Header() {
  return (
    <header className="flex w-full justify-between bg-header p-3">
      <h1 className="w-1/2 grow-0 text-start text-2xl text-slate-100 ">
        Check the weather in your destination
      </h1>
      <SearchBar />
    </header>
  );
}
