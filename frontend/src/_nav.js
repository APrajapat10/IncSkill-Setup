import React from "react";
import CIcon from "@coreui/icons-react";

import { CNavItem, CNavGroup } from "@coreui/react";

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
    component: CNavGroup,
    name: "Discover",
    icon: <CIcon customClassName="nav-icon" />,
    items: [
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
    ],
  },
  {
    component: CNavGroup,
    name: "Upskill",
    icon: <CIcon customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Software Engineering",
        to: "/charts",
        icon: <CIcon customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Connect",
    icon: <CIcon customClassName="nav-icon" />,
    items: [
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
        name: "Opportunities",
        to: "/opportunities",
        icon: <CIcon customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "Corporates",
        to: "/charts",
        icon: <CIcon customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Profile and Settings",
    icon: <CIcon customClassName="nav-icon" />,
    items: [],
  },
];

export default _nav;
