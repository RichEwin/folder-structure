import { getPracticeById } from "@/app/src/api/get-practice-by-id/get-practice-by-id";
import { getPracticeByIdParser } from "@/app/src/api/get-practice-by-id/get-practice-by-id.parser";

type IndexProps = {
  params: { practiceId: string };
}

export default async function Index({ params }: IndexProps) {
  const { practiceId } = await params;

  const response = await getPracticeById(practiceId)
  const { patientCount, practiceDescription, practiceName,} = getPracticeByIdParser(response)

  return (
    <div>
      <h1>{practiceName}</h1>
      <p>{practiceDescription}</p>
      <p>{patientCount}</p>
    </div>
  );
}
