import React from 'react';
import Layout from '@theme/Layout';

export default function AwesomeAboutPage() {
  return (
    <Layout title="My About Page" description="Awesome About Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Created from <code>my_awesome_pages/about.js</code>.
        </p>
      </div>
    </Layout>
  );
}
