import { lazy } from "react";

export const MyRoutes = [
  {
    path: "/create-ad",
    component: lazy(() => import("../containers/CreateAd")),
    title: "Place An Ad",
    menu: "no",
    exact: true,
    profilenav: "yes"
  },
  {
    path: "/",
    component: lazy(() => import("../containers/Home")),
    title: "Home",
    menu: "yes",
    exact: true,
    profilenav: "no"
  },
  {
    path: "/blog",
    component: lazy(() => import("../containers/Blog")),
    title: "Blog",
    menu: "yes",
    exact: true,
    profilenav: "no"
  },
  {
    path: "/how-to-shop",
    component: lazy(() => import("../containers/HowToShop")),
    title: "How To Shop",
    menu: "yes",
    exact: true,
    profilenav: "no"
  },
  {
    path: "/products",
    component: lazy(() => import("../containers/Products")),
    title: "Products",
    menu: "yes",
    exact: true,
    profilenav: "no"
  },
  {
    path: "/services",
    component: lazy(() => import("../components/OurServices")),
    title: "Services",
    menu: "no",
    exact: true,
    profilenav: "no"
  },
  {
    path: "/online-goods",
    component: lazy(() => import("../containers/OnlineGoods")),
    title: "Online Goods",
    menu: "no",
    exact: true,
    profilenav: "no"
  },
  {
    path: "/products/:nid",
    component: lazy(() => import("../containers/ProductDetails")),
    title: "Product Details",
    menu: "no",
    exact: true,
    profilenav: "no"
  },
  {
    path: "/login",
    component: lazy(() => import("../containers/Login")),
    title: "Login",
    menu: "no",
    exact: true,
    profilenav: "no"
  },
  {
    path: "/user-register",
    component: lazy(() => import("../containers/UserRegister")),
    title: "User Register",
    menu: "no",
    exact: true,
    profilenav: "no"
  },
  {
    path: "/update-ad/:nid",
    component: lazy(() => import("../containers/UpdateAd")),
    title: "Update Ad",
    menu: "no",
    exact: true,
    profilenav: "no"
  },
  {
    path: "/manage-ads",
    component: lazy(() => import("../containers/ManageAds")),
    title: "Manage Ads",
    menu: "no",
    exact: true,
    profilenav: "yes"
  },
  {
    path: "/user-edit",
    component: lazy(() => import("../containers/AccountSettings")),
    title: "Account Settings",
    menu: "no",
    exact: true,
    profilenav: "yes"
  },
  {
    path: "/favourites/:uid",
    component: lazy(() => import("../containers/Favourites")),
    title: "Favourites",
    menu: "no",
    exact: true,
    profilenav: "no"
  },
  {
    path: "/user/:uid",
    component: lazy(() => import("../containers/UserProfile")),
    title: "Author's Profile",
    menu: "no",
    exact: true,
    profilenav: "no"
  },
  {
    path: "/blog/:nid",
    component: lazy(() => import("../containers/BlogDetails")),
    title: "Blog Details",
    menu: "no",
    exact: true,
    profilenav: "no"
  },
  {
    path: "/demo",
    component: lazy(() => import("../components/FileUpload")),
    title: "File Upload Demo",
    menu: "no",
    exact: true,
    profilenav: "no"
  },
  {
    path: "/user/:uid/ads",
    component: lazy(() => import("../containers/UserAds")),
    title: "User Ads",
    menu: "no",
    exact: true,
    profilenav: "no"
  },
  {
    path: "/user/:uid/message",
    component: lazy(() => import("../containers/PrivateMessage")),
    title: "User Message",
    menu: "no",
    exact: true,
    profilenav: "no"
  },
  {
    path: "/search/:category/:input",
    component: lazy(() => import("../containers/Search")),
    title: "Search Results",
    menu: "no",
    exact: true,
    profilenav: "no"
  },
  {
    path: "/privacy-policy",
    component: lazy(() => import("../containers/PrivacyPolicy")),
    title: "Terms and Conditions",
    menu: "no",
    exact: true,
    profilenav: "no"
  },
  {
    path: "*",
    component: lazy(() => import("../containers/NotFound")),
    title: "Blog Details",
    menu: "no",
    exact: true,
    profilenav: "no"
  }
];
