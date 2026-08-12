const content = document.getElementById("content");
const tabs = [...document.querySelectorAll(".tab")];

const records = [
["Lowest score for one week","52.8","Grant A., Week 11, 2020"],["Lowest score for one week","56.7","Mac, Week 2, 2024"],
["Most points in a season","2115.55","Bailey Coble, 2023"],["Most points in a season","2087.7","Andrew Blum, 2021"],
["Least points in a season","1334.45","Peachey, 2020"],["Highest point average","151.1","Bailey Coble, 2023"],["Highest point average","149.1","Andrew Blum, 2021"],
["Most PA ever","1968.45","Drayton, 2020 and 2024"],["Lowest point average","102.7","Peachey, 2020"],
["Biggest blowout","254–117.15","Davis vs Kam, Week 12, 2020"],
["Most moves in a season","65","Quinton, 2023"],["Most POTWs in a season","8","Bailey Coble, 2023"],["Most POTWs in a season","6","Kam, 2025"],["Most POTWs in a season","6","Quinton, 2024"],["Most POTWs in a season","6","Blum, 2022"],
["Longest win streak","7","Bailey, 2021"],["Longest losing streak","9","Grant, 2024"],["Longest losing streak","8","Justin, 2025"],["Longest losing streak","8","Drayton, 2024"],["Longest losing streak","6","Davis, 2023 — Scored second most points and missed offs"],
["Most trades in a season","19","Blake Jackson, 2023"],["Most ices in a season","9","Chase, 2025"],["Most ices in a season","6","Kameron, 2024"],["Least ices in a season","1","Braxton, 2024"],["Least ices in a season","1","Blum, 2025"],
["Worst loss","—","Victor losing to Mac when he had three players score 0, Week 7, 2025"]
];
const twoHundredClub=[
["254.0","Davis, Week 12, 2020"],
["202.5","Davis, Playoffs Round 2, 2024"],
["201.25","Bailey, Week 11, 2024 — Lower scoring era"]
];

const playoff = [
["Quinton","Championship Appearance: ’24; Championship record: 1-0","First Round Bye: None","Playoff Appearances: ’24, ’25","Playoff Record: 4-1"],
["Braxton","Championship Appearance: None","First Round Bye: None","Playoff Appearances: ’23, ’24","Playoff Record: 1-2"],
["Bailey","Championship Appearances: ’21, ’22; Championship record: 1-1","First Round Byes: ’22, ’23, ’24","Playoff Appearances: ’21, ’22, ’23, ’24, ’25","Playoff Record: 2-4"],
["Davis","Championship Appearances: ’20, ’22, ’24; Championship record: 1-2","First Round Byes: ’22, ’24","Playoff Appearances: ’20, ’22, ’24","Playoff Record: 4-2"],
["Kameron","Championship Appearance: ’25; Championship record: 1-0","First Round Bye: ’25","Playoff Appearances: ’22, ’23, ’25","Playoff Record: 2-2"],
["Victor","Championship Appearance: ’23; Championship record: 1-0","First Round Bye: ’23","Playoff Appearances: ’23, ’24, ’25","Playoff Record: 2-2"],
["Peachey","Championship Appearance: None","First Round Bye: None","Playoff Appearances: ’22, ’24, ’25","Playoff Record: 3-3"],
["Grant","Championship Appearance: None","First Round Bye: None","Playoff Appearances: None","Playoff Record: None"],
["Mac","Championship Appearance: None","First Round Bye: None","Playoff Appearances: ’20, ’22","Playoff Record: 0-2"],
["Blum","Championship Appearances: ’22, ’25; Championship record: 0-2","First Round Bye: ’25","Playoff Appearances: ’21, ’22, ’25","Playoff Record: 3-3"],
["Drayton","Championship Appearance: None","First Round Bye: None","Playoff Appearances: ’20","Playoff Record: 0-1"],
["Justin","Championship Appearance: ’23; Championship record: 0-1","First Round Bye: None","Playoff Appearances: ’23","Playoff Record: 2-1"]
];

const currentRules = [
"Two flexes and no kicker.",
"Playoffs are 6 teams, the top team in each division gets an automatic bye and the other 4 spots are filled by the teams with the best record regardless of division.",
"Playoffs start at Week 15.",
"Trade Deadline is Week 11.",
"Not doing punishment results in loss of first-round pick (have to pick defense).",
"Trades are still voted on and any first-round pick can be traded.",
"Auto Drafters get a lost pick the next year.",
"Draft slot is determined by March Madness brackets.",
"Expand Payout to 5th ($60) and 6th ($50) to get some money back; winner of losers bracket gets $40 back and loser of bracket gets S.H.I.T. and punishment.",
"Divisions will get randomized every year.",
"Bench spot dropped from 7 to 6.",
"Wheel of Punishments will include: Stand in shower clothed; I suck at fantasy football sticker on car; Bedroom poster of league’s choosing; Polar Plunge; Hot Wing Podcast (YouTube); Comedy Set for League; Beer Mile; Apologize to each member of league with personal letter (Almost Unanimous).",
"If a trade is made with a player that plays on that same day, the trade gets pushed through the same day.",
"The punishment is decided by a wheel.",
"You lose waiver wire privileges for no ice until it's paid.",
"The schedule is set manually by me; you play each team once (11 games) and for the last three you play one game against your draft class (or closest) and the other two are rivalry games set up by your rankings. Nobody will play three times if set up manually.",
"Draft is done by March Madness, unless someone gets a celebrity or coach to pick.",
"Playoff Bracket Reseeding: 5th place game is decided in Week 16, loser plays the winner of the loser's bracket in Week 17 for $40.",
"Changed FAAB rule to where you can bet $0 on a FA (recent lowest is $1). If multiple GMs bet $0 then it will be based on waiver order.",
"Games can end in a tie.",
"No bonus wins and losses."
];

const rules = {
2025:["Playoff Bracket Reseeding: 5th place game is decided in week 16, loser plays the winner of the loser's bracket in week 17 for $40.","Changed FAAB rule to where you can bet $0 ON A FA (recent lowest is $1). If multiple GMS bet $0 then it will be based on waiver order.","Games can end in a tie.","No bonus wins and losses."],
2024:["If a trade is made with a player that plays on that same day, the trade gets pushed through the same day you have to wait 1 hour.","QB points stay the same at 0.05 for yards and 5 points for TD.","1 point for 4th down stop.","The punishment is decided by a wheel.","You lose waiver wire privileges for no ice until it's paid.","Defenses count in ices still.","Schedule is set manually by me; you play each team once (11 games) and for the last three you play one game against your draft class (or closet) and the other two are rivalry games set up by your rankings. Nobody will play three times if set up manually.","Loser does shot for losing rivalry game.","Draft is done by march madness, unless someone gets a celebrity or coach to pick."],
2023:["Week 11 stays as trade deadline","Ice punishment for player scoring 0 or below","Divisions will get randomized every year","Bench spot dropped from 7 to 6","Wheel of Punishments will include: Fully clothed shower; I suck at fantasy football sticker on car; Bedroom poster of leagues choosing; Polar Plunge; Hot Wing Podcast (Youtube); Comedy Set for League; Beer Mile; Apologize to each member of league with personal letter (Almost Unanimous)","Winner of consolation bracket gets $40"],
2022:["Waiver Claims are now FAAB","Trade Deadline moved up from week 13 to week 11","Bench Spots went from 8 to 7","Playoffs start week 15 instead of week 14","The punishment is now sexy calendar","Not doing punishment results in lost of first round pick (Have to pick defense)","Trades are still voted on and any first round pick can be traded","Auto Drafters get lost pick the next year","Draft slot is determined by March madness brackets","Expand Payout to 5th (60) and 6th (50) get some money back and winner of losers bracket gets back (40) and loser of bracket gets S.H.I.T. and punishment"],
2021:["Second Flex added and kicker position removed","First round picks no longer allowed to be traded (Grayson rule)","Playoffs expanded to 6 teams with the top two from each division getting a bye","First round picks can be traded (with stipulations)","Top four split cash with #4 getting money back"]
};


const allPsi = {
2023:{main:[
["QB","Drayton","Allen and $100 Derek Carr"],["RB","Bailey","K. Williams, Barkley, Kamara, R. White"],["WR","Davis","AJ Brown, Amon-Ra, Olave, Waddle"],["TE","Blake","LaPorta and Ferguson"],["FLEX","Braxton","Diggs, J. Cook, Jacobs, etc."],["DEFENSE","Victor","Browns"]],hm:[["QB","Quinton","Hurts, Murray, Burrow, Herbert"],["RB","Kameron","Henry, Mostert, and Stevenson"],["WR","Victor","Allen, Evans, Collins, London"],["TE","Peachey","Hockenson and Hill"],["Defense","Bailey","Cowboys were crazy lol"]]},
2024:{main:[["QB","Quinton","Josh Allen, Baker Mayfield"],["RB","Davis","Gibbs, Achane, McCaffery, Pacheco"],["WR","Quinton","Justin Jefferson, Amon-Ra St. Brown"],["TE","Bailey","Bowers, Cade Otton"],["FLEX","Braxton","BRob, Mike Evans"],["DEFENSE","Davis","Minnesota, Philadelphia"]],hm:[["QB","Peachey","Jackson, Herbert"],["RB","Blum","Kyren, Barkley, Tracy"],["WR","Davis","Chase, Wilson, JSN"],["TE","Davis","Jonnu, NJoku"],["Flex","Peachey","Adams, Shakir, Higgins"],["Defense","Braxton","Baltimore, Houston"]]},
2025:{main:[["QB","Blum","Josh Allen and Drake Maye"],["RB","Kam","Bijan Robinson, Kyren Williams, and Rico Dowdle"],["WR","Peachey","Puka Nacua, Amon-Ra St. Brown, and DK Metcalf"],["TE","Kam","Brock Bowers, Harold Fannin, and Colston Loveland"],["FLEX","Quinton","Justin Jefferson and Terry McLaurin"],["Defense","Peachey","Seahawks"]],hm:[["QB","Quinton","Hurts and Daniels"],["RB","Blum","Jahmyr Gibbs, Chase Brown, Kenneth Gainwell"],["WR","Quinton","Ja’Marr Chase, AJ Brown, Justin Jefferson, and Terry McLaurin"],["TE","Peachey","Dalton Schultz and Jake Ferguson"],["Flex","Mac","Ladd McConkey and Jakobi Meyers"],["Defense","Grant","Texans"]]}
};

const accoladeDefinitions = {
  "Juggernaut Award":"Most points scored",
  "Juggernaut":"Most points scored",
  "Lame Duck":"Least points scored",
  "Worst Trade":"Worst trade",
  "Comeback of the Year":"1st year in playoffs",
  "The Marino":"Regular Season Champion",
  "Marino":"Regular Season Champion",
  "The Falcon Award":"Worst season collapse",
  "Falcon Award":"Worst season collapse",
  "Falcon":"Worst season collapse",
  "The Avenger":"Most Disruptive to playoff teams",
  "Avenger":"Most Disruptive to playoff teams",
  "The Punching Bag":"Most Points Against",
  "Punching Bag":"Most Points Against"
};

function accoladeBadges(text){
  if(!text) return "Add accolades here";
  if(text === "None") return `<span class="accolade-badge" tabindex="0">None<span class="accolade-tooltip">None</span></span>`;
  const names = Object.keys(accoladeDefinitions).sort((a,b)=>b.length-a.length);
  const parts = text.split(" • ");
  return parts.map(part=>{
    let matched = names.find(n=>part.toLowerCase().startsWith(n.toLowerCase()+" "));
    if(!matched) matched = names.find(n=>part.toLowerCase()===n.toLowerCase());
    const label = matched || part;
    const definition = matched ? accoladeDefinitions[matched] : label;
    const rest = matched ? part.slice(matched.length) : "";
    return `<span class="accolade-badge" tabindex="0">${label}${rest}<span class="accolade-tooltip">${definition}</span></span>`;
  }).join(" ");
}

const champions = [
["2020","Grayson Maxfield","Bitchin’ Baker Beards","8–5"],["2021","Bailey Coble","Kareem Pie","9–5"],["2022","Jonathan Davis","Make it Hurts so Good","8–5"],["2023","Victor Barcenas","My Ball Zach Ertz","10–4"],["2024","Quinton Roof","King Henry’s Court","10–4"],["2025","Kameron Walker","Njigbas in Paris","8–6"]
];

function home(){return `<div class="home-intro"><h2>Welcome to the Alpha Psi League</h2><p class="intro">League history, champions, records, rules, punishments, and honors — all in one place.</p></div><section class="champions-wrap"><div class="section-title"><span></span><h2>Hall of Champions</h2><span></span></div><div class="banner-row">${champions.map((c,i)=>`<div class="champion-banner" style="--speed:${5.2+i*.35}s;--delay:${i*-.55}s"><div class="year">${c[0]}</div>${c[0]==="2020"?`<img class="champion-photo" src="grayson-helmet.png" alt="Grayson's team helmet">`:c[0]==="2021"?`<img class="champion-photo" src="bailey-champion.jpeg" alt="Bailey championship photo">`:c[0]==="2022"?`<img class="champion-photo" src="davis-helmet.png" alt="Davis team helmet">`:c[0]==="2023"?`<img class="champion-photo" src="victor-helmet.png" alt="Victor team emblem">`:c[0]==="2024"?`<img class="champion-photo" src="quinton-helmet.png" alt="Quinton team emblem">`:c[0]==="2025"?`<img class="champion-photo" src="kameron-banner.png" alt="Kameron team image">`:""}<div class="team">${c[2]}</div><div class="champ">Champion<br><strong>${c[1]}</strong></div><div class="record">${c[3]}</div></div>`).join("")}</div></section>`}
function history(){
  return `<h2>League History</h2>
  <p class="intro">The Alpha Psi Fake Football League has evolved over the years. This is where we preserve the league’s history and original identity.</p>
  <div class="history-logo-card">
    <div class="history-label">ORIGINAL LEAGUE LOGO</div>
    <img src="original-alpha-psi-logo.jpeg" alt="Original Alpha Psi Fantasy Football League logo" class="history-logo">
    <h3>The Original Alpha Psi Fantasy Football League</h3>
    <p class="intro">The original logo used when the league began.</p>
  </div>
  <div class="media-box">More league history, old logos, photos, and other historical material can be added here.</div>`
}
function stats(){return `<h2>Stats</h2><p class="intro">This section is ready for the ESPN league data you provide. We can expand it with team, player, weekly, and season statistics.</p><div class="grid"><div class="card"><strong>ESPN Data</strong><p>Roster and scoring data can be added here.</p></div><div class="card"><strong>Season Stats</strong><p>Season-by-season totals and averages can live here.</p></div><div class="card"><strong>Player Stats</strong><p>Individual player records can be added here.</p></div></div>`}
function teams(){return `<h2>Teams</h2><p class="intro">Team pages are ready to be added as we bring over the league's ESPN history.</p><div class="grid">${champions.map(c=>`<div class="card"><strong>${c[2]}</strong><p>${c[0]} champion — ${c[1]} — ${c[3]}</p></div>`).join("")}</div>`}
function schedule(){return `<h2>Schedule</h2><p class="intro">Schedule and matchup history will be added from your ESPN data.</p><div class="media-box">ESPN schedule links or screenshots can be added here.</div>`}
function recordsPage(){return `<h2>League Records</h2><p class="intro">The all-time Alpha Psi record book.</p>
<div class="record-feature">
  <div class="record-feature-title">200 POINT CLUB</div>
  <div class="record-feature-sub">Three players have crossed the 200-point mark in a single fantasy matchup.</div>
  <div class="two-hundred-grid">${twoHundredClub.map((r,i)=>`<div class="record-holder"><div class="record-rank">0${i+1}</div><div class="record-value">${r[0]}</div><div class="record-detail">${r[1]}</div></div>`).join("")}</div>
</div>
<div class="records-grid">${records.map(r=>`<article class="record-card"><div class="record-card-title">${r[0]}</div><div class="record-card-value">${r[1]}</div><div class="record-card-detail">${r[2]}</div></article>`).join("")}</div>`}
function playoffsPage(){return `<h2>Playoff Records</h2><p class="intro"><strong>Record does not include wins after 1st loss in playoffs.</strong><br>Six-team playoffs started in 2022; no first-round byes before then.</p><div class="playoff-definitions"><div><strong>Championship Appearances</strong><span>Years and championship record</span></div><div><strong>First Round Byes</strong><span>Years receiving a bye</span></div><div><strong>Playoff Appearances</strong><span>Years making the playoffs</span></div><div><strong>Playoff Record</strong><span>Playoff wins and losses</span></div></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Member</th><th>Championship Appearances</th><th>First Round Byes</th><th>Playoff Appearances</th><th>Playoff Record</th></tr></thead><tbody>${playoff.map(p=>{const champ=p[1].replace(/^Championship Appearance(?:s)?:\s*/,"").replace(/;\s*Championship record:/i," — Championship record:");const bye=p[2].replace(/^First Round Bye(?:s)?:\s*/,"");const apps=p[3].replace(/^Playoff Appearances:\s*/,"");const rec=p[4].replace(/^Playoff Record:\s*/,"");return `<tr><td><strong>${p[0]}</strong></td><td>${champ}</td><td>${bye}</td><td>${apps}</td><td>${rec}</td></tr>`}).join("")}</tbody></table></div>`}
function rulesPage(){
  const activeMap={2025:[0,1,2,3],2024:[0,3,4,6,8],2023:[0,2,3,4,5],2022:[0,1,3,5,6,7,8,9],2021:[0,2,3]};
  return `<h2>Rule Amendments Following Season (All-Time)</h2>
  <div class="current-rules">
    <div class="current-rules-title">Current Rules</div>
    <ol>${currentRules.map(x=>`<li>${x}</li>`).join("")}</ol>
    <div class="current-rules-origin"><strong>2020</strong><span>League founded. No rule amendments recorded for the founding season.</span></div>
  </div>
  <p class="intro"><span class="badge">Highlighted</span> Rules that are still in effect are shown in red.</p>
  ${Object.entries(rules).map(([y,items])=>`<div class="year-block"><h3>${y}</h3><ol>${items.map((x,i)=>`<li class="${(activeMap[y]||[]).includes(i)?"rule-active":""}">${x}</li>`).join("")}</ol></div>`).join("")}`
}
function punishments(){const rows=[["2020–2021","No punishments (boo)","—"],["2022","24 hour Waffle House challenge","Drayton"],["2023","Sexy Calendar","Mac"],["2024","Personal Apology letter","Drayton"],["2025","Beer Mile","Grant"]];return `<h2>Punishments</h2><div class="table-wrap"><table class="data-table"><thead><tr><th>Year</th><th>Punishment</th><th>Member</th><th>Media</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td><a href="#" onclick="return false;">Add photo/video link</a></td></tr>`).join("")}</tbody></table></div><div class="media-box">Media placeholders are ready. Replace the “Add photo/video link” placeholders in the HTML/JS with YouTube, Google Drive, image, or other hosted-media URLs.</div>`}
function allPsiPage(){let out=`<h2>Papa’s All-Psi Team</h2><img src="papas-all-psi-photo.jpeg" alt="Brother Robert Cowsert" class="allpsi-photo"><div class="dedication">In memory of Brother Robert Cowsert.</div>`;for(const y of [2023,2024,2025]){const d=allPsi[y];out+=`<div class="year-block"><h3>${y} Papa’s All-Psi Team</h3><div class="grid">${d.main.map(x=>`<div class="card"><div class="position">${x[0]}</div><strong>${x[1]}</strong><p>${x[2]}</p></div>`).join("")}</div><div class="honorable"><h3>Honorable Mentions</h3><div class="grid">${d.hm.map(x=>`<div class="card"><div class="position">${x[0]}</div><strong>${x[1]}</strong><p>${x[2]}</p></div>`).join("")}</div></div><div class="media-box">Add photo/video links for this year's All-Psi team here.</div></div>`}return out}
function members(){
  const current=[
    ["Quinton","2020–Present",true,"Worse Name (’23) • 2024 Championship (’24) • GM of the Year (’24) • CBPOY (’24) • Falcon (’25)","39–43"],
    ["Bailey","2020–Present",true,"2021 Championship (1x) • Juggernaut Award (’23) • Marino (’23, tied with Vic) • Comeback of the Year (1x) • GM of the Year (’21) • Best Name (’25)","52–30"],
    ["Davis","2020–Present",true,"2020 Championship (1x) • Falcon Award (’23) • Punching Bag (’23) • GM of the Year (’22) • Juggernaut (’24) • Marino (’24)","50–32"],
    ["Blum","2020–Present",true,"Marino (’21) • Best Podcast Guest (’24) • Falcon (’24) • Juggernaut (’23, ’25)","45–37"],
    ["Peachey","2020–Present",true,"Punching Bag (’21)","44–38"],
    ["Justin","2023–Present",false,"GM of the Year (’23) • Lame Duck (’25) • Avenger (’25)","18–24"],
    ["Grant H.","2024–Present",false,"Avenger (’24)","5–23"],
    ["Kameron","2020–Present",true,"2025 Championship (1x) • Best Name (’23) • Comeback of the Year (’23) • The Falcon Award (’21) • CBPOY (’25) • Marino (’25) • GM of the Year (’25)","47–35"],
    ["Braxton","2022–Present",false,"None","29–26"],
    ["Victor B.","2023–Present",false,"2023 Championship (1x) • Marino (’23, tied with Bailey) • Rookie of the Year (’23)","27–15"],
    ["Mac","2020–Present",true,"Punching Bag (’25) • Worst Name (’25)","43–39"],
    ["Drayton","2020–Present",true,"Lame Duck (’21, ’23, ’24) • Avenger (’23) • Punching Bag (’24)","28–54"]
  ];
  const alumni=[
    ["Blake","2022–2023","11–16",false,""],
    ["Grayson","2020","8–5",true,"2020 League Champion"],
    ["Corey","2020–2022","13–27",true,""],
    ["Marmo","2021–2022","8–19",false,""],
    ["Ty","2020–2021","15–12",true,""],
    ["Grant A.","2020","3–10",true,""],
    ["Cal","2021","7–7",false,""]
  ];
  return `<h2>Members</h2>
  <h3>Current Members</h3>
  <div class="grid member-grid">${current.map(n=>`<div class="member">${["Bailey","Mac","Davis","Victor","Justin","Blum","Braxton","Grant","Quinton","Kameron","Peachey","Drayton"].includes(n[0])?`<div class="member-heading"><img class="member-photo" src="${n[0]==="Bailey"?"bailey-champion.jpeg":n[0]==="Mac"?"mac-member.png":n[0]==="Davis"?"davis-member.png":n[0]==="Victor"?"victor-member.png":n[0]==="Justin"?"justin-member.png":n[0]==="Blum"?"blum-member.png":n[0]==="Braxton"?"braxton-member.png":n[0]==="Grant"?"grant-member.png":n[0]==="Quinton"?"quinton-member.png":n[0]==="Kameron"?"kameron-member.png":n[0]==="Peachey"?"peachey-member.png":"drayton-member.png"}" alt="${n[0]} member photo"><div><strong>${n[0]}</strong><div class="member-meta">${n[1]}<br><span class="member-record">${n[4]}</span></div></div></div>`:`<strong>${n[0]}</strong><div class="member-meta">${n[1]}<br><span class="member-record">${n[4]}</span></div>`}${n[2]?`<span class="founder-badge">FOUNDING MEMBER</span>`:""}<div class="accolades"><div class="accolades-title">Accolades</div><div class="accolades-placeholder">${accoladeBadges(n[3])}</div></div></div>`).join("")}</div>
  <div class="alumni">
    <h2>Alumni</h2>
    <div class="grid member-grid">${alumni.map(n=>`<div class="member"><strong>${n[0]}</strong><div class="member-meta">${n[1]}<br><span>${n[2]}</span></div>${n[3]?`<span class="founder-badge">FOUNDING MEMBER</span>`:""}<div class="accolades"><div class="accolades-title">Accolades</div><div class="accolades-placeholder">${n[4]?accoladeBadges(n[4]):"Add accolades here"}</div></div></div>`).join("")}</div>
  </div>`
}

const pages={home,history,teams,stats,schedule,records:recordsPage,playoffs:playoffsPage,rules:rulesPage,punishments,allpsi:allPsiPage,members};
function render(page){content.innerHTML=pages[page]();tabs.forEach(t=>t.classList.toggle("active",t.dataset.page===page));window.scrollTo({top:document.querySelector(".main-tabs").offsetTop-60,behavior:"smooth"});location.hash=page}
tabs.forEach(t=>t.addEventListener("click",()=>render(t.dataset.page)));
const initial=location.hash.slice(1);render(pages[initial]?initial:"home");
