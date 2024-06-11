import Inicio from "./Inicio";
import Header from "./Header";
import Getting_Started from "./Getting-started";
import Reward_tiers from "./Reward-tiers";
export default function Main() {
  return (
    <>
      <main>
        <Header />
        {/*
        <Inicio />
        */}
        <Reward_tiers />
        <Getting_Started />
      </main>
    </>
  );
}
