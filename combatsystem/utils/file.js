// 当前js被加载或重载时触发的函数
load("plugins/Atziluth/scripts/combatsystem/functions/functions-files.js");
function loadFilesAAA() {
    const file = Packages.java.io.File
    const dir = plugindir("Atziluth")
    const Paths = Packages.java.nio.file.Paths
    const dirx = new file(dir + java.io.File.separator + "scripts" + java.io.File.separator + "combatsystem" + java.io.File.separator + "ressources")
    // const Arrays = Packages.java.util.Arrays
    // const ArrayList = Packages.java.util.ArrayList
    // const fff = Arrays.asList(dirx.listFiles())
    // const list = new ArrayList()
    // fff.forEach(function(xxx) {
    //     print(xxx)
    // });
    const newdir = Paths.get(getAbsoluteParentFile(dir) + java.io.File.separator + "CombatSystem").toFile()
    copyfolder(dirx, newdir)
}