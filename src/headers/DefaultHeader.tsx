import Header from "../components/headers/Header";

export default function DefaultHeader() {
  return (
    <Header
      links={[
        { title: "overview", url: "" },
        { title: "test", url: "/test" },
      ]}
    />
  );
}
