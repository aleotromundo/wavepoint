# Archivos que no se suben al servidor

Esta carpeta contiene material de trabajo, documentación, herramientas internas, prototipos, imágenes originales/archivadas y archivos de licencia. No copiar esta carpeta al servidor FTP ni publicarla en producción.

La web publicada queda en la raíz del repositorio: páginas HTML, CSS, JavaScript, `assets/` (recursos usados por esas páginas), `Enlaces/`, `api/`, `robots.txt`, `sitemap.xml` y la configuración de despliegue.

Los archivos de configuración del repositorio (`.gitignore`, `.vercelignore` y `.git/`) permanecen en la raíz porque son necesarios para trabajar con Git y controlar el despliegue, aunque tampoco se suben por FTP.
