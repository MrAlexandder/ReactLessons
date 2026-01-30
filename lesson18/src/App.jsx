import './App.css';
import React, {useEffect} from "react";
import {BrowserRouter} from "react-router";
import AppRouters from "./appRouters/AppRouters";
import {ThemeProvider} from "styled-components";
import Styled from "./App.styled";

const { Container } = Styled;

const App = (props) => {
  const {store} = props;

  useEffect(() => {
    store.init()
  }, [])

  return (
    <BrowserRouter>
      <ThemeProvider theme={{
        isDarkTheme: false,
      }}>
        <Container>
          <AppRouters store={store}/>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
