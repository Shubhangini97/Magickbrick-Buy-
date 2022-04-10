'Datatable.AddSheet "module"
'Datatable.ImportSheet "C:\Users\sfjbs\Documents\Sprint 2 -New\KeywordDriven Framework\Organizer\Organizer.xlsx",1,"module"
'Datatable.ImportSheet "C:\Users\sfjbs\Documents\Sprint 2 -New\KeywordDriven Framework\Organizer\Organizer.xlsx",2,"Testcase"
'Datatable.ImportSheet "C:\Users\sfjbs\Documents\Sprint 2 -New\KeywordDriven Framework\Organizer\Organizer.xlsx",3,"TestStep"


'Transaction point start here
Services.StartTransaction "tsr"

 Mrowcount = datatable.GetSheet("Action1").GetRowCount
msgbox Mrowcount 

For i = 1 To Mrowcount Step 1
    Datatable.SetCurrentRow(i)
        Modexe = Datatable("ModuleExe.","Action1")
        msgbox Modexe
    
    If ModExe= "Y" Then
        ModID = Datatable("ModuleID","Action1")
        msgbox ModID
        
        
        trowcount = datatable.GetSheet("Action2").GetRowCount
        msgbox trowcount
        
        For j = 1 To trowcount Step 1
            Datatable.SetCurrentRow(j)
            
            If ModID = Datatable("Module ID","Action2") and Datatable("TestCase Exe.","Action2") ="Y" Then
            TestCaseID = Datatable("TestCase ID","Action2")
            msgbox TestcaseID
            
            tsrowcount = Datatable.GetSheet("Action3").GetRowCount
            msgbox Tsrowcount
            For k = 1 To tsrowcount Step 1
                Datatable.SetCurrentRow(k)
                
                If TestCaseID = Datatable("TestCaseID","Action3") Then
                    Keyword = Datatable("Keyword","Action3")
                    msgbox keyword
                    
                    Select Case (Keyword)
                        Case "ou"
                        Call OpenURL()
                      
                        Case "bo"
                        Call BuyOption()
                        
                        Case "rt"
                        Call RatesTrend()
                        
                    
                        Case "ct"
                        Call Closetab()
                        
                    End select
                End If
            Next   
            End If
        Next
    End If
Next

'Transaction point end here
Services.EndTransaction "tsr"


 @@ script infofile_;_ZIP::ssf22.xml_;_
