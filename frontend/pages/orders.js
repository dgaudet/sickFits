import PleaseSignIn from '../components/PleaseSignIn';
import Orders from '../components/Orders';

const OrderPage = props => (
  <div>
    <PleaseSignIn>
      <Orders />
    </PleaseSignIn>
  </div>
);

export default OrderPage;
