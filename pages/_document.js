import Document, { Html, Head, Main, NextScript } from 'next/document';


/*
 *
 *
 * _DOCUMENT.JS TELLS NEXT JS HOW TO RENDER THE HTML
 *
 *  
 * 
 */


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const intitialProps = await Document.getInitialProps(ctx);
    return { ...intitialProps }
  }


  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        </Head>
        <script src="https://kit.fontawesome.com/d42159e0f7.js" crossOrigin="anonymous"></script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

}

export default MyDocument;


