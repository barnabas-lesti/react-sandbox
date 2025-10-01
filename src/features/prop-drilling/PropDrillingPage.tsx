import { Button } from "#core/ui/components/button/Button";
import { Card } from "#core/ui/components/card/Card";
import { Typography } from "#core/ui/components/typography/Typography";

export default function PropDrillingPage() {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h1">Prop Drilling</Typography>

      <Card>
        <Button>Click me!</Button>
      </Card>
    </div>
  );
}
