import { Link } from "#core/ui/components/link/Link";
import { Typography } from "#core/ui/components/typography/Typography";

import { CounterWithRedux } from "./CounterWithRedux";

export default function CounterWithZustandPage() {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h1">Counters with Redux</Typography>

      <Link to="/">Back Home</Link>

      <CounterWithRedux />
      <NestedComponent1 title="Nested Component 1" />
      <SomeNestedComponent2 />
    </div>
  );
}

interface NestedComponent1Props {
  title: string;
}

function NestedComponent1(props: NestedComponent1Props) {
  return (
    <div>
      <Typography className="mb-2">{props.title}</Typography>
      <CounterWithRedux />
    </div>
  );
}

function SomeNestedComponent2() {
  return <NestedComponent1 title="Nested Component 2" />;
}
