LOR panel - simple web-extension for navigate on [linux.org.ru](https://linux.org.ru)

### Features:
* quick go to top and bottom of the page
* quick go to tracker
* autoscrolling to last read comment

### Firefox install

From signed XPI [lor_panel-0.4-an+fx.xpi](https://github.com/unreg/lorpa/releases/download/0.4/lor_panel-0.4-an+fx.xpi)

Temporary install from source:
* get source code
```sh
git clone https://github.com/unreg/lorpa.git
```
* open Firefox `about:debugging` page
* select `This Firefox` tab
* press `Load Temporary Add-on`
* select `manifest.json` from source code and confirm choice


### Chrome install

Temporary install from source:
* get source code
```sh
git clone https://github.com/unreg/lorpa.git
```
* open Chrome `More tools` - `Extensions` page
* press `Load unpacked`
* select source code directory

### Uninstall

* clear local storage for `LOR panel` web-extension
* remove `LOR panel` web-extension

### Known issues

* On low powered hardware Firefox periodical load one core 100%

Solution: clear local storage for `LOR panel` web-extension
