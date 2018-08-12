import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Menu from '../src/client/components/Menu';
import Header from '../src/client/components/Header';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="shortcut icon" type="image/x-icon" href="/static/assets/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="http://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
          <title>Opportunities</title>
        </Head>
        <body>
          <Menu />
          <Header />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
