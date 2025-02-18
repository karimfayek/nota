import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, forwardRef, useRef, useEffect, createContext, useContext, Fragment as Fragment$1 } from "react";
import Lightbox from "yet-another-react-lightbox";
import { useSelector, useDispatch } from "react-redux";
import { Link, useForm, Head, usePage, createInertiaApp } from "@inertiajs/react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { createSlice } from "@reduxjs/toolkit";
import { toast, ToastContainer } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Transition, Dialog } from "@headlessui/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
import { Inertia } from "@inertiajs/inertia";
function About({ galleries }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };
  return /* @__PURE__ */ jsxs("div", { className: "sm:px-8 mt-16 sm:mt-32 mx-auto w-full max-w-7xl lg:px-8", children: [
    /* @__PURE__ */ jsx("div", { className: "relative px-4 sm:px-8 lg:px-12 mb-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-2xl lg:max-w-5xl", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:pl-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-xs px-2.5 lg:max-w-none", children: /* @__PURE__ */ jsx(
        "img",
        {
          alt: "",
          loading: "lazy",
          width: "800",
          height: "800",
          decoding: "async",
          "data-nimg": "1",
          className: "aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover ",
          src: "/images/salt.jpg",
          style: { color: "transparent" }
        }
      ) }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:order-first lg:row-span-2", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl ", children: "Egyptian Lebanese company for food industry" }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 space-y-7 text-base text-zinc-600 ", children: /* @__PURE__ */ jsx("p", { children: "Our company establish in 2005 as first private salt refinery in Egypt with partners from Egypt and Lebanon for edible salt We start with 20000 Mt production capacity we focus on local market initially and at 2008 we spread out of country and increase our capacity to be 50000 Mt and introduce new products as industrial salt and salt tablets , 2010 we open our factory in Lebanon and at 2013 we open our new factory in Tema ghana, 2017 we introduce salt speckles as new products and our capacity increase to 170000 Mt , in 2022 our capacity increased to 250000 per year " }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:pl-20", children: /* @__PURE__ */ jsxs("ul", { role: "list", children: [
        /* @__PURE__ */ jsx("li", { className: "flex", children: /* @__PURE__ */ jsxs("a", { className: "group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500", href: "https://x.com/ElfiSalt", children: [
          /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", className: "h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500", children: /* @__PURE__ */ jsx("path", { d: "M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" }) }),
          /* @__PURE__ */ jsx("span", { className: "ml-4", children: "Follow on X" })
        ] }) }),
        /* @__PURE__ */ jsx("li", { className: "flex mt-4", children: /* @__PURE__ */ jsxs("a", { className: "group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500", href: "https://www.facebook.com/profile.php?id=61563373169918", children: [
          /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "24", height: "24", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M 7.5 1 C 3.9160714 1 1 3.9160714 1 7.5 C 1 11.083929 3.9160714 14 7.5 14 C 11.083929 14 14 11.083929 14 7.5 C 14 3.9160714 11.083929 1 7.5 1 z M 7.5 2 C 10.543488 2 13 4.4565116 13 7.5 C 13 10.266333 10.967571 12.541024 8.3125 12.933594 L 8.3125 9.0898438 L 9.8652344 9.0898438 L 10.109375 7.5136719 L 8.3125 7.5136719 L 8.3125 6.6503906 C 8.3125 5.9953906 8.5256719 5.4140625 9.1386719 5.4140625 L 10.123047 5.4140625 L 10.123047 4.0371094 C 9.9500469 4.0141094 9.5845781 3.9628906 8.8925781 3.9628906 C 7.4485781 3.9628906 6.6015625 4.7258906 6.6015625 6.4628906 L 6.6015625 7.5117188 L 5.1171875 7.5117188 L 5.1171875 9.0898438 L 6.6035156 9.0898438 L 6.6035156 12.919922 C 3.9897868 12.492118 2 10.237066 2 7.5 C 2 4.4565116 4.4565116 2 7.5 2 z" }) }),
          /* @__PURE__ */ jsx("span", { className: "ml-4", children: "Follow on Facebook" })
        ] }) }),
        /* @__PURE__ */ jsx("li", { className: "mt-4 flex", children: /* @__PURE__ */ jsxs("a", { className: "group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 ", href: "https://eg.linkedin.com/in/elfi-salt-24655031b", children: [
          /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", className: "h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500", children: /* @__PURE__ */ jsx("path", { d: "M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" }) }),
          /* @__PURE__ */ jsx("span", { className: "ml-4", children: "Follow on LinkedIn" })
        ] }) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: [
      galleries.map((image, index) => /* @__PURE__ */ jsx(
        "img",
        {
          src: "/storage/galleries/" + image.image,
          alt: image.seo_kw,
          className: "cursor-pointer rounded shadow",
          onClick: () => openLightbox(index)
        },
        image.id
      )),
      lightboxOpen && /* @__PURE__ */ jsx(
        Lightbox,
        {
          open: lightboxOpen,
          close: () => setLightboxOpen(false),
          slides: galleries.map((img) => ({ src: "/storage/galleries/" + img.image })),
          index: currentIndex
        }
      )
    ] })
  ] });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
const ApprovalNotice = () => {
  const translations = useSelector((state) => state.translations.translations);
  return /* @__PURE__ */ jsxs("div", { className: "text-center py-10", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold mb-4", children: (translations == null ? void 0 : translations.accpendapprov) || "loading." }),
    /* @__PURE__ */ jsx("p", { children: translations == null ? void 0 : translations.accpendapprovtext })
  ] });
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ApprovalNotice
}, Symbol.toStringTag, { value: "Module" }));
function ApplicationLogo(props) {
  return /* @__PURE__ */ jsx("img", { src: "/logo.png", alt: "logo", className: "h-12 w-auto object-contain" });
}
function Guest({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col sm:justify-start items-center pt-6 sm:pt-0 bg-gray-100 ", children: [
    /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "w-20 h-20 fill-current text-gray-500" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg", children })
  ] });
}
function InputError({ message, className = "", ...props }) {
  return message ? /* @__PURE__ */ jsx("p", { ...props, className: "text-sm text-red-600 " + className, children: message }) : null;
}
function InputLabel({ value, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx("label", { ...props, className: `block font-medium text-sm text-gray-700 ` + className, children: value ? value : children });
}
function PrimaryButton({ className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
const TextInput = forwardRef(function TextInput2({ type = "text", className = "", isFocused = false, ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type,
      className: "border-gray-100 focus:border-gray-800 hover:border-gray-800 " + className,
      ref: input
    }
  );
});
function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.confirm"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Confirm Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "This is a secure area of the application. Please confirm your password before continuing." }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            isFocused: true,
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: "Confirm" }) })
    ] })
  ] });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ConfirmPassword
}, Symbol.toStringTag, { value: "Module" }));
function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Forgot Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one." }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full",
          isFocused: true,
          onChange: (e) => setData("email", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: "Email Password Reset Link" }) })
    ] })
  ] });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ForgotPassword
}, Symbol.toStringTag, { value: "Module" }));
function Checkbox({ className = "", ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type: "checkbox",
      className: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " + className
    }
  );
}
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"), {
      data: {
        ...data,
        _token: document.querySelector('meta[name="csrf-token"]').content
      }
    });
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: (e) => setData("email", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "current-password",
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "block mt-4", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            name: "remember",
            checked: data.remember,
            onChange: (e) => setData("remember", e.target.checked)
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ms-2 text-sm text-gray-600", children: "Remember me" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        canResetPassword && /* @__PURE__ */ jsx(
          Link,
          {
            href: route("password.request"),
            className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Forgot your password?"
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: "Log in" })
      ] })
    ] })
  ] });
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
function Register$1() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("register"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Name" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            name: "name",
            value: data.name,
            className: "mt-1 block w-full",
            autoComplete: "name",
            isFocused: true,
            onChange: (e) => setData("name", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            onChange: (e) => setData("email", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: (e) => setData("password", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Confirm Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password_confirmation",
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: (e) => setData("password_confirmation", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("login"),
            className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Already registered?"
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: "Register" })
      ] })
    ] })
  ] });
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Register$1
}, Symbol.toStringTag, { value: "Module" }));
function ResetPassword({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.store"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Reset Password" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            onChange: (e) => setData("email", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            isFocused: true,
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Confirm Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: (e) => setData("password_confirmation", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: "Reset Password" }) })
    ] })
  ] });
}
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ResetPassword
}, Symbol.toStringTag, { value: "Module" }));
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
});
const LocationPicker = ({ onLocationSelect }) => {
  const translations = useSelector((state) => state.translations.translations);
  const [location, setLocation] = useState({ lat: 30.0444, lng: 31.2357 });
  const [address, setAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const mapRef = useRef(null);
  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      if (data.display_name) {
        setAddress(data.display_name);
      } else {
        setAddress("Address not found");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      setAddress("Unable to fetch address");
    }
  };
  const handleGetCurrentLocation = async () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser. Please select a location manually.");
      return;
    }
    try {
      const permissionStatus = await navigator.permissions.query({ name: "geolocation" });
      if (permissionStatus.state === "denied") {
        alert("Location access was denied. Please allow location access in your browser settings or select a location manually.");
        return;
      }
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
          onLocationSelect({ lat: latitude, lng: longitude });
          await reverseGeocode(latitude, longitude);
          if (mapRef.current) {
            mapRef.current.flyTo([latitude, longitude], 13);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          switch (error.code) {
            case error.PERMISSION_DENIED:
              alert("Location access was denied. Please allow location access in your browser settings or select a location manually.");
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable. Please select a location manually.");
              break;
            case error.TIMEOUT:
              alert("The request to get your location timed out. Please try again or select a location manually.");
              break;
            default:
              alert("An unknown error occurred while retrieving your location. Please select a location manually.");
              break;
          }
        }
      );
    } catch (error) {
      console.error("Error checking location permission:", error);
      alert("An error occurred while checking location permission. Please select a location manually.");
    }
  };
  const handleSearchInputChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 2) {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=5`
        );
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching address suggestions:", error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  };
  const MapEvents = () => {
    const map2 = useMapEvents({
      drag: () => {
        const center = map2.getCenter();
        setLocation({ lat: center.lat, lng: center.lng });
      },
      dragend: () => {
        const center = map2.getCenter();
        const newLocation = { lat: center.lat, lng: center.lng };
        setLocation(newLocation);
        onLocationSelect(newLocation);
        reverseGeocode(center.lat, center.lng);
      },
      zoomend: () => {
        const center = map2.getCenter();
        const newLocation = { lat: center.lat, lng: center.lng };
        setLocation(newLocation);
        onLocationSelect(newLocation);
        reverseGeocode(center.lat, center.lng);
      }
    });
    useEffect(() => {
      mapRef.current = map2;
    }, [map2]);
    return null;
  };
  const handleAddressSelect = (result) => {
    const { lat, lon, display_name } = result;
    setLocation({ lat: parseFloat(lat), lng: parseFloat(lon) });
    setAddress(display_name);
    setSearchQuery(display_name);
    setSearchResults([]);
    onLocationSelect({ lat: parseFloat(lat), lng: parseFloat(lon) });
    if (mapRef.current) {
      mapRef.current.flyTo([lat, lon], 13);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "border hover:border-gray-800 p-3", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => setIsModalOpen(true),
        className: "mb-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
        children: translations.select_location
      }
    ),
    isModalOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto", style: { zIndex: 51 }, children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-6 w-full max-w-4xl max-h-[97vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-lg font-semibold mb-4", children: [
        " ",
        translations.select_location
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: handleGetCurrentLocation,
          className: "mb-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700",
          children: translations.use_current_location
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: searchQuery,
            onChange: handleSearchInputChange,
            placeholder: translations.search_for_address,
            className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          }
        ),
        searchResults.length > 0 && /* @__PURE__ */ jsx("ul", { className: "mt-2 bg-white border border-gray-300 rounded-md shadow-sm", children: searchResults.map((result, index) => /* @__PURE__ */ jsx(
          "li",
          {
            onClick: () => handleAddressSelect(result),
            className: "px-3 py-2 cursor-pointer hover:bg-gray-100",
            children: result.display_name
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { height: "400px", width: "100%" }, children: /* @__PURE__ */ jsxs(
        MapContainer,
        {
          center: [location.lat, location.lng],
          zoom: 20,
          style: { height: "100%", width: "100%" },
          whenCreated: (mapInstance) => map = mapInstance,
          children: [
            /* @__PURE__ */ jsx(
              TileLayer,
              {
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              }
            ),
            /* @__PURE__ */ jsx(Marker, { position: [location.lat, location.lng] }),
            /* @__PURE__ */ jsx(MapEvents, {}),
            " "
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-700", children: [
        translations.selected_location,
        " ",
        /* @__PURE__ */ jsx("strong", { children: address || "No address selected" })
      ] }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setIsModalOpen(false),
          className: "mt-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700",
          children: translations.close
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-700", children: [
      "Selected Location: ",
      /* @__PURE__ */ jsx("strong", { children: address || "No address selected" })
    ] }) })
  ] });
};
function Register({ states }) {
  const translations = useSelector((state) => state.translations.translations);
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    address: "",
    phone: "",
    city: "",
    // Add city to the form state
    state: "",
    location: "",
    lat: "",
    lng: "",
    district: "",
    building: "",
    mktba_name: "",
    password: "",
    password_confirmation: ""
  });
  const handleLocationSelect = async (location) => {
    setData((prevData) => ({
      ...prevData,
      // Preserve existing state
      lat: location.lat,
      // Update lat
      lng: location.lng
      // Update lng
    }));
  };
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("seller.register"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-between mb-7.5", children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("h2", { className: "font-outfit font-medium text-4xl  mt-2 ", children: "تسجيل كـ مكتبة " }) }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "grid grid-cols-1 sm:grid-cols-2 gap-4 container", children: [
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: translations.name }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            name: "name",
            value: data.name,
            className: "mt-1 block w-full",
            autoComplete: "name",
            isFocused: true,
            onChange: (e) => setData("name", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "mktba_name", value: translations.mktba_name }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "mktba_name",
            name: "mktba_name",
            value: data.mktba_name,
            className: "mt-1 block w-full",
            autoComplete: "mktba_name",
            onChange: (e) => setData("mktba_name", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.mktba_name, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: translations.email }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "email",
            onChange: (e) => setData("email", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "phone", value: translations.phone }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "phone",
            type: "text",
            name: "phone",
            value: data.phone,
            className: "mt-1 block w-full",
            autoComplete: "phone",
            onChange: (e) => setData("phone", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.phone, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "selectField", className: "block text-sm font-medium text-gray-700", children: translations.city }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            className: "mt-1 block w-full",
            value: data.city,
            onChange: (e) => setData("city", e.target.value),
            children: [
              /* @__PURE__ */ jsx("option", { value: "", disabled: true, selected: true, children: translations.select }),
              states && states.map((city) => /* @__PURE__ */ jsx("option", { value: city.id, children: city.name2 }, city.id))
            ]
          }
        ),
        errors.city && /* @__PURE__ */ jsx("span", { children: errors.city })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "district", value: translations.district }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "district",
            type: "text",
            name: "district",
            value: data.district,
            className: "mt-1 block w-full",
            autoComplete: "district",
            onChange: (e) => setData("district", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.district, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "street", value: translations.street_name }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "street",
            type: "text",
            name: "street",
            value: data.street,
            className: "mt-1 block w-full",
            autoComplete: "street",
            onChange: (e) => setData("street", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.street, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "building", value: translations.building_nu }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "building",
            type: "number",
            name: "building",
            value: data.building,
            className: "mt-1 block w-full",
            autoComplete: "building",
            onChange: (e) => setData("building", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.building, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "address", value: translations.complete_address }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "address",
            type: "text",
            name: "address",
            value: data.address,
            className: "mt-1 block w-full",
            autoComplete: "address",
            onChange: (e) => setData("address", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.address, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx(LocationPicker, { onLocationSelect: handleLocationSelect }),
        /* @__PURE__ */ jsx(InputError, { message: errors.lat, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: translations.password }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: (e) => setData("password", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: translations.passwordconfirm }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password_confirmation",
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: (e) => setData("password_confirmation", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "col-span-1 sm:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "border-t mt-4 pb-3 pt-10 text-center", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: route("login"),
            className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: [
              translations.already_registered,
              " ?"
            ]
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: translations.register })
      ] }) })
    ] })
  ] });
}
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Register
}, Symbol.toStringTag, { value: "Module" }));
function VerifyEmail({ status }) {
  const { post, processing } = useForm({});
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Email Verification" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another." }),
    status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: "A new verification link has been sent to the email address you provided during registration." }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Resend Verification Email" }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: route("logout"),
          method: "post",
          as: "button",
          className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
          children: "Log Out"
        }
      )
    ] }) })
  ] });
}
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VerifyEmail
}, Symbol.toStringTag, { value: "Module" }));
function MetaTags({ description, keywords, title, image_url, url }) {
  return /* @__PURE__ */ jsxs(Helmet, { children: [
    /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
    /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: image_url }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: url }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
    /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "en_US" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: image_url }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: url })
  ] });
}
function BlogPost({ BlogPost: BlogPost2 }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: BlogPost2 == null ? void 0 : BlogPost2.title }),
    /* @__PURE__ */ jsx(MetaTags, { title: BlogPost2 == null ? void 0 : BlogPost2.title, description: BlogPost2 == null ? void 0 : BlogPost2.content, keywords: BlogPost2 == null ? void 0 : BlogPost2.seo_kw, image_url: "/storage/blogs/" + (BlogPost2 == null ? void 0 : BlogPost2.image), url: "https://elfisalt.com/blogpost/" + (BlogPost2 == null ? void 0 : BlogPost2.slug) }),
    /* @__PURE__ */ jsx("section", { class: "wrapper !bg-[#edf2fc]", children: /* @__PURE__ */ jsx("div", { class: "container pt-10 pb-36 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-40 lg:pb-40 md:pb-40 !text-center", children: /* @__PURE__ */ jsx("div", { class: "flex flex-wrap mx-[-15px]", children: /* @__PURE__ */ jsx("div", { class: "md:w-10/12 lg:w-10/12 xl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto", children: /* @__PURE__ */ jsx("div", { class: "post-header !mb-[.9rem]", children: /* @__PURE__ */ jsx("h1", { class: "text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-4", children: BlogPost2 == null ? void 0 : BlogPost2.title }) }) }) }) }) }),
    /* @__PURE__ */ jsx("section", { class: "wrapper !bg-[#ffffff]", children: /* @__PURE__ */ jsx("div", { class: "container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24", children: /* @__PURE__ */ jsx("div", { class: "flex flex-wrap mx-[-15px]", children: /* @__PURE__ */ jsx("div", { class: "xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto", children: /* @__PURE__ */ jsx("div", { class: "blog single !mt-[-7rem]", children: /* @__PURE__ */ jsxs("div", { class: "card", children: [
      /* @__PURE__ */ jsx("figure", { class: "card-img-top", children: /* @__PURE__ */ jsx("img", { src: "/storage/blogs/" + (BlogPost2 == null ? void 0 : BlogPost2.image), alt: BlogPost2.seo_kw ? BlogPost2.seo_kw : BlogPost2.title }) }),
      /* @__PURE__ */ jsx("div", { class: "card-body flex-[1_1_auto] p-[40px] xl:p-[2.8rem_3rem_2.8rem] lg:p-[2.8rem_3rem_2.8rem] md:p-[2.8rem_3rem_2.8rem]", children: /* @__PURE__ */ jsx("div", { class: "classic-view", children: /* @__PURE__ */ jsx("article", { class: "post mb-8", children: /* @__PURE__ */ jsx("div", { class: "relative mb-5", dangerouslySetInnerHTML: { __html: BlogPost2 == null ? void 0 : BlogPost2.content } }) }) }) })
    ] }) }) }) }) }) })
  ] });
}
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BlogPost
}, Symbol.toStringTag, { value: "Module" }));
function Blogs({ blogs }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Blog" }),
    /* @__PURE__ */ jsxs("main", { className: "w-full flex-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-2xl lg:max-w-none", children: /* @__PURE__ */ jsxs("div", { style: { opacity: 1, transform: "none" }, children: [
        /* @__PURE__ */ jsxs("h1", { children: [
          /* @__PURE__ */ jsx("span", { className: "block font-display text-base font-semibold text-neutral-950", children: "Blog" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: " - " }),
          /* @__PURE__ */ jsx("span", { className: "mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl", children: "The latest articles and news" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 max-w-3xl text-xl text-neutral-600", children: /* @__PURE__ */ jsx("p", { children: "Stay up-to-date with the latest industry news ." }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-2xl lg:max-w-none", children: /* @__PURE__ */ jsx("div", { className: "space-y-24 lg:space-y-32", children: /* @__PURE__ */ jsx("div", { style: { opacity: 1, transform: "none" }, children: blogs && blogs.map((blog) => {
        const formattedDate = new Date(blog.created_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
        const datetime = new Date(blog.created_at).toISOString().split("T")[0];
        return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("article", { children: /* @__PURE__ */ jsx("div", { className: "py-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px", children: /* @__PURE__ */ jsx("div", { className: "relative lg:-mx-4 lg:flex lg:justify-end", children: /* @__PURE__ */ jsxs("div", { className: "pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-semibold text-neutral-950", children: /* @__PURE__ */ jsx(Link, { href: "/blogpost/" + blog.slug, children: blog == null ? void 0 : blog.title }) }),
          /* @__PURE__ */ jsxs("dl", { className: "lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4", children: [
            /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "Published" }),
            /* @__PURE__ */ jsx("dd", { className: "absolute left-0 top-0 text-sm text-neutral-950 lg:static", children: /* @__PURE__ */ jsx("time", { dateTime: datetime, children: formattedDate }) }),
            /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "Author" }),
            /* @__PURE__ */ jsx("dd", { className: "mt-6 flex gap-x-4", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-xl bg-neutral-100", children: /* @__PURE__ */ jsx("img", { style: { maxHeight: 244 }, alt: "", loading: "lazy", width: "1800", height: "1800", decoding: "async", "data-nimg": "1", className: " object-cover ", src: "/storage/blogs/" + (blog == null ? void 0 : blog.image) }) }) })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mt-6 max-w-2xl text-base text-neutral-600", children: [
            " ",
            blog == null ? void 0 : blog.content.replace(/<[^>]+>/g, "").slice(0, 500),
            "..."
          ] }),
          /* @__PURE__ */ jsx(Link, { className: "mt-8 inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800", "aria-label": "Read more: The Future of Web Development: Our Predictions for 2023", href: "/blogpost/" + blog.slug, children: /* @__PURE__ */ jsx("span", { className: "relative top-px", children: "Read more" }) })
        ] }) }) }) }, blog.id) });
      }) }) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-2xl lg:max-w-none", children: /* @__PURE__ */ jsx("div", { className: "-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12", style: { opacity: 1, transform: "translateY(24px) translateZ(0px)" }, children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl", children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl", children: "Tell us about your project" }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex", children: /* @__PURE__ */ jsx("a", { className: "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-neutral-950 hover:bg-neutral-200", href: "/contact", children: /* @__PURE__ */ jsx("span", { className: "relative top-px", children: "Say Hej" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 border-t border-white/10 pt-10", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-base font-semibold text-white", children: "Our offices" }),
          /* @__PURE__ */ jsxs("ul", { role: "list", className: "mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("address", { className: "text-sm not-italic text-neutral-300", children: [
              /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Cairo" }),
              /* @__PURE__ */ jsx("br", {}),
              "1sdfsdf ",
              /* @__PURE__ */ jsx("br", {}),
              "1260, sdfsdf, sdf"
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("address", { className: "text-sm not-italic text-neutral-300", children: [
              /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Billund" }),
              /* @__PURE__ */ jsx("br", {}),
              "24 Lego Allé ",
              /* @__PURE__ */ jsx("br", {}),
              "7190, Billund, Denmark"
            ] }) })
          ] })
        ] })
      ] }) }) }) }) })
    ] })
  ] });
}
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Blogs
}, Symbol.toStringTag, { value: "Module" }));
function Researches({ blogs }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Blog" }),
    /* @__PURE__ */ jsxs("main", { className: "w-full flex-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-2xl lg:max-w-none", children: /* @__PURE__ */ jsx("div", { style: { opacity: 1, transform: "none" }, children: /* @__PURE__ */ jsxs("h1", { children: [
        /* @__PURE__ */ jsx("span", { className: "block font-display text-base font-semibold text-neutral-950", children: "Researches" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: " - " }),
        /* @__PURE__ */ jsx("span", { className: "mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl", children: "Researches and news" })
      ] }) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-2xl lg:max-w-none", children: /* @__PURE__ */ jsx("div", { className: "space-y-24 lg:space-y-32", children: /* @__PURE__ */ jsxs("div", { style: { opacity: 1, transform: "none" }, children: [
        /* @__PURE__ */ jsx("article", { children: /* @__PURE__ */ jsx("div", { className: "py-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px", children: /* @__PURE__ */ jsx("div", { className: "relative lg:-mx-4 lg:flex lg:justify-end", children: /* @__PURE__ */ jsxs("div", { className: "pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-semibold text-neutral-950", children: /* @__PURE__ */ jsx(Link, { href: "/blogpost/" }) }),
          /* @__PURE__ */ jsx("dl", { className: "lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4", children: /* @__PURE__ */ jsx("dd", { className: "mt-6 flex gap-x-4", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-xl", children: /* @__PURE__ */ jsx("img", { style: { maxHeight: 128 }, alt: "", loading: "lazy", width: "128", height: "128", decoding: "async", "data-nimg": "1", className: " object-cover ", src: "/pdficon.png" }) }) }) }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl text-base text-neutral-600", children: "Development of a Process to Manufacture High Quality Refined Salt from Crude Solar Salt" }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              className: "mt-8 inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800",
              "aria-label": "Read more: The Future of Web Development: Our Predictions for 2023",
              href: "/4346C0114189.pdf",
              children: [
                /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", className: "size-6 mr-2", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" }) }),
                /* @__PURE__ */ jsx("span", { children: "Download" })
              ]
            }
          )
        ] }) }) }) }),
        /* @__PURE__ */ jsx("article", { children: /* @__PURE__ */ jsx("div", { className: "py-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px", children: /* @__PURE__ */ jsx("div", { className: "relative lg:-mx-4 lg:flex lg:justify-end", children: /* @__PURE__ */ jsxs("div", { className: "pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-semibold text-neutral-950", children: /* @__PURE__ */ jsx(Link, { href: "/blogpost/" }) }),
          /* @__PURE__ */ jsx("dl", { className: "lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4", children: /* @__PURE__ */ jsx("dd", { className: "mt-6 flex gap-x-4", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-xl", children: /* @__PURE__ */ jsx("img", { style: { maxHeight: 128 }, alt: "", loading: "lazy", width: "128", height: "128", decoding: "async", "data-nimg": "1", className: " object-cover ", src: "/pdficon.png" }) }) }) }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl text-base text-neutral-600", children: "Purification of salt for chemical and human consumption " }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              className: "mt-8 inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800",
              "aria-label": "Read more: The Future of Web Development: Our Predictions for 2023",
              href: "/Purification-of-salt-IM96.pdf",
              children: [
                /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", className: "size-6 mr-2", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" }) }),
                /* @__PURE__ */ jsx("span", { children: "Download" })
              ]
            }
          )
        ] }) }) }) })
      ] }) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-2xl lg:max-w-none", children: /* @__PURE__ */ jsx("div", { className: "-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12", style: { opacity: 1, transform: "translateY(24px) translateZ(0px)" }, children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl", children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl", children: "Tell us about your project" }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex", children: /* @__PURE__ */ jsx("a", { className: "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-neutral-950 hover:bg-neutral-200", href: "/contact", children: /* @__PURE__ */ jsx("span", { className: "relative top-px", children: "Say Hej" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 border-t border-white/10 pt-10", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-base font-semibold text-white", children: "Our offices" }),
          /* @__PURE__ */ jsxs("ul", { role: "list", className: "mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("address", { className: "text-sm not-italic text-neutral-300", children: [
              /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Cairo" }),
              /* @__PURE__ */ jsx("br", {}),
              "1sdfsdf ",
              /* @__PURE__ */ jsx("br", {}),
              "1260, sdfsdf, sdf"
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("address", { className: "text-sm not-italic text-neutral-300", children: [
              /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Billund" }),
              /* @__PURE__ */ jsx("br", {}),
              "24 Lego Allé ",
              /* @__PURE__ */ jsx("br", {}),
              "7190, Billund, Denmark"
            ] }) })
          ] })
        ] })
      ] }) }) }) }) })
    ] })
  ] });
}
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Researches
}, Symbol.toStringTag, { value: "Module" }));
const initialState = {
  cart: [],
  loading: false,
  error: null,
  totalQty: 0,
  subTotal: 0,
  total: 0
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fetchCartRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCartSuccess: (state, action) => {
      state.loading = false;
      state.cart = action.payload.cart_content;
      state.totalQty = action.payload.totalQty;
      state.subTotal = action.payload.subTotal;
      state.total = action.payload.total;
    },
    fetchCartFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});
const { fetchCartRequest, fetchCartSuccess, fetchCartFailure } = cartSlice.actions;
cartSlice.reducer;
const fetchCart$1 = () => async (dispatch2) => {
  try {
    dispatch2(fetchCartRequest());
    console.log("fetching cart ...");
    const response = await fetch("/cart/react");
    const data = await response.json();
    dispatch2(fetchCartSuccess(data));
  } catch (error) {
    dispatch2(fetchCartFailure(error.message));
  }
};
const addToCartQty = (q, id, selectedColor) => async (dispatch2) => {
  try {
    dispatch2(fetchCartRequest());
    const url = "/product/add/cart/react/qty";
    const params = {
      productId: id,
      prQty: q,
      color: selectedColor
    };
    const queryParams = new URLSearchParams(params).toString();
    fetch(`${url}?${queryParams}`).then((response) => response.json()).then((data) => {
      console.log("data", data);
      if (data.error) {
        dispatch2(fetchCartFailure(data.error));
        toast.error(`${data.error} `, {
          position: "top-right",
          autoClose: 3e3,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: void 0,
          theme: "light"
        });
      } else {
        dispatch2(fetchCartSuccess(data));
        toast.success("added to cart", {
          position: "top-right",
          autoClose: 2e3,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: void 0,
          theme: "light"
        });
      }
      dispatch2(fetchCartFailure(data.error));
    }).catch((error) => {
      dispatch2(fetchCartFailure(error.message));
    });
  } catch (error) {
    dispatch2(fetchCartFailure(error.message));
  }
};
const updateCart = (id, q) => async (dispatch2) => {
  try {
    dispatch2(fetchCartRequest());
    const url = "/product/update/cart/react/qty";
    const params = {
      productId: id,
      prQty: q
    };
    const queryParams = new URLSearchParams(params).toString();
    fetch(`${url}?${queryParams}`).then((response) => response.json()).then((data) => {
      console.log("data", data);
      if (data.error) {
        dispatch2(fetchCartFailure(data.error));
        toast.error(`${data.error} `, {
          position: "top-right",
          autoClose: 3e3,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: void 0,
          theme: "light"
        });
      } else {
        dispatch2(fetchCartSuccess(data));
        toast.success("added to cart", {
          position: "top-right",
          autoClose: 2e3,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: void 0,
          theme: "light"
        });
      }
      dispatch2(fetchCartFailure(data.error));
    }).catch((error) => {
      dispatch2(fetchCartFailure(error.message));
    });
  } catch (error) {
    dispatch2(fetchCartFailure(error.message));
  }
};
const removeFromCartItem = (id) => async (dispatch2) => {
  try {
    dispatch2(fetchCartRequest());
    const url = "/product/remove/cart/react";
    const params = {
      productId: id
    };
    const queryParams = new URLSearchParams(params).toString();
    fetch(`${url}?${queryParams}`).then((response) => response.json()).then((data) => {
      dispatch2(fetchCartSuccess(data));
    }).catch((error) => {
      dispatch2(fetchCartFailure(error.message));
    });
  } catch (error) {
    dispatch2(fetchCartFailure(error.message));
  }
};
function BreadCrumb({ name }) {
  const translations = useSelector((state) => state.translations.translations);
  return /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxs("ol", { className: "flex items-center flex-warp list-none", children: [
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: translations.home }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "ml-1 mr-1", children: "/" }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "text-[#686e7d]", children: name }) })
  ] }) });
}
function Cart() {
  const translations = useSelector((state) => state.translations.translations);
  const dispatch2 = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  useSelector((state) => state.cart.loading);
  useSelector((state) => state.cart.totalQty);
  const subTotal = useSelector((state) => state.cart.subTotal);
  const total = useSelector((state) => state.cart.total);
  useSelector((state) => state.cart.error);
  const copyCart = { ...cart };
  const cartArray = Object.values(copyCart);
  const handleQuantityChange = (id, qty) => {
    dispatch2(updateCart(id, qty));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(BreadCrumb, { name: translations.cart }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto p-4", children: [
      cartArray.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex md:flex-row justify-between w-full", children: [
        /* @__PURE__ */ jsx("div", { className: " w-full md:w-[59.0362%]", children: cartArray.map((item) => /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-6 mb-4", children: /* @__PURE__ */ jsx("div", { className: "flex bg-white p-3 relative flex-col gap-6", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-6 justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
            /* @__PURE__ */ jsx("div", { className: "product-image h-[140px] w-[98px] relative", children: /* @__PURE__ */ jsx(Link, { href: `/product/${item.associatedModel.slug}`, children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/product.jpg",
                alt: item.name,
                className: "w-full h-full absolute"
              }
            ) }) }),
            /* @__PURE__ */ jsx("div", { className: "product-info flex flex-col gap-2", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#686e7d] text-xs", children: item.name }),
              /* @__PURE__ */ jsx(Link, { href: `/product/${item.associatedModel.slug}`, className: "text-xl", children: item.name }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ jsx("span", { className: "flex flex-col gap-2", children: /* @__PURE__ */ jsxs("span", { className: "text-base", children: [
                item.price,
                " ج.م"
              ] }) }) }) }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col ", children: item.attributes.color !== "null" && /* @__PURE__ */ jsxs("span", { class: "mb-2 font-medium text-[#3d4750]", children: [
                " ",
                item.attributes.color
              ] }) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 max-h-[140px]", children: [
            /* @__PURE__ */ jsx("div", { className: "delete-item flex text-left justify-end", children: /* @__PURE__ */ jsx("span", { className: "cursor-pointer", style: { height: "2.4rem", width: "2.4rem" }, onClick: () => dispatch2(removeFromCartItem(item.id)), children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" }) }) }) }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              "select",
              {
                id: `quantity-${item.id}`,
                value: item.quantity,
                onChange: (e) => handleQuantityChange(item.id, e.target.value),
                className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
                children: Array.from(
                  {
                    length: item.associatedModel.max_req === 0 ? 100 : item.associatedModel.max_req - Math.max(item.associatedModel.min_req, 1) + 1
                  },
                  (_, i) => i + Math.max(item.associatedModel.min_req, 1)
                ).map((qty) => /* @__PURE__ */ jsx("option", { value: qty, children: qty }, qty))
              }
            ) })
          ] })
        ] }) }) })) }),
        /* @__PURE__ */ jsx("div", { className: " w-full md:w-[38.5543%]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl", children: translations.ordersumary }),
          /* @__PURE__ */ jsxs("div", { className: "summary bg-white p-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: translations.subtotaltrans }),
              /* @__PURE__ */ jsxs("span", { children: [
                "ج.م",
                subTotal == null ? void 0 : subTotal.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsx("hr", { style: { margin: "1rem 0" } }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: translations.total }),
              /* @__PURE__ */ jsxs("span", { children: [
                "ج.م",
                total == null ? void 0 : total.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs", children: translations.exdelever }),
              /* @__PURE__ */ jsx("span", { className: "text-xs", children: translations.incltax })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "fixed md:relative shadow-sm bottom-0 left-0 right-0 w-full bg-white", children: /* @__PURE__ */ jsx(Link, { href: "/checkout", className: "my-4 w-full bg-black flex items-center justify-center h-[3rem]", children: /* @__PURE__ */ jsx("span", { className: "text-white w-full text-center", children: translations.checkout }) }) })
        ] }) })
      ] }),
      cartArray.length < 1 && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center bg-white p-6", children: translations.cartempty })
    ] })
  ] });
}
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cart
}, Symbol.toStringTag, { value: "Module" }));
function Categories({ cats, breakPoints, swiperSpcae, title = null }) {
  return /* @__PURE__ */ jsx("div", { className: "pt-10 px-5", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    title !== null && /* @__PURE__ */ jsx("div", { className: "flex justify-between mb-7.5", children: /* @__PURE__ */ jsx("div", { className: "left-content", children: /* @__PURE__ */ jsx("h2", { className: "font-outfit font-medium text-4xl  mt-2", children: title || "Loading..." }) }) }),
    /* @__PURE__ */ jsx("div", { className: "swiper portfolio-slider overflow-visible mt-6 xl:mt-14 swiper-initialized swiper-horizontal swiper-backface-hidden", children: /* @__PURE__ */ jsx("div", { className: "swiper-wrapper", id: "swiper-wrapper-9520635b310dd664a", "aria-live": "polite", children: /* @__PURE__ */ jsx(
      Swiper,
      {
        dir: "rtl",
        className: "mySwiper mt-10 mb-6",
        breakpoints: breakPoints,
        spaceBetween: swiperSpcae,
        pagination: {
          type: "progressbar"
          // Enables the progress bar
        },
        modules: [Pagination],
        children: cats && cats.map((pcat) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "group/portfolio-box", children: [
          /* @__PURE__ */ jsx("div", { className: "overflow-hidden relative rounded-2xl", children: /* @__PURE__ */ jsx(Link, { "aria-label": pcat.name, href: `/category/${pcat.slug}`, className: "group", children: /* @__PURE__ */ jsx("img", { loading: "lazy", className: "w-full group-hover:scale-105 transition ease-custom duration-500", src: "/cat1.jpg", alt: pcat.name }) }) }),
          /* @__PURE__ */ jsx("div", { className: "pt-6", children: /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx("h2", { className: "text-right relative font-outfit font-medium text-3xl", children: /* @__PURE__ */ jsxs(Link, { "aria-label": pcat.name, href: `/category/${pcat.slug}`, className: "text-center text-sm group-hover/portfolio-box:pl-[44px] transition-all ease-out duration-200", children: [
            /* @__PURE__ */ jsx("span", { className: " absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover/portfolio-box:opacity-100 group-hover/portfolio-box:-translate-x-0 transition duration-100", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" }) }) }),
            pcat.name
          ] }) }) }) })
        ] }) }) }, pcat.id))
      },
      JSON.stringify(breakPoints)
    ) }) })
  ] }) });
}
function CategoriesPage({ cats }) {
  const translations = useSelector((state) => state.translations.translations);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { class: "before:absolute before:left-0 before:right-0 before:w-full before:h-full relative min-h-[250px] max-sm:min-h-[230px] bg-cover bg-center z-[2] w-full overlay-black-light before:bg-black before:opacity-40 bg-[url('/storage/banners/1735574772.webp')]", children: /* @__PURE__ */ jsx("div", { class: "container relative z-1 table h-full", children: /* @__PURE__ */ jsxs("div", { class: "text-center py-[90px] max-sm:py-10 table-cell align-middle h-[250px] max-sm:h-[230px]", children: [
      /* @__PURE__ */ jsxs("h1", { class: "mb-2.5 lg:text-4.5xl md:text-3xl sm:text-2.5xl text-2xl text-white", children: [
        " ",
        translations.depts
      ] }),
      /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { class: "text-white", children: [
        /* @__PURE__ */ jsx("li", { class: "mr-[3px] inline-block text-base font-medium", children: /* @__PURE__ */ jsxs(Link, { href: "/", class: "text-white", children: [
          " ",
          translations.home
        ] }) }),
        /* @__PURE__ */ jsx("li", { class: "mr-[3px] pl-2 inline-block text-base font-medium ", children: "/" }),
        /* @__PURE__ */ jsx("li", { class: "mr-[3px] pl-2 inline-block text-base font-medium ", children: translations.depts })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-7 gap-4 container", children: cats && cats.map((cat) => /* @__PURE__ */ jsxs("div", { className: "group/portfolio-box", children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden relative rounded-2xl", children: /* @__PURE__ */ jsx(Link, { "aria-label": cat.name, className: "group", href: route("category.show", cat.slug), children: /* @__PURE__ */ jsx(
        "img",
        {
          loading: "lazy",
          className: "w-full group-hover:scale-105 transition ease-custom duration-500",
          src: "/cat1.jpg",
          alt: cat.name
        }
      ) }) }),
      /* @__PURE__ */ jsx("div", { className: "pt-6", children: /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx("h2", { className: "text-right relative font-outfit font-medium text-3xl", children: /* @__PURE__ */ jsxs(Link, { "aria-label": cat.name, className: "text-center text-sm group-hover/portfolio-box:pl-[44px] transition-all ease-out duration-200", href: "/category/alaklam", children: [
        /* @__PURE__ */ jsx("span", { className: " absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover/portfolio-box:opacity-100 group-hover/portfolio-box:-translate-x-0 transition duration-100", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" }) }) }),
        cat.name,
        " "
      ] }) }) }) })
    ] }, cat.id)) }) })
  ] });
}
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CategoriesPage
}, Symbol.toStringTag, { value: "Module" }));
function Products({ products, breakPoints, swiperSpcae, title = null, p = null, swipe = false }) {
  const translations = useSelector((state) => state.translations.translations);
  return /* @__PURE__ */ jsx("div", { className: p == null ? "" : p, children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    title !== null && /* @__PURE__ */ jsxs("div", { className: "flex justify-between mb-7.5", children: [
      /* @__PURE__ */ jsx("div", { className: "left-content", children: /* @__PURE__ */ jsx("h2", { className: "font-outfit font-medium text-4xl  mt-2", children: title }) }),
      /* @__PURE__ */ jsx(Link, { href: route("sales.show"), className: "text-secondary text-sm flex items-center gap-1", children: (translations == null ? void 0 : translations.seeall) || "Loading..." })
    ] }),
    swipe ? /* @__PURE__ */ jsx("div", { className: "swiper portfolio-slider overflow-visible mt-6 xl:mt-14 swiper-initialized swiper-horizontal swiper-backface-hidden", children: /* @__PURE__ */ jsx("div", { className: "swiper-wrapper", id: "swiper-wrapper-9520635b310dd664a", "aria-live": "polite", children: /* @__PURE__ */ jsx(
      Swiper,
      {
        className: "mt-10 mb-6",
        spaceBetween: swiperSpcae,
        dir: "rtl",
        breakpoints: breakPoints,
        pagination: {
          type: "progressbar"
          // Enables the progress bar
        },
        modules: [Pagination],
        children: products && products.map((product) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("div", { className: "swiper-slide swiper-slide-prev", children: /* @__PURE__ */ jsxs("div", { className: "group/portfolio-box", children: [
          /* @__PURE__ */ jsx("div", { className: "overflow-hidden relative rounded-2xl", children: /* @__PURE__ */ jsx(Link, { "aria-label": product.name, href: `/product/${product.slug}`, className: "group ", children: /* @__PURE__ */ jsx("img", { loading: "lazy", className: "w-full group-hover:scale-105 transition ease-custom duration-500", src: `/storage/products/medium_photos/${product.FirstImage}`, alt: product.name }) }) }),
          /* @__PURE__ */ jsx("div", { className: "pt-6", children: /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx("h2", { className: "relative font-outfit font-medium text-3xl", children: /* @__PURE__ */ jsxs("div", { className: "text-start  max-sm:p-2.5 flex justify-between", children: [
            /* @__PURE__ */ jsx("h5", { className: "capitalize max-sm:text-sm max-xl:w-full text-sm w-[70%]", children: /* @__PURE__ */ jsx(Link, { href: `/product/${product.slug}`, children: product.name }) }),
            (product == null ? void 0 : product.computed_price) > 0 && /* @__PURE__ */ jsxs("h5", { className: "max-sm:text-2xs text-2xl", children: [
              "L.E ",
              product.computed_price
            ] })
          ] }) }) }) })
        ] }) }) }, product.id))
      },
      JSON.stringify(breakPoints)
    ) }) }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-7 gap-4 container", children: products && products.map((product) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "group/portfolio-box", children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden relative rounded-2xl", children: /* @__PURE__ */ jsx(Link, { "aria-label": product.name, href: `/product/${product.slug}`, className: "group ", children: /* @__PURE__ */ jsx("img", { loading: "lazy", className: "w-full group-hover:scale-105 transition ease-custom duration-500", src: "/product.jpg", alt: product.name }) }) }),
      /* @__PURE__ */ jsx("div", { className: "pt-6", children: /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx("h2", { className: "relative font-outfit font-medium text-3xl", children: /* @__PURE__ */ jsxs("div", { className: "text-start  max-sm:p-2.5 flex justify-between", children: [
        /* @__PURE__ */ jsx("h5", { className: "capitalize max-sm:text-sm max-xl:w-full text-sm w-[70%]", children: /* @__PURE__ */ jsx(Link, { href: `/product/${product.slug}`, children: product.name }) }),
        (product == null ? void 0 : product.computed_price) > 0 && /* @__PURE__ */ jsxs("h5", { className: "max-sm:text-2xs text-2xl", children: [
          "L.E ",
          product.computed_price
        ] })
      ] }) }) }) })
    ] }) })) })
  ] }) });
}
function Category({ category, products, minPrice, maxPrice, keywords }) {
  const breakpointsProducts = {
    320: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: (category == null ? void 0 : category.children.length) > 6 ? 7 : (category == null ? void 0 : category.children.length) || 1
    }
  };
  const translations = useSelector((state) => state.translations.translations);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { class: "before:absolute before:left-0 before:right-0 before:w-full before:h-full relative min-h-[250px] max-sm:min-h-[230px] bg-cover bg-center z-[2] w-full overlay-black-light before:bg-black before:opacity-40 bg-[url('/storage/banners/1735574772.webp')]", children: /* @__PURE__ */ jsx("div", { class: "container relative z-1 table h-full", children: /* @__PURE__ */ jsxs("div", { class: "text-center py-[90px] max-sm:py-10 table-cell align-middle h-[250px] max-sm:h-[230px]", children: [
      /* @__PURE__ */ jsxs("h1", { class: "mb-2.5 lg:text-4.5xl md:text-3xl sm:text-2.5xl text-2xl text-white", children: [
        " ",
        category.name
      ] }),
      /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { class: "text-white", children: [
        /* @__PURE__ */ jsx("li", { class: "mr-[3px] inline-block text-base font-medium", children: /* @__PURE__ */ jsxs(Link, { href: "/", class: "text-white", children: [
          " ",
          translations.home
        ] }) }),
        /* @__PURE__ */ jsx("li", { class: "mr-[3px] pl-2 inline-block text-base font-medium ", children: "/" }),
        /* @__PURE__ */ jsx("li", { class: "mr-[3px] inline-block text-base font-medium", children: /* @__PURE__ */ jsxs(Link, { href: route("cats.show"), class: "text-white", children: [
          " ",
          translations.depts
        ] }) }),
        /* @__PURE__ */ jsx("li", { class: "mr-[3px] pl-2 inline-block text-base font-medium ", children: "/" }),
        /* @__PURE__ */ jsxs("li", { class: "mr-[3px] pl-2 inline-block text-base font-medium ", children: [
          " ",
          category.name
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx(Fragment, { children: (category == null ? void 0 : category.children.length) > 0 && /* @__PURE__ */ jsx(Categories, { cats: category == null ? void 0 : category.children, breakPoints: breakpointsProducts, swiperSpcae: 30 }) }),
    /* @__PURE__ */ jsx("hr", {}),
    products.data.length > 0 ? /* @__PURE__ */ jsx(Products, { products: products.data, swiperSpcae: 30, breakPoints: breakpointsProducts, p: "pt-10 px-5" }) : /* @__PURE__ */ jsx("div", { className: "mt-10 flex items-center justify-center bg-white p-6", children: translations.noproducts })
  ] });
}
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Category
}, Symbol.toStringTag, { value: "Module" }));
const CheckoutPage = () => {
  const translations = useSelector((state) => state.translations.translations);
  const cart = useSelector((state) => state.cart.cart);
  const [loading, setLoading] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const { auth } = usePage().props;
  console.log(auth);
  const handlePlaceOrder = () => {
    const orderDetails = {
      payment: selectedPayment,
      notes: orderNotes
    };
    setLoading(true);
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    fetch("/store-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": csrfToken
      },
      body: JSON.stringify(orderDetails)
    }).then((response) => response.json()).then((result) => {
      if (selectedPayment === "credit-card" && result.success) {
        alert("waiting for Payment integration instructions and information");
        setLoading(false);
      } else if (!result.success) {
        setErrors(result.errors);
        setLoading(false);
      } else if (result.success && selectedPayment !== "credit-card") {
        setSubmited(true);
        setOrder(result.order);
        dispatch(fetchCart());
        setLoading(false);
      }
    }).catch((error) => {
      console.error("Error:", error);
    });
  };
  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };
  if (cart.length < 1) {
    return /* @__PURE__ */ jsx("div", { className: "mt-10 flex items-center justify-center bg-white p-6", children: translations.cartempty });
  }
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto p-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold mb-4 text-center underline", children: translations.checkout }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2", children: translations.customer_info }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 p-4 rounded-lg shadow", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
            translations.name,
            ":"
          ] }),
          " ",
          auth.user.name
        ] }),
        auth.guard === "seller" && /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
            translations.mktba,
            ":"
          ] }),
          " ",
          auth.user.mktba_name
        ] }),
        auth.guard === "company" && /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
            translations.company,
            ":"
          ] }),
          " ",
          auth.user.company
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
            translations.address,
            ":"
          ] }),
          " ",
          auth.user.address
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
            translations.phone,
            ":"
          ] }),
          " ",
          auth.user.phone
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2", children: translations.payment_method }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 p-4 rounded-lg shadow", children: [
        /* @__PURE__ */ jsxs("label", { className: "block  my-3", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "cod",
              type: "radio",
              className: "form-check-input",
              name: "payment_method",
              defaultValue: "cash-on-delivery",
              checked: selectedPayment === "cash-on-delivery",
              onChange: handlePaymentChange
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "form-check-label m-2", children: translations.cod })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "block  my-3", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "insta",
              type: "radio",
              className: "form-check-input",
              name: "payment_method",
              defaultValue: "insta",
              checked: selectedPayment === "insta",
              onChange: handlePaymentChange
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "form-check-label m-2", children: translations.instapay })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2", children: translations.notes }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          value: orderNotes,
          onChange: (e) => setOrderNotes(e.target.value),
          placeholder: "Add any special instructions or notes for your order...",
          className: "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
          rows: "4"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handlePlaceOrder,
        className: "w-full bg-black text-white py-2  hover:bg-green-600",
        children: translations.complete_order
      }
    )
  ] });
};
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CheckoutPage
}, Symbol.toStringTag, { value: "Module" }));
function Contact() {
  const { configs } = usePage().props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [errors, setErrors2] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    const bod = {
      name,
      phone,
      message,
      email
    };
    try {
      const response = await fetch("/contactm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrfToken
        },
        body: JSON.stringify(bod)
      });
      if (response.status) {
        setSuccess(true);
        setEmail("");
        setMessage("");
        setName("");
        setPhone("");
      }
      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 422) {
          setErrors2(errorData.errors);
        } else {
          setErrors2({});
          setSuccessMessage("Something went wrong. Please try again.");
        }
      } else {
        setErrors2({});
        const responseData = await response.json();
        setEmail("");
        setMessage("");
        setName("");
        setPhone("");
      }
    } catch (error) {
      setErrors2({});
      setSuccessMessage("An error occurred. Please try again later.");
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { id: "contact", className: "container max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 pt-24 xl:pt-28", children: /* @__PURE__ */ jsxs("div", { className: "w-full lg:flex space-y-6 lg:space-y-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-1/3", children: [
        /* @__PURE__ */ jsx("h6", { className: "pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider /40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-white/30", children: "Contact" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-outfit font-medium text-4xl md:text-5xl lg:text-6xl  mt-2", children: [
          "Let's ",
          /* @__PURE__ */ jsx("span", { className: "bg-themeGradient bg-clip-text ", children: "Talk" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-2/3", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:flex", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2", children: [
            /* @__PURE__ */ jsx("h6", { className: "font-outfit font-medium uppercase text-sm tracking-wider  mb-2", children: "Email:" }),
            /* @__PURE__ */ jsx("h3", { className: "font-outfit font-medium text-2xl lg:text-3xl ", dangerouslySetInnerHTML: { __html: configs.default_email_address } })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2", children: [
            /* @__PURE__ */ jsx("h6", { className: "font-outfit font-medium uppercase text-sm tracking-wider  mb-2", children: "Call:" }),
            /* @__PURE__ */ jsx("h3", { className: "font-outfit font-medium text-2xl lg:text-3xl ", dangerouslySetInnerHTML: { __html: configs.phones } })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 lg:text-right", children: [
          /* @__PURE__ */ jsxs("form", { className: "space-y-4", method: "post", id: "contactform", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "w-1/2", children: [
                /* @__PURE__ */ jsx("input", { className: "w-full bg-darkBg px-5 py-4 rounded-lg placeholder:/40 /70 focus:outline-none", type: "text", id: "name", name: "name", placeholder: "Name", required: "", value: name, onChange: (e) => setName(e.target.value) }),
                errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.name[0] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "w-1/2", children: [
                /* @__PURE__ */ jsx("input", { className: "w-full bg-darkBg px-5 py-4 rounded-lg placeholder:/40 /70 focus:outline-none", type: "email", id: "email", name: "email", placeholder: "E-Mail", required: "", value: email, onChange: (e) => setEmail(e.target.value) }),
                errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.email[0] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("input", { className: "w-full bg-darkBg px-5 py-4 rounded-lg placeholder:/40 /70 focus:outline-none", type: "text", id: "Phone", name: "Phone", placeholder: "Phone", required: "", value: phone, onChange: (e) => setPhone(e.target.value) }),
            errors.phone && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.phone[0] }),
            /* @__PURE__ */ jsx("textarea", { className: "w-full bg-darkBg px-5 py-4 rounded-lg placeholder:/40 /70 h-[160px] focus:outline-none", name: "message", id: "message", placeholder: "Message", value: message, onChange: (e) => setMessage(e.target.value) }),
            errors.message && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.message[0] }),
            /* @__PURE__ */ jsx("div", { class: "mt-6", children: /* @__PURE__ */ jsx("a", { class: "w-full sm:w-auto inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)] rounded-full border border-transparent bg-gray-950 shadow-md whitespace-nowrap text-base font-medium text-white data-[disabled]:bg-gray-950 data-[hover]:bg-gray-800 data-[disabled]:opacity-40", "data-headlessui-state": "", href: "#", onClick: (e) => handleSubmit(e), children: "Send Message" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "submit-result", children: [
            success && /* @__PURE__ */ jsx("span", { className: "transition duration-200 ease-out text-green-700", id: "success", children: "Thank you! Your Message has been sent." }),
            Object.keys(errors).length > 0 && /* @__PURE__ */ jsx("span", { className: "transition duration-200 ease-out text-red-600", id: "error", children: "Something went wrong, Please try again!" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "container max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 mt-14", children: /* @__PURE__ */ jsx("div", { className: "gmap w-full h-[400px] rounded-2xl", dangerouslySetInnerHTML: { __html: configs.map } }) })
  ] });
}
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact
}, Symbol.toStringTag, { value: "Module" }));
const DropDownContext = createContext();
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx("div", { className: "relative", children }) });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40", onClick: () => setOpen(false) })
  ] });
};
const Content = ({ align = "right", width = "48", contentClasses = "py-1 bg-white", children }) => {
  const { open, setOpen } = useContext(DropDownContext);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "ltr:origin-top-left rtl:origin-top-right start-0";
  } else if (align === "right") {
    alignmentClasses = "ltr:origin-top-right rtl:origin-top-left end-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Transition,
    {
      as: Fragment$1,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 scale-95",
      enterTo: "opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsx("div", { className: `rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses, children })
        }
      )
    }
  ) });
};
const DropdownLink = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out " + className,
      children
    }
  );
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
function NavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " + (active ? "border-indigo-400 text-gray-900 focus:border-indigo-700 " : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ") + className,
      children
    }
  );
}
function ResponsiveNavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: `w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${active ? "border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`,
      children
    }
  );
}
function Authenticated({ user, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  const { auth } = usePage().props;
  const translations = useSelector((state) => state.translations.translations);
  const logoutRoute = auth.guard === "seller" ? route("seller.logout") : route("company.logout");
  const profileRoute = auth.guard === "seller" ? route("seller.profile.edit") : route("company.profile.edit");
  const ProfileRouteName = auth.guard === "seller" ? "seller.profile.edit" : "company.profile.edit";
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsxs("nav", { className: "bg-white border-b border-gray-100", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-16", children: [
        /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsxs("div", { className: "hidden space-x-8 sm:-my-px sm:ms-10 sm:flex gap-4", children: [
          /* @__PURE__ */ jsx(NavLink, { href: profileRoute, active: route().current(ProfileRouteName), children: translations.profile }),
          /* @__PURE__ */ jsx(NavLink, { href: route("seller.orders"), active: route().current("orders"), children: translations.orders })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:flex sm:items-center sm:ms-6", children: /* @__PURE__ */ jsx("div", { className: "ms-3 relative", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
          /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",
              children: [
                user.name,
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "ms-2 -me-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                )
              ]
            }
          ) }) }),
          /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
            /* @__PURE__ */ jsx(Dropdown.Link, { href: profileRoute, children: translations.profile }),
            /* @__PURE__ */ jsx(Dropdown.Link, { href: logoutRoute, method: "post", as: "button", children: translations.logout })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "-me-2 flex items-center sm:hidden", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowingNavigationDropdown((previousState) => !previousState),
            className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",
            children: /* @__PURE__ */ jsxs("svg", { className: "h-6 w-6", stroke: "currentColor", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: !showingNavigationDropdown ? "inline-flex" : "hidden",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M4 6h16M4 12h16M4 18h16"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: showingNavigationDropdown ? "inline-flex" : "hidden",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12"
                }
              )
            ] })
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "pt-2 pb-3 space-y-1", children: [
          /* @__PURE__ */ jsx(ResponsiveNavLink, { href: profileRoute, active: ProfileRouteName, children: translations.profile }),
          /* @__PURE__ */ jsx(ResponsiveNavLink, { href: profileRoute, active: route().current("seller.orders"), children: translations.orders })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-4 pb-1 border-t border-gray-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "px-4", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-base text-gray-800", children: user.name }),
            /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-500", children: user.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-1", children: [
            /* @__PURE__ */ jsx(ResponsiveNavLink, { href: profileRoute, children: "Profile" }),
            /* @__PURE__ */ jsx(ResponsiveNavLink, { method: "post", href: route("logout"), as: "button", children: translations.logout })
          ] })
        ] })
      ] })
    ] }),
    header && /* @__PURE__ */ jsx("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: header }) }),
    /* @__PURE__ */ jsx("main", { children })
  ] });
}
function Dashboard({ auth }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsx("div", { className: "p-6 text-gray-900", children: "You're logged in!" }) }) }) })
      ]
    }
  );
}
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard
}, Symbol.toStringTag, { value: "Module" }));
function Seller({ auth }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsx("div", { className: "p-6 text-gray-900", children: "You're logged in!" }) }) }) })
      ]
    }
  );
}
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Seller
}, Symbol.toStringTag, { value: "Module" }));
function Product({ product, related, keywords }) {
  const [qty, setQty] = useState(product.min_req > 0 ? product.min_req : 1);
  const translations = useSelector((state) => state.translations.translations);
  const loading = useSelector((state) => state.cart.loading);
  const [selectedColor, setSelectedColor] = useState(null);
  const dispatch2 = useDispatch();
  const { auth } = usePage().props;
  const title = product.name;
  const description = product.description.replace(/<[^>]+>/g, "");
  const image_url = "https://elfisalt.com/storage/products/mobile_photos/" + product.FirstImage;
  const url = "https://elfisalt.com/product/" + product.slug;
  const breakpointsProducts = {
    320: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 5
    }
  };
  const handleQtyChange = (v) => {
    if (v < 1) {
      return;
    }
    if (product.min_req > 0 && v < product.min_req || product.max_req > 0 && v > product.max_req) {
      console.log("min req > 0");
      return;
    }
    setQty(v);
    console.log(" outside ");
  };
  const handleAddToCart = (id) => {
    if (!selectedColor && product.colors.length > 0) {
      alert("Please select a color.");
      return;
    }
    dispatch2(addToCartQty(qty, id, selectedColor));
    console.log("adding..");
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: product == null ? void 0 : product.name }),
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: image_url }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: url }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "en_US" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: image_url }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: url }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "image": "https://elfisalt.com/storage/products/mobile_photos/" + product.FirstImage,
        "description": product.description.replace(/<[^>]+>/g, ""),
        "brand": "ELFI-Salt",
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5,
            "bestRating": 5
          }
        }
      }) })
    ] }),
    /* @__PURE__ */ jsx(BreadCrumb, { name: product == null ? void 0 : product.name }),
    /* @__PURE__ */ jsx("section", { className: "section-product py-[50px] max-[1199px]:py-[35px]", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap w-full mb-[-24px]", children: /* @__PURE__ */ jsx("div", { className: "w-full px-[12px] mb-[24px]", children: /* @__PURE__ */ jsx("div", { className: "bb-single-pro mb-[24px]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap mx-[-12px]", children: [
      /* @__PURE__ */ jsx("div", { className: "min-[992px]:w-[41.66%] w-full px-[12px] mb-[24px]", children: /* @__PURE__ */ jsx(Swiper, { className: "owl-theme mt-10", loop: true, margin: 10, nav: true, items: 1, children: product && product.images && product.images.map((image) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: `/product.jpg` }, image.id) })) }) }),
      /* @__PURE__ */ jsx("div", { className: "min-[992px]:w-[58.33%] w-full px-[12px] mb-[24px]", children: /* @__PURE__ */ jsxs("div", { className: "bb-single-pro-contact prose", children: [
        /* @__PURE__ */ jsxs("div", { className: "bb-sub-title mb-[20px]", children: [
          /* @__PURE__ */ jsx("h1", { className: "lg:text-4xl sm:text-3xl text-2xl mb-1", children: product == null ? void 0 : product.name }),
          (product == null ? void 0 : product.computed_price) > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-4 mb-4 font-medium text-2xl", children: [
            " EGP ",
            product.computed_price,
            product.sale_price > 0 && /* @__PURE__ */ jsxs("del", { className: "py-1.1 opacity-60 text-lg text-body", children: [
              "EGP ",
              product.sale_price
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 text-2sm", dangerouslySetInnerHTML: { __html: product == null ? void 0 : product.short_des } }),
        /* @__PURE__ */ jsxs("div", { className: "border-gray-400 border-t ", children: [
          product.min_req > 0 && /* @__PURE__ */ jsxs("p", { children: [
            translations.minreq,
            " :  ",
            /* @__PURE__ */ jsxs("b", { children: [
              " ",
              product.min_req
            ] })
          ] }),
          product.max_req > 0 && /* @__PURE__ */ jsxs("p", { children: [
            translations.maxreq,
            "  :  ",
            /* @__PURE__ */ jsxs("b", { children: [
              product.max_req,
              " "
            ] })
          ] })
        ] }),
        product.colors.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("h3", { children: [
            translations.color,
            ": ",
            /* @__PURE__ */ jsx("span", { className: "text-[#686e7d] text-base", children: selectedColor ? selectedColor : /* @__PURE__ */ jsx("span", { className: "text-[red]", children: translations.selectcolor }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4 mb-6", children: product.colors.map((color) => /* @__PURE__ */ jsx(
            "div",
            {
              className: `w-10 h-10 rounded-lg border-2 ${selectedColor === color.name ? "border-gray-800" : "border-gray-300"} cursor-pointer`,
              style: { backgroundColor: color.hex_code },
              onClick: () => setSelectedColor(color.name)
            },
            color.id
          )) })
        ] }),
        (product == null ? void 0 : product.computed_price) > 0 && auth.user && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: " flex items-start mt-3 pt-12 gap-2", children: [
            /* @__PURE__ */ jsx("input", { type: "number", value: qty, onChange: (e) => handleQtyChange(e.target.value) }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => handleAddToCart(product.id),
                disabled: !selectedColor && product.colors.length > 0 || loading,
                className: ` h-[2.7rem] border duration-700 font-medium hover:bg-gray-700 hover:text-white inline-block leading-[1.2] max-sm:text-sm  overflow-hidden relative text-center text-white w-full
                                                         ${selectedColor && product.colors.length > 0 || !selectedColor && product.colors.length < 1 || loading ? "bg-black text-white" : "bg-gray-300 text-gray-700 cursor-not-allowed"}`,
                children: [
                  translations.addtocart,
                  " ",
                  loading ? ".." : ""
                ]
              }
            )
          ] }),
          !selectedColor && product.colors.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex justify-end text-[red] text-sm", children: /* @__PURE__ */ jsx("p", { className: "m-[0]", children: translations.selectcolor }) })
        ] }),
        !auth.user && /* @__PURE__ */ jsx(Link, { href: "/login", className: "bg-black text-white border duration-700 font-medium hover:bg-gray-700 hover:text-white inline-block leading-[1.2] max-sm:px-6 max-sm:text-sm mb-5 overflow-hidden px-7.5 py-3 relative text-center text-white w-full", children: translations.login })
      ] }) })
    ] }) }) }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "section-related-product py-[50px] max-[1199px]:py-[35px] bg-[#f8f8fb]", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap w-full", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full px-[12px]", children: /* @__PURE__ */ jsx("div", { className: "section-title mb-[20px] pb-[20px] z-[5] relative flex flex-col items-center text-center max-[991px]:pb-[0] ", children: /* @__PURE__ */ jsx("div", { className: "section-detail max-[991px]:mb-[12px]", children: /* @__PURE__ */ jsx("h2", { className: "bb-title  mb-[0] p-[0] text-[25px] font-bold  relative inline capitalize leading-[1] tracking-[0.03rem] max-[767px]:text-[23px]", children: translations.relatedprs }) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "w-full ", children: /* @__PURE__ */ jsx(Products, { products: related, swiperSpcae: 30, breakPoints: breakpointsProducts, swipe: true }) })
    ] }) }) })
  ] });
}
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Product
}, Symbol.toStringTag, { value: "Module" }));
function DangerButton({ className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
function Modal({ children, show = false, maxWidth = "2xl", closeable = true, onClose = () => {
} }) {
  const close = () => {
    if (closeable) {
      onClose();
    }
  };
  const maxWidthClass = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl"
  }[maxWidth];
  return /* @__PURE__ */ jsx(Transition, { show, as: Fragment$1, leave: "duration-200", children: /* @__PURE__ */ jsxs(
    Dialog,
    {
      as: "div",
      id: "modal",
      className: "fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",
      onClose: close,
      children: [
        /* @__PURE__ */ jsx(
          Transition.Child,
          {
            as: Fragment$1,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gray-500/75" })
          }
        ),
        /* @__PURE__ */ jsx(
          Transition.Child,
          {
            as: Fragment$1,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            children: /* @__PURE__ */ jsx(
              Dialog.Panel,
              {
                className: `mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass}`,
                children
              }
            )
          }
        )
      ]
    }
  ) });
}
function SecondaryButton({ type = "button", className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      type,
      className: `inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
function DeleteUserForm({ className = "" }) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef();
  const {
    data,
    setData,
    post: destroy,
    processing,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };
  const deleteUser = (e) => {
    e.preventDefault();
    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset()
    });
  };
  const closeModal = () => {
    setConfirmingUserDeletion(false);
    reset();
  };
  return /* @__PURE__ */ jsxs("section", { className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Delete Account" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain." })
    ] }),
    /* @__PURE__ */ jsx(DangerButton, { onClick: confirmUserDeletion, children: "Delete Account" }),
    /* @__PURE__ */ jsx(Modal, { show: confirmingUserDeletion, onClose: closeModal, children: /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Are you sure you want to delete your account?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password", className: "sr-only" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e) => setData("password", e.target.value),
            className: "mt-1 block w-3/4",
            isFocused: true,
            placeholder: "Password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-end", children: [
        /* @__PURE__ */ jsx(SecondaryButton, { onClick: closeModal, children: "Cancel" }),
        /* @__PURE__ */ jsx(DangerButton, { className: "ms-3", disabled: processing, children: "Delete Account" })
      ] })
    ] }) })
  ] });
}
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DeleteUserForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdatePasswordForm({ className = "" }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();
  const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const updatePassword = (e) => {
    e.preventDefault();
    post(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors2) => {
        if (errors2.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }
        if (errors2.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Update Password" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Ensure your account is using a long, random password to stay secure." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: updatePassword, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "current_password", value: "Current Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "current_password",
            ref: currentPasswordInput,
            value: data.current_password,
            onChange: (e) => setData("current_password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "current-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.current_password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "New Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e) => setData("password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Confirm Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password_confirmation",
            value: data.password_confirmation,
            onChange: (e) => setData("password_confirmation", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Save" }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enter: "transition ease-in-out",
            enterFrom: "opacity-0",
            leave: "transition ease-in-out",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Saved." })
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdatePasswordForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdateProfileInformation({ mustVerifyEmail, status, className = "" }) {
  const user = usePage().props.auth.user;
  const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("profile.update"));
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Profile Information" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Update your account's profile information and email address." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Name" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            className: "mt-1 block w-full",
            value: data.name,
            onChange: (e) => setData("name", e.target.value),
            required: true,
            isFocused: true,
            autoComplete: "name"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            className: "mt-1 block w-full",
            value: data.email,
            onChange: (e) => setData("email", e.target.value),
            required: true,
            autoComplete: "username"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.email })
      ] }),
      mustVerifyEmail && user.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm mt-2 text-gray-800", children: [
          "Your email address is unverified.",
          /* @__PURE__ */ jsx(
            Link,
            {
              href: route("verification.send"),
              method: "post",
              as: "button",
              className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
              children: "Click here to re-send the verification email."
            }
          )
        ] }),
        status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mt-2 font-medium text-sm text-green-600", children: "A new verification link has been sent to your email address." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Save" }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enter: "transition ease-in-out",
            enterFrom: "opacity-0",
            leave: "transition ease-in-out",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Saved." })
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdateProfileInformation
}, Symbol.toStringTag, { value: "Module" }));
function Edit({ auth, mustVerifyEmail, status }) {
  const translations = useSelector((state) => state.translations.translations);
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: translations.profile }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Profile" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
            UpdateProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
function Orders({ auth }) {
  console.log(auth);
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Orders" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "border border-black/10 p-6 rounded-xl min-h-[250px] max-sm:p-5 bg-white overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto table-style-1", children: /* @__PURE__ */ jsxs("table", { className: "table-hover min-w-[600px] mb-4 w-full text-left", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "py-3 px-3 uppercase", children: "Order #" }),
            /* @__PURE__ */ jsx("th", { className: "py-3 px-3 uppercase", children: "Date Purchased" }),
            /* @__PURE__ */ jsx("th", { className: "py-3 px-3 uppercase", children: "Status" }),
            /* @__PURE__ */ jsx("th", { className: "py-3 px-3 uppercase", children: "Total" }),
            /* @__PURE__ */ jsx("th", { className: "py-3 px-3 uppercase text-right", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "py-3 px-3 text-body border-t border-border", children: /* @__PURE__ */ jsx("a", { href: "account-order-details.html", className: "fw-medium", children: "#34VB5540K83" }) }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-3 text-body border-t border-border", children: "May 21, 2024" }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-3 text-body border-t border-border", children: "$358.75" }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-3 text-body border-t border-border", children: /* @__PURE__ */ jsx("span", { className: "py-1 px-2.5 text-white rounded-md uppercase text-center text-xs leading-[1] inline-block font-semibold bg-[#0194d9]  m-0", children: "In Progress" }) }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-3 text-body border-t border-border text-right", children: /* @__PURE__ */ jsx("a", { href: "account-order-details.html", className: "text-[#010fd9] underline p-0", children: "View" }) })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "py-3 px-3 text-body border-t border-border", children: /* @__PURE__ */ jsx("a", { href: "account-order-details.html", className: "fw-medium", children: "#78A643CD409" }) }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-3 text-body border-t border-border", children: "December 09, 2024" }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-3 text-body border-t border-border", children: /* @__PURE__ */ jsx("span", { children: "$760.50" }) }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-3 text-body border-t border-border", children: /* @__PURE__ */ jsx("span", { className: "py-1 px-2.5 text-white rounded-md uppercase text-center text-xs leading-[1] inline-block font-semibold bg-[#d23636]  m-0", children: "Canceled" }) }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-3 text-body border-t border-border text-right", children: /* @__PURE__ */ jsx("a", { href: "account-order-details.html", className: "text-[#010fd9] underline p-0", children: "View" }) })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "py-3 px-3 text-body border-t border-border", children: /* @__PURE__ */ jsx("a", { href: "javascript:void(0);", className: "fw-medium", children: "#112P45A90V2" }) }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-3 text-body border-t border-border", children: "October 15, 2024" }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-3 text-body border-t border-border", children: "$1,264.00" }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-3 text-body border-t border-border", children: /* @__PURE__ */ jsx("span", { className: "py-1 px-2.5 text-white rounded-md uppercase text-center text-xs leading-[1] inline-block font-semibold bg-warning  m-0", children: "Delayed" }) }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-3 text-body border-t border-border text-right", children: /* @__PURE__ */ jsx("a", { href: "account-order-details.html", className: "text-[#010fd9] underline p-0", children: "View" }) })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "py-3 px-3 text-body border-t border-border", children: /* @__PURE__ */ jsx("a", { href: "account-order-details.html", className: "fw-medium", children: "#28BA67U0981" }) }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-3 text-body border-t border-border", children: "July 19, 2024" }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-3 text-body border-t border-border", children: "$198.35" }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-3 text-body border-t border-border", children: /* @__PURE__ */ jsx("span", { className: "py-1 px-2.5 text-white rounded-md uppercase text-center text-xs leading-[1] inline-block font-semibold bg-[#31a56d]  m-0", children: "Delivered" }) }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-3 text-body border-t border-border text-right", children: /* @__PURE__ */ jsx("a", { href: "account-order-details.html", className: "text-[#010fd9] underline p-0", children: "View" }) })
            ] })
          ] })
        ] }) }) }) }) })
      ]
    }
  );
}
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Orders
}, Symbol.toStringTag, { value: "Module" }));
async function fetchData(apiEndpoint, options = {}) {
  try {
    const response = await fetch(apiEndpoint, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        // Add an authorization header if needed
        // 'Authorization': `Bearer ${localStorage.getItem('authToken')}`, 
      },
      ...options
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    throw error;
  }
}
function SalePage({ auth, saleproducts }) {
  const translations = useSelector((state) => state.translations.translations);
  useState(false);
  useState();
  console.log(saleproducts, "saleprs");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { class: "before:absolute before:left-0 before:right-0 before:w-full before:h-full relative min-h-[250px] max-sm:min-h-[230px] bg-cover bg-center z-[2] w-full overlay-black-light before:bg-black before:opacity-40 bg-[url('/storage/banners/1735574772.webp')]", children: /* @__PURE__ */ jsx("div", { class: "container relative z-1 table h-full", children: /* @__PURE__ */ jsxs("div", { class: "text-center py-[90px] max-sm:py-10 table-cell align-middle h-[250px] max-sm:h-[230px]", children: [
      /* @__PURE__ */ jsxs("h1", { class: "mb-2.5 lg:text-4.5xl md:text-3xl sm:text-2.5xl text-2xl text-white", children: [
        " ",
        translations.sales
      ] }),
      /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { class: "text-white", children: [
        /* @__PURE__ */ jsx("li", { class: "mr-[3px] inline-block text-base font-medium", children: /* @__PURE__ */ jsxs(Link, { href: "/", class: "text-white", children: [
          " ",
          translations.home
        ] }) }),
        /* @__PURE__ */ jsx("li", { class: "mr-[3px] pl-2 inline-block text-base font-medium ", children: "/" }),
        /* @__PURE__ */ jsxs("li", { class: "mr-[3px] pl-2 inline-block text-base font-medium ", children: [
          " ",
          translations.sales
        ] })
      ] }) })
    ] }) }) }),
    !saleproducts && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center min-h-[250px]", children: /* @__PURE__ */ jsx("p", { children: "loading ...." }) }),
    auth.user && saleproducts && /* @__PURE__ */ jsx(Products, { products: saleproducts, swiperSpcae: 30, p: "pt-10 px-5" }),
    !auth.user && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center pt-12", children: /* @__PURE__ */ jsx(Link, { href: "/login", className: "bg-black px-5 py-3 text-white", children: translations.login }) })
  ] });
}
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SalePage
}, Symbol.toStringTag, { value: "Module" }));
function Welcome({ banners, keywords, blogs }) {
  const { auth } = usePage().props;
  const [parentCats, setParentCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saleProducts, setSaleProducts] = useState([]);
  const [error, setError] = useState();
  useDispatch();
  usePage().props;
  useEffect(() => {
    const fetchDataFromApi = async () => {
      setLoading(true);
      try {
        const apiEndpoint = "/api/parent-cats";
        const fetchsales = "/api/sale-products";
        const result = await fetchData(apiEndpoint);
        const salesResult = await fetchData(fetchsales);
        setParentCats(result);
        setSaleProducts(salesResult);
        console.log(salesResult, "salesResult");
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    fetchDataFromApi();
  }, []);
  const translations = useSelector((state) => state.translations.translations);
  const title = "home Pgae";
  const description = "notah is ....";
  const image_url = "http://notah.com/logonobg.png";
  const url = "http://notah.com/";
  const breakpointsProducts = {
    320: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: saleProducts.length > 6 ? 7 : saleProducts.length || 1
    }
  };
  const breakpointsDepts = {
    320: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: parentCats.length > 6 ? 7 : parentCats.length || 1
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Home Page" }),
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: image_url }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: url }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "en_US" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: image_url }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: url })
    ] }),
    error && error,
    /* @__PURE__ */ jsx(
      Swiper,
      {
        className: "owl-theme",
        dir: "rtl",
        pagination: {
          type: "progressbar"
          // Enables the progress bar
        },
        modules: [Pagination],
        children: banners && banners.map((banner) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("div", { className: "item slider", children: /* @__PURE__ */ jsx("div", { className: "relative text-center", children: /* @__PURE__ */ jsxs(Link, { href: banner == null ? void 0 : banner.url, children: [
          /* @__PURE__ */ jsx("img", { loading: "lazy", src: `/storage/banners/${banner.full}`, alt: "Slide 1", className: "w-full h-auto" }),
          /* @__PURE__ */ jsxs("div", { className: "text-white z-10 absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 ", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: banner == null ? void 0 : banner.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm md:text-lg mt-2", children: banner == null ? void 0 : banner.description })
          ] })
        ] }) }) }) }, banner.id))
      }
    ),
    loading && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center min-h-[250px]", children: /* @__PURE__ */ jsx("p", { children: "loading ...." }) }),
    auth.user && !loading && /* @__PURE__ */ jsx(Products, { products: saleProducts, title: translations == null ? void 0 : translations.sales, swiperSpcae: 30, breakPoints: breakpointsProducts, swipe: true, p: "pt-10 px-5" }),
    loading ? /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center min-h-[250px]", children: /* @__PURE__ */ jsx("p", { children: "loading ...." }) }) : /* @__PURE__ */ jsx(Categories, { cats: parentCats, breakPoints: breakpointsDepts, swiperSpcae: 30, title: translations.depts }),
    /* @__PURE__ */ jsx("style", { children: `
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
                 .item .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    background-color: rgba(0, 0, 0, .3);
                }
               
                .item.slider:before {
                    content: "";
                    position: absolute;
                    background: #000;
                    width: 100%;
                    height: 100%;
                    opacity: .3;
                    z-index: 1;
                }
                .item.slider{
                    position : relative
                }
              
                .owl-dots {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 5px; /* Space between dots */
                    margin-top:25px
                }
                
                .owl-dot span {
                    display: block;
                    width: 20px !important;
                    height: 4px !important; /* Height for all dots */
                    background-color: #ccc; /* Default color for inactive dots */
                    border-radius: 2px !important; /* Optional: rounding for line ends */
                    transition: all 0.3s ease !important; /* Smooth transition for width and color */
                    margin: 0  !important;
                }
                
                .owl-dot.active span {
                    width: 40px !important; /* Width for the active dot */
                    background-color: #333; /* Color for the active dot */
                }
                .owl-nav {
                    position: absolute;
                    top: 50%; /* Center vertically */
                    width: 100%; /* Span the slider's width */
                    display: flex;
                    justify-content: space-between; /* Place arrows on the far left and right */
                    transform: translateY(-50%); /* Adjust for centering */
                    pointer-events: none; /* Prevent overlay issues */
                }
                
                .owl-nav .owl-prev,
                .owl-nav .owl-next {
                    pointer-events: all; /* Enable clicking */
                    width: 40px;
                    height: 40px;
                    background-color:rgb(113 0 10 / 50%) !important; /* Semi-transparent background */
                    border-radius: 50% !important; /* Circular shape */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white !important; /* Arrow color */
                    font-size: 20px !important; /* Arrow size */
                    opacity: 0.8; /* Slight transparency */
                    transition: all 0.3s ease;
                }
                
                .owl-nav .owl-prev:hover,
                .owl-nav .owl-next:hover {
                    background-color:rgb(113 0 10 / 70%) !important  !important; /* Darker on hover */
                    opacity: 1; /* Fully opaque */
                }
                
                .owl-nav .owl-prev {
                    position: absolute;
                    left: 0; /* Move left arrow slightly out of the slider */
                }
                
                .owl-nav .owl-next {
                    position: absolute;
                    right: 0; /* Move right arrow slightly out of the slider */
                }
                
                /* Use Unicode thin arrow icons */
                .owl-nav .owl-prev::before {
                    content: '\\2190'; /* Left arrow symbol */
                }
                
                .owl-nav .owl-next::before {
                    content: '\\2192'; /* Right arrow symbol */
                }
                .owl-nav span{
                    display:none
                }
            ` })
  ] });
}
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Welcome
}, Symbol.toStringTag, { value: "Module" }));
function NavSearch() {
  return /* @__PURE__ */ jsx("div", { className: "bg-white h-400 h-[160px] px-[75px] w-full", children: /* @__PURE__ */ jsx("div", { class: "mb-[45px] max-lg:mb-10 widget_search", children: /* @__PURE__ */ jsx("div", { class: "mb-10", children: /* @__PURE__ */ jsxs("div", { class: "relative flex flex-wrap items-stretch w-full mb-5", children: [
    /* @__PURE__ */ jsx("input", { name: "dzSearch", required: "required", type: "search", class: "bg-light border border-secondary flex-auto mt-10 outline-none px-4 py-3 rounded-xl text-2sm w-[1%]", placeholder: "Search Product" }),
    /* @__PURE__ */ jsx("div", { class: "absolute left-0 ml-12 mt-1 top-1/2 z-9", children: /* @__PURE__ */ jsx("button", { name: "submit", value: "Submit", type: "submit", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }) }) }) })
  ] }) }) }) });
}
const CartSidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const translations = useSelector((state) => state.translations.translations);
  const dispatch2 = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalQty = useSelector((state) => state.cart.totalQty);
  const copyCart = { ...cart };
  const cartArray = Object.values(copyCart);
  useEffect(
    () => {
      dispatch2(fetchCart$1());
    },
    [cartArray.length]
  );
  useEffect(() => {
    const unlisten = Inertia.on("navigate", (event) => {
      onClose();
    });
    return () => {
      unlisten();
    };
  }, [onClose]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300`,
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 fixed inset-y-0 left-0 w-96  z-50 shadow-lg overflow-y-auto px-4 text-white", children: [
      /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap justify-center border-b border-[#D7D7D7]", id: "myTab", role: "tablist", children: /* @__PURE__ */ jsx("li", { className: "nav-item", role: "presentation", children: /* @__PURE__ */ jsxs("button", { className: "w-full py-2.5 px-5 text-start font-medium font-Lufga border-b-2 border-transparent mb-[-1px] !border-secondary", id: "shoppingcart", children: [
        "سلة التسوق",
        /* @__PURE__ */ jsx("span", { className: "text-xs inline-flex items-center justify-center size-6 font-bold rounded-full ml-1.1 px-0.5 bg-secondary text-white", children: totalQty && totalQty })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-[calc(100vh_-_80px)]", children: [
        /* @__PURE__ */ jsx("div", { className: "h-full max-h-80 overflow-y-auto", children: /* @__PURE__ */ jsx("ul", { children: cartArray.length > 0 && (cartArray == null ? void 0 : cartArray.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("div", { className: "py-5 border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: "size-20 rounded-3xl relative overflow-hidden ml-4", children: /* @__PURE__ */ jsx("img", { src: "/product.jpg", alt: "", className: "w-full" }) }),
          /* @__PURE__ */ jsxs("div", { className: "ml-5 flex-[1]", children: [
            /* @__PURE__ */ jsx("h6", { className: "mb-2 font-medium", children: /* @__PURE__ */ jsxs(Link, { href: `/product/${item.associatedModel.slug}`, children: [
              " ",
              item.name
            ] }) }),
            item.attributes.color !== "null" && /* @__PURE__ */ jsxs("h6", { className: "mb-2 font-medium", children: [
              " ",
              item.attributes.color
            ] }),
            /* @__PURE__ */ jsxs("h6", { className: "mb-2 font-medium", children: [
              "X ",
              item.quantity
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxs("h6", { className: "font-medium", children: [
              " ",
              item.price,
              " EGP"
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "cursor-pointer size-7 flex items-center", onClick: () => dispatch2(removeFromCartItem(item.id)), children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }) }) })
        ] }) }) }, item.id))) }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-auto", children: [
          /* @__PURE__ */ jsx(Link, { href: "/checkout", className: "btn py-3 px-7.5 max-sm:px-6 text-base max-sm:text-sm inline-block font-medium font-Lufga leading-[1.2] border border-secondary rounded-xl duration-700 hover:bg-secondary hover:text-white relative overflow-hidden text-center w-full mb-5", children: translations.checkout }),
          /* @__PURE__ */ jsxs(Link, { href: "/cart", className: "btn py-3 px-7.5 max-sm:px-6 text-base max-sm:text-sm font-Lufga inline-block font-medium leading-[1.2] border border-secondary bg-secondary text-white rounded-xl duration-700 relative overflow-hidden text-center w-full", children: [
            translations.viewcart,
            " "
          ] })
        ] })
      ] }) })
    ] })
  ] });
};
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const translations = useSelector((state) => state.translations.translations);
  const dispatch2 = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  useSelector((state) => state.cart.loading);
  const totalQty = useSelector((state) => state.cart.totalQty);
  useSelector((state) => state.cart.subTotal);
  useSelector((state) => state.cart.total);
  useSelector((state) => state.cart.error);
  const copyCart = { ...cart };
  const cartArray = Object.values(copyCart);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { auth } = usePage().props;
  const profileRoute = auth.guard === "seller" ? route("seller.profile.edit") : route("company.profile.edit");
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  useEffect(
    () => {
      dispatch2(fetchCart$1());
    },
    [cartArray.length]
  );
  useEffect(() => {
    const unlisten = Inertia.on("navigate", (event) => {
      setDropdownOpen(false);
    });
    return () => {
      unlisten();
    };
  }, [toggleDropdown]);
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 bg-transparent  top-0 left-0 w-full z-50", children: [
    /* @__PURE__ */ jsx("div", { className: " bg-white shadow-sm border-b border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex items-center justify-between py-4 px-4 lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-shrink-0 items-center relative w w-48", children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx("img", { src: "/logo.png", alt: "logo", className: "h-12 w-auto object-contain" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:hidden flex items-center gap-x-6", children: [
        /* @__PURE__ */ jsxs(Link, { href: "/cart", className: "cart flex items-center justify-center w-10 h-10 text-gray-800 hover:text-secondary", children: [
          /* @__PURE__ */ jsx("span", { className: "text-red-600", children: totalQty && totalQty }),
          /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              className: "w-6 h-6",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => setIsSearchOpen(!isSearchOpen), className: "seaarch flex items-center justify-center w-10 h-10 text-gray-800 hover:text-secondary", children: isSearchOpen ? /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }) }) : /* @__PURE__ */ jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "w-6 h-6",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              }
            )
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsMenuOpen(!isMenuOpen),
          className: "lg:hidden flex items-center justify-center w-10 h-10 bg-secondary rounded-full",
          type: "button",
          children: isMenuOpen ? /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }) }) : /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 9h16.5m-16.5 6.75h16.5" }) })
        }
      ),
      isMenuOpen && /* @__PURE__ */ jsx("div", { className: "absolute top-16 left-0 w-full bg-white shadow-md z-40", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col items-center py-4 space-y-4", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/", className: "text-gray-800 hover:text-secondary", children: (translations == null ? void 0 : translations.home) || "Home" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: route("cats.show"), className: "text-gray-800 hover:text-secondary", children: (translations == null ? void 0 : translations.depts) || "Departments" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: route("cats.show"), className: "text-gray-800 hover:text-secondary", children: (translations == null ? void 0 : translations.sales) || "Departments" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "shop-my-account.html", className: "text-gray-800 hover:text-secondary", children: (translations == null ? void 0 : translations.loginReg) || "Loading" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "hidden lg:flex flex-grow justify-start", children: /* @__PURE__ */ jsxs("ul", { className: "flex gap-x-6 text-gray-800 font-medium", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/", className: "hover:text-secondary", children: (translations == null ? void 0 : translations.home) || "Loading..." }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: route("cats.show"), className: "hover:text-secondary", children: (translations == null ? void 0 : translations.depts) || "Loading..." }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: route("sales.show"), className: "hover:text-secondary", children: (translations == null ? void 0 : translations.sales) || "Loading..." }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "gap-4 hidden lg:flex ml-12 relative", children: [
        auth.user ? /* @__PURE__ */ jsx(
          Link,
          {
            onClick: toggleDropdown,
            href: profileRoute,
            className: "text-gray-800 border-b border-gray-400 pb-1 hover:border-secondary",
            children: translations.profile || "Loading..."
          }
        ) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              onClick: toggleDropdown,
              className: "cursor-pointer text-gray-800 border-b border-gray-400 pb-1 hover:border-secondary",
              children: translations.register || "Loading..."
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/login",
              className: "cursor-pointer text-gray-800 border-b border-gray-400 pb-1 hover:border-secondary",
              children: translations.login || "Loading..."
            }
          )
        ] }),
        dropdownOpen && !auth.user && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300`,
              onClick: toggleDropdown
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "z-40 absolute top-1/2 right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20",
              children: [
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/seller/register",
                    className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                    children: translations.mktba
                  }
                ),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/company/register",
                    className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                    children: translations.co
                  }
                )
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-x-6", children: [
        /* @__PURE__ */ jsxs("button", { onClick: () => setIsCartOpen(true), className: "cart flex items-center justify-center w-10 h-10 text-gray-800 hover:text-secondary", children: [
          /* @__PURE__ */ jsx("span", { className: "text-red-600", children: totalQty && totalQty }),
          cartOpen ? /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }) }) : /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              className: "w-6 h-6",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => setIsSearchOpen(!isSearchOpen), className: "seaarch flex items-center justify-center w-10 h-10 text-gray-800 hover:text-secondary", children: isSearchOpen ? /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }) }) : /* @__PURE__ */ jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "w-6 h-6",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              }
            )
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CartSidebar, { isOpen: isCartOpen, onClose: () => setIsCartOpen(false) }),
    cartOpen && /* @__PURE__ */ jsxs("div", { className: "absolute bg-gray-800 flex-grow left-0 max-sm:px-3.6 max-sm:py-13.5 overflow-y-auto px-[75px] py-14.5  text-white", children: [
      /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap justify-center border-b border-[#D7D7D7]", id: "myTab", role: "tablist", children: /* @__PURE__ */ jsx("li", { className: "nav-item", role: "presentation", children: /* @__PURE__ */ jsxs("button", { className: "w-full py-2.5 px-5 text-start font-medium font-Lufga border-b-2 border-transparent mb-[-1px] !border-secondary", id: "shoppingcart", children: [
        "سلة التسوق",
        /* @__PURE__ */ jsx("span", { className: "text-xs inline-flex items-center justify-center size-6 font-bold rounded-full ml-1.1 px-0.5 bg-secondary text-white", children: totalQty && totalQty })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-[calc(100vh_-_190px)]", children: [
        /* @__PURE__ */ jsx("div", { className: "h-full max-h-80 overflow-y-auto", children: /* @__PURE__ */ jsx("ul", { children: cartArray.length > 0 && (cartArray == null ? void 0 : cartArray.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("div", { className: "py-5 border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: "size-20 rounded-3xl relative overflow-hidden ml-4", children: /* @__PURE__ */ jsx("img", { src: "/product.jpg", alt: "", className: "w-full" }) }),
          /* @__PURE__ */ jsxs("div", { className: "ml-5 flex-[1]", children: [
            /* @__PURE__ */ jsx("h6", { className: "mb-2 font-medium", children: /* @__PURE__ */ jsxs(Link, { href: `/product/${item.associatedModel.slug}`, children: [
              " ",
              item.name
            ] }) }),
            item.attributes.color !== "null" && /* @__PURE__ */ jsxs("h6", { className: "mb-2 font-medium", children: [
              " ",
              item.attributes.color
            ] }),
            /* @__PURE__ */ jsxs("h6", { className: "mb-2 font-medium", children: [
              "X ",
              item.quantity
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxs("h6", { className: "font-medium", children: [
              " ",
              item.price,
              " EGP"
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "cursor-pointer size-7 flex items-center", onClick: () => dispatch2(removeFromCartItem(item.id)), children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }) }) })
        ] }) }) }, item.id))) }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-auto", children: [
          /* @__PURE__ */ jsx(Link, { href: "/checkout", className: "btn py-3 px-7.5 max-sm:px-6 text-base max-sm:text-sm inline-block font-medium font-Lufga leading-[1.2] border border-secondary rounded-xl duration-700 hover:bg-secondary hover:text-white relative overflow-hidden text-center w-full mb-5", children: translations.checkout }),
          /* @__PURE__ */ jsxs(Link, { href: "/cart", className: "btn py-3 px-7.5 max-sm:px-6 text-base max-sm:text-sm font-Lufga inline-block font-medium leading-[1.2] border border-secondary bg-secondary text-white rounded-xl duration-700 relative overflow-hidden text-center w-full", children: [
            translations.viewcart,
            " "
          ] })
        ] })
      ] }) })
    ] }),
    isSearchOpen && /* @__PURE__ */ jsx(NavSearch, {})
  ] });
}
const Footer = () => {
  const translations = useSelector((state) => state.translations.translations);
  const { configs, cats } = usePage().props;
  return /* @__PURE__ */ jsx("footer", { className: "mx-auto max-w-7xl px-6 lg:px-8 mt-24 w-full sm:mt-32 lg:mt-40 border-t border-neutral-950/10 pt-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-2xl lg:max-w-none", children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { role: "list", className: "grid grid-cols-2 gap-8 ", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-sm font-semibold tracking-wider text-neutral-950", children: translations.depts }),
          /* @__PURE__ */ jsxs("ul", { role: "list", className: "mt-4 text-sm text-neutral-700", children: [
            cats && cats.map((cat) => /* @__PURE__ */ jsx("li", { className: "mt-4", children: /* @__PURE__ */ jsx(Link, { href: "", className: "transition hover:text-neutral-950", children: cat.name }) }, cat.id)),
            cats && cats.length > 5 && /* @__PURE__ */ jsx("li", { className: "mt-4", children: /* @__PURE__ */ jsx(Link, { href: route("cats.show"), className: "transition hover:text-neutral-950", children: translations.seeall }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-sm font-semibold tracking-wider text-neutral-950", children: translations.followus }),
          /* @__PURE__ */ jsxs("ul", { role: "list", className: "mt-4 text-sm text-neutral-700", children: [
            /* @__PURE__ */ jsx("li", { className: "mt-4", children: /* @__PURE__ */ jsx("a", { target: "_blank", rel: "no-follow", className: "transition hover:text-neutral-950", href: configs && configs.social_facebook, children: /* @__PURE__ */ jsx("svg", { stroke: "currentColor", fill: "currentColor", "stroke-width": "0", viewBox: "0 0 320 512", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" }) }) }) }),
            /* @__PURE__ */ jsx("li", { className: "mt-4", children: /* @__PURE__ */ jsx("a", { target: "_blank", rel: "no-follow", className: "transition hover:text-neutral-950", href: configs && configs.social_twitter, children: "X" }) }),
            /* @__PURE__ */ jsx("li", { className: "mt-4", children: /* @__PURE__ */ jsx("a", { target: "_blank", rel: "no-follow", className: "transition hover:text-neutral-950", href: configs && configs.social_linkedin, children: "LinkedIn" }) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex lg:justify-end", children: /* @__PURE__ */ jsxs("form", { className: "max-w-sm", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-sm font-semibold tracking-wider text-neutral-950", children: "Sign up for our newsletter" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-neutral-700", children: "Subscribe to get the latest design news, articles, resources and inspiration." }),
        /* @__PURE__ */ jsxs("div", { className: "relative mt-6", children: [
          /* @__PURE__ */ jsx("input", { placeholder: "Email address", autoComplete: "email", "aria-label": "Email address", className: "block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5", type: "email" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-y-1 right-1 flex justify-end", children: /* @__PURE__ */ jsx("button", { type: "submit", "aria-label": "Submit", className: "flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 16 6", "aria-hidden": "true", className: "w-4", children: /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd", d: "M16 3 10 .5v2H0v1h10v2L16 3Z" }) }) }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12", children: [
      /* @__PURE__ */ jsx(Link, { "aria-label": "Home", href: "/", children: /* @__PURE__ */ jsx("img", { src: "/logo.png", style: { maxWidth: 100 }, loading: "lazy", alt: " Logo" }) }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-neutral-700", children: [
        "© ",
        configs.site_name,
        ". 2025"
      ] })
    ] })
  ] }) }) });
};
const translationsSlice = createSlice({
  name: "translations",
  initialState: {
    translations: {},
    currentLanguage: "ar"
    // Default to Arabic
  },
  reducers: {
    setTranslations: (state, action) => {
      state.translations = action.payload;
      console.log("translations", action.payload);
    },
    changeLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    }
  }
});
const { setTranslations, changeLanguage } = translationsSlice.actions;
translationsSlice.reducer;
const Toaste = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      ToastContainer,
      {
        position: "top-right",
        autoClose: 5e3,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        theme: "light"
      }
    ),
    /* @__PURE__ */ jsx(ToastContainer, {})
  ] });
};
const Layout = ({ children }) => {
  const dispatch2 = useDispatch();
  useEffect(() => {
    fetch("/translations").then((response) => response.json()).then((data) => {
      dispatch2(setTranslations(data));
    }).catch((error) => console.error("Error fetching translations:", error));
  }, [dispatch2]);
  const { products } = usePage().props;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsx(Toaste, {}),
    /* @__PURE__ */ jsx(Navbar, { products }),
    /* @__PURE__ */ jsx("main", { className: "flex-grow", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
createServer(
  (page) => createInertiaApp({
    page,
    // Provide the page from the SSR server
    render: ReactDOMServer.renderToString,
    // Use React's SSR method
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/About.jsx": __vite_glob_0_0, "./Pages/ApprovalNotice.jsx": __vite_glob_0_1, "./Pages/Auth/ConfirmPassword.jsx": __vite_glob_0_2, "./Pages/Auth/ForgotPassword.jsx": __vite_glob_0_3, "./Pages/Auth/Login.jsx": __vite_glob_0_4, "./Pages/Auth/Register.jsx": __vite_glob_0_5, "./Pages/Auth/ResetPassword.jsx": __vite_glob_0_6, "./Pages/Auth/Seller/Register.jsx": __vite_glob_0_7, "./Pages/Auth/VerifyEmail.jsx": __vite_glob_0_8, "./Pages/Blogs/BlogPost.jsx": __vite_glob_0_9, "./Pages/Blogs/Blogs.jsx": __vite_glob_0_10, "./Pages/Blogs/Researches.jsx": __vite_glob_0_11, "./Pages/Cart.jsx": __vite_glob_0_12, "./Pages/CategoriesPage.jsx": __vite_glob_0_13, "./Pages/Category.jsx": __vite_glob_0_14, "./Pages/CheckoutPage.jsx": __vite_glob_0_15, "./Pages/Contact.jsx": __vite_glob_0_16, "./Pages/Dashboard.jsx": __vite_glob_0_17, "./Pages/Dashboards/Seller.jsx": __vite_glob_0_18, "./Pages/Product.jsx": __vite_glob_0_19, "./Pages/Profile/Edit.jsx": __vite_glob_0_20, "./Pages/Profile/Orders.jsx": __vite_glob_0_21, "./Pages/Profile/Partials/DeleteUserForm.jsx": __vite_glob_0_22, "./Pages/Profile/Partials/UpdatePasswordForm.jsx": __vite_glob_0_23, "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": __vite_glob_0_24, "./Pages/SalePage.jsx": __vite_glob_0_25, "./Pages/Welcome.jsx": __vite_glob_0_26 });
      const Page = pages[`./Pages/${name}.jsx`];
      Page.default.layout = Page.default.layout || ((page2) => /* @__PURE__ */ jsx(Layout, { children: page2 }));
      return Page;
    },
    setup: ({ App, props }) => /* @__PURE__ */ jsx(HelmetProvider, { children: /* @__PURE__ */ jsx(App, { ...props }) })
  })
);
