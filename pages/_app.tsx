import App from "next/app";
import React from "react";
import { createStore, Store } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { Provider } from "react-redux";
import withRedux, { MakeStoreOptions } from "next-redux-wrapper";
import rootReducer from "../src/reducers";

const makeStore = (initialState: any, _: MakeStoreOptions) => {
  return createStore(rootReducer, initialState, devToolsEnhancer({}));
};

interface AppProps {
  Component: React.Component;
  pageProps: any;
  store: Store;
}

class MyApp extends App<AppProps> {
  static async getInitialProps({
    Component,
    ctx
  }: {
    Component: any;
    ctx: any;
  }) {
    ctx.store.dispatch({ type: "FOO", payload: "Foo!!" });
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
