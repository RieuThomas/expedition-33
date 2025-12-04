import type { ExpeditionProps } from "../interface/index"

const Expedition : ExpeditionProps = 
	{
		"characterAbout": [
			{
				"name": "Gustave",
				"firstPortrait":"https://expedition33.wiki.fextralife.com/file/Expedition-33/gustave-character-portrait-clair-obscur-expedition-33-wiki-guide-250px.png",
				"secondPortrait":"https://static.wixstatic.com/media/98aef2_bc19f6a72662456597378693df9762d2~mv2.png/v1/fill/w_752,h_775,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gustave.png",
				"description": "Gustave is a resourceful and dedicated Engineer who is chosen to lead the 33rd Expedition. He devotes his final year to defeating the Paintress and to reclaim the future for the youngins of Lumiere. His persistence comes from the choking feeling of the Patinress' constant presence over Lumière and the anxieties of inevitable death. He is the foster father and brother of Maelle. At the end of Act 1 he is slain by Renoir and is no longer a member of the party.",
				"sentence":"For those who come after.",
				"skills": [
					{
						"name": "From Fire",
						"description": "Deals medium single target damage (3 hits) using weapon's element.",
						"description_2": "Heals self by 20% if the target Burns.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/from-fire-gustave-skill-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					},
					{
						"name": "Lumiere Assault",
						"description": "Deals low single target damage (5 hits) using weapon's element.",
						"description_2": "Critical Hits generate 1 Additional Charge.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/lumiere-assault-gustave-skill-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					},
					{
						"name": "Marking Shot",
						"description": "Deals low single target Lightning damage (1 hit). Applies Mark to the target.",
						"costAP": 2,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/marking-shot-gustave-skill-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					},
					{
						"name": "Overcharge",
						"description": "Deals high Lightning damage based on the number of Charges (1 hit).",
						"description_2": "Can Break enemies.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/overcharge-gustave-skill-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					},
					{
						"name": "Powerful",
						"description": "Applies Powerful to 1–3 allies, increasing their damage for 3 turns.",
						"description_2": "Grants 0–2 Charges.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/powerful-gustave-skill-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					},
					{
						"name": "Recovery",
						"description": "Recovers 50% Health and dispels Status Effects.",
						"description_2": "Grants 0–2 Charges.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/recovery-gustave-skill-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					},
					{
						"name": "Shatter",
						"description": "Deals high Lightning damage to all enemies (1 hit).",
						"description_2": "Can Break. If a target is Broken by this hit, Overcharge becomes fully Charged.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/shatter-gustave-skill-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					},
					{
						"name": "Strike Storm",
						"description": "Deals very high single target damage (6 hits) using weapon's element. Critical hits generate 2 Additional Charges.",
						"costAP": 7,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/strike-storm-gustave-skill-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					}
				],
				"weapons": [
					{
						"name": "Abysseram",
						"element": "Physical",
						"power": 3228,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Defense",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "50% increased damage on Rank D. No damage increase on other ranks.",
							"Lvl10": "50% increased Base Attack damage.",
							"Lvl20": "On Rank D, recover 20% Health with Base Attack."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/abyseram_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Blodam",
						"element": "Light",
						"power": 3487,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Perfection is now based on current Health. Gain 1 Rank every 20% missing Health.",
							"Lvl10": "20% increased Light damage with Skills.",
							"Lvl20": "+1 AP on Rank Up."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/blodam_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Chevalam",
						"element": "Physical",
						"power": 3067,
						"attributes": [
							{
								"name": "Agility",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Start battle at Rank S, but can't be Healed or gain Shields.",
							"Lvl10": "20% increased damage for each consecutive turn without taking damage. Can stack up to 5 times.",
							"Lvl20": "Apply Rush on Rank S."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/chevalam_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Confuso",
						"element": "Light",
						"power": 3067,
						"attributes": [
							{
								"name": "Agility",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Light damage can Burn on Critical hits.",
							"Lvl10": "Apply 3 Burn instead of Mark.",
							"Lvl20": "Increase Burn damage by 50% per Rank, up to 300% on Rank S."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/confuso_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Contorso",
						"element": "Lightning",
						"power": 2841,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Switch to Rank S on Break. Base Attack can Break.",
							"Lvl10": "100% Critical Chance on Rank S.",
							"Lvl20": "Triggers a lightning strike on Critical hits."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/contorson_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Corpeso",
						"element": "Fire",
						"power": 3648,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Base Attack applies 2 Burn stack per Rank.",
							"Lvl10": "+1 AP on Rank Up.",
							"Lvl20": "Increase Burn damage by 50% per Rank, up to 300% on Rank S."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/corpeso_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Cruleram",
						"element": "Ice",
						"power": 3454,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Don't lose Rank when taking damage from Powerless enemies.",
							"Lvl10": "+1 Perfection on hitting a Powerless enemy.",
							"Lvl20": "Apply Powerless on Counterattack."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/crueleram_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Cultam",
						"element": "Dark",
						"power": 3132,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "No Perfection loss on damage taken. Perfection is instead lost on being Healed.",
							"Lvl10": "Gain 2 AP on Counterattack.",
							"Lvl20": "Gain 1 Rank on Counterattack."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/cultam_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Danseso",
						"element": "Fire",
						"power": 2970,
						"attributes": [
							{
								"name": "Agility",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Base attack gives 1 Perfection per Burn on target.",
							"Lvl10": "While Powerful, 20% chance to Burn on hit.",
							"Lvl20": "+1 AP on Rank Up."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/danseso_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Delaram",
						"element": "Light",
						"power": 3390,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Start battle on Rank B, but 50% Health.",
							"Lvl10": "Recover 15% Health on Base Attack.",
							"Lvl20": "Apply Powerful on Rank B."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/delaram_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Demonam",
						"element": "Light",
						"power": 2809,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Casting a Light Skill increases damage of next Physical Skill cast by 50% and vice versa.",
							"Lvl10": "20% increased Physical damage with Skills.",
							"Lvl20": "Dealing Light damage with a Skill recovers 3% Health."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/demonam_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Dreameso",
						"element": "Physical",
						"power": 3067,
						"attributes": [
							{
								"name": "Agility",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Gain 1 Rank on Counterattack",
							"Lvl10": "50% increased Counterattack damage.",
							"Lvl20": "Gain 2 AP on Counterattack."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/dreameso-verso-gustave-weapon-clair-obscur-expedition-33-wiki-guide.png"
					},
					{
						"name": "Dualiso",
						"element": "Lightning",
						"power": 1776,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Defense",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Play again after a Base Attack.",
							"Lvl10": "50% increased Base Attack damage.",
							"Lvl20": "Base Attack gives 4 Perfection."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/dualim_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Gaulteram",
						"element": "Earth",
						"power": 3261,
						"attributes": [
							{
								"name": "Agility",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "When hit, lose 1 Perfection instead of 1 rank.",
							"Lvl10": "Apply Rush on Rank S",
							"Lvl20": "Gain 2 Perfection on turn start."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/gaulteram_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Gesam",
						"element": "Physical",
						"power": 3228,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Convert Light damage Skills to Physical damage.",
							"Lvl10": "20% increased Physical damage with Skills.",
							"Lvl20": "-1 AP cost for Physical Skills."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/gesam_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Glaceso",
						"element": "Ice",
						"power": 2873,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "+1 Perfection on Critical hit.",
							"Lvl10": "Self-Heal by 2% Health on dealing a Critical hit.",
							"Lvl20": "Counterattack is always a Critical hit."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/glaceso_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Lanceram",
						"element": "Physical",
						"power": 3713,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Rank can't be lower than C.",
							"Lvl10": "Base Attack gives 4 Perfection.",
							"Lvl20": "Parrying gives 2 Perfection instead of 1."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/lanceram_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Liteso",
						"element": "Physical",
						"power": 3551,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Base Attack consumes all Shields to deal 100% increased damage per Shield.",
							"Lvl10": "+1 Shield on Counterattack.",
							"Lvl20": "Base Attack gives 4 Perfection."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/reacheaso_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Noahram",
						"element": "Physical",
						"power": 2260,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "N/A",
							"Lvl10": "N/A",
							"Lvl20": "N/A"
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/default_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Nosaram",
						"element": "Physical",
						"power": 3551,
						"attributes": [
							{
								"name": "Agility",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Double Perfection gained on Free Aim shots.",
							"Lvl10": "Free Aim shots break 2 Shields.",
							"Lvl20": "50% increased Free Aim damage."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/nosaram_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Sakaram",
						"element": "Physical",
						"power": 2938,
						"attributes": [
							{
								"name": "Agility",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Can't lose Perfection. No damage increase from Rank.",
							"Lvl10": "50% increased Base Attack damage.",
							"Lvl20": "Base Attack gives 4 Perfection."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sakaram_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Seeram",
						"element": "Light",
						"power": 3713,
						"attributes": [
							{
								"name": "Vitality",
								"value": "C"
							},
							{
								"name": "Agility",
								"value": "B"
							}
						],
						"passiveEffects": {
							"Lvl4": "-1 to all Perfection gain but can't reach Rank S.",
							"Lvl10": "Base Attack gives 4 Perfection.",
							"Lvl20": "20% increased Light damage with Skills."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/seeram_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Simoso",
						"element": "Light",
						"power": 3228,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "An ethereal Sword deals Light damage on any damage dealt with Skills.",
							"Lvl10": "20% chance to apply Burn on dealing Light damage.",
							"Lvl20": "Can't die if at least Rank A."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/simoso_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Sireso",
						"element": "Physical",
						"power": 2583,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Bonus damage from Perfection applies to all allies at half value. Bonus damage no longer applies to Verso.",
							"Lvl10": "Perfection gained is increased by 1 while Powerful",
							"Lvl20": "Support Skills cost 1 less AP."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sireso_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Tireso",
						"element": "Earth",
						"power": 3713,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Defense",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Gain 1 Rank on applying Mark.",
							"Lvl10": "Mark an enemy on Base Attack.",
							"Lvl20": "Apply Powerless on Marking an enemy."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/tireso-verso-weapon-clair-obscur-expedition-33-wiki-guide.png"
					},
					{
						"name": "Verleso",
						"element": "Physical",
						"power": 3454,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "N/A",
							"Lvl10": "N/A",
							"Lvl20": "N/A"
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/default_gustave_weapon_expedition_33_wiki_guide.png"
					}
				]
			},
			{
				"name": "Lune",
				"firstPortrait":"https://expedition33.wiki.fextralife.com/file/Expedition-33/lune-character-portrait-clair-obscur-expedition-33-wiki-guide-250px.png",
				"secondPortrait":"https://static.wixstatic.com/media/98aef2_c45760e2af5345ef9d127f15bd45e8dc~mv2.png/v1/fill/w_980,h_1075,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/lune-bio-page.png",
				"description": "Lune is a passionate Scholar and Mage who is in charge of charting a path for the 33rd Expedition. This gives her the weight of responsibility to make sure that the Expedition does not fail. She is the daughter of two prominent researchers, and she inherits her deep thirst for knowledge and discoveries. That being said, she will make sure and will sacrifice everything in order to complete her parents' work.",
				"sentence":"When one falls, we continue.",
				"skills": [
					{
						"name": "Crippling Tsunami",
						"description": "Deals medium Ice damage to all enemies (1 hit). Applies Slow for 3 turns.",
						"description_2": "Consumes Earth Stain Lightning Stain Fire Stain for greatly increased damage.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/crippling-tsunami-lune-skill-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					},
					{
						"name": "Crustal Crush",
						"description": "Deals high single-target Earth and Break damage (5 hits).",
						"description_2": "Consumes Lightning Stain Lightning Stain for increased damage.",
						"costAP": 7,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/crustal-crush-lune-skill-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					},
					{
						"name": "Earth Rising",
						"description": "Deals low Earth damage to all enemies (1 hit).",
						"description_2": "Consumes Lightning Stain for increased damage.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/earth-rising-lune-skill-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					},
					{
						"name": "Electrify",
						"description": "Deals low single-target Lightning damage (3 hits). Critical Hits trigger an additional hit.",
						"description_2": "Consumes Fire Stain to generate one Light Stain.",
						"costAP": 1,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/electrify-lune-skill-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					},
					{
						"name": "Elemental Genesis",
						"description": "Deals extreme damage to all enemies (8 hits). Each hit deals damage in a random element",
						"description_2": "Can only be cast with Lightning Stain Earth Stain Fire Stain Ice Stain.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/elemental-genesis-lune-skill-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					},
					{
						"name": "Elemental Trick",
						"description": "Deals low single-target Ice, Fire, Lightning, and Earth damage (4 hits). Critical Hits generate the corresponding Stain.",
						"description_2": "Critical Hits generate the corresponding Stain.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/elemental-trick-lune-skill-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					},
					{
						"name": "Fire Rage",
						"description": "Deals increasingly high Fire damage to all enemies every turn until Lune receives damage. Stuns self if interrupted.",
						"description_2": "Consumes Ice Stain Ice Stain for increased damage.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/fire-rage-lune-skill-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					},
					{
						"name": "Healing Light",
						"description": "Heals the targeted ally and dispels Status Effects.",
						"description_2": "Consumes Earth Stain Earth Stain: costs 0 AP.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/healing-light-lune-skill-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					},
					{
						"name": "Hell",
						"description": "Deals very high Fire damage that applies 5 Burn per hit to all enemies (2 hits). Deals self-damage if failed.",
						"description_2": "Consumes Ice Stain Earth Stain Lightning Stain: Greatly increased damage.",
						"costAP": 9,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/hell-lune-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Ice Lance",
						"description": "Deals medium single-target Ice damage that Slows the target (1 hit). Consumes Earth Stain for increased damage.",
						"description_2": "Consumes Earth Stain for increased damage.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/ice-lance-lune-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Immolation",
						"description": "Deals low single-target Fire damage and applies 3 Burn (1 hit). Applies 2 more Burns if the target is Marked.",
						"description_2": "Consumes Ice Stain for increased damage.",
						"costAP": 2,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/immolation-lune-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Lightning Dance",
						"description": "Deals very high single-target Lightning damage (6 hits). Critical Hits trigger an additional hit.",
						"description_2": "Consumes Earth Stain Ice Stain Fire Stain: Greatly increased damage.",
						"costAP": 7,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/lightning-dance-lune-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Mayhem",
						"description": "Consumes all Stains to deal high elemental damage to the target.",
						"description_2": "Can Break if 4 Stains are consumed.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/mayhem-lune-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Rebirth",
						"description": "Revives an ally with 30–70% Health and 2 additional AP.",
						"description_2": "Consumes Lightning Stain Lightning Stain Lightning Stain: costs 0 AP.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/rebirth-lune-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Revitalization",
						"description": "Heals 1–3 allies by 40–60% Health.",
						"description_2": "Consumes Fire Stain Fire Stain Fire Stain to also apply Regen that heals on turn start for 3 turns.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/revitalization-lune-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Rockslide",
						"description": "Deals medium single-target Earth damage (2 hits). Can Break.",
						"description_2": "Consumes Lightning Stain Ice Stain Fire Stain for greatly increased damage.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/rockslide-lune-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Sky Break",
						"description": "Deals extreme damage to all enemies (1 hit). Element depends on which Stains Lune has the most. Can Break.",
						"costAP": 3,
						"gradient_charge":true,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sky-break-lune-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Storm Caller",
						"description": "All enemies receive medium Lightning damage at the end of their turn and low Lightning damage when they receive damage. Duration: 3 turns.",
						"description_2": "Consumes Fire Stain Fire Stain for double thunder strikes on turn end.",
						"costAP": 6,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/storm-caller-lune-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Terraquake",
						"description": "Deals low Earth and Break damage to all enemies every turn. Also increases Break damage received by 50%. Duration: 3 turns.",
						"description_2": "Consumes Lightning Stain Lightning Stain to increase duration to 5 turns.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/terraquake-lune-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Thermal Transfer",
						"description": "Deals low single-target Ice damage (2 hits). Gains 4 AP if the target is Burning.",
						"description_2": "Consumes Earth Stain Earth Stain: Play a second turn.",
						"costAP": 2,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/thermal-transfer-lune-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Thunderfall",
						"description": "Deals medium Lightning damage to random enemies (2–6 hits). Critical Hits trigger an additional hit.",
						"description_2": "Consumes Fire Stain for increased damage.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/thunderfall-lune-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Tree of Life",
						"description": "Cleanses all Status Effects and Heals all allies.",
						"costAP": 2,
						"gradient_charge":true,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/tree-of-life-lune-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Tremor",
						"description": "Deals high Earth damage to all enemies (1 hit). Removes all enemies' Shields.",
						"costAP": 1,
						"gradient_charge":true,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/tremor-lune-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Typhoon",
						"description": "On turn start, deals high Ice damage to all enemies and Heals allies.",
						"description_2": "Consumes Earth Stain Earth Stain to increase duration from 3 to 5 turns.",
						"costAP": 8,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/typhoon-lune-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					}
				],
				"weapons": [
					{
						"name": "Angerim",
						"element": "Fire",
						"power": 3293,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Base Attack applies 2 Burn per Fire Stain.",
							"Lvl10": "Generate one Fire Stain at the beginning of each turn.",
							"Lvl20": "30% increased Burn damage per Fire Stain."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/angerim_lune_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Benisim",
						"element": "Earth",
						"power": 2744,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Defense",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Healing Skills cost 1 less AP.",
							"Lvl10": "Generate one Earth Stain at the beginning of each turn.",
							"Lvl20": "Replay instantly on consuming Stains with a Healing Skill."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/benesim_lune_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Betelim",
						"element": "Earth",
						"power": 3228,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Using a Skill that consumes Stains increases damage by 20%. Can stack up to 5 times. Resets on using a Skill without consuming Stains.",
							"Lvl10": "On turn start, if no Stains, 2 random Stains are generated.",
							"Lvl20": "+1 AP when Stains are consumed."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/betelim_lune_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Braselim",
						"element": "Fire",
						"power": 3390,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "30% increased Critical Chance per Ice Stain.",
							"Lvl10": "+5% of a Gradient Charge on Critical hit.",
							"Lvl20": "20% increased Fire damage with Skills."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/braselim_lune_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Chapelim",
						"element": "Earth",
						"power": 3164,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "30% increased Break damage per Earth Stain.",
							"Lvl10": "Gain 9 AP on Breaking an enemy.",
							"Lvl20": "Generate one Earth Stain at the beginning of each turn."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/default_lune_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Choralim",
						"element": "Fire",
						"power": 3551,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "100% Critical Chance when 4 Stains are simultaneously active.",
							"Lvl10": "20% increased damage for each consecutive turn without taking damage. Can stack up to 5 times.",
							"Lvl20": "Critical hits apply Burn."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sirenim_lune_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Colim",
						"element": "Light",
						"power": 2583,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "50% chance to generate a Light Stain when consuming Stains.",
							"Lvl10": "+1 AP on consuming a Light Stain.",
							"Lvl20": "20% increased damage with Skills per active Light Stain."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/coralim-lune-weapon-clair-obscur-expedition-33-wiki-guide.png"
					},
					{
						"name": "Coralim",
						"element": "Ice",
						"power": 2744,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Defense",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Ice Skills cost 1 less AP.",
							"Lvl10": "20% increased Ice damage with Skills.",
							"Lvl20": "Start battle with 1 Earth Stain."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/coralim_lune_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Deminerim",
						"element": "Lightning",
						"power": 2744,
						"attributes": [
							{
								"name": "Agility",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Lightning Skills cost 1 less AP.",
							"Lvl10": "20% increased Lightning damage with Skills.",
							"Lvl20": "Start battle with 1 Fire Stain."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/deminerim_lune_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Elerim",
						"element": "Earth",
						"power": 3551,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Defense",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Consuming an Earth Stain applies 1 Shield to self.",
							"Lvl10": "20% increased Earth damage with Skills.",
							"Lvl20": "Base Attack generates an Earth Stain."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/elerim_lune_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Kralim",
						"element": "Lightning",
						"power": 3390,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Casting a Skill increases the Skill damage of all other elements by 20%. Resets when casting a Skill of a previous element.",
							"Lvl10": "On turn start, if no Stains, 2 random Stains are generated.",
							"Lvl20": "+1 AP when Stains are consumed."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/kralim-lune-weapon-clair-obscur-expedition-33-wiki-guide-171px.png"
					},
					{
						"name": "Lighterim",
						"element": "Fire",
						"power": 2744,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Fire Skills cost 1 less AP.",
							"Lvl10": "20% increased Fire damage with Skills.",
							"Lvl20": "Start battle with 1 Ice Stain."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/lighterim_lune_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Lithelim",
						"element": "Void",
						"power": 3099,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "5% chance to generate a Dark Stain when consuming Stains. Deal 50% more damage with Skills per active Dark Stain.",
							"Lvl10": "+1 AP on consuming a Light Stain.",
							"Lvl20": "Base Attacks can consume one Dark Stain to deal 200% more damage."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/reacherim_lune_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Lunerim",
						"element": "Fire",
						"power": 2421,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "N/A",
							"Lvl10": "N/A",
							"Lvl20": "N/A"
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/default_lune_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Painerim",
						"element": "Earth",
						"power": 2744,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Earth Skills cost 1 less AP.",
							"Lvl10": "20% increased Earth damage with Skills.",
							"Lvl20": "Start battle with 1 Lightning Stain."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/painerim_lune_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Potierim",
						"element": "Ice",
						"power": 2906,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Healing Skills generate one additional 1 Light stain.",
							"Lvl10": "Consuming a Light Stain applies Slow to a random enemy.",
							"Lvl20": "Base Attack generates a Light Stain."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/potierim_lune_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Redalim",
						"element": "Ice",
						"power": 2583,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Healing Skills generate one additional Light stain.",
							"Lvl10": "Generate one Ice Stain at the beginning of each turn.",
							"Lvl20": "Replay instantly on consuming Stains with a Healing Skill."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/redalim_lune_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Saperim",
						"element": "Lightning",
						"power": 3067,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Using a Gradient Attack generates 1 additional Light Stain.",
							"Lvl10": "When a Fire Stain is generated, a Lightning Stain is also generated. Once per turn.",
							"Lvl20": "Gradient Attacks and Gradient Counters deal 50% more damage."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/saperim_lune_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Scaverim",
						"element": "Dark",
						"power": 4197,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Base Attack applies 2 Dark Stains.",
							"Lvl10": "Generate one Dark Stain at the beginning of each turn.",
							"Lvl20": "Consume 1 Dark Stain to increase damage by 50%."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/scaverim_lune_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Snowin",
						"element": "Ice",
						"power": 3874,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Freeze self when falling below 30% health. Prevent the next instance of damage while Frozen.",
							"Lvl10": "On turn start, if Frozen, remove Freeze and recover 60% Health.",
							"Lvl20": "Gain 2 Ice Stains and 3 AP when Frozen."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/snowim_lune_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Trebuchim",
						"element": "Lightning",
						"power": 3067,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Generate a random Stain on Free Aim shot",
							"Lvl10": "+1 AP when Stains are consumed.",
							"Lvl20": "Base Attack generates 2 random Stains."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/trebuchim_lune_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Troubadim",
						"element": "Physical",
						"power": 3067,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Vitality",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Free Aim Shots deal damage to an additional random target.",
							"Lvl10": "50% increased Free Aim damage.",
							"Lvl20": "Generate a random Stain on Free Aim shot."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/troubadim_lune_weapon_expedition_33_wiki_guide.png"
					}
				]
			},
			{
				"name": "Maelle",
				"firstPortrait":"https://expedition33.wiki.fextralife.com/file/Expedition-33/maelle-character-portrait-clair-obscur-expedition-33-wiki-guide-250px.png",
				"secondPortrait":"https://static.wixstatic.com/media/98aef2_336ae9e29180469fa448612769061884~mv2.png/v1/fill/w_739,h_775,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/maelle.png",
				"description": "Maelle is the overarching protagonist of Expedition 33 and the foster sister/daughter of Gustave, though she is more of a shy loner, but is eager to fly; her reasoning to join the 33rd Expedition at the age of 16 is to explore the world outside of Lumiere. She was orphaned at the young age of 3 and has never felt like she fit in anywhere in Lumiere, but has a deep appreciation and trust towards Gustave. Maelle is in reality the canvas reincarnation of Alicia Dessendre after she enters with the goal of stopping Aline and Renoir from fighting over the fate of the canvas. Maelle herself wishes the Canvas world to remain intact and after becoming a paintress, she gains the goal of resurrecting everyone and stopping her father and her painted brother from destroying it.",
				"sentence":"I've had enough condolences.",
				"skills": [
					{
						"name": "Breaking Rules",
						"description": "Deals low single-target Physical damage (2 hits). Destroys all target's Shields and gains 1 AP per Shield destroyed.",
						"description_2":"If the target is Defenseless, play a second turn.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/breaking-rules-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Burning Canvas",
						"description": "Changes stance to Offensive.",
						"description_2":"Deals high single-target Void damage (5 hits). Applies 1 Burn per hit. Damage increases for each Burn on the target.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/burning-canvas-maelle-skill-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					},
					{
						"name": "Combustion",
						"description": "Deals medium single-target Physical damage (2 hits).",
						"description_2":"Consumes up to 10 Burn stacks for increased damage.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/combustion-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Degagement",
						"description": "Deals low single-target Fire damage (1 hit). Target becomes weak to Fire damage for 2 turns.",
						"costAP": 2,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/degagement-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Egide",
						"description": "Protects allies by taking damage in their place for 2 turns. Duration is extended by 1 when gaining Shell.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/egide-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Fencer's Flurry",
						"description": "Deals medium damage to all enemies (1 hit). Uses weapon's element.",
						"description_2":"Applies Defenseless for 1 turn.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/fencers-flurry-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Fleuret Fury",
						"description": "Deals high single-target Physical damage (3 hits). If in Virtuose Stance, remain in that stance.",
						"description_2":"Can Break.",
						"costAP": 6,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/fleuret-fury-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Gommage",
						"description": "Kills weak targets. Otherwise, deals extreme Void damage (1 hit).",
						"costAP": 1,
						"gradient_charge":true,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/gommage-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Guard Down",
						"description": "Changes stance to Offensive.",
						"description_2":"Applies Defenseless to all enemies for 3 turns.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/guard-down-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Guard Up",
						"description": "Applies Shell, reducing damage taken, to up to 3 allies for 3 turns.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/guard-up-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Gustave's Homage",
						"description": "Deals high single-target Lightning damage (8 hits). Increased damage to Marked targets. Doesn't remove Mark.",
						"costAP": 8,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/gustaves-homage-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Last Chance",
						"description": "Reduces self-Health to 1 but refills all AP.",
						"description_2":"Switches to Virtuose Stance.",
						"costAP": 1,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/last-chance-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Mezzo Forte",
						"description": "Reapplies current stance and gives 2–4 AP.",
						"costAP": 1,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/mezzo-forte-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Momentum Strike",
						"description": "Deals high single-target damage (1 hit). Uses weapon's element. Increased damage to Marked targets.",
						"description_2":"In Virtuose Stance: costs 4 AP.",
						"costAP": 7,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/momentum-strike-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Offensive Switch",
						"description": "Deals low single-target damage (1 hit) and applies Defenseless for 3 turns. Uses weapon's element.",
						"costAP": 1,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/offensive-switch-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Payback",
						"description": "Deals very high single-target Physical damage (1 hit). Reduced AP cost for each attack parried since last turn.",
						"description_2":"Can Break.",
						"costAP": 9,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/payback-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Percee",
						"description": "Deals medium single-target Physical damage (1 hit). Increased damage to Marked targets.",
						"description_2":"In Virtuose Stance: costs 2 AP.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/percee-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Phantom Strike",
						"description": "Changes stance to Defensive.",
						"description_2":"Deals very high Void damage to all enemies (4 hits). Also grants +35% of a Gradient Charge.",
						"costAP": 7,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/phantom-strike-maelle-skill-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					},
					{
						"name": "Phoenix Flame",
						"description": "Applies 10 Burn to all enemies and revives all allies with 50 to 70% Health.",
						"costAP": 2,
						"gradient_charge":true,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/phoenix-flame-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Pyrolyse",
						"description": "Deals extreme single-target Fire damage (3 hits). Applies 5 Burn per hit.",
						"description_2":"Offensive Stance: applies 2 more Burn per hit.",
						"costAP": 9,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/pyrolyse-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Rain of Fire",
						"description": "Deals medium single-target Fire damage (2 hits). Applies 3 Burn per hit",
						"description_2":"Defensive Stance: applies 2 more Burn.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/rain-of-fire-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Revenge",
						"description": "Deals high single-target Fire damage (1 hit). Damage increases for each hit received since the previous turn.",
						"description_2":"Can Break.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/revenge-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Spark",
						"description": "Deals low single-target Fire damage (1 hit). Applies 3 Burn.",
						"description_2":"Offensive Stance: applies 2 more Burn.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/spark-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Stendhal",
						"description": "Changes stance: Stanceless.",
						"description_2":"Deals extreme single-target Void damage (1 hit). Removes self-Shields and applies Defenseless to self.",
						"costAP": 8,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/stendhal-maelle-skill-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					},
					{
						"name": "Swift Stride",
						"description": "Deals low single-target Physical damage (1 hit). Switches to Virtuose Stance if target is Burning.",
						"description_2":"Regains 0–2 AP.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/swift-stride-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Sword Ballet",
						"description": "Deals extreme single-target damage (5 hits). Uses weapon's element. Critical Hits deal double damage.",
						"costAP": 9,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sword-ballet-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Virtuose Strike",
						"description": "Deals high single-target Physical damage (5 hits).",
						"costAP": 1,
						"gradient_charge":true,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/virtuose-strike-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					}
				],
				"weapons": [
					{
						"name": "Barrier Breaker",
						"element": "Void",
						"power": 3616,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Steal Shields removed by hitting enemies.",
							"Lvl10": "Switch to Virtuose Stance on breaking any Shield.",
							"Lvl20": "Hitting a Marked enemy breaks all its Shields."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/barrierbreaker_maelle_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Battlum",
						"element": "Physical",
						"power": 3067,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Double Gradient generation while in Defensive Stance.",
							"Lvl10": "If Stanceless, Base Attack switches to Defensive Stance.",
							"Lvl20": "+5% of a Gradient Charge on Parry."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/battlum_maelle_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Brulerum",
						"element": "Fire",
						"power": 2744,
						"attributes": [
							{
								"name": "Agility",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Critical hits apply Burn.",
							"Lvl10": "Base Attack applies 2 Burn.",
							"Lvl20": "100% Critical Chance while Stanceless."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/brulerum_maelle_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Chalium",
						"element": "Light",
						"power": 3422,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "On Defensive Stance, gain 1 Shield per Parry. Lose all Shields on turn start.",
							"Lvl10": "20% increased Light damage with Skills.",
							"Lvl20": "50% increased Counter damage per Shield."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/chalisum_maelle_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Chantenum",
						"element": "Fire",
						"power": 2841,
						"attributes": [
							{
								"name": "Agility",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "On turn start, if Stanceless, switch to Offensive Stance.",
							"Lvl10": "Fire Skills cost 1 less AP.",
							"Lvl20": "+1 Shield on switching to Offensive Stance."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/chantenum-maelle-weapon-clair-obscur-expedition-33-wiki-guide.png"
					},
					{
						"name": "Clierum",
						"element": "Lightning",
						"power": 3196,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Critical hits with Skills give 2 AP. Once per turn.",
							"Lvl10": "20% increased Lightning damage with Skills.",
							"Lvl20": "+50% Critical Chance while in Offensive Stance."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/clierum_maelle_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Coldum",
						"element": "Ice",
						"power": 2583,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Defense",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Self-Heal by 2% Health on dealing a Critical hit.",
							"Lvl10": "+50% Critical Chance while in Defensive Stance.",
							"Lvl20": "If Stanceless, Base Attack switches to Defensive Stance."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/coldum_maelle_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Duenum",
						"element": "Physical",
						"power": 2421,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "In Defensive Stance, gaining AP also gives 1 AP to allies.",
							"Lvl10": "If Stanceless, Base Attack switches to Defensive Stance.",
							"Lvl20": "+1 AP on Stance switch."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/duenum_maelle_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Facesum",
						"element": "Physical",
						"power": 3519,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "In Offensive Stance, double the amount of Burn applied.",
							"Lvl10": "50% increased Burn damage.",
							"Lvl20": "Base Attack propagates Burn."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/facesum_maelle_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Glaisum",
						"element": "Physical",
						"power": 3713,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Allies recover 20% Health on switching to Virtuose Stance.",
							"Lvl10": "Gain Shell when switching out of Virtuose Stance.",
							"Lvl20": "Cleanse self Status Effects when switching to Virtuose Stance."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/glaisum_maelle_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Jarum",
						"element": "Physical",
						"power": 2583,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Switch to Virtuose Stance on Counterattack.",
							"Lvl10": "Apply 5 Burn on Counterattack.",
							"Lvl20": "50% increased Counter damage per Shield."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/jarum_maelle_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Lithum",
						"element": "Void",
						"power": 3228,
						"attributes": [
							{
								"name": "Agility",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "In Virtuose Stance, hitting a Marked enemy doesn't remove Mark.",
							"Lvl10": "Switch to Virtuose Stance on Counterattack.",
							"Lvl20": "Gain Shell when switching out of Virtuose Stance."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/reachum_maelle_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Maellum",
						"element": "Physical",
						"power": 3228,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "N/A",
							"Lvl10": "N/A",
							"Lvl20": "N/A"
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/default_maelle_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Medalum",
						"element": "Physical",
						"power": 2906,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Start in Virtuose Stance.",
							"Lvl10": "In Virtuose Stance, every Burn applied is doubled.",
							"Lvl20": "In Virtuose Stance, Burn deals double damage."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/medalum_maelle_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Melarum",
						"element": "Physical",
						"power": 3584,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Allies recover 20% Health on switching to Virtuose Stance.",
							"Lvl10": "Applies Shell when Health is above 80%.",
							"Lvl20": "Switch to Virtuose Stance when Health falls below 50%."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/melarum_maelle_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Plenum",
						"element": "Ice",
						"power": 3035,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "On turn start, if Stanceless, switch to Defensive Stance.",
							"Lvl10": "In Defensive Stance, double Break damage.",
							"Lvl20": "Support Skills cost 1 less AP."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/plenum-maelle-weapon-clair-obscur-expedition-33-wiki-guide.png"
					},
					{
						"name": "Seashelum",
						"element": "Fire",
						"power": 3003,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "+1 Shield on switching to Offensive Stance.",
							"Lvl10": "If Stanceless, Base Attack switches to Offensive Stance.",
							"Lvl20": "+50% Critical Chance while in Offensive Stance."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/seashellum_maelle_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Sekarum",
						"element": "Physical",
						"power": 3390,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Switch to Virtuose Stance on breaking any Shield.",
							"Lvl10": "Free Aim shots break 2 shields.",
							"Lvl20": "In Virtuose Stance, all damage pierce Shields."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sekarum_maelle_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Stalum",
						"element": "Fire",
						"power": 3228,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Apply Burn on self on turn start. 10% increased damage for each self Burn stack.",
							"Lvl10": "Base Attack applies 2 Burn.",
							"Lvl20": "While in Defensive Stance, receive Heal instead of Burn damage."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/stallum_maelle_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Tissenum",
						"element": "Earth",
						"power": 3874,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "In Defensive Stance, double Break damage.",
							"Lvl10": "Gain 9 AP on Breaking an enemy.",
							"Lvl20": "Breaking an enemy deals 3 high amount of Earth damage"
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sirenum_maelle_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Veremum",
						"element": "Physical",
						"power": 3293,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "If Stanceless, Base Attack switches to Offensive Stance.",
							"Lvl10": "Counterattacks apply Defenseless.",
							"Lvl20": "+50% Critical Chance while in Offensive Stance."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/veremum_maelle_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Volesterum",
						"element": "Physical",
						"power": 3293,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "+1 AP on Stance switch.",
							"Lvl10": "If Stanceless, Base Attack switches to Defensive Stance.",
							"Lvl20": "Recover 5% Health on Stance switch."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/volesterum_maelle_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Yeverum",
						"element": "Physical",
						"power": 3358,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Applying Shell also applies 1 Shield.",
							"Lvl10": "On applying Shields, also give 1 AP.",
							"Lvl20": "On switching to Virtuose Stance, double all Shields on allies."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/chainebum_maelle_weapon_expedition_33_wiki_guide.png"
					}
				]
			},
			{
				"name": "Sciel",
				"firstPortrait":"https://expedition33.wiki.fextralife.com/file/Expedition-33/sciel-character-portrait-clair-obscur-expedition-33-wiki-guide-250px.png",
				"secondPortrait":"https://static.wixstatic.com/media/98aef2_9fe831d1c67b4b688a5647b7cec347e4~mv2.png/v1/fill/w_739,h_775,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sciel.png",
				"description": "Sciel is a cheerful yet serene Warrior who wields a Scythe and has put all her commitment into the Expedition to make sure they do not fail. Growing up, Sciel was a farmer until she became a teacher. Her carefree personality allows her to enjoy life and accept the fate she will have at the hands of the Paintress.",
				"sentence":"Death is a friend who will welcome me home.",
				"skills": [
					{
						"name": "All Set",
						"description": "Applies Shell, Powerful, and Rush to all allies.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/all-set-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Bad Omen",
						"description": "Deals low Dark damage to all enemies (2 hits).",
						"description_2": "Applies 2 Foretell per hit.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/bad-omen-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Card Weaver",
						"description": "Deals low single-target Physical damage (1 hit). Propagates target's Foretell to all enemies and plays a second turn.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/card-weaver-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Dark Cleansing",
						"description": "Cleanses an ally of their Status Effects and propagates the target's buff to all allies.",
						"costAP": 0,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/dark-cleansing-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Dark Wave",
						"description": "Deals high Dark damage to all enemies (3 hits). Consumes all Foretell to deal additional damage.",
						"costAP": 6,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/dark-wave-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Delaying Slash",
						"description": "Deals medium single-target damage (2 hits). Uses weapon's element.",
						"description_2": "Consumes Foretell to increase damage and delay the target's turn.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/delyaing-slash-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Doom",
						"description": "Deals very high single-target Dark damage (3 hits). Applies Powerless, Defenseless, and Slow for 3 turns. Can Break.",
						"costAP": 2,
						"gradient_charge":true,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/doom-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "End Slice",
						"description": "Deals extreme single-target Physical damage (1 hit). Damage increases for each Foretell consumed since the start of battle.",
						"costAP": 3,
						"gradient_charge":true,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/end-slice-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Final Path",
						"description": "Deals extreme single-target Dark damage (1 hit) and applies 10 Foretell.",
						"description_2": "Can Break.",
						"costAP": 9,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/final-path-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Firing Shadow",
						"description": "Deals low Dark damage to all enemies (3 hits). Consumes 1 Foretell per hit for increased damage.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/firing-shadow-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Focused Foretell",
						"description": "Deals medium single-target Physical damage (1 hit).",
						"description_2": "Applies 2 Foretell, or 5 if the target has none.",
						"costAP": 2,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/focused-foretell-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Fortune's Fury",
						"description": "Targeted ally deals double damage for 1 turn.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/fortunes-fury-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Grim Harvest",
						"description": "Deals medium single-target Dark damage (1 hit) and heals all allies by 30% Health.",
						"description_2": "Consumes Foretell to increase healing by 5% per Foretell.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/grim-harvest-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Harvest",
						"description": "Deals medium single-target damage (1 hit). Uses weapon's element. Heals self by 40% Health.",
						"description_2": "Consumes all Foretell to increase healing by 5% per Foretell.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/harvest-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Intervention",
						"description": "Targeted ally acts immediately and gains 4 AP.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/intervention-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Marking Card",
						"description": "Deals medium single-target Dark damage (2 hits).",
						"description_2": "Applies Mark and 3 Foretell to the target.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/marking-card-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Our Sacrifice",
						"description": "Deals extreme Dark damage to all enemies (1 hit). Absorbs allies' Health and enemies' Foretell to increase damage.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/our-sacrifice-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Phantom Blade",
						"description": "Deals high single-target Dark damage (1 hit). Consumes all Foretell for additional damage.",
						"description_2": "Can Break.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/phantom-blade-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Plentiful Harvest",
						"description": "Deals medium single-target Physical damage (2 hits).",
						"description_2": "Consumes all Foretell on the target and gives 1 AP to a party member per Foretell consumed.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/plentiful-harvest-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Rush",
						"description": "Applies Rush to 1–3 allies, increasing their speed for 3 turns.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/rush-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Sealed Fate",
						"description": "Deals high single-target damage (5–7 hits). Uses weapon's element. Each hit can consume 1 Foretell to deal 200% more damage.",
						"description_2": "Critical Hits don't consume Foretell but still gain the bonus.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sealed-fate-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Searing Bond",
						"description": "Deals medium single-target Dark damage (1 hit).",
						"description_2": "Applies 5 Foretell. Also damages and applies Foretell to every Burning enemy.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/searing-bond-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Shadow Bringer",
						"description": "Deals high single-target Dark damage to random enemies (10 hits).",
						"description_2": "Applies 1 Foretell per hit.",
						"costAP": 1,
						"gradient_charge":true,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/shadow-bringer-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Spectral Sweep",
						"description": "Deals medium single-target damage (2–6 hits). Uses weapon's element.",
						"description_2": "Applies 1 Foretell per hit. Critical Hits apply an additional Foretell.",
						"costAP": 7,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/spectral-sweep-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Twilight Dance",
						"description": "Deals extreme single-target Dark damage (4 hits). During Twilight, extends its duration by 1 turn.",
						"description_2": "Consumes all Foretell to deal additional damage.",
						"costAP": 9,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/twilight-dance-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Twilight Slash",
						"description": "Deals low single-target Dark damage (1 hit). Consumes all Foretell to deal additional damage.",
						"costAP": 2,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/twilight-slash-sciel-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					}
				],
				"weapons": [
					{
						"name": "Algueron",
						"element": "Ice",
						"power": 3228,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Free Aim shots can consume 1 Foretell to deal 100% more damage.",
							"Lvl10": "Base Attack applies 3 Foretell.",
							"Lvl20": "During Twilight, Free Aim shots deal double damage."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/algueron_sciel_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Blizzon",
						"element": "Ice",
						"power": 4197,
						"attributes": [
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "While having at least 1 active Moon charge, Moon Skills are always Critical but damage taken is doubled.",
							"Lvl10": "25% increased damage per Moon charge.",
							"Lvl20": "Base Attack gives 1 Moon charge."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/blizzon_sciel_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Bourgelon",
						"element": "Light",
						"power": 3099,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Consuming Foretell applies 2 Burn on target per Sun Charge.",
							"Lvl10": "100% increased Burn damage in Twilight state.",
							"Lvl20": "Sun Skills give one more charge."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/bourgelon_sciel_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Charnon",
						"element": "Void",
						"power": 2970,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "100% Critical Chance during Twilight.",
							"Lvl10": "Apply 1 Foretell on Critical hit.",
							"Lvl20": "20% increased damage for each consecutive turn without taking damage. Can stack up to 5 times."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/charnon_sciel_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Chation",
						"element": "Dark",
						"power": 3551,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Sun Skills always apply 10 Foretell, but all damage taken is doubled.",
							"Lvl10": "Base Attack gives 1 Moon charge and consumes all Foretell to apply Burn.",
							"Lvl20": "100% increased Burn damage in Twilight state."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/chation_sciel_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Corderon",
						"element": "Dark",
						"power": 2744,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Curse self on battle start. Deal 50% more damage while Cursed.",
							"Lvl10": "Reset Curse duration when entering Twilight state.",
							"Lvl20": "Play again when entering Twilight state."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/corderon_sciel_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Direton",
						"element": "Earth",
						"power": 4035,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "+1 AP per Moon charge on turn start.",
							"Lvl10": "Base Attack gives 1 Moon charge.",
							"Lvl20": "During Twilight, Base Attack consumes all AP. Base Attack applies 1 Foretell and deals 50% increased damage per AP consumed."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/direton_sciel_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Hevasson",
						"element": "Physical",
						"power": 3454,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Defense",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Free Aim shots can consume a Sun charge to apply 5 Foretell and consume a Moon charge to deal 400% more damage.",
							"Lvl10": "Consuming a Sun or Moon charge gives 1 AP.",
							"Lvl20": "Base Attack gives 1 Moon charge."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/hevasson_sciel_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Litheson",
						"element": "Physical",
						"power": 2809,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Defense",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "During Moon, all allies have Greater Rush. During Sun, all enemies have Greater Slow.",
							"Lvl10": "During Twilight, all allies have Greater Rush and all enemies have Greater Slow.",
							"Lvl20": "+3 AP on applying a Buff or Debuff. Once per turn."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/reacheanon_sciel_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Garganon",
						"element": "Fire",
						"power": 3132,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Defense",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "While having at least 1 active Sun charge, apply one Burn stack per hit taken.",
							"Lvl10": "Counterattacks apply 1 Burn per active Sun charge.",
							"Lvl20": "Base attack can consume 1 Sun charge to apply 5 Foretell."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/garganon_sciel_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Gobluson",
						"element": "Fire",
						"power": 3358,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "During Twilight, every time Foretell is applied, it also affects another random enemy.",
							"Lvl10": "Apply 1 Burn every 3 Foretell applied with Skills.",
							"Lvl20": "20% increased Fire damage with Skills."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/gobluson_sciel_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Guleson",
						"element": "Lightning",
						"power": 3132,
						"attributes": [
							{
								"name": "Agility",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "On Twilight Start, apply Mark to all enemies.",
							"Lvl10": "Hitting a Marked enemy during Twilight doesn't remove Mark.",
							"Lvl20": "Apply 3 Foretell on applying Mark."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/reacheron_sciel_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Lusteson",
						"element": "Dark",
						"power": 3422,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Killing an enemy with Foretell applies its Foretell to another random enemy.",
							"Lvl10": "Apply Mark on consuming Foretell.",
							"Lvl20": "20% increased Dark damage with Skills."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/lusteson_sciel_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Martenon",
						"element": "Earth",
						"power": 3874,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "On Twilight Start, deal damage to all enemies based on the amount of charges.",
							"Lvl10": "On Twilight Start, apply 2 Foretell per charge to all enemies.",
							"Lvl20": "Double Sun and Moon charge generation."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/martenon-sciel-weapon-expedition-33-wiki-guide.png"
					},
					{
						"name": "Minason",
						"element": "Physical",
						"power": 2809,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Sun skills have increased damage for each Foretell on the target. Moon Skills don't generate Moon charges anymore.",
							"Lvl10": "With at least 1 active Sun charge, gain one additional AP per Foretell consumed.",
							"Lvl20": "Base attack can consume 1 Sun charge to apply 5 Foretell."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/minason_sciel_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Moisson",
						"element": "Physical",
						"power": 3325,
						"attributes": [
							{
								"name": "Agility",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "During Twilight, all damage dealt is converted to Dark damage.",
							"Lvl10": "20% increased Dark damage with Skills.",
							"Lvl20": "Apply Shell during Moon, Powerful during Sun, and Rush during Twilight."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/moissoson_sciel_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Ramasson",
						"element": "Physical",
						"power": 3519,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Can consume 1 Moon charge on turn start to recover 20% of each ally's Health.",
							"Lvl10": "Base Attack gives 1 Moon charge.",
							"Lvl20": "Moon Skills give one more charge."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/ramasson_sciel_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Rangeson",
						"element": "Dark",
						"power": 3132,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Recover 5% Health per Foretell applied.",
							"Lvl10": "Healing Skills cost 1 less AP.",
							"Lvl20": "30% increased Heal efficiency per Moon charge. Base Attack gives 1 Moon charge."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/rangeson_sciel_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Sadon",
						"element": "Light",
						"power": 2583,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "On turn start, gain 1 Shield if at least 1 Sun charge is active.",
							"Lvl10": "Apply 5 Foretell on enemies that break Shields.",
							"Lvl20": "+2 Sun charges on Counterattack."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sadon_sciel_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Scieleson",
						"element": "Physical",
						"power": 3454,
						"attributes": [
							{
								"name": "Agility",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "N/A",
							"Lvl10": "N/A",
							"Lvl20": "N/A"
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/scieleson_sciel_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Sirenon",
						"element": "Light",
						"power": 3454,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Defense",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Sun Skills heal 5% Health to all allies.",
							"Lvl10": "Gain Shell when switching to Twilight.",
							"Lvl20": "Moon Skills remove one Debuff on all allies."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sirenon_sciel_weapon_expedition_33_wiki_guide.png"
					}
				]
			},
			{
				"name": "Verso",
				"firstPortrait":"https://expedition33.wiki.fextralife.com/file/Expedition-33/verso-character-portrait-clair-obscur-expedition-33-wiki-guide-250px.png",
				"secondPortrait":"https://static.wixstatic.com/media/98aef2_e7c1f32b486d48a098ac4ba25eb6c4bc~mv2.png/v1/fill/w_739,h_775,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/verso.png",
				"description": "Verso is a member of Expedition Zero. He wanders The Continent and keeps a close eye on the surviving members of Expedition 33. Verso is an experienced fighter and can fight against any threat that comes his way. Verso joins Expedition 33 to achieve the goal of stopping the Paintress from ever painting again. He is a member of the Painted Dessendre family, created by Aline, The Paintress, as a coping mechanism for her grief. Real Verso created the Canvas, the world where Expedition 33 takes place. He wishes to destroy the Canvas and everyone in it in an attempt to give his family closure and put his soul to rest.",
				"sentence":"Our Whole World Carries The Burden Of Your Family's Grief.",
				"skills": [
					{
						"name": "Angel's Eyes",
						"description": "Deals extreme Physical damage (8 hits). Gain 1 additional Perfection status effect per hit. Applies Aureole to Verso, reviving him if he dies.",
						"costAP": 3,
						"gradient_charge":true,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/angels-eyes-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Ascending Assault",
						"description": "Deals low single target damage (1 hit). Uses weapon's element. Increase damage at each cast.",
						"description_2": "S-rank : Costs 2 AP.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/ascending-assault-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Assault Zero",
						"description": "Critical Hits generate 1 additional Perfection status effect.",
						"description_2": "B-rank : Increased damage.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/assault-zero-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Berserk Slash",
						"description": "Deals medium single target Physical damage (3 hits). Damage is increased for each missing health.",
						"description_2": "C-rank : Increased damage.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/berserk-slash-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Blitz",
						"description": "Deals low single target Physical damage (1 hit). Plays a second time. Kills non-boss enemies with less than 10% health.",
						"description_2": "B-rank : Increased damage.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/blitz-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Burden",
						"description": "Removes all Status Effects from all allies and applies them to Verso.",
						"description_2": "Gain 1 rank.",
						"costAP": 1,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/burden-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Defiant Strike",
						"description": "Deals high single target Physical damage (2 hits) that applies Mark status effect. Costs 30% of current Health.",
						"description_2": "B-rank : Increased damage.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/defiant-strike-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "End Bringer",
						"description": "Deals extreme single target Physical damage (6 hits). Increased damage if the target is Stunned.",
						"description_2": "A-rank : Can reapply stun.",
						"costAP": 9,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/end-bringer-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Follow Up",
						"description": "Deals medium single target Light damage (1 hit). Damage increased for each Free Aim shot this turn, up to 10 times.",
						"description_2": "S-rank : Costs 2 AP.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/follow-up-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "From Fire",
						"description": "Deals medium single target damage (3 hits). Uses weapon's element. Heals self by 20% Health if the target Burns.",
						"description_2": "B-rank : Increased damage.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/from-fire-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Leadership",
						"description": "Reduces current Rank. Gives 2-4 AP to other allies.",
						"description_2": "C-rank : +1 more AP to other allies.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/leadership-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Light Holder",
						"description": "Deals medium single target Light damage (5 hits). At completion, gains 1 Rank.",
						"description_2": "A-rank : +2 AP.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/light-holder-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Marking Shot",
						"description": "Deals low single target damage (1 hit). Uses weapon's element. Applies Mark status effect.",
						"description_2": "C-rank : Increased damage.",
						"costAP": 2,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/marking-shot-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Overload",
						"description": "Increases Rank and refills all AP but sets self-Health to 1.",
						"costAP": 0,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/overload-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Paradigm Shift",
						"description": "Deals low Physical single target damage (3 hits) and gives 1-3 AP back.",
						"description_2": "C-rank : +1 AP.",
						"costAP": 1,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/paradigm-shift-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Perfect Break",
						"description": "Deals very high single target Light damage (1 hit). Can Break. Rank S-rank on Break.",
						"description_2": "B-rank : Costs 5 AP.",
						"costAP": 7,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/perfect-break-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Perfect Recovery",
						"description": "Recovers 50% Health and dispels Status Effects. Gives 0-2 Perfection.",
						"description_2": "B-rank : Increased heal to 100% Health.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/perfect-recovery-verso-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					},
					{
						"name": "Phantom Stars",
						"description": "Deals extreme Light damage to all enemies (5 hits). Can Break.",
						"description_2": "S-rank : Costs 5 AP.",
						"costAP": 9,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/phantom-stars-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Powerful",
						"description": "Applies Powerful to 1-3 Allies, increasing damage they deal for 3 turns. Gives 0-2 Perfection.",
						"description_2": "A-rank : Duration increased to 5 turns.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/powerful-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Purification",
						"description": "Deals single target medium Light damage (2 hits). Dispels self Status Effects.",
						"description_2": "B-rank : Increased damage",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/purification-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Quick Strike",
						"description": "Deals low single target Physical damage (1 hit).",
						"costAP": 2,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/quick-strike-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Radiant Slash",
						"description": "Deals low Light damage to all enemies (1 hit). Can Break.",
						"description_2": "D-rank : Gives more Perfection.",
						"costAP": 2,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/radiant-slash-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Sabotage",
						"description": "Deals medium Physical damage to all enemies (1 hit). Applies Mark status effect.",
						"costAP": 1,
						"gradient_charge":true,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sabotage-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Speed Burst",
						"description": "Deals high single target Light damage (5 hits). Damage increased by Speed difference with the target.",
						"description_2": "C-rank : Increased damage",
						"costAP": 6,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/speed-burst-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Steeled Strike",
						"description": "After 1 turn, deals extreme single target Physical damage (13 hits). Interrupted if any damage taken.",
						"description_2": "S-rank : Increased damage",
						"costAP": 9,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/steeled-strike-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Striker",
						"description": "Deals high single target Physical damage (1 hit). Can Break.",
						"costAP": 2,
						"gradient_charge":true,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/striker-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Strike Storm",
						"description": "Deals very high single target damage (5 hits). Uses weapon's element. Critical Hits generate 2 additional Perfection.",
						"description_2": "C-rank : Increased damage",
						"costAP": 7,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/strike-storm-verso-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					}
				],
				"weapons": [
					{
						"name": "Abysseram",
						"element": "Physical",
						"power": 3228,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Defense",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "50% increased damage on Rank D. No damage increase on other ranks.",
							"Lvl10": "50% increased Base Attack damage.",
							"Lvl20": "On Rank D, recover 20% Health with Base Attack."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/abyseram_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Blodam",
						"element": "Light",
						"power": 3487,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Perfection is now based on current Health. Gain 1 Rank every 20% missing Health.",
							"Lvl10": "20% increased Light damage with Skills.",
							"Lvl20": "+1 AP on Rank Up."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/blodam_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Chevalam",
						"element": "Physical",
						"power": 3067,
						"attributes": [
							{
								"name": "Agility",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Start battle at Rank S, but can't be Healed or gain Shields.",
							"Lvl10": "20% increased damage for each consecutive turn without taking damage. Can stack up to 5 times.",
							"Lvl20": "Apply Rush on Rank S."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/chevalam_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Confuso",
						"element": "Light",
						"power": 3067,
						"attributes": [
							{
								"name": "Agility",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Light damage can Burn on Critical hits.",
							"Lvl10": "Apply 3 Burn instead of Mark.",
							"Lvl20": "Increase Burn damage by 50% per Rank, up to 300% on Rank S."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/confuso_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Contorso",
						"element": "Lightning",
						"power": 2841,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Switch to Rank S on Break. Base Attack can Break.",
							"Lvl10": "100% Critical Chance on Rank S.",
							"Lvl20": "Triggers a lightning strike on Critical hits."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/contorson_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Corpeso",
						"element": "Fire",
						"power": 3648,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Base Attack applies 2 Burn stack per Rank.",
							"Lvl10": "+1 AP on Rank Up.",
							"Lvl20": "Increase Burn damage by 50% per Rank, up to 300% on Rank S."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/corpeso_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Cruleram",
						"element": "Ice",
						"power": 3454,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Don't lose Rank when taking damage from Powerless enemies.",
							"Lvl10": "+1 Perfection on hitting a Powerless enemy.",
							"Lvl20": "Apply Powerless on Counterattack."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/crueleram_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Cultam",
						"element": "Dark",
						"power": 3132,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "No Perfection loss on damage taken. Perfection is instead lost on being Healed.",
							"Lvl10": "Gain 2 AP on Counterattack.",
							"Lvl20": "Gain 1 Rank on Counterattack."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/cultam_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Danseso",
						"element": "Fire",
						"power": 2970,
						"attributes": [
							{
								"name": "Agility",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Base attack gives 1 Perfection per Burn on target.",
							"Lvl10": "While Powerful, 20% chance to Burn on hit.",
							"Lvl20": "+1 AP on Rank Up."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/danseso_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Delaram",
						"element": "Light",
						"power": 3390,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Start battle on Rank B, but 50% Health.",
							"Lvl10": "Recover 15% Health on Base Attack.",
							"Lvl20": "Apply Powerful on Rank B."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/delaram_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Demonam",
						"element": "Light",
						"power": 2809,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Casting a Light Skill increases damage of next Physical Skill cast by 50% and vice versa.",
							"Lvl10": "20% increased Physical damage with Skills.",
							"Lvl20": "Dealing Light damage with a Skill recovers 3% Health."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/demonam_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Dreameso",
						"element": "Physical",
						"power": 3067,
						"attributes": [
							{
								"name": "Agility",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Gain 1 Rank on Counterattack",
							"Lvl10": "50% increased Counterattack damage.",
							"Lvl20": "Gain 2 AP on Counterattack."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/dreameso-verso-gustave-weapon-clair-obscur-expedition-33-wiki-guide.png"
					},
					{
						"name": "Dualiso",
						"element": "Lightning",
						"power": 1776,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Defense",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Play again after a Base Attack.",
							"Lvl10": "50% increased Base Attack damage.",
							"Lvl20": "Base Attack gives 4 Perfection."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/dualim_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Gaulteram",
						"element": "Earth",
						"power": 3261,
						"attributes": [
							{
								"name": "Agility",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "When hit, lose 1 Perfection instead of 1 rank.",
							"Lvl10": "Apply Rush on Rank S",
							"Lvl20": "Gain 2 Perfection on turn start."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/gaulteram_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Gesam",
						"element": "Physical",
						"power": 3228,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Convert Light damage Skills to Physical damage.",
							"Lvl10": "20% increased Physical damage with Skills.",
							"Lvl20": "-1 AP cost for Physical Skills."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/gesam_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Glaceso",
						"element": "Ice",
						"power": 2873,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "+1 Perfection on Critical hit.",
							"Lvl10": "Self-Heal by 2% Health on dealing a Critical hit.",
							"Lvl20": "Counterattack is always a Critical hit."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/glaceso_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Lanceram",
						"element": "Physical",
						"power": 3713,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Rank can't be lower than C.",
							"Lvl10": "Base Attack gives 4 Perfection.",
							"Lvl20": "Parrying gives 2 Perfection instead of 1."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/lanceram_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Liteso",
						"element": "Physical",
						"power": 3551,
						"attributes": [
							{
								"name": "Defense",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Base Attack consumes all Shields to deal 100% increased damage per Shield.",
							"Lvl10": "+1 Shield on Counterattack.",
							"Lvl20": "Base Attack gives 4 Perfection."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/reacheaso_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Noahram",
						"element": "Physical",
						"power": 2260,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "N/A",
							"Lvl10": "N/A",
							"Lvl20": "N/A"
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/default_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Nosaram",
						"element": "Physical",
						"power": 3551,
						"attributes": [
							{
								"name": "Agility",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Double Perfection gained on Free Aim shots.",
							"Lvl10": "Free Aim shots break 2 Shields.",
							"Lvl20": "50% increased Free Aim damage."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/nosaram_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Sakaram",
						"element": "Physical",
						"power": 2938,
						"attributes": [
							{
								"name": "Agility",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Can't lose Perfection. No damage increase from Rank.",
							"Lvl10": "50% increased Base Attack damage.",
							"Lvl20": "Base Attack gives 4 Perfection."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sakaram_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Seeram",
						"element": "Light",
						"power": 3713,
						"attributes": [
							{
								"name": "Vitality",
								"value": "C"
							},
							{
								"name": "Agility",
								"value": "B"
							}
						],
						"passiveEffects": {
							"Lvl4": "-1 to all Perfection gain but can't reach Rank S.",
							"Lvl10": "Base Attack gives 4 Perfection.",
							"Lvl20": "20% increased Light damage with Skills."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/seeram_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Simoso",
						"element": "Light",
						"power": 3228,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "An ethereal Sword deals Light damage on any damage dealt with Skills.",
							"Lvl10": "20% chance to apply Burn on dealing Light damage.",
							"Lvl20": "Can't die if at least Rank A."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/simoso_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Sireso",
						"element": "Physical",
						"power": 2583,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Bonus damage from Perfection applies to all allies at half value. Bonus damage no longer applies to Verso.",
							"Lvl10": "Perfection gained is increased by 1 while Powerful",
							"Lvl20": "Support Skills cost 1 less AP."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sireso_gustave_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Tireso",
						"element": "Earth",
						"power": 3713,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Defense",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Gain 1 Rank on applying Mark.",
							"Lvl10": "Mark an enemy on Base Attack.",
							"Lvl20": "Apply Powerless on Marking an enemy."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/tireso-verso-weapon-clair-obscur-expedition-33-wiki-guide.png"
					},
					{
						"name": "Verleso",
						"element": "Physical",
						"power": 3454,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "N/A",
							"Lvl10": "N/A",
							"Lvl20": "N/A"
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/default_gustave_weapon_expedition_33_wiki_guide.png"
					}
				]
			},
			{
				"name": "Monoco",
				"firstPortrait":"https://expedition33.wiki.fextralife.com/file/Expedition-33/monoco-character-portrait-clair-obscur-expedition-33-wiki-guide-250px.png",
				"secondPortrait":"https://static.wixstatic.com/media/98aef2_4ae141efaf924d668c71b5f445e2d28e~mv2.png/v1/fill/w_739,h_775,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Monoco.png",
				"description": "Monoco is a Gestral, a group of friendly beings who enjoy the thrill of battle and view competition as a form of meditation. As one of the few Gestrals who speak the human language, Monoco has adopted a scholarly demeanour which belies a bloodthirsty spirit. Though Gestrals are untouched by the Paintress, the prospect of combat entices Monoco to join the Expedition.",
				"sentence":"My what lovely feet.",
				"skills": [
					{
						"name": "Abbest Wind",
						"description": "Deals low single target Physical damage (1 hit). Plays a second turn.",
						"description_2": "Agile Mask: Costs 0 AP.",
						"costAP": 2,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/abbest-wind-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Aberration Light",
						"description": "Deals high Light damage to all enemies (2 hits). Applies 4 Burn per hit.",
						"description_2": "Agile Mask: Applies 2 more burn per hit.",
						"costAP": 7,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/aberration-light-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Ballet Charm",
						"description": "Deals low single target Light damage (1 hit). Applies Powerless to the target for 3 turns.",
						"description_2": "Caster Mask: Increased damage.",
						"costAP": 2,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/ballet-charm-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Benisseur Mortar",
						"description": "Deals medium single target Ice damage (3 hits). Changes to Almighty Mask if target is Marked.",
						"description_2": "Caster Mask: Increased damage.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/benisseur-mortrar-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Braseleur Smash",
						"description": "Deals medium single target Fire damage (2 hits). Applies 3 Burn.",
						"description_2": "Balanced Mask: Increased damage.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/braseleur-smash-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Break Point",
						"description": "Deals extreme single target damage (1 hit). Uses weapon's element.",
						"description_2": "Fills and Breaks the target's Break Bar.",
						"costAP": 3,
						"gradient_charge":true,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/break-point-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Boucheclier Fortify",
						"description": "Applies Shell to 1–3 allies for 3 turns.",
						"description_2": "Heavy Mask: Also applies 1 Shield.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/bouchclier-fortify-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Bruler Bash",
						"description": "Deals medium single target Physical damage (3 hits). Can Break.",
						"description_2": "Caster Mask: Increased damage.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/bruler-bash-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Chalier Combo",
						"description": "Deals high single target Physical damage (6 hits). Interrupted if failed.",
						"description_2": "Balanced Mask: Increased damage.",
						"costAP": 7,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/chalier-combo-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Chapelier Slash",
						"description": "Deals high Physical damage to all enemies (3 hits). Applies Mark.",
						"description_2": "Agile Mask: Increased damage.",
						"costAP": 7,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/chapelier-slash-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Chevaliere Ice",
						"description": "Deals high Ice damage to all enemies (3 hits). Applies Slow for 3 turns.",
						"description_2": "Balanced Mask: Increased damage.",
						"costAP": 6,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/chevaliere-ice-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Chevaliere Piercing",
						"description": "Deals single target Physical damage through Shields (6 hits). Damage increased for each Shield on target.",
						"description_2": "Agile Mask: Increased damage.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/chevaliere-piercing-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Chevaliere Thrusts",
						"description": "Deals high Physical damage to all enemies (3 hits). Critical hits deal double damage.",
						"description_2": "Heavy Mask: Increased damage.",
						"costAP": 7,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/chevaliere-thrusts-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Clair Enfeeble",
						"description": "Deals medium Light damage to all enemies (1 hit). Applies Powerless for 3 turns.",
						"description_2": "Balanced Mask: Increased damage.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/clair-enfeeble-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Contorsionniste Blast",
						"description": "Deals medium Physical damage to all enemies (1 hit). Heals all allies by 10% Health for each enemy hit.",
						"description_2": "Balanced Mask: Increased damage.",
						"costAP": 6,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/contorsionniste-blast-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Creation Void",
						"description": "Deals extreme Void damage to random targets (3 hits). More damage if the same target is hit multiple times.",
						"description_2": "Caster Mask: Increased damage.",
						"costAP": 9,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/creation-void-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Cruler Barrier",
						"description": "Applies 1–2 Shields to the target.",
						"description_2": "Heavy Mask: Gives 2 AP to the target.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/cruler-barrier-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Cultist Blood",
						"description": "Deals medium Dark damage to all enemies (3 hits). Sacrifices 90% Health to increase damage.",
						"description_2": "Heavy Mask: Increased damage.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/cultist-blood-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Cultist Slashes",
						"description": "Deals medium single target Dark damage (3 hits). Deals more damage the less Health Monoco has.",
						"description_2": "Agile Mask: Increased damage.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/cultist-slashes-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Danseuse Waltz",
						"description": "Deals high single target Fire damage (3 hits). Deals more damage against Burning targets.",
						"description_2": "Balanced Mask: Increased damage.",
						"costAP": 8,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/danseuse-waltz-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Demineur Thunder",
						"description": "Deals low single target Lightning damage (1 hit). Deals extra Break damage.",
						"description_2": "Caster Mask: Increased Break damage.",
						"costAP": 2,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/demineur-thunder-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Duallist Storm",
						"description": "Deals extreme single target Physical damage (4 hits). Can Break.",
						"description_2": "Almighty Mask: Increased damage.",
						"costAP": 8,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/duallist-storm-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Echassier Stabs",
						"description": "Deals medium single target Physical damage (2 hits). Second hit applies Mark.",
						"description_2": "Agile Mask: Increased damage.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/echassier-stabs-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Eveque Spear",
						"description": "Deals high single target Earth damage (1 hit). Applies Powerless for 3 turns.",
						"description_2": "Heavy Mask: Increased damage.",
						"costAP": 6,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/eveque-spear-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Gault Fury",
						"description": "Deals low single target Physical damage (4 hits). Applies Mark.",
						"description_2": "Balanced Mask: Increased damage.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/gault-fury-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Glaise Earthquakes",
						"description": "Deals medium Earth damage to all enemies (3 hits). Applies Powerful to self.",
						"description_2": "Heavy Mask: Applies Powerfull to all allies.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/glaise-earthquakes-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Grosse Tete Whack",
						"description": "Deals high single target Physical damage (5 hits). Applies Defenseless for 3 turns.",
						"description_2": "Heavy Mask: Increased damage.",
						"costAP": 6,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/grosse-tete-whack-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Hexga Crush",
						"description": "Deals medium single target Earth damage (2 hits). Applies Defenseless for 3 turns.",
						"description_2": "Heavy Mask: Increased damage.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/hexga-crush-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Jar Lampstorm",
						"description": "Deals medium Physical damage to all enemies (4 hits).",
						"description_2": "Heavy Mask: Increased damage.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/jar-lampstorm-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Lampmaster Light",
						"description": "Deals high Light damage to all enemies (1 hit). Increased damage at each cast.",
						"description_2": "Almighty Mask: Increased damage.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/lampaster-light-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Lancelier Impale",
						"description": "Deals low single target Ice damage (1 hit). Slows the target for 3 turns.",
						"description_2": "Agile Mask: Increased damage.",
						"costAP": 2,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/lancelier-impale-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Luster Slices",
						"description": "Deals low single target Physical damage (3 hits). Applies Rush to self for 3 turns.",
						"description_2": "Agile Mask: Increased damage.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/luster-slices-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Mighty Strike",
						"description": "Deals double damage if the target is Stunned.",
						"description_2": "Goes to Almighty Mask.",
						"costAP": 1,
						"gradient_charge":true,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/mighty-strike-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Moissonneuse Vendange",
						"description": "Deals high single target Physical damage (3 hits). Can Break.",
						"description_2": "Balanced Mask: Increased damage.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/moissonneuse-vendange-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Obscur Sword",
						"description": "Deals high single target Dark damage (5 hits). Deals more damage against Powerless targets.",
						"description_2": "Heavy Mask: Increased damage.",
						"costAP": 6,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/obscur-sword-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Orphelin Cheers",
						"description": "Applies Powerful to 1–3 Allies.",
						"description_2": "Caster Mask: Also gives 3 AP to targets.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/orphelin-cheers-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Pelerin Heal",
						"description": "Applies Regen to all allies.",
						"description_2": "Caster Mask: Also Heals 40% Health.",
						"costAP": 5,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/pelerin-heal-monoco-skill-clair-obscur-expedition-33-wiki-guide-100px-min.png"
					},
					{
						"name": "Portier Crash",
						"description": "Deals high Physical damage to all enemies (1 hit). Can Break.",
						"description_2": "Heavy Mask: Increased damage.",
						"costAP": 8,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/portier-crash-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Potier Energy",
						"description": "Gives 1–3 AP to all allies.",
						"description_2": "Caster Mask: Gives 1 additional AP.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/potier-energy-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Ramasseur Bonk",
						"description": "Deals low single target Dark damage (1 hit). Can Break.",
						"description_2": "Agile Mask: Fills 20% of the target's Break Bar.",
						"costAP": 2,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/ramasseur-bonk-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Rocher Hammering",
						"description": "Deals medium single target Physical damage (4 hits). Can Break.",
						"description_2": "Heavy Mask: Increased damage.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/rocher-hammering-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Sakapatate Estoc",
						"description": "Deals low single target Lightning damage (1 hit). Deals more damage if the target is Stunned.",
						"description_2": "Balanced Mask: Increased damage.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sakapatate-estoc-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Sakapatate Explosion",
						"description": "Deals medium Lightning damage to random enemies (3 hits). Critical hits trigger an additional hit.",
						"description_2": "Caster Mask: Increased damage.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sakapatate-explosion-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Sakapatate Fire",
						"description": "Deals extreme Fire damage to all enemies (3 hits). Applies 3 Burn per hit.",
						"description_2": "Almighty Mask: Increased damage.",
						"costAP": 9,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sakapatate-fire-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Sakapatate Slam",
						"description": "Deals high Physical damage to all enemies (1 hit). Increased damage to Marked targets.",
						"description_2": "Heavy Mask: Increased damage.",
						"costAP": 7,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sakapatate-slam-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Sanctuary",
						"description": "Gives 2 Shields and applies Regen to all allies for 3 turns.",
						"costAP": 2,
						"gradient_charge":true,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sanctuary-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Sapling Absorption",
						"description": "Deals high Dark damage (3 hits). Recovers 5% Health on hit.",
						"description_2": "Caster Mask: Increased damage and double Heal.",
						"costAP": 6,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sapling-absorption-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Stalact Punches",
						"description": "Deals medium single target Ice damage (4 hits). High Break damage.",
						"description_2": "Heavy Mask: Increased damage.",
						"costAP": 4,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/stalact-punches-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					},
					{
						"name": "Troubadour Trumpet",
						"description": "Applies a random buff to 1–3 allies.",
						"description_2": "Caster Mask: Applies a second random buff.",
						"costAP": 3,
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/troubadour-trumpet-monoco-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png"
					}
				],
				"weapons": [
					{
						"name": "Ballaro",
						"element": "Light",
						"power": 3067,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Reverse Bestial Wheel Order.",
							"Lvl10": "Using an Upgraded Skill gives 1 AP to all other allies.",
							"Lvl20": "Almighty Mask gives 2 AP to all allies."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sirenaro_monoco_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Boucharo",
						"element": "Fire",
						"power": 3228,
						"attributes": [
							{
								"name": "Agility",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Start battle in Agile Mask.",
							"Lvl10": "Agile Mask applies Rush for 3 turns.",
							"Lvl20": "+50% Critical Chance while in Agile Mask."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/chapero_monoco_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Brumaro",
						"element": "Physical",
						"power": 3390,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Agility",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Replay instantly when in Almighty Mask.",
							"Lvl10": "+3 AP when in Almighty Mask.",
							"Lvl20": "Revive instantly with full Health if dead while in Almighty Mask. Once per Battle."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/brumaro_monoco_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Chromaro",
						"element": "Ice",
						"power": 3390,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Start battle in Caster Mask.",
							"Lvl10": "Caster Mask applies Regen for 3 turns.",
							"Lvl20": "Skills cost 1 less AP while in Caster Mask."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/chromaro_monoco_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Fragaro",
						"element": "Lightning",
						"power": 4197,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Free Aim shots spin the Bestial Wheel to a random value.",
							"Lvl10": "Free Aim shots deal 100% more damage with all Masks except Almighty.",
							"Lvl20": "100% Critical Chance while in Almighty Mask."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/reacharo_monoco_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Grandaro",
						"element": "Earth",
						"power": 3551,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Defense",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Start battle in Heavy Mask.",
							"Lvl10": "Heavy Mask applies Shell for 3 turns.",
							"Lvl20": "+1 AP per hit taken."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/grandaro_monoco_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Joyaro",
						"element": "Lightning",
						"power": 3713,
						"attributes": [
							{
								"name": "Defense",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Start battle in Almighty Mask.",
							"Lvl10": "20% increased damage for each consecutive turn without taking damage. Can stack up to 5 times.",
							"Lvl20": "Break damage is doubled while in Almighty Mask."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/joyaro_monoco_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Monocaro",
						"element": "Physical",
						"power": 2744,
						"attributes": [
							{
								"name": "Agility",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Start battle in Balanced Mask.",
							"Lvl10": "Balanced Mask applies Powerful for 3 turns.",
							"Lvl20": "Critical hits deal 30% more damage while in Balanced Mask."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/default_monoco_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Nusaro",
						"element": "Dark",
						"power": 4197,
						"attributes": [
							{
								"name": "Vitality",
								"value": "A"
							},
							{
								"name": "Agility",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "Parries increase the Bestial Wheel by 1. Taking damage resets the Bestial Wheel.",
							"Lvl10": "Upgraded Skills deal 30% more damage.",
							"Lvl20": "+1 AP on Mask change."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/reachearo_monoco_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Sidaro",
						"element": "Dark",
						"power": 3035,
						"attributes": [
							{
								"name": "Might",
								"value": "A"
							},
							{
								"name": "Luck",
								"value": "S"
							}
						],
						"passiveEffects": {
							"Lvl4": "30% increased damage per Upgraded Skill used. Resets upon using a non-Upgraded Skill.",
							"Lvl10": "Base Attack spins the Bestial Wheel to a random value.",
							"Lvl20": "Using an Upgraded Skill gives 1 AP to all other allies."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/sidaro_monoco_weapon_expedition_33_wiki_guide.png"
					},
					{
						"name": "Urnaro",
						"element": "Earth",
						"power": 3422,
						"attributes": [
							{
								"name": "Vitality",
								"value": "S"
							},
							{
								"name": "Luck",
								"value": "A"
							}
						],
						"passiveEffects": {
							"Lvl4": "Switch to Almighty Mask on Breaking an enemy.",
							"Lvl10": "Almighty Mask gives 2 AP to all Allies.",
							"Lvl20": "50% increased Break damage."
						},
						"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/urnaro-monoco-weapon-expedition-33-wiki-guide-min.png"
					}
				]
			}
		],	
		"allStatusAndTypes": {
			"damageTypes": [
				"Physical",
				"Light",
				"Dark",
				"Void",
				"Fire",
				"Ice",
				"Earth",
				"Lightning"
			],
			"statusEffects": [
				{
					"name": "Freeze",
					"description": "Prevents the Character from taking their turn, which is immediately removed after the Character takes damage."
				},
				{
					"name": "Stun",
					"description": "The Character is prevented from taking their turn."
				},
				{
					"name": "Inverted",
					"description": "The Character will take damage when healed."
				},
				{
					"name": "Mark",
					"description": "The Character's damage taken is increased by 50%, only affects one instance of damage."
				},
				{
					"name": "Charm",
					"description": "The Character is prevented from taking a turn and will automatically attack one of their allies."
				},
				{
					"name": "Blight",
					"description": "The Character will have reduced maximum Health, with each stack applying 10% maximum Health reduction."
				},
				{
					"name": "Berserk",
					"description": "The Character has their damage increased every turn, with each stack applying 5% increased damage for a maximum of 12 stacks."
				},
				{
					"name": "Cursed",
					"description": "The Character will die at the end of the effect's duration."
				},
				{
					"name": "Bound",
					"description": "The Character cannot use the Dodge mechanic."
				},
				{
					"name": "Exhausted",
					"description": "The Character cannot gain AP from any source."
				},
				{
					"name": "Dizzy",
					"description": "The Character will have a harder time aiming."
				},
				{
					"name": "Silence",
					"description": "The Character will not be able to use any Skill."
				},
				{
					"name": "Rage",
					"description": "The Character will take two turns consecutively."
				},
				{
					"name": "Precision",
					"description": "N/A"
				},
				{
					"name": "Perfection",
					"description": "N/A"
				},
				{
					"name": "Shield",
					"description": "An enemy with a Shield will be protected from one instance of damage."
				},
				{
					"name": "Burn",
					"description": "Deals damage at the beginning of the Character’s turn."
				}
			],
			"buffs": [
				{
					"name": "Regen",
					"description": "Heals 10% of the Character's health during their turn."
				},
				{
					"name": "Powerful",
					"description": "Increases damage by 25%."
				},
				{
					"name": "Rush",
					"description": "Increases Speed by 33%."
				},
				{
					"name": "Shell",
					"description": "Reduces damage taken by 20%."
				}
			],
			"debuffs": [
				{
					"name": "Powerless",
					"description": "Reduces damage dealt by 20%."
				},
				{
					"name": "Slow",
					"description": "Reduces Speed by 25%."
				},
				{
					"name": "Defenseless",
					"description": "Increases damage received by 25%."
				}
			]
		},
		"luminasPictos": [
			{
				"name": "Accelerating Heal",
				"effect": "Healing an ally also applies Rush for 1 turn",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/7-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Accelerating Last Stand",
				"effect": "Gain Rush if fighting alone.",
				"lumina_points": 3,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/4-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Accelerating Shots",
				"effect": "20% change to gain Rush on Free Aim shot.",
				"lumina_points": 3,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/5-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Accelerating Tint",
				"effect": "Healing Tints also apply Rush",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Aegis Revival",
				"effect": "+1 Shield on being revived.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/4-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Anti-Blight",
				"effect": "Immune to Blight.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/6-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Anti-Burn",
				"effect": "Immune to Burn.",
				"lumina_points": 15,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/1-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Anti-Charm",
				"effect": "Immune to Charm.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/1-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Anti-Freeze",
				"effect": "Immune to Freeze.",
				"lumina_points": 15,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/8-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Anti-Stun",
				"effect": "Immune to Stun.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/4-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "At Death's Door",
				"effect": "Deal 50% more damage if Health is below 10%.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Attack Lifesteal",
				"effect": "Recover 15% Health on Base Attack.",
				"lumina_points": 15,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/7-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Augmented Aim",
				"effect": "50% increased Free Aim damage.",
				"lumina_points": 3,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/5-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Augmented Attack",
				"effect": "50% increased Base Attack damage.",
				"lumina_points": 7,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/6-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Augmented Counter I",
				"effect": "25% increased Counterattack damage.",
				"lumina_points": 3,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Augmented Counter II",
				"effect": "50% increased Counterattack damage.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/10-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Augmented Counter III",
				"effect": "75% increased Counterattack damage.",
				"lumina_points": 7,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/9-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Augmented First Strike",
				"effect": "50% increased damage on the first hit. Once per battle.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/9-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Auto Death",
				"effect": "Kill self on battle start.",
				"lumina_points": 1,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/8-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Auto Powerful",
				"effect": "Apply Powerful for 3 turns on battle start.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/5-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Auto Regen",
				"effect": "Apply Regen for 3 turns on battle start.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/10-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Auto Rush",
				"effect": "Apply Rush for 3 turns on battle start.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Auto Shell",
				"effect": "Apply Shell for 3 turns on battle start.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/7-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Base Shield",
				"effect": "+1 Shield if not affected by any Shield on turn start.",
				"lumina_points": 20,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/7-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Beneficial Contamination",
				"effect": "+2 AP on applying a Status Effect. Once per turn.",
				"lumina_points": 15,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/8-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Break Specialist",
				"effect": "Break damage is increased by 50%, but base damage is reduced by 20%.",
				"lumina_points": 1,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/8-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Breaker",
				"effect": "25% increased Break damage.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/8-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Breaking Attack",
				"effect": "Base Attack can Break.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/7-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Breaking Burn",
				"effect": "25% increased Break damage on Burning enemies.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/10-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Breaking Counter",
				"effect": "50% increased Break damage on Counterattack.",
				"lumina_points": 3,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/5-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Breaking Death",
				"effect": "Fully charge enemy's Break Bar on death.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/5-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Breaking Shots",
				"effect": "50% increased Break damage with Free Aim Shots.",
				"lumina_points": 1,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/7-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Breaking Slow",
				"effect": "25% increased Break damage against Slowed enemies.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/5-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Burn Affinity",
				"effect": "25% increased damage on Burning Targets.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Burning Break",
				"effect": "Apply 3 Burn stacks on Breaking a target.",
				"lumina_points": 3,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/11-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Burning Death",
				"effect": "Apply 3 Burn to all enemies on Death.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/5-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Burning Mark",
				"effect": "Apply Burn on hitting a Marked enemy.",
				"lumina_points": 15,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/10-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Burning Shots",
				"effect": "20% chance to Burn on Free Aim shot.",
				"lumina_points": 3,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/5-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Charging Alteration",
				"effect": "+10% of a Gradient Charge on applying a Buff. Once per turn.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Charging Attack",
				"effect": "+15% of a Gradient Charge on Base Attack.",
				"lumina_points": 7,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/1-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Charging Burn",
				"effect": "+20% of a Gradient Charge on applying Burn. Once per turn.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/8-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Charging Counter",
				"effect": "+20% of a Gradient Charge on Counterattack.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/4-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Charging Critical",
				"effect": "+20% of a Gradient Charge on Critical Hit. Once per turn.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/6-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Charging Mark",
				"effect": "+20% of a Gradient Charge on hitting a Marked target. Once per turn.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/8-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Charging Stun",
				"effect": "+5% of a Gradient Charge on hitting a Stunned enemy.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/1-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Charging Tint",
				"effect": "+5% of a Gradient Charge on using an item.",
				"lumina_points": 2,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/4-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Charging Weakness",
				"effect": "+15% of a Gradient Charge on hitting a Weakness. Once per turn.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Cheater",
				"effect": "Always play twice in a row.",
				"lumina_points": 40,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Cleansing Tint",
				"effect": "Healing Tints also remove all Status Effects from the target.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/9-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Clea's Life",
				"effect": "On turn start, if no damage taken since last turn, recover 100% Health.",
				"lumina_points": 30,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/1-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Combo Attack I",
				"effect": "Base Attack has 1 extra hit.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/4-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Combo Attack II",
				"effect": "Base Attack has 1 extra hit.",
				"lumina_points": 20,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/9-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Combo Attack III",
				"effect": "Base Attack has 1 extra hit.",
				"lumina_points": 30,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/4-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Confident",
				"effect": "Take 50% less damage, but can't be Healed.",
				"lumina_points": 20,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/4-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Confident Fighter",
				"effect": "30% increased damage, but can't be Healed.",
				"lumina_points": 15,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/7-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Critical Break",
				"effect": "25% increased Break damage on Critical Hits.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/7-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Critical Burn",
				"effect": "25% increased Critical Chance on Burning enemies.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/4-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Critical Moment",
				"effect": "50% increased Critical Chance if Health is below 30%.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/4-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Critical Stun",
				"effect": "100% on Critical Chance on hitting a Stunned target.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/9-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Critical Vulnerability",
				"effect": "25% increased Critical Chance on Defenseless enemies.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/4-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Critical Weakness",
				"effect": "25% increased Critical Chance on Weakness.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/7-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Dead Energy I",
				"effect": "+3 AP on killing an enemy.",
				"lumina_points": 2,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/4-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Dead Energy II",
				"effect": "+3 AP on killing an enemy.",
				"lumina_points": 2,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/5-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Death Bomb",
				"effect": "On Death, deal damage to all enemies.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/8-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Defensive Mode",
				"effect": "On receiving damage, consume 1 AP to take 30% less damage, if possible.",
				"lumina_points": 1,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/8-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Dodger",
				"effect": "Gain 1 AP on Perfect Dodge. Once per turn.",
				"lumina_points": 1,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Double Burn",
				"effect": "On applying a Burn stack, apply a second one.",
				"lumina_points": 30,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/7-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Double Mark",
				"effect": "Mark requires 1 more hit to be removed.",
				"lumina_points": 20,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/7-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Draining Cleanse",
				"effect": "Consume 1 AP to prevent Status Effects application, if possible.",
				"lumina_points": 15,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/5-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Effective Heal",
				"effect": "Double all Heals received.",
				"lumina_points": 30,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/6-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Effective Support",
				"effect": "+2 AP on using an item.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/8-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Empowering Attack",
				"effect": "Gain Powerful for 1 turn on Base Attack.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/4-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Empowering Break",
				"effect": "Gain Powerful on Breaking a target.",
				"lumina_points": 3,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/8-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Empowering Dodge",
				"effect": "5% increased damage for each consecutive successful Dodge. Can stack up to 10 times.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/10-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Empowering Last Stand",
				"effect": "Gain Powerful if fighting alone.",
				"lumina_points": 3,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Empowering Parry",
				"effect": "Each successful Parry increases damage by 5% until end of the following turn. Taking any damage removes this buff.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/7-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Empowering Tint",
				"effect": "Healing Tints also apply Powerful.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/5-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energetic Healer",
				"effect": "+2AP on Healing an ally. Once per turn.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/11-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Attack I",
				"effect": "+1 AP on Base Attack.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Attack II",
				"effect": "+1 AP on Base Attack.",
				"lumina_points": 15,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/11-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Break",
				"effect": "+3 AP on Breaking a target.",
				"lumina_points": 3,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/1-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Burn",
				"effect": "+1 AP on applying Burn. Once per turn.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/6-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Cleanse",
				"effect": "Dispel the first negative Status Effect received an gain 2 AP.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Death",
				"effect": "On death, +4 AP to allies.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/10-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Gradient",
				"effect": "+1 AP per Gradient Charge consumed.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Heal",
				"effect": "On Healing an ally, also give 2 AP.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Jump",
				"effect": "+1 AP on Jump Counterattack.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/7-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Pain",
				"effect": "No longer gain AP on Parry. +1AP on getting hit.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Parry",
				"effect": "+1 AP on successful Parry.",
				"lumina_points": 15,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/9-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Powerful",
				"effect": "Give 2 AP on applying Powerful.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/10-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Revive",
				"effect": "+3 AP to all allies when revived.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Rush",
				"effect": "Give 2 AP on applying Rush.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/1-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Shell",
				"effect": "Give 2 AP on applying Shell.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/9-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Shots",
				"effect": "20% chance to gain 1 AP on Free Aim shot.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/10-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Start I",
				"effect": "+1 AP on battle start.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/9-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Start II",
				"effect": "+1 AP on battle start.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/11-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Start III",
				"effect": "+1 AP on battle start.",
				"lumina_points": 15,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Start IV",
				"effect": "+1 AP on battle start.",
				"lumina_points": 20,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/11-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Stun",
				"effect": "+1 AP on hitting a Stunned target with a Skill.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/4-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energising Turn",
				"effect": "+1 AP on turn start.",
				"lumina_points": 20,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/10-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Energy Master",
				"effect": "Every AP gain is increased by 1.",
				"lumina_points": 40,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Enfeebling Attack",
				"effect": "Base Attack applies Powerless for 1 turn.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/5-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Enfeebling Mark",
				"effect": "Marked targets deal 30% less damage.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/6-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Exhausting Power",
				"effect": "50% increased damage if Exhausted.",
				"lumina_points": 2,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/10-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Exposing Attack",
				"effect": "Base Attack applies Defenseless for 1 turn.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Exposing Break",
				"effect": "Apply Defenseless on Break.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/10-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Faster Than Strong",
				"effect": "Always play twice in a row, but deal 50% less damage.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/10-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "First Offensive",
				"effect": "First hit dealt and taken deals 50% more damage.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "First Strike",
				"effect": "Play first.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/10-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Fueling Break",
				"effect": "Breaking a target doubles its Burn amount.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/8-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Full Strength",
				"effect": "25% increased damage on full Health.",
				"lumina_points": 15,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/10-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Glass Canon",
				"effect": "Deal 25% more damage, but take 25% more damage.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/4-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Gradient Break",
				"effect": "+50% of a Gradient Charge on Breaking a target.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/8-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Gradient Breaker",
				"effect": "50% increased Breaking damage with Gradient Attacks.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Gradient Fighter",
				"effect": "+25% increased damage with Gradient Attacks.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/7-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Greater Defenseless",
				"effect": "+15% to Defenseless damage amplification.",
				"lumina_points": 15,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/1-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Greater Powerful",
				"effect": "+15% to Powerful damage increase.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Greater Powerless",
				"effect": "+15% to Powerless damage reduction.",
				"lumina_points": 15,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/11-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Greater Rush",
				"effect": "+25% Rush Speed increase.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/6-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Greater Shell",
				"effect": "+10% to Shell damage reduction.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Greater Slow",
				"effect": "+15% to Slow Speed reduction.",
				"lumina_points": 15,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Healing Boon",
				"effect": "Heal 15% HP on applying a buff.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/1-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Healing Counter",
				"effect": "Recover 25% Health on Counterattack.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/6-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Healing Death",
				"effect": "On death, the rest of the Expedition recover all Health.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Healing Fire",
				"effect": "Recover 25% Health when attacking a Burning target. Once per turn.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Healing Mark",
				"effect": "Recover 25% Health on hitting a Marked enemy. Once per turn.",
				"lumina_points": 20,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/7-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Healing Parry",
				"effect": "Recover 3% Health on Parry.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Healing Share",
				"effect": "Receive 15% of all Heals affecting other characters.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/9-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Healing Stun",
				"effect": "Recover 5% Health on hitting a Stunned target.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/8-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Healing Tint Energy",
				"effect": "Healing Tints also give 1 AP.",
				"lumina_points": 1,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Immaculate",
				"effect": "30% increased damage until a hit is received.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/11-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "In Medias Res",
				"effect": "+3 Shields on Battle Start, but max Health is halved.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/11-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Inverted Affinity",
				"effect": "Apply Inverted on self for 3 turns on battle start. 50% increased damage while Inverted.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Last Stand Critical",
				"effect": "100% Critical Chance while fighting alone.",
				"lumina_points": 3,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/7-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Longer Burn",
				"effect": "Burn duration is increased by 2.",
				"lumina_points": 15,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Longer Powerful",
				"effect": "On applying Powerful, its duration is increased by 2.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Longer Rush",
				"effect": "On applying Rush, its duration is increased by 2.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/4-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Longer Shell",
				"effect": "On applying Shell, its duration is increased by 2.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/11-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Marking Break",
				"effect": "Apply Mark on Break.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/10-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Marking Shots",
				"effect": "20% chance to apply Mark on Free Aim shot.",
				"lumina_points": 3,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/6-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Painted Power",
				"effect": "Damage can exceed 9,999.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/1-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Painter",
				"effect": "Convert all Physical damage to Void damage.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/1-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Perilous Parry",
				"effect": "+1 AP on Parry, but damage received is doubled.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/6-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Piercing Shot",
				"effect": "25% increased Free Aim damage. Free Aim shots ignore Shields.",
				"lumina_points": 2,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/8-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Powered Attack",
				"effect": "On every damage dealt, try to consume 1 AP. If successful, increase damage by 20.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Powerful Heal",
				"effect": "Healing an ally also applies Powerful for 1 turn.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/11-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Powerful Mark",
				"effect": "Gain Powerful on hitting a Marked enemy.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/10-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Powerful on Shell",
				"effect": "Apply Powerful on applying Shell.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Powerful Revive",
				"effect": "Apply Powerful for 3 turns when revived.",
				"lumina_points": 3,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/7-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Powerful Shield",
				"effect": "10% increased damage per Shield Point on self.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/9-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Powerful Shots",
				"effect": "20% chance to gain Powerful on Free Aim shot.",
				"lumina_points": 3,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/9-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Pro Retreat",
				"effect": "Allows Flee to be instantaneous.",
				"lumina_points": 40,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/9-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Protecting Attack",
				"effect": "Gain Shell for 1 turn on Base Attack.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Protecting Death",
				"effect": "On death, allies gain Shell.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/10-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Protecting Heal",
				"effect": "Healing an ally also applies Shell for 1 turn.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/6-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Protecting Last Stand",
				"effect": "Gain Shell if fighting alone.",
				"lumina_points": 3,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Protecting Shots",
				"effect": "20% chance to gain Shell on Free Aim shot.",
				"lumina_points": 3,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Protecting Tint",
				"effect": "Healing Tints also apply Shell.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/11-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Quick Break",
				"effect": "Play again on Breaking a target.",
				"lumina_points": 3,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/7-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Random Defense",
				"effect": "Damage taken is randomly multiplied by a value between 50% and 200%.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Recovery",
				"effect": "Recovers 10% Health on turn start. (Reward for spending Chroma at the Red Woods Nevron quest)",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/5-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Rejuvenating Revive",
				"effect": "Apply Regen for 3 turns when revived.",
				"lumina_points": 3,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/1-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Revive Paradox",
				"effect": "Play immediately when revived.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/10-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Revive Tint Energy",
				"effect": "Revive Tints also give 3 AP.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/5-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Rewarding Mark",
				"effect": "+2 AP on dealing damage to a Marked target. Once per turn.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Roulette",
				"effect": "Every hit has a 50% chance to deal either 50% or 200% of its damage.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/1-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Rush on Powerful",
				"effect": "Apply Rush on applying Powerful.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/4-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Shell On Rush",
				"effect": "Apply Shell on applying Rush.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/10-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "SOS Power",
				"effect": "Apply Powerful when falling below 50% Health.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/4-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "SOS Rush",
				"effect": "Apply Rush when falling below 50% Health.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "SOS Shell",
				"effect": "Apply Shell when falling below 50% Health",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/10-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Second Chance",
				"effect": "Revive with 100% Health. Once per battle.",
				"lumina_points": 40,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/8-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Shared Care",
				"effect": "When healing an ally, also Heal self for 50% of that value.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/6-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Shield Affinity",
				"effect": "30% increased damage while having Shields, but receiving any damage always removes all Shields.",
				"lumina_points": 15,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/4-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Shielding Death",
				"effect": "On death, allies gain 3 Shield points.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Shielding Tint",
				"effect": "Healing Tints also add 2 Shields.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/11-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Shortcut",
				"effect": "Immediately play when falling below 30% Health. Once per battle.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/7-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Slowing Break",
				"effect": "Apply Slow on Break.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/4-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Sniper",
				"effect": "First Free Aim shot each turn deals 200% increased damage and can Break.",
				"lumina_points": 15,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/1-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Solidifying",
				"effect": "+2 Shields when the character's Health falls below 50%. Once per battle.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/7-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Solo Fighter",
				"effect": "Deal 50% more damage if fighting alone.",
				"lumina_points": 1,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/11-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Staggering Attack",
				"effect": "50% increased Break damage on Base Attack.",
				"lumina_points": 1,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/5-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Stay Marked",
				"effect": "50% chance to apply Mark when attacking a Marked target.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/2-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Stun Boost",
				"effect": "30% increased damage on Stunned targets.",
				"lumina_points": 10,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/5-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Survivor",
				"effect": "Survive fatal damage with 1 Health. Once per battle.",
				"lumina_points": 20,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Sweet Kill",
				"effect": "Recover 50% Health on killing an enemy.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/8-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Tainted",
				"effect": "15% increased damage for each Status Effect on self.",
				"lumina_points": 3,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/9-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Teamwork",
				"effect": "10% increased damage while all allies are alive.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "The One",
				"effect": "Max Health is reduced to 1.",
				"lumina_points": 1,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/9-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Time Tint",
				"effect": "Energy Tints also apply Rush.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/6-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Versatile",
				"effect": "After a Free Aim hit, Base Attack damage is increased by 50% for 1 turn.",
				"lumina_points": 5,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/1-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Warming Up",
				"effect": "5% increased damage per turn. Can stack up to 5 times.",
				"lumina_points": 15,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/5-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			},
			{
				"name": "Weakness Gain",
				"effect": "+1AP on hitting an enemy's Weakness. Once per turn.",
				"lumina_points": 3,
				"image": "https://expedition33.wiki.fextralife.com/file/Expedition-33/3-pictos-equipment-clair-obscur-expedition-33-wiki-guide75px.png"
			}
		]
	}


export default Expedition
		