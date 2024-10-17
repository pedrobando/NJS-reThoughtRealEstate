import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import React from "react";


export const metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy of rethought-realestate.com",
    openGraph: {
      title: "Privacy Policy of rethought-realestate.com",
      description: "Privacy Policy of rethought-realestate.com",
      url: "https://www.rethought-realestate.com/privacy-policy",
    },
  };

const PrivacyPolicy = () => {
  return (
    <div className="container">
      <article className="prose prose-l p-4 max-w-none py-[100px]">
        <h1>Privacy Policy of rethought-realestate.com</h1>
        <ul>
          <li>
            This Website collects some Personal Data from its Users. No Personal
            Data will not be shared with third parties.
          </li>
          <li>
            This document has a section dedicated to Californian consumers and
            their privacy rights.
          </li>
          <li>
            This document can be printed for reference by using the print
            command in the settings of any browser.
          </li>
          <li>
            <b>No Personal Data will not be shared with third parties.</b>
          </li>
        </ul>
        <hr />
        <h3>Owner and Data Controller</h3>
        <p>
          reThought Real Estate LLC <br /> 2625 S Greeley St Suite 111,
          Milwaukee, WI 53207
          <br />
          Owner contact email: hello @ rethought-realestate.com
        </p>
        <hr />
        <h3>Types of Data collected</h3>
        <p>
          Among the types of Personal Data that this Website collects, by itself
          or through third parties, there are: Cookies; Usage Data; first name;
          last name; gender; date of birth; phone number; address; state;
          county; email address; ZIP/Postal code; various types of Data; Tax ID;
          city; Data communicated while using the service.
        </p>
        <p>
          Complete details on each type of Personal Data collected are provided
          in the dedicated sections of this privacy policy or by specific
          explanation texts displayed prior to the Data collection.
        </p>

        <p>
          Personal Data may be freely provided by the User, or, in case of Usage
          Data, collected automatically when using this Website. Unless
          specified otherwise, all Data requested by this Website is mandatory
          and failure to provide this Data may make it impossible for this
          Website to provide its services. In cases where this Website
          specifically states that some Data is not mandatory, Users are free
          not to communicate this Data without consequences to the availability
          or the functioning of the Service.
        </p>
        <p>
          Users who are uncertain about which Personal Data is mandatory are
          welcome to contact the Owner.
        </p>

        <p>
          Any use of Cookies – or of other tracking tools – by this Website or
          by the owners of third-party services used by this Website serves the
          purpose of providing the Service required by the User, in addition to
          any other purposes described in the present document and in the Cookie
          Policy, if available.
        </p>

        <p>
          Users are responsible for any third-party Personal Data obtained,
          published or shared through this Website and confirm that they have
          the third party’s consent to provide the Data to the Owner.
        </p>
        <hr />
        <h3>Mode and place of processing the Data</h3>
        <p>
          <b>Methods of processing</b>
          <br />
          The Owner takes appropriate security measures to prevent unauthorized
          access, disclosure, modification, or unauthorized destruction of the
          Data. The Data processing is carried out using computers and/or IT
          enabled tools, following organizational procedures and modes strictly
          related to the purposes indicated. In addition to the Owner, in some
          cases, the Data may be accessible to certain types of persons in
          charge, involved with the operation of this Website (administration,
          sales, marketing, legal, system administration) or external parties
          (such as third-party technical service providers, mail carriers,
          hosting providers, IT companies, communications agencies) appointed,
          if necessary, as Data Processors by the Owner. The updated list of
          these parties may be requested from the Owner at any time.
        </p>

        <p>
          <b>Legal basis of processing</b>
          <br />
          The Owner may process Personal Data relating to Users if one of the
          following applies:
        </p>

        <ul>
          <li>
            Users have given their consent for one or more specific purposes.
            Note: Under some legislations the Owner may be allowed to process
            Personal Data until the User objects to such processing (“opt-out”),
            without having to rely on consent or any other of the following
            legal bases. This, however, does not apply, whenever the processing
            of Personal Data is subject to European data protection law;
          </li>
          <li>
            provision of Data is necessary for the performance of an agreement
            with the User and/or for any pre-contractual obligations thereof;
          </li>
          <li>
            processing is necessary for compliance with a legal obligation to
            which the Owner is subject;
          </li>
          <li>
            processing is related to a task that is carried out in the public
            interest or in the exercise of official authority vested in the
            Owner;
          </li>
          <li>
            processing is necessary for the purposes of the legitimate interests
            pursued by the Owner or by a third party.
          </li>
        </ul>
        <p>
          In any case, the Owner will gladly help to clarify the specific legal
          basis that applies to the processing, and in particular whether the
          provision of Personal Data is a statutory or contractual requirement,
          or a requirement necessary to enter into a contract.
        </p>

        <p>
          <b>Place</b>
          <br />
          The Data is processed at the Owner’s operating offices and in any
          other places where the parties involved in the processing are located.
        </p>

        <p>
          Depending on the User’s location, data transfers may involve
          transferring the User’s Data to a country other than their own. To
          find out more about the place of processing of such transferred Data,
          Users can check the section containing details about the processing of
          Personal Data.
        </p>

        <p>
          Users are also entitled to learn about the legal basis of Data
          transfers to a country outside the European Union or to any
          international organization governed by public international law or set
          up by two or more countries, such as the UN, and about the security
          measures taken by the Owner to safeguard their Data.
        </p>

        <p>
          If any such transfer takes place, Users can find out more by checking
          the relevant sections of this document or inquire with the Owner using
          the information provided in the contact section.
        </p>

        <p>
          <b>Retention time</b>
          <br />
          Personal Data shall be processed and stored for as long as required by
          the purpose they have been collected for. Therefore:
        </p>
        <ul>
          <li>
            Personal Data collected for purposes related to the performance of a
            contract between the Owner and the User shall be retained until such
            contract has been fully performed.
          </li>
          <li>
            Personal Data collected for the purposes of the Owner’s legitimate
            interests shall be retained as long as needed to fulfill such
            purposes. Users may find specific information regarding the
            legitimate interests pursued by the Owner within the relevant
            sections of this document or by contacting the Owner.
          </li>
        </ul>
        <p>
          The Owner may be allowed to retain Personal Data for a longer period
          whenever the User has given consent to such processing, as long as
          such consent is not withdrawn. Furthermore, the Owner may be obliged
          to retain Personal Data for a longer period whenever required to do so
          for the performance of a legal obligation or upon order of an
          authority.
        </p>
        <p>
          Once the retention period expires, Personal Data shall be deleted.
          Therefore, the right to access, the right to erasure, the right to
          rectification and the right to data portability cannot be enforced
          after expiration of the retention period.
        </p>
        <hr />
        <h3>The purposes of processing</h3>
        <p>
          The Data concerning the User is collected to allow the Owner to
          provide its Service, comply with its legal obligations, respond to
          enforcement requests, protect its rights and interests (or those of
          its Users or third parties), detect any malicious or fraudulent
          activity, as well as the following: Interaction with external social
          networks and platforms, Analytics, Contacting the User, Displaying
          content from external platforms, Hosting and backend infrastructure,
          Interaction with data collection platforms and other third parties,
          Interaction with live chat platforms, SPAM protection and Traffic
          optimization and distribution.
        </p>

        <p>
          For specific information about the Personal Data used for each
          purpose, the User may refer to the section “Detailed information on
          the processing of Personal Data”.
        </p>
        <hr />
        <h3>Detailed information on the processing of Personal Data</h3>
        <p>
          Personal Data is collected for the following purposes and using the
          following services:
        </p>
        <div className="flex gap-4">
          <div className="md:w-1/2">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Analytics</AccordionTrigger>
                <AccordionContent>
                  <p>
                    The services contained in this section enable the Owner to
                    monitor and analyze web traffic and can be used to keep
                    track of User behavior.
                  </p>
                  <p>
                    <b>Google Analytics (Google LLC)</b>
                    <br />
                    Google Analytics is a web analysis service provided by
                    Google LLC (“Google”). Google utilizes the Data collected to
                    track and examine the use of this Website, to prepare
                    reports on its activities and share them with other Google
                    services.
                  </p>
                  <p>
                    Google may use the Data collected to contextualize and
                    personalize the ads of its own advertising network.
                  </p>
                  <p>Personal Data collected: Cookies; Usage Data.</p>
                  <p>
                    Place of processing: United States –{" "}
                    <Link href="https://policies.google.com/privacy">
                      Privacy Policy
                    </Link>{" "}
                    –{" "}
                    <Link href="https://tools.google.com/dlpage/gaoptout?hl=en">
                      Opt Out
                    </Link>
                    . Privacy Shield participant.
                  </p>

                  <p>
                    Category of personal data collected according to CCPA:
                    internet information.
                  </p>
                  <p>
                    This processing constitutes a sale based on the definition
                    under the CCPA. In addition to the information in this
                    clause, the User can find information regarding how to opt
                    out of the sale in the section detailing the rights of
                    Californian consumers.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-2">
                <AccordionTrigger>External Platform Services</AccordionTrigger>
                <AccordionContent className="prose">
                  <p>
                    This type of service allows you to view content hosted on
                    external platforms directly from the pages of this Website
                    and interact with them. This type of service might still
                    collect web traffic data for the pages where the service is
                    installed, even when Users do not use it.
                  </p>
                  <p>
                    <strong>Google Fonts (Google LLC)</strong>
                  </p>
                  <p>
                    Google Fonts is a typeface visualization service provided by
                    Google LLC that allows this Website to incorporate content
                    of this kind on its pages.
                  </p>
                  <p>
                    <strong>Personal Data collected:</strong> Usage Data;
                    various types of Data as specified in the privacy policy of
                    the service.
                  </p>
                  <p>
                    <strong>Place of processing:</strong> United States –{" "}
                    <Link href="https://policies.google.com/privacy">
                      Privacy Policy
                    </Link>
                    . Privacy Shield participant.
                  </p>
                  <p>
                    <strong>
                      Category of personal data collected according to CCPA:
                    </strong>{" "}
                    internet information.
                  </p>
                  <p>
                    This processing constitutes a sale based on the definition
                    under the CCPA. In addition to the information in this
                    clause, the User can find information regarding how to opt
                    out of the sale in the section detailing the rights of
                    Californian consumers.
                  </p>

                  <p>
                    <strong>Font Awesome (Fonticons, Inc.)</strong>
                  </p>
                  <p>
                    Font Awesome is a typeface visualization service provided by
                    Fonticons, Inc. that allows this Website to incorporate
                    content of this kind on its pages.
                  </p>
                  <p>
                    <strong>Personal Data collected:</strong> Usage Data.
                  </p>
                  <p>
                    <strong>Place of processing:</strong> United States –{" "}
                    <Link href="https://fontawesome.com/privacy">
                      Privacy Policy
                    </Link>
                    .
                  </p>

                  <p>
                    <strong>Google Maps widget (Google LLC)</strong>
                  </p>
                  <p>
                    Google Maps is a maps visualization service provided by
                    Google LLC that allows this Website to incorporate content
                    of this kind on its pages.
                  </p>
                  <p>
                    <strong>Personal Data collected:</strong> Cookies; Usage
                    Data.
                  </p>
                  <p>
                    <strong>Place of processing:</strong> United States –{" "}
                    <Link href="https://policies.google.com/privacy">
                      Privacy Policy
                    </Link>
                    . Privacy Shield participant.
                  </p>

                  <p>
                    <strong>YouTube video widget (Google LLC)</strong>
                  </p>
                  <p>
                    YouTube is a video content visualization service provided by
                    Google LLC that allows this Website to incorporate content
                    of this kind on its pages.
                  </p>
                  <p>
                    <strong>Personal Data collected:</strong> Cookies; Usage
                    Data.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Interaction with data collection platforms and other third
                  parties
                </AccordionTrigger>
                <AccordionContent className="prose">
                  <p>
                    This type of service allows Users to interact with data
                    collection platforms or other services directly from the
                    pages of this Website for the purpose of saving and reusing
                    data. If one of these services is installed, it may collect
                    browsing and Usage Data in the pages where it is installed,
                    even if the Users do not actively use the service.
                  </p>
                  <p>
                    <strong>Wufoo Widget (SurveyMonkey Inc.)</strong>
                  </p>
                  <p>
                    The Wufoo widget is a service for interacting with the Wufoo
                    data collection platform provided by SurveyMonkey Inc.
                  </p>
                  <p>
                    <strong>Personal Data collected:</strong> Cookies; Usage
                    Data.
                  </p>
                  <p>
                    <strong>Place of processing:</strong> United States –{" "}
                    <Link href="https://www.surveymonkey.com/mp/legal/privacy/">
                      Privacy Policy
                    </Link>
                    . Privacy Shield participant.
                  </p>
                  <p>
                    <strong>
                      Category of personal data collected according to CCPA:
                    </strong>{" "}
                    internet information.
                  </p>
                  <p>
                    This processing constitutes a sale based on the definition
                    under the CCPA. In addition to the information in this
                    clause, the User can find information regarding how to opt
                    out of the sale in the section detailing the rights of
                    Californian consumers.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-4">
                <AccordionTrigger>Live Chat Services</AccordionTrigger>
                <AccordionContent className="prose">
                  <p>
                    This type of service allows Users to interact with
                    third-party live chat platforms directly from the pages of
                    this Website, for contacting and being contacted by this
                    Website support service. If one of these services is
                    installed, it may collect browsing and Usage Data in the
                    pages where it is installed, even if the Users do not
                    actively use the service. Moreover, live chat conversations
                    may be logged.
                  </p>
                  <p>
                    <strong>
                      Facebook Messenger Customer Chat (Facebook, Inc.)
                    </strong>
                  </p>
                  <p>
                    The Facebook Messenger Customer Chat is a service for
                    interacting with the Facebook Messenger live chat platform
                    provided by Facebook, Inc.
                  </p>
                  <p>
                    <strong>Personal Data collected:</strong> Cookies; Data
                    communicated while using the service; Usage Data.
                  </p>
                  <p>
                    <strong>Place of processing:</strong> United States –{" "}
                    <Link href="https://www.facebook.com/privacy/explanation">
                      Privacy Policy
                    </Link>
                    . Privacy Shield participant.
                  </p>
                  <p>
                    <strong>
                      Category of personal data collected according to CCPA:
                    </strong>{" "}
                    internet information.
                  </p>
                  <p>
                    This processing constitutes a sale based on the definition
                    under the CCPA. In addition to the information in this
                    clause, the User can find information regarding how to opt
                    out of the sale in the section detailing the rights of
                    Californian consumers.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Content Distribution Services
                </AccordionTrigger>
                <AccordionContent className="prose">
                  <p>
                    This type of service allows this Website to distribute their
                    content using servers located across different countries and
                    to optimize their performance. Which Personal Data are
                    processed depends on the characteristics and the way these
                    services are implemented. Their function is to filter
                    communications between this Website and the User’s browser.
                  </p>
                  <p>
                    Considering the widespread distribution of this system, it
                    is difficult to determine the locations to which the
                    contents that may contain Personal Information of the User
                    are transferred.
                  </p>
                  <p>
                    <strong>Cloudflare (Cloudflare Inc.)</strong>
                  </p>
                  <p>
                    Cloudflare is a traffic optimization and distribution
                    service provided by Cloudflare Inc. The way Cloudflare is
                    integrated means that it filters all the traffic through
                    this Website, i.e., communication between this Website and
                    the User’s browser, while also allowing analytical data from
                    this Website to be collected.
                  </p>
                  <p>
                    <strong>Personal Data collected:</strong> Cookies; various
                    types of Data as specified in the privacy policy of the
                    service.
                  </p>
                  <p>
                    <strong>Place of processing:</strong> United States –{" "}
                    <Link href="https://www.cloudflare.com/privacypolicy/">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                  <p>
                    <strong>
                      Category of personal data collected according to CCPA:
                    </strong>{" "}
                    internet information.
                  </p>
                  <p>
                    This processing constitutes a sale based on the definition
                    under the CCPA. In addition to the information in this
                    clause, the User can find information regarding how to opt
                    out of the sale in the section detailing the rights of
                    Californian consumers.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="md:w-1/2">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Contact and Communication Services
                </AccordionTrigger>
                <AccordionContent className="prose">
                  <p>
                    By filling in the contact form with their Data, the User
                    authorizes this Website to use these details to reply to
                    requests for information, quotes, or any other kind of
                    request as indicated by the form’s header.
                  </p>
                  <p>
                    <strong>Personal Data collected:</strong> address; county;
                    date of birth; email address; first name; gender; last name;
                    phone number; state; Tax ID; various types of Data;
                    ZIP/Postal code.
                  </p>
                  <p>
                    <strong>
                      Category of personal data collected according to CCPA:
                    </strong>{" "}
                    identifiers; biometric information; internet information.
                  </p>

                  <p>
                    <strong>Mailing list or newsletter (this Website)</strong>
                  </p>
                  <p>
                    By registering on the mailing list or for the newsletter,
                    the User’s email address will be added to the contact list
                    of those who may receive email messages containing
                    information of commercial or promotional nature concerning
                    this Website. Your email address might also be added to this
                    list as a result of signing up to this Website or after
                    making a purchase.
                  </p>
                  <p>
                    <strong>Personal Data collected:</strong> address; city;
                    Cookies; date of birth; email address; first name; gender;
                    last name; phone number; state; ZIP/Postal code.
                  </p>
                  <p>
                    <strong>
                      Category of personal data collected according to CCPA:
                    </strong>{" "}
                    identifiers; biometric information; internet information.
                  </p>

                  <p>
                    <strong>Phone contact (this Website)</strong>
                  </p>
                  <p>
                    Users that provided their phone number might be contacted
                    for commercial or promotional purposes related to this
                    Website, as well as for fulfilling support requests.
                  </p>
                  <p>
                    <strong>Personal Data collected:</strong> phone number.
                  </p>
                  <p>
                    <strong>
                      Category of personal data collected according to CCPA:
                    </strong>{" "}
                    identifiers.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Hosting and Infrastructure Services
                </AccordionTrigger>
                <AccordionContent className="prose">
                  <p>
                    This type of service has the purpose of hosting Data and
                    files that enable this Website to run and be distributed as
                    well as to provide a ready-made infrastructure to run
                    specific features or parts of this Website. Some services
                    among those listed below, if any, may work through
                    geographically distributed servers, making it difficult to
                    determine the actual location where the Personal Data are
                    stored.
                  </p>
                  <p>
                    <strong>
                      SiteGround Hosting (SiteGround Hosting Ltd.)
                    </strong>
                  </p>
                  <p>
                    SiteGround Hosting is a hosting service provided by
                    SiteGround Hosting Ltd.
                  </p>
                  <p>
                    <strong>Personal Data collected:</strong> Cookies; Usage
                    Data; various types of Data as specified in the privacy
                    policy of the service.
                  </p>
                  <p>
                    <strong>Place of processing:</strong> United States –{" "}
                    <Link href="https://www.siteground.com/privacy.htm">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                  <p>
                    <strong>
                      Category of personal data collected according to CCPA:
                    </strong>{" "}
                    internet information.
                  </p>

                  <p>
                    <strong>
                      Amazon Web Services (AWS) (Amazon Web Services, Inc.)
                    </strong>
                  </p>
                  <p>
                    Amazon Web Services (AWS) is a hosting and backend service
                    provided by Amazon Web Services, Inc.
                  </p>
                  <p>
                    <strong>Personal Data collected:</strong> various types of
                    Data as specified in the privacy policy of the service.
                  </p>
                  <p>
                    <strong>Place of processing:</strong> United States –{" "}
                    <Link href="https://aws.amazon.com/privacy/">
                      Privacy Policy
                    </Link>
                    . Privacy Shield participant.
                  </p>
                  <p>
                    <strong>
                      Category of personal data collected according to CCPA:
                    </strong>{" "}
                    internet information.
                  </p>

                  <p>
                    <strong>Vercel (Vercel Inc.)</strong>
                  </p>
                  <p>
                    Vercel is a hosting and backend service provided by Vercel
                    Inc. It provides infrastructure for this Website, enabling
                    deployment, server-side rendering, and content distribution.
                  </p>
                  <p>
                    <strong>Personal Data collected:</strong> various types of
                    Data as specified in the privacy policy of the service.
                  </p>
                  <p>
                    <strong>Place of processing:</strong> United States –{" "}
                    <Link href="https://vercel.com/legal/privacy-policy">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                  <p>
                    <strong>
                      Category of personal data collected according to CCPA:
                    </strong>{" "}
                    internet information.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-8">
                <AccordionTrigger>
                  Social Media Interaction Services
                </AccordionTrigger>
                <AccordionContent className="prose">
                  <p>
                    This type of service allows interaction with social networks
                    or other external platforms directly from the pages of this
                    Website. The interaction and information obtained through
                    this Website are always subject to the User’s privacy
                    settings for each social network.
                  </p>
                  <p>
                    This type of service might still collect traffic data for
                    the pages where the service is installed, even when Users do
                    not use it. It is recommended to log out from the respective
                    services in order to make sure that the processed data on
                    this Website isn’t being connected back to the User’s
                    profile.
                  </p>
                  <p>
                    <strong>
                      Facebook Like button and social widgets (Facebook, Inc.)
                    </strong>
                  </p>
                  <p>
                    The Facebook Like button and social widgets are services
                    allowing interaction with the Facebook social network
                    provided by Facebook, Inc.
                  </p>
                  <p>
                    <strong>Personal Data collected:</strong> Cookies; Usage
                    Data.
                  </p>
                  <p>
                    <strong>Place of processing:</strong> United States –{" "}
                    <Link href="https://www.facebook.com/privacy/explanation">
                      Privacy Policy
                    </Link>
                    . Privacy Shield participant.
                  </p>
                  <p>
                    <strong>
                      Category of personal data collected according to CCPA:
                    </strong>{" "}
                    internet information.
                  </p>
                  <p>
                    This processing constitutes a sale based on the definition
                    under the CCPA. In addition to the information in this
                    clause, the User can find information regarding how to opt
                    out of the sale in the section detailing the rights of
                    Californian consumers.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-9">
                <AccordionTrigger>
                  Live Chat Interaction Services
                </AccordionTrigger>
                <AccordionContent className="prose">
                  <p>
                    This type of service allows Users to interact with
                    third-party live chat platforms directly from the pages of
                    this Website, for contacting and being contacted by this
                    Website support service. If one of these services is
                    installed, it may collect browsing and Usage Data in the
                    pages where it is installed, even if the Users do not
                    actively use the service. Moreover, live chat conversations
                    may be logged.
                  </p>
                  <p>
                    <strong>
                      Facebook Messenger Customer Chat (Facebook, Inc.)
                    </strong>
                  </p>
                  <p>
                    The Facebook Messenger Customer Chat is a service for
                    interacting with the Facebook Messenger live chat platform
                    provided by Facebook, Inc.
                  </p>
                  <p>
                    <strong>Personal Data collected:</strong> Cookies; Data
                    communicated while using the service; Usage Data.
                  </p>
                  <p>
                    <strong>Place of processing:</strong> United States –{" "}
                    <Link href="https://www.facebook.com/privacy/explanation">
                      Privacy Policy
                    </Link>
                    . Privacy Shield participant.
                  </p>
                  <p>
                    <strong>
                      Category of personal data collected according to CCPA:
                    </strong>{" "}
                    internet information.
                  </p>
                  <p>
                    This processing constitutes a sale based on the definition
                    under the CCPA. In addition to the information in this
                    clause, the User can find information regarding how to opt
                    out of the sale in the section detailing the rights of
                    Californian consumers.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-10">
                <AccordionTrigger>SPAM Protection Services</AccordionTrigger>
                <AccordionContent className="prose">
                  <p>
                    This type of service analyzes the traffic of this Website,
                    potentially containing Users’ Personal Data, with the
                    purpose of filtering it from parts of traffic, messages, and
                    content that are recognized as SPAM.
                  </p>
                  <p>
                    <strong>Akismet (Automattic Inc.)</strong>
                  </p>
                  <p>
                    Akismet is a SPAM protection service provided by Automattic
                    Inc.
                  </p>
                  <p>
                    <strong>Personal Data collected:</strong> various types of
                    Data as specified in the privacy policy of the service.
                  </p>
                  <p>
                    <strong>Place of processing:</strong> United States –{" "}
                    <Link href="https://akismet.com/privacy/">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                  <p>
                    <strong>
                      Category of personal data collected according to CCPA:
                    </strong>{" "}
                    internet information.
                  </p>

                  <p>
                    <strong>Google reCAPTCHA (Google LLC)</strong>
                  </p>
                  <p>
                    Google reCAPTCHA is a SPAM protection service provided by
                    Google LLC. The use of reCAPTCHA is subject to the Google
                    privacy policy and terms of use.
                  </p>
                  <p>
                    <strong>Personal Data collected:</strong> Cookies; Usage
                    Data.
                  </p>
                  <p>
                    <strong>Place of processing:</strong> United States –{" "}
                    <Link href="https://policies.google.com/privacy">
                      Privacy Policy
                    </Link>
                    . Privacy Shield participant.
                  </p>
                  <p>
                    <strong>
                      Category of personal data collected according to CCPA:
                    </strong>{" "}
                    internet information.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <hr />

        <h3>The rights of Users</h3>
        <p>
          Users may exercise certain rights regarding their Data processed by
          the Owner.
        </p>

        <p>In particular, Users have the right to do the following:</p>
        <ul>
          <li>
            <strong>Withdraw their consent at any time</strong>. Users have the
            right to withdraw consent where they have previously given their
            consent to the processing of their Personal Data.
          </li>
          <li>
            <strong>Object to processing of their Data.</strong> Users have the
            right to object to the processing of their Data if the processing is
            carried out on a legal basis other than consent. Further details are
            provided in the dedicated section below.
          </li>
          <li>
            <strong>Access their Data.</strong> Users have the right to learn if
            Data is being processed by the Owner, obtain disclosure regarding
            certain aspects of the processing and obtain a copy of the Data
            undergoing processing.
          </li>
          <li>
            <strong>Verify and seek rectification.</strong> Users have the right
            to verify the accuracy of their Data and ask for it to be updated or
            corrected.
          </li>
          <li>
            <strong>Restrict the processing of their Data.</strong> Users have
            the right, under certain circumstances, to restrict the processing
            of their Data. In this case, the Owner will not process their Data
            for any purpose other than storing it.
          </li>
          <li>
            <strong>
              Have their Personal Data deleted or otherwise removed.
            </strong>{" "}
            Users have the right, under certain circumstances, to obtain the
            erasure of their Data from the Owner.
          </li>
          <li>
            <strong>
              Receive their Data and have it transferred to another controller.
            </strong>{" "}
            Users have the right to receive their Data in a structured, commonly
            used and machine readable format and, if technically feasible, to
            have it transmitted to another controller without any hindrance.
            This provision is applicable provided that the Data is processed by
            automated means and that the processing is based on the User's
            consent, on a contract which the User is part of or on
            pre-contractual obligations thereof.
          </li>
          <li>
            <strong>Lodge a complaint.</strong> Users have the right to bring a
            claim before their competent data protection authority.
          </li>
        </ul>
        <p>
          <strong>Details about the right to object to processing</strong>
          <br />
          Where Personal Data is processed for a public interest, in the
          exercise of an official authority vested in the Owner or for the
          purposes of the legitimate interests pursued by the Owner, Users may
          object to such processing by providing a ground related to their
          particular situation to justify the objection.
        </p>

        <p>
          Users must know that, however, should their Personal Data be processed
          for direct marketing purposes, they can object to that processing at
          any time without providing any justification. To learn, whether the
          Owner is processing Personal Data for direct marketing purposes, Users
          may refer to the relevant sections of this document.
        </p>

        <p>
          <b>How to exercise these rights</b>
          Any requests to exercise User rights can be directed to the Owner
          through the contact details provided in this document. These requests
          can be exercised free of charge and will be addressed by the Owner as
          early as possible and always within one month.
        </p>

        <hr />

        <h3>Cookie Policy</h3>
        <p>
          This Website uses Cookies. To learn more and for a detailed cookie
          notice, the User may consult the{" "}
          <a href="https://rethought-realestate.com/cookie-policy/">
            Cookie Policy
          </a>
          .
        </p>

        <hr />

        <h3>Additional information about Data collection and processing</h3>
        <p>
          <strong>Legal action</strong>
          <br />
          The User's Personal Data may be used for legal purposes by the Owner
          in Court or in the stages leading to possible legal action arising
          from improper use of this Website or the related Services.
        </p>

        <p>
          The User declares to be aware that the Owner may be required to reveal
          personal data upon request of public authorities.
        </p>

        <p>
          <strong>Additional information about User's Personal Data</strong>
          <br />
          In addition to the information contained in this privacy policy, this
          Website may provide the User with additional and contextual
          information concerning particular Services or the collection and
          processing of Personal Data upon request.
        </p>

        <p>
          <strong>System logs and maintenance</strong>
          <br />
          For operation and maintenance purposes, this Website and any
          third-party services may collect files that record interaction with
          this Website (System logs) use other Personal Data (such as the IP
          Address) for this purpose.
        </p>

        <p>
          <strong>Information not contained in this policy</strong>
          <br />
          More details concerning the collection or processing of Personal Data
          may be requested from the Owner at any time. Please see the contact
          information at the beginning of this document.
        </p>

        <p>
          <strong>How “Do Not Track” requests are handled</strong>
          <br />
          This Website does not support “Do Not Track” requests. To determine
          whether any of the third-party services it uses honor the “Do Not
          Track” requests, please read their privacy policies.
        </p>

        <p>
          <strong>Changes to this privacy policy</strong>
          <br />
          The Owner reserves the right to make changes to this privacy policy at
          any time by notifying its Users on this page and possibly within this
          Website and/or - as far as technically and legally feasible - sending
          a notice to Users via any contact information available to the Owner.
          It is strongly recommended to check this page often, referring to the
          date of the last modification listed at the bottom.
        </p>

        <p>
          Should the changes affect processing activities performed on the basis
          of the User’s consent, the Owner shall collect new consent from the
          User, where required.
        </p>

        <hr />

        <h3>Information for Californian consumers</h3>
        <p>
          This part of the document integrates with and supplements the
          information contained in the rest of the privacy policy and is
          provided by the business running this Website and, if the case may be,
          its parent, subsidiaries and affiliates (for the purposes of this
          section referred to collectively as “we”, “us”, “our”).
        </p>

        <p>
          The provisions contained in this section apply to all Users who are
          consumers residing in the state of California, United States of
          America, according to "The California Consumer Privacy Act of 2018"
          (Users are referred to below, simply as “you”, “your”, “yours”), and,
          for such consumers, these provisions supersede any other possibly
          divergent or conflicting provisions contained in the privacy policy.
        </p>

        <p>
          This part of the document uses the term “personal information“ as it
          is defined in The California Consumer Privacy Act (CCPA).
        </p>

        <p>
          <strong>
            Categories of personal information collected, disclosed or sold
          </strong>
          <br />
          In this section we summarize the categories of personal information
          that we've collected, disclosed or sold and the purposes thereof.{" "}
          <strong>
            You can read about these activities in detail in the section titled
            “Detailed information on the processing of Personal Data” within
            this document.
          </strong>
        </p>

        <p>
          <strong>
            Information we collect: the categories of personal information we
            collect
          </strong>
          <br />
          We have collected the following categories of personal information
          about you: identifiers, biometric information and internet
          information.
        </p>

        <p>
          We will not collect additional categories of personal information
          without notifying you.
        </p>

        <p>
          <strong>
            How we collect information: what are the sources of the personal
            information we collect?
          </strong>
          <br />
          We collect the above mentioned categories of personal information,
          either directly or indirectly, from you when you use this Website.
        </p>

        <p>
          For example, you directly provide your personal information when you
          submit requests via any forms on this Website. You also provide
          personal information indirectly when you navigate this Website, as
          personal information about you is automatically observed and
          collected. Finally, we may collect your personal information from
          third parties that work with us in connection with the Service or with
          the functioning of this Website and features thereof.
        </p>

        <p>
          <strong>
            How we use the information we collect: sharing and disclosing of
            your personal information with third parties for a business purpose
          </strong>
          <br />
          We may disclose the personal information we collect about you to a
          third party for business purposes. In this case, we enter a written
          agreement with such third party that requires the recipient to both
          keep the personal information confidential and not use it for any
          purpose(s) other than those necessary for the performance of the
          agreement.
        </p>

        <p>
          We may also disclose your personal information to third parties when
          you explicitly ask or authorize us to do so, in order to provide you
          with our Service.
        </p>

        <p>
          To find out more about the purposes of processing, please refer to the
          relevant section of this document.
        </p>

        <p>
          <strong>Sale of your personal information</strong>
          <br />
          For our purposes, the word “sale” means any “selling, renting,
          releasing, disclosing, disseminating, making available, transferring
          or otherwise communicating orally, in writing, or by electronic means,
          a consumer's personal information by the business to{" "}
          <strong>
            another business or a third party, for monetary or other valuable
            consideration”
          </strong>
          .
        </p>

        <p>
          This means that, for example, a sale can happen whenever an
          application runs ads, or makes statistical analyses on the traffic or
          views, or simply because it uses tools such as social network plugins
          and the like.
        </p>

        <p>
          Your right to opt out of the sale of personal information
          <br />
          You have the right to opt out of the sale of your personal
          information. This means that whenever you request us to stop selling
          your data, we will abide by your request. Such requests can be made
          freely, at any time, without submitting any verifiable request, simply
          by following the instructions below.
        </p>

        <p>
          <strong>
            Instructions to opt out of the sale of personal information
          </strong>
          <br />
          If you’d like to know more, or exercise your right to opt out in
          regard to all the sales carried out by this Website, both online and
          offline, you can contact us for further information using the contact
          details provided in this document.
        </p>

        <p>
          <strong>Currently, we do not sell information to anyone.</strong>
        </p>

        <p>
          <strong>
            What are the purposes for which we use your personal information?
          </strong>
          <br />
          We may use your personal information to allow the operational
          functioning of this Website and features thereof (“business
          purposes”). In such cases, your personal information will be processed
          in a fashion necessary and proportionate to the business purpose for
          which it was collected, and strictly within the limits of compatible
          operational purposes.
        </p>

        <p>
          We may also use your personal information for other reasons such as
          for commercial purposes (as indicated within the section “Detailed
          information on the processing of Personal Data” within this document),
          as well as for complying with the law and defending our rights before
          the competent authorities where our rights and interests are
          threatened or we suffer an actual damage.
        </p>

        <p>
          We will not use your personal information for different, unrelated, or
          incompatible purposes without notifying you.
        </p>

        <p>
          <strong>
            Your California privacy rights and how to exercise them
          </strong>
          <br />
          <strong>The right to know and to portability</strong>
          <br />
          You have the right to request that we disclose to you:
        </p>
        <ul>
          <li>
            the categories and sources of the personal information that we
            collect about you, the purposes for which we use your information
            and with whom such information is shared;
          </li>
          <li>
            in case of sale of personal information or disclosure for a business
            purpose, two separate lists where we disclose:
            <ul>
              <li>
                for sales, the personal information categories purchased by each
                category of recipient; and
              </li>
              <li>
                for disclosures for a business purpose, the personal information
                categories obtained by each category of recipient.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          The disclosure described above will be limited to the personal
          information collected or used over the past 12 months.
        </p>

        <p>
          If we deliver our response electronically, the information enclosed
          will be "portable", i.e. delivered in an easily usable format to
          enable you to transmit the information to another entity without
          hindrance – provided that this is technically feasible.
        </p>

        <p>
          <strong>
            The right to request the deletion of your personal information
          </strong>
          <br />
          You have the right to request that we delete any of your personal
          information, subject to exceptions set forth by the law (such as,
          including but not limited to, where the information is used to
          identify and repair errors on this Website, to detect security
          incidents and protect against fraudulent or illegal activities, to
          exercise certain rights etc.).
        </p>

        <p>
          If no legal exception applies, as a result of exercising your right,
          we will delete your personal information and direct any of our service
          providers to do so.
        </p>

        <p>
          <strong>How to exercise your rights</strong>
          <br />
          To exercise the rights described above, you need to submit your
          verifiable request to us by contacting us via the details provided in
          this document.
        </p>

        <p>
          For us to respond to your request, it’s necessary that we know who you
          are. Therefore, you can only exercise the above rights by making a
          verifiable request which must:
        </p>

        <ul>
          <li>
            provide sufficient information that allows us to reasonably verify
            you are the person about whom we collected personal information or
            an authorized representative;
          </li>
          <li>
            describe your request with sufficient detail that allows us to
            properly understand, evaluate, and respond to it. We will not
            respond to any request if we are unable to verify your identity and
            therefore confirm the personal information in our possession
            actually relates to you.
          </li>
        </ul>
        <p>
          If you cannot personally submit a verifiable request, you can
          authorize a person registered with the California Secretary of State
          to act on your behalf.
        </p>

        <p>
          If you are an adult, you can make a verifiable request on behalf of a
          minor under your parental authority.
        </p>

        <p>
          You can submit a maximum number of 2 requests over a period of 12
          months.
        </p>

        <p>
          <strong>How and when we are expected to handle your request</strong>
          <br />
          We will confirm receipt of your verifiable request within 10 days and
          provide information about how we will process your request.
        </p>

        <p>
          We will respond to your request within 45 days of its receipt. Should
          we need more time, we will explain to you the reasons why, and how
          much more time we need. In this regard, please note that we may take
          up to 90 days to fulfill your request.
        </p>

        <p>Our disclosure(s) will cover the preceding 12 month period.</p>

        <p>
          Should we deny your request, we will explain you the reasons behind
          our denial.
        </p>

        <p>
          We do not charge a fee to process or respond to your verifiable
          request unless such request is manifestly unfounded or excessive. In
          such cases, we may charge a reasonable fee, or refuse to act on the
          request. In either case, we will communicate our choices and explain
          the reasons behind it.
        </p>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-11">
            <AccordionTrigger>
              Definitions and Legal Information
            </AccordionTrigger>
            <AccordionContent className="prose">
              <p>
                <strong>Personal Data</strong>
                <br />
                Any information that directly, indirectly, or in connection with
                other information — including a personal identification number —
                allows for the identification or identifiability of a natural
                person.
              </p>
              <p>
                <strong>Usage Data</strong>
                <br />
                Information collected automatically through this Website (or
                third-party services employed in this Website), which can
                include: the IP addresses or domain names of the computers
                utilized by the Users who use this Website, the URI addresses
                (Uniform Resource Identifier), the time of the request, the
                method utilized to submit the request to the server, the size of
                the file received in response, the numerical code indicating the
                status of the server’s answer (successful outcome, error, etc.),
                the country of origin, the features of the browser and the
                operating system utilized by the User, the various time details
                per visit, and other parameters about the User’s IT environment.
              </p>
              <p>
                <strong>User</strong>
                <br />
                The individual using this Website who, unless otherwise
                specified, coincides with the Data Subject.
              </p>
              <p>
                <strong>Data Subject</strong>
                <br />
                The natural person to whom the Personal Data refers.
              </p>
              <p>
                <strong>Data Processor (or Data Supervisor)</strong>
                <br />
                The natural or legal person, public authority, agency or other
                body which processes Personal Data on behalf of the Controller,
                as described in this privacy policy.
              </p>
              <p>
                <strong>Data Controller (or Owner)</strong>
                <br />
                The natural or legal person, public authority, agency or other
                body which, alone or jointly with others, determines the
                purposes and means of the processing of Personal Data, including
                the security measures concerning the operation and use of this
                Website.
              </p>
              <p>
                <strong>This Website (or this Application)</strong>
                <br />
                The means by which the Personal Data of the User is collected
                and processed.
              </p>
              <p>
                <strong>Service</strong>
                <br />
                The service provided by this Website as described in the
                relative terms (if available) and on this site/application.
              </p>
              <p>
                <strong>European Union (or EU)</strong>
                <br />
                Unless otherwise specified, all references made within this
                document to the European Union include all current member states
                to the European Union and the European Economic Area.
              </p>
              <p>
                <strong>Cookies</strong>
                <br />
                Small sets of data stored in the User’s device.
              </p>
              <p>
                <strong>Legal information</strong>
                <br />
                This privacy statement has been prepared based on provisions of
                multiple legislations, including Art. 13/14 of Regulation (EU)
                2016/679 (General Data Protection Regulation).
              </p>
              <p>
                This privacy policy relates solely to this Website, if not
                stated otherwise within this document.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </article>
    </div>
  );
};

export default PrivacyPolicy;
