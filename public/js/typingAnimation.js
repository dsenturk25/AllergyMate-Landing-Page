
function typingAnimation(container) {

  for (let i = 0; i < 3; i++) {
      let ball = document.createElement("div");
      ball.className = "ball";
      ball.style.animationDelay = `${i * 0.4}s`;
      container.appendChild(ball);
  }
  
  const style = document.createElement("style");
  style.innerHTML = `
  .ball {
      width: 15px;
      height: 15px;
      background-color: rgb(222, 229, 254);
      border-radius: 50%;
      display: inline-block;
      margin: 0 5px;
      animation: bounce 1.2s infinite ease-in-out;
  }
  
  @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
  }
  `;
  document.head.appendChild(style);
  

}
