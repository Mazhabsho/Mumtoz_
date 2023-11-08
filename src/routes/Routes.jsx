import { ImportContacts } from "@mui/icons-material";
import { lazy } from "react";

export const Loyout = lazy(() => import("../pages/loyout/Loyout"));
export const Home = lazy(()=> import("../pages/home/Home"));
export const Event = lazy(()=>import("../pages/event/Event"));
export const EventInfo = lazy(() => import("../pages/event/EventInfo"));
export const MainForm = lazy(()=> import("../pages/form/MainForm"));
export const Courses = lazy(()=> import("../pages/course/Course"));
export const InfoPageCourse = lazy(()=> import("../pages/course/InfoPageCourse"));
export const Contact = lazy(() => import("../pages/contact/Contact")); 
export const Blog = lazy(()=> import("../pages/blog/Blog"));
export const BlogDetail = lazy(()=> import("../pages/blog/BlogDetail"));
export const SignIn = lazy (() => import("../pages/signIn/SingIn"));
export const Register = lazy(()=> import("../pages/register/Register"));
export const Shop = lazy(()=> import ("../pages/pages/Shop"));
export const InterUniversity = lazy(() => import("../pages/univer/InterUniversity"));
export const DomesUniversity = lazy(() => import("../pages/univer/DomesUniversity"));