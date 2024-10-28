import { useEffect } from "react";
import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.css";
import "@/styles/locomotive-scroll.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/service-worker.js").then(
          function (registration) {
            console.log("Service Worker registration successful");
          },
          function (err) {
            console.log("Service Worker registration failed", err);
          },
        );
      });
    }
  }, []);

  return (
    <div lang={"en"} className={dmSans.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
