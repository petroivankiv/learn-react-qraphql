import React from 'react';

import SectionHeader from '../../components/SectionHeader';
import Layout from '../../components/Layout';

export default function HomePage() {
  const handleClick = () => {};

  return (
    <Layout>
      <SectionHeader onClickHandler={handleClick} title="Home" buttonTitle="Back" />
    </Layout>
  );
}
