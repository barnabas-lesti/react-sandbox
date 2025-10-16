import { Typography } from "#core/ui/components/typography/Typography";
import { BasePageLayout } from "#core/ui/layouts/base-page-layout/BasePageLayout";

// import { CounterWithProps } from "./CounterWithProps";
import { CounterWithZustand } from "./CounterWithZustand";
// import { useCounterStore } from "./useCounterStore";

export default function CounterWithZustandPage() {
  // const value = useCounterStore((state) => state.value);
  // const decrement = useCounterStore((state) => state.decrement);
  // const increment = useCounterStore((state) => state.increment);

  return (
    <BasePageLayout title="Counters with Zustand">
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
    </BasePageLayout>
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
