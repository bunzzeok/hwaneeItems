import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Routes } from "@/Routes";
import Header from "@/components/header/header";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header></Header>
        <div className="common-body">
          <Routes />
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
