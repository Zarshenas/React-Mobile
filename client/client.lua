local function toggleNuiFrame(shouldShow)
  SetNuiFocus(shouldShow, shouldShow)
  SendReactMessage('setVisible', shouldShow)
end

RegisterCommand('show-nui', function()
  toggleNuiFrame(true)
end)

RegisterNUICallback('showTheUi', function(_, cb)
  toggleNuiFrame(true)
  cb({})
end)

RegisterNUICallback('hideFrame', function(_, cb)
  toggleNuiFrame(false)
  cb({})
end)

local player_name = "Gholam Heshmati"

RegisterNUICallback("GetPlayerName", function(data, cb)
  cb(player_name)
end)

local recentCalls_data ={
  {
      id=1,
      name="mmd",
      phoneNumber="0917251159",
      time="1:32",
      callType="missed"
  },
  {
      id=2,
      name="gholammm",
      phoneNumber="0917251140",
      time="2:02",
      callType="outgoing"
  },
  {
      id=3,
      name="Noob Sagdididriii",
      phoneNumber="0917251140",
      time="00:03",
      callType="incoming"
  }
}
RegisterNUICallback('GetRecentCalls', function(data, cb)
  cb(recentCalls_data)
end)

local userPhoneSettings ={
  phoneWallpaper="10",
  frameColor="#000000",
  ringtone="1",
  airplaneMode=true,
}

RegisterNUICallback('GetPhoneSettings', function(data, cb)
  cb(userPhoneSettings)
end)

RegisterNUICallback('UpdatedSetting', function(data, cb)
  userPhoneSettings = data
end)


local userChats = {
  ['09172511403'] = {
    {text="Salam",time="15:16",isSelfMessage= true},
    {text="lorem ipsume naw adawdaw wdwddkfd dfs bain nigga game jsssi kdf",time="15:20",isSelfMessage= true},
    {text="khoobi",time="17:17",isSelfMessage= true},
    {text="khoobam",time="18:16",isSelfMessage= true},
    {text="niga",time="19:16",isSelfMessage= false},
    {text="fsdf",time="20:17",isSelfMessage= true},
    {text="fefewfwfwfwef",time="11:16",isSelfMessage= false},
    {text="fefewfwfwfwef",time="11:16",isSelfMessage= false},
    {text="fefewfwfwfwef",time="11:16",isSelfMessage= false},
    {text="fefewfwfwfwef",time="11:16",isSelfMessage= false},
    {text="fefewfwfwfwef",time="11:16",isSelfMessage= false},
    {text="fefewfwfwfwef",time="11:16",isSelfMessage= false},
    {text="fefewfwfwfwef",time="11:16",isSelfMessage= false},
    {text="fefewfwfwfwef",time="11:16",isSelfMessage= false},
    {text="fefewfwfwfwef",time="11:16",isSelfMessage= false},
  },
  ['09172511402'] = {
    {text="09172511402",time="15:16",isSelfMessage= true},
    {text="lorem ipsume naw adawdaw wdwddkfd dfs bain nigga game jsssi kdf",time="15:20",isSelfMessage= true},
    {text="khoobi",time="17:17",isSelfMessage= false},
    {text="khoobam",time="18:16",isSelfMessage= true},
    {text="niga",time="19:16",isSelfMessage= false},
    {text="fsdf",time="20:17",isSelfMessage= true},
    {text="fefewfwfwfwef",time="11:16",isSelfMessage= false}
  },
  ['09172511401'] = {
    {text="01",time="15:16" , isSelfMessage= true},
    {text="lorem ipsume naw adawdaw wdwddkfd dfs bain nigga game jsssi kdf",time="15:20" ,isSelfMessage= false},
    {text="khoobi",time="17:17", isSelfMessage= true},
    {text="khoobam",time="18:16", isSelfMessage= false},
    {text="niga",time="19:16", isSelfMessage= true},
    {text="fsdf",time="20:17", isSelfMessage= false},
    {text="fefewfwfwfwef",time="11:16", isSelfMessage= true}
  }
}

RegisterNUICallback("GetSelectedDmChats" , function(data , cb)
  cb(userChats)
end)