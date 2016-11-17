if [ -d "themes/redbrick-theme" ]; then
	exit 0;
else
  git clone https://github.com/redbrick/hexo-theme-icarus.git themes/redbrick-theme
fi
