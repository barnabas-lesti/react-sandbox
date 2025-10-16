import { Link } from "#core/ui/components/link/Link";
import { Typography } from "#core/ui/components/typography/Typography";
import { BasePageLayout } from "#core/ui/layouts/base-page-layout/BasePageLayout";
// import { CounterWithZustand } from "#features/counter/CounterWithZustand";

export default function HomePage() {
  return (
    <BasePageLayout
      title="Home"
      isHomePage
    >
      <Typography variant="h2">State Management</Typography>
      <ul>
        <li>
          <Link to="/state-management/props">Counter with Props</Link>
        </li>
        <li>
          <Link to="/state-management/context">Counter with Context API</Link>
        </li>
        <li>
          <Link to="/state-management/zustand">Counter with Zustand</Link>
        </li>
        <li>
          <Link to="/state-management/redux">Counter with Redux</Link>
        </li>
      </ul>

      <Typography variant="h2">Async Data</Typography>
      <ul>
        <li>
          <Link to="/async-data/promises">Promises</Link>
        </li>
        <li>
          <Link to="/async-data/async-user-experience">Async User Experience</Link>
        </li>
      </ul>
      {/* <CounterWithZustand /> */}
    </BasePageLayout>
  );
}
