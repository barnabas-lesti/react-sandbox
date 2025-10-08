import { Link } from "#core/ui/components/link/Link";
import { Typography } from "#core/ui/components/typography/Typography";
// import { CounterWithZustand } from "#features/counter/CounterWithZustand";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h1">Home</Typography>

      <Typography variant="h2">State Management</Typography>
      <ul>
        <li>
          <Link to="/state-management/props">Counter with Props</Link>
        </li>
        <li>
          <Link to="/state-management/context">Counter with Context API</Link>
        </li>
        <li>
          <Link to="/state-management/zustand">Counter with Zustand</Link>
        </li>
        <li>
          <Link to="/state-management/redux">Counter with Redux</Link>
        </li>
      </ul>

      <Typography variant="h2">Async Data</Typography>
      <Link to="/async-data">Async Data</Link>

      {/* <CounterWithZustand /> */}
    </div>
  );
}
