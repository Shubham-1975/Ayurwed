import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const About = () => {
  const { translatedTexts: t } = useContext(LanguageContext);

  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-br from-green-100 via-white to-green-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            {t["About Us"] || "About Us"}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            <span className="font-semibold text-green-700">Shree Ayurved</span>{" "}
            {t[
              "is dedicated to promoting the healing power of nature through 100% herbal, authentic, and chemical-free Ayurvedic products. Our journey began with a simple belief — ancient Ayurvedic wisdom holds the key to holistic wellness in the modern world."
            ] ||
              "is dedicated to promoting the healing power of nature through 100% herbal, authentic, and chemical-free Ayurvedic products. Our journey began with a simple belief — ancient Ayurvedic wisdom holds the key to holistic wellness in the modern world."}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {/* Card Template */}
          {[
            {
              title: "📜 " + (t["Our History"] || "Our History"),
              content:
                t[
                  "Founded with a mission to bring ancient Ayurvedic wisdom to every household, Shree Ayurved started as a small initiative and has grown into a trusted name across India. We remain committed to purity, tradition, and sustainability."
                ] ||
                "Founded with a mission to bring ancient Ayurvedic wisdom to every household, Shree Ayurved started as a small initiative and has grown into a trusted name across India. We remain committed to purity, tradition, and sustainability.",
            },
            {
              title: "🎯 " + (t["Mission & Vision"] || "Mission & Vision"),
              content:
                t[
                  "Our mission is to make authentic Ayurvedic products accessible to all while preserving natural healing traditions. We envision a future where every household embraces wellness through Ayurveda."
                ] ||
                "Our mission is to make authentic Ayurvedic products accessible to all while preserving natural healing traditions. We envision a future where every household embraces wellness through Ayurveda.",
            },
            {
              title:
                "🎁 " +
                (t["Benefits of Membership"] || "Benefits of Membership"),
              list: [
                t["Exclusive discounts on all products"] ||
                  "Exclusive discounts on all products",
                t["Free consultation with Ayurvedic experts"] ||
                  "Free consultation with Ayurvedic experts",
                t["Early access to new launches and events"] ||
                  "Early access to new launches and events",
                t["Membership certificates and recognition"] ||
                  "Membership certificates and recognition",
              ],
            },
            {
              title: "🚀 " + (t["Goals & Objectives"] || "Goals & Objectives"),
              list: [
                t["Promote Ayurvedic lifestyle and wellness"] ||
                  "Promote Ayurvedic lifestyle and wellness",
                t["Ensure product quality and authenticity"] ||
                  "Ensure product quality and authenticity",
                t["Expand reach to remote and rural areas"] ||
                  "Expand reach to remote and rural areas",
                t["Educate the public through campaigns"] ||
                  "Educate the public through campaigns",
              ],
            },
            {
              title: "👥 " + (t["Committee Members"] || "Committee Members"),
              list: [
                t["Dr. Sushma Verma – Chief Ayurvedic Consultant"] ||
                  "Dr. Sushma Verma – Chief Ayurvedic Consultant",
                t["Mr. Rahul Mehra – Operations & Membership Head"] ||
                  "Mr. Rahul Mehra – Operations & Membership Head",
                t["Ms. Neha Gupta – Finance & Audit"] ||
                  "Ms. Neha Gupta – Finance & Audit",
                t["Mr. Ankit Raj – Events & Outreach"] ||
                  "Mr. Ankit Raj – Events & Outreach",
                t["Mrs. Kavita Singh – Welfare & Social Programs"] ||
                  "Mrs. Kavita Singh – Welfare & Social Programs",
              ],
            },
            {
              title:
                "🏢 " + (t["Department Allocation"] || "Department Allocation"),
              list: [
                `${t["Medical"] || "Medical"}: ${
                  t["Ayurvedic consultation and product safety"] ||
                  "Ayurvedic consultation and product safety"
                }`,
                `${t["Dispute Resolution"] || "Dispute Resolution"}: ${
                  t["Handling customer concerns and feedback"] ||
                  "Handling customer concerns and feedback"
                }`,
                `${t["Retirement/Pension"] || "Retirement/Pension"}: ${
                  t["Member support and benefits for senior citizens"] ||
                  "Member support and benefits for senior citizens"
                }`,
                `${t["Membership"] || "Membership"}: ${
                  t["Enrollments, certificates, and exclusive access"] ||
                  "Enrollments, certificates, and exclusive access"
                }`,
                `${t["Finance"] || "Finance"}: ${
                  t["Accounting, auditing, and budgeting"] ||
                  "Accounting, auditing, and budgeting"
                }`,
                `${t["Welfare & Events"] || "Welfare & Events"}: ${
                  t["Wellness camps, seminars, and charity drives"] ||
                  "Wellness camps, seminars, and charity drives"
                }`,
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                {item.title}
              </h3>
              {item.content && (
                <p className="text-sm text-gray-700">{item.content}</p>
              )}
              {item.list && (
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mt-2">
                  {item.list.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
