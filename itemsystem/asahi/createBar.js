const InfixContext = static("InfixContext")
const createBar = find(">taboolib.common5.util.StringQualifyKt")
//@AsahiPrefix(-name createBar -namespace common)
function testfun(lexer) {
  const quest = (function() {
    if(lexer.peek() == "[" || lexer.peek() == "{") return lexer.questTypeMap()
    return null
  })()
  return result(function (context){
    const empty = isNull(quest.get(context).get("empty"), "&7|")
    const fill = isNull(quest.get(context).get("fill"), "&a|")
    const length = isNull(quest.get(context).get("length"), 20)
    const percent = isNull(quest.get(context).get("percent"), 0.0)
    return createBar.createBar(empty, fill, length, percent)
  })
}
function isNull(any,anys) {
  if(any == null){
    return anys
  }
  return any
}