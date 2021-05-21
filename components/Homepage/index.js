import AppLayout from "../Layout";
import { Banner, PriceTable, Subscriber, PageFooter } from "../homeComponents";

const Homepage = () => {
  return (
    <AppLayout>
      <Banner />
      <PriceTable />
      <Subscriber />
      <PageFooter />
    </AppLayout>
  );
};

export default Homepage;
