
const colors = ["#AEEFFF", "#FFB280", "#FF9ACD"];

function headerInstallButton() {
  const installButton = document.getElementById("header-install-button");
  const containerWidth = installButton.offsetWidth;
  const containerHeight = installButton.offsetHeight;

  for (let i = 0; i < 3; i++) {
    const circleDiv = document.createElement("div");
    circleDiv.classList.add("header-install-button-circle")
    installButton.appendChild(circleDiv);

    const left = Math.random() * containerWidth;
    const top = Math.random() * containerHeight;

    circleDiv.style.left = `${left - 25}px`;
    circleDiv.style.top = `${top - 25}px`;

    circleDiv.style.backgroundColor = colors[i];


    setInterval(() => {
      
      const left = Math.random() * containerWidth;
      const top = Math.random() * containerHeight;

      circleDiv.style.left = `${left - 25}px`;
      circleDiv.style.top = `${top - 25}px`;

      circleDiv.style.backgroundColor = colors[i];

    }, 2000);
  }
}
