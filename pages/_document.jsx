import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Menu from '../components/Menu';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="shortcut icon" type="image/x-icon" href="/static/assets/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Opportunities</title>
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
