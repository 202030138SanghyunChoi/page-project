import { useRouter } from "next/router";

export default function Email() {
  const router = useRouter();
  const { email, hobby } = router.query;
  console.log(router);

  return (
    <>
      <h1>Hello, this is Email Page.</h1>
      <h1>이메일 : {email}</h1>
      <h1>취미 : {hobby}</h1>
    </>
  );
}
