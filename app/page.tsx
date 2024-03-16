import { CACHE_BUSTER } from "./constants";

type Props = {
  params: {
    locale: string;
  };
};

export default async function Page({ params }: Props) {
  return <main>Home (r={CACHE_BUSTER})</main>;
}
