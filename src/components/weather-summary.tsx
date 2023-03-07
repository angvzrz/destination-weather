export function WeatherSummary() {
  return (
    <section className="block w-3/4 rounded-md bg-slate-100 p-4">
      <h2 className="text-xl">Place</h2>
      <div className="mt-2 flex flex-col gap-6">
        <div className="text-4xl">Temperature</div>
        <div>
          <div>Main condition | Description</div>
          <div>Precipitation</div>
          <div>Humidity</div>
          <div>Wind</div>
        </div>
      </div>
      <div className="relative right-0">Icon</div>
    </section>
  );
}
