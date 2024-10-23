import { Suspense } from "react";
import "../styles/globals.css";

import NavComponent from "../components/NavComponent";
import Provider from "../components/Provider";
import LoadingComponent from "../components/LoadingComponent";

export const metadata = {
  title: "Neo Mokhele | Promptopia",
  description: "Discover & Share AI Prompts",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <Suspense fallback={<LoadingComponent />}>
            <main className="app">
              <NavComponent />
              {children}
            </main>
          </Suspense>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
