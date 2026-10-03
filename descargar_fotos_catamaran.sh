#!/usr/bin/env bash
# Descarga 2 fotos de Pixabay a assets/ para Catamarán y Snorkel.
# No usa git. Correr desde la raíz del repo wavepoint:
#   PIXABAY_KEY=tu_clave bash descargar_fotos_catamaran.sh
# Clave gratis: https://pixabay.com/api/docs/

set -e

if [ -z "$PIXABAY_KEY" ]; then
  echo "Falta la clave. Usa: PIXABAY_KEY=tu_clave bash descargar_fotos_catamaran.sh"
  exit 1
fi

mkdir -p assets

# descargar "busqueda" "archivo_destino" [posicion del resultado, 1 por defecto]
descargar() {
  local busqueda="$1" destino="$2" pos="${3:-1}"
  local url
  url=$(curl -s -G "https://pixabay.com/api/" \
    --data-urlencode "key=$PIXABAY_KEY" \
    --data-urlencode "q=$busqueda" \
    --data-urlencode "image_type=photo" \
    --data-urlencode "orientation=horizontal" \
    --data-urlencode "min_width=1600" \
    --data-urlencode "safesearch=true" \
    --data-urlencode "per_page=10" \
    | python3 -c "
import sys, json
d = json.load(sys.stdin)
h = d.get('hits', [])
i = int(sys.argv[1]) - 1
print(h[i]['largeImageURL'] if len(h) > i else '')
" "$pos")
  if [ -z "$url" ]; then
    echo "Sin resultados para: $busqueda (posicion $pos)"
    exit 1
  fi
  curl -s -L -o "assets/$destino" "$url"
  echo "Listo: assets/$destino  <-  $url"
}

# Portada: catamaran navegando. Descripcion: snorkel en mar tropical.
# Si una foto no te gusta, cambia el tercer numero (2, 3, 4...) y vuelve a correr.
descargar "catamaran sailing sea" "catamaran-portada.jpg" 1
descargar "snorkeling tropical sea" "catamaran-descripcion.jpg" 1

echo ""
echo "Abre assets/catamaran-portada.jpg y assets/catamaran-descripcion.jpg y revisalas."
echo "Luego aplica los patches (ver instrucciones) y prueba con: python3 -m http.server 4173"
