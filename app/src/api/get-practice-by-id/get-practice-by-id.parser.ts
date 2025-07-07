type PracticeByIdParser = {
    ehr_practice_name: string;
    ehr_practice_description: string;
    patients_count: string;
};


type PracticeByIdParserReturnData = {
    patientCount: string;
    practiceDescription: string;
    practiceName: string;
};


export function getPracticeByIdParser(response: PracticeByIdParser): PracticeByIdParserReturnData {
    const { ehr_practice_name, ehr_practice_description, patients_count } = response;
    
    return {
        patientCount: `Total Patients: ${patients_count}`,
        practiceDescription: ehr_practice_description,
        practiceName: ehr_practice_name,
    };
}