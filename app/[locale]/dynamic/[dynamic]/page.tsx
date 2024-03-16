import { unstable_setRequestLocale } from "next-intl/server";
import { draftMode } from "next/headers";

export const runtime = "edge";

type Params = {
  dynamic: string;
  locale: string;
};

type Props = {
  params: Params;
};

export async function generateStaticParams({
  params: { locale },
}: Props): Promise<Params[]> {
  return [
    { locale, dynamic: "three" },
    { locale, dynamic: "four" },
  ];
}

export default async function Page({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const preview = draftMode().isEnabled;

  console.log("Rendering page " + params.dynamic);

  await fetch(
    `https://postman-echo.com/delay/5?r=1&from=${params.dynamic}&locale=${params.locale}`
  );

  return (
    <main>
      Page {params.dynamic} (custom 5s fetch) {preview ? "Preview" : ""}
    </main>
  );
}
