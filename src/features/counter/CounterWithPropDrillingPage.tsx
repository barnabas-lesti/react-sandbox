import { useState } from "react";

import { Link } from "#core/ui/components/link/Link";
import { Typography } from "#core/ui/components/typography/Typography";
import { CounterWithProps } from "#features/counter/CounterWithProps";

export default function CounterWithPropDrillingPage() {
  const [value, setValue] = useState(0);

  function handleDecrement() {
    setValue(value - 1);
  }

  function handleIncrement() {
    setValue(value + 1);
  }

  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h1">Counters with Prop Drilling</Typography>

      <Link to="/">Back Home</Link>

      <CounterWithProps
        value={value}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
      />

      <NestedComponent1
        title="Nested Component 1"
        value={value}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
      />

      <SomeNestedComponent2
        value={value}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
      />
    </div>
  );
}

interface NestedComponent1Props {
  title: string;
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

function NestedComponent1(props: NestedComponent1Props) {
  return (
    <div>
      <Typography className="mb-2">{props.title}</Typography>
      <CounterWithProps
        value={props.value}
        onDecrement={props.onDecrement}
        onIncrement={props.onIncrement}
      />
    </div>
  );
}

interface SomeNestedComponent2Props {
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

function SomeNestedComponent2(props: SomeNestedComponent2Props) {
  return (
    <NestedComponent1
      title="Nested Component 2"
      value={props.value}
      onDecrement={props.onDecrement}
      onIncrement={props.onIncrement}
    />
  );
}
