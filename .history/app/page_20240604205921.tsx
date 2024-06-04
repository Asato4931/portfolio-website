import Portals from "./components/main/Portals";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Suspense fallback={<Loading />}>
        <Portals />
      </Suspense>
    </main>
  );
}
