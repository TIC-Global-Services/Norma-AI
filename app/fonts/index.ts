import localFont from "next/font/local";

export const Aeonik = localFont({
    src:[
        {
            path: './Aeonik-Regular.ttf',
            weight: "400",
            style: "normal",
        }
    ],
    variable:"--font-aeonik",
    display:"swap"
})