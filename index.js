module.exports.handler = async (event) => {
  console.log("Function started executing");
  console.log("Event: ", event);
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Your function executed successfully!",
       
      },
      null,
      2
    ),
  };
  console.log("Response: ", response);
  console.log("Function finished executing");
  return response;
};