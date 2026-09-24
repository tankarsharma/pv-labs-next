import type { Metadata } from "next";
import Founders from "@/pages-old/Founders";

export const metadata: Metadata = {
  title: "Founders — Meet the Team Behind PV Labs",
  description:
      "Meet the founders of PV Labs, an e-commerce creative company helping Amazon sellers and D2C brands build high-converting visuals.",
  alternates: { canonical: "https://pvlabs.ai/founders" },
  openGraph: { url: "https://pvlabs.ai/founders" },
};

export default function Page() {
  return <Founders />;
}
