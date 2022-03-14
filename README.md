# Welkom op mijn Blok Tech Repository

#### Joost Verweijen
#### Klas Tech-3
#### 500858940

Zoals hierboven te zien is mijn naam Joost Verweijen, en dit blok volg ik het keuzeproject genaamd 'Project Tech', welke helemaal in het teken staat van een diepere duik nemen in het technische wereldje zoals wij die tegenwoordig kennen. Één opdracht staat deze paar weken centraal; het maken van een matching-applicatie, waarin we eerst individueel één bepaalde feature uit gaan werken, en vervolgens in groepsverband een volledige applicatie in elkaar gaan zetten. In dit blok verdiepen wij ons verder in Front-end Developement, en gaan we ook voor het eerst aan de slag met de Back-end Developement van een applicatie. Dit komt vervolgens samen in Blok Tech, wat ook een vak op zich is, waarin we leren over hoe wij het beste onze applicatie en het onderzoek eromheen kunnen laten zien aan het publiek, door middel van uiteraard de website waar u zich nu op bevindt; GitHub.

## Concept
Mijn concept is een matching app voor mensen met huisdieren, waarin je een profiel kan aanmaken op basis van je huisdier en met elkaar kan matchen. Match eerst met een huisdier voordat je de persoon erachter kan zien, en misschien vind je wel de liefde van je leven. De feature die ik op basis van dit concept heb gemaakt is het maken en bewerken van je profiel, die je uiteraard deelt met je huisdier, een dubbel-profiel dus.

## Install and Run Application
Ten eerste heeft u de volgende programma's nodig om de applciatie te installeren en te runnen:
- NPM
- Node

Mijn applicatie maakt ook gebruik van een Database:
- MongoDB

Om mijn applicatie op uw eigen apparaat te installeren en uit te voeren moeten er een aantal simpele stappen ondernomen worden. Ten eerste moet de repository gecloned worden, vul de volgende regel in in de GIT Bash.
```
$ git clone https://github.com/Joosiii/BlokTech/
```
Vervolgens installeert u de nodige pakketten via de terminal.
```
npm install
```
Hierna kan de applicatie lokaal uitgevoerd worden door de volgende regel in de terminal in te voeren.
```
node app.js
```
U krijgt een alert dat de app gehost wordt binnen uw lokale systeem, in dit geval op portnummer 4000. Dit nummer kunt u ten alle tijde wijzigen door de `const port = 4000;` te wijzigen bovenin het app.js bestand.

Om gebruik te maken van de MongoDB database heeft u een eigen .env file nodig waarin u uw eigen gegevens invult. Om te kijken hoe dit moet kunt u de code binnen [VOORBEELDenv](https://github.com/Joosiii/BlokTech/blob/master/VOORBEELDenv) kopiëren en personaliseren binnen uw eigen file.
De structuur van een document binnen mijn database ziet er als volgende uit:
```
  {
        "name": "",
        "age": "",
        "bio": "",
        "interests": ["", ""],
        "name_a": "",
        "age_a": "",
        "type_a": "",
        "breed_a": "",
        "bio_a": ""
  }
```

## License
Ik maak gebruik van de [MIT License](https://github.com/Joosiii/BlokTech/blob/master/LICENSE).

----------------------
Lees voor meer informatie verder in de [Wiki](https://github.com/Joosiii/BlokTech/wiki)!

