import { HashRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Header";
import { Home } from "./routes/Home";
import { Menu1 } from "./routes/Menu1";
import { Menu2 } from "./routes/Menu2";
import { PageNotFound } from "./routes/PageNotFound";

export const BaseRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu1" element={<Menu1 />}></Route>
        <Route path="/menu2" element={<Menu2 />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  );
};
