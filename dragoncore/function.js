const InfixContext = static("InfixContext")
PacketSender = find("eos.moe.dragoncore.network.PacketSender")
UUID = find("java.util.UUID")
//@AsahiPrefix(-name DragonRunFunction -namespace DragonCore)
function DragonRunFunction(lexer) {
  const quest = (function() {
    if(lexer.peek() == "[" || lexer.peek() == "{") return lexer.questTypeMap()
    return null
  })()
  return result(function (context){
    return PacketSender.sendStopSound(
      quest.get(context).get("player"),
      quest.get(context).get("GuiName"),
      quest.get(context).get("function"),
      isNull(quest.get(context).get("isAsync"), true)
    )
  })
}
function isNull(any,anys) {
  if(any == null){
    return anys
  }
  return any
}