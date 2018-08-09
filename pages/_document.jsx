import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Menu from '../components/menu';
export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Menu />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
