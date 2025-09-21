import Search from "./components/Search";
import AdvancedSearch from "./components/AdvancedSearch";

function App() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-4">
        GitHub User Search
      </h1>

      <h2 className="text-xl font-semibold my-2">Basic Search (Task 1)</h2>
      <Search />

      <h2 className="text-xl font-semibold my-2">Advanced Search (Task 2)</h2>
      <AdvancedSearch />
    </div>
  );
}

export default App;
