# API som hanterar tidigare jobbposter
Detta repo innehåller kod ett REST API byggt med Express och stöd för CORS. API:et hanterar de olika jobbposter jag haft sedan gymnasiet. 
CRUD (Create, Read, Update, Delete) är implementerad.

## Installation, databas
API:et använder en MongoDB-databas för att lagra data.
Klona ner repot, kör kommandot npm install för att installera de npm-paket som används. 
Skapa en databas i mongoDB(compass) och connect:a till den och lägg sedan in den länken i "mongoose.connect("url")".
Kör filen install.js för att skapa/tömma collection workposts.

workposts använder ett schema som ser ut såhär: 

companyName:{
        type: String, 
        required: true
    },
    jobTitle:{
        type: String, 
        required: true
    },
    location:{
        type: String, 
        required: true
    },
    description:{
        type: String, 
        required: false
    }

install.js skapar även två jobbposter som sedan läggs in i tabellen.

## Användning
Nedan finns de olika sätt API:et kan anropas

|Metod  |Ändpunkt     |Beskrivning                                                                           |
|-------|-------------|--------------------------------------------------------------------------------------|
|GET    |/workposts        |Hämtar alla jobbposter som ligger i collection workposts                                                  |
|POST    |/workposts | Lagrar en ny jobbpost i databasen. kräver ett objekt i body som följer det schema som används för att funka.                                             |
|PUT   |/workposts/:id | Uppdaterar en jobbpost, kräver ett id som skickas med i url samt samma typ av body innehåll som POST anropet                           |
|DELETE |/workposts/:id |Raderar en jobbpost från databasen där id matcher det som skickats med i länken.                                                       |

Datan på databasen lagras i BSON och kan se ut såhär:
```
{
   _id: "662802797ee1ea47f7761022",
   companyName: "Axfood",
   jobTitle: "Butiksmedarbetare",
   location: "Kungenskurva",
   description: "Plockteam och kassa arbete"
}
