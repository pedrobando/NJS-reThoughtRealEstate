import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import Link from "next/link";
  import React from "react";

  export const metadata = {
    title: "DMCA Notice",
    description: "Digital Millennium Copyright Act (DMCA) Statement for reThought Real Estate LLC",
    openGraph: {
      title: "DMCA Notice | reThought Real Estate LLC",
      description: "DMCA Statement for reThought Real Estate LLC",
      url: "https://www.rethought-realestate.com/dmca",
    },
  };
  
  const DMCANotice = () => {
    return (
      <div className="container">
        <article className="prose prose-l p-4 max-w-none py-[100px]">
          <h1>Digital Millennium Copyright Act (DMCA) Statement</h1>
         
<h3>DMCA Policy</h3>
<p>
  reThought Real Estate LLC respects the intellectual property rights of others. It is our policy to respond expeditiously to any notice that Content posted on our website infringes the copyright rights of others. All claims of copyright infringement will be investigated and appropriate action will be taken, including but not limited to removal of the infringing Content and termination of user access, if applicable.
</p>
<p>
  If you believe Content on our website infringes your copyrighted material, you must provide written notice (a “Takedown Notice”) to our DMCA agent listed below. Such Takedown Notice must include:
</p>
<ul>
  <li>
    A physical or electronic signature of the copyright owner or a person authorized to act on behalf of the copyright owner;
  </li>
  <li>
    Identification of the Content on our website that is claimed to be infringing your copyrighted work, and URLs or similar information sufficient to permit reThought Real Estate LLC to locate that Content on our websites and services;
  </li>
  <li>
    Information reasonably sufficient to permit reThought Real Estate LLC to contact you, including your address, telephone number and email address;
  </li>
  <li>
    A statement that you have a good faith belief that use of the Content on our website in the manner complained of is not authorized by the copyright owner, its agent, or the law; and
  </li>
  <li>
    A statement that the information in the notification is accurate, and under penalty of perjury, that you are the copyright owner, or are authorized to act on behalf of the owner of the copyright that is allegedly infringed.
  </li>
</ul>
<p>
  The above information must be submitted in writing to the following Designated Email: hello @ rethought-realestate.com
</p>
<p>
  If we remove or disable Content or access to Content in response to a Takedown Notice, we will make a good faith attempt to contact the provider of the alleged infringing Content so that they may make a counter notification. We may keep a record of Takedown Notices provided by you and any subsequent action taken.
</p>
<p>
  Please be advised that you may be liable for damages if you materially misrepresent that Content on our website is infringing your copyrights.
</p>

        </article>
      </div>
    );
  };
  
  export default DMCANotice;
  