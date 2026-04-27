const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../client/src/i18n/locales');

const updates = {
  pt: {
    review1_tenure: "9 anos no Airbnb",
    review1_date: "janeiro de 2026",
    review1_text: "Nossa hospedagem foi maravilhosa! Para aqueles que gostam de algo diferente e contato direto com a natureza. Local paradisíaco!!!",
    review2_tenure: "11 anos no Airbnb",
    review2_date: "julho de 2025",
    review2_text: "Loved staying at Yara Floating Villa! Staff very welcoming and proactive. Very peaceful, even although we are in the middle of the ocean, you don't have the movements of the sea. We stayed at the best place for kitesurfers. I'll come back for sure to Yara. Thanks everyone!!",
    review3_tenure: "12 anos no Airbnb",
    review3_date: "3 semanas atrás",
    review3_text: "Si de verdad quieres tener una experiencia inmersiva, desconectar y sentirte como en una isla desierta, este es tu lugar.\nGracias por un recuerdo único!",
    review4_tenure: "6 anos no Airbnb",
    review4_date: "julho de 2025",
    review4_text: "We had a very unique stay on the floating vila in Guriu! The vila is placed between beautiful surroundings. Everyday we could view the sunset beautifully. It was a peaceful place but with lots to do. The spot is perfect if you are into kitesurf. You can launch your kite from the vila. If you are not kiting you can enjoy the beautiful surroundings. The staff was very helpful & made us delicious breakfasts. We had a boat driver at our service 24/7. So anytime we wanted to get on the main land, it was possible. I recommend visiting this place, it is one of the most unique stays I've been to so far :) Thankyou for everything Rodrigo!"
  },
  en: {
    review1_tenure: "9 years on Airbnb",
    review1_date: "January 2026",
    review1_text: "Our stay was wonderful! For those who like something different and direct contact with nature. A heavenly place!!!",
    review2_tenure: "11 years on Airbnb",
    review2_date: "July 2025",
    review2_text: "Loved staying at Yara Floating Villa! Staff very welcoming and proactive. Very peaceful, even although we are in the middle of the ocean, you don't have the movements of the sea. We stayed at the best place for kitesurfers. I'll come back for sure to Yara. Thanks everyone!!",
    review3_tenure: "12 years on Airbnb",
    review3_date: "3 weeks ago",
    review3_text: "If you really want an immersive experience, to disconnect and feel like you are on a desert island, this is your place.\nThanks for a unique memory!",
    review4_tenure: "6 years on Airbnb",
    review4_date: "July 2025",
    review4_text: "We had a very unique stay on the floating vila in Guriu! The vila is placed between beautiful surroundings. Everyday we could view the sunset beautifully. It was a peaceful place but with lots to do. The spot is perfect if you are into kitesurf. You can launch your kite from the vila. If you are not kiting you can enjoy the beautiful surroundings. The staff was very helpful & made us delicious breakfasts. We had a boat driver at our service 24/7. So anytime we wanted to get on the main land, it was possible. I recommend visiting this place, it is one of the most unique stays I've been to so far :) Thankyou for everything Rodrigo!"
  },
  es: {
    review1_tenure: "9 años en Airbnb",
    review1_date: "enero de 2026",
    review1_text: "¡Nuestra estancia fue maravillosa! Para los que les gusta algo diferente y el contacto directo con la naturaleza. ¡¡¡Un lugar paradisíaco!!!",
    review2_tenure: "11 años en Airbnb",
    review2_date: "julio de 2025",
    review2_text: "¡Me encantó alojarme en Yara Floating Villa! El personal es muy acogedor y proactivo. Muy tranquilo, aunque estamos en medio del océano, no tienes los movimientos del mar. Nos alojamos en el mejor lugar para los kitesurfistas. Volveré seguro a Yara. ¡¡Gracias a todos!!",
    review3_tenure: "12 años en Airbnb",
    review3_date: "hace 3 semanas",
    review3_text: "Si de verdad quieres tener una experiencia inmersiva, desconectar y sentirte como en una isla desierta, este es tu lugar.\nGracias por un recuerdo único!",
    review4_tenure: "6 años en Airbnb",
    review4_date: "julio de 2025",
    review4_text: "¡Tuvimos una estancia muy única en la villa flotante en Guriu! La villa está situada en un entorno hermoso. Todos los días pudimos ver el atardecer maravillosamente. Era un lugar tranquilo pero con mucho que hacer. El lugar es perfecto si te gusta el kitesurf. Puedes lanzar tu cometa desde la villa. Si no haces kite, puedes disfrutar del hermoso entorno. El personal fue muy servicial y nos hizo deliciosos desayunos. Teníamos un conductor de barco a nuestro servicio 24/7. Así que siempre que queríamos ir a tierra firme, era posible. Recomiendo visitar este lugar, es una de las estancias más únicas en las que he estado hasta ahora :) ¡Gracias por todo Rodrigo!"
  },
  fr: {
    review1_tenure: "9 ans sur Airbnb",
    review1_date: "janvier 2026",
    review1_text: "Notre séjour a été merveilleux ! Pour ceux qui aiment la différence et le contact direct avec la nature. Un endroit paradisiaque !!!",
    review2_tenure: "11 ans sur Airbnb",
    review2_date: "juillet 2025",
    review2_text: "J'ai adoré séjourner à la Yara Floating Villa ! Le personnel est très accueillant et proactif. Très paisible, même si nous sommes au milieu de l'océan, vous n'avez pas les mouvements de la mer. Nous avons séjourné dans le meilleur endroit pour les kitesurfeurs. Je reviendrai à Yara, c'est certain. Merci à tous !!",
    review3_tenure: "12 ans sur Airbnb",
    review3_date: "il y a 3 semaines",
    review3_text: "Si vous voulez vraiment vivre une expérience immersive, vous déconnecter et vous sentir comme sur une île déserte, c'est votre endroit.\nMerci pour ce souvenir unique !",
    review4_tenure: "6 ans sur Airbnb",
    review4_date: "juillet 2025",
    review4_text: "Nous avons passé un séjour très unique dans la villa flottante de Guriu ! La villa est située dans un cadre magnifique. Chaque jour, nous pouvions admirer magnifiquement le coucher du soleil. C'était un endroit paisible mais avec beaucoup de choses à faire. L'endroit est parfait si vous aimez le kitesurf. Vous pouvez lancer votre aile depuis la villa. Si vous ne faites pas de kite, vous pouvez profiter de la beauté des environs. Le personnel était très serviable et nous a préparé de délicieux petits-déjeuners. Nous avions un chauffeur de bateau à notre service 24h/24 et 7j/7. Donc, chaque fois que nous voulions aller sur la terre ferme, c'était possible. Je recommande de visiter cet endroit, c'est l'un des séjours les plus uniques que j'aie jamais faits jusqu'à présent :) Merci pour tout Rodrigo !"
  },
  de: {
    review1_tenure: "9 Jahre auf Airbnb",
    review1_date: "Januar 2026",
    review1_text: "Unser Aufenthalt war wunderbar! Für diejenigen, die etwas anderes und direkten Kontakt mit der Natur mögen. Ein himmlischer Ort!!!",
    review2_tenure: "11 Jahre auf Airbnb",
    review2_date: "Juli 2025",
    review2_text: "Ich habe es geliebt, in der Yara Floating Villa zu übernachten! Das Personal war sehr freundlich und proaktiv. Sehr friedlich, obwohl wir mitten im Ozean sind, spürt man die Bewegungen des Meeres nicht. Wir waren am besten Ort für Kitesurfer. Ich werde auf jeden Fall nach Yara zurückkehren. Danke an alle!!",
    review3_tenure: "12 Jahre auf Airbnb",
    review3_date: "vor 3 Wochen",
    review3_text: "Wenn Sie wirklich eine immersive Erfahrung machen, abschalten und sich wie auf einer einsamen Insel fühlen möchten, ist dies Ihr Ort.\nDanke für eine einzigartige Erinnerung!",
    review4_tenure: "6 Jahre auf Airbnb",
    review4_date: "Juli 2025",
    review4_text: "Wir hatten einen sehr einzigartigen Aufenthalt in der schwimmenden Villa in Guriu! Die Villa liegt in einer wunderschönen Umgebung. Jeden Tag konnten wir den Sonnenuntergang wunderschön betrachten. Es war ein friedlicher Ort, an dem es jedoch viel zu tun gab. Der Ort ist perfekt, wenn Sie Kitesurfen mögen. Sie können Ihren Drachen von der Villa aus starten. Wenn Sie nicht kiten, können Sie die wunderschöne Umgebung genießen. Das Personal war sehr hilfsbereit und hat uns köstliches Frühstück gemacht. Wir hatten rund um die Uhr einen Bootsfahrer zur Verfügung. So konnten wir jederzeit ans Festland fahren, wenn wir wollten. Ich empfehle einen Besuch dieses Ortes, es ist einer der einzigartigsten Aufenthalte, die ich bisher hatte :) Danke für alles Rodrigo!"
  }
};

for (const lang in updates) {
  const filePath = path.join(localesDir, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    Object.assign(data, updates[lang]);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
    console.log(`Updated ${lang}.json`);
  } else {
    console.log(`${lang}.json not found!`);
  }
}
