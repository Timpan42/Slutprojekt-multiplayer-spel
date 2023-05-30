# Slutprojekt 2023 - Hot potato multiplayer game
2023-05-30

### Skapad av
Tim Fagerdal

Github: https://github.com/Timpan42 

Spel länk:
https://car-hot-potato.glitch.me/

## Inledning
Detta är ett spel med reglerna av leken hot potato, som är gjord med spelmotorn Phaser 3 och server paketet socket.io. 

## Bakgrund 
Detta projekt använder sig av en tutorial som heter [Create a Basic Multiplayer Game in Phaser 3 with Socket.io](https://gamedevacademy.org/create-a-basic-multiplayer-game-in-phaser-3-with-socket-io-part-1). Samt används HTML, CSS och Javascript för att vissa sidan på webben. Phaser 3 är spelets motor som hanterar inmatningen av olika element samt spelets logic. Socket.io är set att skapa enkel kommunikation mellan klienter och en server. Socket.io används för att kunna skapa servern samt skicka information mellan de olika spelarna. Glitch använd för att hosta spelet. 

## Vad gick bra och vad jag lärde mig 
Det som gick bra var att kuna följa tuorialn och att kunna skapa själva servern och kommunikationen mellan phaser spel mappen(klienten) och servern. 

Jag lärde mig om hur man kunde skicka information mellan en klient och en server, med att använda socket.brodcast och emit.io. Och använda informationen för att utföra dem olika funktionerna som spelet har. 

## Vad dick dåligt 
Jag hade många problem från början med att förstå hur man skulle skicka den rätta informationen mellan servern och klienten, samt förstå de regler socket.io följer för hur man skickar info. 

Andra problem som jag stötte på var att använda på olika phaser 3 funktioner utan att få error medelande som crashar allt. Det fanns också andra inputs som inte funkade. Utan att riktigt förstå varför dem inte funkar. Speciellt coalition funktioner inte alls utom om man skickade informationen först till servern och sen senare tillbaka till klienteten igen. 

Jag har behövt lägga ner många timar bara för att fixa de många bugs som har uppstått under vägen som kunde har gått till att kuna göra klart allt annat i projektet

## Slutsats 
Det har varit roligt att jobbat med detta spel men väldigt frustrerande som gjorde att jag behövde lägga ner mycket tid till bug fixning än kunna utveckla spelet.  

## Tutorial användning 

[Create a Basic Multiplayer Game in Phaser 3 with Socket.io](https://gamedevacademy.org/create-a-basic-multiplayer-game-in-phaser-3-with-socket-io-part-1)

Jag tycker att denna tutorial inte var så bra med att förklara grunder till phaser 3 och socket.io. Samt att den värka göra mer problem om man vill försöka utöka koden och ändra den. 