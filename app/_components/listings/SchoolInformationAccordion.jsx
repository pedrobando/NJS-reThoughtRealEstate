import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/accordion";
  
  const SchoolInformationAccordion = ({ schools }) => {
    return (
      <Accordion type="single" collapsible className="accordion-listings" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-heading text-reText">
            School Information
          </AccordionTrigger>
          <AccordionContent className="max-h-[480px] md:max-h-[325px] overflow-auto">

          <div className="grid grid-cols-1">

          {schools.map((school, i) => (
        <div
          key={i}
          className="schools flex items-center space-x-3  bg-white px-6 py-5"
        >{school.rating && (
          <div className="flex-shrink-0">
            <span className="rounded-full bg-gray-200 p-2 text-gray-500" > {school.rating} </span>
          </div> )}
          <div className="min-w-0 flex-1">
           
              <span className="inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">{school.name}</p>
              <p className="truncate text-sm text-gray-500">{school.address.deliveryLine} {school.address.city}, {school.address.state} {school.address.zip}</p>
              <p className="truncate text-sm text-gray-500">{school.admission} | {school.level} </p>
              <p className="truncate text-sm text-gray-500">{school.totalStudents && (  <>{school.totalStudents} Students |</> )}  {school.studentTeacherRatio } Student/Teacher Ratio </p>
           
          </div>
        </div>
      ))}
            </div>
            
          </AccordionContent>
        </AccordionItem>
        
     
      </Accordion>
    );
  };
  
  export default SchoolInformationAccordion;
  