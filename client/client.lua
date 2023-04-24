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


function print_table(node)
  local cache, stack, output = {},{},{}
  local depth = 1
  local output_str = "{\n"

  while true do
      local size = 0
      for k,v in pairs(node) do
          size = size + 1
      end

      local cur_index = 1
      for k,v in pairs(node) do
          if (cache[node] == nil) or (cur_index >= cache[node]) then

              if (string.find(output_str,"}",output_str:len())) then
                  output_str = output_str .. ",\n"
              elseif not (string.find(output_str,"\n",output_str:len())) then
                  output_str = output_str .. "\n"
              end

              -- This is necessary for working with HUGE tables otherwise we run out of memory using concat on huge strings
              table.insert(output,output_str)
              output_str = ""

              local key
              if (type(k) == "number" or type(k) == "boolean") then
                  key = "["..tostring(k).."]"
              else
                  key = "['"..tostring(k).."']"
              end

              if (type(v) == "number" or type(v) == "boolean") then
                  output_str = output_str .. string.rep('\t',depth) .. key .. " = "..tostring(v)
              elseif (type(v) == "table") then
                  output_str = output_str .. string.rep('\t',depth) .. key .. " = {\n"
                  table.insert(stack,node)
                  table.insert(stack,v)
                  cache[node] = cur_index+1
                  break
              else
                  output_str = output_str .. string.rep('\t',depth) .. key .. " = '"..tostring(v).."'"
              end

              if (cur_index == size) then
                  output_str = output_str .. "\n" .. string.rep('\t',depth-1) .. "}"
              else
                  output_str = output_str .. ","
              end
          else
              -- close the table
              if (cur_index == size) then
                  output_str = output_str .. "\n" .. string.rep('\t',depth-1) .. "}"
              end
          end

          cur_index = cur_index + 1
      end

      if (size == 0) then
          output_str = output_str .. "\n" .. string.rep('\t',depth-1) .. "}"
      end

      if (#stack > 0) then
          node = stack[#stack]
          stack[#stack] = nil
          depth = cache[node] == nil and depth + 1 or depth - 1
      else
          break
      end
  end

  -- This is necessary for working with HUGE tables otherwise we run out of memory using concat on huge strings
  table.insert(output,output_str)
  output_str = table.concat(output)

  print(output_str)
end


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