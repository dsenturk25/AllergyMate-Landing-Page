
const dashboardMapping = [
  {
    id: "mediatedAllergies",
    title: {
      "en": "Allergies Mediated",
      "tr": "Önlenen Alerji"
    },
    current: 7,
    goal: 10,
    progressStep: 1
  },
  {
    id: "healthyDiets",
    title: {
      "en": "Healthy Diets Generated",
      "tr": "Sağlıklı Beslenme"
    },
    current: 1200,
    goal: 1500,
    progressStep: 2
  },
  {
    id: "preventedReactions",
    title: {
      "en": "Reactions Prevented",
      "tr": "Önlenen Reaksiyonlar"
    },
    current: 176,
    goal: 300,
    progressStep: 1
  }
];



function setProgressDashboard(value, goal, title, id) {
  const circle = document.querySelector(`.progress-${id}`);
  const text = document.querySelector(`.progress-number-${id}`);
  text.innerHTML = "";

  const radius = 38;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference * (1 - value / goal);
  circle.style.strokeWidth = "8";


  const progressTextDiv = document.createElement("div");
  progressTextDiv.textContent = `${value}`;
  progressTextDiv.style.fontSize = "14px";
  const progressTextDescription = document.createElement("div");
  progressTextDescription.innerHTML = `
    <div class="center" style="flex-direction: column;">
      <div style="font-size:6px; color: gray;">${title}</div>
      <div style="font-size:6px; color: gray;">${value} / ${goal}</div>
    </div>
  `;

  text.appendChild(progressTextDiv);
  text.appendChild(progressTextDescription);
}

function startDashboardLoop(language) {

  dashboardMapping.forEach((eachKpi, index) => {
    let progress = 0;

    const interval = setInterval(() => {
      if (progress <= eachKpi.current) {
        setProgressDashboard(progress, eachKpi.goal, eachKpi.title[`${language}`], eachKpi.id);
        progress += eachKpi.progressStep;
      } else {
        progress = 0;
        clearInterval(interval);
      }
    }, 2500 / parseFloat(eachKpi.current));
  
  })
}
