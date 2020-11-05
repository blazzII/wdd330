// function parameters
// url = endpoint URL
async function getJSONdata(url) {
  // 👷‍♂️ need to add validation with ok response
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
}


function errorHandler(err){
  // put this in a standard abs. display in app.
  console.log(`Error! - ${err}`);
}

export getJSONdata;