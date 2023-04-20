import Title from 'antd/es/typography/Title';

import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { useAxios } from '../../hooks/useAxios';
import { Endpoints } from '../../constants';
import { Loader } from '../../components/Loader';
import { CompanyDto } from '../../types';

export const Company = () => {
  const { data, isLoading } = useAxios<CompanyDto>({ url: Endpoints.info, method: 'GET' });

  return (
    <Layout>
      <Header />
      {isLoading ? <Loader /> : <Title level={2}>{data.info}</Title>}
    </Layout>
  );
};
