const content = document.getElementById("content");
const tabs = [...document.querySelectorAll(".tab")];

const records = [
["Lowest score for one week","52.8","Grant A., Week 11, 2020"],
["Most points in a season","2115.55","Bailey Coble, 2023"],
["Least points in a season","1334.45","Peachey, 2020"],
["Highest point average","151.1","Bailey Coble, 2023"],
["Most PA ever","1968.45","Drayton, 2020 and 2024"],
["Lowest point average","102.7","Peachey, 2020"],
["Biggest blowout","254–117.15","Davis vs Kam, Week 12, 2020"],
["Most moves in a season","65","Quinton, 2023"],
["Most POTWs in a season","8","Bailey Coble, 2023"],
["Longest win streak","7","Bailey, 2021"],
["Longest losing streak","9","Grant, 2024"],
["Most trades in a season","19","Blake Jackson, 2023"],
["Most ices in a season","9","Chase, 2025"],
["Least ices in a season","1","Braxton, 2024 • Blum, 2025"],
["Worst loss","—","Victor losing to Mac when he had three players score 0, Week 7, 2025"]
];
const recordPhotos = {
  "Davis": "davis-member.png",
  "Bailey": "bailey-champion.jpeg",
  "Bailey Coble": "bailey-champion.jpeg",
  "Andrew Blum": "blum-member.png",
  "Blum": "blum-member.png",
  "Peachey": "peachey-member.png",
  "Quinton": "quinton-member.png",
  "Kameron": "kameron-member.png",
  "Kam": "kameron-member.png",
  "Victor": "victor-member-photo.png",
  "Justin": "justin-member.png",
  "Grant": "grant-member-photo.png",
  "Drayton": "drayton-member.png",
  "Mac": "mac-member.png",
  "Braxton": "braxton-member.png"
};

function recordHolderPhoto(detail) {
  const match = Object.keys(recordPhotos).sort((a,b)=>b.length-a.length).find(name => detail.includes(name));
  return match ? {name: match, src: recordPhotos[match]} : null;
}

function recordHover(detail) {
  const holder = recordHolderPhoto(detail);
  if (!holder) return "";
  return `<div class="record-hover-person"><img src="${holder.src}" alt="${holder.name}"><span>${holder.name}</span></div>`;
}

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
  "CBPOY":"CBPOY",
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
  const parts = text.split(" • ").filter(part=>{
    const normalized = part.trim().toLowerCase();
    return !normalized.includes("championship");
  });
  if(!parts.length) return `<span class="accolade-badge" tabindex="0">None<span class="accolade-tooltip">None</span></span>`;
  return parts.map(part=>{
    let matched = names.find(n=>part.toLowerCase().startsWith(n.toLowerCase()+" "));
    if(!matched) matched = names.find(n=>part.toLowerCase()===n.toLowerCase());
    const label = matched || part;
    const rest = matched ? part.slice(matched.length) : "";
    const yearRest = rest.replace(/\s*\(([^)]*)\)/, (m, y) => ` (${y})`);
    const definition = (matched && !/^comeback of the year$/i.test(matched) && !/^CBPOY$/i.test(matched)) ? accoladeDefinitions[matched] : (label + rest);
    return `<span class="accolade-badge" tabindex="0">${label}${yearRest}<span class="accolade-tooltip">${definition}</span></span>`;
  }).join(" ");
}

const champions = [
["2020","Grayson Maxfield","Bitchin’ Baker Beards","8–5"],["2021","Bailey Coble","Kareem Pie","9–5"],["2022","Jonathan Davis","Make it Hurts so Good","8–5"],["2023","Victor Barcenas","My Ball Zach Ertz","10–4"],["2024","Quinton Roof","King Henry’s Court","10–4"],["2025","Kameron Walker","Njigbas in Paris","8–6"]
];

const iceCounter = {
  total: 124,
  label: "ALL-TIME ICES"
};

function home(){
  const championMember={
    "2020":"Grayson","2021":"Bailey","2022":"Davis","2023":"Victor B.","2024":"Quinton","2025":"Kameron"
  };
  const bannerPhoto={
    "2020":"grayson-helmet.png","2021":"bailey-banner.png","2022":"davis-helmet.png",
    "2023":"victor-helmet.png","2024":"quinton-banner.png","2025":"kameron-banner.png"
  };
  const recordSpotlights=[
    ["MOST POINTS IN A SEASON","2,115.55","Bailey Coble","2023","bailey-champion.jpeg"],
    ["MOST ICES IN A SEASON","9","Chase","2025",""],
    ["LONGEST WIN STREAK","7","Bailey","2021","bailey-champion.jpeg"],
    ["MOST MOVES IN A SEASON","65","Quinton","2023","quinton-member.png"]
  ];
  return `<section class="champions-wrap">
    <div class="section-title"><span></span><h2>League Champions</h2><span></span></div>
    <div class="banner-row">${champions.map((c,i)=>`<div class="champion-banner champion-banner-link" tabindex="0" role="button" data-member="${championMember[c[0]]}" aria-label="Open ${c[1]}'s member profile" style="--speed:${5.2+i*.35}s;--delay:${i*-.55}s">
      <div class="year">${c[0]}</div>
      <div class="team">${c[2]}</div>
      <img class="champion-photo" src="${bannerPhoto[c[0]]}" alt="${c[1]} team image">
      <div class="champ"><strong>${c[1]}</strong></div>
      <div class="record">${c[3]}</div>
    </div>`).join("")}</div>

    <div class="home-record-spotlight" data-spotlight-index="0">
      <div class="home-record-copy">
        <div class="home-record-kicker">RECORD SPOTLIGHT</div>
        <div class="home-record-title">${recordSpotlights[0][0]}</div>
        <div class="home-record-value">${recordSpotlights[0][1]}</div>
        <div class="home-record-holder">${recordSpotlights[0][2]} <span>· ${recordSpotlights[0][3]}</span></div>
        <div class="home-record-rule">THE ALPHA PSI RECORD BOOK</div>
      </div>
      <div class="home-record-portrait">${recordSpotlights[0][4]?`<img src="${recordSpotlights[0][4]}" alt="${recordSpotlights[0][2]}">`:""}</div>
      <div class="home-record-count">01 / ${String(recordSpotlights.length).padStart(2,"0")}</div>
    </div>

    <div class="ice-counter" aria-label="All-time Ice counter"><img class="ice-cube-art" src="ice-cube-art.png" alt="" aria-hidden="true"><img class="ice-brand-logo" src="smirnoff-ice-logo.png" alt="Smirnoff ICE">
      <div class="ice-counter-label">${iceCounter.label}</div>
      <div class="ice-counter-number">${iceCounter.total}</div>
    </div>
    <section class="shit-box">
      <div class="shit-box-header">
        <div>
          <div class="shit-box-kicker">THE S.H.I.T. BOX</div>
          <h3>SHAMEFULLY HORRIBLE INDIVIDUAL TROPHY</h3>
          <p>Reserved for the manager who finished the season at the bottom of the barrel.</p>
        </div>
        <div class="shit-box-mark"><img src="shit-toilet-trophy.png" alt="Shamefully Horrible Individual Trophy toilet trophy"></div>
      </div>
      <div class="shit-box-records">
        ${[
          ["2020","Corey Steele","3–10"],
          ["2021","Tyler Marmo","2–12"],
          ["2022","Drayton Paxton","3–10"],
          ["2023","Chase Arrington","6–8"],
          ["2024","Drayton Paxton","1–13"],
          ["2025","Grant Harris","3–11"]
        ].map((r,i)=>`<article class="shit-box-row">
          <span class="shit-box-year">${r[0]}</span>
          <strong>${r[1]}</strong>
          <b>${r[2]}</b>
        </article>`).join("")}
      </div>
      <div class="shit-box-footer">THE LEAGUE'S LOWEST HONOR · EST. 2020</div>
    </section>
  </section>`;
}
function historyPage(){
  const seasons={
    2025:{archive:[]},
    2024:{archive:[["2024","Personal Apology Letter","Drayton",`<a class="archive-document" href="2024-punishment-apology.jpeg" target="_blank" rel="noopener"><img src="2024-punishment-apology.jpeg" alt="2024 Personal Apology Letter"><span>VIEW LETTER</span></a>`]]},
    2023:{archive:[]},
    2022:{archive:[["2022","24-Hour Waffle House Challenge","Drayton",`<a class="archive-media-link" href="https://youtu.be/3CWUCo5KeR8?si=_pKSGmxTgEuX6rXW" target="_blank" rel="noopener">WATCH VIDEO</a>`]]},
    2021:{archive:[]},
    2020:{archive:[]}
  };

  const renderArchive=(d)=>d.archive.length
    ? d.archive.map(r=>`<article class="archive-entry">
        <div class="archive-year">${r[0]}</div>
        <div class="archive-details">
          <div class="archive-punishment">${r[1]}</div>
          <div class="archive-member">${r[2]}</div>
          <div class="archive-media">${r[3]}</div>
        </div>
      </article>`).join("")
    : `<div class="archive-empty">No archive entries for this season.</div>`;

  const renderPodium=(places)=>`<section class="season-podium">
    <div class="season-section-title">FINAL STANDINGS</div>
    <div class="podium-grid">
      ${places.map(p=>`<article class="podium-place ${p.cls}">
        <div class="podium-medal"><span>${p.medal}</span></div>
        <div class="podium-team">${p.team}</div>
        <div class="podium-manager">${p.manager||""}</div>
        <div class="podium-place-label">${p.label}</div>
      </article>`).join("")}
    </div>
  </section>`;

  const renderMoves=(joined,lost)=>`<section class="season-moves">
    <div class="moves-grid">
      <div class="moves-box joined-box">
        <div class="season-section-title">BROTHERS GAINED</div>
        <div class="move-list">${joined.map((n,i)=>`<div class="move-item"><span>${String(i+1).padStart(2,"0")}</span><strong>${n}</strong></div>`).join("")}</div>
      </div>
      <div class="moves-box lost-box">
        <div class="season-section-title">BROTHERS LOST</div>
        <div class="move-list">${lost.map((n,i)=>`<div class="move-item"><span>${String(i+1).padStart(2,"0")}</span><strong>${n}</strong></div>`).join("")}</div>
      </div>
    </div>
  </section>`;

  const render2024=()=>`<section class="history-season-panel history-2024-panel" data-season="2024">
    <div class="history-season-heading"><span>SEASON</span><strong>5</strong></div>
    <div class="history-season-rule"></div>

    <section class="season-foundation">
      <div class="season-foundation-kicker">THE LEAGUE IS BUILT TO LAST</div>
      <h3>Five Years Strong</h3>
      <p>2024 was the year we knew the Alpha Psi Fake Football League was built to last. Going into the fifth year, we finally had a solid group of active brothers who were invested in the league and in what we were building together. We determined that draft order would be done by March Madness brackets, unless someone could get a celebrity or coach to make the pick. We also created our dynasty league this year, giving the Alpha Psi football community another way to compete and keep building for the future.</p></section>

    <section class="history-photo-feature champion-photo-feature">
      <div class="history-photo-feature-title">2024 CHAMPION</div>
      <figure>
        <a href="2024-champion-quinton-roof.jpeg" target="_blank" rel="noopener">
          <img src="2024-champion-quinton-roof.jpeg" alt="2024 Champion Quinton Roof">
        </a>
        <figcaption>2024 Champion Quinton Roof</figcaption>
      </figure>
    </section>

    
    <section class="history-photo-feature champion-photo-feature fantasy-loser-feature">
      <div class="history-photo-feature-title">2024 FANTASY LOSER</div>
      <figure>
        <a href="2024-fantasy-loser-drayton-paxton.jpeg" target="_blank" rel="noopener">
          <img src="2024-fantasy-loser-drayton-paxton.jpeg" alt="2024 Fantasy loser Drayton Paxton">
        </a>
        <figcaption>Fantasy loser 2024 Drayton Paxton</figcaption>
      </figure>
    </section>

    

    ${renderPodium([
      {cls:"second",medal:"2ND",team:"Cocaine Cowboys",manager:"Jonathan Davis",label:"2ND PLACE"},
      {cls:"first",medal:"1ST",team:"King Henry's Court",manager:"Quinton Roof",label:"2024 CHAMPION"},
      {cls:"third",medal:"3RD",team:"Ice? Never heard of her",manager:"Alexander Peachey",label:"3RD PLACE"}
    ])}

    <section class="season-moves">
      <div class="moves-grid">
        <div class="moves-box joined-box">
          <div class="season-section-title">BROTHERS GAINED</div>
          <div class="move-list">
            <div class="move-item"><span>01</span><strong>Grant Harris</strong></div>
          </div>
        </div>
      </div>
    </section>

    <section class="season-superlatives">
      <div class="season-section-title">SUPERLATIVES</div>
      <article class="superlative-ices"><h4>Total Ices</h4><div class="superlative-main"><strong>2024 Season</strong><span>League Total</span></div><b>41</b></article>
      <div class="superlative-grid">
        <article class="superlative-wide">
          <h4>Most Wins</h4>
          <div class="superlative-stack">
            <div class="superlative-row"><div class="superlative-main"><strong>King Henry's Court</strong><span>Quinton Roof</span></div><b>10</b></div>
            <div class="superlative-row"><div class="superlative-main"><strong>Shambles</strong><span>Bailey Coble</span></div><b>10</b></div>
            <div class="superlative-row"><div class="superlative-main"><strong>Cocaine Cowboys</strong><span>Jonathan Davis</span></div><b>10</b></div>
            <div class="superlative-row"><div class="superlative-main"><strong>Ice? Never heard of her</strong><span>Alexander Peachey</span></div><b>10</b></div>
          </div>
        </article>

        <article class="superlative-wide">
          <h4>Longest Win Streak</h4>
          <div class="superlative-stack">
            <div class="superlative-row"><div class="superlative-main"><strong>King Henry's Court</strong><span>Quinton Roof</span></div><b>5</b></div>
            <div class="superlative-row"><div class="superlative-main"><strong>Cocaine Cowboys</strong><span>Jonathan Davis</span></div><b>5</b></div>
            <div class="superlative-row"><div class="superlative-main"><strong>My Ball Zach Ertz</strong><span>Victor Barcenas</span></div><b>5</b></div>
          </div>
        </article>

        <article>
          <h4>Longest Losing Streak</h4>
          <div class="superlative-main"><strong>A wish and a prayer</strong><span>Grant Harris</span></div>
          <b>9</b>
        </article>

        <article class="superlative-blowout">
          <h4>Biggest Blowout</h4>
          <div class="superlative-meta">2024, Week 3</div>
          <div class="superlative-score-row">
            <div class="superlative-main"><strong>Cocaine Cowboys</strong><span>Jonathan Davis</span></div>
            <b>167.3</b>
          </div>
          <div class="superlative-score-row secondary">
            <div class="superlative-main"><strong>njigbas in paris</strong><span>Kameron Walker</span></div>
            <b>64.55</b>
          </div>
        </article>
      </div>
    </section>
  </section>`;

  const render2023=()=>`<section class="history-season-panel history-2023-panel" data-season="2023">
    <div class="history-season-heading"><span>SEASON</span><strong>4</strong></div>
    <div class="history-season-rule"></div>

    <section class="season-foundation">
      <div class="season-foundation-kicker">THE MODERN LEAGUE TAKES SHAPE</div>
      <h3>Becoming What We Know Today</h3>
      <p>2023 was the year the league really started to become what we know today. The current group of brothers was beginning to take shape, and people were investing more of themselves into what we were building. The podcast was growing, giving everyone a chance to get on and talk football and league business together. We also started giving out ices for scoring 0 points, and bench spots were cut from 7 to 6, putting a much tighter limit on roster depth. Most importantly, we introduced a uniform punishment system through the Wheel of Punishments, creating the league tradition that we still use today. Justin Cooper also became our Ice Commissioner, taking charge of the ice tradition that became part of the league.</p>
</section>
<section class="history-photo-feature champion-photo-feature">
      <div class="history-photo-feature-title">2023 CHAMPION</div>
      <figure>
        <a href="2023-champion-victor-barcenas.jpeg" target="_blank" rel="noopener">
          <img src="2023-champion-victor-barcenas.jpeg" alt="2023 Champion Victor Barcenas">
        </a>
        <figcaption>2023 Champion Victor Barcenas</figcaption>
      </figure>
    </section>
<section class="history-photo-feature champion-photo-feature fantasy-loser-feature">
  <div class="history-photo-feature-title">2023 FANTASY LOSER</div>
  <figure class="history-photo-card">
    <img src="2023-fantasy-loser-chase-arrington.jpeg" alt="2023 Fantasy loser Chase Arrington">
    <figcaption>2023 Fantasy loser Chase Arrington</figcaption>
  </figure>
</section>
<section class="history-photo-feature">
      <div class="history-photo-feature-title">DRAFT DAY 2023</div>
      <div class="history-photo-grid">
        <figure>
          <a href="2023-draft-day-1.jpeg" target="_blank" rel="noopener"><img src="2023-draft-day-1.jpeg" alt="Draft day 2023"></a>
          <figcaption>Draft day 2023</figcaption>
        </figure>
        <figure>
          <a href="2023-draft-day-2.jpeg" target="_blank" rel="noopener"><img src="2023-draft-day-2.jpeg" alt="Draft day 2023"></a>
          <figcaption>Draft day 2023</figcaption>
        </figure>
      </div>
    </section>


    ${renderPodium([
      {cls:"second",medal:"2ND",team:"Pillsbury Throw-boy",manager:"Justin Cooper",label:"2ND PLACE"},
      {cls:"first",medal:"1ST",team:"My Ball Zach Ertz",manager:"Victor Barcenas",label:"2023 CHAMPION"},
      {cls:"third",medal:"3RD",team:"El Jeffe's Kitchen",manager:"Braxton Ivey",label:"3RD PLACE"}
    ])}

    ${renderMoves(["Justin Cooper","Victor Barcenas"],["Blake Jackson"])}

    <section class="season-superlatives">
      <div class="season-section-title">SUPERLATIVES</div>
      <article class="superlative-ices"><h4>Total Ices</h4><div class="superlative-main"><strong>2023 Season</strong><span>League Total</span></div><b>30</b></article>
      <div class="superlative-grid">
        <article class="superlative-wide">
          <h4>Most Wins</h4>
          <div class="superlative-stack">
            <div class="superlative-row"><div class="superlative-main"><strong>Mean Machine</strong><span>Bailey Coble</span></div><b>10</b></div>
            <div class="superlative-row"><div class="superlative-main"><strong>My Ball Zach Ertz</strong><span>Victor Barcenas</span></div><b>10</b></div>
          </div>
        </article>

        <article class="superlative-wide">
          <h4>Longest Win Streak</h4>
          <div class="superlative-stack">
            <div class="superlative-row"><div class="superlative-main"><strong>Mean Machine</strong><span>Bailey Coble</span></div><b>6</b></div>
            <div class="superlative-row"><div class="superlative-main"><strong>My Ball Zach Ertz</strong><span>Victor Barcenas</span></div><b>6</b></div>
          </div>
        </article>

        <article><h4>Longest Losing Streak</h4><div class="superlative-main"><strong>The AJ Saint Browns</strong><span>Jonathan Davis</span></div><b>6</b></article>

        <article class="superlative-blowout">
          <h4>Biggest Blowout</h4>
          <div class="superlative-meta">2023, Week 6</div>
          <div class="superlative-score-row secondary"><div class="superlative-main"><strong>Party City DrinkingProblem</strong><span>Drayton Paxton</span></div><b>91.35</b></div>
          <div class="superlative-score-row"><div class="superlative-main"><strong>Mean Machine</strong><span>Bailey Coble</span></div><b>177.75</b></div>
        </article>
      </div>
    </section>
  </section>`;

const render2022=()=>`<section class="history-season-panel history-2022-panel" data-season="2022">
    <div class="history-season-heading"><span>SEASON</span><strong>3</strong></div>
    <div class="history-season-rule"></div>

    <section class="season-foundation">
      <div class="season-foundation-kicker">THE LEAGUE TAKES SHAPE</div>
      <h3>Getting More Serious</h3>
      <p>By 2022, the Alpha Psi Fake Football League was starting to get a little more serious. The competition was becoming more meaningful and the league was beginning to develop its identity, but there was still serious turnover from season to season. Bailey Coble and Quinton Roof also started the Alpha Sighs Podcast, giving the league another way to bring the brothers together, talk football, and build the league's personality outside of the weekly matchups. New brothers were coming in, others were moving on, and everyone was still figuring out what it meant to build a lasting league while competing for a championship. The rules were evolving quickly too: waiver claims moved to FAAB, the trade deadline moved up from Week 13 to Week 11, and bench spots were reduced from 8 to 7. The playoffs moved to a Week 15 start instead of Week 14. The punishment became the Sexy Calendar, and failing to complete a punishment meant losing your first-round pick and being forced to draft a defense. Trades continued to be voted on, and first-round picks could still be traded. Auto-drafters would lose a pick the following year, while draft position was determined by March Madness brackets. The payout structure also expanded, giving fifth place $60 and sixth place $50, while the winner of the losers bracket received $40 back. The loser of that bracket received S.H.I.T. and the punishment.</p></section>

    <section class="history-photo-feature champion-photo-feature">
      <div class="history-photo-feature-title">2022 CHAMPION</div>
      <figure>
        <a href="2022-champion-jonathan-davis.jpeg" target="_blank" rel="noopener">
          <img src="2022-champion-jonathan-davis.jpeg" alt="2022 Champion Jonathan Davis">
        </a>
        <figcaption>2022 Champion Jonathan Davis</figcaption>
      </figure>
    </section>

    <section class="history-photo-feature champion-photo-feature fantasy-loser-feature">
      <div class="history-photo-feature-title">2022 FANTASY LOSER</div>
      <figure>
        <a href="2022-fantasy-loser-drayton-paxton.jpeg" target="_blank" rel="noopener">
          <img src="2022-fantasy-loser-drayton-paxton.jpeg" alt="2022 Fantasy loser Drayton Paxton">
        </a>
        <figcaption>Fantasy loser 2022 Drayton Paxton</figcaption>
      </figure>
    </section>

    

    ${renderPodium([
      {cls:"second",medal:"2ND",team:"Dirty Mikes And The Boys",manager:"Andrew Blum",label:"2ND PLACE"},
      {cls:"first",medal:"1ST",team:"Make it Hurts So Good",manager:"Jonathan Davis",label:"2022 CHAMPION"},
      {cls:"third",medal:"3RD",team:"Deshaun Watsons Happy Endings",manager:"Alexander Peachey",label:"3RD PLACE"}
    ])}

    ${renderMoves(["Blake Jackson","Braxton Ivey"],["Tyler Marmo","Corey Steele"])}

    <section class="season-superlatives">
      <div class="season-section-title">SUPERLATIVES</div>
      <div class="superlative-grid">
        <article class="superlative-wide">
          <h4>Most Wins</h4>
          <div class="superlative-stack">
            <div class="superlative-row"><div class="superlative-main"><strong>Baseball's Better</strong><span>McKinzie Arrington</span></div><b>8</b></div>
            <div class="superlative-row"><div class="superlative-main"><strong>Derrick HitmanHenry</strong><span>Bailey Coble</span></div><b>8</b></div>
            <div class="superlative-row"><div class="superlative-main"><strong>Make it Hurts So Good</strong><span>Jonathan Davis</span></div><b>8</b></div>
            <div class="superlative-row"><div class="superlative-main"><strong>cousin named kirk</strong><span>Kameron Walker</span></div><b>8</b></div>
            <div class="superlative-row"><div class="superlative-main"><strong>Deshaun Watsons Happy Endings</strong><span>Alexander Peachey</span></div><b>8</b></div>
            <div class="superlative-row"><div class="superlative-main"><strong>Dirty Mikes And The Boys</strong><span>Andrew Blum</span></div><b>8</b></div>
          </div>
        </article>

        <article><h4>Longest Win Streak</h4><div class="superlative-main"><strong>Make it Hurts So Good</strong><span>Jonathan Davis</span></div><b>6</b></article>

        <article><h4>Longest Losing Streak</h4><div class="superlative-main"><strong>Party City DrinkingProblem</strong><span>Drayton Paxton</span></div><b>7</b></article>

        <article class="superlative-blowout">
          <h4>Biggest Blowout</h4>
          <div class="superlative-meta">2022, Week 9</div>
          <div class="superlative-score-row secondary"><div class="superlative-main"><strong>Dirty Mikes And The Boys</strong><span>Andrew Blum</span></div><b>59.35</b></div>
          <div class="superlative-score-row"><div class="superlative-main"><strong>Deshaun Watsons Happy Endings</strong><span>Alexander Peachey</span></div><b>166.7</b></div>
        </article>
      </div>
    </section>
  </section>`;
const render2021=()=>`<section class="history-season-panel history-2021-panel" data-season="2021">
    <div class="history-season-heading"><span>SEASON</span><strong>2</strong></div>
    <div class="history-season-rule"></div>
    <section class="season-foundation">
      <div class="season-foundation-kicker">THE YOUNG LEAGUE</div>
      <h3>Finding Its Footing</h3>
      <p>2021 was still a shaky year for the young Alpha Psi Fake Football League. The league was trying to find its footing as two brothers left and two new ones joined. Everyone was learning what the league could become, while a gigantic hole remained at the top: there was no returning champion to set the standard. In a pandemic world, the league had football, each other, and another season to build on what had started the year before. The season also saw the creation of the Alpha Psi Lombardi trophy, giving the league a physical championship trophy and a lasting symbol of what the league was becoming.</p>
    <section class="history-photo-feature champion-photo-feature">
      <div class="history-photo-feature-title">2021 CHAMPION</div><figure>
        <a href="2021-champion-jonathan-davis.jpeg" target="_blank" rel="noopener">
          <img src="2021-champion-jonathan-davis.jpeg" alt="2021 Champion Bailey Coble">
        </a>
        <figcaption>2021 Champion Bailey Coble</figcaption>
      </figure>
    </section>

    <section class="history-photo-feature champion-photo-feature fantasy-loser-feature">
      <div class="history-photo-feature-title">2021 FANTASY LOSER</div>
      <figure>
        <a href="2021-fantasy-loser-marmo.jpeg" target="_blank" rel="noopener">
          <img src="2021-fantasy-loser-marmo.jpeg" alt="2021 fantasy loser Marmo">
        </a>
        <figcaption>2021 Fantasy loser Marmo</figcaption>
      </figure>
    </section>

    

    <section class="history-trophy-feature">
      <div class="trophy-feature-copy">
        <div class="season-foundation-kicker">THE ALPHA PSI LOMBARDI</div>
        <h3>A Trophy for the League</h3>
        <p>In 2021, the league created the Alpha Psi Lombardi trophy. The physical trophy gave the championship a permanent place in league history and became a centerpiece of the tradition we continue today.</p>
      </div>
      <a href="alpha-psi-lombardi-trophy.jpeg" target="_blank" rel="noopener" class="trophy-feature-image">
        <img src="alpha-psi-lombardi-trophy.jpeg" alt="Alpha Psi Lombardi trophy">
      </a>
    </section>

    </section>
    ${renderPodium([
      {cls:"second",medal:"2ND",team:"Josh Allen's Boxers",manager:"Ty Katz",label:"2ND PLACE"},
      {cls:"first",medal:"1ST",team:"Kareem Pie",manager:"Bailey Coble",label:"2021 CHAMPION"},
      {cls:"third",medal:"3RD",team:"Grayson Sucks",manager:"Andrew Blum",label:"3RD PLACE"}
    ])}
    ${renderMoves(["Marmo","Cal"],["Ty","Cal"])}
    <section class="season-superlatives">
      <div class="season-section-title">SUPERLATIVES</div>
      <div class="superlative-grid">
        <article class="superlative-wide"><h4>Most Wins</h4><div class="superlative-stack">
          <div class="superlative-row"><div class="superlative-main"><strong>Kareem Pie</strong><span>Bailey Coble</span></div><b>9</b></div>
          <div class="superlative-row"><div class="superlative-main"><strong>You Make Me Gesicki</strong><span>Jonathan Davis</span></div><b>9</b></div>
          <div class="superlative-row"><div class="superlative-main"><strong>Josh Allen's Boxers</strong><span>Ty Katz</span></div><b>9</b></div>
          <div class="superlative-row"><div class="superlative-main"><strong>Grayson Sucks</strong><span>Andrew Blum</span></div><b>9</b></div>
        </div></article>
        <article><h4>Longest Win Streak</h4><div class="superlative-main"><strong>Kareem Pie</strong><span>Bailey Coble</span></div><b>8</b></article>
        <article><h4>Longest Losing Streak</h4><div class="superlative-main"><strong>JulioJones Hamstring</strong><span>Tyler Marmo</span></div><b>10</b></article>
        <article class="superlative-blowout"><h4>Biggest Blowout</h4><div class="superlative-meta">2021, Week 8</div><div class="superlative-score-row"><div class="superlative-main"><strong>Team McOuchMyCalfrey</strong><span>Corey Steele</span></div><b>107.35</b></div><div class="superlative-score-row"><div class="superlative-main"><strong>Grayson Sucks</strong><span>Andrew Blum</span></div><b>181.65</b></div></article>
      </div>
    </section>
  </section>`;
const render2020=()=>`<section class="history-season-panel history-2020-panel" data-season="2020">
    <div class="history-season-heading"><span>SEASON</span><strong>1</strong></div>
    <div class="history-season-rule"></div>
    <div class="history-2020-original-logo">
      <div class="history-2020-logo-label">ORIGINAL LEAGUE LOGO</div>
      <img src="original-alpha-psi-logo.jpeg" alt="Original Alpha Psi Fantasy Football League logo">
    </div>
    <section class="season-foundation">
      <div class="season-foundation-kicker">THE INAUGURAL SEASON</div>
      <h3>Where It All Began</h3>
      <p>2020 was the founding year of the Alpha Psi Fake Football League. The league was built around a simple idea: Alpha Psi brothers getting together, having fun, and competing in fantasy football. Twelve brothers took part in the inaugural season, establishing the league and the traditions that would carry it forward. Grayson Maxfield won the first championship with the Bitchin’ Baker Beards, becoming the league’s inaugural champion. After the season, Grayson left the league and never returned, making his championship the only season he played in Alpha Psi FFL.</p>
    </section>
    ${renderPodium([
      {cls:"second",medal:"2ND",team:"Baby Shark",manager:"Jonathan Davis",label:"2ND PLACE"},
      {cls:"first",medal:"1ST",team:"Bitchin’ Baker Beards",manager:"Grayson Maxfield",label:"2020 CHAMPION"},
      {cls:"third",medal:"3RD",team:"Party City Drinking Problem",manager:"Drayton Paxton",label:"3RD PLACE"}
    ])}
    <section class="season-members-2020">
      <div class="season-section-title">THE 12 BROTHERS OF 2020</div>
      <div class="founding-member-list">
        ${["Quinton Roof","Bailey Coble","Jonathan Davis","Andrew Blum","Alexander Peachey","Kameron Walker","Chase Arrington","Drayton Paxton","Grayson Maxfield","Corey Steele","Ty","Grant A."].map((n,i)=>`<div class="founding-member-item"><span>${String(i+1).padStart(2,"0")}</span><strong>${n}</strong></div>`).join("")}
      </div>
    </section>
    ${renderMoves([],["Grayson Maxfield","Grant A."])}
    <section class="season-superlatives">
      <div class="season-section-title">SUPERLATIVES</div>
      <div class="superlative-grid">
        <article><h4>Most Wins</h4><div class="superlative-main"><strong>Baby Shark</strong><span>Jonathan Davis</span></div><b>9</b></article>
        <article><h4>Longest Win Streak</h4><div class="superlative-main"><strong>Team Walker</strong><span>Kameron Walker</span></div><b>5</b></article>
        <article><h4>Longest Losing Streak</h4><div class="superlative-main"><strong>Team Weenie Hut Jr</strong><span>Corey Steele</span></div><b>6</b></article>
        <article class="superlative-blowout"><h4>Biggest Blowout</h4><div class="superlative-meta">2020, Week 12</div><div class="superlative-score-row"><div class="superlative-main"><strong>Baby Shark</strong><span>Jonathan Davis</span></div><b>254</b></div><div class="superlative-score-row secondary"><div class="superlative-main"><strong>Team Walker</strong><span>Kameron Walker</span></div><b>117.15</b></div></article>
      </div>
    </section>
  </section>`;

  const renderSeason=(year)=>{
    const d=seasons[year];

    if(year===2025) return `<section class="history-season-panel active history-2025-panel" data-season="2025">
      <div class="history-season-heading"><span>SEASON</span><strong>6</strong></div>
      <div class="history-season-rule"></div>

      <section class="season-foundation">
        <div class="season-foundation-kicker">THE LEAGUE ENTERS A NEW ERA</div>
        <h3>Same Brothers. New Season.</h3>
        <p>2025 marked the first year in Alpha Psi Fake Football League history that we rolled over the exact same group of brothers from one season to the next. No one was added and no one was lost. After years of turnover and building the league piece by piece, having the same group return together was a major milestone. With the foundation finally settled, we are more excited than ever about the future of the league and what this group can continue to build together.</p>
    <div class="history-2025-photo-row">
      <section class="history-photo-feature champion-photo-feature">
        <div class="history-photo-feature-title">2025 CHAMPION</div>
        <figure>
          <a href="2025-champion-kameron-walker.jpeg" target="_blank" rel="noopener">
            <img src="2025-champion-kameron-walker.jpeg" alt="2025 Champion Kameron Walker">
          </a>
          <figcaption>2025 Champion Kameron Walker</figcaption>
        </figure>
      </section>

      <section class="history-photo-feature recap-photo-feature">
        <div class="history-photo-feature-title">2025 RECAP</div>
        <figure>
          <a href="2025-recap-magazine.jpeg" target="_blank" rel="noopener">
            <img src="2025-recap-magazine.jpeg" alt="2025 Recap Magazine">
          </a>
          <figcaption><a href="https://www.canva.com/design/DAG8kAhyKpE/ndo47mytn-qa9oJJB3TlqQ/view?utm_content=DAG8kAhyKpE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h46c1636b26#25" target="_blank" rel="noopener">Recap Magazine</a></figcaption>
        </figure>
      </section>
    </div>

      <section class="history-photo-feature fantasy-loser-feature history-photo-placeholder">
        <div class="history-photo-feature-title">2025 FANTASY LOSER</div>
        <div class="history-photo-placeholder-inner">
          <div class="placeholder-icon">?</div>
          <strong>PHOTO COMING SOON</strong>
          <span>2025 Fantasy Loser</span>
        </div>
      </section>

      </section>

      ${renderPodium([
        {cls:"second",medal:"2ND",team:"Big Maye Energy",manager:"Andrew Blum",label:"2ND PLACE"},
        {cls:"first",medal:"1ST",team:"njigbas in paris",manager:"Kameron Walker",label:"2025 CHAMPION"},
        {cls:"third",medal:"3RD",team:"Another one bites the dust",manager:"Alexander Peachey",label:"3RD PLACE"}
      ])}

      <section class="season-moves">
        <div class="moves-grid">
          <div class="moves-box joined-box">
            <div class="season-section-title">BROTHERS GAINED</div>
            <div class="move-list"><div class="archive-empty">No brothers added in 2025.</div></div>
          </div>
          <div class="moves-box lost-box">
            <div class="season-section-title">BROTHERS LOST</div>
            <div class="move-list"><div class="archive-empty">No brothers lost in 2025.</div></div>
          </div>
        </div>
      </section>

      <section class="season-superlatives">
        <div class="season-section-title">SUPERLATIVES</div>
        <article class="superlative-ices"><h4>Total Ices</h4><div class="superlative-main"><strong>2025 Season</strong><span>League Total</span></div><b>53</b></article>
        <div class="superlative-grid">
          <article>
            <h4>Most Wins</h4>
            <div class="superlative-main"><strong>njigbas in paris</strong><span>Kameron Walker</span></div>
            <b>10</b>
          </article>

          <article class="superlative-wide">
            <h4>Longest Win Streak</h4>
            <div class="superlative-stack">
              <div class="superlative-row"><div class="superlative-main"><strong>Half a Chicken Sandwich</strong><span>Jonathan Davis</span></div><b>6</b></div>
              <div class="superlative-row"><div class="superlative-main"><strong>Schedule Merchants</strong><span>Victor Barcenas</span></div><b>6</b></div>
            </div>
          </article>

          <article>
            <h4>Longest Losing Streak</h4>
            <div class="superlative-main"><strong>Pillsbury Throwboy</strong><span>Justin Cooper</span></div>
            <b>8</b>
          </article>

          <article class="superlative-blowout">
            <h4>Biggest Blowout</h4>
            <div class="superlative-meta">2025, Week 14</div>
            <div class="superlative-score-row secondary"><div class="superlative-main"><strong>1-01 for nothing</strong><span>Mckinzie Arrington</span></div><b>85.6</b></div>
            <div class="superlative-score-row"><div class="superlative-main"><strong>Big Maye Energy</strong><span>Andrew Blum</span></div><b>196.45</b></div>
          </article>
        </div>
      </section>

      <section class="season-overall-stats">
        <div class="season-section-title">OVERALL LEAGUE STATISTICS</div>
        <div class="table-wrap overall-stats-wrap">
          <table class="data-table overall-stats-table">
            <thead>
              <tr>
                <th>Member</th>
                <th>Avg Rank</th>
                <th>All-Time Points</th>
                <th>Worst Finish</th>
                <th>Avg Score</th>
                <th>Best Score</th>
                <th>Worst Score</th>
                <th>Total Points</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Quinton</td><td>4.6</td><td>1</td><td>11</td><td>134.1</td><td>178.8</td><td>90.4</td><td>1,876.85</td></tr>
              <tr><td>Mac</td><td>7.6</td><td>1</td><td>12</td><td>115.5</td><td>163.0</td><td>78.3</td><td>1,616.50</td></tr>
              <tr><td>Bailey</td><td>6.0</td><td>1</td><td>11</td><td>127.5</td><td>159.0</td><td>89.6</td><td>1,784.35</td></tr>
              <tr><td>Drayton</td><td>7.1</td><td>3</td><td>11</td><td>119.0</td><td>161.5</td><td>64.95</td><td>1,665.40</td></tr>
              <tr><td>Justin</td><td>9.2</td><td>5</td><td>12</td><td>105.2</td><td>145.6</td><td>77.0</td><td>1,472.90</td></tr>
              <tr><td>Davis</td><td>6.9</td><td>1</td><td>12</td><td>125.2</td><td>158.1</td><td>99.95</td><td>1,752.25</td></tr>
              <tr><td>Braxton</td><td>7.9</td><td>3</td><td>12</td><td>115.9</td><td>154.1</td><td>82.9</td><td>1,622.00</td></tr>
              <tr><td>Grant</td><td>8.5</td><td>2</td><td>12</td><td>112.8</td><td>150.1</td><td>64.05</td><td>1,578.80</td></tr>
              <tr><td>Kameron</td><td>4.1</td><td>1</td><td>12</td><td>139.9</td><td>169.45</td><td>83.15</td><td>1,957.90</td></tr>
              <tr><td>Peachey</td><td>6.0</td><td>1</td><td>10</td><td>127.1</td><td>164.5</td><td>96.2</td><td>1,779.65</td></tr>
              <tr><td>Blum</td><td>4.1</td><td>1</td><td>7</td><td>142.1</td><td>196.45</td><td>114.2</td><td>1,989.75</td></tr>
              <tr><td>Victor</td><td>6.0</td><td>2</td><td>12</td><td>122.3</td><td>160.6</td><td>74.65</td><td>1,711.95</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div class="history-punishments league-archive">
        <h3>League Archive</h3>
        <div class="archive-list">${renderArchive(d)}</div>
      </div>
    </section>`;

    return `<section class="history-season-panel" data-season="${year}">
      <div class="history-season-heading"><span>SEASON</span><strong>${year}</strong></div>
      <div class="history-season-rule"></div>
      <div class="league-timeline">
        <div class="timeline-title">LEAGUE TIMELINE</div>
        <div class="timeline-list">
          ${year==="2024"?`<article><div class="timeline-year">2024</div><div><strong>Quinton Roof</strong><span>Wins the 2024 championship.</span></div></article>`:""}
        </div>
      </div>
      <div class="history-punishments league-archive">
        <h3>League Archive</h3>
        <div class="archive-list">${renderArchive(d)}</div>
      </div>
    </section>`;
  };

  return `<h2>League History</h2>
    <p class="intro">The Alpha Psi Fake Football League has evolved over the years. This is where we preserve the league’s history and original identity.</p>
    <div class="history-subsection history-subsection-seasons active" data-history-section-panel="seasons">
    <div class="history-season-tabs" role="tablist" aria-label="League History seasons">
      ${[2025,2024,2023,2022,2021,2020].map((y,i)=>`<button class="history-season-tab${i===0?" active":""}" type="button" role="tab" aria-selected="${i===0}" data-season="${y}">${y}</button>`).join("")}
    </div>
    <div class="history-season-panels">
      ${renderSeason(2025)}
      ${render2024()}
      ${render2023()}
      ${render2022()}
      ${render2021()}
      ${render2020()}
    </div>
    </div>
    <div class="history-subsection" data-history-section-panel="allpsi" hidden>
      ${allPsiPage()}
    </div>
    <div class="history-subsection" data-history-section-panel="punishments" hidden>
      ${punishments().replace("<h2>Punishments</h2>","<h3>League Punishments</h3>")}
    </div>
    <script>
      (function(){
        const tabs=document.querySelectorAll('.history-season-tab');
        const panels=document.querySelectorAll('.history-season-panel');
        tabs.forEach(tab=>{
          tab.addEventListener('click',()=>{
            const season=tab.dataset.season;
            tabs.forEach(t=>{
              const active=t===tab;
              t.classList.toggle('active',active);
              t.setAttribute('aria-selected',active?'true':'false');
            });
            panels.forEach(panel=>panel.classList.toggle('active',panel.dataset.season===season));
          });
        });
      })();
    </script>`;
}

function allPsiPage(){
  const renderSeason=(y)=>{
    const d=allPsi[y];
    const positions=[...new Set([...d.main.map(x=>x[0]),...d.hm.map(x=>x[0])])];

    return `<section class="allpsi-season-panel${y===2025?" active":""}" data-season="${y}">
      <div class="allpsi-season-heading">
        <span>SEASON</span>
        <strong>${y}</strong>
      </div>
      <div class="allpsi-season-rule"></div>
      <div class="allpsi-positions">
        ${positions.map(pos=>{
          const main=d.main.find(x=>x[0].toLowerCase()===pos.toLowerCase());
          const mentions=d.hm.filter(x=>x[0].toLowerCase()===pos.toLowerCase());
          return `<article class="allpsi-position-card">
            <div class="allpsi-position-name">${pos}</div>
            <div class="allpsi-position-rule"></div>
            ${main?`<div class="allpsi-winner">
              <div class="allpsi-winner-name">${memberFullNames[main[1]]||main[1]}</div>
              <div class="allpsi-winner-detail">${main[2]}</div>
            </div>`:""}
            ${mentions.length?`<div class="allpsi-honorable-title">HONORABLE MENTION${mentions.length>1?"S":""}</div>
            <div class="allpsi-honorable-list">${mentions.map(x=>`<div class="allpsi-honorable">
              <div class="allpsi-honorable-name">${memberFullNames[x[1]]||x[1]}</div>
              <div class="allpsi-honorable-detail">${x[2]}</div>
            </div>`).join("")}</div>`:""}
          </article>`;
        }).join("")}
      </div>
    </section>`;
  };

  return `<h2>Papa’s All-Psi Team</h2>
    <img src="papas-all-psi-photo.jpeg" alt="Brother Robert Cowsert" class="allpsi-photo">
    <div class="dedication">In memory of Brother Robert Cowsert.</div>
    <p class="allpsi-intro">An annual selection honoring the league’s most outstanding fantasy football performances.</p>

    <div class="allpsi-season-tabs" role="tablist" aria-label="Papa's All-Psi seasons">
      ${[2025,2024,2023].map((y,i)=>`<button class="allpsi-season-tab${i===0?" active":""}" type="button" role="tab" aria-selected="${i===0}" data-season="${y}">${y}</button>`).join("")}
    </div>

    <div class="allpsi-season-panels">
      ${renderSeason(2025)}
      ${renderSeason(2024)}
      ${renderSeason(2023)}
    </div>

    <script>
      (function(){
        const tabs=document.querySelectorAll('.allpsi-season-tab');
        const panels=document.querySelectorAll('.allpsi-season-panel');
        tabs.forEach(tab=>{
          tab.addEventListener('click',()=>{
            const season=tab.dataset.season;
            tabs.forEach(t=>{
              const active=t===tab;
              t.classList.toggle('active',active);
              t.setAttribute('aria-selected',active?'true':'false');
            });
            panels.forEach(panel=>{
              panel.classList.toggle('active',panel.dataset.season===season);
            });
          });
        });
      })();
    </script>`;
}
const memberFullNames = {"Quinton": "Quinton Roof", "Bailey": "Bailey Coble", "Davis": "Jonathan Davis", "Blum": "Andrew Blum", "Peachey": "Alexander Peachey", "Justin": "Justin Cooper", "Grant H.": "Grant Harris", "Kameron": "Kameron Walker", "Braxton": "Braxton Ivey", "Victor B.": "Victor Barcenas", "Mac": "Chase Arrington", "Drayton": "Drayton Paxton", "Blake": "Blake Jackson", "Grayson": "Grayson Maxfield", "Corey": "Corey Steele", "Marmo": "Tyler Marmo", "Ty": "Ty Katz", "Grant A.": "Grant Alexander", "Cal": "Cal McMeekin"};

function trophyCase(name){
  const trophies={
    "Quinton":["2024 Championship"],
    "Bailey":["2021 Championship"],
    "Davis":["2022 Championship"],
    "Blum":[],
    "Peachey":[],
    "Justin":[],
    "Grant H.":[],
    "Kameron":["2025 Championship"],
    "Braxton":[],
    "Victor B.":["2023 Championship"],
    "Mac":[],
    "Drayton":[],
    "Blake":[],
    "Grayson":["2020 Championship"],
    "Corey":[],
    "Marmo":[],
    "Ty":[],
    "Grant A.":[],
    "Cal":[]
  };
  const items=trophies[name]||[];
  const awardMarkup=items.length
    ? items.map(x=>{
        const championship=/championship/i.test(x);
        const yearMatch=x.match(/(?:19|20)\d{2}|[’'](\d{2})/);
        const year=yearMatch ? (yearMatch[0].length===2 ? "20"+yearMatch[0].replace(/[’']/,"") : yearMatch[0]) : "";
        const cleanAward=x
          .replace(/\s*\((?:[’'][0-9]{2}(?:\s*,\s*[’'][0-9]{2})*)\)\s*/g," ")
          .replace(/^(?:19|20)\d{2}\s+/,"")
          .trim();
        return `<div class="trophy-item${championship?" trophy-championship":""}">
          <span class="trophy-medallion" aria-hidden="true">${championship?'<img class="championship-trophy-art" src="championship-trophy.png" alt="" aria-hidden="true">':'<span class="trophy-medallion-cup">🏆</span>'}</span>
          <span class="trophy-award-copy">${year?`<span class="trophy-year-plate">${year}</span>`:""}<span class="trophy-award-name">${championship?"CHAMPIONSHIP":cleanAward}</span></span>
        </div>`;
      }).join("")
    : `<div class="trophy-empty">Empty... for now</div>`;
  return `<div class="trophy-case-wrap"><div class="trophy-case-heading">TROPHY CASE</div><div class="trophy-case"><div class="trophy-top-lights" aria-hidden="true"></div><div class="trophy-items">${awardMarkup}</div></div></div>`;
}

function careerSnapshot(name){
  const snapshots={
    "Quinton": ["126.9", "2", "’24", "4-1"],
    "Bailey": ["134.9", "5", "’21", "2-4"],
    "Davis": ["136.9", "4", "’20, ’22", "4-2"],
    "Blum": ["129.5", "4", "’22, ’25", "3-3"],
    "Peachey": ["121.6", "3", "—", "3-3"],
    "Justin": ["114.5", "1", "—", "2-1"],
    "Grant H.": ["109.6", "0", "—", "0-0"],
    "Kameron": ["128.4", "3", "’25", "2-2"],
    "Braxton": ["123.7", "2", "—", "1-2"],
    "Victor B.": ["126.5", "3", "’23", "2-2"],
    "Mac": ["122.8", "2", "—", "0-2"],
    "Drayton": ["115.6", "1", "—", "0-1"]
  };
  const s=snapshots[name];
  if(!s) return "";
  return `<div class="career-snapshot">
    <div class="career-snapshot-title">CAREER SNAPSHOT</div>
    <div class="career-snapshot-grid">
      <div><strong>${s[0]}</strong><span>CAREER PPG</span></div>
      <div><strong>${s[1]}</strong><span>PLAYOFF APPS</span></div>
      <div><strong>${s[3]}</strong><span>PLAYOFF RECORD</span></div>
    </div>
  </div>`;
}

const memberBios = {"Quinton": "The Commissioner. Quinton set out to create a more perfect union of Alpha Psi brothers having fun playing fantasy football. After the league was created in 2020, he has created what he hopes is a league that can span the years.", "Justin": "The Ice Commissioner. Justin took the league by storm coming in at the same time as Victor in 2023 and appearing in the title game. Although he came up short, he’s looking to make another appearance soon while juggling the duties of being ice commish, finance genius, and great father.", "Blum": "The Doc. Blum has slowed down in the past years but don’t let this fool you, he’s still a silent assassin. Coming off a championship appearance in ‘25 and he’s looking to make huge waves in the future years. No one should be surprised when he continues the push for the Alpha Psi FFL Mount Rushmore.", "Peachey": "The numbers guy. Peachey is not the best speller but he knows his way around the numbers and is always dangerous when in trade negotiations because he knows the hidden stats. Peachey is still looking for a championship appearance but he’s a mainstay in the playoffs as of late.", "Mac": "Doc Jr. Mac is our resident baseball guy and our backup doctor for when Blum goes down. There is a quote floating around about Mac asking when the baseball season starts but don’t let that distract you from his fantasy team. One of the most injury-ridden managers but once the injury bug leaves, his team could be good.", "Bailey": "The favorite host. Bailey is most famous for being the favorite podcast host but less known he won a championship in 2021. Now that might feel like forever ago but he’s one of the most decorated members in the league with several byes and almost perfect playoff appearance record.", "Davis": "The Coach. Davis is our 2022 champion and 2025 state champ. Davis isn’t afraid to spend time thinking about his next trade (or asking for outside help). One of the mainstays in the playoffs, he is always someone who will be near the top of the rankings.", "Victor B.": "The Rookie. Victor came in and won the championship his first year in 2023 and has made the playoffs every year after. A very good fantasy manager that is wise beyond his years despite being one of the youngest in the league. Victor should continue to be near the top half of the league for years to come.", "Kameron": "Regular SZN Beast. Kameron is one of the best drafters in the league and thus has some of the best regular seasons. In 2025, Kam finally put it all together winning the championship on the backs of JSN and friends. The regular season dominance should continue and he’s hoping for the same in the postseason.", "Grant H.": "Judge, Jury, Executioner. Grant is the latest guy to join the league, becoming a member in 2024. While there hasn’t been much success so far, he’s on his way to figuring it out. The league’s lawyer is sure to put together some good cases in future trades with his league mates.", "Braxton": "The Salesman. Braxton knows how to spin a good tale when it comes to trades and usually ends up on the winning side of the deal. Braxton is the longest tenured member that wasn’t a founder but he carries the same respect for what he can do with his fantasy teams.", "Drayton": "The Little. Drayton is the little brother of the commish but that doesn’t seem to help in fantasy. Drayton has been near the bottom of the league but is always the top in one of the nicest members. He will turn it around soon once he stops being the first member to take a QB each draft."};

function memberBio(name){
  const bio = memberBios[name] || "";
  return `<div class="member-bio"><div class="member-bio-title">BIO</div><div class="member-bio-placeholder">${bio || "Add bio here."}</div></div>`;
}

function overallRecordPercentage(record){
  const m=String(record||"").match(/^(\d+)\s*[-–]\s*(\d+)$/);
  if(!m) return "";
  const w=Number(m[1]), l=Number(m[2]), total=w+l;
  return total ? `(${(w/total).toFixed(3)})` : "(0.000)";
}

function overallRecordPercent(record){
  const m=String(record||"").match(/^(\d+)\s*[-–]\s*(\d+)$/);
  if(!m) return record;
  const w=Number(m[1]), l=Number(m[2]), total=w+l;
  const pct=total ? (w/total).toFixed(3) : "0.000";
  return `${record} (${pct})`;
}

function members(){
  const current=[
    ["Quinton","2020–Present",true,"Worse Name (’23) • 2024 Championship • GM of the Year (’24) • CBPOY (’24) • Falcon (’25)","39–43","quinton-member.png"],
    ["Bailey","2020–Present",true,"2021 Championship (1x) • Juggernaut Award (’23) • Marino (’23, tied with Vic) • CBPOY (’22) • GM of the Year (’21) • Best Name (’25)","52–30","bailey-champion.jpeg"],
    ["Davis","2020–Present",true,"2020 Championship (1x) • Falcon Award (’23) • Punching Bag (’23) • GM of the Year (’22) • Juggernaut (’24) • Marino (’24)","50–32","davis-member.png"],
    ["Blum","2020–Present",true,"Marino (’21) • Best Podcast Guest (’24) • Falcon (’24) • Juggernaut (’23, ’25)","45–37","blum-member.png"],
    ["Peachey","2020–Present",true,"Punching Bag (’21)","44–38","peachey-member.png"],
    ["Justin","2023–Present",false,"GM of the Year (’23) • Lame Duck (’25) • Avenger (’25)","18–24","justin-member.png"],
    ["Grant H.","2024–Present",false,"Avenger (’24)","5–23","grant-member-photo.png"],
    ["Kameron","2020–Present",true,"2025 Championship (1x) • Best Name (’23) • CBPOY (’23) • The Falcon Award (’21) • CBPOY (’25) • Marino (’25) • GM of the Year (’25)","47–35","kameron-member.png"],
    ["Braxton","2022–Present",false,"None","29–26","braxton-member.png"],
    ["Victor B.","2023–Present",false,"Rookie of the Year (’23) • Marino (’23, tied with Bailey)","27–15","victor-member-photo.png"],
    ["Mac","2020–Present",true,"Punching Bag (’25) • Worst Name (’25)","43–39","mac-member.png"],
    ["Drayton","2020–Present",true,"Lame Duck (’21, ’23, ’24) • Avenger (’23) • Punching Bag (’24)","28–54","drayton-member.png"]
  ];
  const alumni=[
    ["Blake Jackson","2022–2023","11–16",false,"",""],
    ["Grayson Maxfield","2020","8–5",true,"2020 League Champion","grayson-member.png"],
    ["Corey Steele","2020–2022","13–27",true,"",""],
    ["Tyler Marmo","2021–2022","8–19",false,"",""],
    ["Ty Katz","2020–2021","15–12",true,"",""],
    ["Grant Alexander","2020","3–10",true,"",""],
    ["Cal McMeekin","2021","7–7",false,"",""]
  ];

  const profileHeader=(name,years,record,img)=>`
    <div class="member-profile-header">
      <div class="member-photo-frame">
        ${img?`<img class="member-photo" src="${img}" alt="${memberFullNames[name]||name} member photo">`:`<div class="member-photo member-photo-empty"></div>`}
      </div>
      <div class="member-profile-info">
        <strong>${memberFullNames[name]||name}</strong>
        <div class="member-years">${years}</div>
        <div class="member-overall-label">OVERALL</div>
        <div class="member-record-large">${record} <span class="member-overall-percentage">${overallRecordPercentage(record)}</span></div>
      </div>
    </div>`;

  const card=n=>{
    const [name,years,founder,accolades,record,img]=n;
    return `<article class="member player-profile-card">
      ${profileHeader(name,years,record,img)}
      ${founder?`<div class="founder-badge">FOUNDING MEMBER</div>`:""}
      ${careerSnapshot(name)}
      ${trophyCase(name)}
      <div class="accolades"><div class="accolades-title">ACCOLADES</div><div class="accolades-placeholder">${accoladeBadges(accolades)}</div></div>
      ${memberBio(name)}
    </article>`;
  };

  function alumniRecordPercent(record){
  const m=String(record||"").match(/^(\d+)\s*-\s*(\d+)$/);
  if(!m) return record;
  const w=Number(m[1]), l=Number(m[2]), total=w+l;
  const pct=total ? (w/total).toFixed(3) : "0.000";
  return `${record} (${pct})`;
}

const alumniCard=n=>`<article class="member player-profile-card alumni-profile-card alumni-minimal-card">
    <div class="alumni-minimal-name">${memberFullNames[n[0]]||n[0]}</div>
    <div class="alumni-years">${n[1]}</div>
    ${n[3]?`<div class="founder-badge">FOUNDING MEMBER</div>`:""}
    <div class="alumni-overall-label">OVERALL</div>
    <div class="alumni-record">${alumniRecordPercent(n[2])}</div>
    ${n[0]==="Grayson"?trophyCase(n[0]):""}
  </article>`;

  return `<h2>Members</h2>
  <h3>Current Members</h3>
  <div class="grid member-grid">${current.map(card).join("")}</div>
  <h3>Alumni</h3>
  <div class="grid member-grid">${alumni.map(alumniCard).join("")}</div>`;
}

function stats(){return `<h2>Stats</h2><p class="intro">This section is ready for the ESPN league data you provide. We can expand it with team, player, weekly, and season statistics.</p><div class="grid"><div class="card"><strong>ESPN Data</strong><p>Roster and scoring data can be added here.</p></div><div class="card"><strong>Season Stats</strong><p>Season-by-season totals and averages can live here.</p></div><div class="card"><strong>Player Stats</strong><p>Individual player records can be added here.</p></div></div>`}
function teams(){return `<h2>Teams</h2><p class="intro">Team pages are ready to be added as we bring over the league's ESPN history.</p><div class="grid">${champions.map(c=>`<div class="card"><strong>${c[2]}</strong><p>${c[0]} champion — ${c[1]} — ${c[3]}</p></div>`).join("")}</div>`}
function schedule(){return `<h2>Schedule</h2><p class="intro">Schedule and matchup history will be added from your ESPN data.</p>`}
function recordsPage(){
  const categories={
    all: records,
    "single-game": records.filter(r=>/score|blowout|loss|game/i.test(r[0])),
    "single-season": records.filter(r=>/season|average|PA|moves|POTWs|ices/i.test(r[0])),
    streaks: records.filter(r=>/streak/i.test(r[0]))
  };
  const renderRecords=(key)=>{
    const list=categories[key]||categories.all;
    return list.map(r=>`<article class="record-card"><div class="record-card-title">${r[0]}</div><div class="record-card-value">${r[1]}</div><div class="record-card-detail">${r[2]}</div>${recordHover(r[2])}</article>`).join("");
  };
  return `<h2>League Records</h2>
  <p class="intro">The all-time Alpha Psi record book. The leader board uses records already documented in the league archive.</p>
  <div class="record-feature record-feature-200">
    <div class="record-feature-top">
      <div>
        <div class="record-feature-eyebrow">THE ELITE SCORING SOCIETY</div>
        <div class="record-feature-title">200 POINT CLUB</div>
        <div class="record-feature-sub">The league's rarest single-game scoring milestone. Only three performances have broken 200.</div>
      </div>
      <div class="record-feature-badge"><span>200+</span><small>CLUB</small></div>
    </div>
    <div class="two-hundred-grid">${twoHundredClub.map((r,i)=>`<div class="record-holder record-holder-${i+1}">
      <div class="record-rank">${i===0?"RECORD HOLDER":i===1?"2ND HIGHEST":"200+ CLUB"}</div>
      <div class="record-value">${r[0]}</div>
      <div class="record-detail">${r[1]}</div>
      <div class="record-holder-rule"></div>
      ${recordHover(r[1])}
    </div>`).join("")}</div>
  </div>
  <div class="record-filter-bar" role="tablist" aria-label="Record categories">
    <button class="record-filter active" type="button" data-record-filter="all">ALL</button>
    <button class="record-filter" type="button" data-record-filter="single-game">SINGLE GAME</button>
    <button class="record-filter" type="button" data-record-filter="single-season">SINGLE SEASON</button>
    <button class="record-filter" type="button" data-record-filter="streaks">STREAKS</button>
  </div>
  <div class="records-grid" data-record-grid>${renderRecords("all")}</div>`;
}

function rivalriesPage(){
  return `<h2>Rivalries</h2>
    <p class="intro">The league's biggest head-to-head rivalries, matchups, and historical grudges.</p>
    <div class="grid">
      <div class="card"><strong>Rivalries</strong><p>Head-to-head rivalry records and notable matchups can be added here as the league archive is documented.</p></div>
      <div class="card"><strong>Signature Matchups</strong><p>Track the matchups that have defined the league's history.</p></div>
    </div>`;
}
function careerRecordsPage(){
  const career=[
    ["Career Points","Career scoring totals by GM."],
    ["Career Point Average","Career PPG leaders across documented seasons."],
    ["Career Wins","All-time wins by GM."],
    ["Career Playoff Appearances","Total playoff appearances across league history."],
    ["Career Championships","Championship wins across league history."]
  ];
  return `<h2>Career Records</h2>
    <p class="intro">The all-time individual record book, built around career-long achievements.</p>
    <div class="records-grid">${career.map(r=>`<article class="record-card"><div class="record-card-title">${r[0]}</div><div class="record-card-detail">${r[1]}</div></article>`).join("")}</div>`;
}
function playoffsPage(){return `<h2>Playoff Records</h2><div class="playoff-definitions"><div><strong>Championship Appearances</strong><span>Years and championship record</span></div><div><strong>First Round Byes</strong><span>Years receiving a bye</span></div><div><strong>Playoff Appearances</strong><span>Years making the playoffs</span></div><div><strong>Playoff Record</strong><span>Playoff wins and losses</span></div></div><p class="intro"><strong>Record does not include wins after 1st loss in playoffs.</strong><br>Six-team playoffs started in 2022; no first-round byes before then.</p><div class="table-wrap"><table class="data-table"><thead><tr><th>Member</th><th>Championship Appearances<br><span class="table-subheader">* Parenthesis denotes record in championship game</span></th><th>First Round Byes</th><th>Playoff Appearances</th><th>Playoff Record</th></tr></thead><tbody>${playoff.map(p=>{const rawChamp=p[1].replace(/^Championship Appearance(?:s)?:\s*/,"");const cm=rawChamp.match(/^(.*?);\s*Championship record:\s*(.*)$/i);const champ=cm?`${cm[1]} (${cm[2]})`:rawChamp;const bye=p[2].replace(/^First Round Bye(?:s)?:\s*/,"");const apps=p[3].replace(/^Playoff Appearances:\s*/,"");const rec=p[4].replace(/^Playoff Record:\s*/,"");return `<tr><td><strong>${p[0]}</strong></td><td>${champ}</td><td>${bye}</td><td>${apps}</td><td>${rec}</td></tr>`}).join("")}</tbody></table></div>`}
function rulesPage(){
  const activeMap={2025:[0,1,2,3],2024:[1,5],2023:[1],2022:[0,1,3,5,6,7,8,9],2021:[0,2,3]};

  const categories=[
    ["League & Schedule",/playoff|schedule|division|game|tie|win|loss|week 15|week 16|week 17/i],
    ["Draft & Waivers",/draft|waiver|FAAB|auto draf|March Madness|kicker/i],
    ["Trades & Transactions",/trade|FA\b|first-round pick/i],
    ["Scoring & Roster",/flex|bench|QB|points|yards|TD|defense|roster/i],
    ["Punishments & Ice",/punishment|ice|wheel|waiver wire privileges/i],
    ["Payouts & Brackets",/payout|cash|\$|consolation|loser.*bracket/i]
  ];

  const categorize=()=>{
    const groups=categories.map(([title])=>[title,[]]);
    const other=["Other League Standards",[]];
    currentRules.forEach((rule,i)=>{
      let placed=false;
      for(let n=0;n<categories.length;n++){
        if(categories[n][1].test(rule)){ groups[n][1].push([i,rule]); placed=true; break; }
      }
      if(!placed) other[1].push([i,rule]);
    });
    if(other[1].length) groups.push(other);
    return groups.filter(g=>g[1].length);
  };

  const currentMarkup=categorize().map(([title,items])=>`
    <section class="rulebook-category">
      <div class="rulebook-category-heading"><span></span><h3>${title}</h3></div>
      <div class="rulebook-category-rules">
        ${items.map(([i,x])=>`<article class="rulebook-rule">
          <span class="rulebook-number">${String(i+1).padStart(2,"0")}</span>
          <p>${x}</p>
        </article>`).join("")}
      </div>
    </section>`).join("");

  const renderSeason=(y)=>{
    const items=rules[y]||[];
    return `<section class="rules-season-panel" data-season="${y}">
      <div class="season-amendment-head">
        <div><span>RULE AMENDMENTS</span><strong>${y}</strong></div>
        <em>${items.length} ${items.length===1?"amendment":"amendments"}</em>
      </div>
      <div class="season-amendment-line"></div>
      ${y===2020
        ? `<p class="rule-origin">Founding season. No recorded rule amendments.</p>`
        : `<div class="season-amendments">${items.map((x,i)=>`<article class="season-amendment ${((activeMap[y]||[]).includes(i))?"still-active":""}">
            <span class="rulebook-number">${String(i+1).padStart(2,"0")}</span>
            <div><p>${x}</p>${((activeMap[y]||[]).includes(i))?'<span class="active-label">CURRENT STANDARD</span>':""}</div>
          </article>`).join("")}</div>`
      }
    </section>`;
  };

  return `<div class="rules-page-new">
    <header class="rules-book-header">
      <div class="rules-book-kicker">ALPHA PSI FFL</div>
      <h2>RULES</h2>
      <p>OFFICIAL LEAGUE CONSTITUTION</p>
    </header>



    <section class="current-rulebook">
      <div class="rulebook-section-heading">
        <span class="section-kicker">ARTICLE I</span>
        <h3>Current League Standards</h3>
        <p>The rules currently governing the Alpha Psi FFL.</p>
      </div>
      <div class="rulebook-categories">${currentMarkup}</div>
    </section>

    
    <nav class="rulebook-years" aria-label="Rule amendment seasons">
      <span class="years-label">SEASONS</span>
      <div class="rulebook-year-tabs" role="tablist">
        ${[2025,2024,2023,2022,2021,2020].map((y,i)=>`<button class="rules-season-tab${i===0?" active":""}" type="button" role="tab" aria-selected="${i===0}" data-season="${y}">${y}</button>`).join("")}
      </div>
    </nav>

    <section class="season-amendment-book">
      <div class="rulebook-section-heading">
        <span class="section-kicker">ARTICLE II · AMENDMENTS</span>
        <h3>History of the Constitution</h3>
        <p>Select a year above to see what changed that season.</p>
      </div>
      <div class="rules-season-panels">
        ${[2025,2024,2023,2022,2021,2020].map(renderSeason).join("")}
      </div>
    </section>
  </div>`;
}

function punishments(){
  const rows=[
    ["2020–2021","No punishments (boo)","—",null],
    ["2022","24 hour Waffle House challenge","Drayton","https://youtu.be/3CWUCo5KeR8?si=_pKSGmxTgEuX6rXW"],
    ["2023","Sexy Calendar","Mac","sexy-calendar-punishment.png"],
    ["2024","Personal Apology letter","Drayton","2024-punishment-apology.jpeg"],
    ["2025","Beer Mile","Grant",null]
  ];
  return `<h2>Punishments</h2>
    <div class="table-wrap">
      <table class="data-table">
        <thead><tr><th>Year</th><th>Punishment</th><th>Member</th></tr></thead>
        <tbody>
          ${rows.map(r=>`<tr>
            <td>${r[0]}</td>
            <td>${r[3] ? `<a href="${r[3]}" target="_blank" rel="noopener">${r[1]}</a>` : r[1]}</td>
            <td>${r[2]}</td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>`;
}


function espnBets(){
  const bets=[
    ["Kameron","+350","22.2%","FAVORITE","The reigning champion has the strongest case: a title already on the résumé, a 47–35 overall record, and GM of the Year + CBPOY hardware from 2025."],
    ["Bailey","+450","18.2%","CONTENDER","The most proven long-term contender. A 52–30 record, a championship, and years of elite playoff-level consistency make Bailey the safest challenger."],
    ["Davis","+650","13.3%","CONTENDER","A former champion with a 50–32 record and a deep résumé of GM and individual awards. The case is experience and the ability to put together another complete season."],
    ["Blum","+800","11.1%","","A 45–37 record and multiple recent accolades make Blum a legitimate threat. If the roster construction hits, this is a live contender at a longer price."],
    ["Quinton","+900","10.0%","","A 39–43 record hides the upside: Quinton already has a championship and a 2024 GM of the Year award. The path is there if he can turn consistency into a full-season run."],
    ["Victor B.","+1000","9.1%","","The young contender has a 27–15 record since entering the league and has already collected Rookie of the Year and Marino recognition. Limited sample, high ceiling."],
    ["Drayton","+1200","7.7%","","The 28–54 record keeps the price long, but Drayton has plenty of league experience and has shown enough flashes to make a breakout season possible."],
    ["Mac","+1400","6.7%","","A veteran 43–39 record gives Mac a much stronger floor than the odds suggest. The question is whether the next season produces the first real championship push."],
    ["Braxton","+1600","5.9%","","A 29–26 record is quietly competitive. Braxton has fewer years of league history than the favorites, which makes the upside harder to price."],
    ["Peachey","+1800","5.3%","","A 44–38 record is the selling point. The championship résumé is missing, but the long-term winning record makes Peachey a reasonable dark horse."],
    ["Justin","+2000","4.8%","","Justin is still building the résumé, but the 18–24 record and GM of the Year award show there is championship-level upside in the right season."],
    ["Grant H.","+2500","3.8%","","The longest shot on the board. A 5–23 record makes the case difficult, but a smaller sample also leaves room for the biggest turnaround."]
  ];

  const key="apffl-2026-champion-vote";
  let selected=null;
  try { selected=localStorage.getItem(key); } catch(e) {}

  const votes={};
  bets.forEach(b=>votes[b[0]]=0);
  try {
    const stored=JSON.parse(localStorage.getItem("apffl-2026-votes")||"{}");
    if(stored && typeof stored==="object"){
      bets.forEach(b=>{ if(Number.isFinite(stored[b[0]])) votes[b[0]]=Math.max(0,stored[b[0]]); });
    }
  } catch(e) {}

  const totalVotes=Object.values(votes).reduce((a,b)=>a+b,0);
  const renderPoll=()=>bets.map(b=>{
    const pct=totalVotes ? Math.round((votes[b[0]]/totalVotes)*100) : 0;
    return `<div class="espn-pick-row">
      <div class="espn-pick-name"><strong>${b[0]}</strong><span>${pct}%</span></div>
      <div class="espn-pick-bar"><i style="width:${pct}%"></i></div>
    </div>`;
  }).join("");

  return `<section class="espn-bets-page">
    <div class="espn-bets-kicker">ESPNBETS</div>
    <h2>2026 APFFL CHAMPIONSHIP FUTURES</h2>
    <div class="espn-market-meta">
      <span><b>2026 APFFL CHAMPION</b></span><span>12 GMs</span><span>FUTURES MARKET</span><span>PRESEASON BOARD</span>
    </div>
    <p class="espn-bets-intro">Opening championship market for the 2026 Alpha Psi Fake Football League. Odds are league-style projections, not live sportsbook lines.</p>
    <div class="bets-table-wrap">
      <table class="bets-table">
        <thead><tr><th>GM</th><th>ODDS</th><th>IMPLIED</th><th>THE CASE</th><th>PICK</th></tr></thead>
        <tbody>${bets.map((b,i)=>`<tr class="${b[3]?'market-top':''}">
          <td class="bets-gm-cell"><span class="bets-rank">${String(i+1).padStart(2,"0")}</span><strong>${b[0]}</strong>${b[3]?`<span class="market-label">${b[3]}</span>`:""}</td>
          <td class="bets-odds">${b[1]}</td><td class="bets-implied">${b[2]}</td><td>${b[4]}</td>
          <td class="bets-pick-cell"><button type="button" class="espn-vote-btn ${selected===b[0]?'selected':''}" data-vote="${b[0]}">${selected===b[0]?'YOUR PICK':'PICK'}</button></td>
        </tr>`).join("")}</tbody>
      </table>
    </div>
    <section class="espn-poll">
      <div class="espn-poll-head"><div><span>FAN PREDICTION</span><h3>WHO DOES THE LEAGUE THINK WILL WIN?</h3></div><b>${totalVotes} VOTE${totalVotes===1?'':'S'}</b></div>
      <div class="espn-poll-list">${renderPoll()}</div>
      <div class="espn-poll-note">${selected?`YOUR PICK: <strong>${selected}</strong> · ONE VOTE PER PERSON`:"Pick one GM above to cast your vote."}</div>
    </section>
    <div class="espn-board-footer"><strong>THE BOARD IS OPEN.</strong><span>Who are you putting your pick on?</span></div>
  </section>`;
}


function chatPage(){
  return `<section class="chat-page">
    <div class="chat-header">
      <div>
        <div class="chat-kicker">ALPHA PSI</div>
        <h2>CHAT</h2>
        <p>Talk trash. Defend your draft. Settle the score.</p>
      </div>
      <div class="chat-status"><span></span> LIVE</div>
    </div>

    <section class="chat-hof">
      <div class="chat-hof-header">
        <div>
          <div class="chat-hof-kicker">ARCHIVED LEAGUE MOMENTS</div>
          <h3>GROUP CHAT HALL OF FAME</h3>
          <p>The conversations that were too good to disappear.</p>
        </div>
        <div class="chat-hof-mark">HOF</div>
      </div>

      <div class="chat-hof-archive">
        <article class="chat-conversation">
          <div class="chat-conversation-meta">GRANT HARRIS · VICTOR BARKENASS</div>
          <div class="chat-message"><div class="chat-message-top"><strong>Grant Harris</strong></div><div>Well boys, I passed the MPRE and all my classes this semester. This was a rough rough semester for me, I took 3 classes that aren’t supposed to be taken together and should be spread out across 3L year, but my dumbass took them all together unknowingly. I only have one required class left to get my JD. My team sucked in fantasy, probably gonna be last, but just know that around Oct. and Nov. I had to start putting it on the back burner and not caring as much. My team has sucked both years, but this year it’s really really bad and I’m sorry that I haven’t been as engaged as I would like to be 😂</div></div>
          <div class="chat-message chat-reply"><div class="chat-message-top"><strong>Victor Barkenass</strong></div><div>Congrats bro. Really proud of you, but law school is NOT why your team was buns brother 😭</div></div>
        </article>

        <article class="chat-conversation">
          <div class="chat-conversation-meta">VICTOR BARKENASS · JUSTIN COOPER</div>
          <div class="chat-message"><div class="chat-message-top"><strong>Victor Barkenass</strong></div><div>Ggs Justin</div></div>
          <div class="chat-message chat-reply"><div class="chat-message-top"><strong>Justin Cooper</strong></div><div>Gonna start giving out ices for everytime you say “GGs” on Thursdays</div></div>
        </article>

        <article class="chat-conversation chat-single">
          <div class="chat-conversation-meta">JUSTIN COOPER</div>
          <div class="chat-message"><div class="chat-message-top"><strong>Justin Cooper</strong></div><div>No... I’m spiraling boys. The walls are talking to me</div></div>
        </article>

        <article class="chat-conversation chat-single">
          <div class="chat-conversation-meta">KAMERON WALKER</div>
          <div class="chat-message"><div class="chat-message-top"><strong>Kameron Walker</strong></div><div>It’s Tuesday bro. Just enjoy the week ahead 🙏</div></div>
        </article>

        <article class="chat-conversation chat-single">
          <div class="chat-conversation-meta">KAMERON WALKER</div>
          <div class="chat-message"><div class="chat-message-top"><strong>Kameron Walker</strong></div><div>If Q is playing I will not be</div></div>
        </article>

        <article class="chat-conversation">
          <div class="chat-conversation-meta">JUSTIN COOPER · BAILEY COBLE</div>
          <div class="chat-message"><div class="chat-message-top"><strong>Justin Cooper</strong></div><div>Braxton and Grant need to more worried about Xs and Os down in that losers bracket</div></div>
          <div class="chat-message chat-reply"><div class="chat-message-top"><strong>Bailey Coble</strong></div><div>Hey peachey it’s not a consolation bracket.</div></div>
        </article>

        <article class="chat-conversation chat-single">
          <div class="chat-conversation-meta">VICTOR BARKENASS</div>
          <div class="chat-message"><div class="chat-message-top"><strong>Victor Barkenass</strong></div><div>Nah I’m fraudulent</div></div>
        </article>
      </div>
    </section>

    <div class="chat-live-box">
      <div class="chat-live-title">LIVE GROUP CHAT</div>
      <div class="chat-panel">
        <div class="chat-messages" id="chat-messages"></div>
        <form class="chat-composer" id="chat-form">
          <input id="chat-name" type="text" maxlength="24" placeholder="Your name" autocomplete="nickname">
          <input id="chat-message" type="text" maxlength="240" placeholder="Talk some trash..." autocomplete="off" required>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  </section>`;
}

const pages = {
  home,
  members,
  history: historyPage,
  records: recordsPage,
  rivalries: rivalriesPage,
  career: careerRecordsPage,
  espnbets: espnBets,
  chat: chatPage,
  rules: rulesPage,
  allpsi: allPsiPage,
  punishments
};

function render(page){
  try{
    if(!pages[page]) page="home";
    content.classList.remove("page-transition");
    void content.offsetWidth;
    content.innerHTML = pages[page]();
    content.classList.toggle("home-view", page==="home");
    content.classList.add("page-transition");
    if(typeof bindChampionLinks==="function") bindChampionLinks();
if(page==="chat") setTimeout(initChat, 20);
    tabs.forEach(t=>t.classList.toggle("active",t.dataset.page===page));
    const nav=document.querySelector(".main-tabs");
    if(nav && window.scrollTo) window.scrollTo({top:nav.offsetTop-60,behavior:"smooth"});
    location.hash=page;
  }catch(err){
    console.error("Alpha Psi page error:",page,err);
    content.innerHTML=`<div class="card"><h2>Page temporarily unavailable</h2><p>Please refresh the page. If the problem continues, the page code needs repair.</p></div>`;
  }
}


function initChat(){
  const messagesEl=document.getElementById("chat-messages");
  const form=document.getElementById("chat-form");
  const nameEl=document.getElementById("chat-name");
  const messageEl=document.getElementById("chat-message");
  if(!messagesEl || !form) return;

  let saved=[];
  try { saved=JSON.parse(localStorage.getItem("apffl-live-chat")||"[]"); } catch(e) {}
  if(!Array.isArray(saved)) saved=[];

  const paint=()=>{
    messagesEl.innerHTML=saved.map(m=>`<div class="chat-message"><div class="chat-message-top"><strong>${escapeChat(m.name)}</strong><time>${escapeChat(m.time)}</time></div><div>${escapeChat(m.text)}</div></div>`).join("");
    messagesEl.scrollTop=messagesEl.scrollHeight;
  };
  paint();

  form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const name=(nameEl.value||"Anonymous").trim().slice(0,24)||"Anonymous";
    const text=(messageEl.value||"").trim().slice(0,240);
    if(!text) return;
    saved.push({name,text,time:new Date().toLocaleTimeString([], {hour:"numeric",minute:"2-digit"})});
    saved=saved.slice(-100);
    try { localStorage.setItem("apffl-live-chat",JSON.stringify(saved)); } catch(e) {}
    nameEl.value=name;
    messageEl.value="";
    paint();
    messageEl.focus();
  });
}

function escapeChat(value){
  return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}


const historyNav = document.querySelector(".history-nav-item");
const historyNavTab = document.querySelector(".history-nav-tab");
const historyNavMenu = document.querySelector(".history-nav-menu");
const recordsNav = document.querySelector(".records-nav-item");
const recordsNavTab = document.querySelector(".records-nav-tab");
const recordsNavMenu = document.querySelector(".records-nav-menu");

function closeHistoryNav(){
  if(historyNavMenu){ historyNavMenu.hidden=true; historyNavMenu.classList.remove("open"); }
  if(historyNavTab) historyNavTab.setAttribute("aria-expanded","false");
}
function closeRecordsNav(){
  if(recordsNavMenu){ recordsNavMenu.hidden=true; recordsNavMenu.classList.remove("open"); }
  if(recordsNavTab) recordsNavTab.setAttribute("aria-expanded","false");
}

if(historyNavTab) historyNavTab.addEventListener("click",(e)=>{
  e.preventDefault(); e.stopPropagation();
  const open=historyNavMenu && !historyNavMenu.hidden;
  closeRecordsNav(); render("history");
  if(historyNavMenu){ historyNavMenu.hidden=open; historyNavMenu.classList.toggle("open",!open); }
  historyNavTab.setAttribute("aria-expanded",!open?"true":"false");
});

if(recordsNavTab) recordsNavTab.addEventListener("click",(e)=>{
  e.preventDefault(); e.stopPropagation();
  const open=recordsNavMenu && !recordsNavMenu.hidden;
  closeHistoryNav(); render("records");
  if(recordsNavMenu){ recordsNavMenu.hidden=open; recordsNavMenu.classList.toggle("open",!open); }
  recordsNavTab.setAttribute("aria-expanded",!open?"true":"false");
});

document.addEventListener("click",(e)=>{
  const h=e.target.closest(".history-nav-option");
  if(h){
    e.preventDefault(); e.stopPropagation();
    const page=h.dataset.historyNavSection;
    closeHistoryNav();
    if(page && pages[page]) render(page);
    return;
  }
  const r=e.target.closest(".records-nav-option");
  if(r){
    e.preventDefault(); e.stopPropagation();
    const page=r.dataset.recordNavSection || "records";
    closeRecordsNav();
    if(page && pages[page]) render(page);
    return;
  }
  if(!e.target.closest(".history-nav-item")) closeHistoryNav();
  if(!e.target.closest(".records-nav-item")) closeRecordsNav();
});

document.addEventListener("click",(e)=>{
  const tab=e.target.closest(".main-tabs .tab:not(.history-nav-tab):not(.records-nav-tab)");
  if(!tab) return;
  const page=tab.dataset.page;
  if(page && pages[page]){
    e.preventDefault(); closeHistoryNav(); closeRecordsNav(); render(page);
  }
});

const initial=location.hash.slice(1);render(pages[initial]?initial:"home");


/* v249 — Rules season tabs */
document.addEventListener("click",(event)=>{
  const tab=event.target.closest(".rules-season-tab");
  if(!tab) return;
  event.preventDefault();
  event.stopPropagation();
  const season=tab.dataset.season;
  const page=document.querySelector(".rules-page-new") || document.querySelector(".rules-page");
  if(!page) return;
  page.querySelectorAll(".rules-season-tab").forEach(x=>{
    x.classList.toggle("active",x===tab);
    x.setAttribute("aria-selected",x===tab?"true":"false");
  });
  page.querySelectorAll(".rules-season-panel").forEach(panel=>{
    panel.style.display=panel.dataset.season===season?"block":"none";
  });
});

/* v250 — ESPNBets manager picker */
document.addEventListener("click",(event)=>{
  const btn=event.target.closest(".espn-vote-btn");
  if(!btn) return;
  event.preventDefault();
  event.stopPropagation();
  const pick=btn.dataset.vote;
  if(!pick) return;
  try {
    let votes={};
    try { votes=JSON.parse(localStorage.getItem("apffl-2026-votes")||"{}")||{}; } catch(e) {}
    const old=localStorage.getItem("apffl-2026-champion-vote");
    if(old && old!==pick && Number(votes[old])>0) votes[old]-=1;
    if(old!==pick) votes[pick]=(Number(votes[pick])||0)+1;
    localStorage.setItem("apffl-2026-votes",JSON.stringify(votes));
    localStorage.setItem("apffl-2026-champion-vote",pick);
  } catch(e) {}

  const page=document.querySelector(".espn-bets-page");
  if(!page) return;
  page.querySelectorAll(".espn-vote-btn").forEach(b=>{
    const isPick=b.dataset.vote===pick;
    b.classList.toggle("selected",isPick);
    b.textContent=isPick?"YOUR PICK":"PICK";
    b.disabled=false;
  });

  let stored={};
  try { stored=JSON.parse(localStorage.getItem("apffl-2026-votes")||"{}")||{}; } catch(e) {}
  const total=Object.values(stored).reduce((sum,n)=>sum+(Number(n)||0),0);
  page.querySelectorAll(".espn-pick-row").forEach(row=>{
    const name=row.querySelector(".espn-pick-name strong")?.textContent;
    const pct=total?Math.round((Number(stored[name])||0)/total*100):0;
    const pctEl=row.querySelector(".espn-pick-name span");
    const bar=row.querySelector(".espn-pick-bar i");
    if(pctEl) pctEl.textContent=pct+"%";
    if(bar) bar.style.width=pct+"%";
  });
  const count=page.querySelector(".espn-poll-head > b");
  if(count) count.textContent=total+" VOTE"+(total===1?"":"S");
  const note=page.querySelector(".espn-poll-note");
  if(note) note.innerHTML='YOUR PICK: <strong>'+pick+'</strong> · CLICK ANOTHER PICK TO CHANGE IT';
});
