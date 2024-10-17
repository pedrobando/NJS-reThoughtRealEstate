import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import Link from "next/link";
  import React from "react";
  
  
  export const metadata = {
      title: "Cookie Policy",
      description: "Cookie of rethought-realestate.com",
      openGraph: {
        title: "Cookie Policy of rethought-realestate.com",
        description: "Cookie Policy of rethought-realestate.com",
        url: "https://www.rethought-realestate.com/cookie-policy",
      },
    };
  
  const CookiePolicy = () => {
    return (
      <div className="container">
        <article className="prose prose-l p-4 max-w-none py-[100px]">
          <h1>Cookie Policy of rethought-realestate.com</h1>
          <h3>Cookies and other Identifiers</h3>
<p>
  Cookies and other Identifiers consist of portions of code installed in the browser that assist the Owner in providing the Service according to the purposes described. Some of the purposes for which Cookies are installed may also require the User’s consent.
</p>
<p>
  Where the installation of Cookies is based on consent, such consent can be freely withdrawn at any time following the instructions provided in this document.
</p>
<p>
  To find more information dedicated to Californian consumers and their privacy rights, Users may read the <Link href="/privacy-policy">privacy policy</Link>.
</p>

<h4>Technical Cookies and Cookies serving aggregated statistical purposes</h4>
<p><b>Activity strictly necessary for the functioning of the Service</b><br/>This Website uses Cookies to save the User’s session and to carry out other activities that are strictly necessary for the operation of this Website, for example in relation to the distribution of traffic.</p>

<p><b>Activity regarding the saving of preferences, optimization, and statistics</b><br/>This Website uses Cookies to save browsing preferences and to optimize the User’s browsing experience. Among these Cookies are, for example, those used for the setting of language and currency preferences or for the management of first party statistics employed directly by the Owner of the site.</p>


<h4>Other types of Cookies or third parties that install Cookies</h4>
<p>
  Some of the services listed on the <Link href="https://rethought-realestate.com/privacy-policy">privacy policy</Link> collect statistics in an anonymized and aggregated form and may not require the consent of the User or may be managed directly by the Owner – depending on how they are described – without the help of third parties.
</p>
<p>
  If any third party operated services are listed among the tools on the <Link href="https://rethought-realestate.com/privacy-policy">privacy policy</Link>, these may be used to track Users’ browsing habits – in addition to the information specified herein and without the Owner’s knowledge. Please refer to the privacy policy of the listed services for detailed information.
</p>

<h4>How to provide or withdraw consent to the installation of Cookies</h4>
<p>
  In addition to what is specified in this document, the User can manage preferences for Cookies directly from within their own browser and prevent – for example – third parties from installing Cookies. Through browser preferences, it is also possible to delete Cookies installed in the past, including the Cookies that may have saved the initial consent for the installation of Cookies by this website.
</p>
<p>
  Users can, for example, find information about how to manage Cookies in the most commonly used browsers at the following addresses: Google Chrome, Mozilla Firefox, Apple Safari and Microsoft Internet Explorer.
</p>
<p>
  With regard to Cookies installed by third parties, Users can manage their preferences and withdrawal of their consent by clicking the related opt-out link (if provided), by using the means provided in the third party’s privacy policy, or by contacting the third party.
</p>
<p>
  Notwithstanding the above, Users are hereby informed that they may follow the instructions provided by YourOnlineChoices (EU), the Network Advertising Initiative (US) and the Digital Advertising Alliance (US), DAAC (Canada), DDAI (Japan) or other similar services. Such initiatives allow Users to select their tracking preferences for most of the advertising tools. The Owner thus recommends that Users make use of these resources in addition to the information provided in this document.
</p>

<h4>Owner and Data Controller</h4>
<address>
  reThought Real Estate LLC – 2625 S Greeley St Ste 111 Milwaukee, WI 53207<br/>
  Owner contact email: hello @ rethought-realestate.com
</address>

<p>
  Since the installation of third-party Cookies and other tracking systems through the services used within this Website cannot be technically controlled by the Owner, any specific references to Cookies and tracking systems installed by third parties are to be considered indicative. In order to obtain complete information, the User is kindly requested to consult the privacy policy for the respective third-party services listed in this document.
</p>
<p>
  Given the objective complexity surrounding the identification of technologies based on Cookies, Users are encouraged to contact the Owner should they wish to receive any further information on the use of Cookies by this Website.
</p>

<p><strong>Latest update:</strong> January 27, 2020</p>
        </article>
      </div>
    );
  };
  
  export default CookiePolicy;
  