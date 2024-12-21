import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Impressum() {
    return(
        <>
        <Header/>
        <section style={{maxWidth:'1200px', margin:'auto', padding:'140px 15px 70px 15px'}}>
            <h1 style={{textAlign:'center'}}>Datenschutz/Impressum</h1>
            <div>
                <h2>Kontaktadresse</h2>
                <div>
                    schellenberg.immo GmbH <br/>
                    Scherrstrasse 3, 8006 Zürich <br/>
                    044 244 60 60 <br/>
                    www.schellenberg.immo
                </div>
                <h2>Vertretungsberechtigte Personen</h2>
                <div>Phillip Schellenberg</div>
                <h2>Handelsregistereintrag</h2>
                <div>
                    Eingetragener Firmenname: schellenberg.immo GmbH <br/>
                    Nummer: CHE-276.311.350 <br/>
                    Handelsregisteramt: Handelsregisteramt des Kantons Zürich
                </div>
                <h2>Haftungsausschluss</h2>
                <div>
                    Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen 
                    Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit 
                    der Informationen. Haftungsansprüche gegen den Autor wegen Schäden 
                    materieller oder immaterieller Art, welche aus dem Zugriff oder der 
                    Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch 
                    Missbrauch der Verbindung oder durch technische Störungen entstanden 
                    sind, werden ausgeschlossen. Alle Angebote sind unverbindlich. Der 
                    Autor behält es sich ausdrücklich vor, Teile der Seiten oder das 
                    gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, 
                    zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
                </div>
                <h2>Haftung für Links</h2>
                <div>
                    Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres 
                    Verantwortungsbereichs Es wird jegliche Verantwortung für solche 
                    Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten 
                    erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
                </div>
                <h2>Urheberrechte</h2>
                <div>
                    Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder 
                    anderen Dateien auf der Website gehören ausschliesslich der Firma Linarys 
                    GmbH oder den speziell genannten Rechtsinhabern. Für die Reproduktion 
                    jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger 
                    im Voraus einzuholen.
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}