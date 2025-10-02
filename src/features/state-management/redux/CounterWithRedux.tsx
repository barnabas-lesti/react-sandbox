import { Button } from "#core/ui/components/button/Button";
import { Card } from "#core/ui/components/card/Card";
import type { CardProps } from "#core/ui/components/card/CardProps";
import { Typography } from "#core/ui/components/typography/Typography";
import { useAppDispatch } from "#store/useAppDispatch";
import { useAppSelector } from "#store/useAppSelector";

import { CounterActions } from "./CounterActions";

type CounterWithReduxProps = Omit<CardProps, "children">;

export function CounterWithRedux(props: CounterWithReduxProps) {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Card {...props}>
      <Typography className="text-3xl text-center mb-4">{value}</Typography>
      <div className="flex gap-4">
        <Button
          className="w-full"
          onClick={() => dispatch(CounterActions.increment())}
        >
          Increment
        </Button>
        <Button
          className="w-full"
          onClick={() => dispatch(CounterActions.decrement())}
        >
          Decrement
        </Button>
      </div>
    </Card>
  );
}
