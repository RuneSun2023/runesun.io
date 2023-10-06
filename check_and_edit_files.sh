#!/bin/bash

# Liste af filer du ønsker at tjekke og redigere
files=("basisstruktur.txt" "index.html" "main.html5.html")

# Gennemgå hver fil i listen
for file in "${files[@]}"; do
  # Vis indholdet af filen med 'cat'
  echo "=== Viser indholdet af $file ==="
  cat $file
  
  # Spørge brugeren, om de ønsker at redigere filen
  read -p "Ønsker du at redigere denne fil? (y/n): " answer
  if [ "$answer" == "y" ]; then
    # Åbn filen i 'nano' til redigering
    nano $file
  fi
done

