import { Link } from "#core/ui/components/link/Link";
import { Typography } from "#core/ui/components/typography/Typography";

import { CounterProvider } from "./CounterProvider";
import { CounterWithContext } from "./CounterWithContext";

export default function CounterWithContextPage() {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h1">Counters with Context API</Typography>

      <Link to="/">Back Home</Link>

      <CounterProvider>
        <CounterWithContext />
        <NestedComponent1 title="Nested Component 1" />
        <SomeNestedComponent2 />
      </CounterProvider>
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
      <CounterWithContext />
    </div>
  );
}

function SomeNestedComponent2() {
  return <NestedComponent1 title="Nested Component 2" />;
}
