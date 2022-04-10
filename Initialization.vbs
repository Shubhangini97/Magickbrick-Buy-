Dim objuft


Set objuft=CreateObject("QuickTest.Application")
objuft.visible=True
objuft.launch
objuft.open("C:\Users\sfjbs\Documents\Sprint 2 -New\KeywordDriven Framework\Driver\Driver")
objuft.Test.Run
objuft.Test.close
objuft.quit
set objuft=nothing