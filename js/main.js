document.documentElement.classList.add("js-enabled");

const sitePages = [
  ["index.html", "Home"],
  ["etudes.html", "Études"],
  ["projets.html", "Projets"],
  ["experiences.html", "Expériences"],
  ["competences.html", "Compétences"],
  ["engagement-associatif.html", "Engagement associatif"],
  ["engagements-solidaires.html", "Engagements solidaires"],
];

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("[data-site-header]").forEach((header) => {
  header.innerHTML = `
    <a class="brand" href="index.html" aria-label="Héloïse Havy, accueil">
      <img class="brand-mark" src="assets/images/portrait.jpg" alt="" aria-hidden="true"></img>
      <span class="brand-copy"><strong>Héloïse Havy</strong></span>
    </a>
    <nav class="main-nav" aria-label="Navigation principale">
      <ul>${sitePages.map(([href, label]) => `
        <li><a href="${href}"${href === currentPage ? ' aria-current="page"' : ""}>${label}</a></li>
      `).join("")}</ul>
    </nav>
  `;
});

document.querySelectorAll(".category-tabs").forEach((tabGroup) => {
  const tabs = Array.from(tabGroup.querySelectorAll('[role="tab"]'));
  const panels = Array.from(tabGroup.querySelectorAll('[role="tabpanel"]'));

  if (!tabs.length || tabs.length !== panels.length) return;

  const selectTab = (selectedTab, moveFocus = false) => {
    tabs.forEach((tab) => {
      const isSelected = tab === selectedTab;
      tab.setAttribute("aria-selected", String(isSelected));
      tab.tabIndex = isSelected ? 0 : -1;
      document.getElementById(tab.getAttribute("aria-controls")).hidden = !isSelected;
    });

    if (moveFocus) selectedTab.focus();
  };

  tabGroup.classList.add("tabs-ready");
  selectTab(tabs.find((tab) => tab.getAttribute("aria-selected") === "true") || tabs[0]);

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", (event) => {
      let nextIndex = index;

      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") nextIndex = 0;
      else if (event.key === "End") nextIndex = tabs.length - 1;
      else return;

      event.preventDefault();
      selectTab(tabs[nextIndex], true);
    });
  });
});

document.querySelectorAll("[data-optional-image]").forEach((image) => {
  const revealImage = () => {
    if (image.naturalWidth > 0) {
      image.closest("[data-optional-image-wrap]")?.classList.add("image-loaded");
    }
  };

  image.addEventListener("load", revealImage);
  if (image.complete) revealImage();
});