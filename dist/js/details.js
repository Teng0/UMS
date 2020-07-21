let accordion = document.getElementById("accordion");
let currentProject = "currentProject";
let abortProject = "abortProject";
let completeProject = "completeProject";
let chekStatus;

function addNewProject() {
  let cardsCount = accordion.children.length;

  let projectNumeration = "project_" + cardsCount + 1;

  let projectID = document.getElementById("project_ID").value;
  let projectStatus = document.getElementById("project_status").value;
  let projectName = document.getElementById("project_name").value;
  let projectDOC = document.getElementById("project_DOC").value;
  let projectDonor = document.getElementById("project_donor").value;
  let projectProgram = document.getElementById("project_programm").value;
  let projectMunicipality = document.getElementById("project_municipality")
    .value;
  let projectRegion = document.getElementById("project_region").value;
  let projectType = document.getElementById("project_type").value;
  let projectTypology = document.getElementById("project_typology").value;
  let projectStart = document.getElementById("project_start").value;
  let projectEnd = document.getElementById("project_end").value;

  if (projectStatus === "მიმდინარე პროექტი") {
    chekStatus = currentProject;
  } else if (projectStatus === "შეწყვეტილი პროექტი") {
    chekStatus = abortProject;
  } else {
    chekStatus = completeProject;
  }

  let projectCard =
    `<div class="card-header collapsed ${chekStatus}"  data-toggle="collapse" data-target="#${projectNumeration}">` +
    '<div class="card_title d-flex flex-row px-3 py-2">' +
    '<div class="project_id">' +
    "<p>ID:</p>" +
    `<span>${projectID}</span>` +
    "</div>" +
    '<div class="project_status ml-5 d-flex flex-row">' +
    "<p>სტატუსი:</p>" +
    `<span>${projectStatus}</span>` +
    "</div>" +
    "</div>" +
    "</div>" +
    `<div id="${projectNumeration}" class="collapse"  data-parent="#accordion">` +
    '<div class="card-body">' +
    '<div class="card-row">' +
    "<h6>ID:</h6>" +
    ` <p>${projectID}</p>` +
    "</div>" +
    '<div class="card-row">' +
    "<h6>DOC:</h6>" +
    `<p>${projectDOC}</p>` +
    "</div>" +
    '<div class="card-row">' +
    "<h6>სტატუსი:</h6>" +
    `<p>${projectStatus}</p>` +
    "</div>" +
    '<div class="card-row">' +
    "<h6>დონორი:</h6>" +
    `<p>${projectDonor}</p>` +
    "</div>" +
    '<div class="card-row">' +
    "<h6>პროგრამა:</h6>" +
    `<p>${projectProgram}</p>` +
    "</div>" +
    '<div class="card-row">' +
    "<h6>დასახელება:</h6>" +
    `<p>${projectName}</p>` +
    "</div>" +
    '<div class="card-row">' +
    "<h6>მუციპალიტეტი:</h6>" +
    `<p>${projectMunicipality}</p>` +
    "</div>" +
    '<div class="card-row">' +
    "<h6>რეგიონი:</h6>" +
    `<p>${projectRegion}</p>` +
    "</div>" +
    '<div class="card-row">' +
    "<h6>ტიპოლოგია:</h6>" +
    `<p>${projectTypology}</p>` +
    "</div>" +
    '<div class="card-row">' +
    "<h6>ტიპი:</h6>" +
    `<p>${projectType}</p>` +
    "</div>" +
    '<div class="card-row">' +
    "<h6>დაწყება:</h6>" +
    `<p>${projectStart}</p>` +
    "</div>" +
    '<div class="card-row">' +
    "<h6>დასრულება:</h6>" +
    `<p>${projectEnd}</p>` +
    "</div>" +
    '<div class="details">' +
    '<button type="button" class="btn btn-info px-4" data-toggle="modal" data-target=".bd-example-modal-lg">დეტალურად</button>' +
    "</div>" +
    "</div>" +
    "</div>";

  let card = document.createElement("div");
  accordion.prepend(card);
  accordion.children[0].setAttribute("class", "card");
  document.getElementsByClassName("card")[0].innerHTML = projectCard;

  cancelAdding();
}

function cancelAdding() {
  let addingFields = document.getElementsByClassName("adding_field");

  for (let i = 0; i < addingFields.length; i++) {
    addingFields[i].value = "";
  }
}

let editButton = document.getElementById("editButton");


function editDetails() {
  let editableText = document.getElementsByClassName("details-row");
  let editableHead = document.getElementsByClassName("details_head");

  let editableHeadChilds = document.getElementsByClassName("details_head")[0]
    .childElementCount;

  if (editButton.innerHTML === "რედაქტირება") {
    let paragraph = editableHead[0].children[0];
    let input = document.createElement("input");
    input.setAttribute(
      "style",
      "margin-bottom:10px; padding:5px; border: none;"
    );
    let paragraphText = paragraph.children[0].innerHTML;
    input.setAttribute("value", paragraphText);
    editableHead[0].replaceChild(input, paragraph);
    for (let i = 1; i < editableHeadChilds - 1; i++) {
      let paragraph = editableHead[0].querySelector("p");
      let input = document.createElement("input");
      input.setAttribute(
        "style",
        "margin-bottom:10px; padding:5px; border: none;"
      );
      let paragraphText = paragraph.innerHTML;
      input.setAttribute("value", paragraphText);
      editableHead[0].replaceChild(input, paragraph);
    }

    for (let i = 0; i < editableText.length; i++) {
      let paragraph = editableText[i].children;

      if (i === 3) {
        let input = document.createElement("input");
        input.setAttribute(
          "style",
          "margin-bottom:10px; padding:5px; border: none;"
        );
        console.log(paragraph[1].children[0].innerHTML);
        let paragraphText = paragraph[1].children[0].innerHTML;
        input.setAttribute("value", paragraphText);
        editableText[i].replaceChild(input, paragraph[1]);
      } else {
        for (let j = 1; j < editableText[i].childElementCount; j++) {
          let input = document.createElement("input");
          input.setAttribute(
            "style",
            "margin-bottom:10px; padding:5px; border: none;"
          );
          let paragraphText = paragraph[j].innerHTML;
          input.setAttribute("value", paragraphText);
          editableText[i].replaceChild(input, paragraph[j]);
        }
      }
    }
    editButton.innerHTML = "შენახვა";
  } else {
    let input = editableHead[0].children[0];
    let span = document.createElement("span");
    let paragraph = document.createElement("p");
    span.appendChild(paragraph);
    paragraph.innerHTML = input.value;
    editableHead[0].replaceChild(span, input);
    for (let i = 1; i < editableHeadChilds - 1; i++) {
      let input = editableHead[0].querySelector("input");
      let paragraph = document.createElement("p");
      paragraph.innerHTML = input.value;
      editableHead[0].replaceChild(paragraph, input);
    }

    for (let i = 0; i < editableText.length; i++) {
      let input = editableText[i].children;
      if (i === 3) {
        let input = editableText[i].children[1];
        console.log(input);
        let paragraph = document.createElement("p");
        let span = document.createElement("span");
        span.appendChild(paragraph);
        paragraph.innerHTML = input.value;
        editableText[i].replaceChild(span, input);
      } else {
        for (let j = 1; j < editableText[i].childElementCount; j++) {
          let paragraph = document.createElement("p");
          let span = document.createElement("span");
          span.appendChild(paragraph);
          paragraph.innerHTML = input[j].value;
          editableText[i].replaceChild(paragraph, input[j]);
        }
      }
    }
    editButton.innerHTML = "რედაქტირება";
  }
}
