#!/bin/bash

# Funktion til at rekursivt gå gennem mapper og vise indhold
explore_dir() {
    for entry in "$1"/*; do
        if [ -d "$entry" ]; then
            echo "=== Mappe: $entry ==="
            explore_dir "$entry"
        elif [ -f "$entry" ]; then
            echo "=== Fil: $entry ==="
            cat "$entry"
        fi
    done
}

# Startmappen
start_dir="./"  # Dette kan ændres til en anden mappe

# Kør funktionen
explore_dir "$start_dir"
