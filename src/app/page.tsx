import { Enquiry } from "@/components/sections/enquiry";
import { Hero } from "@/components/sections/hero";
import { Method } from "@/components/sections/method";
import { Record } from "@/components/sections/record";

export default function Home() {
  return (
    <>
      <Hero />
      <Record />
      <Method />
      <Enquiry />
    </>
  );
}
