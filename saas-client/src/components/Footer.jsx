
"use client";

import { Footer } from "flowbite-react";

export default function Component() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <Footer.Divider />
        <Footer.Copyright href="#" by="GANESH" year={2024} />
      </div>
    </Footer>
  );
}
