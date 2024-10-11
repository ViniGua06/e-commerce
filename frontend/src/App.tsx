import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { useEffect } from "react";
import { Sign } from "./pages/Sign";
import { UserPage } from "./pages/UserPage";
import { useDispatch, useSelector } from "react-redux";
import { setUser, userSelector } from "./redux/user/slice";
import { apiUrl } from "./url";
import { StorePage } from "./pages/StorePage";
import { ProductPage } from "./pages/ProductPage";
import { CreateStorePage } from "./pages/CreateStorePage";
import { CreateProductPage } from "./pages/CreateProductPage";

function App() {
  const dispatch = useDispatch();
  const { user_id, logged } = useSelector(userSelector);

  useEffect(() => {
    const pathname = window.location.pathname;

    if (pathname == "/") {
      document.body.style.background = "#f8f4e4";
    }
  }, []);

  useEffect(() => {
    if (logged) {
      getUserInfo();
    }
  }, [dispatch, logged]);

  const getUserInfo = async () => {
    try {
      const res = await fetch(`${apiUrl}/user/${user_id}`);

      if (res.status == 200) {
        const data = await res.json();

        dispatch(
          setUser({
            user_id: data._id,
            user: data.name,
            email: data.email,
            password: data.password,
            stores: data.stores,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/search" element={<Home />}></Route>
          <Route path="/sign" element={<Sign />}></Route>
          <Route path="/user" element={<UserPage />}></Route>
          <Route path="/store/:store_id" element={<StorePage />}></Route>
          <Route path="/store/create" element={<CreateStorePage />}></Route>
          <Route path="/product/:product_id" element={<ProductPage />}></Route>
          <Route
            path="/store/:store_id/create-product/:admin"
            element={<CreateProductPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
