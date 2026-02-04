(function () {
  const I18N = {
    it: {
      // NAV + FOOTER
      nav_home: "Home",
      nav_about: "Chi Siamo",
      nav_perfumes: "Profumi",
      nav_faq: "FAQ",
      nav_contacts: "Contatti",
      nav_login: "Login",
      nav_cart: "Carrello",
      footer_sub: "Profumeria artistica",
      footer_rights: "Tutti i diritti riservati.",

      // SOCIAL
      social_title: "Social",
      social_intro: "Stiamo preparando i nostri canali ufficiali. A breve troverai qui i link verificati.",
      social_note: "Nel frattempo, per richieste e assistenza puoi scriverci a:",

      // HOME
      men_title: "Fragranze Uomo",
      men_p1: "Note profonde, strutturate, talvolta scure. Profumi che nascono da resine, legni caldi, spezie e accordi aromatici capaci di lasciare una traccia netta, riconoscibile, mai urlata.",
      men_p2: "Ogni fragranza maschile è pensata come una firma olfattiva: essenziale, decisa, elegante. Non segue le mode, le attraversa.",
      women_title: "Fragranze Donna",
      women_p1: "Luminose, avvolgenti, sensuali. Le fragranze femminili raccontano sfumature floreali, accenti gourmand, contrasti morbidi e inattesi.",
      women_p2: "Profumi che non definiscono, ma suggeriscono. Che accompagnano la pelle con eleganza naturale, lasciando una presenza sottile, persistente, profondamente personale.",

      // CHI SIAMO (set principale)
      about_title: "Chi Siamo",
      about_lead: "The House of Perfume è una profumeria artistica dal gusto dark & gold: una casa di fragranze pensata per chi cerca eleganza, carattere e una firma olfattiva riconoscibile.",
      about_p1: "Selezioniamo profumi che non gridano: restano. Composizioni costruite con equilibrio, capaci di accompagnare la pelle come un abito su misura. Ogni scelta nasce da un’idea semplice: la qualità non è un dettaglio, è l’identità.",
      about_vision_title: "La nostra visione",
      about_vision_p1: "Crediamo nella bellezza delle sfumature: note calde e resinose, accenti speziati, trasparenze luminose, accordi morbidi e persistenti. Fragranze che evolvono nel tempo e raccontano qualcosa di personale, senza bisogno di eccessi.",
      about_vision_p2: "Per noi un profumo è un rituale quotidiano: un gesto intimo che cambia il tono di una giornata, che completa un look, che lascia una scia discreta ma memorabile.",
      about_offer_title: "Cosa trovi da noi",
      about_offer_p1: "Una selezione curata di fragranze uomo e donna, pensate per chi vuole distinguersi con sobrietà. Dalle interpretazioni più essenziali a quelle più avvolgenti, ogni proposta è scelta per personalità, qualità e coerenza estetica.",
      about_offer_p2: "Il nostro stile è quello di una boutique: pochi elementi, ben scelti. Atmosfera scura, dettagli dorati, e una narrazione raffinata che mette al centro la scia - non il rumore.",
      about_service_title: "Servizio e cura",
      about_service_p1: "Ogni ordine è gestito con attenzione, perché l’esperienza deve essere all’altezza della fragranza scelta. Dal primo click alla consegna, puntiamo a un percorso chiaro, semplice e credibile.",
      about_service_p2: "Se vuoi contattarci, trovi il form nella pagina Contatti: ti risponderemo con piacere.",

      // CHI SIAMO (alias)
      vision_title: "La nostra visione",
      vision_p1: "Crediamo nella bellezza delle sfumature: note calde e resinose, accenti speziati, trasparenze luminose, accordi morbidi e persistenti. Fragranze che evolvono nel tempo e raccontano qualcosa di personale, senza bisogno di eccessi.",
      vision_p2: "Per noi un profumo è un rituale quotidiano: un gesto intimo che cambia il tono di una giornata, che completa un look, che lascia una scia discreta ma memorabile.",
      offer_title: "Cosa trovi da noi",
      offer_p1: "Una selezione curata di fragranze uomo e donna, pensate per chi vuole distinguersi con sobrietà. Dalle interpretazioni più essenziali a quelle più avvolgenti, ogni proposta è scelta per personalità, qualità e coerenza estetica.",
      offer_p2: "Il nostro stile è quello di una boutique: pochi elementi, ben scelti. Atmosfera scura, dettagli dorati, e una narrazione raffinata che mette al centro la scia - non il rumore.",
      service_title: "Servizio e cura",
      service_p1: "Ogni ordine è gestito con attenzione, perché l’esperienza deve essere all’altezza della fragranza scelta. Dal primo click alla consegna, puntiamo a un percorso chiaro, semplice e credibile.",
      service_p2: "Se vuoi contattarci, trovi il form nella pagina Contatti: ti risponderemo con piacere.",

      // PROFUMI
      perfumes_title: "Profumi",
      perfumes_sub: "Selezione in aggiornamento: 6 fragranze disponibili e nuove aggiunte in arrivo.",
      page_title: "Profumi — The House of Perfume",
      page_desc: "Catalogo profumi — The House of Perfume.",

      // FAQ
      faq_title: "FAQ",
      faq_sub: "Risposte rapide alle domande più comuni. Se ti serve altro, scrivici dalla pagina Contatti.",
      faq_q1: "Quanto costa la spedizione?",
      faq_a1: "La spedizione è tracciata. Costi e disponibilità vengono indicati durante il checkout.",
      faq_q2: "In quanto tempo arriva l’ordine?",
      faq_a2: "Normalmente 24/48 ore lavorative dalla conferma. I tempi possono variare in alta stagione o per zone remote.",
      faq_q3: "Posso fare un reso?",
      faq_a3: "Sì, entro 14 giorni dalla consegna. Per avviare la procedura contattaci dalla pagina Contatti.",
      faq_q4: "Che differenza c’è tra 50 ml e 100 ml?",
      faq_a4: "Stessa fragranza, diverso formato. Il 50 ml è ideale per provare o viaggiare, il 100 ml per un uso più continuativo.",
      faq_q5: "I profumi sono Eau de Toilette?",
      faq_a5: "Sì. Le fragranze della collezione sono Eau de Toilette (EDT), pensate per un uso elegante e quotidiano.",
      faq_q6: "Quanto dura una fragranza EDT?",
      faq_a6: "La durata varia in base a pelle, ambiente e quantità applicata. In genere una EDT offre una presenza equilibrata e naturale.",
      faq_q7: "Come posso far durare di più il profumo?",
      faq_a7: "Applica su pelle idratata e sui punti di pulsazione (polsi, collo). Evita di strofinare i polsi: può alterare l’evoluzione della fragranza.",
      faq_q8: "Posso modificare o annullare un ordine?",
      faq_a8: "Se l’ordine non è ancora in preparazione, spesso è possibile intervenire. Contattaci il prima possibile dalla pagina Contatti.",
      faq_q9: "Dove posso chiedere assistenza?",
      faq_a9: "Scrivici dalla pagina Contatti: ti rispondiamo il prima possibile con indicazioni chiare e complete.",

      // CONTATTI
      contacts_title: "Contatti",
      contacts_sub: "Scrivici per informazioni, disponibilità, consigli sulle fragranze o assistenza.",
      contacts_form_title: "Invia un messaggio",
      contacts_form_note: "Il modulo è in preparazione. Per ora puoi contattarci direttamente via email.",
      contacts_name_label: "Nome",
      contacts_name_ph: "Il tuo nome",
      contacts_surname_label: "Cognome",
      contacts_surname_ph: "Il tuo cognome",
      contacts_email_label: "Email",
      contacts_email_ph: "nome@email.com",
      contacts_message_label: "Messaggio",
      contacts_message_ph: "Scrivi qui...",
      contacts_send_btn: "Invia",
      contacts_info_title: "Informazioni",
      contacts_info_email_label: "Email:",
      contacts_info_company_label: "Ragione Sociale:",
      contacts_info_address_label: "Sede Legale:",
      contacts_info_vat_label: "P. Iva:",

      // POPUP
      toast_title: "Messaggio inviato",
      toast_text: "Ti risponderemo il prima possibile.",
      toast_ok: "OK",

      // LOGIN

      // REGISTRAZIONE
      reg_title: "Crea il tuo account",
      reg_intro: "Registrati per gestire il tuo profilo e velocizzare il checkout.",
      reg_box_title: "Registrazione",
      reg_label_name: "Nome",
      reg_label_surname: "Cognome",
      reg_label_email: "Email",
      reg_label_password: "Password",
      reg_label_password2: "Ripeti Password",

      // INSCRIPTION (placeholder)
      reg_ph_name: "Il tuo nome",
      reg_ph_surname: "Il tuo cognome",
      reg_ph_email: "nome@email.com",
      reg_ph_password: "••••••••",
      reg_ph_password2: "••••••••",
      reg_btn_create: "Crea account",

      reg_why_title: "Perché registrarsi",
      reg_why_1: "Gestione più rapida degli ordini",
      reg_why_2: "Checkout semplificato",
      reg_why_3: "Accesso al tuo profilo personale",
      reg_note: "La registrazione è in fase di attivazione. Per assistenza puoi contattarci via email.",

      // REGISTRAZIONE (placeholder)
      reg_ph_name: "Il tuo nome",
      reg_ph_surname: "Il tuo cognome",
      reg_ph_email: "nome@email.com",
      reg_ph_password: "••••••••",
      reg_ph_password2: "••••••••",

      login_title: "Area Cliente",
      login_intro: "Accedi per gestire il tuo profilo e velocizzare il checkout.",
      login_box_title: "Accedi",
      login_note: "La sessione viene salvata sul tuo dispositivo per mantenere l’accesso attivo.",
      login_label_email: "Email",
      login_label_password: "Password",
      login_email_ph: "nome@email.com",
      login_password_ph: "••••••••",
      login_remember: "Resta connesso",
      login_forgot: "Password dimenticata?",
      login_btn: "Accedi",

      login_benefits_title: "Vantaggi",
      login_benefit_1: "Salva indirizzi di spedizione",
      login_benefit_2: "Rivedi i tuoi ordini",
      login_benefit_3: "Checkout più rapido",

      login_no_account_title: "Non hai un account?",
      login_no_account_text: "Puoi creare un account in pochi passaggi.",
      login_create_account: "Crea account",

      login_connected_title: "Sei connesso",
      login_connected_note: "Sessione salvata sul dispositivo. Puoi fare logout quando vuoi.",
      login_go_cart: "Vai al carrello",
      login_logout: "Logout",

      login_profile_title: "Il tuo profilo",
      login_profile_addr: "Indirizzo: non impostato",
      login_profile_fav: "Preferiti: 0",
      login_profile_orders: "Ordini: 0",

      // REGISTRAZIONE (placeholder)
      reg_ph_name: "Il tuo nome",
      reg_ph_surname: "Il tuo cognome",
      reg_ph_email: "nome@email.com",
      reg_ph_password: "••••••••",
      reg_ph_password2: "••••••••",

      // CHECKOUT / CARRELLO
      checkout_title: "Carrello",
      checkout_sub: "Riepilogo ordine e checkout.",
      checkout_items_title: "Articoli",
      checkout_ship_hint: "Spedizione tracciata 24/48h",
      checkout_continue: "← Continua lo shopping",
      checkout_clear: "Svuota carrello",
      checkout_tip: "Suggerimento: aggiungi un profumo dal catalogo per iniziare.",
      checkout_summary_title: "Riepilogo",
      checkout_subtotal_label: "Subtotale",
      checkout_shipping_label: "Spedizione",
      checkout_total_label: "Totale",
      checkout_ship_method: "Metodo di spedizione",
      checkout_ship_standard: "Standard (2-3 giorni) - Gratis",
      checkout_ship_express: "Express (24/48h) - € 6",
      checkout_btn: "Procedi al checkout",
      checkout_payments_note: "Pagamenti accettati: PayPal · Visa · Mastercard · Bonifico",
      checkout_toast_title: "Checkout non disponibile",
      checkout_toast_text: "Pagamento non attivo in questa versione. Il checkout verrà collegato in una fase successiva.",
      checkout_alert_disabled: "Pagamento non attivo in questa versione. Il checkout verrà collegato in una fase successiva.",

      error_title: "Si è verificato un problema",
      error_lead: "L’operazione non può essere completata in questo momento.",
      error_text: "Ti invitiamo a riprovare più tardi oppure a tornare alla homepage.",
      error_btn_home: "Torna alla Home",
      error_btn_contacts: "Contattaci"
    },

    fr: {
      // NAV + FOOTER
      nav_home: "Accueil",
      nav_about: "À propos",
      nav_perfumes: "Parfums",
      nav_faq: "FAQ",
      nav_contacts: "Contacts",
      nav_login: "Connexion",
      nav_cart: "Panier",
      footer_sub: "Parfumerie artistique",
      footer_rights: "Tous droits réservés.",

      // SOCIAL
      social_title: "Réseaux sociaux",
      social_intro: "Nous préparons nos canaux officiels. Bientôt, vous trouverez ici les liens vérifiés.",
      social_note: "En attendant, pour toute demande et assistance, vous pouvez nous écrire à:",

      // HOME
      men_title: "Parfums Homme",
      men_p1: "Profondes, structurées, parfois sombres. Des fragrances nées de résines, de bois chauds, d’épices et d’accords aromatiques, capables de laisser une empreinte nette, reconnaissable, jamais criarde.",
      men_p2: "Chaque fragrance masculine est pensée comme une signature olfactive : essentielle, affirmée, élégante. Elle ne suit pas les modes, elle les traverse.",
      women_title: "Parfums Femme",
      women_p1: "Lumineuses, enveloppantes, sensuelles. Les fragrances féminines racontent des nuances florales, des accents gourmands, des contrastes doux et inattendus.",
      women_p2: "Des parfums qui ne définissent pas, mais suggèrent. Ils accompagnent la peau avec une élégance naturelle, laissant une présence subtile, persistente, profondément personnelle.",

      // CHI SIAMO (set principale)
      about_title: "À propos",
      about_lead: "The House of Perfume est une parfumerie artistique au style dark & gold : une maison de fragrances pensée pour celles et ceux qui recherchent élégance, caractère et une signature olfactive reconnaissable.",
      about_p1: "Nous sélectionnons des parfums qui ne crient pas : ils restent. Des compositions équilibrées, capables d’accompagner la peau comme un vêtement sur mesure. Chaque choix naît d’une idée simple : la qualité n’est pas un détail, c’est une identité.",
      about_vision_title: "Notre vision",
      about_vision_p1: "Nous croyons à la beauté des nuances : notes chaudes et résineuses, accents épicés, transparences lumineuses, accords doux et persistants. Des fragrances qui évoluent avec le temps et racontent quelque chose de personnel, sans excès.",
      about_vision_p2: "Pour nous, un parfum est un rituel quotidien : un geste intime qui change le ton d’une journée, qui complète un look, qui laisse un sillage discret mais mémorable.",
      about_offer_title: "Ce que vous trouverez chez nous",
      about_offer_p1: "Une sélection soignée de fragrances pour homme et femme, pour celles et ceux qui veulent se distinguer avec sobriété. Des interprétations les plus essentielles aux plus enveloppantes, chaque proposition est choisie pour sa personnalité, sa qualité et sa cohérence esthétique.",
      about_offer_p2: "Notre style est celui d’une boutique : peu d’éléments, bien choisis. Une atmosphère sombre, des détails dorés, et un récit raffiné qui place au centre le sillage — pas le bruit.",
      about_service_title: "Service et attention",
      about_service_p1: "Chaque commande est traitée avec soin, car l’expérience doit être à la hauteur de la fragrance choisie. Du premier clic à la livraison, nous visons un parcours clair, simple et crédible.",
      about_service_p2: "Si vous souhaitez nous contacter, vous trouverez le formulaire sur la page Contacts : nous vous répondrons avec plaisir.",

      // CHI SIAMO (alias)
      vision_title: "Notre vision",
      vision_p1: "Nous croyons à la beauté des nuances : notes chaudes et résineuses, accents épicés, transparences lumineuses, accords doux et persistants. Des fragrances qui évoluent avec le temps et racontent quelque chose de personnel, sans excès.",
      vision_p2: "Pour nous, un parfum est un rituel quotidien : un geste intime qui change le ton d’une journée, qui complète un look, qui laisse un sillage discret mais mémorable.",
      offer_title: "Ce que vous trouverez chez nous",
      offer_p1: "Une sélection soignée de fragrances pour homme et femme, pour celles et ceux qui veulent se distinguer avec sobriété. Des interprétations les plus essentielles aux plus enveloppantes, chaque proposition est choisie pour sa personnalité, sa qualité et sa cohérence esthétique.",
      offer_p2: "Notre style est celui d’une boutique : peu d’éléments, bien choisis. Une atmosphère sombre, des détails dorés, et un récit raffiné qui place au centre le sillage — pas le bruit.",
      service_title: "Service et attention",
      service_p1: "Chaque commande est traitée avec soin, car l’expérience doit être à la hauteur de la fragrance choisie. Du premier clic à la livraison, nous visons un parcours clair, simple et crédible.",
      service_p2: "Si vous souhaitez nous contacter, vous trouverez le formulaire sur la page Contacts : nous vous répondrons avec plaisir.",

      // PROFUMI
      perfumes_title: "Parfums",
      perfumes_sub: "Sélection en cours de mise à jour : 6 fragrances disponibles et de nouvelles arrivées bientôt.",
      page_title: "Parfums — The House of Perfume",
      page_desc: "Catalogue parfums — The House of Perfume.",

      // FAQ
      faq_title: "FAQ",
      faq_sub: "Réponses rapides aux questions les plus fréquentes. Si tu as besoin d’aide, écris-nous via la page Contacts.",
      faq_q1: "Combien coûte la livraison ?",
      faq_a1: "La livraison est suivie. Les coûts et la disponibilité sont indiqués pendant le paiement.",
      faq_q2: "En combien de temps la commande arrive-t-elle ?",
      faq_a2: "Généralement 24/48 h ouvrées après confirmation. Les délais peuvent varier en haute saison ou pour les zones isolées.",
      faq_q3: "Puis-je faire un retour ?",
      faq_a3: "Oui, sous 14 jours après livraison. Pour lancer la procédure, contacte-nous via la page Contacts.",
      faq_q4: "Quelle différence entre 50 ml et 100 ml ?",
      faq_a4: "Même fragrance, format différent. Le 50 ml est idéal pour tester ou voyager, le 100 ml pour un usage plus régulier.",
      faq_q5: "Les parfums sont-ils Eau de Toilette ?",
      faq_a5: "Oui. Les fragrances de la collection sont des Eau de Toilette (EDT), pensées pour un usage élégant et quotidien.",
      faq_q6: "Combien de temps dure une EDT ?",
      faq_a6: "La tenue varie selon la peau, l’environnement et la quantité appliquée. En général, une EDT offre une présence équilibrée et naturelle.",
      faq_q7: "Comment faire durer le parfum plus longtemps ?",
      faq_a7: "Applique sur peau hydratée et sur les points de pulsation (poignets, cou). Évite de frotter les poignets : cela peut modifier l’évolution du parfum.",
      faq_q8: "Puis-je modifier ou annuler une commande ?",
      faq_a8: "Si la commande n’est pas encore en préparation, il est souvent possible d’intervenir. Contacte-nous au plus vite via la page Contacts.",
      faq_q9: "Où demander de l’assistance ?",
      faq_a9: "Écris-nous via la page Contacts : nous répondrons au plus vite avec des indications claires et complètes.",
      // ERREUR
      error_title: "Un problème est survenu",
      error_lead: "L’opération ne peut pas être effectuée pour le moment.",
      error_text: "Nous vous invitons à réessayer plus tard ou à retourner à la page d’accueil.",
      error_btn_home: "Retour à l’accueil",
      error_btn_contacts: "Nous contacter",

      // CONTATTI
      contacts_title: "Contacts",
      contacts_sub: "Écris-nous pour des infos, disponibilité, conseils sur les fragrances ou assistance.",
      contacts_form_title: "Envoyer un message",
      contacts_form_note: "Le formulaire est en préparation. Pour l’instant, tu peux nous contacter directement par e-mail.",
      contacts_name_label: "Prénom",
      contacts_name_ph: "Ton prénom",
      contacts_surname_label: "Nom",
      contacts_surname_ph: "Ton nom",
      contacts_email_label: "Email",
      contacts_email_ph: "nom@email.com",
      contacts_message_label: "Message",
      contacts_message_ph: "Écris ici...",
      contacts_send_btn: "Envoyer",
      contacts_info_title: "Informations",
      contacts_info_email_label: "Email :",
      contacts_info_company_label: "Raison sociale :",
      contacts_info_address_label: "Siège social :",
      contacts_info_vat_label: "TVA :",

      // POPUP
      toast_title: "Message envoyé",
      toast_text: "Nous vous répondrons dès que possible.",
      toast_ok: "OK",

      // LOGIN
      login_title: "Espace client",
      login_intro: "Connecte-toi pour gérer ton profil et accélérer le paiement.",
      login_box_title: "Connexion",
      login_note: "La session est enregistrée sur ton appareil pour rester connecté.",
      login_label_email: "Email",
      login_label_password: "Mot de passe",
      login_email_ph: "nom@email.com",
      login_password_ph: "••••••••",
      login_remember: "Rester connecté",
      login_forgot: "Mot de passe oublié ?",
      login_btn: "Se connecter",

      login_benefits_title: "Avantages",
      login_benefit_1: "Enregistre les adresses de livraison",
      login_benefit_2: "Consulte tes commandes",
      login_benefit_3: "Paiement plus rapide",

      login_no_account_title: "Tu n’as pas de compte ?",
      login_no_account_text: "Tu peux créer un compte en quelques étapes.",
      login_create_account: "Créer un compte",

      login_connected_title: "Tu es connecté",
      login_connected_note: "Session enregistrée sur l’appareil. Tu peux te déconnecter quand tu veux.",
      login_go_cart: "Aller au panier",
      login_logout: "Déconnexion",

      login_profile_title: "Ton profil",
      login_profile_addr: "Adresse : non définie",
      login_profile_fav: "Favoris : 0",
      login_profile_orders: "Commandes : 0",

      // INSCRIPTION (placeholder)
      reg_ph_name: "Ton prénom",
      reg_ph_surname: "Ton nom",
      reg_ph_email: "nom@email.com",
      reg_ph_password: "••••••••",
      reg_ph_password2: "••••••••",

      // INSCRIPTION
      reg_title: "Créer votre compte",
      reg_intro: "Inscrivez-vous pour gérer votre profil et accélérer le paiement.",
      reg_box_title: "Inscription",
      reg_label_name: "Prénom",
      reg_label_surname: "Nom",
      reg_label_email: "Email",
      reg_label_password: "Mot de passe",
      reg_label_password2: "Répéter le mot de passe",
      // INSCRIPTION (placeholder)
      reg_ph_name: "Ton prénom",
      reg_ph_surname: "Ton nom",
      reg_ph_email: "nom@email.com",
      reg_ph_password: "••••••••",
      reg_ph_password2: "••••••••",
      reg_btn_create: "Créer un compte",

      reg_why_title: "Pourquoi s’inscrire",
      reg_why_1: "Gestion plus rapide des commandes",
      reg_why_2: "Paiement simplifié",
      reg_why_3: "Accès à votre profil personnel",
      reg_note: "L’inscription est en cours d’activation. Pour toute assistance, vous pouvez nous contacter par e-mail.",

      // INSCRIPTION (placeholder)
      reg_ph_name: "Ton prénom",
      reg_ph_surname: "Ton nom",
      reg_ph_email: "nom@email.com",
      reg_ph_password: "••••••••",
      reg_ph_password2: "••••••••",

      // INSCRIPTION
      reg_title: "Créer votre compte",
      reg_intro: "Inscrivez-vous pour gérer votre profil et accélérer le paiement.",
      reg_box_title: "Inscription",
      reg_label_name: "Prénom",
      reg_label_surname: "Nom",
      reg_label_email: "Email",
      reg_label_password: "Mot de passe",
      reg_label_password2: "Répéter le mot de passe",
      reg_btn_create: "Créer un compte",

      reg_why_title: "Pourquoi s’inscrire",
      reg_why_1: "Gestion plus rapide des commandes",
      reg_why_2: "Paiement simplifié",
      reg_why_3: "Accès à votre profil personnel",
      reg_note: "L’inscription est en cours d’activation. Pour toute assistance, vous pouvez nous contacter par e-mail.",

      // INSCRIPTION (placeholder)
      reg_ph_name: "Ton prénom",
      reg_ph_surname: "Ton nom",
      reg_ph_email: "nom@email.com",
      reg_ph_password: "••••••••",
      reg_ph_password2: "••••••••",

      // CHECKOUT / PANIER
      checkout_title: "Panier",
      checkout_sub: "Récapitulatif de commande et paiement.",
      checkout_items_title: "Articles",
      checkout_ship_hint: "Livraison suivie 24/48 h",
      checkout_continue: "← Continuer vos achats",
      checkout_clear: "Vider le panier",
      checkout_tip: "Conseil : ajoute un parfum depuis le catalogue pour commencer.",
      checkout_summary_title: "Récapitulatif",
      checkout_subtotal_label: "Sous-total",
      checkout_shipping_label: "Livraison",
      checkout_total_label: "Total",
      checkout_ship_method: "Mode de livraison",
      checkout_ship_standard: "Standard (2-3 jours) - Gratuit",
      checkout_ship_express: "Express (24/48 h) - 6 €",
      checkout_btn: "Procéder au paiement",
      checkout_payments_note: "Paiements acceptés : PayPal · Visa · Mastercard · Virement",
      checkout_toast_title: "Paiement indisponible",
      checkout_toast_text: "Le paiement n’est pas actif dans cette version. Le checkout sera connecté ultérieurement.",

      checkout_alert_disabled: "Le paiement n’est pas actif dans cette version. Le checkout sera connecté ultérieurement.",

      error_title: "Un problème est survenu",
      error_lead: "L’opération ne peut pas être effectuée pour le moment.",
      error_text: "Nous vous invitons à réessayer plus tard ou à retourner à la page d’accueil.",
      error_btn_home: "Retour à l’accueil",
      error_btn_contacts: "Nous contacter"

    },

    de: {
      // NAV + FOOTER
      nav_home: "Startseite",
      nav_about: "Über uns",
      nav_perfumes: "Düfte",
      nav_faq: "FAQ",
      nav_contacts: "Kontakt",
      nav_login: "Login",
      nav_cart: "Warenkorb",
      footer_sub: "Künstlerische Parfümerie",
      footer_rights: "Alle Rechte vorbehalten.",

            // SOCIAL
      social_title: "Soziale Netzwerke",
      social_intro: "Wir bereiten unsere offiziellen Kanäle vor. Bald findest du hier die verifizierten Links.",
      social_note: "In der Zwischenzeit kannst du uns bei Anfragen und Unterstützung schreiben an:",

      // HOME
      men_title: "Herrendüfte",
      men_p1: "Tief, strukturiert, mitunter dunkel. Düfte aus Harzen, warmen Hölzern, Gewürzen und aromatischen Akkorden – mit einer klaren, wiedererkennbaren Spur, niemals laut.",
      men_p2: "Jede maskuline Kreation ist als olfaktorische Signatur gedacht: essenziell, entschlossen, elegant. Sie folgt keinen Trends – sie durchquert sie.",
      women_title: "Damendüfte",
      women_p1: "Leuchtend, umhüllend, sinnlich. Feminine Düfte erzählen florale Nuancen, gourmandige Akzente sowie weiche, unerwartete Kontraste.",
      women_p2: "Düfte, die nicht definieren, sondern andeuten. Sie begleiten die Haut mit natürlicher Eleganz und hinterlassen eine subtile, anhaltende, zutiefst persönliche Präsenz.",

      // CHI SIAMO (set principale)
      about_title: "Über uns",
      about_lead: "The House of Perfume ist eine künstlerische Parfümerie im Stil dark & gold: ein Dufthaus für alle, die Eleganz, Charakter und eine wiedererkennbare olfaktorische Signatur suchen.",
      about_p1: "Wir wählen Düfte, die nicht schreien: Sie bleiben. Kompositionen mit Balance, die die Haut begleiten wie ein maßgeschneidertes Kleidungsstück. Jede Auswahl folgt einer einfachen Idee: Qualität ist kein Detail – sie ist Identität.",
      about_vision_title: "Unsere Vision",
      about_vision_p1: "Wir glauben an die Schönheit der Nuancen: warme, harzige Noten, würzige Akzente, leuchtende Transparenzen sowie weiche, anhaltende Akkorde. Düfte, die sich mit der Zeit entwickeln und etwas Persönliches erzählen – ohne Übermaß.",
      about_vision_p2: "Für uns ist ein Parfum ein tägliches Ritual: eine intime Geste, die den Ton eines Tages verändert, einen Look vollendet und eine diskrete, aber unvergessliche Spur hinterlässt.",
      about_offer_title: "Was Sie bei uns finden",
      about_offer_p1: "Eine kuratierte Auswahl an Düften für Herren und Damen – für alle, die sich mit Zurückhaltung abheben möchten. Von den essenziellsten bis zu den umhüllendsten Interpretationen: Jede Empfehlung wird nach Persönlichkeit, Qualität und ästhetischer Kohärenz ausgewählt.",
      about_offer_p2: "Unser Stil ist der einer Boutique: wenige Elemente, gut gewählt. Dunkle Atmosphäre, goldene Details und eine raffinierte Erzählung, die die Spur in den Mittelpunkt stellt – nicht den Lärm.",
      about_service_title: "Service und Sorgfalt",
      about_service_p1: "Jede Bestellung wird sorgfältig bearbeitet, denn das Erlebnis soll der gewählten Duftsignatur entsprechen. Vom ersten Klick bis zur Lieferung setzen wir auf einen klaren, einfachen und glaubwürdigen Ablauf.",
      about_service_p2: "Wenn Sie uns kontaktieren möchten, finden Sie das Formular auf der Kontaktseite: Wir antworten Ihnen gerne.",

      // CHI SIAMO (alias)
      vision_title: "Unsere Vision",
      vision_p1: "Wir glauben an die Schönheit der Nuancen: warme, harzige Noten, würzige Akzente, leuchtende Transparenzen sowie weiche, anhaltende Akkorde. Düfte, die sich mit der Zeit entwickeln und etwas Persönliches erzählen – ohne Übermaß.",
      vision_p2: "Für uns ist ein Parfum ein tägliches Ritual: eine intime Geste, die den Ton eines Tages verändert, einen Look vollendet und eine diskrete, aber unvergessliche Spur hinterlässt.",
      offer_title: "Was Sie bei uns finden",
      offer_p1: "Eine kuratierte Auswahl an Düften für Herren und Damen – für alle, die sich mit Zurückhaltung abheben möchten. Von den essenziellsten bis zu den umhüllendsten Interpretationen: Jede Empfehlung wird nach Persönlichkeit, Qualität und ästhetischer Kohärenz ausgewählt.",
      offer_p2: "Unser Stil ist der einer Boutique: wenige Elemente, gut gewählt. Dunkle Atmosphäre, goldene Details und eine raffinierte Erzählung, die die Spur in den Mittelpunkt stellt – nicht den Lärm.",
      service_title: "Service und Sorgfalt",
      service_p1: "Jede Bestellung wird sorgfältig bearbeitet, denn das Erlebnis soll der gewählten Duftsignatur entsprechen. Vom ersten Klick bis zur Lieferung setzen wir auf einen klaren, einfachen und glaubwürdigen Ablauf.",
      service_p2: "Wenn Sie uns kontaktieren möchten, finden Sie das Formular auf der Kontaktseite: Wir antworten Ihnen gerne.",

      // PROFUMI
      perfumes_title: "Düfte",
      perfumes_sub: "Auswahl wird aktualisiert: 6 Düfte verfügbar, neue Ergänzungen folgen in Kürze.",
      page_title: "Düfte — The House of Perfume",
      page_desc: "Duftkatalog — The House of Perfume.",

      // FAQ
      faq_title: "FAQ",
      faq_sub: "Schnelle Antworten auf die häufigsten Fragen. Wenn du mehr brauchst, schreib uns über die Kontakt-Seite.",
      faq_q1: "Wie viel kostet der Versand?",
      faq_a1: "Der Versand ist nachverfolgbar. Kosten und Verfügbarkeit werden im Checkout angezeigt.",
      faq_q2: "Wie schnell kommt die Bestellung an?",
      faq_a2: "In der Regel 24/48 Werktunden nach Bestätigung. Zeiten können in der Hochsaison oder in abgelegenen Gebieten variieren.",
      faq_q3: "Kann ich eine Rückgabe machen?",
      faq_a3: "Ja, innerhalb von 14 Tagen nach Lieferung. Um die Rückgabe zu starten, kontaktiere uns über die Kontakt-Seite.",
      faq_q4: "Was ist der Unterschied zwischen 50 ml und 100 ml?",
      faq_a4: "Gleicher Duft, anderes Format. 50 ml ist ideal zum Testen oder Reisen, 100 ml für regelmäßige Nutzung.",
      faq_q5: "Sind die Düfte Eau de Toilette?",
      faq_a5: "Ja. Die Düfte der Kollektion sind Eau de Toilette (EDT), gedacht für eine elegante, tägliche Nutzung.",
      faq_q6: "Wie lange hält eine EDT?",
      faq_a6: "Die Haltbarkeit hängt von Haut, Umgebung und aufgetragener Menge ab. In der Regel bietet eine EDT eine ausgewogene, natürliche Präsenz.",
      faq_q7: "Wie hält der Duft länger?",
      faq_a7: "Auf hydratisierte Haut und Pulspunkte auftragen (Handgelenke, Hals). Handgelenke nicht verreiben: das kann die Duftentwicklung verändern.",
      faq_q8: "Kann ich eine Bestellung ändern oder stornieren?",
      faq_a8: "Wenn die Bestellung noch nicht in Vorbereitung ist, kann oft noch eingegriffen werden. Kontaktiere uns so schnell wie möglich über die Kontakt-Seite.",
      faq_q9: "Wo kann ich Support bekommen?",
      faq_a9: "Schreib uns über die Kontakt-Seite: Wir antworten so schnell wie möglich mit klaren und vollständigen Infos.",
      // FEHLER
      error_title: "Es ist ein Problem aufgetreten",
      error_lead: "Der Vorgang kann im Moment nicht abgeschlossen werden.",
      error_text: "Bitte versuche es später erneut oder kehre zur Startseite zurück.",
      error_btn_home: "Zur Startseite",
      error_btn_contacts: "Kontakt",

      // CONTATTI
      contacts_title: "Kontakt",
      contacts_sub: "Schreib uns für Infos, Verfügbarkeit, Duftberatung oder Support.",
      contacts_form_title: "Nachricht senden",
      contacts_form_note: "Das Formular wird vorbereitet. Bis dahin kannst du uns direkt per E-Mail kontaktieren.",
      contacts_name_label: "Vorname",
      contacts_name_ph: "Dein Vorname",
      contacts_surname_label: "Nachname",
      contacts_surname_ph: "Dein Nachname",
      contacts_email_label: "Email",
      contacts_email_ph: "name@email.com",
      contacts_message_label: "Nachricht",
      contacts_message_ph: "Schreib hier...",
      contacts_send_btn: "Senden",
      contacts_info_title: "Informationen",
      contacts_info_email_label: "Email:",
      contacts_info_company_label: "Firmenname:",
      contacts_info_address_label: "Rechtssitz:",
      contacts_info_vat_label: "USt-IdNr.:",

      // POPUP
      toast_title: "Nachricht gesendet",
      toast_text: "Wir antworten so schnell wie möglich.",
      toast_ok: "OK",

      // ERRORE
      error_title: "Si è verificato un problema",
      error_lead: "L’operazione non può essere completata in questo momento.",
      error_text: "Ti invitiamo a riprovare più tardi oppure a tornare alla homepage.",
      error_btn_home: "Torna alla Home",
      error_btn_contacts: "Contattaci",

      // LOGIN
      login_title: "Kundenbereich",
      login_intro: "Melde dich an, um dein Profil zu verwalten und den Checkout zu beschleunigen.",
      login_box_title: "Anmelden",
      login_note: "Die Sitzung wird auf deinem Gerät gespeichert, damit du angemeldet bleibst.",
      login_label_email: "E-Mail",
      login_label_password: "Passwort",
      login_email_ph: "name@email.com",
      login_password_ph: "••••••••",
      login_remember: "Angemeldet bleiben",
      login_forgot: "Passwort vergessen?",
      login_btn: "Anmelden",

      login_benefits_title: "Vorteile",
      login_benefit_1: "Lieferadressen speichern",
      login_benefit_2: "Bestellungen ansehen",
      login_benefit_3: "Schnellerer Checkout",

      login_no_account_title: "Noch kein Konto?",
      login_no_account_text: "Du kannst in wenigen Schritten ein Konto erstellen.",
      login_create_account: "Konto erstellen",

      login_connected_title: "Du bist angemeldet",
      login_connected_note: "Sitzung auf dem Gerät gespeichert. Du kannst dich jederzeit abmelden.",
      login_go_cart: "Zum Warenkorb",
      login_logout: "Logout",

      login_profile_title: "Dein Profil",
      login_profile_addr: "Adresse: nicht gesetzt",
      login_profile_fav: "Favoriten: 0",
      login_profile_orders: "Bestellungen: 0",

      // REGISTRIERUNG (placeholder)
      reg_ph_name: "Dein Vorname",
      reg_ph_surname: "Dein Nachname",
      reg_ph_email: "name@email.com",
      reg_ph_password: "••••••••",
      reg_ph_password2: "••••••••",

      // REGISTRIERUNG
      reg_title: "Konto erstellen",
      reg_intro: "Registriere dich, um dein Profil zu verwalten und den Checkout zu beschleunigen.",
      reg_box_title: "Registrierung",
      reg_label_name: "Vorname",
      reg_label_surname: "Nachname",
      reg_label_email: "E-Mail",
      reg_label_password: "Passwort",
      reg_label_password2: "Passwort wiederholen",
      // REGISTRIERUNG (placeholder)
      reg_ph_name: "Dein Vorname",
      reg_ph_surname: "Dein Nachname",
      reg_ph_email: "name@email.com",
      reg_ph_password: "••••••••",
      reg_ph_password2: "••••••••",
      reg_btn_create: "Konto erstellen",

      reg_why_title: "Warum registrieren",
      reg_why_1: "Schnellere Bestellverwaltung",
      reg_why_2: "Vereinfachter Checkout",
      reg_why_3: "Zugriff auf dein persönliches Profil",
      reg_note: "Die Registrierung wird gerade aktiviert. Für Unterstützung kannst du uns per E-Mail kontaktieren.",

      // REGISTRIERUNG (placeholder)
      reg_ph_name: "Dein Vorname",
      reg_ph_surname: "Dein Nachname",
      reg_ph_email: "name@email.com",
      reg_ph_password: "••••••••",
      reg_ph_password2: "••••••••",

      // CHECKOUT / WARENKORB
      checkout_title: "Warenkorb",
      checkout_sub: "Bestellübersicht und Checkout.",
      checkout_items_title: "Artikel",
      checkout_ship_hint: "Sendungsverfolgung 24/48h",
      checkout_continue: "← Weiter einkaufen",
      checkout_clear: "Warenkorb leeren",
      checkout_tip: "Tipp: Füge ein Parfum aus dem Katalog hinzu, um zu beginnen.",
      checkout_summary_title: "Übersicht",
      checkout_subtotal_label: "Zwischensumme",
      checkout_shipping_label: "Versand",
      checkout_total_label: "Gesamt",
      checkout_ship_method: "Versandart",
      checkout_ship_standard: "Standard (2-3 Tage) - Kostenlos",
      checkout_ship_express: "Express (24/48h) - 6 €",
      checkout_btn: "Zum Checkout",
      checkout_payments_note: "Akzeptierte Zahlungen: PayPal · Visa · Mastercard · Überweisung",
      checkout_toast_title: "Checkout nicht verfügbar",
      checkout_toast_text: "Die Zahlung ist in dieser Version nicht aktiv. Der Checkout wird in einer späteren Phase verbunden.",

      checkout_alert_disabled: "Die Zahlung ist in dieser Version nicht aktiv. Der Checkout wird in einer späteren Phase verbunden.",

      error_title: "Ein Problem ist aufgetreten",
      error_lead: "Der Vorgang kann momentan nicht abgeschlossen werden.",
      error_text: "Bitte versuche es später erneut oder kehre zur Startseite zurück.",
      error_btn_home: "Zur Startseite",
      error_btn_contacts: "Kontakt"

    }
  };

  function getLang() {
    return localStorage.getItem("thp_lang") || "it";
  }

  function ensureCart() {
    const link =
      document.getElementById("navCartLink") ||
      document.querySelector('a.nav-link.nav-cta[href="checkout.html"]');
    if (!link) return;

    const raw = (link.textContent || "").trim();
    const m = raw.match(/(\d+)\s*$/);
    const count = m ? m[1] : "";

    if (!link.querySelector('[data-i18n="nav_cart"]')) {
      link.innerHTML =
        '<span data-i18n="nav_cart">Carrello</span><span id="cartCount"></span>';
    }
    const cc = link.querySelector("#cartCount");
    if (cc) cc.textContent = count ? ` ${count}` : "";
  }

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.it;
    document.documentElement.lang = lang;

    if (dict.page_title) document.title = dict.page_title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict.page_desc) metaDesc.setAttribute("content", dict.page_desc);

    ensureCart();

    // placeholder tramite data-i18n-placeholder (es: registrazione.html)
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key || !dict[key]) return;
      el.setAttribute("placeholder", dict[key]);
    });

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!dict[key]) return;

      const tag = (el.tagName || "").toUpperCase();

      if (tag === "INPUT" || tag === "TEXTAREA") {
        if (el.hasAttribute("placeholder")) {
          el.setAttribute("placeholder", dict[key]);
          return;
        }
        el.value = dict[key];
        return;
      }

      el.textContent = dict[key];
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });
  }

  function setLang(lang) {
    localStorage.setItem("thp_lang", lang);
    applyLang(lang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });
    applyLang(getLang());
  });
})();
