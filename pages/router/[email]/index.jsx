import { useRouter } from "next/router";

export default function Email() {
  const router = useRouter();
  const { email, id, name } = router.query;
  console.log(router);

  return (
    <>
      <h1>Hello, this is Email Page.</h1>
      <h1>이메일 : {email}</h1>
      <h1>아이디 : {id}</h1>
      <h1>이름 : {name}</h1>
    </>
  );
}
