import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="icon" type="image/png" href="/favicon.ico" sizes="16x16" />
  </Helmet>
);

export default SEO;
