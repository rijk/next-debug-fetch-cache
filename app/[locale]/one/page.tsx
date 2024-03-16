import { unstable_setRequestLocale } from "next-intl/server";

export const runtime = "edge";

type Props = {
  params: {
    locale: string;
  };
};

export default async function Page({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  await fetch("https://postman-echo.com/delay/5?r=1&locale=" + params.locale);

  return <main>Page one (generic 5s fetch)</main>;
}
