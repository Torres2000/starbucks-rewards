import Inicio from "./Inicio/page";
import Header from "./Header/page";
import Getting_Started from "./Getting-started/page";
import Reward_tiers from "./Reward-tiers/page";
import EndlessExtras from "./Endless-Extras/page";
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
        <KeepRewarsd />
        <Questions />
        <TermsConditions />
      </main>
    </>
  );
}
