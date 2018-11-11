import ResetCompnent from '../components/Reset';

const Reset = props => (
  <div>
    <p>Reset your password.</p>
    <ResetCompnent resetToken={props.query.resetToken} />
  </div>
);

export default Reset;
