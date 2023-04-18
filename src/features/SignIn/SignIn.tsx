import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';

export const SignIn = () => {
  return (
    <Layout>
      <Header hasSignedIn={false} />
      Sign in
    </Layout>
  );
};
