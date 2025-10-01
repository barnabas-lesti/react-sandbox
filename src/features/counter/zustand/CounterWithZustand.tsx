import { Button } from "#core/ui/components/button/Button";
import { Card } from "#core/ui/components/card/Card";
import type { CardProps } from "#core/ui/components/card/CardProps";
import { Typography } from "#core/ui/components/typography/Typography";

import { useCounterStore } from "./useCounterStore";

type CounterWithZustandProps = Omit<CardProps, "children">;

export function CounterWithZustand(props: CounterWithZustandProps) {
  const value = useCounterStore((state) => state.value);
  const decrement = useCounterStore((state) => state.decrement);
  const increment = useCounterStore((state) => state.increment);

  return (
    <Card {...props}>
      <Typography className="text-3xl text-center mb-4">{value}</Typography>
      <div className="flex gap-4">
        <Button
          className="w-full"
          onClick={increment}
        >
          Increment
        </Button>
        <Button
          className="w-full"
          onClick={decrement}
        >
          Decrement
        </Button>
      </div>
    </Card>
  );
}
