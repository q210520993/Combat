// 当前js被加载或重载时触发的函数

JavaArray = Java.type("java.lang.Object[]");
AsahiAPI = PouStatic("AsahiAPI")

/**
 * @description 构建Java Map
 * @author Glom
 * @date 2022/12/20
 * @param {*} json JSON
 */
function mapOf(json) {
    const map = new java.util.HashMap();
    for (var key in json) {
        map.put(key, json[key]);
    }
    return map;
}

AsahiContext = PouStatic("AsahiContext");

/**
 * 解析文本中的Asahi 例如:
 * "测试Asahi: {random 0 to 1}"
 * @author Glom
 * @date 2022/12/20
 * @param string 含Asahi的文本
 * @return 解析后的文本
 */

function analysis(string) {
    return analysis(string, ["common", "lang", "bukkit"], null);
}

/**
 * 解析文本中的Asahi 例如:
 * - "测试Asahi: {random 0 to 1}"
 * @author Glom
 * @date 2022/12/20
 * @param string 含Asahi的文本
 * @param context 上下文
 * @return String 解析后的文本
 */

function analysis(string, namespacesJs, json) {
    const context = AsahiContext.create();
    context.putAll(mapOf(json));
    const namespaces = new StringArray(namespacesJs.length);
    for (var index = 0; index < namespacesJs.length; index++) {
        namespaces[index] = namespacesJs[index];
    }
    return AsahiAPI.analysis(string, context, namespaces);
}

StringArray = Java.type("java.lang.String[]");

/**
 * 执行一段Asahi
 *
 * @author Glom
 * @date 2022/12/20
 * @param str Asahi段
 * @param namespaces 命名空间
 * @param json JSON, 上下文
 * @return 结果(可能为null)
 */
function evalAsahi(str, namespacesJs, json) {
    const context = AsahiContext.create();
    context.putAll(mapOf(json));
    const namespaces = new StringArray(namespacesJs.length);
    for (var index = 0; index < namespacesJs.length; index++) {
        namespaces[index] = namespacesJs[index];
    }
    return AsahiAPI.asahi(str, context, namespaces);
}

function asahi(str, namespaces, json) {
    return evalAsahi(str, namespaces, json);
}