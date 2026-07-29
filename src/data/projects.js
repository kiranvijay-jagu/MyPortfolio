// Project data — swap `image` with a real screenshot path and fill in real
// GitHub/live links when ready. `details` shows in the expandable card view.
export const projects = [
  {
    id: 'agrismart-ai',
    title: 'AgriSmart AI',
    tagline: 'AI-assisted crop advisory for smallholder farmers',
    image:  `${import.meta.env.BASE_URL}projects/agrismart.png`,
    description:
      'A backend-driven platform that uses machine learning to recommend crops, detect plant disease from images, and alert farmers about weather risks in their region.',
    details:
    'AgriSmart AI is an AI-powered agriculture platform designed to support farmers in making informed decisions through machine learning and modern web technologies. The application evaluates key parameters such as soil type, crop information, weather conditions, and environmental data to provide intelligent crop recommendations and farming guidance. It integrates features including chatbot assistance, weather forecasting, disease detection support, and fertilizer recommendations to enhance productivity. Developed with a responsive full-stack architecture, the project highlights my ability to combine artificial intelligence with practical agricultural solutions while delivering an intuitive user experience.',
    tech: ['Python', 'Fast API', 'Google Gemini API', 'MySQL'],
    github: 'https://github.com/kiranvijay-jagu/agrismartai',
    demo: '',
  },
  {
    id: 'smart-water-safety',
    title: 'Smart Water Safety & Disease Alert System',
    tagline: 'Real-time water quality monitoring and outbreak alerts',
    image:  `${import.meta.env.BASE_URL}projects/waterproject.png`,
    description:
      'A monitoring system that tracks water quality indicators and issues early alerts for potential waterborne disease outbreaks in a community.',
    details:
      'The Smart Water Safety & Disease Alert System is an IoT and machine learning-based application developed to monitor water quality and predict potential health risks. It collects real-time data from sensors measuring pH, turbidity, TDS, and temperature, which is processed by a trained machine learning model to classify water quality as Safe, Moderate, or Unsafe. Based on the analysis, the system predicts possible water-borne diseases and automatically activates safety mechanisms such as a buzzer and relay when unsafe conditions are detected. Combining hardware integration, embedded programming, Flask, and machine learning, this project delivers an intelligent solution for ensuring safe drinking water.',
    tech: ['Python', 'Flask', 'SQlite','AI', 'ML','XGBoost','IOT'],
    github: 'https://github.com/kiranvijay-jagu/water_safety_system',
    
  },
  {
    id: 'dairyfarm',
    title: 'Smart Dairy Farm',
    tagline: 'Excellence in Dairy Farming.',
    image:`${import.meta.env.BASE_URL}projects/dairyfarm.png`,
    description:
      'A modern dairy farming platform focused on intelligent livestock management, operational efficiency, and sustainable milk production through advanced technologies and data-driven insights.',
    details:
      'The Dairy Farm Monitoring System is an IoT-based smart solution developed to enhance livestock management and farm efficiency. It continuously monitors key environmental parameters such as temperature, humidity, and other sensor readings to maintain a healthy environment for dairy cattle. Powered by solar panels, the system ensures sustainable energy usage while reducing reliance on conventional electricity. Real-time sensor data is displayed through a web interface, enabling farmers to remotely track farm conditions and respond promptly to abnormalities. This project demonstrates the effective integration of IoT, renewable energy, and web technologies to advance smart agriculture.',
    tech: ['Python','Flask', 'SQlite', 'HTML', 'CSS','ML','IOT'],
    github: 'https://github.com/kiranvijay-jagu/Smart_dairy_farm',
    demo: '',
  },
  {
    id: 'multilingual-chat',
    title: 'Multilingual Group Chat',
    tagline: 'Real-time group chat with on-the-fly language translation',
    image:  `${import.meta.env.BASE_URL}projects/multichat.png`,
    description:
      'A group chat application where each participant can read messages in their own preferred language, translated in real time.',
    details:
      'The Multilingual Group Chat Application is a full-stack web solution designed to enable seamless communication among users from diverse language backgrounds. Developed using Flask, HTML, CSS, JavaScript, and SQLite, it supports user authentication, group creation, member management, and real-time messaging. The application integrates AI-powered translation through the Deep Translator library, automatically converting messages into multiple languages including English, Telugu, Hindi, Tamil, Kannada, and French. This project highlights my full-stack development expertise while addressing real-world communication challenges with multilingual support and an intuitive user interface.',
    tech: ['Python', 'Flask', 'Html','Css','AJAX','SQlite','GoogleTranslate'],
    github: 'https://github.com/kiranvijay-jagu/group-chat-app',
    demo: '',
  },
]
