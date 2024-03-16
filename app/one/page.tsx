import { CACHE_BUSTER } from "@/app/constants";

export const runtime = "edge";

type Props = {
  params: {
    locale: string;
  };
};

export default async function Page({ params }: Props) {
  await fetch(`https://postman-echo.com/delay/5?r=${CACHE_BUSTER}`);

  return <main>Page one (generic 5s fetch)</main>;
}
