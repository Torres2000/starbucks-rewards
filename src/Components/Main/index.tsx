import Inicio from "./Inicio";
import Header from "./Header";
import Getting_Started from "./Getting-started";
import Reward_tiers from "./Reward-tiers";
import EndlessExtras from "./Endless-Extras";
import CashSTart from "./Cash-Stars/page";
import KeepRewarsd from "./Keep-Rewards/page";
import Questions from "./Questions/page";
import TermsConditions from "./Terms-Conditions/page";
export default function Main() {
  return (
    <>
      <main>
        <Header />

        <Inicio />
        <Getting_Started />
        <Reward_tiers />
        <EndlessExtras />
        <CashSTart />
        <Questions />
        <KeepRewarsd />
        <TermsConditions />
      </main>
    </>
  );
}
