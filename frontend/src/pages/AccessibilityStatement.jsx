import React from "react";

import Header from "../partials/Header";

function AccessibilityStatement() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-full mx-auto text-left pb-12 md:pb-20">
                <h1 className="h3 mb-4">IncSkill accessibility statement</h1>
                <p className="text-sm text-gray-600">
                  <p>
                    IncSkill is committed to ensure digital accessibility to all
                    including people with disabilities. To meet this commitment,
                    the IncSkill website is designed to be accessible and has
                    been tested by people with disabilities using various
                    assistive technologies. The website site conforms to Web
                    Content Accessibility Guidelines (WCAG) 2.1, Level AA issued
                    by the Web Accessibility Initiative (WAI) of the World Wide
                    Web Consortium (W3C) and is also Section 508 compliant. The
                    website is tested and monitored regularly to incorporate
                    features that enhance accessibility and usability for people
                    with disabilities. Should you experience any issues, please
                    do not hesitate to reach us at{" "}
                    <a href="mailTo:contact@incskill.com" class="font-bold">
                      contact@incskill.com
                    </a>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AccessibilityStatement;
