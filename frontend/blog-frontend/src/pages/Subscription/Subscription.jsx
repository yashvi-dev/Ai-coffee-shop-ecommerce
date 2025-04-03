import SubscriptionHero from "./SubscriptionHero";
import PlansPricing from "./PlansPricing";
import DeliveryFrequency from "./DeliveryFrequency";
import ChooseBeans from "./ChooseBeans";

function Subscription() {
  return (
    <div>
      <SubscriptionHero />
      <PlansPricing />
      <DeliveryFrequency />
      <ChooseBeans />
    </div>
  );
}

export default Subscription;
