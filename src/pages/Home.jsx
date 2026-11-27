import WelcomeModal from "../components/WelcomeModal";
import Hero from "../components/home/Hero";
import Strategy from "../components/home/Strategy";
import Engage from "../components/home/Engage";
import Reach from "../components/home/Reach";
import { SmarterWork, SmartSolutions, PlugTools } from "../components/home/Workflow";
import { Track, Brands, Complete, Achieve } from "../components/home/Showcase";
import { Insights, Steps, Testimonials, Integrations, QA, CtaCard } from "../components/home/Finale";

export default function Home() {
  return (
    <>
      <WelcomeModal />
      <Hero />
      <Strategy />
      <Engage />
      <Reach />
      <SmarterWork />
      <SmartSolutions />
      <PlugTools />
      <Track />
      <Brands />
      <Complete />
      <Achieve />
      <Insights />
      <Steps />
      <Testimonials />
      <Integrations />
      <QA />
      <CtaCard />
    </>
  );
}