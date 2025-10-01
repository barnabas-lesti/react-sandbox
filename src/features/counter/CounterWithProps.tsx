import { Button } from "#core/ui/components/button/Button";
import { Card } from "#core/ui/components/card/Card";
import type { CardProps } from "#core/ui/components/card/CardProps";
import { Typography } from "#core/ui/components/typography/Typography";

type CounterWithPropsProps = Omit<CardProps, "children"> & {
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
};

export function CounterWithProps(props: CounterWithPropsProps) {
  const { value, onDecrement, onIncrement, ...restProps } = props;
  return (
    <Card {...restProps}>
      <Typography className="text-3xl text-center mb-4">{value}</Typography>
      <div className="flex gap-4">
        <Button
          className="w-full"
          onClick={onIncrement}
        >
          Increment
        </Button>
        <Button
          className="w-full"
          onClick={onDecrement}
        >
          Decrement
        </Button>
      </div>
    </Card>
  );
}
