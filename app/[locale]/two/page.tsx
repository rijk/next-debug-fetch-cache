import { CACHE_BUSTER } from "@/app/constants";
import { unstable_setRequestLocale } from "next-intl/server";
import { draftMode } from "next/headers";

type Props = {
  params: {
    locale: string;
  };
};

export default async function Page({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const preview = draftMode().isEnabled;
  await fetch(
    `https://postman-echo.com/delay/5?r=${CACHE_BUSTER}&locale=${params.locale}`
  );

  return (
    <main>
      Page two (generic 5s fetch) {preview ? "Preview" : ""} {params.locale}
    </main>
  );
}
