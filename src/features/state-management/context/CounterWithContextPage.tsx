import { Typography } from "#core/ui/components/typography/Typography";
import { BasePageLayout } from "#core/ui/layouts/base-page-layout/BasePageLayout";

import { CounterProvider } from "./CounterProvider";
import { CounterWithContext } from "./CounterWithContext";

export default function CounterWithContextPage() {
  return (
    <BasePageLayout title="Counters with Context API">
      <CounterProvider>
        <CounterWithContext />
        <NestedComponent1 title="Nested Component 1" />
        <SomeNestedComponent2 />
      </CounterProvider>
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
      <CounterWithContext />
    </div>
  );
}

function SomeNestedComponent2() {
  return <NestedComponent1 title="Nested Component 2" />;
}
