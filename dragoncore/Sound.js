const InfixContext = static("InfixContext")
PacketSender = find("eos.moe.dragoncore.network.PacketSender")
UUID = find("java.util.UUID")
//@AsahiPrefix(-name DragonPlaySound -namespace DragonCore)
function DragonPlaySound(lexer) {
  const quest = (function() {
    if(lexer.peek() == "[" || lexer.peek() == "{") return lexer.questTypeMap()
    return null
  })()
  return result(function (context){
    return PacketSender.sendPlaySound(
      quest.get(context).get("player"),
      isNull(quest.get(context).get("soundKey"), UUID.randomUUID()),
      quest.get(context).get("soundFile"),
      isNull(quest.get(context).get("volume"), 1.0),
      isNull(quest.get(context).get("pitch"), 1.0),
      isNull(quest.get(context).get("loop"), false),
      quest.get(context).get("x"),
      quest.get(context).get("y"),
      quest.get(context).get("z")
    )
  })
}
//@AsahiPrefix(-name DragonStopSound -namespace DragonCore)
function DragonPlaySound(lexer) {
  const Player = lexer.questObj()
  const key = lexer.questString()
  return result(function (context){
    return PacketSender.sendStopSound(
      Player,
      key
    )
  })
}
function isNull(any,anys) {
  if(any == null){
    return anys
  }
  return any
}