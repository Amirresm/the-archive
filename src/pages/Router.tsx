import { Route, Routes } from "react-router-dom";
import DefaultHeader from "../headers/DefaultHeader";
import Overview from "./main/Overview";
import TestPage from "./main/TestPage";
import Transactions from "./main/Transactions";

export default function RootRouter() {
  return (
    <>
      <Routes>
        <Route path="*" element={<DefaultHeader />} />
      </Routes>
      <Routes>
        <Route path="" element={<Overview />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="test" element={<TestPage />} />
      </Routes>
    </>
  );
}
