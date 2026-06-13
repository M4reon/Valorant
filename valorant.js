const maps = [
    {
        name: "LOTUS",
        image: "images/Maps/lotus.png",
        agents: ["Raze", "Fade", "Miks", "Killjoy", "Clove", "Chamber", "Deadlock"]
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
        agents: ["Jett", "Phoenix", "Geeko", "Clove", "Killjoy", "Sova", "Fade", "Raze", "Skye", "Neon"]
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
        agents: ["Neon", "Jett", "Fade", "Sova", "Miks", "Killjoy", "Chamber", "Geeko", "Raze", "Skye",
           "Astra", "Clove", "Vyse" ]
    }
];

const mapsContainer = document.getElementById("mapContainer");

maps.forEach(map => {

  let agentsHTML = "";

    map.agents.forEach(agent => {
        agentsHTML += `
            <img src="images/Agents/${agent.toLowerCase()}.png"
                 class="agentImage"
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
