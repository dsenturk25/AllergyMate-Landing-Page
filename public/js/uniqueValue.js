const sections = [
  { 
    id: 'allergyManagement', 
    section: { en: 'AI-Powered Allergy Management', tr: 'Yapay Zeka Destekli Alerji Yönetimi' },
    title: { en: 'Harness the power of machine learning to keep your allergies in check', tr: 'Alerjinizi kontrol altında tutmak için makine öğreniminin gücünden yararlanın' },
    content: { en: 'Our AI adapts to your unique needs, analyzing patterns and recommending safe products on the go.', tr: 'Yapay zekamız, benzersiz ihtiyaçlarınıza uyum sağlar, kalıpları analiz eder ve hareket halindeyken güvenli ürünler önerir.' },
    list: [
      { en: 'AI adapts to your individual allergy profile, constantly learning to improve recommendations.', tr: 'Yapay zeka, bireysel alerji profilinize uyum sağlar ve önerileri geliştirmek için sürekli öğrenir.' },
      { en: 'It analyzes patterns from past experiences to predict potential triggers and suggest safer alternatives.', tr: 'Geçmiş deneyimlerden kalıpları analiz ederek olası tetikleyicileri tahmin eder ve daha güvenli alternatifler önerir.' },
      { en: 'The AI helps you stay informed on allergens in real time, providing peace of mind.', tr: 'Yapay zeka, gerçek zamanlı olarak alerjenler hakkında bilgi sahibi olmanıza yardımcı olur ve size huzur sağlar.' }
    ],
    animationText: { en: 'AI-driven allergy protection', tr: 'Yapay zeka destekli alerji koruması' },
    images: ["solutions/allergyManagement.png"]
  },
  { 
    id: 'allergyDatabase', 
    section: { en: 'Comprehensive Allergy Database', tr: 'Kapsamlı Alerji Veritabanı' },
    title: { en: 'A constantly updated database to keep you safe', tr: 'Sizi güvende tutmak için sürekli güncellenen bir veritabanı' },
    content: { en: 'Our database covers a wide range of allergens, from food allergens to environmental triggers.', tr: 'Veritabanımız, gıda alerjenlerinden çevresel tetikleyicilere kadar geniş bir yelpazeyi kapsar.' },
    list: [
      { en: 'The database is continually updated with the latest research on allergens.', tr: 'Veritabanı, alerjenler üzerine en son araştırmalarla sürekli güncellenir.' },
      { en: 'It includes common and rare allergens, ensuring you are always prepared for any situation.', tr: 'Hem yaygın hem de nadir alerjenleri içerir, böylece her duruma karşı hazırlıklı olmanızı sağlar.' },
      { en: 'Stay protected as new allergens are added and categorized for easy access.', tr: 'Yeni alerjenler eklendikçe ve kolay erişim için kategorize edildikçe güvende kalın.' }
    ],
    animationText: { en: 'Always up-to-date', tr: 'Her zaman güncel' },
    images: ["solutions/allergyDatabase.png"]
  },
  { 
    id: 'realTimeScanning', 
    section: { en: 'Real-Time Scanning', tr: 'Gerçek Zamanlı Tarama' },
    title: { en: 'Instant product label scanning to detect hidden allergens', tr: 'Gizli alerjenleri tespit etmek için anında ürün etiketi tarama' },
    content: { en: 'Scan product labels instantly to ensure every product you buy is safe.', tr: 'Satın aldığınız her ürünün güvenli olduğundan emin olmak için ürün etiketlerini anında tarayın.' },
    list: [
      { en: 'The scanning feature identifies allergens even in ingredients you might not be familiar with.', tr: 'Tarama özelliği, aşina olmadığınız bileşenlerde bile alerjenleri tespit eder.' },
      { en: 'It offers instant feedback, so you can make decisions on the go.', tr: 'Anında geri bildirim sunar, böylece hareket halindeyken karar verebilirsiniz.' },
      { en: 'By scanning labels, you can quickly verify whether a product is safe for you to use.', tr: 'Etiketleri tarayarak bir ürünün sizin için güvenli olup olmadığını hızla doğrulayabilirsiniz.' }
    ],
    animationText: { en: 'Scan on the go', tr: 'Hareket halindeyken tarayın' },
    images: ["solutions/realTimeScanning.png"]
  },
  { 
    id: 'personalizedReports', 
    section: { en: 'Personalized Reports', tr: 'Kişiselleştirilmiş Raporlar' },
    title: { en: 'Receive tailored reports and advice on your allergy triggers', tr: 'Alerji tetikleyicileriniz hakkında kişiselleştirilmiş raporlar ve tavsiyeler alın' },
    content: { en: 'Learn how to manage your allergies more effectively with regular, personalized insights.', tr: 'Düzenli ve kişiselleştirilmiş analizlerle alerjinizi daha etkili bir şekilde nasıl yöneteceğinizi öğrenin.' },
    list: [
      { en: 'The reports help you understand the triggers specific to your allergies.', tr: 'Raporlar, alerjinize özgü tetikleyicileri anlamanıza yardımcı olur.' },
      { en: 'Receive actionable advice on how to avoid or minimize your exposure to allergens.', tr: 'Alerjenlere maruziyetinizi nasıl önleyebileceğiniz veya en aza indirebileceğiniz konusunda uygulanabilir tavsiyeler alın.' },
      { en: 'The tailored reports adapt over time as your allergy profile evolves.', tr: 'Kişiselleştirilmiş raporlar, alerji profiliniz geliştikçe zamanla uyum sağlar.' }
    ],
    animationText: { en: 'Your allergies, your report', tr: 'Alerjileriniz, sizin raporunuz' },
    images: ["solutions/personalizedReports.png"]
  },
  { 
    id: 'crossPlatformAccess', 
    section: { en: 'Cross-Platform Access', tr: 'Çapraz Platform Erişimi' },
    title: { en: 'Stay protected across all your devices', tr: 'Tüm cihazlarınızda koruma altında olun' },
    content: { en: 'Access Allergy Mate from any device, whether at home or on the go.', tr: 'Allergy Mate’e evde veya hareket halindeyken herhangi bir cihazdan erişin.' },
    list: [
      { en: 'The app is available on both mobile and desktop devices, ensuring accessibility wherever you are.', tr: 'Uygulama hem mobil hem de masaüstü cihazlarda kullanılabilir, böylece her yerde erişilebilirlik sağlar.' },
      { en: 'You can switch seamlessly between devices without losing any data or progress.', tr: 'Herhangi bir veri veya ilerleme kaybı olmadan cihazlar arasında sorunsuzca geçiş yapabilirsiniz.' },
      { en: 'Whether at home, at work, or while traveling, you’re always protected.', tr: 'Evde, işte veya seyahat ederken her zaman koruma altındasınız.' }
    ],
    animationText: { en: 'Allergy management on every device', tr: 'Her cihazda alerji yönetimi' },
    images: ["solutions/crossPlatformAccess.png"]
  }
];


function uniqueValue(selectedSection, language) {

  const uniqueValueContainer = document.getElementById('uniqueValueContainer');
  uniqueValueContainer.innerHTML = "";
  
  const container = document.createElement('div');
  container.style.width = 'calc(100% - 100px)';
  container.style.padding = '2rem';  // p-8
  container.style.color = 'white';
  
  // Iterate through the sections array
  sections.forEach((section, index) => {
    if (selectedSection === section.id) {
      const sectionDiv = document.createElement('div');

      // CargoCar component code
      const cargoCarDiv = document.createElement('div');
      const cargoCar = document.createElement('div');
      cargoCar.setAttribute('width', window.innerWidth);
      cargoCar.setAttribute('index', index);
      cargoCar.setAttribute('animationText', section.animationText[`${language}`]);
      cargoCar.setAttribute('previousWidth', `${16 + (index) * (84 / sections.length)}%`);
      cargoCar.setAttribute('nextWidth', `${16 + (index + 1) * (84 / sections.length)}%`);
      cargoCarDiv.appendChild(cargoCar);
      sectionDiv.appendChild(cargoCarDiv);

      // Title and content
      const title = document.createElement('h2');
      title.style.marginTop = '1rem';  // mt-4
      title.style.fontSize = '1.5rem';  // text-2xl
      title.style.fontWeight = '600';  // font-semibold
      title.textContent = section.title[`${language}`];

      const content = document.createElement('p');
      content.style.marginTop = '0.25rem';  // mt-1
      content.style.fontWeight = '200';  // font-extralight
      content.style.fontStyle = 'italic';  // italic
      content.textContent = section.content[`${language}`];

      sectionDiv.appendChild(title);
      sectionDiv.appendChild(content);

      // List of items
      const listContainer = document.createElement('div');
      if (window.innerWidth < 800) {
        listContainer.style.display = 'flex';
        listContainer.style.flexDirection = 'column';  // flex-col
      } else {
        listContainer.style.display = 'flex';
        listContainer.style.gap = '0.75rem';  // gap-3
        listContainer.style.alignItems = 'flex-end';  // items-end
      }

      const list = document.createElement('ul');
      list.style.marginTop = '1rem';  // mt-4
      list.style.fontWeight = '200';  // font-extralight
      list.style.width = '60%';  // w-3/5
      list.style.alignSelf = 'flex-start';  // self-start

      section.list.forEach((item, index) => {
        const listItem = document.createElement('li');

        const icon = document.createElement('FaCheckCircle');
        icon.style.marginRight = '0.75rem';  // mr-3
        icon.style.color = '#FFA851';  // text-[#FFA851]
        icon.style.verticalAlign = 'middle';  // my-auto

        const span = document.createElement('span');
        span.textContent = item[`${language}`];

        listItem.appendChild(icon);
        listItem.appendChild(span);
        list.appendChild(listItem);
      });

      listContainer.appendChild(list);
      sectionDiv.appendChild(listContainer);

      // Images or video
      const imageContainer = document.createElement('div');
      if (section.id === 'collaborate' || section.id === 'safeView') {
        imageContainer.style.display = 'flex';
        imageContainer.style.gap = '0.75rem';  // gap-3
        imageContainer.style.width = '25%';  // w-1/4
        imageContainer.style.marginTop = '1rem';  // mt-4
      } else {
        imageContainer.style.marginLeft = '1rem';  // ml-4
      }

      // If there's a video
      if (section.videoSrc) {
        const video = document.createElement('video');
        video.loop = true;
        video.autoPlay = true;
        video.style.width = '16rem';  // w-64
        video.style.boxShadow = '20px 20px 0 orange';  // box-shadow-orange

        const source = document.createElement('source');
        source.setAttribute('src', section.videoSrc);
        source.setAttribute('type', 'video/mp4');

        video.appendChild(source);
        const videoFallback = document.createElement('p');
        videoFallback.textContent = 'Tarayıcınız video etiketini desteklemiyor.';
        video.appendChild(videoFallback);

        imageContainer.appendChild(video);
      } else if (section.images) {
        section.images.forEach((image, index) => {
          const img = document.createElement('img');
          img.setAttribute('src', image);
          img.setAttribute('alt', image);
          img.style.boxShadow = (section.id === "dashboard" || section.id === "entegration") ? '20px 20px 0 orange' : '';
          img.style.alignSelf = index === 1 ? 'flex-end' : 'flex-start';  // self-end / self-start

          imageContainer.appendChild(img);
        });
      }

      sectionDiv.appendChild(imageContainer);
      container.appendChild(sectionDiv);
    }
  });
  
  container.classList.add("center");

  uniqueValueContainer.appendChild(container);
}

