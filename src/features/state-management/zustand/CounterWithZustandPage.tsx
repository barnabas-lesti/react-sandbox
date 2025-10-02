import { Link } from "#core/ui/components/link/Link";
import { Typography } from "#core/ui/components/typography/Typography";

// import { CounterWithProps } from "./CounterWithProps";
import { CounterWithZustand } from "./CounterWithZustand";
// import { useCounterStore } from "./useCounterStore";

export default function CounterWithZustandPage() {
  // const value = useCounterStore((state) => state.value);
  // const decrement = useCounterStore((state) => state.decrement);
  // const increment = useCounterStore((state) => state.increment);

  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h1">Counters with Zustand</Typography>

      <Link to="/">Back Home</Link>

      <CounterWithZustand />
      <NestedComponent1 title="Nested Component 1" />
      <SomeNestedComponent2 />
      {/* <div>
        <Typography className="mb-2">Counter with Props</Typography>
        <CounterWithProps
          value={value}
          onDecrement={decrement}
          onIncrement={increment}
        />
      </div> */}
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
      <CounterWithZustand />
    </div>
  );
}

function SomeNestedComponent2() {
  return <NestedComponent1 title="Nested Component 2" />;
}
