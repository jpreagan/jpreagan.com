import React from "react";
import Header from "./header";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-5xl px-4">{children}</main>

      <Footer />
    </>
  );
}
