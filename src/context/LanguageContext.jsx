import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [translatedTexts, setTranslatedTexts] = useState({});

  // Texts you want to translate
  const keysToTranslate = [
    "Home",
    "About",
    "Contact",
    "Our Branches",
    "",
    "",
    "Patna",
    "Kolkata",
    "123 Ayurvedic Street, Connaught Place, Delhi",
    "456 Herbal Lane, Andheri West, Mumbai",
    "78 Nature Cure Road, Boring Road, Patna",
    "22 Healing Herb Avenue, Salt Lake, Kolkata",
    "Our Products",
    "Show More",
    "Chyawanprash",
    "Turmeric Powder",
    "Ashwagandha Capsules",
    "Amla Juice",
    "Giloy Tablets",
    "Neem Capsules",
    "Brahmi Syrup",
    "Tulsi Drops",
    "Herbal Tea",
    "Triphala Powder",
    "Welcome to Shree Ayurved",
    "Pure Ayurvedic & Herbal Products for Your Healthy Life.",
    "Explore Products",
    "Frequently Asked Questions",
    "What is Ayurvedic medicine?",
    "Ayurvedic medicine is a natural system of healing that originated in India over 3,000 years ago. It uses herbal compounds, special diets, and other health practices.",
    "Are your products 100% natural?",
    "Yes, all our products are made from pure herbal and natural ingredients without harmful chemicals or preservatives.",
    "Do you ship across India?",
    "Yes, we offer nationwide delivery across India with standard and express shipping options.",
    "How can I track my order?",
    "Once your order is shipped, you will receive an email and SMS with a tracking link.",
    "Home",
    "About",
    "Contact",
    "Products",
    "FAQ",
    "Quick Links",
    "Contact Us",
    "All rights reserved.",
    "About Us",
    "Our History",
    "Mission & Vision",
    "Benefits of Membership",
    "Goals & Objectives",
    "Committee Members",
    "Department Allocation",
    "is dedicated to promoting the healing power of nature through 100% herbal, authentic, and chemical-free Ayurvedic products. Our journey began with a simple belief — ancient Ayurvedic wisdom holds the key to holistic wellness in the modern world.",
    "Founded with a mission to bring ancient Ayurvedic wisdom to every household, Shree Ayurved started as a small initiative and has grown into a trusted name across India. We remain committed to purity, tradition, and sustainability.",
    "Our mission is to make authentic Ayurvedic products accessible to all while preserving natural healing traditions. We envision a future where every household embraces wellness through Ayurveda.",
    "Exclusive discounts on all products",
    "Free consultation with Ayurvedic experts",
    "Early access to new launches and events",
    "Membership certificates and recognition",
    "Promote Ayurvedic lifestyle and wellness",
    "Ensure product quality and authenticity",
    "Expand reach to remote and rural areas",
    "Educate the public through campaigns",
    "Our dedicated committee includes experienced professionals and Ayurvedic practitioners who guide our vision and manage operations with integrity.",
    "Dr. Sushma Verma – Chief Ayurvedic Consultant",
    "Mr. Rahul Mehra – Operations & Membership Head",
    "Ms. Neha Gupta – Finance & Audit",
    "Mr. Ankit Raj – Events & Outreach",
    "Mrs. Kavita Singh – Welfare & Social Programs",
    "Medical",
    "Ayurvedic consultation and product safety",
    "Dispute Resolution",
    "Handling customer concerns and feedback",
    "Retirement/Pension",
    "Member support and benefits for senior citizens",
    "Membership",
    "Enrollments, certificates, and exclusive access",
    "Finance",
    "Accounting, auditing, and budgeting",
    "Welfare & Events",
    "Wellness camps, seminars, and charity drives",
  ];

  const TRANSLATE_API = "https://api.mymemory.translated.net/get";

  useEffect(() => {
    const fetchTranslations = async () => {
      const translations = {};

      for (const key of keysToTranslate) {
        try {
          const response = await axios.get(TRANSLATE_API, {
            params: {
              q: key,
              langpair: `en|${language}`,
            },
          });

          const translated = response.data.responseData.translatedText;
          translations[key] = translated;
        } catch (error) {
          console.error(`Translation error for "${key}":`, error);
          translations[key] = key; // fallback to English
        }
      }

      setTranslatedTexts(translations);
    };

    // Only fetch translations if the language is not English
    if (language !== "en") {
      fetchTranslations();
    } else {
      setTranslatedTexts({});
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "hi" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, translatedTexts }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
