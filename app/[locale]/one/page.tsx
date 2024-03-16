import { CACHE_BUSTER } from "@/app/constants";
import { unstable_setRequestLocale } from "next-intl/server";

export const runtime = "edge";

type Props = {
  params: {
    locale: string;
  };
};

export default async function Page({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  await fetch(
    `https://postman-echo.com/delay/5?r=${CACHE_BUSTER}&locale=${params.locale}`
  );

  return <main>Page one (generic 5s fetch)</main>;
}
