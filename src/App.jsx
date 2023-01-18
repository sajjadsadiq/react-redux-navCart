import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import TopRated from "./pages/TopRated";
import store from "./redux/store";

// React Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/top-rated",
        element: <TopRated />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/page-not-found",
        element: <div>Page Not Found Router</div>,
      },
    ],
  },
]);

const App = () => {
  return (
    <div style={{ padding: "40px 100px" }}>
      <Provider store={store}>
          <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
};

export default App;
