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
    {text="Salam",time="15:16",isSelfMessage= true ,isUnread=false},
    {text="lorem ipsume naw adawdaw wdwddkfd dfs bain nigga game jsssi kdf",time="15:20",isSelfMessage= true ,isUnread=false},
    {text="khoobi",time="17:17",isSelfMessage= true ,isUnread=false},
    {text="khoobam",time="18:16",isSelfMessage= true ,isUnread=false},
    {text="niga",time="19:16",isSelfMessage= false ,isUnread=false},
    {text="fsdf",time="20:17",isSelfMessage= true ,isUnread=false},
    {text="fefewfwfwfwef",time="11:16",isSelfMessage= false ,isUnread=false},
    {text="fefewfwfwfwef",time="11:16",isSelfMessage= false ,isUnread=false},
    {text="fefewfwfwfwef",time="11:16",isSelfMessage= false ,isUnread=false},
    {text="fefewfwfwfwef",time="11:16",isSelfMessage= false ,isUnread=false},
    {text="fefewfwfwfwef",time="11:16",isSelfMessage= false ,isUnread=false},
    {text="fefewfwfwfwef",time="11:16",isSelfMessage= false ,isUnread=false},
    {text="fefewfwfwfwef",time="11:16",isSelfMessage= false ,isUnread=false},
    {text="fefewfwfwfwef",time="11:16",isSelfMessage= false ,isUnread=false},
    {text="fefewfwfwfwef",time="11:16",isSelfMessage= false ,isUnread=true},
  },
  ['09172511402'] = {
    {text="09172511402",time="15:16",isSelfMessage= true ,isUnread=false},
    {text="lorem ipsume naw adawdaw wdwddkfd dfs bain nigga game jsssi kdf",time="15:20",isSelfMessage= true ,isUnread=false},
    {text="khoobi",time="17:17",isSelfMessage= false ,isUnread=false},
    {text="khoobam",time="18:16",isSelfMessage= true ,isUnread=false},
    {text="niga",time="19:16",isSelfMessage= false ,isUnread=true},
    {text="fsdf",time="20:17",isSelfMessage= true ,isUnread=true},
    {text="fefewfwfwfwef",time="11:16",isSelfMessage= false ,isUnread=true}
  },
  ['09172511401'] = {
    {text="01",time="15:16" , isSelfMessage= true ,isUnread=false},
    {text="lorem ipsume naw adawdaw wdwddkfd dfs bain nigga game jsssi kdf",time="15:20" ,isSelfMessage= false ,isUnread=false},
    {text="khoobi",time="17:17", isSelfMessage= true ,isUnread=false},
    {text="khoobam",time="18:16", isSelfMessage= false ,isUnread=false},
    {text="niga",time="19:16", isSelfMessage= true ,isUnread=false},
    {text="fsdf",time="20:17", isSelfMessage= false ,isUnread=true},
    {text="fefewfwfwfwef",time="11:16", isSelfMessage= true ,isUnread=true}
  }
}

RegisterNUICallback("GetSelectedDmChats" , function(data , cb)
  cb(userChats)
end)

RegisterNUICallback('SendMessage' , function(data , cb)
  local athorizeNumber =data['athorize']
  local userSentMessege = data['userMessageInfo']
  for k,v in pairs(userChats) do
    if k == athorizeNumber then
      table.insert(v , userSentMessege)
    end
  end
  
  cb(userChats)

end)

local lastMessages = {
      ['09172511401'] = {
            test1="09172511401",
            lastMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, praesentium!",
            unread="2",
            priority ="1",
        },
      ['09172511402'] = {
            test2="09172511402",
            lastMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, praesentium!",
            unread="0",
            priority ="3",
        },
      ['09172511403'] = {
            test3="09172511403",
            lastMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, praesentium!",
            unread="4",
            priority ="2",
        }
      }

-- RegisterNUICallback('GetLastMessegeInfo' , function(data , cb)
--   for k,v in pairs(userChats) do
--     for j,c in pairs(v) do
--       for q,g in pairs(c) do
--         print(g)
--       end
--     end
--   end
-- end)

RegisterNUICallback('GetLastMessegeInfo' , function(data , cb)
  cb(lastMessages)
end)