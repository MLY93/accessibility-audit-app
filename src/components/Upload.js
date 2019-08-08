const saveFile = () => {
  // fire processUpload when the user uploads a file.
  document
    .querySelector("#fileUpload")
    .addEventListener("change", handleFileUpload, false);

  // Setup file reading
  const reader = new FileReader();
  reader.onload = handleFileRead;

  const handleFileUpload = event => {
    const file = event.target.files[0];
    reader.readAsText(file); // fires onload when done.
  };

  const handleFileRead = event => {
    const save = JSON.parse(event.target.result);
    console.log(save); // {hp: 32, maxHp: 50, mp: 11, maxMp: 23}
  };
};
