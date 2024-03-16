import { CACHE_BUSTER } from "@/app/constants";
import { draftMode } from "next/headers";

type Params = {
  dynamic: string;
};

type Props = {
  params: Params;
};

export async function generateStaticParams(): Promise<Params[]> {
  return [{ dynamic: "three" }, { dynamic: "four" }];
}

export default async function Page({ params }: Props) {
  const preview = draftMode().isEnabled;

  console.log("Rendering page " + params.dynamic);

  await fetch(
    `https://postman-echo.com/delay/5?r=${CACHE_BUSTER}&from=${params.dynamic}`
  );

  return (
    <main>
      Page {params.dynamic} (custom 5s fetch) {preview ? "Preview" : ""}
    </main>
  );
}
