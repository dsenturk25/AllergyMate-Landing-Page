
const  howItWorksContentArray = [
    {
      "title": {
        "en": "Personalized Allergy Profiles",
        "tr": "Kişiselleştirilmiş Alerji Profilleri"
      },
      "content": {
        "en": "Users input their allergy history and sensitivities into our app, and Allergy Mate builds a comprehensive profile tailored specifically to their needs.",
        "tr": "Kullanıcılar alerji geçmişlerini ve hassasiyetlerini uygulamamıza girer ve Allergy Mate onlara özel kapsamlı bir profil oluşturur."
      }
    },
    {
      "title": {
        "en": "Real-Time Product Analysis",
        "tr": "Gerçek Zamanlı Ürün Analizi"
      },
      "content": {
        "en": "Our AI scans product labels and ingredient lists in real-time, ensuring that users avoid allergens no matter where they are or what they're shopping for.",
        "tr": "Yapay zekamız, ürün etiketlerini ve içerik listesini gerçek zamanlı tarayarak kullanıcıların alerjenlerden kaçınmasını sağlar."
      }
    },
    {
      "title": {
        "en": "Intelligent Recommendations",
        "tr": "Akıllı Öneriler"
      },
      "content": {
        "en": "Allergy Mate provides personalized suggestions for safe alternatives, helping users make informed decisions whether at home or traveling.",
        "tr": "Allergy Mate, güvenli alternatifler için kişiselleştirilmiş öneriler sunarak kullanıcıların bilinçli kararlar vermesine yardımcı olur."
      },
      "allergens": [
        { "en": "Gluten", "tr": "Glüten" },
        { "en": "Mustard", "tr": "Hardal" },
        { "en": "Sesame", "tr": "Susam" },
        { "en": "Soya", "tr": "Soya" },
        { "en": "Eggs", "tr": "Yumurta" }
      ],
      "foods": [
        { "en": "Roasted Vegetables", "tr": "Fırınlanmış Sebzeler" },
        { "en": "Chicken Wrap & Hummus", "tr": "Tavuk Dürüm ve Humus" },
        { "en": "Schnitzel & Potatoes", "tr": "Şinitzel ve Patates" },
        { "en": "Grilled Chicken", "tr": "Izgara Tavuk" },
        { "en": "Pancakes", "tr": "Pankek" },
        { "en": "Sushi", "tr": "Suşi" },
        { "en": "Penne Arabbiata", "tr": "Penne Arabbiata" }
      ],
      "foodAllergens": [
        [],
        [0, 2],
        [1, 4],
        [],
        [0, 4],
        [2, 3],
        [1, 4]
      ],
      "foodAllergenExplanations": [
        { "en": "This is an allergen-free food. You can eat it with peace of mind.", "tr": "Bu alerjen içermeyen bir yiyecektir. Gönül rahatlığıyla yiyebilirsiniz." },
        { "en": "Since there is bread, it contains gluten. Also, due to hummus, it may contain sesame.", "tr": "Ekmek içerdiği için glüten içerir. Ayrıca humus nedeniyle susam içerebilir." },
        { "en": "Sometimes the potato can contain mustard. Also, schnitzel may be dipped into egg.", "tr": "Bazen patates hardal içerebilir. Ayrıca şinitzel yumurtaya batırılmış olabilir." },
        { "en": "This is an allergen-free food. You can eat it with peace of mind.", "tr": "Bu alerjen içermeyen bir yiyecektir. Gönül rahatlığıyla yiyebilirsiniz." },
        { "en": "Pancakes contain flour so there is gluten. Also, they contain egg.", "tr": "Pankekler un içerdiğinden glüten içerir. Ayrıca yumurta içerir." },
        { "en": "Sushi often contains sesame and may sometimes contain soy.", "tr": "Suşi genellikle susam içerir ve bazen soya içerebilir." },
        { "en": "Be careful, pastas contain egg and aren't gluten-free.", "tr": "Dikkat edin, makarnalar yumurta içerir ve glütensiz değildir." }
      ]
    },
    {
      "title": {
        "en": "Community Support",
        "tr": "Topluluk Desteği"
      },
      "content": {
        "en": "Our platform connects users with others in the allergy community, fostering shared experiences and helpful advice to make allergy management easier.",
        "tr": "Platformumuz, kullanıcıları alerji topluluğundaki diğer kişilerle buluşturarak deneyimlerin paylaşılmasını ve alerji yönetiminin kolaylaşmasını sağlar."
      },
      "people": [
        {
          "name": "Vanessa 🇪🇸",
          "src": "vanessa",
          "description": "Female | 22 | Madrid",
          "paragraph": {
            "en": "When I eat mango, my lips swell, and kiwi makes my mouth tingle. Luckily, churros and coffee are still my friends! ☕🍩",
            "tr": "Mango yediğimde dudaklarım şişiyor, kivi ise ağzımı karıncalandırıyor. Neyse ki churros ve kahve hâlâ dostum! ☕🍩"
          }
        },
        {
          "name": "Deniz 🇹🇷",
          "src": "mustafa",
          "description": "Male | 22 | Istanbul",
          "paragraph": {
            "en": "Tea makes me itchy, and hazelnuts make my eyes water. But simit and cheese are still in my safe zone! ☕🥯",
            "tr": "Çay içince kaşınıyorum, fındık yiyince gözlerim sulanıyor. Ama simit ve peynir hâlâ güvenli bölgemde! ☕🥯"
          }
        },
        {
          "name": "Sofia 🇮🇹",
          "src": "sofia",
          "description": "Female | 25 | Rome",
          "paragraph": {
            "en": "Tomatoes make my skin itch, but I can't resist a good Margherita pizza! 🍕",
            "tr": "Domates cildimi kaşındırıyor ama iyi bir Margherita pizzasına dayanamazdım! 🍕"
          }
        },
        {
          "name": "Luca 🇩🇪",
          "src": "luca",
          "description": "Male | 28 | Berlin",
          "paragraph": {
            "en": "I have a peanut allergy, so I always double-check ingredient lists. But pretzels and sausages? Always a win! 🥨🌭",
            "tr": "Yer fıstığı alerjim var, bu yüzden içerik listesini her zaman iki kez kontrol ederim. Ama pretzel ve sosis? Her zaman kazanç! 🥨🌭"
          }
        }
      ]
    }
  ];



window.onload = () => {

  let currentLanguage = "tr";
  if (localStorage.getItem("language-id")) {
    currentLanguage = localStorage.getItem("language-id");
  }

  translate(currentLanguage);

  const languageSwitch = document.getElementById("language-switch");

  languageSwitch.addEventListener("click", (e) => {

    const currentLanguage = localStorage.getItem("language-id");
    if (currentLanguage == "tr") {
      localStorage.setItem("language-id", "en");
    } else if (currentLanguage == "en") {
      localStorage.setItem("language-id", "tr");
    } else {
      localStorage.setItem("language-id", "en");
    }
    window.location.reload();
  })

  uniqueValue("allergyManagement", `${currentLanguage}`);
  headerInstallButton();

  document.addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains("each-navbar-menu-item-unique-value")) {
      uniqueValue(e.target.parentNode.id, `${currentLanguage}`);
      const elements = document.getElementsByClassName("each-navbar-menu-item-unique-value");
      for (let i = 0; i < elements.length; i++) {
        elements[i].children[0].style.opacity = "0";
        elements[i].children[1].style.opacity = "0.5";
      }
      document.getElementById(e.target.parentNode.id).children[0].style.opacity = "1";
      document.getElementById(e.target.parentNode.id).children[1].style.opacity = "1";
    } else if (
      e.target.classList.contains("mission-main-content-header") 
      || e.target.parentNode.classList.contains("mission-main-content-header") 
      || e.target.parentNode.parentNode.classList.contains("mission-main-content-header")
    ) {
      let mainDiv = e.target;
      while (!mainDiv.classList.contains("mission-main-content-header")) {
        mainDiv = mainDiv.parentNode;
      }


      if (mainDiv.dataset.is_opened == "true") {

        mainDiv.style.backgroundColor = "#f5f5f5";

        mainDiv.parentNode.children[1].style.height = "0";
        mainDiv.parentNode.children[1].style.padding = "0";

        mainDiv.parentNode.children[0].children[1].style.transform = "rotate(0deg)";

        mainDiv.dataset.is_opened = "false";
      } else {

        for (let i = 0; i < document.getElementsByClassName("mission-main-content-header").length; i++) {
          const prevDiv = document.getElementsByClassName("mission-main-content-header")[i];
          if (prevDiv.dataset.is_opened == "true") {
            prevDiv.style.backgroundColor = "#f5f5f5";
  
            prevDiv.parentNode.children[1].style.height = "0";
            prevDiv.parentNode.children[1].style.padding = "0";
  
            prevDiv.parentNode.children[0].children[1].style.transform = "rotate(0deg)";
  
            prevDiv.dataset.is_opened = "false";
          }
        }

        mainDiv.style.backgroundColor = "#ddd";

        mainDiv.parentNode.children[1].style.height = "100%";
        mainDiv.parentNode.children[1].style.padding = "30px";

        mainDiv.parentNode.children[0].children[1].style.transform = "rotate(180deg)";

        mainDiv.dataset.is_opened = "true";
      }
    }
  })

  const canvas = document.createElement("canvas");
  canvas.classList.add("start-page-animation-canvas");
  const ctx = canvas.getContext("2d");
  document.getElementById("inner-main-content-banner").appendChild(canvas);
  
  canvas.width = window.innerWidth - 50;
  canvas.height = window.innerHeight - 100;
  
  const squigglePoints = [];
  const totalFrames = 100; // Approx 1 second animation at 60fps
  let currentFrame = 0;
  
  // Generate squiggle path from top-left to bottom-right
  const generateSquiggle = () => {
      const startX = 50;
      const startY = 50;
      const endX = canvas.width - 50;
      const endY = canvas.height - 50;
      const amplitude = 500;
      const steps = 200;
      
      for (let i = 0; i <= steps; i++) {
          let t = i / steps;
          let x = startX + t * (endX - startX);
          let y = startY + t * (endY - startY) + Math.sin(t * Math.PI * 6) * amplitude * (1 - t);
          squigglePoints.push({ x, y });
      }
  };
  
  generateSquiggle();
  
  const drawSquiggle = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 20;
      ctx.strokeStyle = "rgba(0,0,0,0.05)";
      ctx.beginPath();
      ctx.moveTo(squigglePoints[0].x, squigglePoints[0].y);
      
      let pointsToDraw = Math.floor((currentFrame / totalFrames) * squigglePoints.length);
      
      for (let i = 1; i < pointsToDraw; i++) {
          ctx.lineTo(squigglePoints[i].x, squigglePoints[i].y);
      }
      
      ctx.stroke();
      
      if (currentFrame < totalFrames) {
          currentFrame++;
          requestAnimationFrame(drawSquiggle);
      }
  };
  
  drawSquiggle();


  const soulReactionsWrapper = [
    {
      "en": "Mmmmmmmhh... Delicious!",
      "tr": "Mmmmmmmhh... Leziz!"
    },
    {
      "en": "That's what I call a meal!",
      "tr": "İşte buna yemek derim!"
    }
  ]


  let soulReactionIndex = 0;

  function changeColorFoodWrappers (index, foodsWrapper, foodAnalysisDiv) {
    for (let i = 0; i < foodsWrapper.children.length; i++) {
      const eachFoodWrapper = foodsWrapper.children[i];
      if (index == i) {
        foodAnalysisDiv.innerHTML = "";

        eachFoodWrapper.style.backgroundColor = "rgba(0,0,0,0.8)";

        const foodAnalysisTitle = document.createElement("div");
        foodAnalysisTitle.style.display = "flex";
        foodAnalysisTitle.style.alignItems = "center";

        const foodAnalysisTitleImage = document.createElement("img");
        foodAnalysisTitleImage.style.width = "40px"; foodAnalysisTitleImage.style.height = "40px";
        foodAnalysisTitleImage.src = eachFoodWrapper.firstChild.src;
        const foodAnalysisTitleText = document.createElement("div");
        foodAnalysisTitleText.style.fontSize = "18px";
        foodAnalysisTitleText.style.marginLeft = "10px";
        foodAnalysisTitleText.style.color = "#fff";
        foodAnalysisTitleText.innerHTML = eachFoodWrapper.lastChild.innerHTML;

        foodAnalysisTitle.appendChild(foodAnalysisTitleImage);
        foodAnalysisTitle.appendChild(foodAnalysisTitleText);

        foodAnalysisDiv.appendChild(foodAnalysisTitle)

        const foodAllergyWrapper = document.createElement("div");
        foodAllergyWrapper.style.width = "100%";
        foodAllergyWrapper.style.display = "flex";
        foodAllergyWrapper.style.alignItems = "center";
        foodAllergyWrapper.style.marginTop = "10px";

        const foodAllergyWrapperResult = document.createElement("div");
        foodAllergyWrapperResult.style.marginRight = "20px";

        if (howItWorksContentArray[2].foodAllergens[index].length) {
          foodAllergyWrapperResult.innerHTML = "food is alergic";
          foodAllergyWrapperResult.classList.add("result-allergic");  
        } else { 
          
          foodAllergyWrapperResult.innerHTML = "food is allergen-free";
          foodAllergyWrapperResult.classList.add("result-allergen-free");

          const eachImgForTable = document.createElement("img");
          eachImgForTable.src = eachFoodWrapper.firstChild.src;
          eachImgForTable.style.zIndex = "50";
          eachImgForTable.style.position = "absolute";

          eachImgForTable.style.width = "100px"; eachImgForTable.style.height = "100px";
          eachImgForTable.style.left = `${10 * soulReactionIndex + 30}%`; eachImgForTable.style.top = `${20 * soulReactionIndex}%`;
          eachImgForTable.id = `each-image-food-display-${i}`

          if (!document.getElementById(`each-image-food-display-${i}`)) {
            document.getElementById("table_display").appendChild(eachImgForTable);

          }

          document.getElementById("soul-reaction-1").innerHTML = soulReactionsWrapper[soulReactionIndex][`${currentLanguage}`];
          document.getElementById("soul-reaction-1").style.opacity = "1";
          document.getElementById("soul-reaction-1").style.top = "120%";
          
          setTimeout(() => {
            document.getElementById("soul-reaction-1").style.opacity = "0";
            document.getElementById("soul-reaction-1").style.top = "150%";
            soulReactionIndex = 1;
          }, 2000);
        }


        const foodAllergyWrapperAllergens = document.createElement("div");
        for (let i = 0; i < 5; i++) {
          const eachAllergenMiniContent = document.createElement("img");
          eachAllergenMiniContent.src = `/public/res/allergens/${i}.png`;
          eachAllergenMiniContent.style.width = "30px"; eachAllergenMiniContent.style.height = "30px";

          if (howItWorksContentArray[2].foodAllergens[index].includes(i)) {
            eachAllergenMiniContent.style.filter = "brightness(1)";
            
          } else {
            eachAllergenMiniContent.style.filter = "brightness(0.2)";
          }
          eachAllergenMiniContent.style.marginLeft = `-15px`;

          foodAllergyWrapperAllergens.appendChild(eachAllergenMiniContent);
        }

        foodAllergyWrapper.appendChild(foodAllergyWrapperResult);
        foodAllergyWrapper.appendChild(foodAllergyWrapperAllergens);

        foodAnalysisDiv.appendChild(foodAllergyWrapper)


        const foodAllergyExplanation = document.createElement("p");
        foodAllergyExplanation.innerHTML = howItWorksContentArray[2].foodAllergenExplanations[index][`${currentLanguage}`];
        foodAllergyExplanation.style.fontSize = "12px";
        foodAllergyExplanation.style.color = "#fff";

        foodAnalysisDiv.append(foodAllergyExplanation);
      } else {
        eachFoodWrapper.style.backgroundColor = "rgba(0,0,0,0)";
      }
    }
  }


  const mainWrapper = document.getElementById("blur-animation-motto-wrapper");
  const line1 = document.getElementById("blur-animation-line-1");
  const line2 = document.getElementById("blur-animation-line-2");

  line1.style.left = `${mainWrapper.offsetWidth}px`;
  line2.style.left = `-${mainWrapper.offsetWidth}px`;


  function addHowItWorksStep (index, animationScrollWrapper) {
    const mainWrapper = document.createElement('div');
    mainWrapper.classList.add('each-step-main-wrapper', 'center');
    mainWrapper.id = `howItWorksStep${index}`;

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('each-step-main-wrapper-title');
    console.log(howItWorksContentArray[index].title);
    console.log(howItWorksContentArray[index].title[`${currentLanguage}`])
    titleDiv.textContent = howItWorksContentArray[index].title[`${currentLanguage}`];

    const explanationDiv = document.createElement('div');
    explanationDiv.classList.add('each-step-main-wrapper-explanation');
    explanationDiv.textContent = howItWorksContentArray[index].content[`${currentLanguage}`];

    mainWrapper.appendChild(titleDiv);
    mainWrapper.appendChild(explanationDiv);

    if (howItWorksContentArray[index].allergens && howItWorksContentArray[index].foods) {

      const foodsDiv = document.createElement("div");
      foodsDiv.classList.add("each-step-main-foods-wrapper");
      mainWrapper.appendChild(foodsDiv);

      const foodAnalysisDiv = document.createElement("div");
      foodAnalysisDiv.classList.add("food-analysis-div");
      foodAnalysisDiv.id = "foodAnalysisDiv";


      for (let j = 0; j < howItWorksContentArray[index].foods.length; j++) {
        const eachFoodName = howItWorksContentArray[index].foods[j][`${currentLanguage}`];
        
        const eachFoodWrapper = document.createElement("div");
        eachFoodWrapper.classList.add("each-food-wrapper");

        const eachFoodImageContent = document.createElement("img");
        eachFoodImageContent.style.width = "50px"; eachFoodImageContent.style.height = "50px";
        eachFoodImageContent.src = `/public/res/foods/${j}.png`;
        const eachFoodNameContent = document.createElement("div");
        eachFoodNameContent.style.width = "100%";
        if (j == 0) {
          eachFoodWrapper.style.backgroundColor = "rgba(0,0,0,0.8)";
        }
        eachFoodNameContent.innerHTML = eachFoodName;

        eachFoodWrapper.appendChild(eachFoodImageContent);
        eachFoodWrapper.appendChild(eachFoodNameContent);

        foodsDiv.appendChild(eachFoodWrapper);
      }

      setTimeout(() => {

        const soulMainWrapper = document.getElementById("soul-main-wrapper");
        soulMainWrapper.children[1].innerHTML = "";
        soulMainWrapper.children[1].classList.add("center")
        typingAnimation(soulMainWrapper.children[1]);

        changeColorFoodWrappers(0, foodsDiv, foodAnalysisDiv);
        animationScrollWrapper.appendChild(foodAnalysisDiv);
  
        changeColorFoodWrappers(0, foodsDiv, foodAnalysisDiv);
        let l = 1;
        const foodAnalysisInterval = setInterval(() => {
          if (l < 7) {
            foodAnalysisDiv.style.left = `${l * 12}%`;
            changeColorFoodWrappers(l, foodsDiv, foodAnalysisDiv);
            l += 1;
          } else {
            clearInterval(foodAnalysisInterval);
            soulMainWrapper.children[1].style.fontSize = "20px";
            soulMainWrapper.children[1].style.color = "rgb(222, 229, 254)";
            
            return soulMainWrapper.children[1].innerHTML = "Thank you!";
          }
        }, 2000);
      }, 3000);
    }

    animationScrollWrapper.appendChild(mainWrapper);
  }

  let isDashboardLoopAlreadyStarted = false;
  let isFoodAnalysisAnimationAlreadyStarted = false;

  window.addEventListener("scroll", (e) => {
    const scrollTop = window.scrollY;
    const animationScrollWrapper = document.getElementById("animation-scroll-main-wrapper");
    const howItWorksTitle = document.getElementById("how-it-works-title-content");
    const phone = document.getElementById("phone");
    const laptop = document.getElementById("laptop");
    const table = document.getElementById("table_display");
    const images = document.getElementById("scan-images");
    howItWorksTitle.style.color = "#000";
    howItWorksTitle.style.padding = "20px 50px";

 
    if (scrollTop >= 300 && scrollTop <= 750) {
      const minInput = 300;
      const maxInput = 750;
      const minOutput = mainWrapper.offsetWidth;
      const maxOutput = 0;
  
      const mappedValue = minOutput + (maxOutput - minOutput) * ((scrollTop - minInput) / (maxInput - minInput));
      line1.style.left = `${mappedValue}px`;
      line2.style.left = `-${mappedValue}px`;


      const minOutputBlur = 15;
      const maxOutputBlur = 0;
  
      const mappedValueBlur = minOutputBlur + (maxOutputBlur - minOutputBlur) * ((scrollTop - minInput) / (maxInput - minInput));
      line1.style.filter = `blur(${mappedValueBlur}px)`;
      line2.style.filter = `blur(${mappedValueBlur}px)`;
    }


    if (scrollTop >= 800 && scrollTop <= 5280) {
      mainWrapper.style.display = "none";
      animationScrollWrapper.style.position = "fixed";
      animationScrollWrapper.style.backgroundColor = "#000000";
      // howItWorksTitle.style.color = "#fff";
      howItWorksTitle.style.backgroundColor = "rgb(222, 229, 254)";
      howItWorksTitle.style.borderRadius = "100px";

    } else {
      mainWrapper.style.display = "flex";
      animationScrollWrapper.style.position = "relative";
      animationScrollWrapper.style.backgroundColor = "#ffffff";
      // howItWorksTitle.style.color = "#000";
      howItWorksTitle.style.backgroundColor = "";
      howItWorksTitle.style.borderRadius = "0px";
    }


    if (!document.getElementById("table-texture")) {
      const tableTexture = document.createElement("img");
      tableTexture.id = "table-texture";
      tableTexture.style.width = "100%";
      tableTexture.style.height = "100%";
      tableTexture.style.position = "absolute";
      tableTexture.style.zIndex = "0";
      tableTexture.style.borderRadius = "100%";

      table.insertBefore(tableTexture, table.firstChild);
    }

    const steps = [1380, 2380, 3380, 4380];
    const endOffsets = [1980, 2980, 3980, 4980];

    for (let i = 0; i < steps.length; i++) {
      if (scrollTop >= steps[i] && scrollTop <= endOffsets[i]) {
        if (i === 0) {

          if (!isDashboardLoopAlreadyStarted) {
            startDashboardLoop(`${currentLanguage}`);
            isDashboardLoopAlreadyStarted = true;
          }

          if (document.getElementById(`table-texture`)) document.getElementById("table-texture").src = "";

          if (document.getElementById(`orbit`)) document.getElementById(`orbit`).style.display = `none`;

          document.getElementById("phone_first_page_profile_content").style.display = "block";
          document.getElementById("phone_second_page_scanning_content").style.display = "none";
          
          phone.style.display = "block";
          laptop.style.display = "flex";


          if (document.getElementById(`howItWorksStep0`)) document.getElementById(`howItWorksStep0`).style.opacity = `1`;
          if (document.getElementById(`howItWorksStep1`)) document.getElementById(`howItWorksStep1`).style.opacity = `0`;
          if (document.getElementById(`howItWorksStep2`)) document.getElementById(`howItWorksStep2`).style.opacity = `0`;
          if (document.getElementById(`howItWorksStep3`)) document.getElementById(`howItWorksStep3`).style.opacity = `0`;

          phone.classList.remove("phone-scan-mode");
          laptop.style.display = "inherit";
          const scaledValue = 100 + (scrollTop - steps[i]) * (24 - 100) / (endOffsets[i] - steps[i]);
          howItWorksTitle.style.position = "absolute";
          howItWorksTitle.style.fontSize = `${scaledValue}px`;
          howItWorksTitle.style.top = `${(endOffsets[i] - scrollTop)}px`;
          images.style.display = "none";
          if (document.getElementById("foodAnalysisDiv")) document.getElementById("foodAnalysisDiv").style.display = "none";
        }

        if (i === 1) {

          howItWorksTitle.style.position = "absolute";
          howItWorksTitle.style.fontSize = `24px`;
          howItWorksTitle.style.top = `0px`;

          if (document.getElementById(`table-texture`)) document.getElementById("table-texture").src = "/public/res/table.png";
          if (document.getElementById(`orbit`)) document.getElementById(`orbit`).style.display = `none`;

          phone.style.display = "block";

          document.getElementById("phone_first_page_profile_content").style.display = "none";
          document.getElementById("phone_second_page_scanning_content").style.display = "flex";
          

          if (document.getElementById(`howItWorksStep0`)) document.getElementById(`howItWorksStep0`).style.opacity = `0`;
          if (document.getElementById(`howItWorksStep1`)) document.getElementById(`howItWorksStep1`).style.opacity = `1`;
          if (document.getElementById(`howItWorksStep2`)) document.getElementById(`howItWorksStep2`).style.opacity = `0`;
          if (document.getElementById(`howItWorksStep3`)) document.getElementById(`howItWorksStep3`).style.opacity = `0`;


          laptop.style.display = "none";
          images.style.display = "flex";
          images.style.opacity = "1";
          phone.classList.add("phone-scan-mode");
          if (document.getElementById("foodAnalysisDiv")) document.getElementById("foodAnalysisDiv").style.display = "none";
              
        }


        if (i === 2) {

          howItWorksTitle.style.position = "absolute";
          howItWorksTitle.style.fontSize = `24px`;
          howItWorksTitle.style.top = `0px`;


          if (document.getElementById(`table-texture`)) document.getElementById("table-texture").src = "/public/res/table.png";
          
          
          if (document.getElementById(`orbit`)) document.getElementById(`orbit`).style.display = `none`;


          if (document.getElementById(`howItWorksStep0`)) document.getElementById(`howItWorksStep0`).style.opacity = `0`;
          if (document.getElementById(`howItWorksStep1`)) document.getElementById(`howItWorksStep1`).style.opacity = `0`;
          if (document.getElementById(`howItWorksStep2`)) document.getElementById(`howItWorksStep2`).style.opacity = `1`;
          if (document.getElementById(`howItWorksStep3`)) document.getElementById(`howItWorksStep3`).style.opacity = `0`;

          phone.style.display = "none";
          images.style.display = "none";

          if (!isFoodAnalysisAnimationAlreadyStarted) {
            isFoodAnalysisAnimationAlreadyStarted = true;
            const soulMainWrapper = document.getElementById("soul-main-wrapper");
            soulMainWrapper.style.display = "flex";
  
            const soulGreetingTextWrapper = soulMainWrapper.children[1].children[0];
            const soulGreetingTextContentArray = soulGreetingTextWrapper.innerHTML.split(" ");
            soulGreetingTextWrapper.innerHTML = "";
            
            let wordIndex = 0;
            const wordInterval = setInterval(() => {
              setTimeout(() => {
                if (wordIndex >= soulGreetingTextContentArray.length) {
                  return clearInterval(wordInterval);
                }
    
                const eachWordSpan = document.createElement("span");
                eachWordSpan.innerHTML = soulGreetingTextContentArray[wordIndex] + " ";
    
                soulGreetingTextWrapper.appendChild(eachWordSpan);
    
                wordIndex++;
              }, 100 * wordIndex);
            }, 100);
  
            setTimeout(() => {
              soulMainWrapper.children[1].children[1].style.opacity = "1";
            }, 2000);
          }

          if (!document.getElementById("ortu")) {
            const ortu = document.createElement("img");ortu.id = "ortu";ortu.style.width = "50%";ortu.style.height = "50%";ortu.style.top = "5%";ortu.style.left = "25%";ortu.style.position = "absolute";ortu.style.zIndex = "20";ortu.src = "/public/res/ortu.jpg";ortu.style.borderRadius = "100%";
  
            table.insertBefore(ortu, table.firstChild);
          }

          if (!document.getElementById("diningset")) {
            const diningset = document.createElement("img");diningset.id = "diningset";diningset.style.width = "40%";diningset.style.height = "50%";diningset.style.top = "5%";diningset.style.left = "30%";diningset.style.position = "absolute";diningset.style.zIndex = "40";diningset.src = "/public/res/diningset.png";diningset.style.borderRadius = "100%";
            diningset.style.transform = "perspective(800px) rotateX(30deg)";
  
            table.insertBefore(diningset, table.firstChild);
          }
        }

        if (i === 3) {

          if (document.getElementById(`soul-main-wrapper`)) document.getElementById(`soul-main-wrapper`).style.display = "none";

          howItWorksTitle.style.position = "absolute";
          howItWorksTitle.style.fontSize = `24px`;
          howItWorksTitle.style.top = `0px`;


          if (document.getElementById(`howItWorksStep0`)) document.getElementById(`howItWorksStep0`).style.opacity = `0`;
          if (document.getElementById(`howItWorksStep1`)) document.getElementById(`howItWorksStep1`).style.opacity = `0`;
          if (document.getElementById(`howItWorksStep2`)) document.getElementById(`howItWorksStep2`).style.opacity = `0`;
          if (document.getElementById(`howItWorksStep3`)) document.getElementById(`howItWorksStep3`).style.opacity = `1`;


          if (document.getElementById("foodAnalysisDiv")) document.getElementById("foodAnalysisDiv").style.display = "none";
          phone.style.display = "none";
          images.style.display = "none";
          if (document.getElementById("table-texture")) document.getElementById("table-texture").src = "/public/res/earth.png";
          if (document.getElementById("diningset")) document.getElementById("diningset").style.display = "none";
          if (document.getElementById("ortu")) document.getElementById("ortu").style.display = "none";

          if (document.getElementById(`orbit`)) document.getElementById(`orbit`).style.display = `flex`;
          const orbit = document.getElementById("orbit");

          if (!document.getElementsByClassName("dot").length) {
            for (let i = 0; i < 4; i++) {
              const dot = document.createElement("div");
              dot.classList.add("dot");
              
              if (i == 0 || i == 3) {
                dot.style.transform = "translateY(100px)";
              }

              // Persona wrapper'ı oluştur
              const personaWrapper = document.createElement('div');
              personaWrapper.classList.add('dot-persona-wrapper');
              personaWrapper.style.display = 'flex';
              personaWrapper.style.alignItems = 'center';

              // Profil resmini içeren div
              const imgContainer = document.createElement('div');
              imgContainer.style.width = '75px';
              imgContainer.style.height = '75px';
              imgContainer.style.overflow = 'hidden';
              imgContainer.style.position = 'relative';
              imgContainer.style.borderRadius = '100%';

              const img = document.createElement('img');
              img.src = `/public/res/people/${howItWorksContentArray[3].people[i].src}.png`;
              img.style.width = '75px';
              img.alt = '';

              imgContainer.appendChild(img);

              // Metin içeren div
              const textContainer = document.createElement('div');
              textContainer.classList.add('dot-persona-profile-textual');
              textContainer.style.marginLeft = '20px';

              const nameSurname = document.createElement('div');
              nameSurname.classList.add('dot-persona-profile-name-surname');
              nameSurname.textContent = howItWorksContentArray[3].people[i].name;

              const basicInfo = document.createElement('div');
              basicInfo.classList.add('dot-persona-profile-basic-info');
              basicInfo.style.fontSize = '12px';
              basicInfo.textContent = howItWorksContentArray[3].people[i].description;

              textContainer.appendChild(nameSurname);
              textContainer.appendChild(basicInfo);

              // Açıklama paragrafı
              const paragraph = document.createElement('p');
              paragraph.textContent = howItWorksContentArray[3].people[i].paragraph[`${currentLanguage}`];

              // Elemanları birleştir
              personaWrapper.appendChild(imgContainer);
              personaWrapper.appendChild(textContainer);
              dot.appendChild(personaWrapper);
              dot.appendChild(paragraph);


              orbit.appendChild(dot);
            }
          }
        }
        
        if (!document.getElementById(`howItWorksStep${i}`)) {
          addHowItWorksStep(i, animationScrollWrapper); 
        }
      }
    }
  });


  let contactUsDynamicAnimationTextArray = [
    {"en": "a Healthier Future", "tr": "Hep Birlikte"}, 
    {"en": "Piece Of Mind", "tr": "Gönül Rahatlığıyla"}, 
    {"en": "a Happy Community", "tr": "Alerjisiz Bir Dünyaya"}
  ];

  function startContactUsDynamicAnimationLoop(language) {
    contactUsDynamicAnimationTextArray.forEach((eachText, index) => {
      setTimeout(() => {
        document.getElementById("contact-us-dynamic-text-animation-content").style.opacity = 0;
        setTimeout(() => {
          document.getElementById("contact-us-dynamic-text-animation-content").innerHTML = eachText[`${language}`];  
        }, 500);
        setTimeout(() => {
          document.getElementById("contact-us-dynamic-text-animation-content").style.opacity = 1;
        }, 500);
      }, 2000 * index);
    })
  }
  startContactUsDynamicAnimationLoop(currentLanguage);
  setInterval(() => {
    startContactUsDynamicAnimationLoop(currentLanguage);
  }, 6000);







  function setProgress(value, goal, title, unit, goalYear, id) {
    const circle = document.querySelector(`.progress-${id}`);
    const text = document.querySelector(`.progress-number-${id}`);
    text.innerHTML = "";
  
    const maxOffset = 1015; // Full circumference
    const offset = maxOffset - (value / goal) * maxOffset;
  
    circle.style.strokeDashoffset = offset;

    const progressTextDiv = document.createElement("div");
    progressTextDiv.textContent = `${value} ${unit}`;
    const progressTextDescription = document.createElement("div");
    progressTextDescription.innerHTML = `
      <div class="center" style="flex-direction: column;">
        <div style="font-size:16px; color: gray;">${title}</div>
        <div style="font-size:12px; color: gray;">${value} ${unit} / ${goal} ${unit} goal for ${goalYear}</div>
      </div>
    `;

    text.appendChild(progressTextDiv);
    text.appendChild(progressTextDescription);
  }
  
  
  const kpiMapping = [
    {
      id: "users",
      title: {
        "en": "Users",
        "tr": "Kullanıcı"
      },
      unit: "K",
      current: "27",
      goal: "50",
      goalQuarter: "2025 Q4",
      progressStep: 1
    },
    {
      id: "allergiesDetected",
      title: {
        "en": "Allergies Prevented",
        "tr": "Önlenen Alerji"
      },
      unit: "K",
      current: "1200",
      goal: "1500",
      goalQuarter: "2026 Q2",
      progressStep: 2
    },
    {
      id: "corporatePartnerships",
      title: {
        "en": "Corporate Partnerships",
        "tr": "Kurumsal İşbirliği",
      },
      unit: "",
      current: "20",
      goal: "30",
      goalQuarter: "2026 Q1",
      progressStep: 1
    },
    {
      id: "aiPrompt",
      title: {
        "en": "AI Prompt",
        "tr": "AI Sorgusu"
      },
      unit: "M",
      current: "20",
      goal: "25",
      goalQuarter: "2026 Q2",
      progressStep: 1
    },
  ];


  function startKpiLoop() {
    kpiMapping.forEach((eachKpi, index) => {

      setTimeout(() => {
        let progress = 0;
        if (index != 0) {
          document.getElementById(`progress-container-${kpiMapping[index - 1].id}`).style.display = "none";
          setProgress(0, parseFloat(eachKpi.goal), eachKpi.title[`${currentLanguage}`], eachKpi.unit, eachKpi.goalQuarter, kpiMapping[index - 1].id);
          document.getElementById(`kpi-navbar-${kpiMapping[index - 1].id}`).style.scale = "1";
          document.getElementById(`kpi-navbar-${kpiMapping[index - 1].id}`).style.border = "2px solid rgba(0,0,0,0)";
        } else {
          setProgress(0, parseFloat(eachKpi.goal), eachKpi.title[`${currentLanguage}`], eachKpi.unit, eachKpi.goalQuarter, kpiMapping[kpiMapping.length - 1].id);
          document.getElementById(`progress-container-${kpiMapping[kpiMapping.length - 1].id}`).style.display = "none";
          document.getElementById(`kpi-navbar-${kpiMapping[kpiMapping.length - 1].id}`).style.scale = "1";
          document.getElementById(`kpi-navbar-${kpiMapping[kpiMapping.length - 1].id}`).style.border = "2px solid rgba(0,0,0,0)";
        }
        document.getElementById(`progress-container-${kpiMapping[index].id}`).style.display = "flex";
        document.getElementById(`kpi-navbar-${kpiMapping[index].id}`).style.scale = "1.1";
        document.getElementById(`kpi-navbar-${kpiMapping[index].id}`).style.border = "2px solid #ccc";
        const interval = setInterval(() => {
          if (progress <= parseFloat(eachKpi.current)) {
            setProgress(progress, parseFloat(eachKpi.goal), eachKpi.title[`${currentLanguage}`], eachKpi.unit, eachKpi.goalQuarter, eachKpi.id);
            progress += eachKpi.progressStep;
          } else {
              progress = 0;
              clearInterval(interval);
          }
        }, 2500 / parseFloat(eachKpi.current));
    
      }, index * 4000);
    });
  }

  startKpiLoop();
  setInterval(() => {
    startKpiLoop();
  }, 16000);
}
