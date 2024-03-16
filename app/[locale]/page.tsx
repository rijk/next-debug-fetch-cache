import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { CACHE_BUSTER } from "../constants";

type Props = {
  params: {
    locale: string;
  };
};

export default async function Page({ params }: Props) {
  unstable_setRequestLocale(params.locale);

  // Enabling this triggers a "Error: Expected a suspended thenable. This is a bug in React. Please file an issue."
  // const t = useTranslations("test");

  return (
    <main>
      Home (r={CACHE_BUSTER}){/* <h1 className="font-bold">{t("title")}</h1> */}
    </main>
  );
}
