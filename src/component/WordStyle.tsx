import type { ReactNode } from "react";
import "../styles/WordStyle.css"

interface WordStyleProp {
  description: string
}

interface DictionaryEntry {
  color? : string,
  image? : string,
}

function WordStyle({description}: WordStyleProp) {
  const dictionary:Record<string, DictionaryEntry> = {
      Burns: {
      color: "orange",
      image: "/images/burn-status-effect-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
     Burn: {
      color: "orange",
      image: "/images/burn-status-effect-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    Heals: {  
      color:"green", 
      image: "/images/heal-status-effect-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    Heal: {  
      color:"green", 
      image: "/images/heal-status-effect-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    "Critical Hits": {
      color: "red",
      image: "/images/crit-status-effect-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    Charge: {
      color: "lightblue",
      image: "/images/gustave-charge-unique-mechanic-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    Charges: {
      color: "lightblue",
      image: "/images/gustave-charge-unique-mechanic-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    Powerful: {
      color: "green",
      image: "/images/powerful-status-effect-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    Recover: {
      color: "green",
      image: "/images/heal-status-effect-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    Mark: {
      color: "dark-red",
      image: "/images/mark-status-effect-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    Ice: {
      color: "iceblue",
    },
    Break: {
      color: "beige",
      image: "/images/break-status-effect-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    Breaks: {
      color: "beige",
      image: "/images/break-status-effect-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    Broken: {
      color: "beige",
      image: "/images/break-status-effect-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    Slow: {
      color: "red",
      image: "/images/slow-status-effect-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    AP: {
      color: "none",
      image: "/images/ap-icon-infobox-expedition-33-wiki-guide-20px.png",
    },
    Physical: {
      color: "grey",
    },
    Defenseless: {
      color: "red",
      image: "/images/defenseless-status-effect-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    Defensive: {
      color: "none",
      image: "/images/defensive-stance-maelle-unique-mechanic-clair-obscur-expedition-33-wiki-guide-36px.png",
    },
    Offensive: {
      color: "none",
      image: "/images/offensive-stance-maelle-unique-mechanic-clair-obscur-expedition-33-wiki-guide-36px.png",
    },
    "Defensive Stance": {
      color: "kingblue",
      image: "/images/defensive-stance-maelle-unique-mechanic-clair-obscur-expedition-33-wiki-guide-36px.png",
    },
    "Offensive Stance": {
      color: "red",
      image: "/images/offensive-stance-maelle-unique-mechanic-clair-obscur-expedition-33-wiki-guide-36px.png",
    },
    Shell: {
      color: "green",
      image: "/images/shell-status-effect-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    "Virtuose Stance": {
      color: "purple",
      image: "/images/virtuose-stance-maelle-unique-mechanic-clair-obscur-expedition-33-wiki-guide-36px.png",
    },
    Stanceless: {
      color: "none",
      image: "/images/stanceless-stance-maelle-unique-mechanic-clair-obscur-expedition-33-wiki-guide-36px.png",
    },
    Void :{
      color: "void"
    },
    Burning: {
      color: "orange",
      image: "/images/burn-status-effect-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    Rush: {
      color: "green",
      image: "/images/rush-status-effect-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    Dark: {
      color: "dark",
    },
    Foretell: {
      color: "brown",
      image: "/images/foretell-icon-sciel-unique-mechanic-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    Powerless: {
      color: "red",
      image: "/images/powerless-status-effect-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    Perfection: {
      color: "none",
      image: "/images/perfection-status-effect-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    Stunned: {
      color: "darkbeige",
      image: "/images/stun-status-effect-clair-obscur-expedition-33-wiki-guide.png",
    },
    Stun: {
      color: "darkbeige",
      image: "/images/stun-status-effect-clair-obscur-expedition-33-wiki-guide.png",
    },
    Shield: {
      color: "none",
      image: "/images/shield-status-effect-clair-obscur-expedition-33-wiki-guide.png",
    },
    Shields: {
      color: "none",
      image: "/images/shield-status-effect-clair-obscur-expedition-33-wiki-guide.png",
    },
    Regen: {
      color: "green",
      image: "/images/regen-status-effect-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    Earth: {
      color: "earthgreen",
    },
    Overcharge: {
      color: "lightyellow",
    },
    Fire: {
      color: "firered",
    },
    Lightning: {
      color: "yellow",
    },
    "Agile Mask": {
      color: "purplemask",
      image: "/images/agile-mask-icon-monoco-unique-expedition-33-wiki-guide-20px.png",
    },
    "Heavy Mask": {
      color: "greenmask",
      image: "/images/heavy-mask-icon-monoco-unique-expedition-33-wiki-guide-20px.png",
    },
    "Caster Mask": {
      color: "bluemask",
      image: "/images/caster-mask-icon-monoco-unique-expedition-33-wiki-guide-20px.png",
    },
    "Balanced Mask": {
      color: "red",
      image: "/images/balanced-mask-icon-monoco-unique-expedition-33-wiki-guide-20px.png",
    },
    "Almighty Mask": {
      color: "lightmask",
      image: "/images/almighty-mask-icon-monoco-unique-expedition-33-wiki-guide-20px.png",
    },
    "Break Damage": {
      color: "beige",
      image: "/images/break-status-effect-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    Twilight: {
      color: "lightpurple",
      image: "/images/twilight-icon-sciel-unique-mechanic-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    "Ice Stain": {
      image: "/images/ice-stain-lune-unique-mechanic-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    "Fire Stain": {
      image: "/images/fire-stain-lune-unique-mechanic-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    "Earth Stain": {
      image: "/images/earth-stain-lune-unique-mechanic-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    "Lightning Stain": {
      image: "/images/lightning-stain-lune-unique-mechanic-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    "Light Stain": {
      color: "none",
      image: "/images/light-stain-lune-unique-mechanic-icon-clair-obscur-expedition-33-wiki-guide-20px.png",
    },
    "C-rank" : {
      image :"/images/c-rank-verso-mechanic-expedition-33-wiki-guide-23px.png"
    },
    "S-rank" : {
      image :"/images/s-rank-verso-mechanic-expedition-33-wiki-guide-23px.png"
    },
    "A-rank" : {
      image :"/images/a-rank-verso-mechanic-expedition-33-wiki-guide-23px.png"
    },
    "D-rank" : {
      image :"/images/d-rank-verso-mechanic-expedition-33-wiki-guide-23px.png"
    },
    "B-rank" : {
      image :"/images/b-rank-verso-mechanic-expedition-33-wiki-guide-23px.png"
    },
    "Status Effects" :{
      color: "lightyellow"
    },
    "Break Bar" :{
      color: "none"
    }
  };

  function normalize(str: string) {
    return str.replace(/[.,!?;:()]/g, "");
  }

  const words = description.split(" ");
  const sortedKeys = Object.keys(dictionary).sort((a, b) => b.length - a.length)
  const output: ReactNode[] = [];

  let i = 0;
  while (i < words.length) {

    let matchKey: string | null = null;
    
    for (const key of sortedKeys) {
      const keyWords = key.split(" ");
      const segment = words.slice(i, i + keyWords.length)
      .map((word) => normalize(word))
      .join(" ");

      if (segment === normalize(key)) {
        matchKey = key;
        break;
      }
    }

    if (matchKey) {

      const keyWordCount = matchKey.split(" ").length;
      const rawSegment = words.slice(i, i + keyWordCount).join(" ");
      const match = rawSegment.match(/^(.+?)([.,!?;:]?)$/);

      const clean = match ? match[1] : rawSegment;
      const punct = match ? match[2] : "";

      output.push(
        <span key={i} className={dictionary[matchKey].color ?? ""}>
          {dictionary[matchKey].color && clean}
          {dictionary[matchKey].image && (
            <img src={dictionary[matchKey].image} alt={matchKey} />
          )}
          {punct + " "}
        </span>
      );

      i += matchKey.split(" ").length;

    } else {

      const raw = words[i];
      const match = raw.match( /^(\D*)(\d+(?:%?)(?:[-–]\d+(?:%?)?)?)(\D*)$/);

      if (match && match[2]) {
        const before = match[1];
        const number = match[2];
        const after = match[3];

        output.push(
          <span key={i}>
            {before}
            <span className="number">{number}</span>
            {after}{" "}
          </span>
        );
      } else {
        output.push(<span key={i}>{raw} </span>);
      }
      i++;
    }
  }
  return <>{output}</>
}

export default WordStyle