#! /bin/sh

rsync -val -e 'ssh -i /home/ubuntu/.ssh/id_zeus.redbrick.dcu.ie' * circle@zeus.redbrick.dcu.ie:/var/www/redbrick
