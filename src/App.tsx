import Main from "./components/Main";
import Intro from "./components/Intro";
import Activity from "./components/Activity";

import { flexCenter } from "./styles/theme";
import styled from "styled-components";

const AppContainer = styled.div`
  .wrapper {
    ${flexCenter};
    flex-direction: column;
  }
`;

function App() {
  return (
    <AppContainer>
      <div className="App">
        <div className="wrapper">
          <Main />
          <Intro />
          <Activity />
        </div>
      </div>
    </AppContainer>
  );
}

export default App;