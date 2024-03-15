import { draftMode } from "next/headers";

export default async function Page() {
  const preview = draftMode().isEnabled;
  await fetch("https://postman-echo.com/delay/5");

  return <main>Page two (generic 5s fetch) {preview ? "Preview" : ""}</main>;
}
