// Starter Data - DO NOT MODIFY THIS DATA DIRECTLY
const guildMembers = [
  { name: "Kaelen", class: "Mage", level: 60, exp: 55000, status: "online" },
  { name: "Lyra", class: "Archer", level: 58, exp: 48000, status: "offline" },
  { name: "Arik", class: "Warrior", level: 60, exp: 62000, status: "online" },
  {
    name: "Seraphina",
    class: "Healer",
    level: 59,
    exp: 51000,
    status: "online",
  },
  { name: "Grom", class: "Warrior", level: 60, exp: 59000, status: "offline" },
  { name: "Elara", class: "Mage", level: 57, exp: 42000, status: "offline" },
  { name: "Jax", class: "Archer", level: 60, exp: 65000, status: "online" },
  { name: "Milo", class: "Healer", level: 56, exp: 39000, status: "offline" },
];

const reportOutput = document.getElementById("report-output");

// Function to append reports to the HTML
function appendReport(title, content) {
  const section = document.createElement("div");
  section.className = "report-section";
  const h2 = document.createElement("h2");
  h2.textContent = title;
  const pre = document.createElement("pre");
  pre.textContent = content;
  section.appendChild(h2);
  section.appendChild(pre);
  reportOutput.appendChild(section);
}

// Your code goes here!

// Task 1
let names = [];
guildMembers.forEach((member) => {
  names.push(member.name);
});

appendReport("Task 1: Member Names", names.join(", "));

// Task 2
let findMember = guildMembers.find(
    (member) => member.name === "Arik"
);

appendReport("Task 2: Found Member", JSON.stringify(findMember, null, 2));

// Task 3
let onlineCheck = guildMembers.some(
    (member) => member.status === "online"
)

appendReport("Task 3: Online Member Check", onlineCheck);

// Task 4
let mages = guildMembers.filter(
    (member) => member.class === "Mage"
)
appendReport("Task 4: Mages in Guild", JSON.stringify(mages, null, 2));

// Task 5
let guildMembersCopy = [...guildMembers];
guildMembersCopy.map((member) => {
    member.raidReady = true;
});
appendReport("Task 5: Raid Ready Members", JSON.stringify(guildMembersCopy, null, 2));

// Task 6
let maxLevelCheck = guildMembers.every(
    (member) => member.level === 60
);
appendReport("Task 6: Max Level Check", maxLevelCheck);

// Task 7
let totalExp = guildMembers.reduce((acc, member) => acc + member.exp, 0);
appendReport("Task 7: Total Experience", totalExp);

// Task 8
const membersByClass = guildMembers.reduce((acc, member) => {
    acc[member.class] = (acc[member.class] || 0) + 1;
    return acc;
}, {});

appendReport("Task 8: Members by Class", JSON.stringify(membersByClass, null, 2));

// Task 9
let eliteList = [...guildMembers
  .filter(member => member.level === 60 && member.status === "online")
  .map(member => ({ name: member.name, level: member.level, exp: member.exp }))
  .sort((a, b) => b.name.localeCompare(a.name))
];
appendReport("Task 9: Elite Members", JSON.stringify(eliteList, null, 2));