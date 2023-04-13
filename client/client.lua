local function toggleNuiFrame(shouldShow)
  SetNuiFocus(shouldShow, shouldShow)
  SendReactMessage('setVisible', shouldShow)
end

RegisterCommand('show-nui', function()
  toggleNuiFrame(true)
  debugPrint('Show NUI frame')
end)

RegisterNUICallback('hideFrame', function(_, cb)
  toggleNuiFrame(false)
  debugPrint('Hide NUI frame')
  cb({})
end)

local player_name = "Gholam Heshmati"

RegisterNUICallback("GetPlayerName", function(data, cb)
  cb(player_name)
end)

RegisterNUICallback('getClientData', function(data, cb)
  debugPrint('Data sent by React', json.encode(data))

-- Lets send back client coords to the React frame for use
  local curCoords = GetEntityCoords(PlayerPedId())

  local retData <const> = { x = curCoords.x, y = curCoords.y, z = curCoords.z }
  cb(retData)
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
      name="gholam",
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
  phoneWallpaper="5",
  frameColor="#000000",
  ringtone="3",
  airplaneMode=true,
}

RegisterNUICallback('GetPhoneSettings', function(data, cb)
  cb(userPhoneSettings)
end)