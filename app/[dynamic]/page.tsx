type Props = {
  params: {
    dynamic: string;
  };
};

export default async function Page({ params }: Props) {
  await fetch(`https://postman-echo.com/delay/5?from=${params.dynamic}`);

  return <main>Page {params.dynamic} (custom 5s fetch)</main>;
}
