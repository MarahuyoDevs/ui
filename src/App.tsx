import { Component, Suspense } from "solid-js";
import {
  ColorModeProvider,
  ColorModeScript,
  createLocalStorageManager,
} from "@kobalte/core";
import { Route, Router } from "@solidjs/router";
import DocsLayout from "./routes/docs";
import HomePage from "./routes/home";
import NotFoundPage from "./routes/notFound";
import AlertDoc from "~/routes/docs/components/alert.mdx";
import GettingStarted from "~/routes/docs/getting-started.mdx";
import Theming from "~/routes/docs/theming.mdx";
import Styling from "~/routes/docs/styling.mdx";

const App: Component<{}> = (props) => {
  const storageManager = createLocalStorageManager("vite-ui-theme");
  return (
    <Router
      root={(props) => (
        <>
          <ColorModeScript storageType={storageManager.type} />
          <ColorModeProvider storageManager={storageManager}>
            <Suspense>{props.children}</Suspense>
          </ColorModeProvider>
        </>
      )}
    >
      <Route path={"/ui/"} component={DocsLayout}>
        <Route
          path="/"
          component={() => {
            window.location.href = "/ui/getting-started";
            return <></>;
          }}
        />
        <Route path={"/components"}>
          <Route path={"/alert"} component={() => <AlertDoc />} />
        </Route>
        <Route path={"/getting-started"} component={() => <GettingStarted />} />
        <Route path={"/theming"} component={() => <Theming />} />
        <Route path={"/styling"} component={() => <Styling />} />
      </Route>
      <Route path={"/ui/not-found"} component={NotFoundPage}></Route>
    </Router>
  );
};

export default App;
