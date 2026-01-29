import { useState, useEffect } from 'react';
import './App.css';

const stops = [
  {
    id: 1,
    name: "Monument à la Gloire de la Résistance",
    location: "Allées Frédéric-Mistral, face à l'ancien siège de la Gestapo",
    intro: "Bienvenue à la chasse au trésor ! Tu commences devant un étrange monticule de gazon avec des mâts métalliques. C'est l'entrée d'un mémorial souterrain.",
    mission: "Entre dans le tunnel de béton brut. Tu vas traverser trois cryptes puis emprunter le « Couloir de l'Espoir » qui passe SOUS l'avenue.",
    riddle: "Dans ce couloir, les ténèbres cachent un œil qui ne s'ouvre qu'une fois par an — le jour anniversaire de la fin de la nuit. Le 19 août à 11h précises, il verse une larme dorée sur une date gravée. Trouve cet œil. Que regarde-t-il ?",
    answer: "Un TUBE DE LUMIÈRE dans le plafond ! Il a été calculé pour que chaque 19 août à 11h (anniversaire de la Libération de Toulouse), un rayon de soleil éclaire directement la plaque commémorative.",
    funFact: "Les architectes ont voulu faire référence à Montségur et aux Cathares, « premiers résistants ». Mais le déplacement de l'axe de la Terre a progressivement déréglé le dispositif depuis 1971...",
    clue: "Tu as émergé des ténèbres dans un jardin bâti sur un ancien couvent. À l'entrée principale, deux géantes veillent — leur peau n'est pas de la brique rose mais d'une pierre volée à une chapelle disparue. Quelle est leur couleur ?"
  },
  {
    id: 2,
    name: "Jardin des Plantes",
    location: "Porte monumentale, allées Jules-Guesde",
    intro: "Tu es sorti du tunnel dans ce jardin de 7 hectares, créé après la Révolution sur les ruines d'un couvent.",
    mission: "Rejoins la grande porte d'entrée sur les allées Jules-Guesde (côté Museum).",
    riddle: "Deux sentinelles encadrent la porte. Elles ne sont pas nées ici — elles ont été arrachées à un sanctuaire détruit par la Révolution. Un indice : leur peau est de la même couleur que le vin de la région. D'où viennent ces orphelines ?",
    answer: "Des COLONNES DE MARBRE ROUGE du Languedoc ! Elles ont été récupérées de la chapelle des Carmes quand le couvent a été détruit après la Révolution. Le marbre rouge vient des carrières de Caunes-Minervois.",
    funFact: "Cette porte monumentale a été dessinée en 1806 par l'architecte Jacques-Pascal Virebent. Le jardin botanique lui-même date de 1794.",
    clue: "🚲 Prends un VélôToulouse à la station près du Museum. Suis le Canal du Midi vers le nord (~15 min). Tu cherches un jardin où l'on médite sur le vide — et où une île porte le nom de ce que les bouddhistes espèrent atteindre."
  },
  {
    id: 3,
    name: "Jardin Japonais Pierre-Baudis",
    location: "Parc Compans-Caffarelli, boulevard Lascrosses",
    intro: "Un véritable jardin zen au cœur de Toulouse, inspiré de la villa impériale de Katsura à Kyoto.",
    mission: "Entre dans le jardin clos (gratuit). Explore ce petit bout de Kyoto...",
    riddle: "Pour atteindre l'au-delà, traverse un chemin de bois peint de la couleur du danger. Il mène à une terre qui n'existe pas vraiment. Quelque part dans ce jardin, un homme en bronze médite — il a quitté le Japon pour enseigner « zazen » en Europe. Trouve l'île, puis trouve l'homme. Comment s'appelle-t-il ?",
    answer: "Le PONT ROUGE mène à l'ÎLE DU PARADIS. Le buste est celui de TAISEN DESHIMARU, maître zen qui a introduit le bouddhisme Soto en France et fondé plus de 100 dojos en Europe.",
    funFact: "Le jardin contient aussi une « Île Grue » et une « Île Tortue » en rochers (symboles d'immortalité), un jardin sec avec du gravier ratissé représentant l'eau, et un pavillon de thé sur pilotis.",
    clue: "Quitte le jardin et dirige-toi vers le sud, dans la vieille ville. Tu cherches la plus grande église romane d'Occident. Sur son côté sud, une porte regarde vers le « milieu de la ville » — c'est d'ailleurs son nom en occitan."
  },
  {
    id: 4,
    name: "Basilique Saint-Sernin",
    location: "Place Saint-Sernin",
    intro: "Chef-d'œuvre de l'art roman, inscrite au patrimoine mondial de l'UNESCO sur les chemins de Saint-Jacques-de-Compostelle.",
    mission: "Fais le tour de la basilique jusqu'au côté SUD (face à la rue du Taur). Trouve la PORTE MIÈGEVILLE — c'est la seule porte avec un tympan sculpté.",
    riddle: "Tout le monde regarde le Christ qui monte au ciel. Pas toi. Lève les yeux PLUS HAUT — jusqu'à la frise de pierre sous le toit. Parmi les bêtes et les feuillages, cherche les seuls visages humains. Deux sœurs se cachent là depuis 900 ans. Leur expression n'est pas pieuse — plutôt moqueuse. Combien sont-elles ? Et décris leur expression.",
    answer: "DEUX VISAGES DE FEMMES très expressifs — presque espiègles et malicieux pour de la sculpture du XIIe siècle ! Elles se trouvent parmi les modillons (petites sculptures) sur la corniche au-dessus du tympan.",
    funFact: "Le même sculpteur qui a réalisé ce portail est ensuite allé travailler à Saint-Jacques-de-Compostelle. Cette porte est littéralement le départ du chemin de pèlerinage. « Miègeville » signifie « milieu de la ville » en occitan.",
    clue: "Le nom de la porte t'indique où aller : « Miègeville » = milieu de la ville. Descends la rue qu'elle regarde — le même chemin où un saint fut traîné par une bête en l'an 250. Une autre église marque l'endroit où la corde s'est enfin rompue. Son nom évoque cette bête."
  },
  {
    id: 5,
    name: "Notre-Dame du Taur",
    location: "Rue du Taur (entre Capitole et Saint-Sernin)",
    intro: "⚠️ L'église est fermée pour travaux jusqu'à fin 2025 — tu ne verras que l'extérieur. Mais quelle façade !",
    mission: "L'église est complètement enserrée entre les immeubles. Lève la tête pour voir son immense clocher-mur de 42 mètres.",
    riddle: "Ce clocher est un mur plat, pas une tour. Et ce mur a des oreilles — en architecture, on les appelle « ouïes ». Elles sont percées sur deux étages. Compte TOUTES les oreilles. Ensuite, regarde bien la forme de leurs arcs : ils ressemblent à une coiffe que portent certains religieux. De quel type d'arc s'agit-il ?",
    answer: "6 OUÏES au total : 3 sur chaque niveau. Les arcs ont la forme d'une MITRE (coiffe d'évêque) — on les appelle « arcs en mitre », signature du gothique toulousain.",
    funFact: "« Taur » signifie taureau en occitan. En 250, Saint Saturnin, premier évêque de Toulouse, fut attaché à un taureau sacrificiel et traîné jusqu'ici. La corde se serait rompue à cet endroit précis.",
    clue: "Continue sur le chemin du taureau jusqu'à une vaste place. Au centre du sol, une croix géante de bronze pèse 20 tonnes. Ses 12 pointes portaient autrefois des disciples — aujourd'hui elles portent le destin. Trouve celle qui correspond au mois de naissance de ta mère."
  },
  {
    id: 6,
    name: "Place du Capitole",
    location: "Place du Capitole",
    intro: "Le cœur battant de Toulouse, avec sa majestueuse façade de briques et de pierres.",
    mission: "Va au centre de la place. Une immense croix de bronze est incrustée dans le sol.",
    riddle: "Cette croix pèse plus qu'un bus. Ses 12 bras se terminent par des médaillons. À l'origine, ils honoraient 12 hommes qui suivaient un certain Jésus. Mais en 1995, un artiste les a remplacés par autre chose — quelque chose qui prédit l'avenir selon les superstitieux. Que représentent ces 12 symboles aujourd'hui ? Et quel est celui de ta mère ?",
    answer: "Les 12 SIGNES DU ZODIAQUE ! En 1995, Raymond Moretti a remplacé les 12 apôtres par l'horoscope. La croix pèse 20 tonnes.",
    funFact: "Cette décision a fait hurler les puristes qui ont parlé de « farcissage kitsch ». Les arcades autour de la place contiennent 29 peintures au plafond par le même artiste, illustrant l'histoire de Toulouse.",
    clue: "Les frères qui prêchaient contre les Cathares ont construit une église non loin. À l'intérieur, un arbre impossible pousse depuis 700 ans : un seul tronc, mais des dizaines de branches de pierre qui portent le ciel. Marche vers l'ouest."
  },
  {
    id: 7,
    name: "Couvent des Jacobins",
    location: "Place des Jacobins",
    intro: "Chef-d'œuvre du gothique méridional, construit par les Dominicains pour lutter contre l'hérésie cathare.",
    mission: "Entre dans l'église (payant ~5€). Va jusqu'au fond, dans le CHŒUR, et lève les yeux.",
    riddle: "Ici pousse un arbre de pierre. Son tronc est une seule colonne ; ses branches s'épanouissent à 28 mètres de haut pour porter toute la voûte. Un poète lui a donné le nom d'un arbre des oasis. Compte ses branches — les nervures de pierre qui partent du sommet. Quel est leur nombre exact ?",
    answer: "22 NERVURES exactement ! C'est le fameux PALMIER des Jacobins. Le surnom vient du poète Paul Claudel. C'est une prouesse architecturale unique au monde.",
    funFact: "Salvador Dalí s'en est inspiré pour son tableau « Santiago El Grande » — mais il a toujours refusé de créditer le photographe toulousain Jean Dieuzaide qui lui avait montré l'image.",
    clue: "Une plante rendait Toulouse riche autrefois — une humble herbe qui produisait la couleur du ciel. Ses marchands ont payé un palais tout près d'ici. Dans sa cour, un pauvre homme grimace depuis 500 ans — il porte quelque chose de surprenant sur la tête pour adoucir sa peine."
  },
  {
    id: 8,
    name: "Hôtel d'Assézat",
    location: "Place d'Assézat, près de la Garonne",
    intro: "Le plus bel hôtel particulier Renaissance de Toulouse, construit par un marchand de pastel devenu richissime.",
    mission: "Entre par le portail monumental (accès libre à la cour). Dans la cour, trouve la tour qui contient l'escalier d'honneur.",
    riddle: "Monte au premier étage de la tour. Un géant de pierre souffre ici depuis 500 ans — mi-homme, mi-colonne, il porte le poids du monde sur ses épaules. Mais regarde bien sa tête : quelqu'un a eu pitié de lui et lui a offert un objet incongru pour soulager sa douleur. Cet objet n'a rien à faire dans l'architecture. Qu'est-ce que c'est ?",
    answer: "UN COUSSIN ! L'ATLANTE (figure sculptée qui porte la console) a un coussin moelleux sur la tête — un détail plein d'humour Renaissance, totalement inattendu.",
    funFact: "Les trois niveaux de la façade utilisent les trois ordres grecs dans l'ordre : DORIQUE (bas), IONIQUE (milieu), CORINTHIEN (haut). L'architecte est Nicolas Bachelier.",
    clue: "Dirige-toi vers le sud, dans le quartier le plus ancien. Les rues y portent encore les noms des métiers : filatiers, couteliers... Sur un mur près du fleuve, une femme géante dort entourée de faux visages du monde entier. C'est une « symphonie » peinte par une artiste née ici."
  },
  {
    id: 9,
    name: "Quartier des Carmes — Fresque Miss Van",
    location: "Rue du Pont de Tounis (près de l'église de la Dalbade)",
    intro: "Le quartier des Carmes : ruelles médiévales, marché couvert, et street art de renommée mondiale.",
    mission: "Trouve la rue du Pont de Tounis. Cherche une façade d'immeuble transformée en œuvre d'art.",
    riddle: "Une femme rêve sur ce mur. Autour d'elle flottent des dizaines de visages qui ne sont pas des visages — on peut les enfiler et les retirer. Certains rient, certains grimacent, certains viennent de Chine, d'autres d'Afrique ou du Mexique. L'artiste qui l'a peinte a grandi dans cette ville et peignait des « poupées » par-dessus les tags des garçons. Combien de ces faux visages peux-tu compter ?",
    answer: "Ce sont des MASQUES — plus de 20, tous différents ! La fresque s'appelle « La Symphonie des Songes » et l'artiste est MISS VAN (née à Toulouse).",
    funFact: "Miss Van a commencé le graffiti à 18 ans. Ses « Poupées » sensuelles par-dessus les tags masculins étaient un acte féministe pionnier dans le street art des années 90.",
    clue: "Marche vers le fleuve. Le plus vieux pont de Toulouse a d'étranges trous dans ses piliers — des bouches qui vomissent le fleuve quand il se met en colère. Dans l'une de ces bouches, un locataire clandestin habite depuis 2017. Trouve-le."
  },
  {
    id: 10,
    name: "Pont Neuf",
    location: "Pont Neuf, sur la Garonne",
    intro: "Malgré son nom (« nouveau »), c'est le plus vieux pont de Toulouse encore debout — construit au XVIe siècle !",
    mission: "Traverse le pont ou descends sur le quai. Observe les piliers : ils ont d'étranges ouvertures ovales.",
    riddle: "Ces trous ont un nom vulgaire — ils « dégueulent » l'eau des crues pour sauver le pont. Mais depuis 2017, un squatteur habite dans l'un d'eux. Un artiste l'a installé là à 3h du matin avec une échelle et un matelas gonflable. Ce squatteur ne bouge jamais, ne mange jamais, et regarde fixement le fleuve. Il est de la couleur du danger, du sang, des camions de pompiers. Trouve-le.",
    answer: "Une PETITE STATUE ROUGE D'UN ENFANT ! Œuvre de James Colomina, installée clandestinement en juin 2017. Elle pèse 40 kg et n'est même pas fixée — juste posée dans le dégueuloir.",
    funFact: "Les dégueuloirs ont sauvé le pont lors de l'inondation catastrophique de 1875 : l'eau a atteint le sommet des arches, mais le Pont Neuf a tenu alors que les autres ponts s'effondraient.",
    clue: null
  }
];

function App() {
  const [currentStop, setCurrentStop] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [completedStops, setCompletedStops] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('toulouse-hunt-progress');
    if (saved) {
      const { current, completed } = JSON.parse(saved);
      setCurrentStop(current);
      setCompletedStops(completed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('toulouse-hunt-progress', JSON.stringify({
      current: currentStop,
      completed: completedStops
    }));
  }, [currentStop, completedStops]);

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleNext = () => {
    if (currentStop < stops.length - 1) {
      setCompletedStops([...completedStops, currentStop]);
      setCurrentStop(currentStop + 1);
      setRevealed(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    if (window.confirm('Recommencer la chasse au trésor depuis le début ?')) {
      setCurrentStop(0);
      setRevealed(false);
      setCompletedStops([]);
      localStorage.removeItem('toulouse-hunt-progress');
    }
  };

  const goToStop = (index) => {
    if (completedStops.includes(index) || index === currentStop) {
      setCurrentStop(index);
      setRevealed(completedStops.includes(index));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const stop = stops[currentStop];
  const isLastStop = currentStop === stops.length - 1;
  const progress = ((completedStops.length) / stops.length) * 100;

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>Chasse au Trésor</h1>
          <p className="subtitle">Toulouse</p>
        </div>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <p className="progress-text">Étape {currentStop + 1} / {stops.length}</p>
      </header>

      <nav className="stop-nav">
        {stops.map((s, i) => (
          <button
            key={s.id}
            className={`stop-dot ${i === currentStop ? 'active' : ''} ${completedStops.includes(i) ? 'completed' : ''} ${i > currentStop && !completedStops.includes(i) ? 'locked' : ''}`}
            onClick={() => goToStop(i)}
            disabled={i > currentStop && !completedStops.includes(i)}
            title={s.name}
          >
            {completedStops.includes(i) ? '✓' : i + 1}
          </button>
        ))}
      </nav>

      <main className="main">
        <article className="card">
          <div className="card-header">
            <span className="stop-number">Étape {stop.id}</span>
            <h2 className="stop-name">{stop.name}</h2>
            <p className="stop-location">📍 {stop.location}</p>
          </div>

          <div className="card-body">
            <section className="section">
              <p className="intro">{stop.intro}</p>
            </section>

            <section className="section">
              <h3>🎯 Ta mission</h3>
              <p>{stop.mission}</p>
            </section>

            <section className="section riddle-box">
              <h3>🧩 L'énigme</h3>
              <p className="riddle-text">{stop.riddle}</p>
            </section>

            {!revealed ? (
              <button className="reveal-btn" onClick={handleReveal}>
                <span className="btn-icon">🗝️</span>
                Je donne ma langue au chat !
              </button>
            ) : (
              <div className="revealed-content">
                <section className="section answer-box">
                  <h3>✨ La réponse</h3>
                  <p>{stop.answer}</p>
                </section>

                <section className="section fun-fact">
                  <h3>💡 Le savais-tu ?</h3>
                  <p>{stop.funFact}</p>
                </section>

                {stop.clue && (
                  <section className="section clue">
                    <h3>🧭 Indice pour la prochaine étape</h3>
                    <p className="clue-text">{stop.clue}</p>
                  </section>
                )}

                {isLastStop && revealed ? (
                  <div className="finale">
                    <div className="finale-icon">🎉</div>
                    <h3>Félicitations !</h3>
                    <p>Tu as terminé la chasse au trésor de Toulouse !</p>
                    <p className="finale-suggestion">Traverse le pont jusqu'à la Prairie des Filtres ou reste sur le Quai de Tounis pour un verre au coucher du soleil. La lumière rend le pont rose et or...</p>
                  </div>
                ) : (
                  <button className="next-btn" onClick={handleNext}>
                    Aller à l'étape suivante →
                  </button>
                )}
              </div>
            )}
          </div>
        </article>
      </main>

      <footer className="footer">
        <button className="reset-btn" onClick={handleReset}>
          ↺ Recommencer
        </button>
      </footer>
    </div>
  );
}

export default App;
