import { Link } from "#core/ui/components/link/Link";
import { Typography } from "#core/ui/components/typography/Typography";
// import { CounterWithZustand } from "#features/counter/CounterWithZustand";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h1">Home</Typography>
      <ul>
        <li>
          <Link to="/counter/prop-drilling">Counter with Prop Drilling</Link>
        </li>
        <li>
          <Link to="/counter/zustand">Counter with Zustand</Link>
        </li>
        <li>
          <Link to="/counter/context">Counter with Context API</Link>
        </li>
      </ul>

      {/* <CounterWithZustand /> */}
    </div>
  );
}
