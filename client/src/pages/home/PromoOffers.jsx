import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

function PromoOffers() {
  return (
    <div className="w-full py-8 text-slate-800 overflow-hidden relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Welcome & Intro Section */}
        <Slide direction="up" triggerOnce>
          <div className="text-center mb-12">
            <span className="bg-amber-500/10 text-amber-600 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider">
              Limited Time Mega Offer 🔥
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 bg-clip-text text-transparent uppercase tracking-tight">
              100% CASHBACK OFFER!
            </h2>
            <div className="mt-6 max-w-3xl mx-auto bg-white border border-slate-200 p-6 md:p-8 rounded-2xl shadow-lg">
              <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
                प्रिय ग्राहक, यदि आपने अपने या अपने परिवार के लिए <span className="text-amber-600 font-bold">Non-RTO Electric Scooter</span> खरीदने का मन बनाया है, तो दमदार मजबूती और सभी नए फीचर्स के साथ <span className="text-[#0c93cb] font-semibold">Wroley Electric Scooter</span> को अपने घर ले जाइए और पाएं <span className="text-green-600 font-bold underline">100% Cashback</span> का धमाकेदार ऑफर!
              </p>
              <div className="mt-4 text-xs md:text-sm text-slate-500 flex flex-wrap items-center justify-center gap-2 font-semibold">
                <span>📍 Available for Delhi, Delhi-NCR & Countrywide Orders</span>
                <span className="hidden md:inline">•</span>
                <span>*Conditions Apply</span>
              </div>
            </div>
          </div>
        </Slide>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Single Light */}
          <Fade triggerOnce delay={100}>
            <div className="bg-white border border-slate-200 hover:border-amber-500/50 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-2 relative group">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-xs uppercase px-3 py-1 rounded-full shadow-lg">
                100% Cashback
              </div>
              <div>
                <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/20 font-bold text-xl">
                  01
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Single Light Scooter</h3>
                <p className="text-slate-600 text-sm mb-6 font-semibold">Equipped with standard high-performance single headlight system.</p>
                <div className="mb-6">
                  <span className="text-sm text-slate-500 block font-semibold">Offer Price (Including GST)</span>
                  <span className="text-3xl md:text-4xl font-extrabold text-amber-600">₹59,999/-</span>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <ul className="space-y-2 text-sm text-slate-700 font-semibold">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Lithium Battery & Charger Included
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    100% Cashback Scheme Valid
                  </li>
                </ul>
              </div>
            </div>
          </Fade>

          {/* Card 2: Double Light */}
          <Fade triggerOnce delay={200}>
            <div className="bg-white border border-slate-200 hover:border-orange-500/50 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-2 relative group scale-100 md:scale-105 border-orange-500/30">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-xs uppercase px-3 py-1 rounded-full shadow-lg">
                Most Popular
              </div>
              <div>
                <div className="w-12 h-12 bg-orange-500/10 text-orange-600 rounded-2xl flex items-center justify-center mb-6 border border-orange-500/20 font-bold text-xl">
                  02
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Double Light Scooter</h3>
                <p className="text-slate-600 text-sm mb-6 font-semibold">Dual headlight layout for ultimate night visibility and sporty style.</p>
                <div className="mb-6">
                  <span className="text-sm text-slate-500 block font-semibold">Offer Price (Including GST)</span>
                  <span className="text-3xl md:text-4xl font-extrabold text-orange-600">₹69,999/-</span>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <ul className="space-y-2 text-sm text-slate-700 font-semibold">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Lithium Battery & Charger Included
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    100% Cashback Scheme Valid
                  </li>
                </ul>
              </div>
            </div>
          </Fade>

          {/* Card 3: A-One Model */}
          <Fade triggerOnce delay={300}>
            <div className="bg-white border border-slate-200 hover:border-red-500/50 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-2 relative group">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold text-xs uppercase px-3 py-1 rounded-full shadow-lg">
                Premium Choice
              </div>
              <div>
                <div className="w-12 h-12 bg-red-500/10 text-red-600 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 font-bold text-xl">
                  03
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">A-One Model Scooter</h3>
                <p className="text-slate-600 text-sm mb-6 font-semibold">Our flagship high-end model featuring premium aesthetics & range.</p>
                <div className="mb-6">
                  <span className="text-sm text-slate-500 block font-semibold">Offer Price (Including GST)</span>
                  <span className="text-3xl md:text-4xl font-extrabold text-red-600">₹79,999/-</span>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <ul className="space-y-2 text-sm text-slate-700 font-semibold">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Lithium Battery & Charger Included
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    100% Cashback Scheme Valid
                  </li>
                </ul>
              </div>
            </div>
          </Fade>
        </div>

        {/* Warranty & Finance Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Warranty Card */}
          <Slide direction="left" triggerOnce>
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-md h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 text-blue-600 rounded-2xl border border-blue-500/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">3 Years Warranty</h3>
                    <p className="text-sm text-slate-500">Complete peace of mind for 36 months</p>
                  </div>
                </div>
                <p className="text-slate-700 text-sm mb-6 leading-relaxed font-semibold">
                  सभी गाड़ियाँ 3 साल की वारंटी के साथ आती हैं। वारंटी के अंतर्गत नीचे दिए गए पार्ट्स कवर होंगे:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    <span className="text-sm text-slate-800 font-semibold">Battery</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    <span className="text-sm text-slate-800 font-semibold">Charger</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    <span className="text-sm text-slate-800 font-semibold">Controller</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    <span className="text-sm text-slate-800 font-semibold">Motor</span>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* Finance Options Card */}
          <Slide direction="right" triggerOnce>
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-md h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-500/10 text-green-600 rounded-2xl border border-green-500/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Easy Finance & EMI</h3>
                    <p className="text-sm text-slate-500">Flexible payment schemes tailored for you</p>
                  </div>
                </div>
                <p className="text-slate-700 text-sm mb-6 leading-relaxed font-semibold">
                  हम आपकी सुविधा के लिए आसान फाइनेंस विकल्प प्रदान करते हैं जिससे आप बिना किसी परेशानी के स्कूटर खरीद सकें:
                </p>
                <ul className="space-y-3 text-sm text-slate-700 font-semibold">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span><strong>0% Down Payment:</strong> EMI Card, Credit Card या अन्य किसी कार्ड के साथ 0% डाउन पेमेंट पर उपलब्ध।</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span><strong>Aadhaar & PAN Card:</strong> आपके सिबिल स्कोर (CIBIL Score) के अनुसार आसान डाउन पेमेंट की सुविधा।</span>
                  </li>
                </ul>
              </div>
            </div>
          </Slide>
        </div>

        {/* Dealer Opportunity & CTA Section */}
        <Fade triggerOnce>
          <div className="bg-gradient-to-r from-amber-500/5 via-orange-600/10 to-amber-500/5 border border-orange-500/20 rounded-3xl p-8 text-center relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>

            <span className="bg-amber-400/20 text-amber-700 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Business Opportunity 💼
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold mt-4 mb-2 text-slate-900">
              Wroley Electric Scooter डीलर बनें!
            </h3>
            <p className="text-base md:text-lg text-slate-700 max-w-2xl mx-auto mb-6 font-semibold">
              छोटी सी रकम से निवेश करके आप हमारे अधिकृत डीलर बन सकते हैं और महीने में लाखों तथा 18 महीनों में करोड़ों कमा सकते हैं!
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="https://www.wroleyelectricscooter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Visit Our Website</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <a
                href="tel:+918527662372"
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                <span>Call +91 8527662372</span>
              </a>
            </div>
            
            <p className="text-xs text-slate-500 mt-6 font-semibold">
              Official Website: <a href="https://www.wroleyelectricscooter.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 underline">www.wroleyelectricscooter.com</a>
            </p>
          </div>
        </Fade>

      </div>
    </div>
  );
}

export default PromoOffers;
