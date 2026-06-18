const agentRoles = {
    "Raze":      { role: "duelist" },
    "Jett":      { role: "duelist" },
    "Neon":      { role: "duelist" },
    "Phoenix":   { role: "duelist" },
    "Waylay":    { role: "duelist" },
    "Sova":      { role: "initiator" },
    "Fade":      { role: "initiator" },
    "Skye":      { role: "initiator" },
    "Breach":    { role: "initiator" },
    "Tejo":      { role: "initiator" },
    "Killjoy":   { role: "sentinel" },
    "Cypher":    { role: "sentinel" },
    "Sage":      { role: "sentinel" },
    "Chamber":   { role: "sentinel" },
    "Deadlock":  { role: "sentinel" },
    "Vyse":      { role: "sentinel" },
    "Brimstone": { role: "controller" },
    "Viper":     { role: "controller" },
    "Clove":     { role: "controller" },
    "Astra":     { role: "controller" },
    "Miks":  { role: "controller" },
    "Gekko": { role: "initiator" },
};

const maps = [
    {
        name: "LOTUS",
        image: "images/Maps/lotus.png",
        agents: ["Raze", "Fade", "Killjoy", "Clove", "Chamber", "Deadlock", "Miks"]
    },
    {
        name: "BREEZE",
        image: "images/Maps/breeze.png",
        agents: ["Jett", "Sova", "Viper", "Neon", "Chamber"]
    },
    {
        name: "ASCENT",
        image: "images/Maps/ascent.png",
        agents: ["Phoenix", "Clove", "Sova", "Brimstone", "Jett", "Killjoy", "Sage"]
    },
    {
        name: "HAVEN",
        image: "images/Maps/haven.png",
        agents: ["Jett", "Phoenix", "Clove", "Killjoy", "Sova", "Fade", "Raze", "Skye", "Neon"]
    },
    {
        name: "SPLIT",
        image: "images/Maps/split.png",
        agents: ["Raze", "Waylay", "Skye", "Clove", "Sage", "Jett", "Cypher", "Neon"]
    },
    {
        name: "FRACTURE",
        image: "images/Maps/fracture.png",
        agents: ["Raze", "Breach", "Skye", "Brimstone", "Killjoy", "Clove", "Phoenix", "Fade", "Tejo"]
    },
    {
        name: "PEARL",
        image: "images/Maps/pearl.png",
        agents: ["Neon", "Jett", "Fade", "Sova", "Killjoy", "Chamber", "Raze", "Skye", "Astra", "Clove", "Vyse",
            "Gekko", "Miks"
        ]
    }
];

const mapsContainer = document.getElementById("mapContainer");

maps.forEach(map => {
    let agentsHTML = "";

    map.agents.forEach(agent => {
        const role = agentRoles[agent]?.role || "";
        agentsHTML += `
            <img src="images/Agents/${agent.toLowerCase()}.png"
                 class="agentImage ${role}"
                 alt="${agent}">
        `;
    });

    mapsContainer.innerHTML += `
        <div class="valorantMapRow">
            <div class="mapCard">
                <img src="${map.image}" class="valorantMapImage">
                <div class="mapName">${map.name}</div>
            </div>
            <div class="agents">
                ${agentsHTML}
            </div>
        </div>
    `;
});

function filterAgents(role) {
    const allAgents = document.querySelectorAll(".agentImage");
    const buttons = document.querySelectorAll("#filterButtons button");

    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    allAgents.forEach(img => {
        if (role === "all" || img.classList.contains(role)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}
