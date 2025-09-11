import localFont from "next/font/local";

export const SuisseIntl = localFont({
  src: [
    {
      path: "../../public/assets/SuisseIntl-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/SuisseIntl-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/SuisseIntl-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/SuisseIntl-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-suisse-intl",
});
