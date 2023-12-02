import { createRoot } from "react-dom/client";
import { App } from "@/components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LazyAbout } from "@/pages/About/index.lazy";
import { LazyShop } from "@/pages/Shop/index.lazy";
import { LazyContacts } from "@/pages/Contacts/index.lazy";
import { Suspense } from "react";
import About from "@/pages/About";
import Shop from "@/pages/Shop";
import Contacts from "@/pages/Contacts";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const app = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        // element: <About />,
        element: (
          <Suspense fallback="Loading...">
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        // element: <Shop />,

        element: (
          <Suspense fallback="Loading...">
            <LazyShop />
          </Suspense>
        ),
      },
      {
        path: "/contacts",
        // element: <Contacts />,

        element: (
          <Suspense fallback="Loading...">
            <LazyContacts />
          </Suspense>
        ),
      },
    ],
  },
]);

app.render(<RouterProvider router={router} />);
