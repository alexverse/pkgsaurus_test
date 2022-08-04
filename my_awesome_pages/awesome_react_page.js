import React from 'react';
import Layout from '@theme/Layout';

export default function AwesomeReactPage() {
  return (
    <Layout title="My Page" description="Awesome React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Created from <code>my_awesome_pages/awesome_react_page.js</code>.
        </p>
      </div>
    </Layout>
  );
}
