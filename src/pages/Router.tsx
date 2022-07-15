import { Route, Routes } from "react-router-dom";
import DefaultHeader from "../headers/DefaultHeader";
import Overview from "./main/Overview";
import TestPage from "./main/TestPage";

export default function RootRouter() {
  return (
    <>
      <Routes>
        <Route path="*" element={<DefaultHeader />} />
      </Routes>
      <Routes>
        <Route path="" element={<Overview />} />
        <Route path="test" element={<TestPage />} />
      </Routes>
    </>
  );
}
