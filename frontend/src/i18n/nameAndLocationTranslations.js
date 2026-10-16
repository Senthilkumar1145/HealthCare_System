// Multilingual dictionary and transliteration system for User Names, Hospital Names, and Locations
// Supported Languages: en (English), hi (Hindi), ta (Tamil), te (Telugu)

// 1. User Names Dictionary (Doctors, Patients, Nurses, Demo Users)
export const USER_NAMES_DICT = {
  // Registered Doctors in DB & Demos
  'suresh': {
    en: 'Dr. Suresh',
    hi: 'डॉ. सुरेश',
    ta: 'டாக்டர் சுரேஷ்',
    te: 'డాక్టర్ సురేష్'
  },
  'simhan': {
    en: 'Dr. Simhan',
    hi: 'डॉ. सिम्हन',
    ta: 'டாக்டர் சிம்ஹன்',
    te: 'డాక్టర్ సింహన్'
  },
  'siddharth': {
    en: 'Dr. Siddharth',
    hi: 'डॉ. सिद्धार्थ',
    ta: 'டாக்டர் சித்தார்த்',
    te: 'డాక్టర్ సిద్ధార్థ్'
  },
  'santhosh': {
    en: 'Dr. Santhosh',
    hi: 'डॉ. संतोष',
    ta: 'டாக்டர் சந்தோஷ்',
    te: 'డాక్టర్ సంతోష్'
  },
  'santosh': {
    en: 'Dr. Santosh',
    hi: 'डॉ. संतोष',
    ta: 'டாக்டர் சந்தோஷ்',
    te: 'డాక్టర్ సంతోష్'
  },
  'srijith': {
    en: 'Dr. Srijith',
    hi: 'डॉ. स्रीजित',
    ta: 'டாக்டர் ஸ்ரீஜித்',
    te: 'డాక్టర్ శ్రీజిత్'
  },
  'dr. ramesh kumar': {
    en: 'Dr. Ramesh Kumar',
    hi: 'डॉ. रमेश कुमार',
    ta: 'டாக்டர் ரமேஷ் குமார்',
    te: 'డాక్టర్ రమేష్ కుమార్'
  },
  'ramesh kumar': {
    en: 'Dr. Ramesh Kumar',
    hi: 'डॉ. रमेश कुमार',
    ta: 'டாக்டர் ரமேஷ் குமார்',
    te: 'డాక్టర్ రமேஷ் కుమార్'
  },
  'ramesh': {
    en: 'Dr. Ramesh',
    hi: 'डॉ. रमेश',
    ta: 'டாக்டர் ரமேஷ்',
    te: 'డాక్టర్ రమేష్'
  },
  'dr. anita desai': {
    en: 'Dr. Anita Desai',
    hi: 'डॉ. अनीता देसाई',
    ta: 'டாக்டர் அனிதா தேசாய்',
    te: 'డాక్టర్ అనిత దేశాయ్'
  },
  'anita desai': {
    en: 'Dr. Anita Desai',
    hi: 'डॉ. अनीता देसाई',
    ta: 'டாக்டர் அனிதா தேசாய்',
    te: 'డాక్టర్ అనిత దేశాయ్'
  },
  'dr. meena iyer': {
    en: 'Dr. Meena Iyer',
    hi: 'डॉ. मीना अय्यर',
    ta: 'டாக்டர் மீனா ஐயர்',
    te: 'డాక్టర్ மீனா అయ్యర్'
  },
  'meena iyer': {
    en: 'Dr. Meena Iyer',
    hi: 'डॉ. मीना अय्यर',
    ta: 'டாக்டர் மீனா ஐயர்',
    te: 'డాక్టర్ மீனா అయ్యర్'
  },
  'dr. suresh patel': {
    en: 'Dr. Suresh Patel',
    hi: 'डॉ. सुरेश पटेल',
    ta: 'டாக்டர் சுரேஷ் படேல்',
    te: 'డాక్టర్ సురేష్ పటేల్'
  },
  'suresh patel': {
    en: 'Dr. Suresh Patel',
    hi: 'डॉ. सुरेश पटेल',
    ta: 'டாக்டர் சுரேஷ் படேல்',
    te: 'డాక్టర్ సురేష్ పటేల్'
  },

  // Patients in DB & Demos
  'senthil': {
    en: 'Senthil',
    hi: 'सेंथिल',
    ta: 'செந்தில்',
    te: 'సెంథిల్'
  },
  'priya sharma': {
    en: 'Priya Sharma',
    hi: 'प्रिया शर्मा',
    ta: 'பிரியா சர்மா',
    te: 'ప్రియా శర్మ'
  },
  'priya': {
    en: 'Priya Sharma',
    hi: 'प्रिया शर्मा',
    ta: 'பிரியா சர்மா',
    te: 'ప్రియా శర్మ'
  },
  'rahul verma': {
    en: 'Rahul Verma',
    hi: 'राहुल वर्मा',
    ta: 'ராஹுல் வர்மா',
    te: 'రాహుల్ వర్మ'
  },
  'sneha patel': {
    en: 'Sneha Patel',
    hi: 'स्नेहा पटेल',
    ta: 'சினேகா படேல்',
    te: 'స్నేహ పటేల్'
  },

  // Nurses in DB & Demos
  'sentamil': {
    en: 'Sentamil',
    hi: 'सेंतमिल',
    ta: 'செந்தமிழ்',
    te: 'సెం తమిళ్'
  },
  'nurse sentamil': {
    en: 'Nurse Sentamil',
    hi: 'नर्स सेंतमिल',
    ta: 'நர்ஸ் செந்தமிழ்',
    te: 'నర్సు సెం తమిళ్'
  },
  'kavitha': {
    en: 'Nurse Kavitha',
    hi: 'नर्स कविता',
    ta: 'நர்ஸ் கவிதா',
    te: 'నర్సు కవిత'
  },
  'nurse kavitha': {
    en: 'Nurse Kavitha',
    hi: 'नर्स कविता',
    ta: 'நர்ஸ் கவிதா',
    te: 'నర్సు కవిత'
  },

  // Generic roles & fallbacks
  'patient': {
    en: 'Patient',
    hi: 'मरीज़',
    ta: 'நோயாளி',
    te: 'రోగి'
  },
  'doctor': {
    en: 'Doctor',
    hi: 'डॉक्टर',
    ta: 'மருத்துவர்',
    te: 'డాక్టర్'
  },
  'nurse': {
    en: 'Nurse',
    hi: 'नर्स',
    ta: 'செவிலியர்',
    te: 'నర్సు'
  },
  'assigned specialist': {
    en: 'Assigned Specialist',
    hi: 'नियुक्त विशेषज्ञ डॉक्टर',
    ta: 'நியமிக்கப்பட்ட சிறப்பு மருத்துவர்',
    te: 'కేటాయించిన నిపుణులైన డాక్టర్'
  },
  'your doctor': {
    en: 'Your Doctor',
    hi: 'आपके डॉक्टर',
    ta: 'உங்கள் மருத்துவர்',
    te: 'మీ డాక్టర్'
  }
};

// 2. Hospital / Healthcare Centres Translation Dictionary
export const HOSPITAL_NAMES_DICT = {
  'Fortis Malar Hospital': {
    en: 'Fortis Malar Hospital',
    hi: 'फोर्टिस मलार अस्पताल',
    ta: 'போர்டிஸ் மலர் மருத்துவமனை',
    te: 'ఫోర్టిస్ మలార్ ఆసుపత్రి'
  },
  'Apollo Hospitals Greams Road': {
    en: 'Apollo Hospitals Greams Road',
    hi: 'अपोलो हॉस्पिटल्स ग्रीम्स रोड',
    ta: 'அப்பல்லோ மருத்துவமனை கிரீம்ஸ் சாலை',
    te: 'అపోలో హాస్పిటల్స్ గ్రీమ్స్ రోడ్'
  },
  'Adyar Primary Health Centre': {
    en: 'Adyar Primary Health Centre',
    hi: 'अड्यार प्राथमिक स्वास्थ्य केंद्र',
    ta: 'அடையாறு ஆரம்ப சுகாதார நிலையம்',
    te: 'అడయార్ ప్రాథమిక ఆరోగ్య కేంద్రం'
  },
  'Apollo 24|7 Pharmacy T. Nagar': {
    en: 'Apollo 24|7 Pharmacy T. Nagar',
    hi: 'अपोलो 24|7 फार्मेसी टी. नगर',
    ta: 'அப்பல்லோ 24|7 பார்மசி தி. நகர்',
    te: 'అపోలో 24|7 ఫార్మసీ టి. నగర్'
  },
  'Coimbatore Medical College Hospital': {
    en: 'Coimbatore Medical College Hospital',
    hi: 'कोयंबटूर मेडिकल कॉलेज अस्पताल',
    ta: 'கோயம்புத்தூர் மருத்துவக் கல்லூரி மருத்துவமனை',
    te: 'కోయంబత్తూరు మెడికల్ కాలేజ్ ఆసుపత్రి'
  },
  'Ganga Hospital & Trauma Care': {
    en: 'Ganga Hospital & Trauma Care',
    hi: 'गंगा अस्पताल एवं ट्रॉमा केयर',
    ta: 'கங்கா மருத்துவமனை & ட்ராமா கேர்',
    te: 'గంగా హాస్పిటల్ & ట్రామా కేర్'
  },
  'RS Puram Urban Health Clinic': {
    en: 'RS Puram Urban Health Clinic',
    hi: 'आरएस पुरम शहरी स्वास्थ्य क्लिनिक',
    ta: 'ஆர்.எஸ். புரம் நகர்ப்புற சுகாதார மையம்',
    te: 'ఆర్.ఎస్. పురం అర్బన్ హెల్త్ క్లినిక్'
  },
  'MedPlus Pharmacy Gandhipuram': {
    en: 'MedPlus Pharmacy Gandhipuram',
    hi: 'मेडप्लस फार्मेसी गांधीपुरम',
    ta: 'மெட்பிளஸ் பார்மசி காந்திபுரம்',
    te: 'మెడ్‌ప్లస్ ఫార్మసీ గాంధీపురం'
  },
  'Government Rajaji Hospital': {
    en: 'Government Rajaji Hospital',
    hi: 'सरकारी राजाजी अस्पताल',
    ta: 'அரசு ராஜாஜி மருத்துவமனை',
    te: 'ప్రభుత్వ రాజాజీ ఆసుపత్రి'
  },
  'Meenakshi Mission Hospital & Research Centre': {
    en: 'Meenakshi Mission Hospital & Research Centre',
    hi: 'मीनाक्षी मिशन अस्पताल एवं अनुसंधान केंद्र',
    ta: 'மீனாட்சி மிஷன் மருத்துவமனை & ஆராய்ச்சி மையம்',
    te: 'మీనాక్షి మిషన్ హాస్పిటల్ & రీసెర్చ్ సెంటర్'
  },
  'KK Nagar Community Clinic': {
    en: 'KK Nagar Community Clinic',
    hi: 'केके नगर सामुदायिक क्लिनिक',
    ta: 'கே.கே. நகர் சமூக நல மையம்',
    te: 'కేకే నగర్ కమ్యూనిటీ క్లినిక్'
  },
  'Apollo Pharmacy Goripalayam': {
    en: 'Apollo Pharmacy Goripalayam',
    hi: 'अपोलो फार्मेसी गोरीपलायम',
    ta: 'அப்பல்லோ பார்மசி கோரிப்பாளையம்',
    te: 'అపోలో ఫార్మసీ గోరిపాలెం'
  },
  'Victoria Hospital & Medical College': {
    en: 'Victoria Hospital & Medical College',
    hi: 'विक्टोरिया अस्पताल एवं मेडिकल कॉलेज',
    ta: 'விக்டோரியா மருத்துவமனை & மருத்துவக் கல்லூரி',
    te: 'విక్టోరియా హాస్పిటల్ & మెడికల్ కాలేజ్'
  },
  'Manipal Hospital HAL Old Airport Road': {
    en: 'Manipal Hospital HAL Old Airport Road',
    hi: 'मणिपाल अस्पताल एचएएल ओल्ड एयरपोर्ट रोड',
    ta: 'மணிப்பால் மருத்துவமனை எச்.ஏ.எல் பழைய விமான நிலைய சாலை',
    te: 'మణిపాల్ హాస్పిటల్ హెచ్‌ఏఎల్ ఓల్డ్ ఎయిర్‌పోర్ట్ రోడ్'
  },
  'Koramangala Primary Health Centre': {
    en: 'Koramangala Primary Health Centre',
    hi: 'कोरमंगला प्राथमिक स्वास्थ्य केंद्र',
    ta: 'கோரமங்களா ஆரம்ப சுகாதார நிலையம்',
    te: 'కోరమంగళ ప్రాథమిక ఆరోగ్య కేంద్రం'
  },
  'Apollo Pharmacy Indiranagar': {
    en: 'Apollo Pharmacy Indiranagar',
    hi: 'अपोलो फार्मेसी इंदिरानगर',
    ta: 'அப்பல்லோ பார்மசி இந்திராநகர்',
    te: 'అపోలో ఫార్మసీ ఇందిరానగర్'
  },
  'Osmania General Hospital': {
    en: 'Osmania General Hospital',
    hi: 'उस्मानिया जनरल अस्पताल',
    ta: 'உஸ்மானியா பொது மருத்துவமனை',
    te: 'ఉస్మానియా జనరల్ ఆసుపత్రి'
  },
  'Yashoda Hospitals Somajiguda': {
    en: 'Yashoda Hospitals Somajiguda',
    hi: 'यशोदा हॉस्पिटल्स सोमाजीगुडा',
    ta: 'யசோதா மருத்துவமனை சோமாஜிகுடா',
    te: 'యశోద హాస్పిటల్స్ సోమాజిగూడ'
  },
  'Banjara Hills Community Wellness Clinic': {
    en: 'Banjara Hills Community Wellness Clinic',
    hi: 'बंजारा हिल्स सामुदायिक कल्याण क्लिनिक',
    ta: 'பஞ்சாரா ஹில்ஸ் சமூக நல்வாழ்வு மையம்',
    te: 'బంజారా హిల్స్ కమ్యూనిటీ వెల్నెస్ క్లినిక్'
  },
  'MedPlus Pharmacy HITEC City': {
    en: 'MedPlus Pharmacy HITEC City',
    hi: 'मेडप्लस फार्मेसी हाईटेक सिटी',
    ta: 'மெட்பிளஸ் பார்மசி ஹைடெக் சிட்டி',
    te: 'మెడ్‌ప్లస్ ఫార్మసీ హైటెక్ సిటీ'
  },
  'All India Institute of Medical Sciences (AIIMS)': {
    en: 'All India Institute of Medical Sciences (AIIMS)',
    hi: 'अखिल भारतीय आयुर्विज्ञान संस्थान (एम्स)',
    ta: 'அகில இந்திய மருத்துவ அறிவியல் கழகம் (எய்ம்ஸ்)',
    te: 'ఆల్ ఇండియా ఇన్స్టిట్యూట్ ఆఫ్ మెడికల్ సైన్సెస్ (ఎయిమ్స్)'
  },
  'Safdarjung Hospital': {
    en: 'Safdarjung Hospital',
    hi: 'सफदरजंग अस्पताल',
    ta: 'சப்தர்ஜங் மருத்துவமனை',
    te: 'సఫ్దర్‌జంగ్ హాస్పిటల్'
  },
  'Hauz Khas Dispensary & Polyclinic': {
    en: 'Hauz Khas Dispensary & Polyclinic',
    hi: 'हौज़ खास डिस्पेंसरी एवं पॉलीक्लिनिक',
    ta: 'ஹவுஸ் காஸ் மருந்தகம் & பாலிகிளினிக்',
    te: 'హౌజ్ ఖాస్ డిస్పెన్సరీ & పాలీక్లినిక్'
  },
  'Fortis HealthWorld Pharmacy Connaught Place': {
    en: 'Fortis HealthWorld Pharmacy Connaught Place',
    hi: 'फोर्टिस हेल्थवर्ल्ड फार्मेसी कनॉट प्लेस',
    ta: 'போர்டிஸ் ஹெல்த்வேர்ல்ட் பார்மசி கன்னாட் பிளேஸ்',
    te: 'ఫోర్టిస్ హెల్త్‌వరల్డ్ ఫార్మసీ కన్నాట్ ప్లేస్'
  },
  'Kauvery Hospital': {
    en: 'Kauvery Hospital',
    hi: 'कावेरी अस्पताल',
    ta: 'காவேரி மருத்துவமனை',
    te: 'కావేரி హాస్పిటల్'
  },
  'MIOT International': {
    en: 'MIOT International',
    hi: 'मियोट इंटरनेशनल अस्पताल',
    ta: 'மியாட் இன்டர்நேஷனல் மருத்துவமனை',
    te: 'మియాట్ ఇంటర్నేషనల్ హాస్పిటల్'
  },
  'Government Primary Health Centre': {
    en: 'Government Primary Health Centre',
    hi: 'सरकारी प्राथमिक स्वास्थ्य केंद्र',
    ta: 'அரசு ஆரம்ப சுகாதார நிலையம்',
    te: 'ప్రభుత్వ ప్రాథమిక ఆరోగ్య కేంద్రం'
  },
  'Hospital Attached': {
    en: 'Hospital Attached',
    hi: 'संबद्ध अस्पताल',
    ta: 'இணைக்கப்பட்ட மருத்துவமனை',
    te: 'అనుబంధ ఆసుపత్రి'
  }
};

// 3. Location, Address & Cities Dictionary
export const LOCATION_DICT = {
  // Cities
  'Chennai': {
    en: 'Chennai',
    hi: 'चेन्नई',
    ta: 'சென்னை',
    te: 'చెన్నై'
  },
  'Coimbatore': {
    en: 'Coimbatore',
    hi: 'कोयंबटूर',
    ta: 'கோயம்புத்தூர்',
    te: 'కోయంబత్తూరు'
  },
  'Madurai': {
    en: 'Madurai',
    hi: 'मदुरै',
    ta: 'மதுரை',
    te: 'మదురై'
  },
  'Bengaluru': {
    en: 'Bengaluru',
    hi: 'बेंगलुरु',
    ta: 'பெங்களூரு',
    te: 'బెంగళూరు'
  },
  'Hyderabad': {
    en: 'Hyderabad',
    hi: 'हैदराबाद',
    ta: 'ஹைதராபாத்',
    te: 'హైదరాబాద్'
  },
  'Delhi': {
    en: 'Delhi',
    hi: 'दिल्ली',
    ta: 'டெல்லி',
    te: 'ఢిల్లీ'
  },
  'Delhi / NCR': {
    en: 'Delhi / NCR',
    hi: 'दिल्ली / राष्ट्रीय राजधानी क्षेत्र',
    ta: 'டெல்லி / தேசிய தலைநகர் பகுதி',
    te: 'ఢిల్లీ / జాతీయ రాజధాని ప్రాంతం'
  },
  'New Delhi': {
    en: 'New Delhi',
    hi: 'नई दिल्ली',
    ta: 'புது டெல்லி',
    te: 'న్యూఢిల్లీ'
  },
  'All Cities (Tamil Nadu & Metros)': {
    en: 'All Cities (Tamil Nadu & Metros)',
    hi: 'सभी शहर (तमिलनाडु और मेट्रो)',
    ta: 'அனைத்து நகரங்கள் (தமிழ்நாடு & மெட்ரோ)',
    te: 'అన్ని నగరాలు (తమిళనాడు & మెట్రోలు)'
  },
  'All Cities': {
    en: 'All Cities',
    hi: 'सभी शहर',
    ta: 'அனைத்து நகரங்கள்',
    te: 'అన్ని నగరాలు'
  },

  // States
  'Tamil Nadu': {
    en: 'Tamil Nadu',
    hi: 'तमिलनाडु',
    ta: 'தமிழ்நாடு',
    te: 'తమిళనాడు'
  },
  'Karnataka': {
    en: 'Karnataka',
    hi: 'कर्नाटक',
    ta: 'கர்நாடகா',
    te: 'కర్ణాటక'
  },
  'Telangana': {
    en: 'Telangana',
    hi: 'तेलंगाना',
    ta: 'தெலுங்கானா',
    te: 'తెలంగాణ'
  },
  'National Capital Region': {
    en: 'National Capital Region',
    hi: 'राष्ट्रीय राजधानी क्षेत्र',
    ta: 'தேசிய தலைநகர் பகுதி',
    te: 'జాతీయ రాజధాని ప్రాంతం'
  },
  'All States': {
    en: 'All States',
    hi: 'सभी राज्य',
    ta: 'அனைத்து மாநிலங்கள்',
    te: 'అన్ని రాష్ట్రాలు'
  },

  // Districts
  'Bengaluru Urban': {
    en: 'Bengaluru Urban',
    hi: 'बेंगलुरु शहरी',
    ta: 'பெங்களூரு நகர்ப்புறம்',
    te: 'బెంగళూరు అర్బన్'
  },
  'All Districts': {
    en: 'All Districts',
    hi: 'सभी जिले',
    ta: 'அனைத்து மாவட்டங்கள்',
    te: 'అన్ని జిల్లాలు'
  },

  // Full Addresses
  '52, 1st Main Road, Gandhi Nagar, Adyar, Chennai - 600020': {
    en: '52, 1st Main Road, Gandhi Nagar, Adyar, Chennai - 600020',
    hi: '52, 1st मेन रोड, गांधी नगर, अड्यार, चेन्नई - 600020',
    ta: '52, 1வது பிரதான சாலை, காந்தி நகர், அடையாறு, சென்னை - 600020',
    te: '52, 1వ మెయిన్ రోడ్, గాంధీ నగర్, అడయార్, చెన్నై - 600020'
  },
  '21 Greams Lane, Thousand Lights, Chennai': {
    en: '21 Greams Lane, Thousand Lights, Chennai',
    hi: '21 ग्रीम्स लेन, थाउजेंड लाइट्स, चेन्नई',
    ta: '21 கிரீம்ஸ் லேன், ஆயிரம் விளக்கு, சென்னை',
    te: '21 గ్రీమ్స్ లేన్, థౌసండ్ లైట్స్, చెన్నై'
  },
  '3rd Cross Street, Gandhinagar, Adyar, Chennai': {
    en: '3rd Cross Street, Gandhinagar, Adyar, Chennai',
    hi: '3rd क्रॉस स्ट्रीट, गांधीनगर, अड्यार, चेन्नई',
    ta: '3வது குறுக்குத் தெரு, காந்திநகர், அடையாறு, சென்னை',
    te: '3వ క్రాస్ స్ట్రీట్, గాంధీనగర్, అడయార్, చెన్నై'
  },
  '45 Venkatnarayana Road, T. Nagar, Chennai': {
    en: '45 Venkatnarayana Road, T. Nagar, Chennai',
    hi: '45 वेंकटनारायण रोड, टी. नगर, चेन्नई',
    ta: '45 வெங்கட்நாராயணா சாலை, தி. நகர், சென்னை',
    te: '45 వెంకటనారాయణ రోడ్, టి. నగర్, చెన్నై'
  },
  'Trichy Road, Coimbatore': {
    en: 'Trichy Road, Coimbatore',
    hi: 'त्रिची रोड, कोयंबटूर',
    ta: 'திருச்சி சாலை, கோயம்புத்தூர்',
    te: 'త్రిచ్చి రోడ్, కోయంబత్తూరు'
  },
  '313 Mettupalayam Road, Coimbatore': {
    en: '313 Mettupalayam Road, Coimbatore',
    hi: '313 मेट्टुपालयम रोड, कोयंबटूर',
    ta: '313 மேட்டுப்பாளையம் சாலை, கோயம்புத்தூர்',
    te: '313 మెట్టుపాళయం రోడ్, కోయంబత్తూరు'
  },
  'DB Road, RS Puram, Coimbatore': {
    en: 'DB Road, RS Puram, Coimbatore',
    hi: 'डीबी रोड, आरएस पुरम, कोयंबटूर',
    ta: 'டிபி சாலை, ஆர்.எஸ். புரம், கோயம்புத்தூர்',
    te: 'డిబి రోడ్, ఆర్.ఎస్. పురం, కోయంబత్తూరు'
  },
  'Cross Cut Road, Gandhipuram, Coimbatore': {
    en: 'Cross Cut Road, Gandhipuram, Coimbatore',
    hi: 'क्रॉस कट रोड, गांधीपुरम, कोयंबटूर',
    ta: 'கிராஸ் கட் சாலை, காந்திபுரம், கோயம்புத்தூர்',
    te: 'క్రాస్ కట్ రోడ్, గాంధీపురం, కోయంబత్తూరు'
  },
  'Panagal Road, Shenoy Nagar, Madurai': {
    en: 'Panagal Road, Shenoy Nagar, Madurai',
    hi: 'पनागल रोड, शेनॉय नगर, मदुरै',
    ta: 'பனகல் சாலை, ஷெனாய் நகர், மதுரை',
    te: 'పనగల్ రోడ్, షెనాయ్ నగర్, మదురై'
  },
  'Melur Road, Madurai': {
    en: 'Melur Road, Madurai',
    hi: 'मेलूर रोड, मदुरै',
    ta: 'மேலூர் சாலை, மதுரை',
    te: 'మేలూర్ రోడ్, మదురై'
  },
  '80 Feet Road, KK Nagar, Madurai': {
    en: '80 Feet Road, KK Nagar, Madurai',
    hi: '80 फीट रोड, केके नगर, मदुरै',
    ta: '80 அடி சாலை, கே.கே. நகர், மதுரை',
    te: '80 ఫీట్ రోడ్, కేకే నగర్, మదురై'
  },
  'Alagar Kovil Road, Goripalayam, Madurai': {
    en: 'Alagar Kovil Road, Goripalayam, Madurai',
    hi: 'अलगार कोविल रोड, गोरीपलायम, मदुरै',
    ta: 'அழகர் கோவில் சாலை, கோரிப்பாளையம், மதுரை',
    te: 'అలగర్ కోవిల్ రోడ్, గోరిపాలెం, మదురై'
  },
  'Fort Road, Near City Market, Bengaluru': {
    en: 'Fort Road, Near City Market, Bengaluru',
    hi: 'फोर्ट रोड, सिटी मार्केट के पास, बेंगलुरु',
    ta: 'கோட்டை சாலை, சிட்டி மார்க்கெட் அருகில், பெங்களூரு',
    te: 'ఫోర్ట్ రోడ్, సిటీ మార్కెట్ దగ్గర, బెంగళూరు'
  },
  '98 HAL Old Airport Rd, Kodihalli, Bengaluru': {
    en: '98 HAL Old Airport Rd, Kodihalli, Bengaluru',
    hi: '98 एचएएल ओल्ड एयरपोर्ट रोड, कोडिहल्ली, बेंगलुरु',
    ta: '98 எச்.ஏ.எல் பழைய விமான நிலைய சாலை, கோடிஹள்ளி, பெங்களூரு',
    te: '98 హెచ్‌ఏఎల్ ఓల్డ్ ఎయిర్‌పోర్ట్ రోడ్, కోడిహళ్లి, బెంగళూరు'
  },
  '5th Block, Koramangala, Bengaluru': {
    en: '5th Block, Koramangala, Bengaluru',
    hi: '5वां ब्लॉक, कोरमंगला, बेंगलुरु',
    ta: '5வது பிளாக், கோரமங்களா, பெங்களூரு',
    te: '5వ బ్లాక్, కోరమంగళ, బెంగళూరు'
  },
  '100 Feet Road, Indiranagar, Bengaluru': {
    en: '100 Feet Road, Indiranagar, Bengaluru',
    hi: '100 फीट रोड, इंदिरानगर, बेंगलुरु',
    ta: '100 அடி சாலை, இந்திராநகர், பெங்களூரு',
    te: '100 ఫీట్ రోడ్, ఇందిరానగర్, బెంగళూరు'
  },
  'Afzal Gunj, Hyderabad': {
    en: 'Afzal Gunj, Hyderabad',
    hi: 'अफजल गंज, हैदराबाद',
    ta: 'அப்சல் கஞ்ச், ஹைதராபாத்',
    te: 'అఫ్జల్ గంజ్, హైదరాబాద్'
  },
  'Raj Bhavan Road, Somajiguda, Hyderabad': {
    en: 'Raj Bhavan Road, Somajiguda, Hyderabad',
    hi: 'राज भवन रोड, सोमाजीगुडा, हैदराबाद',
    ta: 'ராஜ் பவன் சாலை, சோமாஜிகுடா, ஹைதராபாத்',
    te: 'రాజ్ భవన్ రోడ్, సోమాజిగూడ, హైదరాబాద్'
  },
  'Road No. 12, Banjara Hills, Hyderabad': {
    en: 'Road No. 12, Banjara Hills, Hyderabad',
    hi: 'रोड नं. 12, बंजारा हिल्स, हैदराबाद',
    ta: 'சாலை எண் 12, பஞ்சாரா ஹில்ஸ், ஹைதராபாத்',
    te: 'రోడ్ నం. 12, బంజారా హిల్స్, హైదరాబాద్'
  },
  'Cyber Towers Junction, Madhapur, Hyderabad': {
    en: 'Cyber Towers Junction, Madhapur, Hyderabad',
    hi: 'साइबर टावर्स जंक्शन, माधापुर, हैदराबाद',
    ta: 'சைபர் டவர்ஸ் சந்திப்பு, மாதப்பூர், ஹைதராபாத்',
    te: 'సైబర్ டவர்ஸ் జంక్షన్, మాదాపూర్, హైదరాబాద్'
  },
  'Sri Aurobindo Marg, Ansari Nagar, New Delhi': {
    en: 'Sri Aurobindo Marg, Ansari Nagar, New Delhi',
    hi: 'श्री अरबिंदो मार्ग, अंसारी नगर, नई दिल्ली',
    ta: 'ஸ்ரீ அரவிந்தோ சாலை, அன்சாரி நகர், புது டெல்லி',
    te: 'శ్రీ అరబిందో మార్గ్, అన్సారీ నగర్, న్యూఢిల్లీ'
  },
  'Ring Road, Opposite AIIMS, New Delhi': {
    en: 'Ring Road, Opposite AIIMS, New Delhi',
    hi: 'रिंग रोड, एम्स के सामने, नई दिल्ली',
    ta: 'ரிங் ரோடு, எய்ம்ஸ் எதிரில், புது டெல்லி',
    te: 'రింగ్ రోడ్, ఎయిమ్స్ ఎదురుగా, న్యూఢిల్లీ'
  },
  'E-Block, Hauz Khas, New Delhi': {
    en: 'E-Block, Hauz Khas, New Delhi',
    hi: 'ई-ब्लॉक, हौज़ खास, नई दिल्ली',
    ta: 'இ-பிளாக், ஹவுஸ் காஸ், புது டெல்லி',
    te: 'ఇ-బ్లాక్, హౌజ్ ఖాస్, న్యూఢిల్లీ'
  },
  'Inner Circle, Connaught Place, New Delhi': {
    en: 'Inner Circle, Connaught Place, New Delhi',
    hi: 'इनर सर्कल, कनॉट प्लेस, नई दिल्ली',
    ta: 'இன்னர் சர்க்கிள், கன்னாட் பிளேஸ், புது டெல்லி',
    te: 'ఇన్నర్ సర్కిల్, కన్నాట్ ప్లేస్, న్యూఢిల్లీ'
  }
};

// 4. Specializations & Medical Terms Dictionary
export const MEDICAL_TERMS_DICT = {
  'General Physician': {
    en: 'General Physician',
    hi: 'सामान्य चिकित्सक',
    ta: 'பொது மருத்துவர்',
    te: 'జనరల్ ఫిజీషియన్'
  },
  'General': {
    en: 'General',
    hi: 'सामान्य चिकित्सा',
    ta: 'பொது மருத்துவம்',
    te: 'జనరల్'
  },
  'General Healthcare': {
    en: 'General Healthcare',
    hi: 'सामान्य स्वास्थ्य सेवा',
    ta: 'பொது சுகாதாரம்',
    te: 'జనరల్ హెల్త్‌కేర్'
  },
  'Pediatrician': {
    en: 'Pediatrician',
    hi: 'बाल रोग विशेषज्ञ',
    ta: 'குழந்தை நல மருத்துவர்',
    te: 'శిశువైద్యుడు'
  },
  'Cardiologist': {
    en: 'Cardiologist',
    hi: 'हृदय रोग विशेषज्ञ',
    ta: 'இதய சிகிச்சை நிபுணர்',
    te: 'కార్డియాలజిస్ట్'
  },
  'Dermatologist': {
    en: 'Dermatologist',
    hi: 'त्वचा रोग विशेषज्ञ',
    ta: 'தோல் மருத்துவர்',
    te: 'చర్మవ్యాధి నిపుణుడు'
  },
  'Orthopedic': {
    en: 'Orthopedic',
    hi: 'हड्डी रोग विशेषज्ञ',
    ta: 'எலும்பு முறிவு மருத்துவர்',
    te: 'ఆర్థోపెడిక్ நிపుణుడు'
  },
  'Gynecologist': {
    en: 'Gynecologist',
    hi: 'स्त्री रोग विशेषज्ञ',
    ta: 'மகப்பேறு மருத்துவர்',
    te: 'గైనకాలజిస్ట్'
  },
  'Healthcare Specialist': {
    en: 'Healthcare Specialist',
    hi: 'स्वास्थ्य देखभाल विशेषज्ञ',
    ta: 'சுகாதார சிறப்பு மருத்துவர்',
    te: 'ఆరోగ్య సంరక్షణ నిపుణుడు'
  },
  'Mon - Fri (9:00 AM - 5:00 PM)': {
    en: 'Mon - Fri (9:00 AM - 5:00 PM)',
    hi: 'सोम - शुक्र (सुबह 9:00 - शाम 5:00)',
    ta: 'திங்கள் - வெள்ளி (காலை 9:00 - மாலை 5:00)',
    te: 'సోమ - శుక్ర (ఉదయం 9:00 - సాయంత్రం 5:00)'
  },
  'Mild Fever': {
    en: 'Mild Fever',
    hi: 'हल्का बुखार',
    ta: 'லேசான காய்ச்சல்',
    te: 'తేలికపాటి జ్వరం'
  },
  'Take Light Foods': {
    en: 'Take Light Foods',
    hi: 'हल्का सुपाच्य भोजन लें',
    ta: 'எளிதில் செரிக்கும் உணவு உட்கொள்ளவும்',
    te: 'తేలికపాటి ఆహారం తీసుకోండి'
  },
  'Paracetamol': {
    en: 'Paracetamol',
    hi: 'पैरासिटामोल',
    ta: 'பாராசிட்டமால்',
    te: 'పారాసిటమాల్'
  },
  'Morning  & Night After meals (2 days)': {
    en: 'Morning & Night After meals (2 days)',
    hi: 'सुबह और रात भोजन के बाद (2 दिन)',
    ta: 'காலை மற்றும் இரவு உணவுக்குப் பிறகு (2 நாட்கள்)',
    te: 'ఉదయం & రాత్రి భోజనం తర్వాత (2 రోజులు)'
  },
  'Morning & Night After meals (2 days)': {
    en: 'Morning & Night After meals (2 days)',
    hi: 'सुबह और रात भोजन के बाद (2 दिन)',
    ta: 'காலை மற்றும் இரவு உணவுக்குப் பிறகு (2 நாட்கள்)',
    te: 'ఉదయం & రాత్రి భోజనం తర్వాత (2 రోజులు)'
  },
  'Hospital': {
    en: 'Hospital',
    hi: 'अस्पताल',
    ta: 'மருத்துவமனை',
    te: 'ఆసుపత్రి'
  },
  'Clinic': {
    en: 'Clinic',
    hi: 'क्लिनिक',
    ta: 'மருந்தகம் / கிளினிக்',
    te: 'క్లినిక్'
  },
  'Pharmacy': {
    en: 'Pharmacy',
    hi: 'फार्मेसी',
    ta: 'பார்மசி',
    te: 'ఫార్మసీ'
  }
};

// 5. Intelligent Transliteration Fallback Engine
// When an arbitrary name is not in the dictionary, converts English text phonetically into Indic scripts

const INDIC_TRANSLITERATION_MAPS = {
  hi: {
    vowels: {
      'ai': 'ऐ', 'au': 'औ', 'aa': 'आ', 'ee': 'ई', 'oo': 'ऊ',
      'a': 'अ', 'i': 'इ', 'u': 'उ', 'e': 'ए', 'o': 'ओ'
    },
    matras: {
      'ai': 'ै', 'au': 'ौ', 'aa': 'ा', 'ee': 'ी', 'oo': 'ू',
      'a': '', 'i': 'ि', 'u': 'ु', 'e': 'े', 'o': 'ो'
    },
    consonants: {
      'k': 'क', 'kh': 'ख', 'g': 'ग', 'gh': 'घ',
      'ch': 'च', 'chh': 'छ', 'j': 'ज', 'jh': 'झ',
      't': 'ट', 'th': 'थ', 'd': 'द', 'dh': 'ध',
      'n': 'न', 'p': 'प', 'ph': 'फ', 'f': 'फ़', 'b': 'ब', 'bh': 'भ',
      'm': 'म', 'y': 'य', 'r': 'र', 'l': 'ल', 'v': 'व', 'w': 'व',
      'sh': 'श', 's': 'स', 'h': 'ह'
    },
    virama: '्'
  },
  ta: {
    vowels: {
      'ai': 'ஐ', 'au': 'ஔ', 'aa': 'ஆ', 'ee': 'ஈ', 'oo': 'ஊ',
      'a': 'அ', 'i': 'இ', 'u': 'உ', 'e': 'எ', 'o': 'ஒ'
    },
    matras: {
      'ai': 'ை', 'au': 'ௌ', 'aa': 'ா', 'ee': 'ீ', 'oo': 'ூ',
      'a': '', 'i': 'ி', 'u': 'ு', 'e': 'ெ', 'o': 'ொ'
    },
    consonants: {
      'k': 'க', 'kh': 'க', 'g': 'க', 'gh': 'க',
      'ch': 'ச', 'chh': 'ச', 'j': 'ஜ', 'jh': 'ஜ',
      't': 'த', 'th': 'த', 'd': 'ட', 'dh': 'ட',
      'n': 'ந', 'p': 'ப', 'ph': 'ப', 'f': 'ப', 'b': 'ப', 'bh': 'ப',
      'm': 'ம', 'y': 'ய', 'r': 'ர', 'l': 'ல', 'v': 'வ', 'w': 'வ',
      'sh': 'ஷ', 's': 'ஸ', 'h': 'ஹ'
    },
    virama: '்'
  },
  te: {
    vowels: {
      'ai': 'ఐ', 'au': 'ఔ', 'aa': 'ఆ', 'ee': 'ఈ', 'oo': 'ఊ',
      'a': 'అ', 'i': 'ఇ', 'u': 'ఉ', 'e': 'ఎ', 'o': 'ఒ'
    },
    matras: {
      'ai': 'ై', 'au': 'ౌ', 'aa': 'ా', 'ee': 'ీ', 'oo': 'ూ',
      'a': '', 'i': 'ి', 'u': 'ు', 'e': 'ె', 'o': 'ొ'
    },
    consonants: {
      'k': 'క', 'kh': 'ఖ', 'g': 'గ', 'gh': 'ఘ',
      'ch': 'చ', 'chh': 'ఛ', 'j': 'జ', 'jh': 'ఝ',
      't': 'ట', 'th': 'థ', 'd': 'ద', 'dh': 'ధ',
      'n': 'న', 'p': 'ప', 'ph': 'ఫ', 'f': 'ఫ', 'b': 'బ', 'bh': 'భ',
      'm': 'మ', 'y': 'య', 'r': 'ర', 'l': 'ల', 'v': 'వ', 'w': 'వ',
      'sh': 'శ', 's': 'స', 'h': 'హ'
    },
    virama: '్'
  }
};

function transliterateWord(word, lang) {
  if (!word || !INDIC_TRANSLITERATION_MAPS[lang]) return word;
  const map = INDIC_TRANSLITERATION_MAPS[lang];
  let res = '';
  let i = 0;
  const str = word.toLowerCase();

  while (i < str.length) {
    const char = str[i];
    
    // Check two-char consonant or vowel
    const twoChars = str.substr(i, 2);
    const threeChars = str.substr(i, 3);

    // Skip non-alpha characters
    if (!/[a-z]/.test(char)) {
      res += char;
      i++;
      continue;
    }

    // Check consonant match
    let cons = null;
    let consLen = 0;
    if (map.consonants[twoChars]) {
      cons = map.consonants[twoChars];
      consLen = 2;
    } else if (map.consonants[char]) {
      cons = map.consonants[char];
      consLen = 1;
    }

    if (cons) {
      i += consLen;
      // Look ahead for vowel
      const nextTwo = str.substr(i, 2);
      const nextOne = str.substr(i, 1);
      if (map.matras[nextTwo] !== undefined) {
        res += cons + map.matras[nextTwo];
        i += 2;
      } else if (map.matras[nextOne] !== undefined) {
        res += cons + map.matras[nextOne];
        i += 1;
      } else {
        // No vowel follows, or word ends -> virama
        res += cons + (i === str.length ? map.virama : (map.virama));
      }
    } else {
      // Standalone vowel
      if (map.vowels[twoChars]) {
        res += map.vowels[twoChars];
        i += 2;
      } else if (map.vowels[char]) {
        res += map.vowels[char];
        i += 1;
      } else {
        res += char;
        i++;
      }
    }
  }

  return res;
}

// 6. Exported Translation Functions

/**
 * Translates a user name (doctor, patient, nurse) to the selected language
 */
export function translateUserName(name = '', lang = 'en') {
  if (!name || lang === 'en') return name;

  const raw = String(name).trim();
  const lower = raw.toLowerCase();

  // Handle prefix like "Dr." or "Dr "
  const isDoctor = /^dr\.?\s+/i.test(raw);
  const cleanName = raw.replace(/^dr\.?\s+/i, '').trim();
  const cleanLower = cleanName.toLowerCase();

  const docPrefix = {
    hi: 'डॉ. ',
    ta: 'டாக்டர் ',
    te: 'డాక్టర్ '
  }[lang] || 'Dr. ';

  // Exact match in dictionary
  if (USER_NAMES_DICT[lower]?.[lang]) {
    return USER_NAMES_DICT[lower][lang];
  }
  if (USER_NAMES_DICT[cleanLower]?.[lang]) {
    const translatedClean = USER_NAMES_DICT[cleanLower][lang];
    return isDoctor ? `${docPrefix}${translatedClean.replace(/^.*?\.\s+|^.*?ர\s+|^.*?ర్\s+/, '')}` : translatedClean;
  }

  // Transliterate word by word
  const words = cleanName.split(/\s+/);
  const transliterated = words.map(w => transliterateWord(w, lang)).join(' ');
  return isDoctor ? `${docPrefix}${transliterated}` : transliterated;
}

/**
 * Translates a health centre or hospital name to the selected language
 */
export function translateHospitalName(name = '', lang = 'en') {
  if (!name || lang === 'en') return name;

  const raw = String(name).trim();
  if (HOSPITAL_NAMES_DICT[raw]?.[lang]) {
    return HOSPITAL_NAMES_DICT[raw][lang];
  }

  // Check case-insensitive
  const entry = Object.entries(HOSPITAL_NAMES_DICT).find(
    ([k]) => k.toLowerCase() === raw.toLowerCase()
  );
  if (entry && entry[1]?.[lang]) {
    return entry[1][lang];
  }

  // Component-wise translation of common hospital keywords
  let translated = raw;
  const keywordReplacements = {
    hi: [
      [/Hospital/gi, 'अस्पताल'],
      [/Hospitals/gi, 'हॉस्पिटल्स'],
      [/Primary Health Centre/gi, 'प्राथमिक स्वास्थ्य केंद्र'],
      [/Health Centre/gi, 'स्वास्थ्य केंद्र'],
      [/Clinic/gi, 'क्लिनिक'],
      [/Pharmacy/gi, 'फार्मेसी'],
      [/Trauma Care/gi, 'ट्रॉमा केयर'],
      [/Medical College/gi, 'मेडिकल कॉलेज'],
      [/Dispensary/gi, 'डिस्पेंसरी'],
      [/Polyclinic/gi, 'पॉलीक्लिनिक'],
      [/Government/gi, 'सरकारी'],
      [/Community/gi, 'सामुदायिक'],
      [/Wellness/gi, 'कल्याण']
    ],
    ta: [
      [/Hospitals/gi, 'மருத்துவமனைகள்'],
      [/Hospital/gi, 'மருத்துவமனை'],
      [/Primary Health Centre/gi, 'ஆரம்ப சுகாதார நிலையம்'],
      [/Health Centre/gi, 'சுகாதார நிலையம்'],
      [/Clinic/gi, 'கிளினிக்'],
      [/Pharmacy/gi, 'பார்மசி'],
      [/Trauma Care/gi, 'ட்ராமா கேர்'],
      [/Medical College/gi, 'மருத்துவக் கல்லூரி'],
      [/Dispensary/gi, 'மருந்தகம்'],
      [/Polyclinic/gi, 'பாலிகிளினிக்'],
      [/Government/gi, 'அரசு'],
      [/Community/gi, 'சமூக நல'],
      [/Wellness/gi, 'நல்வாழ்வு']
    ],
    te: [
      [/Hospitals/gi, 'హాస్పిటల్స్'],
      [/Hospital/gi, 'ఆసుపత్రి'],
      [/Primary Health Centre/gi, 'ప్రాథమిక ఆరోగ్య కేంద్రం'],
      [/Health Centre/gi, 'ఆరోగ్య కేంద్రం'],
      [/Clinic/gi, 'క్లినిక్'],
      [/Pharmacy/gi, 'ఫార్మసీ'],
      [/Trauma Care/gi, 'ట్రామా కేర్'],
      [/Medical College/gi, 'మెడికల్ కాలేజ్'],
      [/Dispensary/gi, 'డిస్పెన్సరీ'],
      [/Polyclinic/gi, 'పాలీక్లినిక్'],
      [/Government/gi, 'ప్రభుత్వ'],
      [/Community/gi, 'కమ్యూనిటీ'],
      [/Wellness/gi, 'వెల్నెస్']
    ]
  };

  if (keywordReplacements[lang]) {
    keywordReplacements[lang].forEach(([reg, rep]) => {
      translated = translated.replace(reg, rep);
    });
  }

  return translated;
}

/**
 * Translates a location / address string to the selected language
 */
export function translateLocation(location = '', lang = 'en') {
  if (!location || lang === 'en') return location;

  const raw = String(location).trim();
  if (LOCATION_DICT[raw]?.[lang]) {
    return LOCATION_DICT[raw][lang];
  }

  const entry = Object.entries(LOCATION_DICT).find(
    ([k]) => k.toLowerCase() === raw.toLowerCase()
  );
  if (entry && entry[1]?.[lang]) {
    return entry[1][lang];
  }

  // Address token replacements
  let translated = raw;
  const commonLocationReplacements = {
    hi: [
      [/Main Road/gi, 'मेन रोड'],
      [/Cross Street/gi, 'क्रॉस स्ट्रीट'],
      [/Cross Road/gi, 'क्रॉस रोड'],
      [/Road/gi, 'रोड'],
      [/Street/gi, 'स्ट्रीट'],
      [/Lane/gi, 'लेन'],
      [/Opposite/gi, 'के सामने'],
      [/Near/gi, 'के पास'],
      [/Block/gi, 'ब्लॉक'],
      [/Chennai/gi, 'चेन्नई'],
      [/Coimbatore/gi, 'कोयंबटूर'],
      [/Madurai/gi, 'मदुरै'],
      [/Bengaluru/gi, 'बेंगलुरु'],
      [/Hyderabad/gi, 'हैदराबाद'],
      [/Delhi/gi, 'दिल्ली'],
      [/Tamil Nadu/gi, 'तमिलनाडु'],
      [/Karnataka/gi, 'कर्नाटक'],
      [/Telangana/gi, 'तेलंगाना']
    ],
    ta: [
      [/Main Road/gi, 'பிரதான சாலை'],
      [/Cross Street/gi, 'குறுக்குத் தெரு'],
      [/Cross Road/gi, 'குறுக்கு சாலை'],
      [/Road/gi, 'சாலை'],
      [/Street/gi, 'தெரு'],
      [/Lane/gi, 'லேன்'],
      [/Opposite/gi, 'எதிரில்'],
      [/Near/gi, 'அருகில்'],
      [/Block/gi, 'பிளாக்'],
      [/Chennai/gi, 'சென்னை'],
      [/Coimbatore/gi, 'கோயம்புத்தூர்'],
      [/Madurai/gi, 'மதுரை'],
      [/Bengaluru/gi, 'பெங்களூரு'],
      [/Hyderabad/gi, 'ஹைதராபாத்'],
      [/Delhi/gi, 'டெல்லி'],
      [/Tamil Nadu/gi, 'தமிழ்நாடு'],
      [/Karnataka/gi, 'கர்நாடகா'],
      [/Telangana/gi, 'தெலுங்கானா']
    ],
    te: [
      [/Main Road/gi, 'మెయిన్ రోడ్'],
      [/Cross Street/gi, 'క్రాస్ స్ట్రీట్'],
      [/Cross Road/gi, 'క్రాస్ రోడ్'],
      [/Road/gi, 'రోడ్'],
      [/Street/gi, 'వీధి'],
      [/Lane/gi, 'లేన్'],
      [/Opposite/gi, 'ఎదురుగా'],
      [/Near/gi, 'దగ్గర'],
      [/Block/gi, 'బ్లాక్'],
      [/Chennai/gi, 'చెన్నై'],
      [/Coimbatore/gi, 'కోయంబత్తూరు'],
      [/Madurai/gi, 'మదురై'],
      [/Bengaluru/gi, 'బెంగళూరు'],
      [/Hyderabad/gi, 'హైదరాబాద్'],
      [/Delhi/gi, 'ఢిల్లీ'],
      [/Tamil Nadu/gi, 'తమిళనాడు'],
      [/Karnataka/gi, 'కర్ణాటక'],
      [/Telangana/gi, 'తెలంగాణ']
    ]
  };

  if (commonLocationReplacements[lang]) {
    commonLocationReplacements[lang].forEach(([reg, rep]) => {
      translated = translated.replace(reg, rep);
    });
  }

  return translated;
}

/**
 * Translates a city name to the selected language
 */
export function translateCity(city = '', lang = 'en') {
  if (!city || lang === 'en') return city;
  const raw = String(city).trim();
  if (LOCATION_DICT[raw]?.[lang]) return LOCATION_DICT[raw][lang];
  return translateLocation(city, lang);
}

/**
 * Translates doctor specialization to the selected language
 */
export function translateSpecialization(spec = '', lang = 'en') {
  if (!spec || lang === 'en') return spec;
  const raw = String(spec).trim();
  if (MEDICAL_TERMS_DICT[raw]?.[lang]) return MEDICAL_TERMS_DICT[raw][lang];
  return spec;
}

/**
 * Translates clinical diagnosis & prescription notes
 */
export function translateDiagnosis(diag = '', lang = 'en') {
  if (!diag || lang === 'en') return diag;
  const raw = String(diag).trim();
  if (MEDICAL_TERMS_DICT[raw]?.[lang]) return MEDICAL_TERMS_DICT[raw][lang];
  return diag;
}

/**
 * Translates medicine dosage schedule
 */
export function translateSchedule(sched = '', lang = 'en') {
  if (!sched || lang === 'en') return sched;
  const raw = String(sched).trim();
  if (MEDICAL_TERMS_DICT[raw]?.[lang]) return MEDICAL_TERMS_DICT[raw][lang];

  let res = raw;
  const schedReplacements = {
    hi: [
      [/Morning/gi, 'सुबह'],
      [/Night/gi, 'रात'],
      [/Afternoon/gi, 'दोपहर'],
      [/After meals/gi, 'भोजन के बाद'],
      [/Before meals/gi, 'भोजन से पहले'],
      [/days/gi, 'दिन'],
      [/day/gi, 'दिन'],
      [/Once daily/gi, 'दिन में एक बार'],
      [/Twice daily/gi, 'दिन में दो बार']
    ],
    ta: [
      [/Morning/gi, 'காலை'],
      [/Night/gi, 'இரவு'],
      [/Afternoon/gi, 'மதியம்'],
      [/After meals/gi, 'உணவுக்குப் பிறகு'],
      [/Before meals/gi, 'உணவுக்கு முன்'],
      [/days/gi, 'நாட்கள்'],
      [/day/gi, 'நாள்'],
      [/Once daily/gi, 'ஒரு முறை'],
      [/Twice daily/gi, 'இரு முறை']
    ],
    te: [
      [/Morning/gi, 'ఉదయం'],
      [/Night/gi, 'రాత్రి'],
      [/Afternoon/gi, 'మధ్యాహ్నం'],
      [/After meals/gi, 'భోజనం తర్వాత'],
      [/Before meals/gi, 'భోజనానికి ముందు'],
      [/days/gi, 'రోజులు'],
      [/day/gi, 'రోజు'],
      [/Once daily/gi, 'రోజుకు ఒకసారి'],
      [/Twice daily/gi, 'రోజుకు రెండుసార్లు']
    ]
  };

  if (schedReplacements[lang]) {
    schedReplacements[lang].forEach(([reg, rep]) => {
      res = res.replace(reg, rep);
    });
  }
  return res;
}
