# Planering  

Multiplayer spel: Ska försöka göra ett multiplayer spel baserad på denna tutorial:

Del 1:
https://gamedevacademy.org/create-a-basic-multiplayer-game-in-phaser-3-with-socket-io-part-1/?utm_source=ActiveCampaign&utm_medium=email&utm_content=Your+FREE+courses%3A+Phaser+101%2C+Unreal+Blueprints%2C+PLUS+tutorials+on+Unity%2C+Phaser+multiplayer&utm_campaign=Free+Content+39&vgo_ee=15SQIysx7foSH%2Fs4ZSbMNn65SiGcIPEzHp4i%2FP8bn%2F4yfo1U7shSixVz%3AzyrVgd99MSB7RvyT8%2B9Z99a3BF1OSSFu 

Del 2:
https://gamedevacademy.org/create-a-basic-multiplayer-game-in-phaser-3-with-socket-io-part-2/ 

Ska försöka på den att funka först innan jag gör någon typ av stil eller andra idéer till projektet.Dock ska det finnas något typ av poängsystem som kan bli sparat på en databas och att andra spelare kan se det.  

Ide: ett spel som likna tagen och poängen är räknad på hur länge man inte är tagen eller hur många man kan ta under en viss tid.

En till ide: Ett spel som hot potato, den som holler bomben när den sprängs är ut ur spelet dock får man poäng
när man håller i den. Man ska få så många poäng som möjlig och överleva så länge man kan.
När man rör en annan spelare få dem bomben och den som hade bomben är säker i några sekunder. Den med mest poäng
vid slutet av spelet vinner och deras poäng hamnar på en server med alla som har spelat (leader board). 

Planering kommer garanterat att ändras beroende på hur länge tutorial kommer att ta, som är svårt att säga nu. Så hur mycket tid jag har för min egna ideer kommer att ändras. Samt kommer planeringen utökas.

| Vecka 	| Tisdag                                	                   | Fredag                   	|
|-------	|---------------------------------------	                   |--------------------------	|
| 16    	| Jag planerar                          	                   | Börja med tutorial       	|
| 17    	| Helst kommit någon vart med tutorial  	                   | Fortsätter med tutorial  	|
| 18    	| Jobba med mina egna ideer: Planera ut iden den i planeringen.| Ut öka iden samt börja att programera den|
| 19    	| Programmering                         	                    | Ska funka                	|
| 20    	| Fixa problem                          	                    | Hosta                    	|
| 21    	| Lite roligt                           	                    | Martini                  	|

# veka 16
## Tisdag
### Vad gjordes sist
Börjat projekt had inget att skriva.

### Vad ska göras 
Ska skriva en planering till projektet.

### Vad gick fel
Tog längre tid att skriva planering än jag ville. 

## Fredag
### Vad gjordes sist
Jag skrev planering som tog för lång tid.

### Vad ska göras 
Ska börja med att installera allt från tutorial och sen börja arbeta med den.  

### Vad gick fel
Hade problem med att starta projektet, men annars gå det framåt.

### Har gjort 
Har gjort klart del 1 och har börjat med del 2 med att ladda in assets.

# veka 17
## Tisdag
### Vad gjordes sist
Gjorde en grund ide till spelet (kan ändras!) och gjorde klar del 1, samt laddat ner assets genom tutorialn.   

### Vad ska göras 
Ska börja med del 2 och bli klar med den. 

### Vad gick fel
Behövde fel söka mycket för att hitta problem som att servern fick ett error med dellande som jag inte förstå vad det är. Men kommenterade ut den dellen för nu.

Hade också problem med att få koden från tutorialn att funka, en var mitt fel för jag skrev fel på en bit kod.
Den andra var när jag skulle skapa den rörande funktionen. Tutorialn använde sig av wrap som är en function som var implementerad i phaser på version 3.3.0. Det blir ett problem när dem som gjorde tutorial sate versionen till 3.0.0 som inte har wrap. Så det var roligt att fel söka. 

### Har gjort 
Har gjort stora delar av del 2 tutorial men är inte klar, ska fortsätta på den nästa lektion från punkt "Handling other player movements" 

## Fredag
### Vad gjordes sist
Arbetade med tutorialn del 2, han en del av den och behövde fel söka vissa saker för att koden inte funkade. 

### Vad ska göras 
Ska göra klart del 2

### Vad gick fel
Hade lite problem med att lägga koden rätt men gick att lösa ganska snabbt.

### Har gjort 
Gjorde klart del 2, kan nu ta upp kärnor för att få poäng. 

# veka 18
## Tisdag
### Vad gjordes sist
Gjorde klar del 2 och är nu klar med tutorioln.

### Vad ska göras 
Ska fixa att spelet uppdateras när en spelare går med och lämnar, så man inte behöver starta om spelet för att se andra spelaren. Utveckla på min ide, hitta assets och andra roliga saker. Kanske börja koda på den också. 

### Vad gick fel
Hade lite problem att fixa uppdaterings dellen men löste det.

### Har gjort 
Har fixad uppdateringen och hittat assets för bilarna, håller på med att rita bakgrunden. 

## Fredag
### Vad gjordes sist
Letade och gjorde klart assets som spelet kan behöva. 

### Vad ska göras 
Ska börja med att föra in alla assets i spelet, senare ska jag fixa bomb funktionen så att spelaren blir påverkad av den. 

### Vad gick fel
Jag har haft många problem med att ändra på den här koden. Jag trode det skulle vara enkelt att fixa färgerna med det hade jag problem med. Hade också problem med att få kärnan att inte försvinna när spelaren rör den, nu funkar det bara på den blåa spelaren. Hittar inte vad som gör att det inte funkar.

### Har gjort 
Kan har mer färger i spelet och har börjat att årrna så att spelaren kan hålla i bomben. 

# veka 19
## Tisdag
### Vad gjordes sist
Det finns olika färger man kan bli och beroende på färg kan man se dens team score. Spelaren kan inte ta upp stjärnan men man få poäng om man är på den. Det finns en bakgrund och spelarna är bilar. 

### Vad ska göras 
Fixa stjärnan så man kan ta upp dem och spelaren håller den. Sedan ska man kunna ge bomben till andra. 

### Vad gick fel
Jag var sjuk så jag jobbade inte så mycket.
Gjorde arbetet på onsdag 

### Har gjort 
Man kan hålla bomben och kan ta med den om man hamnar utanför karten och kommer runt.

## Fredag
### Vad gjordes sist

### Vad ska göras 

### Vad gick fel
Blev sjuk, jobbade inte 

### Har gjort 

# veka 20
## Tisdag
### Vad gjordes sist
Sist gjorde jag det möjligt att kuna hålla bomben och få poäng, samt ta med om man hamnar utan för kartan 

### Vad ska göras 
Ska göra om man rör en annan spelare så ska man kuna sno/ge bomben till andra spelaren. 
Ska göra vägar där spelaren inte kan köra. 

### Vad gick fel
collidern funkar inte 

### Har gjort 
Gjorde klart att man kan sno/ge bomben till andra spelare samt kan det komma till backa efter att har sprängs. 
Det finns walls som ska få en colliders så man inte kan göra igenom dem.

## Fredag
### Vad gjordes sist

### Vad ska göras 

### Vad gick fel

### Har gjort 

# veka 21
## Tisdag
### Vad gjordes sist
Fixa så att sno bomben funkar samt att spelaren kan försvinna men behöver utvecklas. Fixa de collationen med wall

### Vad ska göras 
Fixa hosting, om spelaren sprängs och bugar.

### Vad gick fel
Jag vet inte hur man ska göra för att få bort spelaren som förlorade/exploderade från spelet.

### Har gjort 
Gjorde sp hostingen funkar, kunde inte fixa så spelaren förvinner ur spelet när dem sprängs. Dem kommer connectar bara igen. Gjorde sno funktionen bättre.  

## Fredag
### Vad gjordes sist
Hostade på glitch som funkar och gjorde att sno funktionen funkar lite bättre. Försökte fixa så spelaren försvinner efter att bomben exploderade medans spelaren håller den. 

### Vad ska göras 
Ska fixa försvinn dellen så spelaren inte kan fortsätta köra. Försöka fixa mer bugar (att man inte kan ta upp bomben efter den har spana in igen). Kan lägga till lite CSS.

### Vad gick fel
Jag försökte fixa så att spelaren blir stoppad när dem har bomben och den sprängs. Men det funkade inte samt har jag problem att emita spesefika saker till game scenen som gör att fel saker händer eller saker som inte borde hända. För stå inte varför jag har denna problem 

### Har gjort 
Försökt jobba med att ta bort/stoppa spelaren, men fick inte det att funka. 


# veka 22
## Tisdag
### Vad gjordes sist
Jag försökte fixa så spelaren kan nå ett game over tillfälle, som inte funkade. Det vart mer bugs än jag startade med 

### Vad ska göras 
Skriva PM och sen försöka fixa bugs.

### Vad gick fel


### Har gjort 

## Fredag
### Vad gjordes sist

### Vad ska göras 

### Vad gick fel

### Har gjort 

