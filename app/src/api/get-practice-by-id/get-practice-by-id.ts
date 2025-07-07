export async function getPracticeById(practiceId: string) {
    try {
        const response = await fetch(`https://api.qa.mymojohealth.com/api/v1/ehr/practices/${practiceId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${"oHUIOkMyZ6EyPvq7zSwEoFF9YDAH0RD5gUfL7LX8Rk"}`
            }
        });
        const results = await response.json()
        return results
    } catch (error: any) {
        console.warn(error.message)
    }
}