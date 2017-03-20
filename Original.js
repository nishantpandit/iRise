var documentConfiguration = {
  //docTitle: "Detailed Design Specification Document",
  //docSubject: "", // if blank, iRise project name is used
  //docDescription: "",
  //docCompany: "Deloitte",
  //docHeaderLeft: "url(www.deloitte.com/logo)", 
  //docHeaderCenter: "{TITLE}", 
  //docHeaderRight: "url(www.deloitte-client.com/logo)",
  //docFooterLeft: "{SUBJECT}", 
  //docFooterCenter: "{PAGE} of {NUMPAGES}", 
  //docFooterRight: "{SAVEDATE}",
  //dowloadFileName: "My Custom Document.doc",
  sections: [
    { // Each document contains an array "sections"
    sectionName: "Start Page", // REQUIRED: Name of document section
    //includeTitle: "h1", // Include sectionName in doc as h1, h2, h3; leave blank to exclude
    getData: "", // Poplulate this section with "requirements" or "screens" data 
    filters: [], // Filter the data for this section; leave blank to return all 
    template: "StartPage_template", // REQUIRED: Name of template 
    pageBreak: "after" // Include a page break "before" or "after" or leave blank
  }, 
    {
    sectionName: "Table of Contents",
    includeTitle: "h1",
    page_break: "after"
  }, 
    {
    sectionName: "Business Scenario List",
    //includeTitle: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Business Scenario";
      }
    ],
    template: "BusinessScenario_template",
    page_break: "after"
  }, 
    {
    sectionName: "Screen Designs",
    //includeTitle: "h1",
    getData: "screens",
    filters: [
      function(screen) {
        return screen["type"] == "PAGE";
      }
    ],
    template: "ScreenDesigns_template",
    page_break: "after"
  }, 
    {
    sectionName: "Business Rules",
    //includeTitle: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Business Rule";
      }
    ],
    template: "Business_Rules_template",
    page_break: ""
  }, 
    {
    sectionName: "Non-UI Content",
    //includeName: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Non-UI Content";
      }
    ],
    template: "NonUI_template",
    page_break: "after"
  }, 
    {
    sectionName: "Main Flows",
    //includeName: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Main Flow Step";
      }
    ],
    template: "MainFlow_template",
    page_break: "after"
  }, 
    {
    sectionName: "Reference Tables",
    //includeName: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Reference Table";
      }
    ],
    template: "NonUI_template",
    page_break: ""
  }]
};