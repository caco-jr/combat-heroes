import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,viewport-fit=cover"
          />

          <link rel="icon" type="image/x-icon" href="/favicon.ico" />

          <link href="/static/style/style.css" rel="stylesheet" />

          <link
            href="https://fonts.googleapis.com/css?family=DM+Sans:400,700&display=swap&subset=latin-ext"
            rel="stylesheet"
          />

          <link
            href="https://cdn.rawgit.com/filipelinhares/ress/master/dist/ress.min.css"
            rel="stylesheet"
          />
          <link rel="manifest" href="/static/manifest/manifest.json" />
          <link rel="manifest" href="manifest.webmanifest" />
          <link
            rel="apple-touch-icon"
            sizes="48x48"
            href="/static/manifest/launcher-icon.png?v=1.0.0"
          />
          <link
            rel="apple-touch-icon"
            sizes="96x96"
            href="/static/manifest/launcher-icon@2x.png?v=1.0.0"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/static/manifest/launcher-icon@4x.png?v=1.0.0"
          />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <script
            async
            src="https://cdn.jsdelivr.net/npm/pwacompat@2.0.9/pwacompat.min.js"
            integrity="sha384-VcI6S+HIsE80FVM1jgbd6WDFhzKYA0PecD/LcIyMQpT4fMJdijBh0I7Iblaacawc"
            crossOrigin="anonymous"
          />

          {this.props.styleTags}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
