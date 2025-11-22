import React from "react";
import { Link, useLocation } from "react-router-dom";
// ------------------ תיקון נתיבים ------------------
// משנים מ-@ לשימוש בנתיב יחסי, המצביע על תיקיית המשנה הנכונה
import { createPageUrl } from "./utils/index"; 
import { LayoutDashboard, Zap } from "lucide-react";

// ייבוא מפורש של הרכיבים הנלווים (SidebarContent, SidebarProvider, וכו')
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "./components/sidebar"; 

// ייבוא ברירת מחדל נפרד של Sidebar (הפותר את השגיאה האחרונה!)
import Sidebar from "./components/sidebar"; 
// ----------------------------------------------------

const navigationItems = [
  {
    title: "Dashboard",
    url: createPageUrl("Dashboard"),
    icon: LayoutDashboard,
  }
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="border-r border-gray-200 bg-white hidden md:flex">
          <SidebarHeader className="border-b border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
          </SidebarHeader>
          {/* וכל שאר הקוד המקורי של הקומפוננטה */}
        </Sidebar>
        {children}
      </div>
    </SidebarProvider>
  );
}
