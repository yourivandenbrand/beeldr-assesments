# Beelder Opdracht 2 (Version Control)

## Omschrijving

Je werkt in het scrumteam en afgelopen sprint hebben jullie een paar
bugfixes gedaan bij een website. Ze zijn getest en goed bevonden,
dus jij bent nu gevraagd om de fixes op productie te zetten.
* De versie die nu op productie staat is `1.3.8`.
* Jullie werk staat in de git-branch `release/1.3.x`.
* Je komt erachter dat iemand uit een ander team ook commits
heeft gedaan in deze branch, maar deze mogen nog niet live.
Beschrijf wat je zou doen om jullie code goed op productie te
krijgen.

## Oplossing

Ik zou in deze een nieuwe PR branche `pull-request/1.3.x-master` aan maken, daar de master in mergen, uit de `release/1.3.x` de commits cherrypicking die door ons team zijn gemaakt. Dan testen of de pull-request branche blijft werken als alleen onze commits erin zitten samen met master. Alles oke? Dan pas de nieuwe PR branche mergen met master.