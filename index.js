navigator.mediaDevices
  .getUserMedia({
    video: {
      width: 1280,
      height: 720,
    },
    frameRate: 1,
  })
  .then((stream) => {
    document.getElementById("vid").srcObject = stream;
  });
