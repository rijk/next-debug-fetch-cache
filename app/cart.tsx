import { cookies } from "next/headers";

export default async function Cart() {
  const cartId = cookies().get("cartId")?.value;
  return <div>Cart {cartId}</div>;
}
