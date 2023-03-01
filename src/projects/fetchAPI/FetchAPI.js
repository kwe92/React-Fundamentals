async function main() {
  const dictionaryEndpoint =
    "https://www.dictionaryapi.com/api/v3/references/collegiate/json/hello?key=275ef94f-de8e-4d13-b34c-ad1200c41657";
  const aniChanEndpoint = "https://animechan.vercel.app/api/random";
  const response = await fetch(dictionaryEndpoint);
  console.log(
    "Response",
    response.json().then((reponse) => {
      //   console.log(reponse);
      return reponse;
    })
  );
}

main();
