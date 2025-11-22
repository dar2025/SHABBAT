import React from 'react';

// רכיב ה-Sidebar הראשי
const Sidebar = ({ children }) => { return <div>{children}</div>; };
export default Sidebar; // ייצוא ברירת המחדל

// ייצוא כל הרכיבים הנוספים כרכיבי Placeholder ריקים
export const SidebarProvider = ({ children }) => <>{children}</>;
export const SidebarContent = ({ children }) => <div>{children}</div>;
export const SidebarGroup = ({ children }) => <div>{children}</div>;
export const SidebarGroupContent = ({ children }) => <div>{children}</div>;
export const SidebarMenu = ({ children }) => <div>{children}</div>;
export const SidebarMenuButton = ({ children }) => <button>{children}</button>;
export const SidebarMenuItem = ({ children }) => <li>{children}</li>;
export const SidebarHeader = ({ children }) => <div>{children}</div>;
export const SidebarTrigger = ({ children }) => <button>{children}</button>;
