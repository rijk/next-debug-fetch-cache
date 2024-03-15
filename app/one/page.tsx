export default async function Page() {
  await fetch("https://postman-echo.com/delay/5");

  return <main>Page one (generic 5s fetch)</main>;
}
