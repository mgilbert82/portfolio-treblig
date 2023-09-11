"use client";
import "./app.scss";
import Topbar from "@/components/topbar/Topbar";
import Menu from "@/components/menu/Menu";
import Intro from "@/components/intro/Intro";
import Portfolio from "@/components/portfolio/Portfolio";
import Works from "@/components/works/Works";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";
import { useState } from "react";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="app">
      <Topbar open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
