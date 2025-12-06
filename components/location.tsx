"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Location() {
  const handleMapClick = () => {
    window.open("https://maps.google.com/?q=Casablanca+Ain+Chock+Bld+Qods+The+Gold+Center", "_blank")
  }

  const handleWazeClick = () => {
    window.open("https://maps.google.com/?q=Casablanca+Ain+Chock+Bld+Qods+The+Gold+Center", "_blank")
  }

  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Notre <span className="text-accent">Localisation</span>
          </h2>
          <p className="text-lg text-muted-foreground">Visitez nos bureaux ou contactez-nous pour une rencontre</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Carte Google Maps */}
          <div className="rounded-2xl overflow-hidden border border-accent/20 shadow-2xl h-96 lg:h-full">
        <iframe 
  width="100%" 
  height="100%" 
  frameborder="0" 
  scrolling="no" 
  src="https://www.openstreetmap.org/export/embed.html?bbox=-7.6180%2C33.5325%2C-7.6120%2C33.5360&layer=mapnik&marker=33.53425,-7.61514">
</iframe>

          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="bg-card border border-accent/10 rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Adresse</h3>
                  <p className="text-muted-foreground">
                    Casablanca, Ain Chock
                    <br />
                    Bld Qods - The Gold Center
                    <br />
                    Étage 1, Bureau 2
                  </p>
                </div>
              </div>
            </div>

            <div
              onClick={() => window.open("https://wa.me/212652768993", "_blank")}
              className="bg-card border border-accent/10 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 cursor-pointer hover:bg-card/80"
            >
              <div className="flex items-start gap-4">
                <Phone className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Téléphone</h3>
                  <p className="text-muted-foreground hover:text-accent transition-colors">+212 652 768 993</p>
                  <p className="text-sm text-accent/70 mt-1">Cliquez pour WhatsApp</p>
                </div>
              </div>
            </div>

            <div
              onClick={() =>
                window.open("https://mail.google.com/mail/?view=cm&fs=1&to=contact@prestigia-agency.com", "_blank")
              }
              className="bg-card border border-accent/10 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 cursor-pointer hover:bg-card/80"
            >
              <div className="flex items-start gap-4">
                <Mail className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground hover:text-accent transition-colors">
                    contact@prestigia-agency.com
                  </p>
                  <p className="text-sm text-accent/70 mt-1">Cliquez pour Gmail</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-accent/10 rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Horaires</h3>
                  <p className="text-muted-foreground">
                    Lundi - Vendredi: 9h00 - 18h00
                    <br />
                    Samedi: 10h00 - 14h00
                    <br />
                    Dimanche: Fermé
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
