import './App.css';
import React from "react";
import {BrowserRouter} from "react-router";
import AppRouters from "./appRouters/AppRouters";
import {ThemeProvider} from "styled-components";
import Styled from "./App.styled";

const { Container } = Styled;

class App extends React.Component {
  render() {
    const {store} = this.props;

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

}

export default App;
