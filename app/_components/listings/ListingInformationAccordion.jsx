import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const ListingInformationAccordion = ({ listing }) => {
  return (
    <Accordion type="single" collapsible className="accordion-listings">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-2xl font-heading text-reText">
          Listing Information
        </AccordionTrigger>
        <AccordionContent>
          <div className="info-content-wrap">
            {listing.id && (
              <h6 className="info-content">
                <span className="data-label ">MLS Number</span>
                <span className="data-value ">{listing.id}</span>
              </h6>
            )}
            {listing.status && (
              <h6 className="info-content">
                <span className="data-label">Status</span>
                <span className="data-value ">
                  {listing.status} {listing.xf_list_19}
                </span>
              </h6>
            )}
            {listing.listingType && (
              <h6 className="info-content">
                <span className="data-label ">Listing Type</span>
                <span className="data-value">{listing.listingType}</span>
              </h6>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-2xl font-heading text-reText">
          Dwelling Info
        </AccordionTrigger>
        <AccordionContent>
          <div className="info-content-wrap">
            {listing.propertyType && (
              <h6 className="info-content">
                <span className="data-label ">Property Type</span>
                <span className="data-value ">{listing.propertyType}</span>
              </h6>
            )}
            {listing.xf_list_70 && (
              <h6 className="info-content ">
                <span className="data-label ">Condo Fee</span>
                <span className="data-value">
                  {" "}
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(listing.xf_list_70)}
                </span>
              </h6>
            )}
            {listing.style && (
              <h6 className="info-content ">
                <span className="data-label ">Style</span>
                <span className="data-value">{listing.style}</span>
              </h6>
            )}
            {listing.size && (
              <h6 className="info-content ">
                <span className="data-label ">Square Feet</span>
                <span className="data-value">{listing.size} SqFt</span>
              </h6>
            )}
            {listing.lotSize && (
              <h6 className="info-content ">
                <span className="data-label ">Lot Size</span>
                <span className="data-value">
                  {listing.lotSize.acres} acres
                </span>
              </h6>
            )}
            {listing.yearBuilt && (
              <h6 className="info-content ">
                <span className="data-label ">Year Built</span>
                <span className="data-value">{listing.yearBuilt}</span>
              </h6>
            )}
            {listing.xf_gf20011218213537908516000000 && (
              <h6 className="info-content">
                <span className="data-label">Number of Stories</span>
                <span className="data-value">
                  {listing.xf_gf20011218213537908516000000.join(", ")}
                </span>
              </h6>
            )}
             {listing.xf_gf20011218213539562254000000 && (
              <h6 className="info-content">
                <span className="data-label">Water/Sewer</span>
                <span className="data-value">
                  {listing.xf_gf20011218213539562254000000.join(", ")}
                </span>
              </h6>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-2xl font-heading text-reText">
          Taxes and Zoning
        </AccordionTrigger>
        <AccordionContent>
          <div className="info-content-wrap">
            {listing.xf_list_75 && (
              <h6 className="info-content ">
                <span className="data-label ">Tax Amount</span>
                <span className="data-value">
                  {" "}
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(listing.xf_list_75)}
                </span>
              </h6>
            )}
            {listing.xf_list_76 && (
              <h6 className="info-content ">
                <span className="data-label ">Tax Year</span>
                <span className="data-value">{listing.xf_list_76}</span>
              </h6>
            )}
            {listing.xf_list_74 && (
              <h6 className="info-content ">
                <span className="data-label ">Zoning</span>
                <span className="data-value">{listing.xf_list_74}</span>
              </h6>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
      {(listing.xf_gf20011218213539446039000000 ||
        listing.xf_gf20010615204509887034000000 ||
        listing.xf_gf20010615204509911416000000 ||
        listing.xf_gf20010615204510044721000000 ||
        listing.xf_gf20010615204509844952000000) && (
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-2xl font-heading text-reText">
            Interior
          </AccordionTrigger>
          <AccordionContent>
            <div className="info-content-wrap">
              {listing.xf_gf20011218213539446039000000 && (
                <h6 className="info-content">
                  <span className="data-label">Interior Features</span>
                  <span className="data-value">
                    {listing.xf_gf20011218213539446039000000.join(", ")}
                  </span>
                </h6>
              )}

              {listing.xf_gf20010615204509887034000000 && (
                <h6 className="info-content ">
                  <span className="data-label ">Heating Type</span>
                  <span className="data-value">
                    {listing.xf_gf20010615204509887034000000.join(", ")}
                  </span>
                </h6>
              )}

              {listing.xf_gf20010615204509911416000000 && (
                <h6 className="info-content ">
                  <span className="data-label ">H/C Type</span>
                  <span className="data-value">
                    {listing.xf_gf20010615204509911416000000.join(", ")}
                  </span>
                </h6>
              )}

              {listing.xf_gf20010615204510044721000000 && (
                <h6 className="info-content ">
                  <span className="data-label ">Included Appliances</span>
                  <span className="data-value">
                    {listing.xf_gf20010615204510044721000000.join(", ")}
                  </span>
                </h6>
              )}

              {listing.xf_gf20010615204509844952000000 && (
                <h6 className="info-content ">
                  <span className="data-label ">Basement</span>
                  <span className="data-value">
                    {listing.xf_gf20010615204509844952000000.join(", ")}
                  </span>
                </h6>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      )}
      {(listing.xf_list_71 ||
        listing.xf_list_25 ||
        listing.xf_gf20010615204509720414000000 ||
        listing.xf_gf20160222211202370116000000 ||
        listing.xf_gf20010615204509696117000000 ||
        listing.xf_gf20010615204509769739000000 ||
        listing.xf_gf20160222211304330412000000) && (
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-2xl font-heading text-reText">
            Exterior
          </AccordionTrigger>
          <AccordionContent>
            <div className="info-content-wrap">
              {listing.xf_list_71 && (
                <h6 className="info-content ">
                  <span className="data-label ">Garage Type</span>
                  <span className="data-value">{listing.xf_list_71}</span>
                </h6>
              )}

              {listing.xf_list_25 && (
                <h6 className="info-content ">
                  <span className="data-label ">Garage/Parking Spaces</span>
                  <span className="data-value">{listing.xf_list_25}</span>
                </h6>
              )}

              {listing.xf_gf20010615204509720414000000 && (
                <h6 className="info-content ">
                  <span className="data-label ">Garage Features</span>
                  <span className="data-value">
                    {listing.xf_gf20010615204509720414000000.join(", ")}
                  </span>
                </h6>
              )}

              {listing.xf_gf20160222211202370116000000 && (
                <h6 className="info-content ">
                  <span className="data-label ">Driveway</span>
                  <span className="data-value">
                    {listing.xf_gf20160222211202370116000000.join(", ")}
                  </span>
                </h6>
              )}

              {listing.xf_gf20010615204509696117000000 && (
                <h6 className="info-content ">
                  <span className="data-label ">Architecture</span>
                  <span className="data-value">
                    {listing.xf_gf20010615204509696117000000.join(", ")}
                  </span>
                </h6>
              )}

              {listing.xf_gf20010615204509769739000000 && (
                <h6 className="info-content ">
                  <span className="data-label ">Exterior Features</span>
                  <span className="data-value">
                    {listing.xf_gf20010615204509769739000000.join(", ")}
                  </span>
                </h6>
              )}

              {listing.xf_gf20160222211304330412000000 && (
                <h6 className="info-content ">
                  <span className="data-label ">Accessibility</span>
                  <span className="data-value">
                    {listing.xf_gf20160222211304330412000000.join(", ")}
                  </span>
                </h6>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      )}

      {listing.schools && (
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-2xl font-heading text-reText">
            Schools
          </AccordionTrigger>
          <AccordionContent>
            <div className="info-content-wrap">
              {listing.schools.district && (
                <h6 className="info-content ">
                  <span className="data-label ">District</span>
                  <span className="data-value">{listing.schools.district}</span>
                </h6>
              )}
              {listing.schools.high && (
                <h6 className="info-content ">
                  <span className="data-label ">High School</span>
                  <span className="data-value">{listing.schools.high}</span>
                </h6>
              )}
              {listing.schools.middle && (
                <h6 className="info-content ">
                  <span className="data-label ">Middle School</span>
                  <span className="data-value">{listing.schools.middle}</span>
                </h6>
              )}
              {listing.schools.elementary && (
                <h6 className="info-content ">
                  <span className="data-label ">Elementary School</span>
                  <span className="data-value">
                    {listing.schools.elementary}
                  </span>
                </h6>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      )}
      {listing.listingType === "Multifamily" && (
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-2xl font-heading text-reText">
            Multi Family
          </AccordionTrigger>
          <AccordionContent>
            <div className="info-content-wrap">
              {listing.features.Basement && (
                <h6 className="info-content ">
                  <span className="data-label ">Basement</span>
                  <span className="data-value">
                    {listing.features.Basement.join(", ")}
                  </span>
                </h6>
              )}
              {listing.features["Exterior Features"] && (
                <h6 className="info-content">
                  <span className="data-label">Exterior Features</span>
                  <span className="data-value">
                    {listing.features["Exterior Features"].join(", ")}
                  </span>
                </h6>
              )}

{listing.xf_feat20011218031552211081000000 && (
                <h6 className="info-content">
                  <span className="data-label"># of Units Type 1</span>
                  <span className="data-value">
                    {listing.xf_feat20011218031552211081000000}<br/>{listing.xf_gf20011218213538640102000000}sqft
                  </span>
                </h6>
              )}

{listing.xf_gf20011218213538141926000000 && (
                <h6 className="info-content">
                  <span className="data-label">Unit 1 Features</span>
                  <span className="data-value">
                    {listing.xf_gf20011218213538141926000000.join(", ")}
                  </span>
                </h6>
              )}

{listing.xf_feat20011218031604401783000000 && (
                <h6 className="info-content">
                  <span className="data-label"># of Units Type 2</span>
                  <span className="data-value">
                    {listing.xf_feat20011218031604401783000000} <br/>{listing.xf_gf20011218213538664475000000}sqft
                  </span>
                </h6>
              )}

{listing.xf_gf20011218213538175338000000 && (
                <h6 className="info-content">
                  <span className="data-label">Unit 2 Features</span>
                  <span className="data-value">
                    {listing.xf_gf20011218213538175338000000.join(", ")}
                  </span>
                </h6>
              )}

{listing.xf_feat20011218031617754821000000 && (
                <h6 className="info-content">
                  <span className="data-label"># of Units Type 3</span>
                  <span className="data-value">
                    {listing.xf_feat20011218031617754821000000}<br/>{listing.xf_gf20011218213538689924000000}sqft
                  </span>
                </h6>
              )}

{listing.xf_gf20011218213538207874000000 && (
                <h6 className="info-content">
                  <span className="data-label">Unit 3 Features</span>
                  <span className="data-value">
                    {listing.xf_gf20011218213538207874000000.join(", ")}
                  </span>
                </h6>
              )}

{listing.xf_feat20011218031631057438000000 && (
                <h6 className="info-content">
                  <span className="data-label"># of Units Type 4</span>
                  <span className="data-value">
                    {listing.xf_feat20011218031631057438000000}<br/>{listing.xf_gf20011218213538714277000000}sqft
                  </span>
                </h6>
              )}

{listing.xf_gf20011218213538232194000000 && (
                <h6 className="info-content">
                  <span className="data-label">Unit 4 Features</span>
                  <span className="data-value">
                    {listing.xf_gf20011218213538232194000000.join(", ")}
                  </span>
                </h6>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      )}
    </Accordion>
  );
};

export default ListingInformationAccordion;
