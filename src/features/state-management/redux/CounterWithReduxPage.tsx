import { Typography } from "#core/ui/components/typography/Typography";
import { BasePageLayout } from "#core/ui/layouts/base-page-layout/BasePageLayout";

import { CounterWithRedux } from "./CounterWithRedux";

export default function CounterWithZustandPage() {
  return (
    <BasePageLayout title="Counters with Redux">
      <CounterWithRedux />
      <NestedComponent1 title="Nested Component 1" />
      <SomeNestedComponent2 />
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
      <CounterWithRedux />
    </div>
  );
}

function SomeNestedComponent2() {
  return <NestedComponent1 title="Nested Component 2" />;
}
