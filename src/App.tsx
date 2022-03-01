import GlobalStyle from "./GlobalStyle";

import Header from "./components/Header";
import DashBoard from "./components/DashBoard";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <DashBoard />
    </div>
  );
}
