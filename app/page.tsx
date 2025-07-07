import Link from "next/link";
import { practices } from "./src/api/get-all-practices";

export default function Index() {
  return (
    <>
      {practices.map((practice) => (
      <Link 
        aria-label={`Open practice details for ${practice.name}`}
        key={practice.id}
        href={`/practice/${practice.id}`}>
        <h1>{practice.name}</h1>
      </Link>
      ))}
    </>
  );
}
