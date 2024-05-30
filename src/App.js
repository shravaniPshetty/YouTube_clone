import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Head from "./components/Head";
import Store from "./utils.js/Store";
import {Provider} from "react-redux";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import Body from "./components/Body";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body/>,
      children:[
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ]
    }
  ])
  return (
    <Provider store={Store}>
      <div>
        <Head/>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
    
  );
}

export default App;
