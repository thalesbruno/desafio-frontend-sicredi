import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GlobalStyle from "./components/styles/GlobalStyle";
import { themeDark, themeLight } from "./components/styles/Theme";
import { UserContext } from "./contexts/UserContext";
import useCheckLogin from "./hooks/useCheckLogin";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import DragonPage from "./pages/Dragon";
import AddDragon from "./pages/AddDragon";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useCheckLogin();
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [updated, setUpdated] = useState<Date>(new Date());

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {isLoggedIn && <Header dark={isDarkTheme} setDark={setIsDarkTheme} />}
        <Switch>
          <Route exact path="/">
            {isLoggedIn ? (
              <Redirect to={"/home"} />
            ) : (
              <Redirect to={"/login"} />
            )}
          </Route>
          <Route path="/home">
            {isLoggedIn ? <HomePage /> : <Redirect to={"/login"} />}
          </Route>
          <Route path="/dragao/:id">
            {isLoggedIn ? <DragonPage /> : <Redirect to={"/login"} />}
          </Route>
          <Route path="/adicionar-dragao">
            {isLoggedIn ? <AddDragon /> : <Redirect to={"/login"} />}
          </Route>
          <Route path="/login" component={LoginPage} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
