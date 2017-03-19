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
    sectionName: "Purpose",
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
    sectionName: "Requirement",
    //includeTitle: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Requirement" && requirement["Details-Module Name"] == moduleName;
      }
    ],
    template: "Requirement_template",
    page_break: "after"
  },
  {
    sectionName: "Track",
    //includeTitle: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Track" && requirement["Details-Module Name"] == moduleName;
      }
    ],
    template: "Track_template",
    page_break: "after"
  },

  {
    sectionName: "Narrative",
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
    sectionName: "Screen Flow Summary",
    //includeTitle: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Screen Flow Summary" && requirement["Details-Module Name"] == moduleName;
      }
    ],
    template: "ScreenFlowSummary_template",
    page_break: "after"
  },
  {
    sectionName: "Save Checkpoints",
    //includeTitle: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Save Checkpoint" && requirement["Details-Module Name"] == moduleName;
      }
    ],
    template: "SaveCheckpoint_template",
    page_break: "after"
  }, 
  {
    sectionName: "Save Display Conditions",
    //includeTitle: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Save Display Condition" && requirement["Details-Module Name"] == moduleName;
      }
    ],
    template: "SaveDisplayCondition_template",
    page_break: "after"
  }, 
  {
    sectionName: "Assumptions",
    //includeTitle: "h1",
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
    sectionName: "Business Scenarios",
    //includeTitle: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Business Scenario" && requirement["Details-Module Name"] == moduleName;
      }
    ],
    template: "BusinessScenario_template",
    page_break: "after"
  }, 
  {
    sectionName: "Main Flows",
    //includeName: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Main Flow Step" && requirement["Details-Module Name"] == moduleName;
      }
    ],
    template: "MainFlow_template",
    page_break: "after"
  }, 
  {
    sectionName: "Field Descriptions",
    //includeName: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Field Description" && requirement["Details-Module Name"] == moduleName;
      }
    ],
    template: "FieldDescription_template",
    page_break: "after"
  },
  {
    sectionName: "Referenced Documents",
    //includeName: "h1",
    getData: "requirements",
    filters: [
      function(requirement) {
        return requirement["Details-Type"] == "Referenced Document" && requirement["Details-Module Name"] == moduleName;
      }
    ],
    template: "ReferencedDocument_template",
    page_break: "after"
  },
    {
    sectionName: "Screen Designs",
    //includeTitle: "h1",
    getData: "screens",
    filters: [
      function(screen) {
        return screen["type"] == "PAGE" && requirement["Details-Module Name"] == moduleName;
      }
    ],
    template: "ScreenDesigns_template",
    page_break: "after"
  }]
};