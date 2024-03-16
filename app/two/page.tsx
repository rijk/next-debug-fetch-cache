import { CACHE_BUSTER } from "@/app/constants";
import { draftMode } from "next/headers";

type Props = {
  params: {
    locale: string;
  };
};

export default async function Page({ params }: Props) {
  const preview = draftMode().isEnabled;
  await fetch(`https://postman-echo.com/delay/5?r=${CACHE_BUSTER}`);

  return (
    <main>
      Page two (generic 5s fetch) {preview ? "Preview" : ""} {params.locale}
    </main>
  );
}
