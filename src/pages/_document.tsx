import React from 'react';
import Document, {
  Html, Head, Main, NextScript, DocumentContext,
} from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles';
import theme from '../styles/theme';

class CustomDocument extends Document {
  render = ((): JSX.Element => (
    <Html lang='ja'>
      <Head>
        {/* PWA primary color */}
        <meta name="theme-color" content={theme.palette.primary.main} />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  ));
}

export default CustomDocument;

CustomDocument.getInitialProps = async (ctx: DocumentContext) => {
  const styledComponentSheets = new StyledComponentSheets();
  const materialUiServerStyleSheets = new MaterialUiServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props) => styledComponentSheets
        .collectStyles(materialUiServerStyleSheets.collect(<App {...props} />)),
    });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styledComponentSheets.getStyleElement()}
          {materialUiServerStyleSheets.getStyleElement()}
        </>
      ),
    };
  } finally {
    styledComponentSheets.seal();
  }
};
