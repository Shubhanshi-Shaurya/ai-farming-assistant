// export async function predictBreed(
//   file,
//   apiBaseUrl
// ) {
//   const formData = new FormData();

//   formData.append("image", file);

//   const response = await fetch(
//     `${apiBaseUrl}/cattle_predict`,
//     {
//       method: "POST",
//       body: formData
//     }
//   );

//   if (!response.ok) {
//     throw new Error(
//       "Prediction failed"
//     );
//   }

//   return await response.json();
// }

export async function predictBreed(file, apiBaseUrl) {

    const formData = new FormData();

    formData.append("image", file);

    console.log("Calling URL:", `${apiBaseUrl}/cattle_predict`);

    const response = await fetch(
        `${apiBaseUrl}/cattle_predict`,
        {
            method: "POST",
            body: formData
        }
    );


    const text = await response.text();

    console.log("Status:", response.status);
    console.log("Backend response:", text);


    if (!response.ok) {
        throw new Error(text || "Prediction failed");
    }


    return JSON.parse(text);
}