import React from "react";
import CIcon from "@coreui/icons-react";

import { CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    component: CNavTitle,
    name: "Discover",
  },
  {
    component: CNavItem,
    name: "Career Experiences",
    to: "/theme/colors",
    icon: <CIcon customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Vocational Assessments",
    to: "/theme/typography",
    icon: <CIcon customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Career Guides",
    to: "/theme/typography",
    icon: <CIcon customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Upskill",
  },
  {
    component: CNavItem,
    name: "Software Engineering",
    to: "/charts",
    icon: <CIcon customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Connect",
  },
  {
    component: CNavItem,
    name: "Learning Groups",
    to: "/charts",
    icon: <CIcon customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Mentorship",
    to: "/mentorship",
    icon: <CIcon customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Corporates",
    to: "/charts",
    icon: <CIcon customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Opportunities",
    to: "/charts",
    icon: <CIcon customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Profile and Settings",
  },
];

export default _nav;
