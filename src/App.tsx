import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";

import Background from "./components/Background";
import "./scss/index.scss";
import { Suspense, lazy, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./utils/firebaseConfig";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { clearToasts, setUserStatus} from "./app/slices/AppSlice";
import { ToastContainer, ToastOptions, toast } from "react-toastify";
import "react-taostify/dist/ReactToastify.css";
import Loader from "./components/Loader";

const Search = lazy(() => import("./pages/Search"));
const MyList = lazy(() => import("./pages/MyList"));
const About = lazy(() => import("./pages/About"));
const Compare = lazy(() => import("./pages/Compare"));
const Pokemon = lazy(() => import("./pages/Pokemon"));

export default function App(){
    const { toasts } = useAppSelector(({ app }) => app);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        if (toasts.length) {
            const toastOptions: ToastOptions = {
                position: "bottom-right",
                autoClose: 2000,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            };
            toasts.forEach((message: string) => {
                toast(message, toastOptions);
            });
            dispatch(clearToasts());
        }
    })
}