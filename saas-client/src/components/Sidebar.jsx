
"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

export default function Component() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
         
          <Sidebar.Item href="/admin/users" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="/admin/plans" icon={HiShoppingBag}>
            Plans
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            SignOut
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
