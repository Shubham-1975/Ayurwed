import React from "react";

const About = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6">
          About Us
        </h2>

        {/* Who We Are */}
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          <span className="font-semibold text-green-700">Shree Ayurved</span> is
          dedicated to promoting the healing power of nature through 100%
          herbal, authentic, and chemical-free Ayurvedic products. Our journey
          began with a simple belief — ancient Ayurvedic wisdom holds the key to
          holistic wellness in the modern world.
        </p>

        {/* Sections Grid */}
        <div className="grid gap-8 md:grid-cols-2 text-left">
          {/* Our History */}
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              📜 Our History
            </h3>
            <p className="text-gray-700 text-sm">
              Founded with a mission to bring ancient Ayurvedic wisdom to every
              household, Shree Ayurved started as a small initiative and has
              grown into a trusted name across India. We remain committed to
              purity, tradition, and sustainability.
            </p>
          </div>

          {/* Mission & Vision */}
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              🎯 Mission & Vision
            </h3>
            <p className="text-gray-700 text-sm">
              Our mission is to make authentic Ayurvedic products accessible to
              all while preserving natural healing traditions. We envision a
              future where every household embraces wellness through Ayurveda.
            </p>
          </div>

          {/* Benefits of Membership */}
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              🎁 Benefits of Membership
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Exclusive discounts on all products</li>
              <li>Free consultation with Ayurvedic experts</li>
              <li>Early access to new launches and events</li>
              <li>Membership certificates and recognition</li>
            </ul>
          </div>

          {/* Goals & Objectives */}
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              🚀 Goals & Objectives
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Promote Ayurvedic lifestyle and wellness</li>
              <li>Ensure product quality and authenticity</li>
              <li>Expand reach to remote and rural areas</li>
              <li>Educate the public through campaigns</li>
            </ul>
          </div>

          {/* Committee Members */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              👥 Committee Members
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              Our dedicated committee includes experienced professionals and
              Ayurvedic practitioners who guide our vision and manage operations
              with integrity.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Dr. Sushma Verma – Chief Ayurvedic Consultant</li>
              <li>Mr. Rahul Mehra – Operations & Membership Head</li>
              <li>Ms. Neha Gupta – Finance & Audit</li>
              <li>Mr. Ankit Raj – Events & Outreach</li>
              <li>Mrs. Kavita Singh – Welfare & Social Programs</li>
            </ul>
          </div>

          {/* Department Allocation */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              🏢 Department Allocation
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>
                <strong>Medical:</strong> Ayurvedic consultation and product
                safety
              </li>
              <li>
                <strong>Dispute Resolution:</strong> Handling customer concerns
                and feedback
              </li>
              <li>
                <strong>Retirement/Pension:</strong> Member support and benefits
                for senior citizens
              </li>
              <li>
                <strong>Membership:</strong> Enrollments, certificates, and
                exclusive access
              </li>
              <li>
                <strong>Finance:</strong> Accounting, auditing, and budgeting
              </li>
              <li>
                <strong>Welfare & Events:</strong> Wellness camps, seminars, and
                charity drives
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
