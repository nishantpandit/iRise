var moduleName = "Application Registration"
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
    sectionName: "2 Purpose",
    //includeTitle: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Purpose" && requirement["Details-Module Name"] == moduleName;
      }
    ],
    template: "Purpose_template",
    page_break: "after"
  },
  {
    sectionName: "3 Scope",
    //includeTitle: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Scope" && requirement["Details-Module Name"] == moduleName;
      }
    ],
    template: "Scope_template",
    page_break: "after"
  },
  

  {
    sectionName: "4.1 Narrative",
    //includeTitle: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Narrative" && requirement["Details-Module Name"] == moduleName;
      }
    ],
    template: "Narrative_template",
    page_break: "after"
  },

  {
    sectionName: "4.2.3 " + moduleName + " Save Checkpoints",
    //includeTitle: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Save Checkpoint" && requirement["Details-Module Name"] == moduleName;
      }
    ],
    template: "SaveCheckpoints_template",
    page_break: "after"
  },
  {
    sectionName: "4.2.4 Screen Display Conditions",
    //includeTitle: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Screen Display Condition" && requirement["Details-Module Name"] == moduleName;
      }
    ],
    template: "ScreenDisplay_template",
    page_break: "after"
  },
    

  {
    sectionName: "4.3 Assumptions",
    includeTitle: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Assumption" && requirement["Details-Module Name"] == moduleName;
      }
    ],
    template: "Assumption_template",
    page_break: "after"
  },
    
  
    {
    sectionName: "5 Business Scenarios",
    //includeTitle: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Business Scenario" && requirement["Details-Module Name"] == moduleName;;
      }
    ],
    template: "BusinessScenario_template",
    page_break: "after"
  }, 
    {
    sectionName: "6 Screen Design",
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
    sectionName: "7 Non-UI Content",
    //includeName: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Non UI Content" && requirement["Details-Module Name"] == moduleName;;
      }
    ],
    template: "NonUI_template",
    page_break: "after"
  }, 
   {
    sectionName: "7.1 Business Rules",
    //includeTitle: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Business Rule" && requirement["Details-Module Name"] == moduleName;
      }
    ],
    template: "Business_Rules_template",
    page_break: ""
  }, 
    {
    sectionName: "Main Flows",
    //includeName: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Main Flow Step" && requirement["Details-Module Name"] == moduleName;;
      }
    ],
    template: "MainFlow_template",
    page_break: "after"
  }, 
    {
    sectionName: "8 Referenced Documents",
    //includeName: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Referenced Document" && requirement["Details-Module Name"] == moduleName;;
      }
    ],
    template: "ReferencedDocuments_template",
    page_break: "after"
  }]
};