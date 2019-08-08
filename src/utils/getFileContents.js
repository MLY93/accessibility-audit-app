export const handleFileUpload = event => {
  return new Promise(resolve => {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onload = event => {
      const data = JSON.parse(event.target.result);
      resolve(data);
    };
    reader.readAsText(file);
  });
};
