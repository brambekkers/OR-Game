export default [
    {
        title: "Start",
        pos: 1,
        description: "Dit is het beginpunt",
        pos: { x: 17, y: 17 },
        size: { x: 5, y: 12 },
        action: null
    },
    {
        title: "De OR-leden",
        pos: 2,
        description:
            "De leden van de OR treden om de vier jaren tegelijk af. Soms gebeurd dat gedurende een zittingsperiode OR-leden de ondernemingsraad verlaten. Dit jaar hebben we afscheid genomen van twee leden. Steve de Jong en Mila Bosman hebben de OR verlaten. In de vervangendeplaats treden twee nieuwe OR leden in. Esseline Keeven en Elwin Stout pakken sinds dit jaar hun taken op. \n\n In totaal heeft de OR acht leden: Monique Asma, Robert van der Jagt, Kees Klaassen, Karin Sovová, Bram Bekkers, Mart Stravers, Esseline Keeven en Elwin Stout. \n \n Daarnaast heeft de OR één vaste plek gereserveerd voor een ambtelijke secretaris. ",
        pos: { x: 24, y: 17 },
        size: { x: 40, y: 12 },
        action: null
    },
    {
        title: "Overleg",
        pos: 3,
        description:
            "De OR komt in 2020 6 keer samen voor een onderling beraad. De punten die dan worden besproken worden vastgelegd in een openbare notulen. Tijdens dit soort momenten besluiten we het welke richting we op gaan en vormen we de officiële OR mening over de onderwerpen. Dit is vaak ter voorbereiding voor het overleg met het College van Bestuur. Tussendoor wordt natuurlijk ook flink overlegd. \n\n Je hebt je goed voorbereid voor de vergadering! Ga twee stappen vooruit",
        pos: { x: 65, y: 17 },
        size: { x: 10, y: 12 },
        action: {
            type: "move",
            amount: 2
        }
    },
    {
        title: "Online overleg",
        pos: 4,
        description:
            "Hebben jullie weleens van Corona gehoord? Wij vergaderen voorlopig online via Teams. Ook de overlegmomenten met het CvB zijn online. Het aanspreken in de wandelgangen staan ook op een laag pitje. Best een aderlating. \n\n Bezoek de site van de GGD voor meer informatie en ga twee stappen terug. ",
        pos: { x: 80, y: 17 },
        size: { x: 10, y: 30 },
        action: {
            type: "move",
            amount: -2
        }
    },
    {
        title: "Corona",
        pos: 5,
        description:
            "Iedereen binnen de organisatie kent de huidige gevolgen van de coronacrisis op onze organisatie. Als OR zijn wij actief betrokken bij de belangrijkste overleggen van het coronateam. Daarnaast zijn wij door vele collega's benaderd over het coronabeleid binnen onze organisatie. Wij hebben geprobeerd deze signalen door te geven binnen onze overlegmomenten met het coronateam en het CvB.",
        pos: { x: 60, y: 35 },
        size: { x: 8, y: 12 },
        action: null
    },
    {
        title: "Wacht maar even",
        pos: 6,
        description: "Je moet wachten op de stukken die je zullen worden toegezonden... \n\n Eén extra beurt. ",
        pos: { x: 50, y: 33 },
        size: { x: 9, y: 12 },
        action: {
            type: "wait",
            amount: 1
        }
    },
    {
        title: "Besproken stukken",
        pos: 7,
        description:
            "Binnen de OR bespreken we gezamelijk de onderwerpen die binnenkomen. Iedereen binnen de OR heeft stemrecht. Soms zijn we het eens met elkaar maar soms ook niet. Jouw stem is belangrijk voor de tot standkoming van de gemeenschappelijke OR stem. Stem jij voor of stem jij tegen?",
        pos: { x: 42, y: 32 },
        size: { x: 7, y: 11 },
        action: {
            type: "choose",
            description: "Stem jij in met het belangrijke OR-besluit?",
            no: -2,
            yes: 1
        }
    },
    {
        title: "Rolverdeling",
        pos: 8,
        description:
            "Wie doet wat binnen het team. Iedereen in zijn kracht zetten dat is ons doel. In het OR- jaar 2020 zijn er verschillende rolverdelingen geweest. Zo is Bram Bekkers de voorzitter geweest en in het eerste halfjaar was Steve de Jong de vicevoorzitter. In de tweede helft van 2020 was Elwin Stout de vice voorzitter. Monique Asma heeft vanaf de zomer de rol van secretatis overgenomen van Mila Bosman. Robert van der Jagt was de vice-secretaris",
        pos: { x: 36.5, y: 30 },
        size: { x: 5, y: 11 },
        action: null
    },
    {
        title: "Thuiswerkregeling",
        pos: 9,
        description:
            "Onze koffieconsumptie is fors gestegen door het thuiswerken. Nespressocupjes? Een simpel bakkie pleur? Je wordt in ieder geval ten den dele gecompenseerd vanuit de thuiswerkregeling. Zit je thuis gebocheld? Wist je dat je ook een bureaustoel of laptopstandaard (deels) kunt declareren? \n\n Op deze manier komt iedereen net wat fijner de crisis door. 2 stappen naar voren.",
        pos: { x: 28, y: 30 },
        size: { x: 8, y: 11 },
        action: {
            type: "move",
            amount: 4 // to visie
        }
    },
    {
        title: "Bestuur",
        pos: 10,
        description:
            "Na jaren van een éénhoofdig CvB gehad te hebben was daar dit jaar Joke die naast Frans plaatsnam in het CvB. Een goede aanwinst voor het HMC1 Of we alles van haar hebben kunnen zien is nog maar de vraag omdat we Joke vooral als woordvoerder Corona hebben gehoord.  \n\n Desalniettemin is het volgens de OR goed dat het HMC sinds dit jaar een tweehoofdig CvB heeft. \n \n Je mag van Joke nog een keer met de dobbelsteen gooien! ",
        pos: { x: 20, y: 30 },
        size: { x: 7, y: 11 },
        action: {
            type: "wait",
            amount: -1
        }
    },
    {
        title: "Enquête Kaderbrief",
        pos: 11,
        description:
            "De OR komt naar jou toe. Natuurlijk hebben we binnen de OR een beeld van hoe de organisatie ervoor staat maar het is voor ons heel belangrijk om te weten waar jullie tegenaan lopen en nog belangrijker: welke oplossingen jullie daarvoor zien. Dankzij alle medewerkers die de  enquête voor de kaderbrief hebben ingevuld hebben wij een breed gedragen kaderbrief kunnen overhandigen aan het CvB, waarin we aandacht vragen voor de onderwerpen als transparantie, besluitvorming, communicatie en werkdruk. \n \n Ook geven de uitkomsten van de  enquête ons handvatten om onze OR-visie te herijken. Bedankt daarvoor! \n\n Ga twee stappen vooruit omdat je zulke goede input hebt gegeven!",
        pos: { x: 10, y: 38 },
        size: { x: 9, y: 20 },
        action: {
            type: "move",
            amount: 2 // to visie
        }
    },
    {
        title: "Welke richting?",
        pos: 12,
        description:
            "De OR staat voor het organisatiebelang maar doet dat vanuit de positie van het personeel. Het CVB kijkt ook naar het organisatiebelang maar meer vanuit de bedrijfsmatige kant. Soms lijkt het alsof we tegenover elkaar staan maar kijken we toch naar hetzelfde doel. \n \n Organisatiebelang vs. personeelsbelang...",
        pos: { x: 22, y: 52 },
        size: { x: 15, y: 10 },
        action: {
            type: "choose",
            description: "Kun jij de verschillende belangen goed afwegen?",
            no: -4,
            yes: 1
        }
    },
    {
        title: "OR Visie",
        pos: 13,
        description: "Hier komt de description",
        pos: { x: 38, y: 49 },
        size: { x: 27, y: 10 },
        action: null
    },
    {
        title: "Rooster onderzoek",
        pos: 14,
        description:
            "Soms voelt het alsof je moet zwemmen... Als we iets vaak vanuit de achterban hebben gehoord dit jaar dan is het wel het rooster, en dan vooral vanuit de achterban in Amsterdam. Corona heeft een flinke druk uitgeoefend op de beschikbaarheid van lokalen. We realiseren ons echter heel goed dat het voor de Coronatijd ook niet altijd soepel was. Tijd voor een nieuwe aanpak? Een raamrooster? Meer ondersteuning voor de roostermakers? \n\n De OR heeft een onafhankelijk onderzoek gevraagd naar de roosters. Hopelijk wordt het snel beter!  Voor nu moet je twee beurten wachten... ",
        pos: { x: 66, y: 48 },
        size: { x: 10, y: 10 },
        action: {
            type: "wait",
            amount: 2
        }
    },
    {
        title: "Artikel 24.",
        pos: 15,
        description:
            "Een stip op de horizon? Een blik vooruit? In ieder geval wil de OR 2x per jaar een vergadering belegd hebben met het CvB waarin we worden meegenomen in de langetermijnplannen van het HMC. Wij hopen hierdoor een goed beeld te krijgen van de onderwerpen waar wij in een vroeg stadium bij betrokken willen worden. En dat artikel 24.? Gewoon een stoffig stukje tekst uit de WOR (Wet op de ondernemingsraden).",
        pos: { x: 78, y: 50 },
        size: { x: 15, y: 10 },
        action: null
    },
    {
        title: "OR training",
        pos: 16,
        description:
            "De OR heeft in het najaar van 2020 twee scholingsdagen genoten, waarbij, naast teambuilding en onderlinge nadere kennismaken vanwege de nieuwe samenstelling van de or, een aantal thema's aan de orde zijn gekomen. Er is aandacht besteed aan de wettelijke kaders van de onderneminsraad, de WOR in vogelvlucht en ook zijn de persoonlijke werkstijlen van onze OR-leden aan de orde gekomen zodat de samenwerking geoptimaliseerd kan worden. Ook is er aandacht besteed aan rollenspelen en oefeningen hoe de OR een goed gesprek met het bestuur kan voeren. \n\n Een dergelijke tweedaagse geeft veel energie. Ga vier stappen vooruit!",
        pos: { x: 81, y: 63 },
        size: { x: 10, y: 10 },
        action: {
            type: "move",
            amount: 4
        }
    },
    {
        title: "Bordsessie",
        pos: 17,
        description:
            "Ben jij een echte vergadertijger? Wij stiekem niet echt. We zijn binnen de OR gestart met bordsessies, een onderdeel van de leerkrachtmethode die in Amsterdam rondwaart... We starten ons wekelijkse overleg met het bepalen van de onderwerpen waaraan gewerkt dient te worden en we verdelen deze onderwerpen onderling. Daarna gaan we uiteen en werken we efficiënt aan de uitgezette taken. We sluiten de middagen af door aan het einde van de middag de resultaten even kort aan elkaar terug te koppelen. Geen eindeloos geleuter dus! \n\n Ga 3 stappen naar voren.",
        pos: { x: 77, y: 68 },
        size: { x: 3.5, y: 10 },
        action: {
            type: "move",
            amount: 3
        }
    },
    {
        title: "Hoofdlijnen van de begroting ",
        pos: 18,
        description:
            "Ieder jaar worden de hoofdlijnen van de begroting voorgelegd aan de OR. Het CvB heeft de goedkeuring op deze hoofdlijnen nodig van de OR en de Studentenraad om de begroting te kunnen indienen. Vanuit de vorige zitting van de OR is met het CvB besproken dat de OR in een vroeg stadium wordt ingelicht over de inhoud van de hoofdlijnen. Hierdoor kunnen we sneller en doortastender handelen op het moment dat de definitieve goedkeuring van ons gevraagd wordt. Een fijne werkwijze dus.",
        pos: { x: 71, y: 68 },
        size: { x: 4, y: 10 },
        action: null
    },
    {
        title: "Werkdruk",
        pos: 19,
        description:
            "Door alle taken voel je een enorme werkdruk. Er is wel een werkdruk plan opgesteld maar daar voel jij in de praktijk nog weinig voordelen van... Dit is een belangrijk punt voor de OR. \n\n Sla één beurt over",
        pos: { x: 65, y: 69 },
        size: { x: 5, y: 9 },
        action: {
            type: "wait",
            amount: 1
        }
    },
    {
        title: "PIP-procedure",
        pos: 20,
        description:
            "Is het voor jou altijd een verrassing op welke lessen je het nieuwe jaar wordt ingezet? Als alles loopt volgens de nieuwe PIP-procedure voortaan niet meer. Iedereen vult individueel een PIP-formulier in en gaat daarna met het eigen team de lessen en taken verdelen. Wij gaan voor zo min mogelijk verrassingen en een transparante toedeling van taken. Het proces staat nog in de kinderschoenen dus de OR houdt een vinger aan de pols.",
        pos: { x: 58, y: 68 },
        size: { x: 6, y: 9 },
        action: null
    },
    {
        title: "Afstemming met de studentenraad",
        pos: 21,
        description:
            "Medezeggenschap is in Nederland ingericht in verschillende organen zo heb je de studentenraad en de ondernemingsraad. Het is belangrijk dat deze twee organen samenwerken om een zo rijk mogelijk onderwijs neer te zetten. De studenten uit de studentenraad weten wat ze belangrijk vinden. Ze zijn mondig genoeg om voor hun eigen onderwerpen uit te komen. Het overleg tussen de SR en OR is in 2020 verbeterd maar mag nog intensiever.",
        pos: { x: 50, y: 65 },
        size: { x: 7, y: 10 },
        action: null
    },
    {
        title: "Consignatieregeling ",
        pos: 22,
        description:
            "Een regeling die grote impact zou hebben voor de medewerkers van facilitair en ICT. Wij hebben niet ingestemd met deze regeling en het CvB geadviseerd om eerst in gesprek te gaan met de betreffende medewerkers om het draagvlak beter in kaart te brengen. Uiteindelijk heeft het CVB bepaald om de regeling totaal te schrappen.",
        pos: { x: 44, y: 64 },
        size: { x: 5, y: 10 },
        action: null
    },
    {
        title: "Verlofkaart ",
        pos: 23,
        description:
            "Het ondersteunend personeel binnen het HMC kan niet altijd verlof opnemen tijdens de schoolvakanties. Voor deze onmisbare schakels binnen de organisatie  is er de verlofkaart uitgevonden. Het biedt hen de mogelijkheid om in de goedkope weken hun welverdiende vakantie op te nemen. Als beloning hiervoor mag je nog een keer met de dobbelsteen gooien",
        pos: { x: 37, y: 64 },
        size: { x: 6, y: 10 },
        action: {
            type: "wait",
            amount: -1
        }
    },
    {
        title: "Communicatie",
        pos: 24,
        description:
            "Waarom hoor ik dit nu pas? of Wat een lap tekst iedere keer weer. Voor de OR is transparant beleid en open communicatie een belangrijk speerpunt. Wij proberen geregeld iets van ons te laten horen op de welbekende kanalen. Daarnaast leggen we geregeld bij het CvB neer dat heldere communicatie over een bepaald onderwerp gewenst is. \n\n Toch gebeurt het nog te vaak dat er in de organisatie niet, te laat of onduidelijk wordt gecommuniceerd. Dit helpt de organisatie niet verder. Ga daarom zes plekken terug. ",
        pos: { x: 24, y: 64 },
        size: { x: 12, y: 10 },
        action: {
            type: "move",
            amount: -6
        }
    },
    {
        title: "Digitalisering",
        pos: 25,
        description:
            "Een ping hier een notificatie daar. Soms om gek van te worden. Voor de Coronacrisis was het al erg maar nu zie je door het aantal verschillende apps het bos niet meer. Gelukkig geven de verschillende platformen ons ook weer houvast voor het onderwijs en kunnen we op een flink aantal nieuwe manier in contact staan met onze studenten. \n\n Binnen de OR kwam dit onderwerp vaker terug dit jaar. Wat kunnen we van de medewerkers vragen? Is er voldoende scholing? Moet er niet een app plafond komen? En dan hebben we ook nog de veiligheidsaspecten met data en avg! \n \n De apps geven ons de mogelijkheid om samen met de studenten een stap naar toekomstig onderwijs te zetten maar tegelijkertijd is het soms ook een hoofdpijndossier. ",
        pos: { x: 17, y: 64 },
        size: { x: 6, y: 11 },
        action: null
    },
    {
        title: "Richting 2021",
        pos: 26,
        description:
            "We zijn inmiddels een flink eind op weg in 2020. De pepernoten liggen alweer in de schappen en de lessen krijgen weer vorm. Eigenlijk loopt alles op rolletjes. Nu maar hopen dat een tweede lockdown uitblijft!  \n \n Ga 5 plaatsen vooruit.",
        pos: { x: 7, y: 71 },
        size: { x: 10, y: 8 },
        action: {
            type: "move",
            amount: 5
        }
    },
    {
        title: "Communicatie, openheid en transparantie",
        pos: 27,
        description:
            "Communicatie, openheid en transparantie. We lijken het maar niet te leren. Terwijl we achteraf concluderen dat er niets geheims aan het onderwerp was. Toch voelt het alsof er iets achter onze rug is besloten.  \n\n Eén van de speerpunten van de OR is dan ook het onderwerp openheid en transparantie. Dit is het onderwerp wat vaak terugkomt wanneer we met de achterban praten. We strijden met de OR voor openheid transparantie en je raad het al communicatie!",
        pos: { x: 8, y: 81 },
        size: { x: 12, y: 12 },
        action: null
    },
    {
        title: "Nieuwe voorzitter ",
        pos: 28,
        description:
            "Er heeft een rolwijziging plaatsgevonden. Mart Stravers neemt de rol van voorzitter over van Bram Bekkers vanaf januari 2021. Dankzij een soepele overdracht door de oude voorzitter loopt alles nog steeds op rolletjes.",
        pos: { x: 21, y: 83 },
        size: { x: 6, y: 12 },
        action: null
    },
    {
        title: "Scholing",
        pos: 29,
        description:
            "Je bent nooit te oud om te leren. Voor de OR is scholing een belangrijk onderwerp. We bespreken elk jaar de regelingen m.b.t. to scholing van het personeel. \n\n Samen werken we aan de vooruitgang van het HMC. Stilstaan is letterlijk achteruitgaan.",
        pos: { x: 28, y: 83 },
        size: { x: 7, y: 12 },
        action: {
            type: "choose",
            description: "Blijf jij jezelf ontwikkelen in 2021? Blijf jij leren?",
            no: -2,
            yes: 2
        }
    },
    {
        title: "Vakantie- en verlofregeling 2021",
        pos: 30,
        description:
            "De vakantie- en verlofregeling is een jaarlijks terugkerend artikel. De OR stemt via deze regeling indirect in met de jaarplanning. Een veel gehoorde misvatting is dat de OR bepaalt hoeveel vakantie dagen er zijn. Die macht heeft de OR helaas niet omdat dit al is geregeld in de CAO. \n\n Misschien is het goed om de vakantie en verlofregeling er nog eens bij te pakken en hem goed door te lezen. Je krijgt daar één gratis beurt voor om dat te doen.",
        pos: { x: 36, y: 84 },
        size: { x: 7, y: 12 },
        action: {
            type: "wait",
            amount: -1
        }
    },
    {
        title: "Raad van toezicht",
        pos: 31,
        description:
            "Wie zijn toch die mensen die altijd aan het eind van de middag borrelen in de hal? Nou... Dit is de Raad van toezicht (RvT). Een belangrijk orgaan voor het HMC. Je ziet als medewerker weinig maar het zijn de strenge ogen van de Raad van Toezicht die samen met de OR Frans en Joke in de gaten houden. ",
        pos: { x: 44, y: 83 },
        size: { x: 10, y: 12 },
        action: null
    },
    {
        title: "Vitaliteit",
        pos: 32,
        description:
            "Had ik het al gezegd? Je ziet er enorm goed uit vandaag. Je straalt helemaal en zie ik het nu goed dat je ook bent afgevallen? Dat zal vast komen doordat je zo enorm lekker in je vel zit. \n\n Wat is het toch fijn dat ook dit jaar het HMC de vitaliteitsbijdrage heeft verlengd.  ",
        pos: { x: 56, y: 83 },
        size: { x: 8, y: 12 },
        action: null
    },
    {
        title: "Reiskostenregeling",
        pos: 33,
        description:
            "Tijdens de eerste lockdown was het wel fijn. Extra geld op je rekening terwijl je niet hoefde te reizen. Maar vanaf 2021 moeten we opeens al onze reizen declareren. En vergeet ook niet dat iemand al die declaraties moet goedkeuren... \n\n Een hoop gedoe waar niemand op zit te wachten. Is het de schuld van Visma, het CvB of de OR? Nee, het was de belastingdienst die dit van ons verwacht en de regels heeft aangescherpt. \n\n Gelukkig betekend het financieel niets voor ons maar plezier is het ook niet. \n\n Ga vier stappen terug.",
        pos: { x: 65, y: 83 },
        size: { x: 10, y: 12 },
        action: {
            type: "move",
            amount: -4
        }
    },
    {
        title: "Risico Inventarisatie en Evaluatie ",
        pos: 34,
        description:
            "Het is belangrijk dat de arbeidsomstandigheden en de veiligheid op de werkplek zijn geborgd. We willen immers allemaal veilig werken. Zowel mental als fysiek. Na een Ri&E krijgen we een groot document met alle uitkomsten te lezen. Gelukkig gaat het bijna altijd goed maar soms... \n\n Je krijgt een lijmklem op je kop... \n\n Ga negen stappen terug.",
        pos: { x: 76, y: 82 },
        size: { x: 5, y: 12 },
        action: {
            type: "move",
            amount: -9
        }
    },
    {
        title: "Op naar 2021",
        pos: 35,
        description:
            "Dit jaar geen kerstborrel met je collega's en een speech van de voorzitter van het CvB. We zaten alleen thuis achter Teams. Toch was de kerstvakantie voor vele een welkome vakantie na al die maanden extra inzet en hard werken. \n\n Dit was 2020, nog twee weken genieten en dan begint 2021! ",
        pos: { x: 82, y: 82 },
        size: { x: 7, y: 12 },
        action: null
    },
    {
        title: "Winnaar",
        pos: 36,
        description: "Je hebt het spel uitgespeeld en bent een winnaar. Maar eigenlijk ben je al een winnaar omdat je bij het HMC werkt!",
        pos: { x: 90, y: 82 },
        size: { x: 5, y: 12 }
    }
];
