"use client";
import "./app.scss";
import Topbar from "@/components/topbar/Topbar";
import Menu from "@/components/menu/Menu";
import Intro from "@/components/intro/Intro";
import Works from "@/components/works/Works";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";
import { useState } from "react";
import About from "@/components/about/About";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="app">
      <Topbar open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
