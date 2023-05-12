branch=$(echo ${GITHUB_REF#refs/heads/})
branch_port_file=/root/branch-vhost.csv

function obtem_porta () {
numero_aleatorio=$((RANDOM % 10001 + 40000))
if grep $numero_aleatorio $branch_port_file
then
    obtem_porta()
else
    echo ${numero_aleatorio}
}

if grep $branch $branch_port_file
then 
    port=$(grep $branch /root/branch-vhost.csv | cut -d, -f2)
else
    porta=$(obtem_porta())
fi
