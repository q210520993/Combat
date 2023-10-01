// 当前js被加载或重载时触发的函数
function plugindir(strplu) {
    const tool = Packages.com.skillw.pouvoir.api.script.ScriptTool
    return tool.getPlugin(strplu).getDataFolder()
}
function copyfolder(source, newfiles) {
    const file = Packages.java.io.File
    const files = Packages.java.nio.file.Files
    if (!newfiles.exists()) {newfiles.mkdirs()} else {return}
    const Arrays = Packages.java.util.Arrays
    const ffffff = Arrays.asList(source.listFiles())
    if(ffffff != null){
        ffffff.forEach(function(bbb){
            print(bbb)
            const target = new file(newfiles, bbb.getName())
            if(bbb.isDirectory()){
                copyfolder(bbb, target)
            } else {
                files.copy(bbb.toPath(), target.toPath());
            }
        })
    }
}
function getFillList(Jfile) {
    const Arrays = Packages.java.util.Arrays
    const ArrayList = Packages.java.util.ArrayList
    const fff = Arrays.asList(Jfile.listFiles())
    const YamlConfiguration = Packages.org.bukkit.configuration.file.YamlConfiguration
    const list = new ArrayList()
    fff.forEach(function(file) {
        if (file.isDirectory()) {
            list.addAll(getFillList(file))
        } else {
            list.add(YamlConfiguration.loadConfiguration(file))
        }
    })
    return list
}
function getAbsoluteParentFile(file) {
    return file.getParentFile().getAbsoluteFile()
}